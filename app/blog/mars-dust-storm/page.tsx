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

export default function MarsDustStormBlog() {
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
              화성 먼지 폭풍의 풍속은<br />
              <span className="gradient-text">100km/h</span>
            </h1>
            <p className="text-xl text-gray-400">
              하지만 바람의 힘은 지구의 1%도 안 된다 — 화성행 티켓 EP.03에서 배우는 먼지 폭풍의 물리학
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">&quot;100km/h인데 위험하지 않다고?&quot;</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 먼지 폭풍의 풍속은 시속 100km에 달한다.<br />
                지구에서라면 나무를 쓰러뜨리고 지붕을 날릴 수 있는 강풍이다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                그런데 화성에서는 다르다.<br />
                바람의 <strong className="text-white">힘(풍압)</strong>을 결정하는 건 속도만이 아니기 때문이다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">풍압 공식:</p>
                <p className="text-xl font-mono text-cyber-cyan mb-4">
                  풍압 = 0.5 × 공기밀도 × 속도²
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">환경</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">공기밀도 (kg/m³)</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">100km/h 풍압 (Pa)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">지구</td>
                        <td className="py-3 px-4">~1.225</td>
                        <td className="py-3 px-4">~473</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">화성</td>
                        <td className="py-3 px-4">~0.02</td>
                        <td className="py-3 px-4">~7.7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  화성의 바람은 지구의 약 1.6%의 힘밖에 없다.
                </p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-4">
                영화 &quot;마션&quot;에서 모래폭풍이 로켓을 쓰러뜨리는 장면을 기억하는가?<br />
                감독 리들리 스콧도 인정했듯이, 그 장면은 <strong className="text-white">물리적으로 불가능</strong>하다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                화성의 대기는 지구의 1/60밖에 안 된다.<br />
                아무리 빠른 바람도 큰 구조물을 밀 수 없다.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">&quot;진짜 위험은 바람이 아니라 먼지&quot;</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 먼지 폭풍의 진짜 위험은 속도가 아니라 <strong className="text-white">먼지 입자</strong> 자체다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <strong className="text-white">입자 크기:</strong> 1-2 마이크로미터 (PM2.5 수준)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <strong className="text-white">정전기 대전:</strong> 먼지 입자가 마찰로 정전기를 띔
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <strong className="text-white">태양전지판 오염:</strong> 발전 효율 급감
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    <strong className="text-white">시야 차단:</strong> 햇빛이 완전히 가려짐
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                2018년, NASA의 Opportunity 로버가 화성 글로벌 먼지 폭풍에 갇혔다.<br />
                태양전지판이 먼지로 뒤덮이며 전력이 끊겼고, 로버는 <strong className="text-white">영원히 침묵</strong>했다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성의 글로벌 먼지 폭풍은 화성 전체를 뒤덮을 수 있다.<br />
                지속 기간: <strong className="text-cyber-cyan">수주에서 수개월</strong>
              </p>
              <p className="text-gray-300 leading-relaxed">
                화성 탐사선들은 이 먼지와의 싸움이다.<br />
                Spirit, Opportunity, InSight — 모두 먼지와 관련된 이유로 임무를 종료했다.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">&quot;드라마 속 먼지 폭풍&quot;</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                EP.03에서 팀 7은 화성 환경 시뮬레이션 돔에서 먼지 폭풍을 만난다.<br />
                48시간 생존 미션의 가장 위험한 순간이다.
              </p>
              <div className="my-6 rounded-lg overflow-hidden border border-dark-600">
                <Image
                  src="/images/blog/ep03-먼지폭풍.webp"
                  alt="EP.03 먼지 폭풍 장면 — 시뮬레이션 돔 내부"
                  width={2752}
                  height={1536}
                  className="w-full"
                  priority
                />
                <p className="text-xs text-gray-500 px-4 py-2 bg-dark-800">
                  화성행 티켓 EP.03 — 먼지 폭풍 속에서 구조물을 보강하는 팀 7
                </p>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-4">
                <p className="text-white">서하준: &quot;풍압은 0.5 곱하기 공기밀도 곱하기 속도의 제곱... 10kPa 이하면 구조물은 버텨!&quot;</p>
                <p className="text-gray-400">박시우: &quot;방어 태세! 약한 곳부터 보강해!&quot;</p>
                <p className="text-white">최현수: &quot;하나! 외벽 지지해!&quot; (로봇에게)</p>
              </div>
              <blockquote className="border-l-4 border-cyber-purple pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-white">
                  전술, 생존, 물리, 로봇의 교차.<br />
                  7명이 힘을 합쳐 6시간의 폭풍을 버텨낸다.
                </p>
              </blockquote>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">NASA의 화성 기상 관측</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 먼지 폭풍을 예측하는 건 어렵다.<br />
                지구의 기상 예보도 불완전한데, 화성은 더 복잡하다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-2">주요 관측 장비:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> Mars Climate Sounder (MCS) on MRO — 대기 온도/먼지 프로파일
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> InSight lander — 풍속/풍향/기압 실시간 측정
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> Mars 2020 Perseverance — MEDA 기상 센서
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 먼지 폭풍 시즌: <strong className="text-white">남반구 여름</strong> (Ls 200-300)<br />
                이 시기에 지역 먼지 폭풍이 글로벌 먼지 폭풍으로 성장할 수 있다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                하지만 왜 어떤 해는 글로벌 먼지 폭풍이 발생하고 어떤 해는 발생하지 않는지는 <strong className="text-cyber-cyan">아직 미스터리</strong>다.<br />
                화성 기상 예보는 인류가 풀어야 할 숙제다.
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
                    Q1. &quot;화성에서 풍력 발전은 가능할까? 공기밀도가 1/60이라면 같은 풍속에서 에너지는?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    힌트: 풍력 에너지는 공기밀도 × 속도³에 비례한다.
                    화성에서 풍력 발전기는 지구에서보다 얼마나 비효율적일까?
                  </p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6">
                  <p className="text-white font-medium mb-2">
                    Q2. &quot;화성 먼지 폭풍이 태양전지를 100% 가리면, 핵전지(RTG) 없이 며칠을 버틸 수 있을까?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    생각해보기: 배터리 용량, 최소 생명 유지 전력, 난방 에너지.
                    Opportunity는 먼지 폭풍으로 인해 전력이 끊긴 후 재연락에 실패했다.
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
