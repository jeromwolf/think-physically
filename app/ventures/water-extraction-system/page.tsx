'use client'

import Link from 'next/link'
import { ArrowLeft, Droplets } from 'lucide-react'

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

export default function WaterExtractionVenture() {
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
            <Link href="/ventures" className="text-cyber-cyan font-medium">Ventures</Link>
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
            href="/ventures"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyber-cyan mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" /> 모든 벤처 보기
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyber-purple/10 text-cyber-purple text-sm font-medium rounded-full">
                CleanTech
              </span>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full">
                $900B Market
              </span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                EP.03
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-10 h-10 text-cyber-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="gradient-text">사막 물 추출 시스템</span>
            </h1>
            <p className="text-xl text-gray-400">
              화성 토양 물 추출 기술을 지구 건조 지역에 적용
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">드라마 속 장면</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                EP.03에서 서하준은 화성 토양을 460°C로 가열해 결합수를 증기로 전환, 응축하여 식수를 만든다. 화성 토양 1톤에서 약 20L의 물을 추출 — 7명이 하루 버틸 수 있는 양.
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  &quot;토양을 가열하면 수분이 증발해. 460°C면 충분해.&quot;<br />
                  <span className="text-gray-400 text-base">— 서하준 (화성행 티켓 EP.03)</span>
                </p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed">
                이 장면은 NASA와 SpaceX가 개발 중인 실제 ISRU(In-Situ Resource Utilization) 기술을 반영한다.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">물리학 원리</h2>
              <ul className="space-y-3 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>
                    <strong className="text-white">화성 토양(레골리스)은 2~5%의 수분을 함유</strong> (NASA 큐리오시티 확인)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>
                    <strong className="text-white">결합수는 수화광물에 화학적으로 결합</strong> → 고온 가열로만 분리 가능
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>
                    <strong className="text-white">증발 잠열</strong>: 물 1kg 기화에 2,260kJ 필요
                  </div>
                </li>
              </ul>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">관련 블로그:</p>
                <Link
                  href="/blog/mars-water-extraction"
                  className="text-cyber-cyan hover:text-cyber-purple transition underline"
                >
                  물 추출의 물리학 →
                </Link>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">사업 아이디어</h2>

              <h3 className="text-xl font-bold text-white mb-3">제품: Solar-Heated Soil Water Extractor (SHSWE)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>태양열 집열판 + 밀폐 가열 챔버 + 응축기 구성</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>사막 토양 표면 아래 수분(0.5~3%)을 저온 감압 증류로 추출</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>기존 공기 중 수분 추출(AWG)과 차별화: <strong className="text-white">습도 0%인 곳에서도 작동</strong></div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3">타겟 시장</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>중동/북아프리카 건조 지역 (사우디, UAE, 이집트)</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>아프리카 사하라 이남 물 부족 지역</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>재난 구호 (지진/가뭄 긴급 식수)</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>군사 작전 지역 (원격지 식수 자급)</div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3">경쟁사 분석</h3>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">기업</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">기술</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">한계</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">SOURCE (Zero Mass)</td>
                        <td className="py-3 px-4">공기 중 수분 패널</td>
                        <td className="py-3 px-4">습도 필요 (사막 불가)</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">Watergen</td>
                        <td className="py-3 px-4">공기 중 응축기</td>
                        <td className="py-3 px-4">대형, 전력 소비 큼</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-cyber-cyan font-semibold">SHSWE (우리)</td>
                        <td className="py-3 px-4 text-cyber-cyan font-semibold">토양 가열 추출</td>
                        <td className="py-3 px-4 text-cyber-cyan font-semibold">습도 0% 작동</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">시장 규모</h3>
              <p className="text-gray-300 leading-relaxed">
                글로벌 물 부족 솔루션 시장 <strong className="text-green-400">~$900B (2030)</strong>
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">Next Step</h2>
              <div className="bg-dark-800 rounded-xl p-6">
                <p className="text-xl font-medium text-white mb-2">
                  이 아이디어로 팀을 만들고 싶다면?
                </p>
                <p className="text-gray-400 mb-4">
                  향후 커뮤니티 오픈 시 참여 가능합니다.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700 rounded-lg text-gray-500">
                  <span>Coming Soon</span>
                </div>
              </div>
            </section>

            {/* Episode Link */}
            <section className="pt-8 border-t border-dark-600">
              <Link
                href="/ideas/mars-ticket/episode-3"
                className="group flex items-center justify-between p-6 bg-dark-800 rounded-xl hover:bg-dark-700 transition"
              >
                <div>
                  <p className="text-gray-500 mb-1">관련 에피소드</p>
                  <h3 className="text-xl font-bold group-hover:text-cyber-cyan transition">
                    ← 화성행 티켓 EP.03 보러 가기
                  </h3>
                  <p className="text-gray-400">48시간 — 화성 환경 시뮬레이션 서바이벌</p>
                </div>
                <Droplets className="w-6 h-6 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
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
