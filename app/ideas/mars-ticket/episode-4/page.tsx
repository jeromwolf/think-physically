'use client'

import Link from 'next/link'
import { ArrowLeft, Rocket, Clock, MapPin, Users, Eye, FileText, Heart } from 'lucide-react'

export default function Episode4Synopsis() {
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

        <h1 className="text-4xl font-bold mb-2">EP.04: 아버지</h1>
        <p className="text-gray-500 mb-8">화성행 티켓 - 시즌1 네 번째 에피소드</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>2040년 3월 20일</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>선발 센터 / 회상: 15년 전</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>하준 중심 에피소드</span>
          </div>
        </div>

        {/* Previously */}
        <div className="p-4 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg mb-8">
          <p className="font-bold text-cyber-cyan mb-2">EP3 클리프행어</p>
          <p className="text-gray-400 text-sm">
            "당신들 7명은 처음부터 함께 가도록 설계됐습니다."
            <br />
            어둠 속에서 걸어 나온 남자. 하준의 얼굴이 창백해진다.
            <br />
            <span className="text-cyber-cyan">"...아버지?"</span>
          </p>
        </div>

        {/* Synopsis */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-cyber-cyan pl-4">시놉시스</h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            {/* Opening */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">오프닝 - 대치</p>
              <p>
                시뮬레이션 돔. 정적이 흐른다.
              </p>
              <p className="mt-2">
                <span className="text-cyber-cyan">서하준</span>이 그 남자를 응시한다.
                15년 만에 보는 아버지. <span className="text-white">서민혁(58)</span>.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "죽었다고 했잖아요. 15년 전에."
              </p>
              <p className="mt-2 text-white italic">
                "죽어야 했다. 너와 엄마를 지키려면."
              </p>
              <p className="mt-2">
                다른 6명은 상황을 파악하지 못한다.
              </p>
              <p className="mt-2 text-cyber-purple italic">
                하늘: "하준 씨... 아버지라고?"
              </p>
              <p className="mt-2">
                하준이 주먹을 꽉 쥔다. 손이 떨린다.
              </p>
            </div>

            {/* Flashback 1 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-yellow-500/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-yellow-400" />
                회상 #1 - 15년 전, 서울
              </p>
              <p className="text-gray-500 text-sm mb-3">하준 13세</p>
              <p>
                작은 아파트. 어린 하준이 아버지의 서재에서 책을 읽고 있다.
              </p>
              <p className="mt-2">
                벽에는 NASA 포스터. 책장에는 물리학 서적들.
              </p>
              <p className="mt-2 text-white italic">
                아버지: "하준아, 이리 와봐."
              </p>
              <p className="mt-2">
                아버지가 망원경으로 밤하늘을 가리킨다.
              </p>
              <p className="mt-2 text-white italic">
                "저기 보이는 붉은 점이 뭔지 알아?"
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                어린 하준: "화성이요?"
              </p>
              <p className="mt-2 text-white italic">
                "맞아. 언젠가 사람이 저기 갈 거야. 아빠가 그 길을 만들 거야."
              </p>
              <p className="mt-2">
                어린 하준의 눈이 반짝인다.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "저도 같이 갈래요!"
              </p>
              <p className="mt-2 text-white italic">
                "...그래. 우리 같이 가자."
              </p>
            </div>

            {/* Scene 1 - Confrontation */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 1 - 대면</p>
              <p>
                현재. 별도의 회의실.
              </p>
              <p className="mt-2">
                하준과 아버지 서민혁, 둘만 남는다.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "왜 날 여기 오게 했어요? 왜 이 팀이에요?"
              </p>
              <p className="mt-2 text-white italic">
                "앉아라. 설명해줄게."
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "설명? 15년 동안 죽은 척하고 있다가?"
              </p>
              <p className="mt-4">
                서민혁이 파일을 꺼낸다.
              </p>
              <p className="mt-2 text-white italic">
                "Project ARES. 화성 이주 프로젝트의 진짜 이름이다."
              </p>
              <p className="mt-2 text-white italic">
                "나는 25년 전부터 이 프로젝트를 설계해왔다."
              </p>
            </div>

            {/* Flashback 2 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-yellow-500/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-yellow-400" />
                회상 #2 - 15년 전, 그날 밤
              </p>
              <p className="text-gray-500 text-sm mb-3">하준 13세</p>
              <p>
                새벽. 어린 하준이 잠에서 깬다. 부모님의 다투는 소리.
              </p>
              <p className="mt-2 text-gray-400 italic">
                엄마: "위험해요! 그 사람들이 당신을 찾고 있다고요!"
              </p>
              <p className="mt-2 text-white italic">
                아버지: "이 연구를 멈출 수 없어. 인류의 미래가 달려있어."
              </p>
              <p className="mt-2 text-gray-400 italic">
                엄마: "인류보다 가족이 먼저 아니에요?"
              </p>
              <p className="mt-4">
                일주일 후. 아버지의 연구실에서 화재.
                <span className="text-red-400"> 시신은 발견되지 않았다.</span>
              </p>
              <p className="mt-2">
                장례식. 어린 하준이 빈 관 앞에 서 있다.
              </p>
              <p className="mt-2">
                아무 말도 하지 않는다. 아무 감정도 보이지 않는다.
                <br />
                그날부터 하준은 감정을 숫자로 바꾸기 시작했다.
              </p>
            </div>

            {/* Scene 2 - Truth */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyber-cyan" />
                SCENE 2 - 진실
              </p>
              <p>
                현재. 서민혁이 파일을 펼친다.
              </p>
              <p className="mt-2">
                7명의 프로필이 나열되어 있다.
              </p>
              <div className="mt-3 p-3 bg-dark-700/50 rounded font-mono text-sm">
                <p className="text-cyber-cyan">서하준 - 이론물리학</p>
                <p className="text-cyber-purple">강하늘 - 극한환경 적응</p>
                <p className="text-gray-400">박진우 - 위기관리/전술</p>
                <p className="text-pink-400">이서연 - 의료</p>
                <p className="text-blue-400">최현수 - Physical AI</p>
                <p className="text-green-400">린 - 시스템/보안</p>
                <p className="text-yellow-400">김태호 - 교육/통합</p>
              </div>
              <p className="mt-4 text-white italic">
                "화성에서 살아남으려면 이 7가지 역량이 모두 필요하다."
              </p>
              <p className="mt-2 text-white italic">
                "나는 25년 동안 이 조합을 찾았다. 그리고 너희 7명을 찾았다."
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "...저를 여기 보내려고 죽은 척한 거예요?"
              </p>
              <p className="mt-2 text-white italic">
                "아니. 너를 지키려고 죽은 척한 거다."
              </p>
            </div>

            {/* Scene 3 - Team's Reaction */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 3 - 팀의 반응</p>
              <p>
                한편, 대기실. 나머지 6명이 모여 있다.
              </p>
              <p className="mt-2 text-green-400">
                린이 노트북을 꺼낸다.
              </p>
              <p className="mt-2 text-green-400 italic">
                "내가 복사한 파일... 열어볼까?"
              </p>
              <p className="mt-2 text-gray-400">
                진우: "잠깐. 그게 맞아? 허가 없이?"
              </p>
              <p className="mt-2 text-green-400 italic">
                "우리가 조작당하고 있는데 허가가 중요해?"
              </p>
              <p className="mt-4">
                파일이 열린다.
              </p>
              <div className="mt-2 p-3 bg-dark-900 rounded font-mono text-sm">
                <p className="text-white">[PROJECT ARES - CLASSIFIED]</p>
                <p className="text-gray-500 mt-2">Mission: Mars Colony - Phase 1</p>
                <p className="text-gray-500">Team 7: "Pioneer Unit"</p>
                <p className="text-yellow-400 mt-2">Special Note:</p>
                <p className="text-gray-400">"이 팀은 화성 최초 거주지의 핵심 인력이 될 것.</p>
                <p className="text-gray-400">일반 이주민 95명과 별도로 특별 훈련 예정."</p>
              </div>
              <p className="mt-3 text-cyber-purple">
                하늘: "우리가... 화성 최초 거주지를 만드는 사람들이라고?"
              </p>
              <p className="mt-2 text-yellow-400">
                김태호: "자, 여기서 문제. 우리한테 선택권은 있는 걸까?"
              </p>
            </div>

            {/* Scene 4 - The Reason */}
            <div className="p-4 bg-dark-800 rounded-lg border border-red-500/30">
              <p className="font-bold text-white mb-2">SCENE 4 - 왜 숨어야 했나</p>
              <p>
                회의실. 서민혁이 말을 잇는다.
              </p>
              <p className="mt-2 text-white italic">
                "25년 전, 나는 화성 테라포밍 이론을 발표했다."
              </p>
              <p className="mt-2 text-white italic">
                "그리고 어떤 조직이 나를 찾기 시작했다."
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "무슨 조직이요?"
              </p>
              <p className="mt-2 text-white italic">
                "화성에 먼저 도착하고 싶은 사람들.
                <span className="text-red-400"> 독점</span>하고 싶은 사람들."
              </p>
              <p className="mt-4">
                서민혁이 오래된 사진을 꺼낸다. 젊은 시절의 자신과 동료들.
              </p>
              <p className="mt-2 text-white italic">
                "이 사진의 5명 중 3명이 죽었다. 사고로 위장됐지만... 살해당한 거다."
              </p>
              <p className="mt-2 text-white italic">
                "나도 죽어야 했다. 그래야 연구를 계속할 수 있었다."
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "...그래서 저와 엄마를 버린 거예요?"
              </p>
              <p className="mt-2 text-white italic">
                "버린 게 아니다. <span className="text-cyber-cyan">지킨 거다.</span>"
              </p>
            </div>

            {/* Flashback 3 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-yellow-500/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-yellow-400" />
                회상 #3 - 10년 전
              </p>
              <p className="text-gray-500 text-sm mb-3">하준 18세 - MIT 합격</p>
              <p>
                하준이 MIT 합격 통지서를 받는다. 혼자 있는 방에서.
              </p>
              <p className="mt-2">
                기쁨보다 공허함. 이 소식을 전할 아버지가 없다.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "아버지... 저 합격했어요."
              </p>
              <p className="mt-2">
                아무도 없는 방에 혼잣말이 울린다.
              </p>
              <p className="mt-4 text-gray-500">
                그런데 화면이 전환된다.
              </p>
              <p className="mt-2">
                어딘가의 지하 연구실. 서민혁이 모니터를 보고 있다.
                화면에는 하준의 MIT 합격 소식.
              </p>
              <p className="mt-2">
                서민혁의 눈에 눈물이 고인다.
              </p>
              <p className="mt-2 text-white italic">
                "잘했다, 하준아..."
              </p>
              <p className="mt-2 text-gray-500">
                그는 15년 동안 아들을 지켜보고 있었다. 멀리서.
              </p>
            </div>

            {/* Scene 5 - Hajun's Choice */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" />
                SCENE 5 - 하준의 선택
              </p>
              <p>
                현재. 하준이 자리에서 일어난다.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "15년 동안... 지켜봤다고요?"
              </p>
              <p className="mt-2 text-white italic">
                "매일."
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "그러면서 왜 한 번도 연락 안 했어요?"
              </p>
              <p className="mt-2 text-white italic">
                "연락하면 위험해지니까."
              </p>
              <p className="mt-2 text-cyber-cyan">
                하준의 눈에 눈물이 고인다. 처음으로.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "저는... 15년 동안 아버지가 왜 날 버렸는지 계산했어요."
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "어떤 공식으로도 답이 안 나왔어요."
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "그래서 감정을 버렸어요. 계산할 수 없으니까."
              </p>
              <p className="mt-4">
                긴 침묵.
              </p>
              <p className="mt-2 text-white italic">
                "미안하다."
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "..."
              </p>
              <p className="mt-2 text-white italic">
                "미안하다, 하준아."
              </p>
            </div>

            {/* Scene 6 - Team Reunites */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 6 - 재회</p>
              <p>
                하준이 대기실로 돌아온다. 눈이 붉다.
              </p>
              <p className="mt-2">
                6명이 하준을 본다. 아무도 먼저 말을 걸지 못한다.
              </p>
              <p className="mt-2 text-cyber-purple">
                하늘이 다가간다.
              </p>
              <p className="mt-2 text-cyber-purple italic">
                "...괜찮아?"
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "모르겠어."
              </p>
              <p className="mt-2 text-cyber-purple italic">
                "당연하지. 이런 상황에서 괜찮으면 이상한 거야."
              </p>
              <p className="mt-4">
                <span className="text-yellow-400">김태호</span>가 일어선다.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "학생, 우리가 왜 여기 모인 건지 알겠어요?"
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "아버지가... 우리를 모았대요. 화성 최초 거주지를 위해."
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "그래서 우리한테 선택권이 있는 거예요, 없는 거예요?"
              </p>
              <p className="mt-4">
                모두가 하준을 본다.
              </p>
              <p className="mt-2 text-cyber-cyan">
                하준이 고개를 든다. 눈물 자국이 마르지 않았지만, 눈빛은 단단하다.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "선택권은 우리한테 있어요."
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "아버지가 우릴 모았든 아니든... 화성에 갈지 말지는 우리가 정하는 거예요."
              </p>
            </div>

            {/* Scene 7 - Lin's Secret */}
            <div className="p-4 bg-dark-800 rounded-lg border border-green-500/30">
              <p className="font-bold text-white mb-2">SCENE 7 - 린의 비밀</p>
              <p>
                늦은 밤. 린이 혼자 남아 USB를 본다.
              </p>
              <p className="mt-2">
                파일 안에 또 다른 폴더가 있다.
              </p>
              <p className="mt-2 text-green-400 font-mono text-sm">
                [SUBJECT 6: "LIN" - SPECIAL NOTES]
              </p>
              <p className="mt-2">
                린의 손이 멈춘다.
              </p>
              <div className="mt-3 p-3 bg-dark-900 rounded font-mono text-sm">
                <p className="text-gray-500">Real Name: [REDACTED]</p>
                <p className="text-gray-500">Background: Corporate espionage target</p>
                <p className="text-gray-500">Previous Identity: [REDACTED]</p>
                <p className="text-red-400 mt-2">Warning: Subject may have hidden agenda</p>
                <p className="text-red-400">Recommendation: Monitor closely</p>
              </div>
              <p className="mt-3 text-green-400 italic">
                "...날 알고 있었어?"
              </p>
              <p className="mt-2">
                린의 표정이 복잡해진다.
              </p>
              <p className="mt-2 text-green-400 italic">
                "서민혁... 당신, 뭘 알고 있는 거야?"
              </p>
            </div>
          </div>
        </section>

        {/* Ending */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-cyber-purple pl-4">엔딩 - 클리프행어</h2>

          <div className="p-6 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-lg border border-dark-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              다음 날 아침. 선발 센터 강당.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              서민혁이 50명(25명 탈락 후 남은 인원) 앞에 선다.
            </p>
            <p className="text-white italic mb-4">
              "여러분, 축하합니다. 여러분은 화성행 최종 후보입니다."
            </p>
            <p className="text-white italic mb-4">
              "하지만 한 가지 말씀드릴 게 있습니다."
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              스크린에 뉴스가 뜬다.
            </p>
            <div className="p-4 bg-dark-900 rounded-lg mb-4">
              <p className="text-red-400 font-bold text-lg">
                [속보] 태양 폭풍 경고 - NASA 발표
              </p>
              <p className="text-gray-400 text-sm mt-2">
                "역대급 태양 폭풍이 6개월 내 지구에 도달할 예정.
                <br />
                전자 장비 마비, 통신 두절 가능성."
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              웅성거리는 청중.
            </p>
            <p className="text-white italic mb-4">
              서민혁: "화성 이주 일정이 앞당겨집니다."
            </p>
            <p className="text-white italic mb-4">
              "당초 6개월 후 출발 예정이었으나..."
            </p>
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg mb-4">
              <p className="text-xl font-bold text-center text-white">
                "2주 후에 출발합니다."
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              팀 7이 서로를 본다. 충격과 두려움.
            </p>
            <p className="text-cyber-cyan italic mb-4">
              하준이 아버지를 본다.
            </p>
            <p className="text-cyber-cyan italic mb-4">
              "2주... 준비도 안 됐는데?"
            </p>
            <p className="text-white italic mb-4">
              "준비는 화성에서 하면 된다."
            </p>
            <p className="mt-4 text-2xl font-bold text-center text-cyber-cyan">
              TO BE CONTINUED...
            </p>
          </div>
        </section>

        {/* Character Development */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-pink-400 pl-4">캐릭터 발전</h2>
          <div className="space-y-3 text-sm">
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <p className="text-cyber-cyan font-bold">서하준</p>
              <p className="text-gray-400 mt-1">
                15년간 억눌렀던 감정이 터진다. 처음으로 눈물을 보인다.
                <br />
                "감정을 버린 이유"가 밝혀진다 - 계산할 수 없어서.
              </p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <p className="text-cyber-purple font-bold">강하늘</p>
              <p className="text-gray-400 mt-1">
                하준에게 먼저 다가간다. "괜찮아?"
                <br />
                가면 뒤에 숨겨진 따뜻함이 드러나기 시작.
              </p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-green-400/30">
              <p className="text-green-400 font-bold">린</p>
              <p className="text-gray-400 mt-1">
                서민혁이 자신에 대해 알고 있다는 걸 발견.
                <br />
                린의 진짜 정체에 대한 복선.
              </p>
            </div>
          </div>
        </section>

        {/* New Character */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-white pl-4">새 캐릭터</h2>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="text-white font-bold text-lg">서민혁 (58)</p>
            <p className="text-gray-400 mt-2">
              <strong>역할:</strong> 하준의 아버지, Project ARES 설계자
            </p>
            <p className="text-gray-400 mt-1">
              <strong>배경:</strong> 세계적인 물리학자. 25년 전 화성 테라포밍 이론 발표.
              위협을 받고 15년 전 사망을 위장하고 잠적.
            </p>
            <p className="text-gray-400 mt-1">
              <strong>동기:</strong> 인류를 화성에 보내는 것이 평생의 목표.
              아들 하준을 팀 7의 중심으로 설계.
            </p>
            <p className="text-cyber-cyan mt-2 text-sm">
              "버린 게 아니다. 지킨 거다."
            </p>
          </div>
        </section>

        {/* Mystery Progress */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-red-400 pl-4">미스터리 진행</h2>
          <div className="space-y-3">
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-green-400 font-bold">해결됨</p>
              <p className="text-gray-400 text-sm">팀 7이 왜 7명인가 → 서민혁이 설계한 "완벽한 조합"</p>
            </div>
            <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
              <p className="text-yellow-400 font-bold">진행 중</p>
              <p className="text-gray-400 text-sm">서민혁을 위협하는 조직은 누구인가?</p>
            </div>
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-bold">새로운 미스터리</p>
              <p className="text-gray-400 text-sm">서민혁은 린의 정체를 알고 있다. 린의 진짜 목적은?</p>
            </div>
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-bold">새로운 위기</p>
              <p className="text-gray-400 text-sm">태양 폭풍으로 출발이 2주 후로 앞당겨짐</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-dark-700">
          <Link
            href="/ideas/mars-ticket/episode-3"
            className="text-gray-500 hover:text-cyber-cyan transition"
          >
            ← EP.03: 48시간
          </Link>
          <div className="text-center">
            <p className="text-gray-500 text-sm">다음 에피소드</p>
            <p className="text-xl font-bold">EP.05: 카운트다운</p>
            <p className="text-gray-500 text-sm">출발 D-14, 마지막 준비</p>
          </div>
          <div className="w-24"></div>
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
