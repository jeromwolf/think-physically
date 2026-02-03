'use client'

import Link from 'next/link'
import Image from 'next/image'
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

export default function MarsWaterExtractionBlog() {
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
                Mars Science
              </span>
              <span className="text-gray-500">2026-02-03</span>
              <span className="text-gray-500">&middot; 6분 읽기</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              화성 토양의 수분 함량은<br />
              <span className="gradient-text">2%</span>
            </h1>
            <p className="text-xl text-gray-400">
              460°C로 토양을 가열하면 물이 나온다 — 화성행 티켓 EP.03에서 배우는 물 추출의 물리학
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">화성에 물은 있다 — 문제는 형태다</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성에는 물이 있다.<br />
                극관(polar ice caps) 얼음: 직경 약 1000km의 빙하.<br />
                지하 얼음: 표면 아래 수 미터 깊이에 분포.<br />
                토양 수분: 레골리스(regolith)에 질량 기준 <strong className="text-cyber-cyan">2~5% 물 함유</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                하지만 표면에 액체 상태의 물은 없다.<br />
                대기압(6.1 hPa)이 <strong className="text-white">물의 삼중점(611 Pa)</strong> 근처이기 때문이다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">지구 vs 화성 물 비교:</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">형태</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">지구</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">화성</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">바다/강/호수</td>
                        <td className="py-3 px-4">96.5%</td>
                        <td className="py-3 px-4">0%</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">극관 얼음</td>
                        <td className="py-3 px-4">1.7%</td>
                        <td className="py-3 px-4">대부분</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">지하 얼음</td>
                        <td className="py-3 px-4">1.7%</td>
                        <td className="py-3 px-4">다수</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">토양 수분</td>
                        <td className="py-3 px-4">0.001%</td>
                        <td className="py-3 px-4">2~5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                화성에서 물을 얻으려면 얼음을 녹이거나 토양을 가열해야 한다.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">460°C — 토양에서 물을 빼내는 온도</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 토양(regolith)에 결합된 물은 두 가지 형태로 존재한다:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <strong className="text-white">흡착수(adsorbed water)</strong>: 광물 표면에 붙어 있는 물 — 약 200°C에서 방출
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <strong className="text-white">결정수(hydration water)</strong>: 광물 구조 내부에 결합된 물 — 약 460°C에서 분리
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                토양을 가열하면 결합수가 수증기로 증발한다.<br />
                이를 냉각·응축하면 <strong className="text-cyber-cyan">액체 상태의 물</strong>을 얻을 수 있다.
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  &quot;토양을 가열하면 수분이 증발해. 460°C면 충분해.&quot;<br />
                  <span className="text-gray-400 text-base">— 서하준 (화성행 티켓 EP.03)</span>
                </p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-4">
                실제로 NASA의 <strong className="text-white">MOXIE(Mars Oxygen In-Situ Resource Utilization Experiment)</strong>는<br />
                퍼서비어런스 로버에 탑재되어 화성 대기의 CO&#8322;를 산소로 변환하는 실험에 성공했다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                물 추출도 비슷한 원리다: 현지 자원을 활용한 <strong className="text-cyber-cyan">ISRU(In-Situ Resource Utilization)</strong>.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">드라마 속 물 추출 장면</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                EP.03에서 팀 7은 48시간 화성 환경 시뮬레이션 테스트를 받는다.<br />
                최현수의 로봇이 고장나고, 서하준이 모터 열을 이용해 토양에서 물을 추출한다.
              </p>
              <div className="my-6 rounded-lg overflow-hidden border border-dark-600">
                <Image
                  src="/images/blog/ep03-물추출.webp"
                  alt="EP.03 물 추출 장면 — 서하준과 최현수"
                  width={2752}
                  height={1536}
                  className="w-full"
                  priority
                />
                <p className="text-xs text-gray-500 px-4 py-2 bg-dark-800">
                  화성행 티켓 EP.03 — 서하준이 모터 열로 토양을 가열해 물을 추출하는 장면
                </p>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-4">
                <p className="text-white">서하준: &quot;토양을 가열하면 수분이 증발해. 460°C면 충분해. 현수 형, 모터 열 이용할 수 있어?&quot;</p>
                <p className="text-gray-400">최현수: &quot;하나의 모터 열로 충분해. 린, 온도 모니터링 맡아줄래?&quot;</p>
                <p className="text-white">린: &quot;460°C 도달... 수증기 검출 중.&quot;</p>
                <p className="text-gray-400">이지안: &quot;응축기 작동... 물 나온다!&quot;</p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                실제 NASA와 SpaceX는 화성에서 물 추출 기술을 개발 중이다.<br />
                <strong className="text-white">Rodwell 시스템</strong>: 극관 얼음을 녹여 물 추출.<br />
                <strong className="text-white">Regolith heating</strong>: 토양 가열로 결합수 추출.
              </p>
              <p className="text-gray-300 leading-relaxed">
                EP.03의 장면은 <strong className="text-cyber-cyan">실제 기술 로드맵</strong>을 반영한 것이다.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">1톤의 토양에서 20리터의 물</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 토양에 2% 수분이 함유되어 있다면:
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">물 추출 계산:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    토양 1000kg × 2% = <strong className="text-white">20kg 물</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    물의 밀도 1kg/L → <strong className="text-cyber-cyan">20L 물</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    1인당 하루 필요량: 약 3L (음용수 기준)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    7명 × 3L = <strong className="text-white">21L/일</strong>
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                즉, <strong className="text-white">하루에 약 1톤의 토양을 처리</strong>해야 7명이 살 수 있다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                에너지는 얼마나 필요할까?
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  토양 비열: 약 0.8 kJ/(kg·K)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  온도 상승: 20°C → 460°C (440K 차이)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  에너지: 1000kg × 0.8 kJ/(kg·K) × 440K = <strong className="text-white">352,000 kJ (약 98 kWh)</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  물 증발 잠열: 20kg × 2260 kJ/kg = <strong className="text-white">45,200 kJ (약 12.5 kWh)</strong>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                총 에너지: 약 <strong className="text-cyber-cyan">110 kWh/일</strong>.<br />
                이를 태양광 패널로 충당하려면 약 22kW 용량(화성 일조량 고려)이 필요하다.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">생각해볼 문제</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                ThinkPhysically 스타일로 생각해보자.
              </p>
              <div className="space-y-4">
                <div className="bg-dark-800 rounded-xl p-6">
                  <p className="text-white font-medium mb-2">
                    Q1. &quot;화성 토양 1kg을 460°C로 가열하는 데 필요한 에너지는?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    힌트: 비열 c = 0.8 kJ/(kg·K), 온도 차이 ΔT = 440K.<br />
                    Q = m × c × ΔT 공식을 사용하라.<br />
                    정답: 1kg × 0.8 kJ/(kg·K) × 440K = 352 kJ.
                  </p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6">
                  <p className="text-white font-medium mb-2">
                    Q2. &quot;화성의 극관 얼음을 녹이는 것과 토양에서 추출하는 것, 어느 쪽이 효율적일까?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    힌트: 얼음 녹이기(융해열 334 kJ/kg) vs 토양 가열 + 증발(약 352 + 2260 kJ/kg per 1kg water).<br />
                    극관은 멀고, 토양은 현지에 있다.<br />
                    운송 비용 vs 에너지 비용의 트레이드오프를 생각하라.
                  </p>
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
