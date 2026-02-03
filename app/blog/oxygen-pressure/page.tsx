'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Gauge } from 'lucide-react'

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

export default function OxygenPressureBlog() {
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
              기압을 올리면<br />
              <span className="gradient-text">산소가 올라간다</span>
            </h1>
            <p className="text-xl text-gray-400">
              간이 가압 챔버로 생명을 구한다 — 화성행 티켓 EP.03에서 배우는 산소 분압의 물리학
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">산소 분압 — 산소 농도가 아니라 압력이 중요하다</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                우리가 숨 쉴 때 중요한 건 산소의 <strong className="text-white">&quot;농도&quot;</strong>가 아니라 <strong className="text-cyber-cyan">&quot;분압(partial pressure)&quot;</strong>이다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">달톤의 법칙(Dalton&apos;s Law)</strong>:
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  전체 기압 × 산소 비율 = 산소 분압
                </p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-4">
                지구에서:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  전체 기압: 1013 hPa (1기압)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  산소 비율: 21%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  산소 분압: 1013 × 0.21 = <strong className="text-cyber-cyan">213 hPa (160 mmHg)</strong>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성 시뮬레이션 돔에서 기압이 떨어지면?<br />
                산소 농도가 21%로 같아도 <strong className="text-white">분압이 부족</strong>해진다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">산소 분압과 증상:</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">산소 분압</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">상태</th>
                        <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">증상</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">160 mmHg</td>
                        <td className="py-3 px-4 text-green-400">정상</td>
                        <td className="py-3 px-4">없음 (해수면)</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">100 mmHg</td>
                        <td className="py-3 px-4 text-yellow-400">경미</td>
                        <td className="py-3 px-4">고산병 증상 시작</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-3 px-4">60 mmHg</td>
                        <td className="py-3 px-4 text-orange-400">심각</td>
                        <td className="py-3 px-4">의식 상실</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">40 mmHg</td>
                        <td className="py-3 px-4 text-red-400">치명</td>
                        <td className="py-3 px-4">뇌 손상, 사망</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">가압 치료의 원리</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">고압산소치료(Hyperbaric Oxygen Therapy, HBOT)</strong>는<br />
                기압을 높여서 산소 분압을 올리는 의료 기술이다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                원리: <strong className="text-cyber-cyan">헨리의 법칙(Henry&apos;s Law)</strong>
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  C = kP
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  용해도(C) = 상수(k) × 압력(P)
                </p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-4">
                기압을 2배로 올리면 혈액에 녹는 산소량도 2배가 된다.<br />
                폐를 통한 산소 운반 외에도 <strong className="text-white">혈장에 직접 녹은 산소</strong>가 조직에 공급된다.
              </p>
              <blockquote className="border-l-4 border-cyber-purple pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-white">
                  &quot;기압을 올리면 산소 분압이 올라가! 에어락 내부를 밀폐해서 간이 가압 챔버를 만들어!&quot;
                </p>
                <p className="text-gray-400 text-sm mt-2">— 서하준, EP.03</p>
              </blockquote>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">드라마 속 간이 가압 챔버</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                EP.03에서 김태호가 산소 시스템 고장으로 쓰러진다.<br />
                48시간 동안 화성 환경을 시뮬레이션하던 중 산소 분압이 급격히 떨어진 것이다.
              </p>
              <div className="my-6 rounded-lg overflow-hidden border border-dark-600">
                <Image
                  src="/images/blog/ep03-산소누출.webp"
                  alt="EP.03 산소 누출 장면 — 서하준과 박시우"
                  width={2752}
                  height={1536}
                  className="w-full"
                  priority
                />
                <p className="text-xs text-gray-500 px-4 py-2 bg-dark-800">
                  화성행 티켓 EP.03 — 간이 가압 챔버로 김태호를 살리는 팀 7
                </p>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-4">
                <p className="text-gray-400">이지안: &quot;맥박 불규칙! 기도 확보하고 산소 마스크 가져와요!&quot;</p>
                <p className="text-white">서하준: &quot;기압을 올리면 산소 분압이 올라가! 에어락 내부를 밀폐해서 간이 가압 챔버를 만들어!&quot;</p>
                <p className="text-gray-400">박시우: &quot;압축 공기 탱크를 연결한다. 지금!&quot;</p>
                <p className="text-white">이지안: &quot;맥박 안정됐어요... 산소 포화도 회복 중.&quot;</p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">의학과 물리학의 교차.</strong><br />
                이지안의 응급 처치와 서하준의 물리학적 해법이 만나 김태호의 상태가 안정된다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                실제로 등산, 다이빙 사고에서도 같은 원리를 적용한다.<br />
                감압병 치료용 <strong className="text-cyber-cyan">고압 챔버</strong>는 구조대의 필수 장비다.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">실제 의료 현장의 고압산소치료</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                HBOT는 다양한 질환에 적용된다:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <strong className="text-white">감압병</strong>: 다이빙 후 질소 기포 제거
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <strong className="text-white">일산화탄소 중독</strong>: 혈중 CO 제거 가속
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <strong className="text-white">화상, 상처 회복</strong>: 조직 산소 공급 증가
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <strong className="text-white">당뇨 족부 궤양</strong>: 치유 촉진
                </li>
              </ul>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-3">HBOT 장비 비교:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> 대형 고압 챔버: 병원용, $100K+
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> 휴대용 소프트 챔버: 가정/스포츠용, $5K~20K
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> 간이 가압 모듈: 화성 기지 응급용 (드라마)
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">화성에서:</strong><br />
                소형 가압 모듈이 필수 의료 장비가 될 것이다.<br />
                EVA 사고, 기압 변동 시 생명을 구하는 마지막 방어선.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">지구에서:</strong><br />
                응급 의료, 스포츠 의학에서 수요가 급증하고 있다.<br />
                특히 운동선수들이 회복 시간 단축을 위해 적극 활용 중이다.
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
                    Q1. &quot;에베레스트 정상(8848m)에서 산소 분압은 얼마일까? 산소통 없이 얼마나 버틸 수 있을까?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    힌트: 에베레스트 정상 기압 약 337 hPa × 21% = 약 71 hPa (53 mmHg).
                    의식을 잃기 직전 수준이다. 무산소 등반가들은 극한의 적응 훈련으로 가능하지만,
                    일반인은 수 분 내 의식을 잃는다.
                  </p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6">
                  <p className="text-white font-medium mb-2">
                    Q2. &quot;만약 화성 기지의 기압을 지구의 50%로 유지하되, 산소 농도를 42%로 올리면 산소 분압은?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    정답: 506.5 hPa × 0.42 = 약 213 hPa — 지구와 동일한 산소 분압!
                    구조물에 가해지는 압력 부담은 절반으로 줄이면서도,
                    호흡 가능한 환경을 만들 수 있다.
                    실제로 NASA는 이런 &quot;저압/고농도 산소&quot; 환경을 연구 중이다.
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
                <Gauge className="w-6 h-6 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
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
