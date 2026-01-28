'use client'

import Link from 'next/link'
import { ArrowLeft, Rocket, Palette, MessageSquare, Eye, Zap } from 'lucide-react'

export default function WebtoonEp1Synopsis() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-dark-700">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link href="/ideas/mars-ticket" className="text-gray-500 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-2xl font-bold">
            Think<span className="text-cyber-cyan">Physically</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Episode Header */}
        <div className="flex items-center gap-3 mb-4">
          <Rocket className="w-6 h-6 text-cyber-cyan" />
          <span className="text-xs px-2 py-1 bg-cyber-purple/20 text-cyber-purple rounded">
            웹툰 콘티
          </span>
          <span className="text-xs px-2 py-1 bg-cyber-cyan/20 text-cyber-cyan rounded">
            EP.01
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-2">웹툰 1화: 편도 티켓</h1>
        <p className="text-gray-500 mb-4">화성행 티켓 - 컷 단위 시놉시스</p>

        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Palette className="w-4 h-4" />
            <span>50컷 구성</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MessageSquare className="w-4 h-4" />
            <span>대사 67개</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Eye className="w-4 h-4" />
            <span>예상 분량: 세로 스크롤 80화면</span>
          </div>
        </div>

        {/* Legend */}
        <div className="p-4 bg-dark-800 rounded-lg border border-dark-700 mb-8">
          <p className="font-bold text-white mb-3">범례</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-cyber-cyan rounded-full"></span>
              <span className="text-gray-400">서하준 대사</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-cyber-purple rounded-full"></span>
              <span className="text-gray-400">강하늘 대사</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
              <span className="text-gray-400">기타 인물</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="text-gray-400">나레이션</span>
            </div>
          </div>
        </div>

        {/* PART 1: 프롤로그 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-cyber-cyan/20 text-cyber-cyan rounded flex items-center justify-center text-sm">1</span>
            프롤로그: 2040년
          </h2>

          <div className="space-y-4">
            {/* 컷 1 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-dark-600 text-gray-400 rounded">컷 1</span>
                <span className="text-xs text-gray-500">WIDE SHOT</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 우주에서 바라본 지구. 붉은 점(화성)이 멀리 보인다.
              </p>
              <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                <p className="text-yellow-400 text-sm italic">
                  "2040년. 인류는 마침내 화성에 첫 발을 디뎠다."
                </p>
              </div>
            </div>

            {/* 컷 2 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-dark-600 text-gray-400 rounded">컷 2</span>
                <span className="text-xs text-gray-500">INSERT</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 뉴스 헤드라인 몽타주 (빠르게 스크롤)
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-white">"화성 이주 프로그램, 전 세계 100만 명 지원"</p>
                <p className="text-white">"단 100명만 선발... 경쟁률 1만:1"</p>
                <p className="text-white">"편도 티켓, 돌아올 수 없다"</p>
              </div>
            </div>

            {/* 컷 3 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-dark-600 text-gray-400 rounded">컷 3</span>
                <span className="text-xs text-gray-500">CLOSE-UP</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 이메일 화면 클로즈업. "1차 서류 합격" 글자가 빛난다.
              </p>
              <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                <p className="text-yellow-400 text-sm italic">
                  "이 메일 하나가 누군가의 인생을 바꾼다."
                </p>
              </div>
            </div>

            {/* 컷 4-5 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-dark-600 text-gray-400 rounded">컷 4-5</span>
                <span className="text-xs text-gray-500">TITLE SPREAD</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 두 컷에 걸친 타이틀. 화성이 배경.
              </p>
              <div className="text-center py-4">
                <p className="text-4xl font-bold text-cyber-cyan mb-2">화성행 티켓</p>
                <p className="text-xl text-gray-400">EP.01 편도 티켓</p>
              </div>
            </div>
          </div>
        </section>

        {/* PART 2: 서하준 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-cyber-cyan/20 text-cyber-cyan rounded flex items-center justify-center text-sm">2</span>
            서하준의 시작
          </h2>

          <div className="space-y-4">
            {/* 컷 6-7 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-cyan/20 text-cyber-cyan rounded">컷 6-7</span>
                <span className="text-xs text-gray-500">ESTABLISHING → MEDIUM</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 낡은 원룸 건물 외관 → 내부. 좁은 방.
                벽면 전체가 물리 공식으로 가득 찬 화이트보드.
                책더미 사이에 노트북 빛이 얼굴을 비춘다.
              </p>
              <p className="text-gray-500 text-sm mb-2">
                <Zap className="w-3 h-3 inline mr-1" />
                연출: 어두운 방, 노트북 화면 빛만 강조
              </p>
            </div>

            {/* 컷 8 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-cyan/20 text-cyber-cyan rounded">컷 8</span>
                <span className="text-xs text-gray-500">CLOSE-UP</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> <span className="text-cyber-cyan font-bold">서하준(28)</span>의 얼굴.
                날카로운 눈, 무표정. 화면 빛이 안경에 반사.
              </p>
              <p className="text-gray-500 text-sm">
                첫 등장. 천재 물리학자의 날카로운 인상.
              </p>
            </div>

            {/* 컷 9 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-cyan/20 text-cyber-cyan rounded">컷 9</span>
                <span className="text-xs text-gray-500">INSERT</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 노트북 화면. 이메일.
              </p>
              <div className="p-3 bg-dark-900 rounded border border-dark-600 text-sm">
                <p className="text-gray-400 mb-1">From: mars-program@global-space.org</p>
                <p className="text-white font-bold">"서하준 님, 화성 이주 프로그램 1차 서류 합격을 축하드립니다."</p>
              </div>
            </div>

            {/* 컷 10-11 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-cyan/20 text-cyber-cyan rounded">컷 10-11</span>
                <span className="text-xs text-gray-500">MEDIUM → CLOSE-UP</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 떨리는 손. 마우스 위에 놓인 손가락 클로즈업.
                → 하지만 표정은 담담하다.
              </p>
              <p className="text-gray-500 text-sm">
                <Zap className="w-3 h-3 inline mr-1" />
                연출: 손만 떨림. 표정 무표정. 대비 효과.
              </p>
            </div>

            {/* 컷 12-15: 플래시백 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-gray-600 border-dashed">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-gray-600 text-gray-300 rounded">컷 12-15</span>
                <span className="text-xs text-gray-500">FLASHBACK</span>
                <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">과거 회상</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 세피아 톤. 학회장.
              </p>

              <div className="space-y-3 pl-4 border-l-2 border-gray-600">
                <div>
                  <p className="text-gray-400 text-sm">컷 12: 발표하는 하준</p>
                  <p className="text-gray-500 text-sm italic">"저감 중력 환경에서의 열역학 제2법칙 재해석..."</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">컷 13: 청중들의 냉소적인 표정</p>
                  <p className="text-gray-500 text-sm italic">(수군거림) "또 저 이론..."</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">컷 14: 지도교수의 무관심한 뒷모습</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">컷 15: 빈 복도를 걷는 하준 (롱샷)</p>
                  <div className="p-2 bg-gray-500/10 rounded mt-1">
                    <p className="text-gray-400 text-sm italic">"이론만 거창하고 현실성이 없어."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 컷 16-17 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-cyan/20 text-cyber-cyan rounded">컷 16-17</span>
                <span className="text-xs text-gray-500">BACK TO PRESENT</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 현재로 돌아옴. 하준이 화이트보드를 바라본다.
                공식들 사이에 "Mars gravity = 0.38g" 메모.
              </p>
              <div className="p-2 bg-cyber-cyan/10 rounded border border-cyber-cyan/20">
                <p className="text-cyber-cyan font-bold">
                  "화성에서는... 이론이 곧 현실이 될 거야."
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                <Zap className="w-3 h-3 inline mr-1" />
                연출: 대사 시 눈빛에 광채. 처음으로 표정 변화.
              </p>
            </div>
          </div>
        </section>

        {/* PART 3: 강하늘 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-cyber-purple/20 text-cyber-purple rounded flex items-center justify-center text-sm">3</span>
            강하늘의 시작
          </h2>

          <div className="space-y-4">
            {/* 컷 18-19 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded">컷 18-19</span>
                <span className="text-xs text-gray-500">ESTABLISHING → MEDIUM</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 강남의 고급 카페 외관 →
                구석 자리. 모자를 푹 눌러쓴 여자.
              </p>
            </div>

            {/* 컷 20 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded">컷 20</span>
                <span className="text-xs text-gray-500">CLOSE-UP</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> <span className="text-cyber-purple font-bold">강하늘(26)</span>.
                모자 챙 아래로 보이는 예쁜 얼굴. 하지만 눈가에 다크서클.
              </p>
              <p className="text-gray-500 text-sm">
                첫 등장. 화려했던 과거와 대비되는 지친 모습.
              </p>
            </div>

            {/* 컷 21 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded">컷 21</span>
                <span className="text-xs text-gray-500">INSERT</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 핸드폰 화면. 같은 합격 이메일.
              </p>
              <div className="p-3 bg-dark-900 rounded border border-dark-600 text-sm">
                <p className="text-white font-bold">"강하늘 님, 화성 이주 프로그램 1차 서류 합격을 축하드립니다."</p>
              </div>
            </div>

            {/* 컷 22-23 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded">컷 22-23</span>
                <span className="text-xs text-gray-500">REACTION</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 옆 테이블 손님들이 수군거린다.
              </p>
              <div className="space-y-2">
                <div className="p-2 bg-gray-500/10 rounded">
                  <p className="text-gray-400 text-sm italic">"저거 그 아이돌 아냐?"</p>
                </div>
                <div className="p-2 bg-gray-500/10 rounded">
                  <p className="text-gray-400 text-sm italic">"맞아, 저 스캔들... 남자친구가..."</p>
                </div>
              </div>
            </div>

            {/* 컷 24 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded">컷 24</span>
                <span className="text-xs text-gray-500">CLOSE-UP</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 하늘의 손. 커피잔을 쥔 손이 하얗게 질린다.
              </p>
              <p className="text-gray-500 text-sm">
                <Zap className="w-3 h-3 inline mr-1" />
                연출: 대사 없이 감정 표현. 손의 떨림.
              </p>
            </div>

            {/* 컷 25-26 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded">컷 25-26</span>
                <span className="text-xs text-gray-500">STANDING → LOOKING UP</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 하늘이 일어선다. 창밖의 하늘을 올려다본다.
                (하늘 전체가 화면을 채움)
              </p>
              <div className="p-2 bg-cyber-purple/10 rounded border border-cyber-purple/20">
                <p className="text-cyber-purple font-bold">
                  "화성에는... 과거가 없겠지."
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                <Zap className="w-3 h-3 inline mr-1" />
                연출: 컷 26은 풀페이지. 하늘과 하늘(sky)의 이중 의미.
              </p>
            </div>
          </div>
        </section>

        {/* PART 4: 선발 센터 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 text-white rounded flex items-center justify-center text-sm">4</span>
            첫 만남
          </h2>

          <div className="space-y-4">
            {/* 컷 27-28 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-dark-600 text-gray-400 rounded">컷 27-28</span>
                <span className="text-xs text-gray-500">ESTABLISHING</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 거대한 건물. "MARS SELECTION CENTER"
                미래적인 디자인. 수백 명이 줄 서 있다.
              </p>
              <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                <p className="text-yellow-400 text-sm italic">
                  "D-180. 화성행 이주선 아레스-1호 발사까지."
                </p>
              </div>
            </div>

            {/* 컷 29-30 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-dark-600 text-gray-400 rounded">컷 29-30</span>
                <span className="text-xs text-gray-500">MEDIUM</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 줄에 서 있는 하준. 물리학 책을 읽고 있다.
                앞사람이 갑자기 뒤로 물러서며 부딪힌다.
              </p>
              <p className="text-gray-500 text-sm">SFX: 툭!</p>
            </div>

            {/* 컷 31-33: 첫 만남 */}
            <div className="p-4 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-lg border border-dark-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-white/10 text-white rounded">컷 31-33</span>
                <span className="text-xs text-gray-500">KEY SCENE - 첫 만남</span>
                <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">중요</span>
              </div>

              <div className="space-y-4 mt-4">
                <div className="pl-4 border-l-2 border-cyber-purple">
                  <p className="text-gray-400 text-sm mb-1">컷 31: 하늘이 돌아보며</p>
                  <p className="text-cyber-purple">"죄송합니다."</p>
                </div>

                <div className="pl-4 border-l-2 border-cyber-cyan">
                  <p className="text-gray-400 text-sm mb-1">컷 32: 하준이 올려다보며</p>
                  <p className="text-cyber-cyan">"괜찮습니다."</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-1">컷 33: 두 사람의 눈이 마주친다</p>
                  <p className="text-gray-300">
                    <strong>화면:</strong> 스플릿 화면. 왼쪽 하준의 눈, 오른쪽 하늘의 눈.
                    가운데 경계선.
                  </p>
                  <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/20 mt-2">
                    <p className="text-yellow-400 text-sm italic">
                      "서로를 알아보지 못한다. 아직은."
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                <Zap className="w-3 h-3 inline mr-1" />
                연출: 컷 33은 풀페이지. 운명적 만남의 복선.
              </p>
            </div>
          </div>
        </section>

        {/* PART 5: 면접 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-dark-700 text-white rounded flex items-center justify-center text-sm">5</span>
            면접
          </h2>

          <div className="space-y-4">
            {/* 컷 34-38: 하준 면접 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-cyan/20 text-cyber-cyan rounded">컷 34-38</span>
                <span className="text-xs text-gray-500">하준 면접</span>
              </div>

              <div className="space-y-3 mt-4">
                <div>
                  <p className="text-gray-400 text-sm">컷 34: 차가운 면접실. 세 명의 면접관.</p>
                </div>

                <div className="pl-4 border-l-2 border-gray-500">
                  <p className="text-gray-400 text-sm mb-1">컷 35: 면접관</p>
                  <p className="text-gray-300">"서하준 씨, 왜 화성에 가려 합니까?"</p>
                </div>

                <div className="pl-4 border-l-2 border-cyber-cyan">
                  <p className="text-gray-400 text-sm mb-1">컷 36: 하준 클로즈업</p>
                  <p className="text-cyber-cyan">"..."</p>
                </div>

                <div className="pl-4 border-l-2 border-gray-500">
                  <p className="text-gray-400 text-sm mb-1">컷 37: 면접관</p>
                  <p className="text-gray-300">"돌아올 수 없습니다. 가족도, 친구도, 모든 것을 두고 가야 합니다."</p>
                </div>

                <div className="p-3 bg-cyber-cyan/10 rounded border border-cyber-cyan/30">
                  <p className="text-gray-400 text-sm mb-2">컷 38: 풀페이지 - 하준이 고개를 든다</p>
                  <p className="text-cyber-cyan text-lg font-bold mb-2">
                    "저는 증명하고 싶습니다."
                  </p>
                  <p className="text-gray-300">
                    "물리학의 법칙은 지구에서나 화성에서나 똑같습니다.<br/>
                    하지만 지구에서는 아무도 제 이론을 믿지 않았습니다."
                  </p>
                  <p className="text-cyber-cyan font-bold mt-2">
                    "화성에서는... 직접 증명하겠습니다.<br/>
                    중력이 3분의 1인 그곳에서."
                  </p>
                </div>
              </div>
            </div>

            {/* 컷 39-43: 하늘 면접 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded">컷 39-43</span>
                <span className="text-xs text-gray-500">하늘 면접</span>
              </div>

              <div className="space-y-3 mt-4">
                <div className="pl-4 border-l-2 border-gray-500">
                  <p className="text-gray-400 text-sm mb-1">컷 39: 면접관</p>
                  <p className="text-gray-300">"강하늘 씨, 전직 아이돌이시군요. 왜 화성에?"</p>
                </div>

                <div className="pl-4 border-l-2 border-cyber-purple">
                  <p className="text-gray-400 text-sm mb-1">컷 40: 하늘</p>
                  <p className="text-cyber-purple">"..."</p>
                </div>

                <div className="pl-4 border-l-2 border-gray-500">
                  <p className="text-gray-400 text-sm mb-1">컷 41: 면접관 (날카롭게)</p>
                  <p className="text-gray-300">"솔직히 말해주세요. 도망치려는 겁니까?"</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-1">컷 42: 하늘의 눈에 물기가 맺힌다. 하지만 웃는다.</p>
                </div>

                <div className="p-3 bg-cyber-purple/10 rounded border border-cyber-purple/30">
                  <p className="text-gray-400 text-sm mb-2">컷 43: 풀페이지</p>
                  <p className="text-cyber-purple text-lg font-bold mb-2">
                    "네, 도망치려는 겁니다."
                  </p>
                  <p className="text-gray-300">
                    "하지만 도망치는 게 아니라 시작하려는 거예요.<br/>
                    여기선 제가 누구였는지만 중요하지만..."
                  </p>
                  <p className="text-cyber-purple font-bold mt-2">
                    "화성에서는 제가 누가 될 수 있는지가 중요하잖아요."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 6: 클리프행어 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-500/20 text-red-400 rounded flex items-center justify-center text-sm">6</span>
            클리프행어
          </h2>

          <div className="space-y-4">
            {/* 컷 44-46 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-dark-600 text-gray-400 rounded">컷 44-46</span>
                <span className="text-xs text-gray-500">결과 발표</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 선발 센터 로비. 거대한 전광판 앞에 수백 명이 모여있다.
              </p>
              <div className="p-3 bg-dark-900 rounded border border-dark-600">
                <p className="text-white font-mono text-sm">
                  #47 서하준 ✓<br/>
                  #48 강하늘 ✓<br/>
                  #49 박시우 ✓<br/>
                  #50 이지안 ✓<br/>
                  ...
                </p>
              </div>
            </div>

            {/* 컷 47 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-dark-600 text-gray-400 rounded">컷 47</span>
                <span className="text-xs text-gray-500">SPLIT</span>
              </div>
              <p className="text-gray-300">
                <strong>화면:</strong> 하준과 하늘이 동시에 전광판을 본다.
                다시 한번 눈이 마주친다.
              </p>
            </div>

            {/* 컷 48-49: 긴급 속보 */}
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">컷 48-49</span>
                <span className="text-xs text-gray-500">TWIST</span>
                <span className="text-xs px-2 py-0.5 bg-red-500 text-white rounded">SFX: 경보음</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>화면:</strong> 경보음이 울린다. 전광판 색이 빨갛게 변한다.
              </p>
              <div className="p-4 bg-red-900/30 rounded border border-red-500/50 text-center">
                <p className="text-red-400 font-bold text-lg">
                  [긴급 속보]
                </p>
                <p className="text-red-300 mt-2">
                  화성행 이주선 설계 결함 발견
                </p>
                <p className="text-red-400 font-bold text-xl mt-2">
                  탑승 인원 100명 → 50명으로 축소
                </p>
              </div>
            </div>

            {/* 컷 50: 엔딩 */}
            <div className="p-4 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-lg border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 bg-white/10 text-white rounded">컷 50</span>
                <span className="text-xs text-gray-500">ENDING - FULL PAGE</span>
              </div>
              <p className="text-gray-300 mb-4">
                <strong>화면:</strong> 로비가 술렁인다. 사람들의 불안한 표정.
                그 가운데 서 있는 하준과 하늘.
              </p>
              <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/20 mb-4">
                <p className="text-yellow-400 text-sm italic">
                  "50명 중 절반은 탈락해야 한다."
                </p>
              </div>
              <div className="text-center py-6">
                <p className="text-3xl font-bold bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
                  TO BE CONTINUED...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 기술 연계 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-yellow-400 pl-4">ThinkPhysically 연계</h2>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-white mb-3">1화에서 자연스럽게 언급된 물리학</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-cyber-cyan">•</span>
                <div>
                  <p className="text-white font-medium">화성 중력 (0.38g)</p>
                  <p className="text-gray-400 text-sm">
                    "중력이 3분의 1인 그곳에서" - 하준의 대사에서 자연스럽게 등장.
                    → 콘텐츠: "화성에서 점프하면 얼마나 높이 뛸까?"
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyber-cyan">•</span>
                <div>
                  <p className="text-white font-medium">우주 여행 거리</p>
                  <p className="text-gray-400 text-sm">
                    D-180 (6개월 여정) - 화성까지의 실제 소요 시간.
                    → 콘텐츠: "화성까지 6개월, 빛은 몇 분?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Episode */}
        <div className="p-6 bg-dark-800 rounded-lg border border-dark-700 text-center mb-8">
          <p className="text-gray-500 text-sm mb-2">다음 에피소드</p>
          <p className="text-xl font-bold mb-2">EP.02: 서바이벌</p>
          <p className="text-gray-400">
            50명 중 25명을 뽑는 극한의 테스트.<br/>
            7명의 메인 캐릭터가 처음으로 모두 만난다.
          </p>
          <Link
            href="/ideas/mars-ticket/episode-2"
            className="inline-block mt-4 px-4 py-2 bg-cyber-cyan/20 text-cyber-cyan rounded hover:bg-cyber-cyan/30 transition"
          >
            EP.02 시놉시스 보기 →
          </Link>
        </div>

        {/* 네비게이션 */}
        <div className="flex justify-between items-center text-sm">
          <Link
            href="/ideas/mars-ticket"
            className="text-gray-500 hover:text-white transition"
          >
            ← 메인으로
          </Link>
          <Link
            href="/ideas/mars-ticket/episode-1"
            className="text-gray-500 hover:text-white transition"
          >
            드라마 시놉시스 보기 →
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-dark-700">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <p className="text-gray-600 text-sm">
            ThinkPhysically © 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
