'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Wind } from 'lucide-react'

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

export default function MarsAtmosphereBlog() {
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
              <span className="text-gray-500">2026-01-30</span>
              <span className="text-gray-500">&middot; 5분 읽기</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              화성의 대기압은<br />
              <span className="gradient-text">지구의 0.6%</span>
            </h1>
            <p className="text-xl text-gray-400">
              감압 챔버에서 살아남기 — 화성행 티켓 EP.02에서 배우는 물리학
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">6.1 hPa — 숫자로 보는 화성 대기</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                지구 대기압: <strong className="text-white">1013 hPa</strong> (1기압).<br />
                화성 대기압: <strong className="text-cyber-cyan">6.1 hPa</strong> (지구의 0.6%).
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                에베레스트 산 꼭대기의 기압이 337 hPa다.<br />
                그것보다도 <strong className="text-white">50배 이상 낮다.</strong>
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">대기 조성 비교:</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">성분</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">화성</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">지구</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">CO&#8322;</td>
                        <td className="py-3 px-4">95.3%</td>
                        <td className="py-3 px-4">0.04%</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">N&#8322;</td>
                        <td className="py-3 px-4">2.7%</td>
                        <td className="py-3 px-4">78%</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">Ar</td>
                        <td className="py-3 px-4">1.6%</td>
                        <td className="py-3 px-4">0.93%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">O&#8322;</td>
                        <td className="py-3 px-4">0.13%</td>
                        <td className="py-3 px-4">21%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                화성의 대기는 거의 전부 이산화탄소다.<br />
                산소는 0.13%. 숨 쉴 수 없다.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">인간의 몸에 무슨 일이 일어나는가?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                약 6.3 kPa(47 mmHg) 이하에서 체온(37&#176;C)에서 혈액이 끓기 시작한다.<br />
                이것을 <strong className="text-white">암스트롱 한계(Armstrong Limit)</strong>라고 부른다.
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  화성 기압(0.6 kPa)은 암스트롱 한계의 1/10.
                </p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-4">
                맨몸으로 화성에 서면:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  약 10-15초 내 의식 상실
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  체온에서 혈액 비등(끓음) 시작
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  피부 아래 조직의 팽창 (에볼리즘)
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                하지만 즉사는 아니다.<br />
                NASA 연구에 따르면 <strong className="text-cyber-cyan">1-2분 내 구조 시 생존 가능</strong>하다.<br />
                1966년 NASA 진공 챔버 사고에서 한 기술자가 진공에 노출되었지만 15초 만에 재가압되어 생존했다.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">드라마 속 감압 챔버</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                EP.02에서 팀 7은 감압 챔버에서 화성 대기압을 시뮬레이션한다.<br />
                선발 과정의 가장 가혹한 테스트 중 하나다.
              </p>
              <div className="my-6 rounded-lg overflow-hidden border border-dark-600">
                <Image
                  src="/images/blog/ep02-감압챔버.webp"
                  alt="EP.02 감압 챔버 장면 — 서하준과 박시우"
                  width={2752}
                  height={1536}
                  className="w-full"
                  priority
                />
                <p className="text-xs text-gray-500 px-4 py-2 bg-dark-800">
                  화성행 티켓 EP.02 — 감압 챔버에서 화성 대기압을 시뮬레이션하는 팀 7
                </p>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-4">
                <p className="text-white">서하준: &quot;화성 대기압은 지구의 0.6%... 정상이야.&quot;</p>
                <p className="text-gray-400">강하늘: &quot;정상이라고? 숨을 못 쉬겠는데?&quot;</p>
                <p className="text-white">박시우: &quot;호흡에 집중해. 4초 들이쉬고, 7초 내쉬어.&quot;</p>
                <p className="text-gray-400">이지안: &quot;...혈중 산소 포화도 떨어지고 있어.&quot;</p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                실제 NASA 훈련에서도 <strong className="text-white">저압 챔버(hypobaric chamber)</strong> 테스트를 실시한다.<br />
                우주비행사들은 고도 25,000피트(약 7,620m)에 해당하는 저압 환경에서 저산소증 증상을 직접 체험한다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                전투기 조종사도 비슷한 고도 훈련을 받는다.<br />
                자신만의 저산소증 증상(시야 흐려짐, 손끝 저림, 행복감)을 알아야<br />
                실전에서 대응할 수 있기 때문이다.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">SpaceX와 화성 우주복</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 지표에서 활동하려면 우주복이 필수다.<br />
                대기가 거의 없기 때문이다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-2">우주복 내부 압력 비교:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> SpaceX EVA 우주복: 약 29.6 kPa (지구의 약 30%)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> NASA EMU: 약 29.6 kPa (순수 산소)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> 화성 외부: 0.6 kPa (우주복의 1/50)
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 기지에서는 <strong className="text-white">가압 모듈(hab)</strong> 내부를 지구 수준의 기압으로 유지한다.<br />
                바깥 활동(EVA) 시에는 반드시 우주복을 착용해야 한다.
              </p>
              <blockquote className="border-l-4 border-cyber-purple pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-white">
                  우주복은 &quot;입는 우주선&quot;이다.<br />
                  기압, 온도, 산소, 방사선 — 모든 것을 한 벌의 옷이 해결한다.
                </p>
              </blockquote>
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
                    Q1. &quot;만약 화성의 기압이 지구의 10%였다면, 테라포밍은 얼마나 쉬워졌을까?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    힌트: 현재 화성 기압은 지구의 0.6%. 10%라면 약 17배 높은 것이다.
                    액체 상태의 물이 표면에 존재할 수 있는 조건을 생각해보라.
                  </p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6">
                  <p className="text-white font-medium mb-2">
                    Q2. &quot;화성 대기압에서 물은 몇 도에서 끓을까?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    정답: 약 0&#176;C — 물의 삼중점(611 Pa) 근처이기 때문이다.
                    화성 표면 기압(610 Pa)은 물의 삼중점과 거의 같다.
                    이 기압에서 물은 얼음에서 바로 기체로 승화하거나, 녹자마자 끓는다.
                  </p>
                </div>
              </div>
            </section>

            {/* Episode Link */}
            <section className="pt-8 border-t border-dark-600">
              <Link
                href="/ideas/mars-ticket/episode-2"
                className="group flex items-center justify-between p-6 bg-dark-800 rounded-xl hover:bg-dark-700 transition"
              >
                <div>
                  <p className="text-gray-500 mb-1">관련 에피소드</p>
                  <h3 className="text-xl font-bold group-hover:text-cyber-cyan transition">
                    ← 화성행 티켓 EP.02 보러 가기
                  </h3>
                  <p className="text-gray-400">서바이벌 — 감압 챔버와 화성 환경 테스트</p>
                </div>
                <Wind className="w-6 h-6 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
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
