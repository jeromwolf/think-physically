'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// 문제 데이터 (나중에 별도 파일로 분리)
const problems = [
  {
    slug: 'remove-the-part',
    title: '부품을 없애라',
    question: '부품의 최저단가는?',
    insight: '부품을 없애는 것이다',
    category: 'First Principles',
    date: '2026-01-25',
  },
]

// 사업 아이템 데이터
const ideas = [
  {
    slug: 'mars-ticket',
    title: '화성행 티켓',
    status: 'in development',
    from: 'K-content + Tech',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link href="/" className="text-2xl font-bold">
            Think<span className="text-cyber-cyan">Physically</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            세상의 문제를<br />
            <span className="text-cyber-cyan">물리학적으로</span> 해결한다
          </h1>
          <p className="text-gray-400 text-lg">
            사소한 것부터 큰 것까지.<br />
            해결의 희열. 필요하면 사업화.
          </p>
        </div>
      </section>

      {/* Recent Problems */}
      <section className="border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">최근 문제들</h2>
            <Link
              href="/problems"
              className="text-gray-500 hover:text-cyber-cyan transition text-sm flex items-center gap-1"
            >
              전체 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {problems.map((problem) => (
              <Link
                key={problem.slug}
                href={`/problems/${problem.slug}`}
                className="block p-6 bg-dark-800 rounded-lg border border-dark-700 hover:border-cyber-cyan/50 transition group"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-gray-500">{problem.category}</span>
                  <span className="text-xs text-gray-600">{problem.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-cyan transition">
                  {problem.title}
                </h3>
                <p className="text-gray-400">
                  <span className="text-gray-500">Q.</span> {problem.question}<br />
                  <span className="text-cyber-cyan">A.</span> {problem.insight}
                </p>
              </Link>
            ))}

            {problems.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                아직 문제가 없습니다. 첫 번째 문제를 기다려주세요.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Ideas */}
      <section className="border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">사업 아이템</h2>
            <Link
              href="/ideas"
              className="text-gray-500 hover:text-cyber-cyan transition text-sm flex items-center gap-1"
            >
              전체 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {ideas.map((idea) => (
              <Link
                key={idea.slug}
                href={`/ideas/${idea.slug}`}
                className="flex items-center justify-between p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-cyber-purple/50 transition group"
              >
                <span className="group-hover:text-cyber-purple transition">{idea.title}</span>
                <span className="text-xs px-2 py-1 bg-dark-700 rounded text-gray-500">
                  {idea.status}
                </span>
              </Link>
            ))}

            {ideas.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                아직 아이템이 없습니다.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* About */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            일론 머스크처럼 생각하고 싶었다.<br />
            물리학적 사고로 세상을 보면 다르게 보인다.<br />
            문제를 해결하면서 희열을 느끼고,<br />
            사업화할 수 있는 건 사업화한다.<br /><br />
            하루에 하나씩, 쌓아간다.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <p className="text-gray-600 text-sm">
            ThinkPhysically © 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
