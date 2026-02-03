'use client'

import Link from 'next/link'
import { ArrowLeft, Radio, TrendingUp, Zap } from 'lucide-react'

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

export default function AcousticLeakDetectorVenture() {
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
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-cyber-purple/10 text-cyber-purple text-sm font-medium rounded-full">
                IndustrialAI
              </span>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full">
                $3.5B Market
              </span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                EP.03
              </span>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <Radio className="w-12 h-12 text-cyber-cyan flex-shrink-0" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  AI 음향 누출 감지 시스템
                </h1>
                <p className="text-xl text-gray-400">
                  삼각 측량 + AI로 배관 누출을 자동으로 찾는다
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">드라마 속 장면</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                EP.03에서 산소 누출이 발생했을 때 린(해커)이 마이크 3개를 돔 내부에 설치한다.<br />
                각 마이크에 누출 소리가 도착하는 시간 차이(TDOA)를 분석하여 누출 지점을 역추적한다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-4">
                <p className="text-white">린: &quot;마이크 3개 설치 완료. 음파 분석 시작.&quot;</p>
                <p className="text-gray-400">서하준: &quot;각 마이크의 시간차를 측정해. TDOA 방식으로 역추적할 수 있어.&quot;</p>
                <p className="text-white">린: &quot;소리가 마이크 1에 0.012초 먼저 도달... 삼각 측량 완료. 3번 연결부!&quot;</p>
                <p className="text-gray-400">박시우: &quot;위치 확인. 가서 수리한다!&quot;</p>
              </div>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  소리는 거짓말을 하지 않는다.<br />
                  음파의 도달 시간이 정확한 위치를 알려준다.
                </p>
              </blockquote>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">물리학 원리</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                음파 삼각 측량은 GPS와 동일한 원리를 사용한다.<br />
                전파 대신 음파를 사용할 뿐이다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">핵심 물리학:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">음파 속도</strong> — 지구 343m/s, 화성 ~240m/s (CO₂ 대기)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">TDOA(Time Difference of Arrival)</strong> — Δt × v = 거리 차이</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">마이크 3개 이상</strong> → 쌍곡선 교차 → 위치 특정</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">GPS와 동일한 원리</strong> (전파 대신 음파 사용)</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                관련 블로그:{' '}
                <Link href="/blog/sound-triangulation" className="text-cyber-cyan hover:underline">
                  음파의 물리학
                </Link>
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">사업 아이디어</h2>

              <h3 className="text-xl font-semibold text-white mb-4 mt-6">제품: AcousticAI Leak Detection System</h3>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan mt-1 flex-shrink-0" />
                    <span><strong className="text-white">마이크 어레이</strong> (4~8개) + 엣지 AI 프로세서</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan mt-1 flex-shrink-0" />
                    <span><strong className="text-white">실시간 음향 분석</strong>으로 누출 위치 자동 특정</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan mt-1 flex-shrink-0" />
                    <span><strong className="text-white">기존 초음파 방식 대비</strong>: 넓은 범위 동시 감시, 설치 간편</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan mt-1 flex-shrink-0" />
                    <span><strong className="text-white">클라우드 대시보드</strong>로 이력 관리</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 mt-8">타겟 시장</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">석유/가스 배관 모니터링</p>
                  <p className="text-gray-400 text-sm">수십만 km 배관망</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">수도관 누수 감지</p>
                  <p className="text-gray-400 text-sm">도시 인프라</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">화학 공장 가스 누출 감지</p>
                  <p className="text-gray-400 text-sm">안전 규제 대응</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">반도체 팹 클린룸 기밀 모니터링</p>
                  <p className="text-gray-400 text-sm">초정밀 환경 유지</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">건물 관리</p>
                  <p className="text-gray-400 text-sm">냉매, 가스 배관</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 mt-8">경쟁사 분석</h3>
              <div className="overflow-x-auto bg-dark-800 rounded-xl p-6 my-6">
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
                      <td className="py-3 px-4">FLIR (Teledyne)</td>
                      <td className="py-3 px-4">적외선 카메라</td>
                      <td className="py-3 px-4">고가, 근거리만</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">Echologics (Mueller)</td>
                      <td className="py-3 px-4">음향 상관법</td>
                      <td className="py-3 px-4">설치 복잡, 2포인트만</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">Atmos International</td>
                      <td className="py-3 px-4">압력 모니터링</td>
                      <td className="py-3 px-4">소규모 누출 탐지 어려움</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-cyber-cyan">AcousticAI (우리)</td>
                      <td className="py-3 px-4 font-bold text-white">AI + 마이크 어레이</td>
                      <td className="py-3 px-4 font-bold text-green-400">넓은 범위, 자동화, 실시간</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-xl p-6 my-6 border border-cyber-cyan/20">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <p className="text-white font-bold text-xl">시장 규모</p>
                </div>
                <p className="text-gray-300">
                  배관 누출 감지 시장: <span className="text-green-400 font-bold text-2xl">~$3.5B</span> (2028)
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">Next Step</h2>
              <div className="bg-dark-800 rounded-xl p-8 text-center">
                <p className="text-gray-400 mb-4">이 아이디어로 팀을 만들고 싶다면?</p>
                <p className="text-white text-xl font-semibold mb-2">Coming Soon</p>
                <p className="text-gray-500 text-sm">
                  커뮤니티 기능 준비 중입니다
                </p>
              </div>
            </section>

            {/* Related Links */}
            <section className="pt-8 border-t border-dark-600 space-y-4">
              <Link
                href="/blog/sound-triangulation"
                className="group flex items-center justify-between p-6 bg-dark-800 rounded-xl hover:bg-dark-700 transition"
              >
                <div>
                  <p className="text-gray-500 mb-1">관련 블로그</p>
                  <h3 className="text-xl font-bold group-hover:text-cyber-cyan transition">
                    음파의 물리학 →
                  </h3>
                  <p className="text-gray-400">삼각 측량으로 산소 누출점을 역추적하다</p>
                </div>
                <Radio className="w-6 h-6 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
              </Link>

              <Link
                href="/ideas/mars-ticket/episode-3"
                className="group flex items-center justify-between p-6 bg-dark-800 rounded-xl hover:bg-dark-700 transition"
              >
                <div>
                  <p className="text-gray-500 mb-1">관련 에피소드</p>
                  <h3 className="text-xl font-bold group-hover:text-cyber-cyan transition">
                    화성행 티켓 EP.03 보러 가기 →
                  </h3>
                  <p className="text-gray-400">48시간 — 화성 환경 시뮬레이션 서바이벌</p>
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
