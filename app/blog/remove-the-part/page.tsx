'use client'

import Link from 'next/link'
import { ArrowLeft, Zap } from 'lucide-react'

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

export default function BlogPost1() {
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
                First Principles
              </span>
              <span className="text-gray-500">2026-01-22</span>
              <span className="text-gray-500">· 5분 읽기</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              부품의 최저단가는<br />
              <span className="gradient-text">부품을 없애는 것이다</span>
            </h1>
            <p className="text-xl text-gray-400">
              일론 머스크에게 배우는 물리학적 사고의 첫 번째 원칙
            </p>
          </div>

          {/* Content */}
          <div className="prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">10,000개 vs 1,500개</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                테슬라 Model S의 차체 부품 수는 약 10,000개였다.<br />
                Model Y는? 1,500개.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                같은 자동차다. 사람이 타고, 굴러가고, 목적지에 도착한다.<br />
                그런데 부품 수가 85% 줄었다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                원가 절감? 물론이다.<br />
                하지만 일론 머스크가 한 질문은 &quot;어떻게 더 싸게 만들까?&quot;가 아니었다.
              </p>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white">&quot;이 부품이 왜 존재해야 하지?&quot;</p>
              </blockquote>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">자연은 최소한으로 움직인다</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                물리학에 <strong>최소 작용 원리(Principle of Least Action)</strong>가 있다.
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  빛은 A에서 B로 갈 때 가장 빠른 경로를 택한다.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  물은 가장 낮은 곳으로 흐른다.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  행성은 에너지를 최소화하는 궤도를 돈다.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                자연은 &quot;있어야 할 이유&quot;가 없으면 존재하지 않는다.<br />
                우주에는 불필요한 부품이 없다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                그런데 인간이 만든 시스템은?<br />
                레거시, 관성, &quot;원래 그랬으니까&quot;로 가득하다.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">일론의 질문법</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                SpaceX 엔지니어가 부품 단가를 낮추겠다고 보고했다.<br />
                일론이 물었다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6 space-y-4">
                <p className="text-white">&quot;그 부품이 왜 필요한데?&quot;</p>
                <p className="text-gray-400">&quot;원래 있던 부품입니다.&quot;</p>
                <p className="text-white">&quot;물리 법칙이 그 부품을 요구해?&quot;</p>
                <p className="text-gray-400">&quot;...아뇨.&quot;</p>
                <p className="text-cyber-cyan font-bold">&quot;그럼 없애.&quot;</p>
              </div>
              <blockquote className="border-l-4 border-cyber-purple pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl font-medium text-white mb-2">
                  &quot;The best part is no part.<br />
                  The best process is no process.&quot;
                </p>
                <p className="text-gray-400">
                  최고의 부품은 없는 부품이다.<br />
                  최고의 프로세스는 없는 프로세스다.
                </p>
              </blockquote>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">기가캐스팅: 70개 → 1개</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                테슬라는 Model Y 후면 차체를 만들 때,
                70개의 부품을 찍어내고 용접하는 대신
                <strong className="text-cyber-cyan"> 거대한 주조기로 1개의 부품을 한 번에</strong> 만든다.
              </p>
              <div className="bg-dark-800 rounded-xl p-6 my-6">
                <p className="text-gray-400 mb-2">결과:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">✓</span> 용접 로봇 300대 제거
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">✓</span> 제조 시간 단축
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyber-cyan">✓</span> 차체 강성 향상
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed">
                70개를 1개로 만든 게 아니다.<br />
                <strong className="text-white">69개를 존재하지 않게</strong> 만든 것이다.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">당신의 일에 적용하기</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                이 원리는 제조업에만 해당되지 않는다.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-600">
                      <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">영역</th>
                      <th className="text-left py-3 px-4 text-cyber-cyan font-semibold">질문</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-dark-700 hover:bg-dark-800 transition">
                      <td className="py-3 px-4">코드</td>
                      <td className="py-3 px-4">이 함수가 물리적으로 필요한가?</td>
                    </tr>
                    <tr className="border-b border-dark-700 hover:bg-dark-800 transition">
                      <td className="py-3 px-4">회의</td>
                      <td className="py-3 px-4">이 회의가 없으면 뭐가 안 되는가?</td>
                    </tr>
                    <tr className="border-b border-dark-700 hover:bg-dark-800 transition">
                      <td className="py-3 px-4">보고서</td>
                      <td className="py-3 px-4">이 항목이 의사결정에 영향을 주는가?</td>
                    </tr>
                    <tr className="border-b border-dark-700 hover:bg-dark-800 transition">
                      <td className="py-3 px-4">기능</td>
                      <td className="py-3 px-4">사용자가 진짜 이걸 쓰는가?</td>
                    </tr>
                    <tr className="hover:bg-dark-800 transition">
                      <td className="py-3 px-4">조직</td>
                      <td className="py-3 px-4">이 레이어가 가치를 만드는가?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-lg text-white">&quot;최적화하기 전에, 존재 이유를 물어라.&quot;</p>
              </blockquote>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-cyber-cyan mb-4">빼기의 용기</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                우리는 더하는 데 익숙하다.<br />
                기능을 추가하고, 사람을 뽑고, 프로세스를 만든다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                하지만 물리학적 사고는 반대로 묻는다.
              </p>
              <blockquote className="border-l-4 border-cyber-purple pl-6 py-4 my-6 bg-dark-800 rounded-r-lg">
                <p className="text-xl text-white">
                  &quot;이것이 존재하지 않으면 안 되는<br />
                  물리적 이유가 있는가?&quot;
                </p>
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-4">
                없다면, 빼라.<br />
                가장 완벽한 시스템은 더 이상 뺄 것이 없는 시스템이다.
              </p>
            </section>

            {/* Next Article */}
            <section className="pt-8 border-t border-dark-600">
              <p className="text-gray-500 mb-2">다음 글</p>
              <Link
                href="/blog/controlled-falling"
                className="group flex items-center justify-between p-6 bg-dark-800 rounded-xl hover:bg-dark-700 transition"
              >
                <div>
                  <h3 className="text-xl font-bold group-hover:text-cyber-cyan transition">
                    걷기는 통제된 추락이다
                  </h3>
                  <p className="text-gray-400">휴머노이드 로봇이 가르쳐주는 균형의 물리학</p>
                </div>
                <ArrowLeft className="w-6 h-6 rotate-180 text-cyber-cyan opacity-0 group-hover:opacity-100 transition" />
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
