'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react'

// 챕터 타입 정의
type ChapterProps = {
  onNext: () => void
  onPrev?: () => void
}

// ============================================
// Chapter 0: 인트로
// ============================================
function ChapterIntro({ onNext }: ChapterProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 300)
  }, [])

  return (
    <div className={`transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center mb-12">
        <p className="text-gray-500 mb-4">ThinkPhysically #1</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          부품을 <span className="text-cyber-cyan">없애라</span>
        </h1>
        <p className="text-xl text-gray-400">
          물리학적 사고의 첫 번째 원칙
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onNext}
          className="group flex items-center gap-3 px-8 py-4 bg-cyber-cyan text-dark-900 rounded-xl font-bold text-lg hover:bg-cyber-cyan/90 transition"
        >
          시작하기
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}

// ============================================
// Chapter 1: 질문 - 부품이 몇 개?
// ============================================
function Chapter1({ onNext }: ChapterProps) {
  const [guess, setGuess] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [showNext, setShowNext] = useState(false)

  const actualCount = 30000

  const handleGuess = (value: number) => {
    setGuess(value)
    setTimeout(() => setRevealed(true), 500)
    setTimeout(() => setShowNext(true), 1500)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          자동차 한 대에<br />
          부품이 <span className="text-cyber-cyan">몇 개</span>일까?
        </h2>
      </div>

      {!guess && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[1000, 5000, 10000, 30000].map((num) => (
            <button
              key={num}
              onClick={() => handleGuess(num)}
              className="p-6 bg-dark-700 rounded-xl border border-dark-600 hover:border-cyber-cyan hover:bg-dark-600 transition text-center"
            >
              <span className="text-2xl font-bold">{num.toLocaleString()}</span>
              <span className="block text-sm text-gray-500">개</span>
            </button>
          ))}
        </div>
      )}

      {guess && (
        <div className="text-center space-y-6">
          <div className="p-6 bg-dark-800 rounded-xl inline-block">
            <p className="text-gray-400 mb-2">당신의 추측</p>
            <p className="text-3xl font-bold">{guess.toLocaleString()}개</p>
          </div>

          {revealed && (
            <div className="animate-fade-in-up">
              <div className="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-xl inline-block">
                <p className="text-cyber-cyan mb-2">정답</p>
                <p className="text-4xl font-bold text-cyber-cyan">{actualCount.toLocaleString()}개</p>
              </div>
              <p className="text-gray-400 mt-4">
                일반 자동차 한 대에는 약 3만 개의 부품이 들어간다.
              </p>
            </div>
          )}
        </div>
      )}

      {showNext && (
        <div className="flex justify-center animate-fade-in-up">
          <button
            onClick={onNext}
            className="group flex items-center gap-2 px-6 py-3 bg-dark-700 rounded-xl hover:bg-dark-600 transition"
          >
            이걸 줄일 수 있을까?
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================
// Chapter 2: 일반적인 사고
// ============================================
function Chapter2({ onNext }: ChapterProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [showNext, setShowNext] = useState(false)

  const options = [
    { id: 'material', label: '더 싼 재료 쓰기', result: '5% 절감... 한계가 있다' },
    { id: 'labor', label: '인건비 낮추기', result: '이미 자동화됨... 한계가 있다' },
    { id: 'negotiate', label: '납품가 협상하기', result: '3% 절감... 한계가 있다' },
  ]

  const handleSelect = (id: string) => {
    setSelected(id)
    setTimeout(() => setShowResult(true), 300)
    setTimeout(() => setShowNext(true), 1500)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          부품 가격을 낮추려면?
        </h2>
        <p className="text-gray-400">
          보통은 이렇게 생각한다
        </p>
      </div>

      <div className="space-y-4 max-w-md mx-auto">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt.id)}
            disabled={selected !== null}
            className={`w-full p-4 rounded-xl border transition text-left ${
              selected === opt.id
                ? 'bg-dark-700 border-cyber-purple'
                : selected
                  ? 'bg-dark-800/50 border-dark-700 opacity-50'
                  : 'bg-dark-700 border-dark-600 hover:border-cyber-cyan'
            }`}
          >
            <span className="font-medium">{opt.label}</span>
            {selected === opt.id && showResult && (
              <p className="text-cyber-purple mt-2 animate-fade-in-up">
                → {opt.result}
              </p>
            )}
          </button>
        ))}
      </div>

      {showNext && (
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="p-6 bg-dark-800 rounded-xl max-w-md mx-auto">
            <p className="text-xl text-gray-300">
              기존 방식으로는<br />
              <span className="text-white font-bold">10%도 줄이기 어렵다</span>
            </p>
          </div>

          <button
            onClick={onNext}
            className="group flex items-center gap-2 px-6 py-3 bg-dark-700 rounded-xl hover:bg-dark-600 transition mx-auto"
          >
            다른 질문을 해보자
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================
// Chapter 3: 질문의 전환
// ============================================
function Chapter3({ onNext }: ChapterProps) {
  const [step, setStep] = useState(0)

  const steps = [
    { text: '"어떻게 더 싸게 만들까?"', highlight: false },
    { text: '이 질문이 틀렸다', highlight: true },
    { text: '"이 부품이 왜 존재해야 하지?"', highlight: true, special: true },
  ]

  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => setStep(s => s + 1), 2000)
      return () => clearTimeout(timer)
    }
  }, [step])

  return (
    <div className="space-y-8">
      <div className="text-center min-h-[200px] flex flex-col justify-center">
        {steps.slice(0, step + 1).map((s, i) => (
          <div
            key={i}
            className={`mb-4 animate-fade-in-up ${
              s.special
                ? 'text-3xl md:text-4xl font-bold text-cyber-cyan'
                : s.highlight
                  ? 'text-2xl font-bold text-white'
                  : 'text-xl text-gray-500 line-through'
            }`}
          >
            {s.text}
          </div>
        ))}
      </div>

      {step >= steps.length - 1 && (
        <div className="text-center animate-fade-in-up">
          <p className="text-gray-400 mb-8">
            일론 머스크는 SpaceX 엔지니어들에게<br />
            모든 부품에 대해 이 질문을 던졌다.
          </p>

          <button
            onClick={onNext}
            className="group flex items-center gap-2 px-6 py-3 bg-cyber-cyan text-dark-900 rounded-xl font-bold hover:bg-cyber-cyan/90 transition mx-auto"
          >
            직접 해보기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================
// Chapter 4: 인터랙티브 시뮬레이션
// ============================================
function Chapter4({ onNext }: ChapterProps) {
  const [parts, setParts] = useState([
    { id: 1, name: '프레임 A', needed: true, removed: false },
    { id: 2, name: '프레임 B', needed: true, removed: false },
    { id: 3, name: '연결부 1', needed: false, removed: false },
    { id: 4, name: '연결부 2', needed: false, removed: false },
    { id: 5, name: '연결부 3', needed: false, removed: false },
    { id: 6, name: '보강재 A', needed: false, removed: false },
    { id: 7, name: '보강재 B', needed: false, removed: false },
  ])

  const [showGigacast, setShowGigacast] = useState(false)
  const [gigacastDone, setGigacastDone] = useState(false)

  const removedCount = parts.filter(p => p.removed).length
  const canShowGigacast = removedCount >= 3

  const togglePart = (id: number) => {
    setParts(parts.map(p =>
      p.id === id ? { ...p, removed: !p.removed } : p
    ))
  }

  const handleGigacast = () => {
    setShowGigacast(true)
    setTimeout(() => setGigacastDone(true), 2000)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          자동차 후면부를 만들어보자
        </h2>
        <p className="text-gray-400">
          부품을 클릭해서 "왜 필요한지" 생각해봐
        </p>
      </div>

      {!showGigacast ? (
        <>
          <div className="bg-dark-800 rounded-xl p-6 max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-3">
              {parts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => togglePart(part.id)}
                  className={`p-3 rounded-lg border-2 transition ${
                    part.removed
                      ? 'bg-dark-900 border-red-500/50 opacity-50'
                      : 'bg-dark-700 border-dark-600 hover:border-cyber-cyan'
                  }`}
                >
                  <span className={part.removed ? 'line-through text-gray-500' : ''}>
                    {part.name}
                  </span>
                  {part.removed && (
                    <span className="block text-xs text-red-400">제거됨</span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-dark-600 flex justify-between items-center">
              <span className="text-gray-400">남은 부품</span>
              <span className="text-2xl font-bold">
                {parts.filter(p => !p.removed).length}개
              </span>
            </div>
          </div>

          {canShowGigacast && (
            <div className="text-center animate-fade-in-up">
              <p className="text-gray-400 mb-4">
                잠깐, 더 급진적인 방법이 있다
              </p>
              <button
                onClick={handleGigacast}
                className="px-6 py-3 bg-cyber-purple text-white rounded-xl font-bold hover:bg-cyber-purple/90 transition"
              >
                기가캐스팅 적용하기
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center">
          <div className="bg-dark-800 rounded-xl p-8 max-w-md mx-auto mb-6">
            {!gigacastDone ? (
              <div className="space-y-4">
                <div className="animate-pulse">
                  <p className="text-gray-400">기가캐스팅 중...</p>
                  <div className="w-full h-2 bg-dark-600 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-cyber-purple animate-[loading_2s_ease-in-out]"
                      style={{ animation: 'loading 2s forwards' }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in-up space-y-4">
                <p className="text-6xl font-bold text-cyber-cyan">1</p>
                <p className="text-xl">개의 부품으로 통합</p>
                <div className="pt-4 border-t border-dark-600 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-400">-70</p>
                    <p className="text-xs text-gray-500">부품 수</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">-300</p>
                    <p className="text-xs text-gray-500">용접 로봇</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">+30%</p>
                    <p className="text-xs text-gray-500">강성</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {gigacastDone && (
            <button
              onClick={onNext}
              className="group flex items-center gap-2 px-6 py-3 bg-cyber-cyan text-dark-900 rounded-xl font-bold hover:bg-cyber-cyan/90 transition mx-auto animate-fade-in-up"
            >
              이게 의미하는 것
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}

// ============================================
// Chapter 5: 핵심 인사이트
// ============================================
function Chapter5({ onNext }: ChapterProps) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => Math.min(s + 1, 3))
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8 text-center">
      <div className="min-h-[250px] flex flex-col justify-center space-y-6">
        {step >= 0 && (
          <p className="text-xl text-gray-400 animate-fade-in-up">
            테슬라 Model Y 후면부
          </p>
        )}

        {step >= 1 && (
          <div className="animate-fade-in-up">
            <span className="text-gray-500 line-through text-2xl">70개</span>
            <span className="mx-4 text-gray-600">→</span>
            <span className="text-4xl font-bold text-cyber-cyan">1개</span>
          </div>
        )}

        {step >= 2 && (
          <blockquote className="text-2xl md:text-3xl font-bold animate-fade-in-up max-w-lg mx-auto">
            "The best part is <span className="text-cyber-cyan">no part</span>.<br />
            The best process is <span className="text-cyber-purple">no process</span>."
          </blockquote>
        )}

        {step >= 3 && (
          <p className="text-gray-500 animate-fade-in-up">— Elon Musk</p>
        )}
      </div>

      {step >= 3 && (
        <button
          onClick={onNext}
          className="group flex items-center gap-2 px-6 py-3 bg-dark-700 rounded-xl hover:bg-dark-600 transition mx-auto animate-fade-in-up"
        >
          이걸 내 삶에 적용하면?
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  )
}

// ============================================
// Chapter 6: 적용
// ============================================
function Chapter6({ onNext }: ChapterProps) {
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const examples = ['불필요한 회의', '안 쓰는 기능', '복잡한 프로세스', '레거시 코드']

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          당신의 일에서<br />
          <span className="text-cyber-cyan">없앨 수 있는 것</span>은?
        </h2>
        <p className="text-gray-400">
          "이것이 존재해야 할 물리적 이유가 있는가?"
        </p>
      </div>

      {!submitted ? (
        <div className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="없앨 수 있는 것..."
            className="w-full p-4 bg-dark-800 border border-dark-600 rounded-xl focus:border-cyber-cyan focus:outline-none transition"
          />

          <div className="flex flex-wrap gap-2">
            {examples.map((ex) => (
              <button
                key={ex}
                onClick={() => setInput(ex)}
                className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-400 hover:text-white hover:bg-dark-600 transition"
              >
                {ex}
              </button>
            ))}
          </div>

          <button
            onClick={() => input && setSubmitted(true)}
            disabled={!input}
            className="w-full p-4 bg-cyber-cyan text-dark-900 rounded-xl font-bold hover:bg-cyber-cyan/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            확인
          </button>
        </div>
      ) : (
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="p-6 bg-dark-800 rounded-xl max-w-md mx-auto">
            <p className="text-gray-400 mb-2">없앨 것</p>
            <p className="text-2xl font-bold text-cyber-cyan">{input}</p>
          </div>

          <div className="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-xl max-w-md mx-auto">
            <p className="text-lg">
              첫 번째 물리학적 사고 완료.<br />
              <span className="text-cyber-cyan font-bold">존재 이유를 묻는 것</span>이 시작이다.
            </p>
          </div>

          <button
            onClick={onNext}
            className="group flex items-center gap-2 px-6 py-3 bg-dark-700 rounded-xl hover:bg-dark-600 transition mx-auto"
          >
            마무리
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================
// Chapter 7: 아웃로
// ============================================
function ChapterOutro() {
  return (
    <div className="text-center space-y-8">
      <div>
        <p className="text-gray-500 mb-4">ThinkPhysically #1 완료</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          부품을 <span className="text-cyber-cyan">없애라</span>
        </h2>
      </div>

      <div className="p-6 bg-dark-800 rounded-xl max-w-md mx-auto text-left space-y-4">
        <p className="font-bold text-lg">오늘 배운 것:</p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-cyber-cyan">→</span>
            "어떻게 줄일까?" 대신 "왜 존재해야 하지?"
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyber-cyan">→</span>
            최고의 부품은 없는 부품
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyber-cyan">→</span>
            물리적 이유가 없으면 빼라
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-dark-700 rounded-xl hover:bg-dark-600 transition"
        >
          홈으로
        </Link>
        <Link
          href="/stories/controlled-falling"
          className="px-6 py-3 bg-cyber-cyan text-dark-900 rounded-xl font-bold hover:bg-cyber-cyan/90 transition"
        >
          다음 이야기 →
        </Link>
      </div>
    </div>
  )
}

// ============================================
// 메인 컴포넌트
// ============================================
export default function RemoveThePartStory() {
  const [chapter, setChapter] = useState(0)

  const totalChapters = 8

  const nextChapter = () => setChapter(c => Math.min(c + 1, totalChapters - 1))
  const prevChapter = () => setChapter(c => Math.max(c - 1, 0))
  const resetStory = () => setChapter(0)

  const chapters = [
    <ChapterIntro key={0} onNext={nextChapter} />,
    <Chapter1 key={1} onNext={nextChapter} />,
    <Chapter2 key={2} onNext={nextChapter} />,
    <Chapter3 key={3} onNext={nextChapter} />,
    <Chapter4 key={4} onNext={nextChapter} />,
    <Chapter5 key={5} onNext={nextChapter} />,
    <Chapter6 key={6} onNext={nextChapter} />,
    <ChapterOutro key={7} />,
  ]

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-dark-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple transition-all duration-500"
          style={{ width: `${((chapter + 1) / totalChapters) * 100}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-gray-500 hover:text-white transition">
            ThinkPhysically
          </Link>

          {chapter > 0 && chapter < totalChapters - 1 && (
            <button
              onClick={resetStory}
              className="text-gray-500 hover:text-white transition flex items-center gap-1"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="text-sm">처음부터</span>
            </button>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl">
          {chapters[chapter]}
        </div>
      </main>

      {/* Navigation */}
      {chapter > 0 && chapter < totalChapters - 1 && (
        <footer className="fixed bottom-0 left-0 right-0 p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button
              onClick={prevChapter}
              className="text-gray-500 hover:text-white transition flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">이전</span>
            </button>

            <span className="text-gray-600 text-sm">
              {chapter + 1} / {totalChapters}
            </span>

            <div className="w-16" /> {/* Spacer */}
          </div>
        </footer>
      )}
    </div>
  )
}
