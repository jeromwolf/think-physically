'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Bot, Play, RotateCcw } from 'lucide-react'

// 로고 컴포넌트
const Logo = ({ size = 40 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f5ff" />
        <stop offset="100%" stopColor="#bf00ff" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
    <circle cx="50" cy="50" r="8" fill="url(#logoGradient)" />
    <ellipse cx="50" cy="50" rx="25" ry="10" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" transform="rotate(-30 50 50)" />
    <ellipse cx="50" cy="50" rx="25" ry="10" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="25" ry="10" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" transform="rotate(90 50 50)" />
  </svg>
)

// 역진자 시뮬레이터 컴포넌트
function InvertedPendulumSimulator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)
  const [bestTime, setBestTime] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  const stateRef = useRef({
    cartX: 0,
    cartVel: 0,
    angle: 0,
    angleVel: 0,
    leftPressed: false,
    rightPressed: false,
  })

  const GRAVITY = 9.81
  const POLE_LENGTH = 120
  const FORCE_MAG = 15
  const DT = 0.02
  const CART_MASS = 1.0
  const POLE_MASS = 0.1

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        stateRef.current.leftPressed = true
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        stateRef.current.rightPressed = true
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        stateRef.current.leftPressed = false
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        stateRef.current.rightPressed = false
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let elapsedTime = 0

    const reset = () => {
      stateRef.current = {
        cartX: 0,
        cartVel: 0,
        angle: (Math.random() - 0.5) * 0.1,
        angleVel: 0,
        leftPressed: false,
        rightPressed: false,
      }
      elapsedTime = 0
      setTime(0)
      setIsGameOver(false)
    }

    const update = () => {
      const state = stateRef.current

      let force = 0
      if (state.leftPressed) force = -FORCE_MAG
      if (state.rightPressed) force = FORCE_MAG

      const sinAngle = Math.sin(state.angle)
      const cosAngle = Math.cos(state.angle)
      const totalMass = CART_MASS + POLE_MASS
      const poleMassLength = POLE_MASS * POLE_LENGTH

      const temp = (force + poleMassLength * state.angleVel * state.angleVel * sinAngle) / totalMass
      const angleAcc = (GRAVITY * sinAngle - cosAngle * temp) /
        (POLE_LENGTH * (4 / 3 - POLE_MASS * cosAngle * cosAngle / totalMass))
      const cartAcc = temp - poleMassLength * angleAcc * cosAngle / totalMass

      state.cartVel += cartAcc * DT
      state.cartX += state.cartVel * DT
      state.angleVel += angleAcc * DT
      state.angle += state.angleVel * DT

      state.cartX = Math.max(-200, Math.min(200, state.cartX))

      if (Math.abs(state.angle) > Math.PI / 4) {
        setIsGameOver(true)
        setIsRunning(false)
        if (elapsedTime > bestTime) {
          setBestTime(elapsedTime)
        }
        return false
      }

      elapsedTime += DT
      setTime(elapsedTime)
      return true
    }

    const draw = () => {
      const state = stateRef.current
      const width = canvas.width
      const height = canvas.height

      // Clear
      ctx.fillStyle = '#12121a'
      ctx.fillRect(0, 0, width, height)

      // Grid
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.05)'
      ctx.lineWidth = 1
      for (let i = 0; i < width; i += 30) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, height)
        ctx.stroke()
      }
      for (let i = 0; i < height; i += 30) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(width, i)
        ctx.stroke()
      }

      ctx.save()
      ctx.translate(width / 2 + state.cartX, height * 0.7)

      // Ground
      ctx.strokeStyle = '#252530'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(-250, 20)
      ctx.lineTo(250, 20)
      ctx.stroke()

      // Cart
      const cartColor = isGameOver ? '#ef4444' : '#00f5ff'
      ctx.fillStyle = cartColor
      ctx.shadowColor = cartColor
      ctx.shadowBlur = 20
      ctx.beginPath()
      ctx.roundRect(-40, -15, 80, 30, 5)
      ctx.fill()
      ctx.shadowBlur = 0

      // Wheels
      ctx.fillStyle = '#252530'
      ctx.beginPath()
      ctx.arc(-25, 15, 10, 0, Math.PI * 2)
      ctx.arc(25, 15, 10, 0, Math.PI * 2)
      ctx.fill()

      // Pole
      const poleEndX = Math.sin(state.angle) * POLE_LENGTH
      const poleEndY = -Math.cos(state.angle) * POLE_LENGTH

      ctx.strokeStyle = isGameOver ? '#ef4444' : '#ffffff'
      ctx.lineWidth = 6
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(0, -15)
      ctx.lineTo(poleEndX, poleEndY - 15)
      ctx.stroke()

      // Pole end ball
      ctx.fillStyle = isGameOver ? '#ef4444' : '#bf00ff'
      ctx.shadowColor = isGameOver ? '#ef4444' : '#bf00ff'
      ctx.shadowBlur = 15
      ctx.beginPath()
      ctx.arc(poleEndX, poleEndY - 15, 12, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0

      ctx.restore()

      // Game over text
      if (isGameOver) {
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 24px Inter, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('쓰러졌습니다!', width / 2, height / 2 - 30)
        ctx.font = '14px Inter, sans-serif'
        ctx.fillStyle = '#888888'
        ctx.fillText('다시 시작하려면 버튼을 누르세요', width / 2, height / 2)
      }
    }

    const gameLoop = () => {
      if (isRunning && !isGameOver) {
        const shouldContinue = update()
        if (!shouldContinue) {
          draw()
          return
        }
      }
      draw()
      animationId = requestAnimationFrame(gameLoop)
    }

    if (isRunning && !isGameOver) {
      reset()
    }

    gameLoop()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isRunning, isGameOver, bestTime])

  const handleStart = () => {
    setIsGameOver(false)
    setIsRunning(true)
  }

  const handleReset = () => {
    setIsRunning(false)
    setIsGameOver(false)
    setTime(0)
  }

  return (
    <div className="bg-dark-800 rounded-2xl border border-dark-600 overflow-hidden">
      <div className="p-4 border-b border-dark-600">
        <h3 className="text-lg font-bold text-cyber-cyan">역진자 균형 잡기</h3>
        <p className="text-sm text-gray-400">← → 또는 A D 키로 카트를 움직이세요</p>
      </div>

      <canvas
        ref={canvasRef}
        width={600}
        height={350}
        className="w-full"
        tabIndex={0}
      />

      <div className="p-4 border-t border-dark-600">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-6">
            <div>
              <div className="text-2xl font-bold text-cyber-cyan">{time.toFixed(2)}</div>
              <div className="text-xs text-gray-500">현재 시간 (초)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyber-purple">{bestTime.toFixed(2)}</div>
              <div className="text-xs text-gray-500">최고 기록</div>
            </div>
          </div>
          <div className="flex gap-2">
            {!isRunning ? (
              <button
                onClick={handleStart}
                className="flex items-center gap-2 px-4 py-2 bg-cyber-cyan text-dark-900 rounded-lg font-medium hover:opacity-90 transition"
              >
                <Play className="w-4 h-4" /> 시작
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-dark-600 text-white rounded-lg font-medium hover:bg-dark-500 transition"
              >
                <RotateCcw className="w-4 h-4" /> 리셋
              </button>
            )}
          </div>
        </div>
        <p className="text-xs text-gray-500">
          3초 이상 버텨보세요. 이것이 휴머노이드 로봇이 매 순간 해결하는 문제입니다.
        </p>
      </div>
    </div>
  )
}

export default function BlogPost2() {
  return (
    <div className="min-h-screen bg-dark-900 bg-grid">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-600">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={40} />
            <span className="font-bold text-xl gradient-text">ThinkPhysically</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/blog" className="text-gray-400 hover:text-cyber-cyan transition">Blog</Link>
            <Link href="/simulators" className="text-gray-400 hover:text-cyber-cyan transition">Simulators</Link>
            <Link href="/about" className="text-gray-400 hover:text-cyber-cyan transition">About</Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyber-cyan mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" /> 모든 글 보기
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyber-cyan/10 text-cyber-cyan text-sm font-medium rounded-full">
                Physical AI
              </span>
              <span className="px-3 py-1 bg-cyber-purple/10 text-cyber-purple text-sm font-medium rounded-full">
                Simulator
              </span>
              <span className="text-gray-500">2026-01-22</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              걷기는<br />
              <span className="gradient-text">통제된 추락이다</span>
            </h1>
            <p className="text-xl text-gray-400">
              휴머노이드 로봇이 가르쳐주는 균형의 물리학
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">아기의 첫 걸음</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                아기가 걷기를 배우는 순간을 본 적 있는가?
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                비틀거리고, 넘어지고, 다시 일어난다.
                어른들은 &quot;균형을 잡아야지&quot;라고 말하지만,
                사실 아기가 배우는 건 균형이 아니다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">넘어지는 법</strong>을 배우는 것이다.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">걷기의 진실</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                물리학적으로 걷기란 이렇다:
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-white">
                  앞으로 넘어지기 시작한다 → 넘어지기 전에 발을 내민다 → 반복
                </p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-4">
                우리는 매 순간 <strong className="text-cyber-cyan">추락하고 있다.</strong><br />
                다만 그 추락을 <strong className="text-white">통제</strong>할 뿐이다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                이게 왜 중요한가?<br />
                완벽한 균형 상태로 서 있는 건 에너지 낭비다.<br />
                통제된 추락이 가장 효율적인 이동 방식이다.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">역진자: 가장 불안정한 시스템</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                손바닥 위에 막대기를 세워본 적 있는가?
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6 font-mono text-sm text-gray-400">
                <pre>{`        │
        │  ← 막대 (쓰러지려 함)
        ●
   ┌────┴────┐
   │   손    │  ← 계속 움직여야 함`}</pre>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                이게 <strong className="text-cyber-cyan">역진자(Inverted Pendulum)</strong>다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                일반 진자는 안정적이다. 놔두면 멈춘다.<br />
                역진자는 불안정하다. 놔두면 쓰러진다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                그런데 인간의 걷기, 휴머노이드 로봇은 전부 역진자 원리로 작동한다.<br /><br />
                <strong className="text-white">불안정한 시스템을 선택한 이유?</strong><br />
                → 그게 더 효율적이니까.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">정적 안정 vs 동적 안정</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-600">
                      <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">구분</th>
                      <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">정적 안정</th>
                      <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">동적 안정</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">예시</td>
                      <td className="py-3 px-4">네 발 테이블</td>
                      <td className="py-3 px-4">자전거</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">상태</td>
                      <td className="py-3 px-4">가만히 있어도 안정</td>
                      <td className="py-3 px-4">움직여야 안정</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">효율</td>
                      <td className="py-3 px-4">낮음</td>
                      <td className="py-3 px-4">높음</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">로봇</td>
                      <td className="py-3 px-4">4족 보행</td>
                      <td className="py-3 px-4">2족 보행</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-300 leading-relaxed">
                자전거를 생각해보라.<br />
                멈추면 쓰러진다. 달려야 안정된다.<br /><br />
                휴머노이드도 마찬가지다.<br />
                두 발로 서 있는 건 <strong className="text-white">지속적인 제어</strong>가 필요한 불안정 상태다.<br />
                하지만 그래서 더 빠르고, 더 효율적으로 움직일 수 있다.
              </p>
            </section>

            {/* Simulator Section */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">직접 체험해보기</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                아래 시뮬레이터에서 역진자의 균형을 잡아보라.<br />
                <strong className="text-white">3초만 버텨보라.</strong> 생각보다 어렵다.
              </p>
              <InvertedPendulumSimulator />
              <p className="text-gray-400 mt-4">
                이 어려움이 휴머노이드 로봇이 매 순간 해결하는 문제다.<br />
                그리고 당신이 걸을 때 무의식적으로 해결하는 문제다.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">휴머노이드가 걷기를 배우는 법</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Boston Dynamics의 Atlas.<br />
                Tesla의 Optimus.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                이 로봇들이 걷기를 배우는 방식은 아기와 같다.
              </p>
              <ol className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-cyber-cyan font-bold">1.</span>
                  <span><strong className="text-white">무게중심 이동</strong> - 앞으로 기울어진다</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyber-cyan font-bold">2.</span>
                  <span><strong className="text-white">추락 감지</strong> - 넘어지기 직전을 계산한다</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyber-cyan font-bold">3.</span>
                  <span><strong className="text-white">발 내밀기</strong> - 정확한 위치에 발을 놓는다</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyber-cyan font-bold">4.</span>
                  <span><strong className="text-white">반복</strong> - 초당 수백 번의 제어</span>
                </li>
              </ol>
              <p className="text-gray-300 leading-relaxed">
                Atlas가 백플립을 할 수 있는 이유?<br />
                0.001초 단위로 <strong className="text-cyber-cyan">통제된 추락</strong>을 실행하기 때문이다.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">비즈니스에서의 통제된 추락</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                스타트업 창업자들이 흔히 하는 실수:
              </p>
              <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-gray-400">&quot;완벽하게 준비되면 시작하겠다.&quot;</p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-6">
                물리학은 말한다:<br />
                <strong className="text-white">완벽한 균형 상태에서는 움직일 수 없다.</strong>
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                전진하려면 넘어져야 한다.<br />
                다만, 넘어지기 전에 다음 발을 내밀 준비가 되어 있어야 한다.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-600">
                      <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">물리학</th>
                      <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">비즈니스</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">앞으로 기울어진다</td>
                      <td className="py-3 px-4">불확실해도 시작한다</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">추락을 감지한다</td>
                      <td className="py-3 px-4">지표를 모니터링한다</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">발을 내민다</td>
                      <td className="py-3 px-4">빠르게 피봇한다</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">반복</td>
                      <td className="py-3 px-4">실패하고, 배우고, 반복</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <blockquote className="border-l-4 border-cyber-purple pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-white mb-2">
                  &quot;결정의 70%를 가지고 움직여라.<br />
                  90%를 기다리면 늦다.&quot;
                </p>
                <p className="text-gray-400">— 제프 베조스</p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed">
                이게 <strong className="text-cyber-cyan">통제된 추락</strong>이다.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">안정은 정지가 아니다</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                우리는 안정을 &quot;멈춰있는 상태&quot;라고 생각한다.<br />
                하지만 물리학이 가르쳐주는 진짜 안정은 다르다.
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-bold text-white">안정은 움직임 속에 있다.</p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-4">
                멈추면 쓰러진다.<br />
                통제된 불안정이 가장 효율적인 전진 방식이다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                넘어지는 것을 두려워하지 마라.<br />
                넘어지기 전에 다음 발을 내밀 준비만 하라.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                그게 걷는 법이다.<br />
                그게 달리는 법이다.<br />
                <strong className="text-white">그게 사업하는 법이다.</strong>
              </p>
            </section>

            {/* Next Article */}
            <section className="pt-8 border-t border-dark-600">
              <p className="text-gray-500 mb-2">이전 글</p>
              <Link
                href="/blog/remove-the-part"
                className="group flex items-center justify-between p-6 bg-dark-800 rounded-xl hover:bg-dark-700 transition"
              >
                <div className="flex items-center gap-4">
                  <ArrowLeft className="w-6 h-6 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-cyber-cyan transition">
                      부품의 최저단가는 부품을 없애는 것이다
                    </h3>
                    <p className="text-gray-400">일론 머스크에게 배우는 물리학적 사고의 첫 번째 원칙</p>
                  </div>
                </div>
              </Link>
            </section>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-12 border-t border-dark-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <span className="font-bold gradient-text">ThinkPhysically</span>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; 2026 ThinkPhysically. 물리학적 사고로 세상을 다시 봅니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
