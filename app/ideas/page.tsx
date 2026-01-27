'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const ideas = [
  {
    slug: 'mars-ticket',
    title: '화성행 티켓',
    description: '2040년 화성 이주를 배경으로 한 K-웹툰/드라마. 드라마 속 기술이 실제 사업 아이디어가 된다.',
    status: 'in development',
    potential: 'Global IP',
    reference: '오징어게임, 더 글로리, SpaceX',
  },
]

export default function IdeasPage() {
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
        <h1 className="text-3xl font-bold mb-2">사업 아이템</h1>
        <p className="text-gray-500 mb-8">
          문제 해결에서 발견한 사업 기회들
        </p>

        <div className="space-y-4">
          {ideas.map((idea) => (
            <Link
              key={idea.slug}
              href={`/ideas/${idea.slug}`}
              className="block p-6 bg-dark-800 rounded-lg border border-dark-700 hover:border-cyber-purple/50 transition group"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold group-hover:text-cyber-purple transition">
                  {idea.title}
                </h2>
                <span className="text-xs px-2 py-1 bg-cyber-purple/20 text-cyber-purple rounded">
                  {idea.status}
                </span>
              </div>
              <p className="text-gray-400 mb-3">{idea.description}</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-500">예상: <span className="text-cyber-cyan">{idea.potential}</span></span>
                <span className="text-gray-600">참고: {idea.reference}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
