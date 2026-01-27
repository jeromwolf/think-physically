'use client'

import Link from 'next/link'
import { ArrowLeft, Rocket, Users, Tv, Youtube, Globe, Sparkles } from 'lucide-react'

const characters = [
  { name: '서하준', age: 28, role: '물리학자', desc: '천재지만 인정 못 받음', color: 'cyber-cyan' },
  { name: '강하늘', age: 26, role: '전직 아이돌', desc: '스캔들로 추락', color: 'cyber-purple' },
  { name: '박진우', age: 32, role: '전직 특수부대원', desc: 'PTSD', color: 'gray-400' },
  { name: '이서연', age: 24, role: '의대생', desc: '말기 백혈병', color: 'pink-400' },
  { name: '최현수', age: 45, role: '로봇 공학자', desc: '가족 잃음', color: 'blue-400' },
  { name: '린', age: 22, role: '해커', desc: '쫓기는 중', color: 'green-400' },
  { name: '김태호', age: 67, role: '전직 교사', desc: '말기 암', color: 'yellow-400' },
]

const techToBusiness = [
  { ep: 'EP3', tech: '화성 물 추출', business: 'Water-from-Mars 시스템' },
  { ep: 'EP5', tech: '3D 프린팅 건축', business: '화성 주거 모듈' },
  { ep: 'EP7', tech: '동반자 AI', business: '감정 로봇' },
  { ep: 'EP9', tech: '식량 재배', business: '수직 농장' },
  { ep: 'EP10', tech: '체온 발전', business: '웨어러블 에너지' },
  { ep: 'EP12', tech: '우주 통신', business: '지연 없는 화성-지구 통신' },
]

const seasons = [
  { num: 1, title: '선발', location: '지구', desc: '100인의 선발 과정, 각자의 이유' },
  { num: 2, title: '여정', location: '우주', desc: '6개월의 화성행 여정' },
  { num: 3, title: '정착', location: '화성', desc: '새로운 세계에서의 삶' },
]

export default function MarsTicketIdea() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link href="/ideas" className="text-gray-500 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-2xl font-bold">
            Think<span className="text-cyber-cyan">Physically</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Status */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs px-2 py-1 bg-cyber-cyan/20 text-cyber-cyan rounded">
            in development
          </span>
          <span className="text-xs text-gray-600">K-Content + Tech</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Rocket className="w-10 h-10 text-cyber-cyan" />
          화성행 티켓
        </h1>

        {/* Logline */}
        <div className="p-6 bg-dark-800 rounded-lg border border-cyber-cyan/30 mb-8">
          <p className="text-gray-400 text-sm mb-3">로그라인</p>
          <p className="text-lg leading-relaxed">
            2040년. 인류 최초 화성 이주가 시작된다.<br />
            선발된 100인. 각자의 이유로 지구를 떠난다.<br />
            <span className="text-cyber-cyan">편도 티켓. 돌아올 수 없는 여정.</span>
          </p>
          <p className="text-xl font-bold mt-4 text-white">
            "당신은 왜 화성에 가려 하나요?"
          </p>
        </div>

        {/* Genre */}
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-400">로맨스</span>
          <span className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-400">SF</span>
          <span className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-400">휴먼 드라마</span>
          <span className="px-3 py-1 bg-cyber-purple/20 rounded-full text-sm text-cyber-purple">K-감성</span>
          <span className="px-3 py-1 bg-cyber-cyan/20 rounded-full text-sm text-cyber-cyan">실제 과학</span>
        </div>

        {/* Characters */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-cyber-purple" />
              메인 캐릭터 (7인)
            </h2>
            <Link
              href="/ideas/mars-ticket/characters"
              className="text-sm text-gray-500 hover:text-cyber-purple transition"
            >
              상세 설정 →
            </Link>
          </div>
          <div className="grid gap-3">
            {characters.map((char, i) => (
              <div
                key={char.name}
                className="p-4 bg-dark-800 rounded-lg border border-dark-700 flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-full bg-${char.color}/20 flex items-center justify-center text-${char.color} font-bold`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="font-bold">
                    {char.name} <span className="text-gray-500 font-normal">({char.age})</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    {char.role} - {char.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seasons */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Tv className="w-5 h-5 text-cyber-cyan" />
            시즌 구성
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {seasons.map((season) => (
              <div
                key={season.num}
                className="p-4 bg-dark-800 rounded-lg border border-dark-700 text-center"
              >
                <p className="text-3xl font-bold text-cyber-cyan mb-1">S{season.num}</p>
                <p className="font-bold mb-2">{season.title}</p>
                <p className="text-xs text-gray-500 mb-2">{season.location}</p>
                <p className="text-sm text-gray-400">{season.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech to Business */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            드라마 속 기술 → 사업 아이디어
          </h2>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-600">
                    <th className="text-left py-2 text-gray-500">에피소드</th>
                    <th className="text-left py-2 text-gray-500">기술</th>
                    <th className="text-left py-2 text-gray-500">사업 아이디어</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {techToBusiness.map((item) => (
                    <tr key={item.ep} className="border-b border-dark-700 last:border-0">
                      <td className="py-2 text-cyber-cyan">{item.ep}</td>
                      <td className="py-2">{item.tech}</td>
                      <td className="py-2 text-cyber-purple">{item.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Multi-platform */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-green-400" />
            멀티 플랫폼 전략
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold mb-2">웹툰</p>
              <p className="text-sm text-gray-400">네이버웹툰, 카카오페이지</p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold mb-2">드라마</p>
              <p className="text-sm text-gray-400">넷플릭스, 티빙</p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold mb-2 flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-500" /> 유튜브
              </p>
              <p className="text-sm text-gray-400">비하인드, 기술 설명, 메이킹</p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <p className="font-bold mb-2 text-cyber-cyan">ThinkPhysically</p>
              <p className="text-sm text-gray-400">심화 콘텐츠 + 커뮤니티</p>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">생태계</h2>
          <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-lg font-bold text-cyber-purple">"화성행 티켓" 시청</p>
              <p className="text-gray-500">↓ 기술/아이디어 궁금</p>
              <p className="text-lg font-bold text-cyber-cyan">ThinkPhysically에서 학습</p>
              <p className="text-gray-500">↓ "나도 만들고 싶다"</p>
              <p className="text-lg font-bold text-white">커뮤니티에서 팀 빌딩</p>
              <p className="text-gray-500">↓ 실제 실행</p>
              <p className="text-lg font-bold text-green-400">스타트업 탄생</p>
              <p className="text-gray-500">↓</p>
              <p className="text-xl font-bold text-yellow-400">드라마가 현실이 됨</p>
            </div>
          </div>
        </section>

        {/* Episodes */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">웹툰 시놉시스</h2>
          <div className="space-y-3">
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/50">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="font-bold text-cyber-cyan">EP.01: 편도 티켓</p>
                  <p className="text-sm text-gray-500">서하준과 강하늘의 첫 만남</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href="/ideas/mars-ticket/webtoon-ep1"
                  className="text-xs px-3 py-1.5 bg-cyber-cyan/20 text-cyber-cyan rounded hover:bg-cyber-cyan/30 transition"
                >
                  웹툰 콘티 (50컷)
                </Link>
                <Link
                  href="/ideas/mars-ticket/episode-1"
                  className="text-xs px-3 py-1.5 bg-dark-600 text-gray-400 rounded hover:bg-dark-500 transition"
                >
                  드라마 시놉시스
                </Link>
              </div>
            </div>
            <Link
              href="/ideas/mars-ticket/episode-2"
              className="block p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-cyber-purple/50 transition group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold group-hover:text-cyber-purple transition">EP.02: 서바이벌</p>
                  <p className="text-sm text-gray-500">7인의 첫 만남, 팀 결성</p>
                </div>
              </div>
            </Link>
            <Link
              href="/ideas/mars-ticket/episode-3"
              className="block p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-yellow-400/50 transition group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold group-hover:text-yellow-400 transition">EP.03: 48시간</p>
                  <p className="text-sm text-gray-500">지식의 교차수정, 충격의 결말</p>
                </div>
              </div>
            </Link>
            <Link
              href="/ideas/mars-ticket/episode-4"
              className="block p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-pink-400/50 transition group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold group-hover:text-pink-400 transition">EP.04: 아버지</p>
                  <p className="text-sm text-gray-500">하준의 과거, 팀7의 진실</p>
                </div>
              </div>
            </Link>
            <Link
              href="/ideas/mars-ticket/episode-5"
              className="block p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-orange-400/50 transition group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold group-hover:text-orange-400 transition">EP.05: 카운트다운</p>
                  <p className="text-sm text-gray-500">D-14, 마지막 작별과 출발</p>
                </div>
              </div>
            </Link>
            <Link
              href="/ideas/mars-ticket/episode-6"
              className="block p-4 bg-dark-800 rounded-lg border border-red-500/50 hover:border-red-400 transition group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold group-hover:text-red-400 transition">EP.06: 이륙</p>
                  <p className="text-sm text-gray-500">시즌1 피날레, 드디어 출발</p>
                </div>
                <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded">
                  S1 END
                </span>
              </div>
            </Link>
            <Link
              href="/ideas/mars-ticket/episode-7"
              className="block p-4 bg-dark-800 rounded-lg border border-blue-500/50 hover:border-blue-400 transition group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold group-hover:text-blue-400 transition">EP.07: 우주의 일상</p>
                  <p className="text-sm text-gray-500">시즌2 시작, 하나의 감정</p>
                </div>
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                  NEW
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Tech Research */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">기술 리서치</h2>
          <Link
            href="/ideas/mars-ticket/tech-research"
            className="block p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30 hover:border-cyber-cyan/50 transition group"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold group-hover:text-cyber-cyan transition">실제 과학 기반 기술</p>
                <p className="text-sm text-gray-500">MOXIE, ICON 3D, 역진자 보행, DSOC...</p>
              </div>
              <span className="text-xs px-2 py-1 bg-green-400/20 text-green-400 rounded">
                Fact-based
              </span>
            </div>
          </Link>
        </section>

        {/* Vision */}
        <div className="p-6 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 border border-cyber-cyan/30 rounded-lg text-center">
          <p className="text-2xl font-bold mb-2">
            "드라마가 현실이 되는 세상"
          </p>
          <p className="text-gray-400">
            K-콘텐츠 + 실제 기술 + 창업 영감<br />
            세계 최초의 융합 플랫폼
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <p className="text-gray-600 text-sm">
            ThinkPhysically © 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
