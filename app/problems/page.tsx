'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

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

export default function ProblemsPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link href="/" className="text-gray-500 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-2xl font-bold">
            Think<span className="text-cyber-cyan">Physically</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">문제들</h1>
        <p className="text-gray-500 mb-8">
          물리학적 사고로 해결한 문제들
        </p>

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
              <h2 className="text-xl font-bold mb-2 group-hover:text-cyber-cyan transition">
                {problem.title}
              </h2>
              <p className="text-gray-400">
                <span className="text-gray-500">Q.</span> {problem.question}<br />
                <span className="text-cyber-cyan">A.</span> {problem.insight}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
