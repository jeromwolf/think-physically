// BaseSimulator.ts - 물리 시뮬레이터 기본 클래스
// ThinkPhysically 핵심 시스템

import { badgeSystem } from '../badges/BadgeSystem'
import { progressSystem } from '../progress/ProgressSystem'

export interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  color: string
  size?: number
}

export interface SimulatorConfig {
  id: string
  name: string
  canvasWidth: number
  canvasHeight: number
  backgroundColor?: string
  challenges?: ChallengeConfig[]
}

export interface ChallengeConfig {
  id: string
  name: string
  targetTime: number
  badgeId?: string
}

export interface SimulatorState {
  isRunning: boolean
  isPaused: boolean
  isGameOver: boolean
  currentTime: number
  bestTime: number
}

export abstract class BaseSimulator {
  protected container: HTMLElement | null = null
  protected canvas: HTMLCanvasElement | null = null
  protected ctx: CanvasRenderingContext2D | null = null
  protected animationId: number | null = null

  protected state: SimulatorState = {
    isRunning: false,
    isPaused: false,
    isGameOver: false,
    currentTime: 0,
    bestTime: 0,
  }

  protected particles: Particle[] = []
  protected config: SimulatorConfig

  protected onStateChange?: (state: SimulatorState) => void
  protected onGameOver?: (time: number, isNewRecord: boolean) => void
  protected onBadgeUnlocked?: (badgeId: string) => void

  private lastTime: number = 0
  private accumulatedTime: number = 0
  private readonly FIXED_TIMESTEP = 0.02

  constructor(config: SimulatorConfig) {
    this.config = config
    this.loadBestTime()
  }

  mount(container: HTMLElement): void {
    this.container = container
    this.setupCanvas()
    this.setupControls()
    this.initialize()
    this.startRenderLoop()
  }

  unmount(): void {
    this.stopGameLoop()
    this.cleanup()
    if (this.container) {
      this.container.innerHTML = ''
    }
  }

  protected abstract initialize(): void
  protected abstract update(deltaTime: number): void
  protected abstract draw(): void
  protected abstract cleanup(): void
  protected abstract setupControls(): void
  protected abstract checkGameOver(): boolean

  protected setupCanvas(): void {
    if (!this.container) return

    this.canvas = document.createElement('canvas')
    this.canvas.width = this.config.canvasWidth
    this.canvas.height = this.config.canvasHeight
    this.canvas.style.cssText = `
      display: block;
      max-width: 100%;
      border-radius: 12px;
    `
    this.canvas.tabIndex = 0

    this.ctx = this.canvas.getContext('2d')
    this.container.appendChild(this.canvas)
    this.canvas.focus()
  }

  start(): void {
    if (this.state.isRunning) return

    this.reset()
    this.state.isRunning = true
    this.state.isGameOver = false
    this.lastTime = performance.now()
    this.notifyStateChange()
  }

  pause(): void {
    this.state.isPaused = true
    this.notifyStateChange()
  }

  resume(): void {
    this.state.isPaused = false
    this.lastTime = performance.now()
    this.notifyStateChange()
  }

  reset(): void {
    this.state = {
      isRunning: false,
      isPaused: false,
      isGameOver: false,
      currentTime: 0,
      bestTime: this.state.bestTime,
    }
    this.particles = []
    this.initialize()
    this.notifyStateChange()
  }

  protected handleGameOver(): void {
    this.state.isRunning = false
    this.state.isGameOver = true

    const isNewRecord = this.state.currentTime > this.state.bestTime
    if (isNewRecord) {
      this.state.bestTime = this.state.currentTime
      this.saveBestTime()

      const challengeId = `${this.config.id}-challenge`
      progressSystem.updateChallengeRecord(challengeId, this.state.currentTime)
    }

    this.checkBadges()
    this.notifyStateChange()
    this.onGameOver?.(this.state.currentTime, isNewRecord)
  }

  protected checkBadges(): void {
    const challenges = this.config.challenges || []

    challenges.forEach(challenge => {
      if (this.state.currentTime >= challenge.targetTime) {
        const badge = badgeSystem.checkChallengeTime(this.config.id, this.state.currentTime)
        if (badge) {
          this.onBadgeUnlocked?.(badge.id)
        }
      }
    })
  }

  protected startRenderLoop(): void {
    const renderLoop = (): void => {
      this.draw()
      this.animationId = requestAnimationFrame(renderLoop)
    }
    renderLoop()
  }

  private startGameLoop(): void {
    const gameLoop = (): void => {
      if (!this.state.isRunning || this.state.isPaused) {
        return
      }

      const currentTime = performance.now()
      const frameTime = (currentTime - this.lastTime) / 1000
      this.lastTime = currentTime

      this.accumulatedTime += frameTime

      while (this.accumulatedTime >= this.FIXED_TIMESTEP) {
        this.update(this.FIXED_TIMESTEP)
        this.state.currentTime += this.FIXED_TIMESTEP
        this.accumulatedTime -= this.FIXED_TIMESTEP

        if (this.checkGameOver()) {
          this.handleGameOver()
          return
        }
      }

      this.notifyStateChange()
      requestAnimationFrame(gameLoop)
    }

    this.lastTime = performance.now()
    gameLoop()
  }

  protected stopGameLoop(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
      this.animationId = null
    }
  }

  protected notifyStateChange(): void {
    this.onStateChange?.({ ...this.state })
  }

  setOnStateChange(callback: (state: SimulatorState) => void): void {
    this.onStateChange = callback
  }

  setOnGameOver(callback: (time: number, isNewRecord: boolean) => void): void {
    this.onGameOver = callback
  }

  setOnBadgeUnlocked(callback: (badgeId: string) => void): void {
    this.onBadgeUnlocked = callback
  }

  getState(): SimulatorState {
    return { ...this.state }
  }

  protected loadBestTime(): void {
    if (typeof window === 'undefined') return
    const key = `think-physically-${this.config.id}-best`
    this.state.bestTime = parseFloat(localStorage.getItem(key) || '0')
  }

  protected saveBestTime(): void {
    if (typeof window === 'undefined') return
    const key = `think-physically-${this.config.id}-best`
    localStorage.setItem(key, this.state.bestTime.toString())
  }

  protected createParticles(
    x: number,
    y: number,
    count: number,
    color: string,
    speed: number = 5
  ): void {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed * (0.5 + Math.random()),
        vy: Math.sin(angle) * speed * (0.5 + Math.random()),
        life: 1,
        color,
        size: 2 + Math.random() * 4,
      })
    }
  }

  protected updateParticles(deltaTime: number, gravity: number = 300): void {
    this.particles = this.particles.filter(particle => {
      particle.x += particle.vx * deltaTime * 60
      particle.y += particle.vy * deltaTime * 60
      particle.vy += gravity * deltaTime
      particle.life -= deltaTime * 2

      return particle.life > 0
    })
  }

  protected drawParticles(): void {
    if (!this.ctx) return

    this.particles.forEach(particle => {
      this.ctx!.globalAlpha = particle.life
      this.ctx!.fillStyle = particle.color
      this.ctx!.beginPath()
      this.ctx!.arc(particle.x, particle.y, particle.size || 3, 0, Math.PI * 2)
      this.ctx!.fill()
    })

    this.ctx.globalAlpha = 1
  }

  protected drawBackground(): void {
    if (!this.ctx) return

    const { canvasWidth, canvasHeight, backgroundColor } = this.config

    this.ctx.fillStyle = backgroundColor || '#12121a'
    this.ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    this.ctx.strokeStyle = 'rgba(0, 245, 255, 0.05)'
    this.ctx.lineWidth = 1

    const gridSize = 30
    for (let x = 0; x <= canvasWidth; x += gridSize) {
      this.ctx.beginPath()
      this.ctx.moveTo(x, 0)
      this.ctx.lineTo(x, canvasHeight)
      this.ctx.stroke()
    }

    for (let y = 0; y <= canvasHeight; y += gridSize) {
      this.ctx.beginPath()
      this.ctx.moveTo(0, y)
      this.ctx.lineTo(canvasWidth, y)
      this.ctx.stroke()
    }
  }

  protected setGlow(color: string, blur: number = 20): void {
    if (!this.ctx) return
    this.ctx.shadowColor = color
    this.ctx.shadowBlur = blur
  }

  protected clearGlow(): void {
    if (!this.ctx) return
    this.ctx.shadowColor = 'transparent'
    this.ctx.shadowBlur = 0
  }

  public play(): void {
    this.start()
    this.startGameLoop()
  }

  public stop(): void {
    this.state.isRunning = false
    this.notifyStateChange()
  }
}

export default BaseSimulator
