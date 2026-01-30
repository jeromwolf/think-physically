'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Rocket } from 'lucide-react'

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

export default function MarsDistanceBlog() {
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
              <span className="text-gray-500">&middot; 6분 읽기</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              화성까지<br />
              <span className="gradient-text">2억 2500만 km</span>
            </h1>
            <p className="text-xl text-gray-400">
              빛의 속도로 12분 30초, 우주선으로 6개월 — 그 거리의 물리학
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">2억 2500만 km — 얼마나 먼 거리인가?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                지구와 화성 사이의 거리는 고정되어 있지 않다.<br />
                두 행성 모두 태양을 돌고 있기 때문이다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-2">지구-화성 거리:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> 최접근 거리: 약 <strong className="text-white">5,460만 km</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> 최원 거리: 약 <strong className="text-white">4억 130만 km</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">&#10003;</span> 평균 거리: 약 <strong className="text-cyber-cyan">2억 2500만 km</strong>
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                비유: 서울-부산(325km)을 <strong className="text-white">69만 번 왕복</strong>하는 거리다.
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">
                  빛의 속도(30만 km/s)로:<br />
                  3분(최접근) ~ 22분(최원), 평균 12분 30초.
                </p>
              </blockquote>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">왜 6개월이나 걸리나?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                직선으로 갈 수 없다.<br />
                우주에서는 <strong className="text-white">호만 전이 궤도(Hohmann Transfer Orbit)</strong>를 사용한다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                지구 탈출 속도 + 화성 도달 궤도를 합치면 타원 궤도가 된다.<br />
                이 타원 궤도를 따라가면 약 <strong className="text-cyber-cyan">5억 km</strong>를 이동한다 — 직선 거리의 2배 이상이다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-3">
                <p className="text-white font-medium">호만 전이 궤도의 원리:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">1.</span>
                    지구 궤도에서 가속하여 타원 궤도에 진입
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">2.</span>
                    타원의 가장 먼 점(원점)이 화성 궤도와 만남
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">3.</span>
                    화성 도착 시 감속하여 화성 궤도에 진입
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                호만 전이 궤도 소요 시간: 약 <strong className="text-white">259일 (8.5개월)</strong>.<br />
                SpaceX Starship 목표: 약 <strong className="text-cyber-cyan">6개월</strong> (더 빠른 궤도와 더 강력한 추진력 사용).
              </p>
              <blockquote className="border-l-4 border-cyber-purple pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-white">
                  우주 여행에서 &quot;최단 거리&quot;와 &quot;최적 경로&quot;는 전혀 다른 개념이다.<br />
                  연료 효율, 시간, 착륙 조건 — 모두를 계산해야 한다.
                </p>
              </blockquote>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">발사 창(Launch Window)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                아무 때나 화성에 갈 수 없다.<br />
                지구와 화성의 상대 위치가 맞아야 한다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                약 <strong className="text-white">26개월마다</strong> 한 번 발사 기회가 온다.<br />
                이것을 <strong className="text-white">시노딕 주기(synodic period)</strong>라고 부른다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-2">발사 창 일정:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">→</span> 다음 발사 창: <strong className="text-white">2026년 11월경</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">→</span> 그 다음: <strong className="text-white">2029년 1월경</strong>
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed">
                놓치면 <strong className="text-cyber-cyan">2년 이상</strong> 기다려야 한다.<br />
                이것이 화성 미션의 가장 큰 제약 조건 중 하나다.<br />
                준비가 덜 되었다고 &quot;다음 달에 가자&quot;는 불가능하다.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">드라마 속 대화</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                EP.02에서 김태호가 새벽 복도에서 창밖의 화성을 가리킨다.
              </p>
              <div className="my-6 rounded-lg overflow-hidden border border-dark-600">
                <Image
                  src="/images/blog/ep02-복도.webp"
                  alt="EP.02 새벽 복도 — 김태호와 서하준이 화성을 바라보며"
                  width={2752}
                  height={1536}
                  className="w-full"
                  priority
                />
                <p className="text-xs text-gray-500 px-4 py-2 bg-dark-800">
                  화성행 티켓 EP.02 — 새벽 복도에서 화성을 바라보는 김태호와 서하준
                </p>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-4">
                <p className="text-white">김태호: &quot;저기 봐. 저 붉은 점.&quot;</p>
                <p className="text-gray-400">서하준: &quot;화성까지의 거리는 약 2억 2500만 km...
                  빛의 속도로 12분 30초.&quot;</p>
                <p className="text-white">김태호: &quot;자네는 뭐든 숫자로 말하는군.&quot;</p>
                <p className="text-gray-400">서하준: &quot;...6개월 후면 우리가 저기 있을지도.&quot;</p>
                <p className="text-cyber-cyan font-bold">김태호: &quot;돌아올 수는 없지만.&quot;</p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                물리학자답게 거리를 빛의 속도로 환산하는 서하준.<br />
                호만 전이 궤도의 현실을 &quot;6개월&quot;이라는 한 마디로 압축한다.<br />
                그리고 김태호의 마지막 말 — 편도 티켓의 무게.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">통신 지연 — 화성에서 전화하면?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                화성에서 지구로 메시지를 보내면, 빛의 속도로도 편도 <strong className="text-white">3~22분</strong>이 걸린다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-2">통신 지연 현실:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    실시간 통화 불가능 (최소 6분의 왕복 지연)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    NASA의 화성 로버는 평균 14분 지연으로 통신
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1">→</span>
                    긴급 상황 발생 시 지구의 도움을 실시간으로 받을 수 없음
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                &quot;안녕?&quot;이라고 보내면, &quot;안녕!&quot;이라는 답이 돌아오는 데 <strong className="text-cyber-cyan">최소 6분</strong>.<br />
                카카오톡에 익숙한 우리에겐 영원 같은 시간이다.
              </p>
              <blockquote className="border-l-4 border-cyber-purple pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-white">
                  드라마에서 다룰 예정: EP12 &quot;지연 없는 화성-지구 통신&quot; 기술.<br />
                  물리 법칙을 우회할 수 있을까?
                </p>
              </blockquote>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">생각해볼 문제</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                ThinkPhysically 스타일로 생각해보자.
              </p>
              <div className="space-y-4">
                <div className="bg-dark-800 rounded-xl p-6">
                  <p className="text-white font-medium mb-2">
                    Q1. &quot;핵추진 로켓으로 속도를 2배로 올리면, 여행 시간은 절반이 될까?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    답: 궤도역학은 단순하지 않다. 속도를 2배로 올리면 궤도 자체가 바뀐다.
                    더 빠른 궤도는 더 많은 연료를 필요로 하고, 도착 시 감속에도 더 많은 연료가 든다.
                    단순 비례가 아닌 쌍곡선 궤도와 로켓 방정식의 문제다.
                  </p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6">
                  <p className="text-white font-medium mb-2">
                    Q2. &quot;화성에서 지구로 SOS를 보내면 구조대는 언제 도착할까?&quot;
                  </p>
                  <p className="text-gray-400 text-sm">
                    SOS 신호 도달: 3~22분. 구조선 발사 준비: 수개월~수년.
                    구조선 도착: 6~9개월. 발사 창을 놓치면 2년 추가.
                    결론: 화성에서는 스스로 해결해야 한다. 이것이 편도 티켓의 의미다.
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
                  <p className="text-gray-400">서바이벌 — 화성까지의 거리와 발사 창의 현실</p>
                </div>
                <Rocket className="w-6 h-6 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
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
