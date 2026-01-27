'use client'

import Link from 'next/link'
import { ArrowLeft, Lightbulb, ArrowRight } from 'lucide-react'

export default function RemoveThePartProblem() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link href="/problems" className="text-gray-500 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-2xl font-bold">
            Think<span className="text-cyber-cyan">Physically</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs px-2 py-1 bg-dark-700 rounded text-gray-400">
            First Principles
          </span>
          <span className="text-xs text-gray-600">2026-01-25</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">부품을 없애라</h1>

        {/* Question */}
        <div className="p-6 bg-dark-800 rounded-lg border border-dark-700 mb-8">
          <p className="text-gray-500 text-sm mb-2">문제</p>
          <p className="text-xl">
            부품의 최저단가는 얼마일까?
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-300 leading-relaxed">
            테슬라 Model S의 차체 부품은 약 10,000개였다.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Model Y는? <strong className="text-white">1,500개.</strong>
          </p>

          <p className="text-gray-300 leading-relaxed">
            같은 자동차다. 사람이 타고, 굴러가고, 목적지에 도착한다.
            그런데 부품이 85% 줄었다.
          </p>

          <div className="border-l-2 border-cyber-cyan pl-6 py-2 my-8">
            <p className="text-xl text-white">
              "어떻게 더 싸게 만들까?"
            </p>
            <p className="text-gray-500 mt-2">
              ↓ 이 질문이 틀렸다
            </p>
            <p className="text-xl text-cyber-cyan mt-2">
              "이 부품이 왜 존재해야 하지?"
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            SpaceX 엔지니어가 부품 단가를 낮추겠다고 보고했다.
          </p>

          <div className="bg-dark-800 rounded-lg p-6 my-8 space-y-3">
            <p className="text-white">"그 부품이 왜 필요한데?"</p>
            <p className="text-gray-500">"원래 있던 부품입니다."</p>
            <p className="text-white">"물리 법칙이 그 부품을 요구해?"</p>
            <p className="text-gray-500">"...아뇨."</p>
            <p className="text-cyber-cyan font-bold">"그럼 없애."</p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">기가캐스팅</h2>

          <p className="text-gray-300 leading-relaxed">
            Model Y 후면 차체:
          </p>

          <div className="flex items-center gap-4 my-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-500 line-through">70개</p>
              <p className="text-xs text-gray-600">기존</p>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-600" />
            <div className="text-center">
              <p className="text-3xl font-bold text-cyber-cyan">1개</p>
              <p className="text-xs text-gray-600">기가캐스팅</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            70개를 1개로 만든 게 아니다.
            <br />
            <strong className="text-white">69개를 존재하지 않게</strong> 만든 것이다.
          </p>
        </div>

        {/* Insight */}
        <div className="mt-12 p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-cyber-cyan flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-lg mb-2">인사이트</p>
              <p className="text-xl">
                "The best part is <span className="text-cyber-cyan">no part</span>."
              </p>
              <p className="text-gray-400 mt-2">
                최고의 부품은 없는 부품이다.
                <br />
                존재 이유가 없으면, 빼라.
              </p>
            </div>
          </div>
        </div>

        {/* Apply */}
        <div className="mt-8 p-6 bg-dark-800 rounded-lg border border-dark-700">
          <p className="font-bold mb-4">적용해보기</p>
          <ul className="space-y-2 text-gray-400">
            <li>• 내 코드에서 없어도 되는 함수는?</li>
            <li>• 이 회의가 없으면 뭐가 안 되나?</li>
            <li>• 이 기능이 물리적으로 필요한가?</li>
            <li>• 이 프로세스가 존재해야 할 이유는?</li>
          </ul>
        </div>

        {/* Related Idea */}
        <div className="mt-8 pt-8 border-t border-dark-700">
          <p className="text-gray-500 text-sm mb-4">관련 사업 아이템</p>
          <Link
            href="/ideas/gigacasting-startup"
            className="flex items-center justify-between p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-cyber-purple/50 transition group"
          >
            <span className="group-hover:text-cyber-purple transition">
              기가캐스팅 응용
            </span>
            <span className="text-xs px-2 py-1 bg-dark-700 rounded text-gray-500">
              idea
            </span>
          </Link>
        </div>
      </article>

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
