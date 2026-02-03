'use client'

import Link from 'next/link'
import { ArrowLeft, Sun, TrendingUp, Zap } from 'lucide-react'

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

export default function SolarDustCleanerVenture() {
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
                EnergyTech
              </span>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full">
                $10B Market
              </span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                EP.03
              </span>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <Sun className="w-12 h-12 text-cyber-cyan flex-shrink-0" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  태양전지 먼지 자동 세정 시스템
                </h1>
                <p className="text-xl text-gray-400">
                  사막 태양광 발전소의 효율을 유지하는 자율주행 세정 로봇
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
                EP.03에서 먼지 폭풍이 100km/h로 몰아치며 태양전지 패널을 완전히 덮어버린다.<br />
                전력 생산이 0으로 떨어지고, 산소 생성 시스템(MOXIE)이 멈추며 생존 위기가 시작된다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-4">
                <p className="text-white">서하준: &quot;전력 생산 0%. 태양전지가 완전히 막혔어!&quot;</p>
                <p className="text-gray-400">최현수: &quot;MOXIE가 멈췄다. 산소 생성 중단!&quot;</p>
                <p className="text-white">박시우: &quot;누가 나가서 패널을 닦아야 해. 내가 간다.&quot;</p>
                <p className="text-gray-400">이지안: &quot;시우씨! 위험해요!&quot;</p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                박시우가 폭풍 속에서 태양전지를 닦아내기 위해 나서는 장면.<br />
                생존을 위해 목숨을 걸어야 하는 순간이다.
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  태양전지가 막히면 모든 것이 멈춘다.<br />
                  전력은 화성에서의 생명선이다.
                </p>
              </blockquote>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">물리학 원리</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 먼지 폭풍은 100km/h의 속도로 불지만, 실제 풍압은 매우 약하다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">동압 공식:</p>
                <p className="text-xl font-mono text-cyber-cyan mb-4">
                  q = ½ρv²
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">화성 대기 밀도</strong>: 0.020 kg/m³ (지구의 1/60)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">100km/h 바람</strong>: 동압은 지구의 1.6%에 불과 (7.7 Pa vs 482 Pa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">진짜 위험</strong>: 미세 먼지(1~10μm)가 태양전지 표면에 정전기 흡착</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">효율 감소</strong>: 먼지 적층 시 발전 효율 40% 이상 감소 (NASA MER 데이터)</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                관련 블로그:{' '}
                <Link href="/blog/mars-dust-storm" className="text-cyber-cyan hover:underline">
                  먼지 폭풍의 물리학
                </Link>
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">사업 아이디어</h2>

              <h3 className="text-xl font-semibold text-white mb-4 mt-6">제품: SolarSweep Autonomous Cleaning Robot</h3>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan mt-1 flex-shrink-0" />
                    <span><strong className="text-white">자율주행 로봇</strong>이 태양광 패널 열을 따라 이동하며 세정</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan mt-1 flex-shrink-0" />
                    <span><strong className="text-white">정전기 세정 + 에어 블로우</strong> (물 사용 최소화)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan mt-1 flex-shrink-0" />
                    <span><strong className="text-white">야간 자동 충전</strong> + 주간 패트롤</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan mt-1 flex-shrink-0" />
                    <span><strong className="text-white">먼지 적층 센서</strong>로 세정 주기 최적화</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan mt-1 flex-shrink-0" />
                    <span><strong className="text-white">1대로 태양광 패널 5MW 분량</strong> 관리</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 mt-8">타겟 시장</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">중동 메가솔라 프로젝트</p>
                  <p className="text-gray-400 text-sm">NEOM, 500GW 목표</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">북아프리카 사하라 태양광 단지</p>
                  <p className="text-gray-400 text-sm">세계 최대 태양광 잠재력</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">인도 라자스탄 태양광 발전소</p>
                  <p className="text-gray-400 text-sm">100GW+ 용량</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">미국 남서부 사막 태양광 단지</p>
                  <p className="text-gray-400 text-sm">애리조나, 네바다, 캘리포니아</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <p className="text-white font-medium mb-1">중국 고비 사막 태양광 단지</p>
                  <p className="text-gray-400 text-sm">대규모 국가 프로젝트</p>
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
                      <td className="py-3 px-4">Ecoppia</td>
                      <td className="py-3 px-4">물 없는 로봇 세정</td>
                      <td className="py-3 px-4">고정 레일 방식, 설치 비용 높음</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">SunPower</td>
                      <td className="py-3 px-4">코팅 기술</td>
                      <td className="py-3 px-4">완전 방지 불가</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-3 px-4">Airtouch Solar</td>
                      <td className="py-3 px-4">물 없는 세정</td>
                      <td className="py-3 px-4">수동 배치</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-cyber-cyan">SolarSweep (우리)</td>
                      <td className="py-3 px-4 font-bold text-white">자율주행 + AI</td>
                      <td className="py-3 px-4 font-bold text-green-400">레일 불필요, 유연한 배치</td>
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
                  태양광 O&M(운영·유지보수) 시장: <span className="text-green-400 font-bold text-2xl">~$10B</span> (2028)
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
                href="/blog/mars-dust-storm"
                className="group flex items-center justify-between p-6 bg-dark-800 rounded-xl hover:bg-dark-700 transition"
              >
                <div>
                  <p className="text-gray-500 mb-1">관련 블로그</p>
                  <h3 className="text-xl font-bold group-hover:text-cyber-cyan transition">
                    먼지 폭풍의 물리학 →
                  </h3>
                  <p className="text-gray-400">화성 먼지 폭풍은 100km/h인데 왜 위험하지 않을까?</p>
                </div>
                <Sun className="w-6 h-6 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
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
