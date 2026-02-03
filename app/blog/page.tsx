'use client'

import Link from 'next/link'
import { ArrowLeft, Zap, Bot, Thermometer, Atom, Wind, Rocket, Droplets, Gauge, Ear } from 'lucide-react'

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

const blogPosts = [
  {
    id: 8,
    slug: 'sound-triangulation',
    title: '소리의 속도로 위치를 찾는다',
    description: '삼각 측량으로 산소 누출점을 역추적하다 — 음파의 물리학',
    category: 'Mars Science',
    icon: <Ear className="w-6 h-6" />,
    date: '2026-02-03',
    readTime: '5분',
    episodeLink: 'EP.03',
  },
  {
    id: 7,
    slug: 'oxygen-pressure',
    title: '기압을 올리면 산소가 올라간다',
    description: '간이 가압 챔버로 생명을 구한다 — 산소 분압의 물리학',
    category: 'Mars Science',
    icon: <Gauge className="w-6 h-6" />,
    date: '2026-02-03',
    readTime: '6분',
    episodeLink: 'EP.03',
  },
  {
    id: 6,
    slug: 'mars-dust-storm',
    title: '화성 먼지 폭풍의 풍속은 100km/h',
    description: '하지만 바람의 힘은 지구의 1%도 안 된다 — 먼지 폭풍의 물리학',
    category: 'Mars Science',
    icon: <Wind className="w-6 h-6" />,
    date: '2026-02-03',
    readTime: '5분',
    episodeLink: 'EP.03',
  },
  {
    id: 5,
    slug: 'mars-water-extraction',
    title: '화성 토양의 수분 함량은 2%',
    description: '460°C로 토양을 가열하면 물이 나온다 — 물 추출의 물리학',
    category: 'Mars Science',
    icon: <Droplets className="w-6 h-6" />,
    date: '2026-02-03',
    readTime: '6분',
    episodeLink: 'EP.03',
  },
  {
    id: 4,
    slug: 'mars-distance',
    title: '화성까지 2억 2500만 km',
    description: '빛의 속도로 12분 30초, 우주선으로 6개월 — 그 거리의 물리학',
    category: 'Mars Science',
    icon: <Rocket className="w-6 h-6" />,
    date: '2026-01-30',
    readTime: '6분',
    episodeLink: 'EP.02',
  },
  {
    id: 3,
    slug: 'mars-atmosphere',
    title: '화성의 대기압은 지구의 0.6%',
    description: '감압 챔버에서 살아남기 — 화성행 티켓 EP.02에서 배우는 화성 대기의 물리학',
    category: 'Mars Science',
    icon: <Wind className="w-6 h-6" />,
    date: '2026-01-30',
    readTime: '5분',
    episodeLink: 'EP.02',
  },
  {
    id: 2,
    slug: 'controlled-falling',
    title: '걷기는 통제된 추락이다',
    description: '휴머노이드 로봇이 가르쳐주는 균형의 물리학. 역진자 시뮬레이터로 직접 체험해보세요.',
    category: 'Physical AI',
    icon: <Bot className="w-6 h-6" />,
    date: '2026-01-22',
    readTime: '7분',
    hasSimulator: true,
  },
  {
    id: 1,
    slug: 'remove-the-part',
    title: '부품의 최저단가는 부품을 없애는 것이다',
    description: '일론 머스크에게 배우는 물리학적 사고의 첫 번째 원칙. 최소 작용 원리와 테슬라의 기가캐스팅.',
    category: 'First Principles',
    icon: <Zap className="w-6 h-6" />,
    date: '2026-01-22',
    readTime: '5분',
  },
]

export default function BlogPage() {
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
            <Link href="/blog" className="text-cyber-cyan transition">Blog</Link>
            <Link href="/simulators" className="text-gray-400 hover:text-cyber-cyan transition">Simulators</Link>
            <Link href="/about" className="text-gray-400 hover:text-cyber-cyan transition">About</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            일상 현상을 물리학으로 해석하고, 비즈니스에 적용합니다.
            매일 새로운 물리학적 사고를 만나보세요.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group p-8 bg-dark-800 rounded-2xl border border-dark-600 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 rounded-xl flex items-center justify-center text-cyber-cyan flex-shrink-0">
                    {post.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyber-cyan/10 text-cyber-cyan text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      {post.hasSimulator && (
                        <span className="px-3 py-1 bg-cyber-purple/10 text-cyber-purple text-xs font-medium rounded-full">
                          Simulator
                        </span>
                      )}
                      {post.episodeLink && (
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full">
                          {post.episodeLink}
                        </span>
                      )}
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <span className="text-gray-500 text-sm">· {post.readTime} 읽기</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-cyber-cyan transition">
                      {post.title}
                    </h2>
                    <p className="text-gray-400">{post.description}</p>
                  </div>
                  <div className="text-cyber-cyan opacity-0 group-hover:opacity-100 transition">
                    <ArrowLeft className="w-6 h-6 rotate-180" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-dark-600 mt-12">
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
