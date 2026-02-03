'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Radio } from 'lucide-react'

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

export default function SoundTriangulationBlog() {
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
              <span className="text-gray-500">&middot; 5분 읽기</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              소리의 속도로<br />
              <span className="gradient-text">위치를 찾는다</span>
            </h1>
            <p className="text-xl text-gray-400">
              삼각 측량으로 산소 누출점을 역추적하다 — 화성행 티켓 EP.03에서 배우는 음파의 물리학
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">소리는 정보를 담고 있다</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                소리는 매질을 통해 전파되는 기계파다.<br />
                지구 대기에서 음속은 약 <strong className="text-white">343 m/s</strong> (20°C 기준).
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                음속은 매질의 특성에 따라 달라진다:
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">음속 결정 요인:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">온도</strong> — 온도가 높을수록 빠름</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">기압</strong> — 압력이 높을수록 빠름</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <span><strong className="text-white">기체 조성</strong> — 분자량에 따라 변화</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                음속 공식: <span className="font-mono text-cyber-cyan">v = √(γRT/M)</span>
              </p>
              <ul className="space-y-2 text-gray-300 mb-4 ml-4">
                <li>γ = 비열비 (단원자 1.67, 이원자 1.40)</li>
                <li>R = 기체상수 (8.314 J/mol·K)</li>
                <li>T = 절대온도 (K)</li>
                <li>M = 분자량 (kg/mol)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 대기는 95% CO₂로 구성되어 있다.<br />
                화성에서의 음속: 약 <strong className="text-cyber-cyan">240 m/s</strong> (지구보다 약 30% 느림)
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  음속이 느리면 시간차가 커져서<br />
                  삼각 측량이 더 정확해질 수 있다.
                </p>
              </blockquote>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">삼각 측량 — 3개 지점의 시간차로 위치를 계산한다</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                소리가 여러 센서에 도달하는 <strong className="text-white">시간차(TDOA, Time Difference of Arrival)</strong>를 측정하면<br />
                소리의 발생 위치를 역추적할 수 있다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                기본 원리:
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="font-mono text-cyber-cyan text-xl mb-4">d = v × Δt</p>
                <ul className="space-y-2 text-gray-300">
                  <li>d = 거리 (m)</li>
                  <li>v = 음속 (m/s)</li>
                  <li>Δt = 시간차 (s)</li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">3개 이상의 센서</strong>에서 시간차를 측정하면:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  각 센서로부터의 거리로 원(2D) 또는 구(3D)를 그린다
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  이들의 교차점이 소리의 발생 위치
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  센서가 많을수록 정확도 증가
                </li>
              </ul>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">위치 추적 기술 비교:</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">기술</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">GPS</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">음향 삼각측량</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">신호원</td>
                        <td className="py-3 px-4">위성</td>
                        <td className="py-3 px-4">센서</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">신호 종류</td>
                        <td className="py-3 px-4">전파</td>
                        <td className="py-3 px-4">음파</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">속도</td>
                        <td className="py-3 px-4">광속 (3×10⁸ m/s)</td>
                        <td className="py-3 px-4">음속 (~340 m/s)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">사용 환경</td>
                        <td className="py-3 px-4">지구 전역</td>
                        <td className="py-3 px-4">실내/지하/밀폐 공간</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <blockquote className="border-l-4 border-cyber-purple pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-white font-medium">
                  &quot;소리의 전파 속도로 위치를 역추적할 수 있어. 시우 형, 반대편에서 들어봐!&quot;
                </p>
                <p className="text-gray-400 text-sm mt-2">— 서하준, EP.03</p>
              </blockquote>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">드라마 속 삼각 측량</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                EP.03에서 팀 7은 화성 시뮬레이션 돔에서 산소 누출 위기를 맞는다.<br />
                48시간 내에 누출점을 찾지 못하면 모두 실격이다.
              </p>
              <div className="my-6 rounded-lg overflow-hidden border border-dark-600">
                <Image
                  src="/images/blog/ep03-무전기.webp"
                  alt="EP.03 산소 누출 감지 — 박시우"
                  width={2752}
                  height={1536}
                  className="w-full"
                  priority
                />
                <p className="text-xs text-gray-500 px-4 py-2 bg-dark-800">
                  화성행 티켓 EP.03 — 음향 삼각 측량으로 산소 누출점을 찾는 박시우
                </p>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-4">
                <p className="text-white">서하준: &quot;소리의 전파 속도로 위치를 역추적할 수 있어. 시우 형, 반대편에서 들어봐!&quot;</p>
                <p className="text-gray-400">박시우: (무전기로) &quot;쉿— 들렸다. 5초 차이.&quot;</p>
                <p className="text-white">서하준: &quot;340 m/s × 5초... 약 1.7km. 삼각 측량 완성!&quot;</p>
                <p className="text-gray-400">박시우: &quot;3시 방향 접합부! 확인했다!&quot;</p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                물리학자와 전술 전문가의 첫 번째 협업.<br />
                서하준의 계산과 박시우의 공간 감각이 만나 누출 위치를 특정한다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-cyber-cyan">Caption:</strong> 물리학과 전술의 첫 번째 교차. 누출 위치를 찾아 수리에 성공한다.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">실제 산업 현장의 음향 누출 감지</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                음향 삼각 측량은 이미 산업 현장에서 널리 사용되고 있다.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-dark-800 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">Acoustic Emission Testing (AET)</h3>
                  <p className="text-gray-300">
                    배관, 압력용기, 구조물의 균열이나 누출을 감지한다.<br />
                    재료가 파괴될 때 발생하는 초음파를 여러 센서로 포착해 위치를 특정한다.
                  </p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">초음파 누출 감지기</h3>
                  <p className="text-gray-300">
                    가스나 압축 공기가 누출될 때 발생하는 초음파(20kHz 이상)를 감지한다.<br />
                    방향성 마이크로 누출 지점의 방향과 거리를 추정할 수 있다.
                  </p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">수도관 누출 감지</h3>
                  <p className="text-gray-300">
                    지하에 묻힌 배관의 누수 위치를 찾는 데 사용된다.<br />
                    물이 압력을 받고 누출될 때 발생하는 소리를 지상에서 감지한다.
                  </p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">최신 기술: AI + 음향 센서 어레이</h3>
                  <p className="text-gray-300">
                    수십 개의 센서를 배치하고 AI로 패턴을 분석해<br />
                    누출을 자동으로 감지하고 위치를 실시간으로 추적한다.
                  </p>
                </div>
              </div>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  소리는 가장 오래된 센서이자<br />
                  가장 정직한 증인이다.
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
                    Q1. &quot;화성 시뮬레이션 돔(직경 50m)에서 소리가 한쪽 끝에서 다른 쪽까지 가는 데 걸리는 시간은?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    힌트: 화성 대기 음속은 약 240 m/s. 거리는 50m.<br />
                    시간 = 거리 / 속도 = 50 / 240 ≈ 0.21초 (약 200 밀리초)
                  </p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6">
                  <p className="text-white font-medium mb-2">
                    Q2. &quot;만약 센서 2개만 있다면 위치를 특정할 수 있을까? 몇 가지 후보 지점이 나올까?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    힌트: 센서 2개로는 쌍곡선(hyperbola) 상의 무한한 점들이 후보가 된다.<br />
                    2D에서는 곡선, 3D에서는 쌍곡면이 된다.<br />
                    따라서 정확한 위치 특정이 불가능하다. 최소 3개(2D) 또는 4개(3D) 센서가 필요하다.
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
                <Radio className="w-6 h-6 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
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
