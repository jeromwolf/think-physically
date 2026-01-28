'use client'

import Link from 'next/link'
import { ArrowLeft, Rocket, Clock, MapPin, Users } from 'lucide-react'

export default function Episode1Synopsis() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link href="/ideas/mars-ticket" className="text-gray-500 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-2xl font-bold">
            Think<span className="text-cyber-cyan">Physically</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Episode Header */}
        <div className="flex items-center gap-3 mb-4">
          <Rocket className="w-6 h-6 text-cyber-cyan" />
          <span className="text-xs px-2 py-1 bg-cyber-purple/20 text-cyber-purple rounded">
            웹툰 시놉시스
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-2">EP.01: 편도 티켓</h1>
        <p className="text-gray-500 mb-8">화성행 티켓 - 시즌1 첫 번째 에피소드</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>2040년 3월 15일</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>서울 / 화성 선발 센터</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>서하준, 강하늘 등장</span>
          </div>
        </div>

        {/* Synopsis */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-cyber-cyan pl-4">시놉시스</h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">오프닝</p>
              <p>
                2040년. 화성행 첫 번째 이주선 "아레스-1호"가 발사 D-180일 앞으로 다가왔다.
                전 세계에서 100만 명이 지원했고, 단 100명만이 선발된다.
              </p>
              <p className="mt-2 text-cyber-cyan">
                "편도 티켓입니다. 돌아올 수 없습니다. 그래도 가시겠습니까?"
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 1 - 서하준의 방</p>
              <p>
                좁은 원룸. 벽에는 물리 공식들이 빼곡하게 적힌 화이트보드.
                <span className="text-cyber-cyan">서하준(28)</span>이 노트북 화면을 응시한다.
              </p>
              <p className="mt-2 italic text-gray-400">
                "서하준 님, 화성 이주 프로그램 1차 서류 합격을 축하드립니다."
              </p>
              <p className="mt-2">
                떨리는 손. 하지만 표정은 담담하다. 마치 당연한 일인 것처럼.
              </p>
              <p className="mt-2 text-gray-500">
                (플래시백) 학회에서 무시당하는 하준. "이론만 거창하고 현실성이 없어."
                동료들의 비웃음. 지도교수의 무관심.
              </p>
              <p className="mt-2 text-white font-bold">
                "화성에서는 이론이 곧 현실이 될 거야."
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 2 - 강남의 한 카페</p>
              <p>
                모자를 푹 눌러쓴 여자. <span className="text-cyber-purple">강하늘(26)</span>.
                3년 전 최고의 아이돌이었다. 지금은 "몰락한 아이돌"이라는 검색어가 따라붙는다.
              </p>
              <p className="mt-2">
                핸드폰에 뜬 알림. 같은 메시지다.
              </p>
              <p className="mt-2 italic text-gray-400">
                "강하늘 님, 화성 이주 프로그램 1차 서류 합격을 축하드립니다."
              </p>
              <p className="mt-2">
                카페 손님이 수군거린다. "저거 그 아이돌 아냐?" "맞아, 저 스캔들..."
              </p>
              <p className="mt-2 text-white font-bold">
                하늘이 일어선다. 창밖의 하늘을 본다.<br/>
                "화성에는... 과거가 없겠지."
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 3 - 화성 선발 센터</p>
              <p>
                거대한 건물. "MARS SELECTION CENTER" 간판 아래 수백 명이 줄 서 있다.
              </p>
              <p className="mt-2">
                하준이 줄에 서 있다. 앞사람과 부딪힐 뻔한다.
              </p>
              <p className="mt-2 text-cyber-purple">
                "죄송합니다."
              </p>
              <p className="mt-2 text-cyber-cyan">
                "괜찮습니다."
              </p>
              <p className="mt-2">
                두 사람의 눈이 마주친다. 하준과 하늘.<br/>
                서로를 알아보지 못한다. 아직은.
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <p className="font-bold text-white mb-2">SCENE 4 - 면접실</p>
              <p>
                차가운 조명. 세 명의 면접관.
              </p>
              <p className="mt-2 text-gray-400">
                면접관: "서하준 씨, 왜 화성에 가려 합니까?"
              </p>
              <p className="mt-2 text-cyber-cyan">
                하준: "..."
              </p>
              <p className="mt-2 text-gray-400">
                면접관: "돌아올 수 없습니다. 가족도, 친구도, 모든 것을 두고 가야 합니다."
              </p>
              <p className="mt-4 text-xl text-white font-bold">
                하준: "저는 증명하고 싶습니다."
              </p>
              <p className="mt-2 text-gray-300">
                "물리학의 법칙은 지구에서나 화성에서나 똑같습니다.<br/>
                하지만 지구에서는 아무도 제 이론을 믿지 않았습니다."
              </p>
              <p className="mt-2 text-cyber-cyan text-lg">
                "화성에서는... 직접 증명하겠습니다.<br/>
                <span className="font-bold">중력이 3분의 1인 그곳에서.</span>"
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <p className="font-bold text-white mb-2">SCENE 5 - 또 다른 면접실</p>
              <p className="mt-2 text-gray-400">
                면접관: "강하늘 씨, 전직 아이돌이시군요. 왜 화성에?"
              </p>
              <p className="mt-2 text-cyber-purple">
                하늘: "..."
              </p>
              <p className="mt-2 text-gray-400">
                면접관: "솔직히 말해주세요. 도망치려는 겁니까?"
              </p>
              <p className="mt-4 text-xl text-white font-bold">
                하늘이 고개를 든다.
              </p>
              <p className="mt-2 text-cyber-purple text-lg">
                "네, 도망치려는 겁니다."
              </p>
              <p className="mt-2 text-gray-300">
                "하지만 도망치는 게 아니라 시작하려는 거예요.<br/>
                여기선 제가 누구였는지만 중요하지만..."
              </p>
              <p className="mt-2 text-cyber-purple text-lg font-bold">
                "화성에서는 제가 누가 될 수 있는지가 중요하잖아요."
              </p>
            </div>
          </div>
        </section>

        {/* Ending */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-cyber-purple pl-4">엔딩 - 클리프행어</h2>

          <div className="p-6 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-lg border border-dark-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              선발 센터 로비. 결과 발표를 기다리는 수백 명.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              전광판에 이름이 하나씩 올라온다.
            </p>
            <p className="text-white font-bold text-lg mb-4">
              #47 서하준<br/>
              #48 강하늘<br/>
              #49 박시우<br/>
              #50 이지안<br/>
              ...
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              하준과 하늘이 동시에 전광판을 본다.<br/>
              다시 한번 눈이 마주친다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              그때, 경보음이 울린다.
            </p>
            <p className="text-red-400 font-bold text-xl mb-4">
              [긴급 속보: 화성행 이주선 설계 결함 발견. 탑승 인원 100명 → 50명으로 축소]
            </p>
            <p className="text-white text-xl font-bold">
              로비가 술렁인다. 50명 중 절반은 탈락해야 한다.
            </p>
            <p className="mt-4 text-2xl font-bold text-center text-cyber-cyan">
              TO BE CONTINUED...
            </p>
          </div>
        </section>

        {/* Tech Highlight */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-yellow-400 pl-4">기술 포인트</h2>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-white mb-2">화성 중력 (0.38g)</p>
            <p className="text-gray-400 text-sm mb-4">
              하준의 대사에서 자연스럽게 언급. 지구 중력의 약 38%인 화성에서의 물리 실험 가능성.
            </p>
            <p className="text-cyber-cyan text-sm">
              → ThinkPhysically 연계: "화성 중력에서의 물리학" 콘텐츠로 확장
            </p>
          </div>
        </section>

        {/* Next Episode Preview */}
        <div className="p-6 bg-dark-800 rounded-lg border border-dark-700 text-center">
          <p className="text-gray-500 text-sm mb-2">다음 에피소드</p>
          <p className="text-xl font-bold mb-2">EP.02: 서바이벌</p>
          <p className="text-gray-400">
            50명 중 25명을 뽑는 극한의 테스트가 시작된다.<br/>
            하준과 하늘, 그리고 나머지 5명의 메인 캐릭터가 처음으로 만난다.
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
