'use client'

import Link from 'next/link'
import { ArrowLeft, Heart } from 'lucide-react'

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

export default function PortableHyperbaricVenture() {
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
                MedTech
              </span>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full">
                $4.5B Market
              </span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                EP.03
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-10 h-10 text-cyber-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="gradient-text">휴대용 가압 의료기기</span>
            </h1>
            <p className="text-xl text-gray-400">
              간이 가압 챔버 기술을 응급의료에 적용
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">드라마 속 장면</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                EP.03에서 김태호(67세)가 산소 시스템 고장으로 쓰러진다. 산소 분압이 60mmHg 이하로 떨어져 의식을 잃은 상황. 서하준이 에어락 공간을 밀봉하고 남은 산소를 집중시켜 간이 가압 챔버를 만든다. 기압을 1.5배로 올려 산소 분압을 90mmHg까지 회복시킨 결과, 김태호가 의식을 되찾는다.
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  &quot;에어락을 밀봉해. 남은 산소를 집중시킬 거야.&quot;<br />
                  <span className="text-gray-400 text-base">— 서하준 (화성행 티켓 EP.03)</span>
                </p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed">
                이 장면은 고압산소치료(HBOT)의 응급 적용을 보여준다.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">물리학 원리</h2>
              <ul className="space-y-3 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>
                    <strong className="text-white">돌턴의 법칙</strong>: 산소 분압 = 전체 기압 × 산소 비율
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>
                    <strong className="text-white">헨리의 법칙</strong>: 기압이 높을수록 혈액에 녹는 산소량 증가
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>
                    <strong className="text-white">고압산소치료(HBOT)</strong>: 2~3기압에서 산소 흡입 → 혈장 산소 10~15배 증가
                  </div>
                </li>
              </ul>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">관련 블로그:</p>
                <Link
                  href="/blog/oxygen-pressure"
                  className="text-cyber-cyan hover:text-cyber-purple transition underline"
                >
                  산소 분압의 물리학 →
                </Link>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">사업 아이디어</h2>

              <h3 className="text-xl font-bold text-white mb-3">제품: Smart Portable Hyperbaric System (SPHS)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>가모프 백(Gamow Bag)의 차세대 버전</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>IoT 산소 센서 + 자동 가압 펌프 + 실시간 모니터링</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div><strong className="text-white">무게 5kg 이하, 3분 내 가압 완료</strong></div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>스마트폰 앱으로 원격 의료진 모니터링</div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3">타겟 시장</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>고산지대 등반팀/구조대 (에베레스트, 안나푸르나)</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>항공사 기내 응급장비</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>군 특수부대 (고고도 작전)</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>잠수 사고 현장 응급처치</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <div>스포츠 의학 (선수 회복)</div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3">경쟁사 분석</h3>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">기업</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">제품</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">한계</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">Chinook Medical</td>
                        <td className="py-3 px-4">Gamow Bag</td>
                        <td className="py-3 px-4">수동 펌프, 모니터링 없음</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">SOS Hyperlite</td>
                        <td className="py-3 px-4">경량 챔버</td>
                        <td className="py-3 px-4">IoT 미지원</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-cyber-cyan font-semibold">SPHS (우리)</td>
                        <td className="py-3 px-4 text-cyber-cyan font-semibold">스마트 가압 시스템</td>
                        <td className="py-3 px-4 text-cyber-cyan font-semibold">자동화 + 원격 모니터링</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">시장 규모</h3>
              <p className="text-gray-300 leading-relaxed">
                고압산소치료(HBOT) 시장 <strong className="text-green-400">~$4.5B (2028)</strong>
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
                <Heart className="w-6 h-6 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
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
