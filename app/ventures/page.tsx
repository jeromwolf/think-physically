'use client'

import Link from 'next/link'
import { ArrowLeft, Sun, Droplets, Heart, Radio } from 'lucide-react'

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

const ventures = [
  {
    id: 1,
    slug: 'water-extraction-system',
    title: '사막 물 추출 시스템',
    description: '건조 지역 토양에서 물을 추출하는 저에너지 시스템 — 화성 물 추출 기술의 지구 적용',
    category: 'CleanTech',
    icon: <Droplets className="w-6 h-6" />,
    market: '$900B',
    episodeLink: 'EP.03',
    blogLink: '/blog/mars-water-extraction',
  },
  {
    id: 2,
    slug: 'solar-dust-cleaner',
    title: '태양전지 먼지 자동 세정 시스템',
    description: '사막 태양광 발전소의 효율을 유지하는 자율주행 세정 로봇 — 먼지 폭풍의 물리학에서 탄생',
    category: 'EnergyTech',
    icon: <Sun className="w-6 h-6" />,
    market: '$10B',
    episodeLink: 'EP.03',
    blogLink: '/blog/mars-dust-storm',
  },
  {
    id: 3,
    slug: 'portable-hyperbaric',
    title: '휴대용 가압 의료기기',
    description: '고산지대·항공기 내 응급 산소 공급을 위한 차세대 가모프 백 — 산소 분압의 물리학',
    category: 'MedTech',
    icon: <Heart className="w-6 h-6" />,
    market: '$4.5B',
    episodeLink: 'EP.03',
    blogLink: '/blog/oxygen-pressure',
  },
  {
    id: 4,
    slug: 'acoustic-leak-detector',
    title: 'AI 음향 누출 감지 시스템',
    description: '마이크 어레이 + TDOA 알고리즘으로 배관 누출을 자동 감지 — 삼각 측량의 물리학',
    category: 'IndustrialAI',
    icon: <Radio className="w-6 h-6" />,
    market: '$3.5B',
    episodeLink: 'EP.03',
    blogLink: '/blog/sound-triangulation',
  },
]

export default function VenturesPage() {
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
            <Link href="/ventures" className="text-cyber-purple transition">Ventures</Link>
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
            <span className="gradient-text">Ventures</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            드라마 '화성행 티켓'에서 탄생한 사업 아이디어. 물리학이 현실의 비즈니스가 됩니다.
          </p>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6">
            {ventures.map((venture, index) => (
              <Link
                key={venture.id}
                href={`/ventures/${venture.slug}`}
                className="group p-8 bg-dark-800 rounded-2xl border border-dark-600 hover:border-cyber-purple/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyber-purple/20 to-cyber-cyan/20 rounded-xl flex items-center justify-center text-cyber-purple flex-shrink-0">
                    {venture.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyber-purple/10 text-cyber-purple text-xs font-medium rounded-full">
                        {venture.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">
                        {venture.market}
                      </span>
                      {venture.episodeLink && (
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full">
                          {venture.episodeLink}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-cyber-purple transition">
                      {venture.title}
                    </h2>
                    <p className="text-gray-400">{venture.description}</p>
                  </div>
                  <div className="text-cyber-purple opacity-0 group-hover:opacity-100 transition">
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
