'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface PhysicsObject {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  glowColor: string
  mass: number
  shape: 'circle' | 'square' | 'triangle'
}

interface IntroGameProps {
  onComplete: () => void
  onSkip: () => void
}

export default function IntroGame({ onComplete, onSkip }: IntroGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gravityDirection, setGravityDirection] = useState({ x: 0, y: 1 })
  const [showHint, setShowHint] = useState(true)
  const [phase, setPhase] = useState(0)
  const [message, setMessage] = useState('')
  const objectsRef = useRef<PhysicsObject[]>([])
  const animationRef = useRef<number | null>(null)
  const timeRef = useRef(0)

  const GRAVITY = 800
  const FRICTION = 0.99
  const BOUNCE = 0.7
  const WALL_PADDING = 10

  const COLORS = [
    { fill: '#00f5ff', glow: 'rgba(0, 245, 255, 0.6)' },
    { fill: '#bf00ff', glow: 'rgba(191, 0, 255, 0.6)' },
    { fill: '#ff00a0', glow: 'rgba(255, 0, 160, 0.6)' },
    { fill: '#00ff88', glow: 'rgba(0, 255, 136, 0.6)' },
    { fill: '#ffaa00', glow: 'rgba(255, 170, 0, 0.6)' },
  ]

  const createObjects = useCallback((width: number, height: number) => {
    const objects: PhysicsObject[] = []
    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle']

    for (let i = 0; i < 15; i++) {
      const colorSet = COLORS[i % COLORS.length]
      objects.push({
        x: Math.random() * (width - 100) + 50,
        y: Math.random() * (height - 200) + 50,
        vx: (Math.random() - 0.5) * 100,
        vy: (Math.random() - 0.5) * 100,
        radius: 15 + Math.random() * 20,
        color: colorSet.fill,
        glowColor: colorSet.glow,
        mass: 1 + Math.random() * 2,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      })
    }

    return objects
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase !== 0) return

      setShowHint(false)

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          setGravityDirection({ x: 0, y: -1 })
          break
        case 'ArrowDown':
        case 's':
        case 'S':
          setGravityDirection({ x: 0, y: 1 })
          break
        case 'ArrowLeft':
        case 'a':
        case 'A':
          setGravityDirection({ x: -1, y: 0 })
          break
        case 'ArrowRight':
        case 'd':
        case 'D':
          setGravityDirection({ x: 1, y: 0 })
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [phase])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (phase !== 0) return

      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const dx = endX - startX
      const dy = endY - startY

      const threshold = 30

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
        setShowHint(false)
        setGravityDirection({ x: dx > 0 ? 1 : -1, y: 0 })
      } else if (Math.abs(dy) > threshold) {
        setShowHint(false)
        setGravityDirection({ x: 0, y: dy > 0 ? 1 : -1 })
      }
    }

    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [phase])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      if (objectsRef.current.length === 0) {
        objectsRef.current = createObjects(canvas.width, canvas.height)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let lastTime = performance.now()

    const gameLoop = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000
      lastTime = currentTime
      timeRef.current += deltaTime

      ctx.fillStyle = '#0a0a0f'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = 'rgba(0, 245, 255, 0.03)'
      ctx.lineWidth = 1
      const gridSize = 50
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const arrowLength = 60

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(Math.atan2(gravityDirection.y, gravityDirection.x))

      ctx.strokeStyle = 'rgba(0, 245, 255, 0.3)'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(-arrowLength, 0)
      ctx.lineTo(arrowLength, 0)
      ctx.lineTo(arrowLength - 15, -15)
      ctx.moveTo(arrowLength, 0)
      ctx.lineTo(arrowLength - 15, 15)
      ctx.stroke()

      ctx.restore()

      objectsRef.current.forEach(obj => {
        obj.vx += gravityDirection.x * GRAVITY * deltaTime
        obj.vy += gravityDirection.y * GRAVITY * deltaTime

        obj.vx *= FRICTION
        obj.vy *= FRICTION

        obj.x += obj.vx * deltaTime
        obj.y += obj.vy * deltaTime

        if (obj.x - obj.radius < WALL_PADDING) {
          obj.x = WALL_PADDING + obj.radius
          obj.vx = -obj.vx * BOUNCE
        }
        if (obj.x + obj.radius > canvas.width - WALL_PADDING) {
          obj.x = canvas.width - WALL_PADDING - obj.radius
          obj.vx = -obj.vx * BOUNCE
        }
        if (obj.y - obj.radius < WALL_PADDING) {
          obj.y = WALL_PADDING + obj.radius
          obj.vy = -obj.vy * BOUNCE
        }
        if (obj.y + obj.radius > canvas.height - WALL_PADDING) {
          obj.y = canvas.height - WALL_PADDING - obj.radius
          obj.vy = -obj.vy * BOUNCE
        }

        ctx.save()
        ctx.shadowColor = obj.glowColor
        ctx.shadowBlur = 20
        ctx.fillStyle = obj.color

        ctx.translate(obj.x, obj.y)
        const rotation = timeRef.current * (obj.mass - 1) * 0.5
        ctx.rotate(rotation)

        switch (obj.shape) {
          case 'circle':
            ctx.beginPath()
            ctx.arc(0, 0, obj.radius, 0, Math.PI * 2)
            ctx.fill()
            break

          case 'square':
            ctx.fillRect(-obj.radius, -obj.radius, obj.radius * 2, obj.radius * 2)
            break

          case 'triangle':
            ctx.beginPath()
            ctx.moveTo(0, -obj.radius)
            ctx.lineTo(obj.radius, obj.radius)
            ctx.lineTo(-obj.radius, obj.radius)
            ctx.closePath()
            ctx.fill()
            break
        }

        ctx.restore()
      })

      if (phase === 0 && timeRef.current > 8) {
        setPhase(1)
        setMessage('이것이 물리학입니다')
      } else if (phase === 1 && timeRef.current > 12) {
        setPhase(2)
        setMessage('세상을 다르게 보는 법')
      } else if (phase === 2 && timeRef.current > 16) {
        onComplete()
      }

      animationRef.current = requestAnimationFrame(gameLoop)
    }

    animationRef.current = requestAnimationFrame(gameLoop)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [gravityDirection, phase, createObjects, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-dark-900">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        tabIndex={0}
      />

      {showHint && phase === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center animate-pulse">
            <div className="text-6xl mb-4">↑</div>
            <div className="flex justify-center gap-8 mb-4">
              <span className="text-6xl">←</span>
              <span className="text-6xl">→</span>
            </div>
            <div className="text-6xl mb-8">↓</div>
            <p className="text-xl text-gray-400">
              방향키 또는 스와이프로<br />
              중력을 바꿔보세요
            </p>
          </div>
        </div>
      )}

      {phase > 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="text-center"
            style={{
              animation: 'fadeInUp 1s ease forwards',
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              {message}
            </h1>
            {phase === 2 && (
              <p className="text-xl text-gray-400 mt-4 animate-pulse">
                잠시 후 시작합니다...
              </p>
            )}
          </div>
        </div>
      )}

      <button
        onClick={onSkip}
        className="absolute bottom-8 right-8 px-6 py-3 bg-dark-700/50 backdrop-blur text-gray-400 rounded-lg hover:bg-dark-600 hover:text-white transition border border-dark-600"
      >
        건너뛰기 →
      </button>

      <div className="absolute top-8 left-8">
        <span className="text-xl font-bold gradient-text">ThinkPhysically</span>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, #00f5ff 0%, #bf00ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  )
}
