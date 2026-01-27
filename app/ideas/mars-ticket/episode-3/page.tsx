'use client'

import Link from 'next/link'
import { ArrowLeft, Rocket, Clock, MapPin, Users, AlertTriangle, Zap, Droplets, Thermometer, Wind } from 'lucide-react'

export default function Episode3Synopsis() {
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

        <h1 className="text-4xl font-bold mb-2">EP.03: 48시간</h1>
        <p className="text-gray-500 mb-8">화성행 티켓 - 시즌1 세 번째 에피소드</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>2040년 3월 18일 ~ 3월 20일</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>화성 시뮬레이션 돔</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>지식의 교차수정 본격화</span>
          </div>
        </div>

        {/* Environment Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="p-3 bg-dark-800 rounded-lg border border-red-500/30 text-center">
            <Thermometer className="w-5 h-5 text-red-400 mx-auto mb-1" />
            <p className="text-xl font-bold text-red-400">-60°C</p>
            <p className="text-xs text-gray-500">야간 온도</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg border border-blue-500/30 text-center">
            <Wind className="w-5 h-5 text-blue-400 mx-auto mb-1" />
            <p className="text-xl font-bold text-blue-400">0.6%</p>
            <p className="text-xs text-gray-500">대기압</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg border border-cyan-500/30 text-center">
            <Droplets className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
            <p className="text-xl font-bold text-cyan-400">0</p>
            <p className="text-xs text-gray-500">수원</p>
          </div>
        </div>

        {/* Synopsis */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-cyber-cyan pl-4">시놉시스</h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            {/* Hour 0 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-cyber-cyan font-mono">T+00:00</span> 입장
              </p>
              <p>
                거대한 돔. 붉은 사막. 화성의 표면을 완벽하게 재현한 시뮬레이션 공간.
              </p>
              <p className="mt-2">
                10개 팀이 각각 다른 구역에 배치된다.
              </p>
              <p className="mt-2 text-gray-400">
                지급품: 기본 우주복, 산소 24시간분, 식량 1일분, 기본 공구
              </p>
              <p className="mt-2 text-red-400 italic">
                "48시간 후 생존한 팀원만 화성행 자격을 얻습니다."
              </p>
              <p className="mt-2 text-gray-500">
                스피커가 꺼진다. 완전한 고립이 시작된다.
              </p>
            </div>

            {/* Hour 1 - First Crisis */}
            <div className="p-4 bg-dark-800 rounded-lg border border-red-500/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-red-400 font-mono">T+01:00</span> 첫 번째 위기
              </p>
              <p className="text-gray-400 text-sm mb-3">
                <AlertTriangle className="inline w-4 h-4 text-red-400 mr-1" />
                <span className="text-red-400">산소 누출</span>
              </p>
              <p>
                팀 7의 임시 거주지. 갑자기 경보음이 울린다.
              </p>
              <p className="mt-2 text-red-400 font-mono">
                [WARNING: OXYGEN LEAK DETECTED - SECTOR 7]
              </p>
              <p className="mt-2">
                <span className="text-gray-400">진우</span>가 즉시 반응한다.
              </p>
              <p className="mt-2 text-gray-400 italic">
                "모두 헬멧 착용! 지금 당장!"
              </p>
              <p className="mt-4 text-white font-bold">
                지식의 교차수정 #1: 물리 + 전술
              </p>
              <div className="mt-2 p-3 bg-dark-700/50 rounded space-y-2 text-sm">
                <p><span className="text-cyber-cyan">하준:</span> "압력 차이로 누출 위치를 찾을 수 있어. 소리가 나는 쪽으로..."</p>
                <p><span className="text-gray-400">진우:</span> "삼각 측량. 세 지점에서 소리를 들으면 정확한 위치가 나와."</p>
                <p><span className="text-cyber-cyan">하준:</span> "...그거 물리학이야."</p>
                <p><span className="text-gray-400">진우:</span> "우린 '전술'이라고 불렀어."</p>
              </div>
              <p className="mt-3">
                두 사람이 처음으로 서로를 인정하는 눈빛을 교환한다.
              </p>
            </div>

            {/* Hour 6 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-cyber-cyan font-mono">T+06:00</span> 물 추출
              </p>
              <p className="text-gray-400 text-sm mb-3">
                <Zap className="inline w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-yellow-400">기술 포인트: MOXIE + 열분해</span>
              </p>
              <p>
                산소는 막았지만, 물이 없다. 24시간 안에 물을 구해야 한다.
              </p>
              <p className="mt-4 text-white font-bold">
                지식의 교차수정 #2: 물리 + 로봇공학 + 해킹
              </p>
              <div className="mt-2 p-3 bg-dark-700/50 rounded space-y-2 text-sm">
                <p><span className="text-cyber-cyan">하준:</span> "화성 토양을 200도로 가열하면 수분이 증발해. 그걸 응축하면..."</p>
                <p><span className="text-blue-400">현수:</span> "하나가 할 수 있어. 200도까지 가열 가능한 모듈이 있어."</p>
                <p><span className="text-green-400">린:</span> "전력이 부족해. 하나의 시스템 효율을 올릴게."</p>
                <p className="text-gray-500">(린이 키보드를 두드린다. 껌을 씹으며.)</p>
                <p><span className="text-green-400">린:</span> "됐어. 30% 효율 향상."</p>
                <p><span className="text-blue-400">현수:</span> "...고마워. 하나가 고마워할 거야."</p>
                <p><span className="text-green-400">린:</span> "로봇이 고마워한다고?"</p>
              </div>
              <p className="mt-3">
                로봇 "하나"가 토양을 가열하기 시작한다.
                <span className="text-cyber-cyan"> 물방울이 맺힌다.</span>
              </p>
            </div>

            {/* Hour 12 - Night */}
            <div className="p-4 bg-dark-800 rounded-lg border border-blue-500/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-blue-400 font-mono">T+12:00</span> 첫 번째 밤
              </p>
              <p>
                기온이 급격히 떨어진다. -60°C.
              </p>
              <p className="mt-2 text-gray-400">
                히터의 전력이 바닥난다. 체온을 유지해야 한다.
              </p>
              <p className="mt-4 text-white font-bold">
                지식의 교차수정 #3: 생존 + 의학
              </p>
              <div className="mt-2 p-3 bg-dark-700/50 rounded space-y-2 text-sm">
                <p><span className="text-cyber-purple">하늘:</span> "서바이벌 기본이야. 체온 유지는 단열보다 체온 공유가 효율적이야."</p>
                <p><span className="text-pink-400">서연:</span> "맞아요. 저체온증 예방에는 서로의 체온이 최고예요."</p>
                <p className="text-gray-500">(모두가 어색해한다)</p>
                <p><span className="text-yellow-400">김태호:</span> "자, 여기서 문제. 쪽팔림과 동사, 뭐가 더 무서워요?"</p>
              </div>
              <p className="mt-3">
                7명이 옹기종기 모여 앉는다. 처음으로 물리적으로 가까워진다.
              </p>
              <p className="mt-2 text-gray-400">
                어둠 속에서 <span className="text-cyber-purple">하늘</span>이 조용히 노래를 흥얼거린다.
              </p>
              <p className="mt-2 text-cyber-purple italic">
                "밤하늘의 저 별들처럼... 우리도 빛날 수 있을까..."
              </p>
              <p className="mt-2">
                아무도 말하지 않는다. 하지만 <span className="text-cyber-cyan">하준</span>이 살짝 미소 짓는다.
              </p>
            </div>

            {/* Hour 18 - Accident */}
            <div className="p-4 bg-dark-800 rounded-lg border border-red-500/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-red-400 font-mono">T+18:00</span> 사고
              </p>
              <p className="text-gray-400 text-sm mb-3">
                <AlertTriangle className="inline w-4 h-4 text-red-400 mr-1" />
                <span className="text-red-400">의료 위기</span>
              </p>
              <p>
                새벽. 탐사 중 <span className="text-yellow-400">김태호</span>가 쓰러진다.
              </p>
              <p className="mt-2 text-pink-400">
                서연이 달려간다. 맥박을 확인한다.
              </p>
              <p className="mt-2 text-pink-400 italic">
                "호흡 곤란... 산소 포화도가 떨어지고 있어요!"
              </p>
              <p className="mt-2 text-gray-500">
                (시한부임을 아는 서연만 진짜 이유를 알고 있다)
              </p>
              <p className="mt-4 text-white font-bold">
                지식의 교차수정 #4: 의학 + 물리 + 로봇
              </p>
              <div className="mt-2 p-3 bg-dark-700/50 rounded space-y-2 text-sm">
                <p><span className="text-pink-400">서연:</span> "산소 농축이 필요해요. 지금 당장!"</p>
                <p><span className="text-cyber-cyan">하준:</span> "압력을 높이면 산소 분압이 올라가. 밀폐 공간에서..."</p>
                <p><span className="text-blue-400">현수:</span> "하나의 외장을 이용해서 간이 가압실을 만들 수 있어."</p>
              </div>
              <p className="mt-3">
                로봇 "하나"가 몸을 펼쳐 김태호를 감싼다. 간이 가압 챔버.
              </p>
              <p className="mt-2">
                <span className="text-yellow-400">김태호</span>의 눈이 떠진다.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "...수업 시간에 졸면 안 되는데."
              </p>
              <p className="mt-2">
                모두가 안도의 한숨을 쉰다. 하지만 <span className="text-pink-400">서연</span>의 표정은 어둡다.
              </p>
            </div>

            {/* Hour 24 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-cyber-cyan font-mono">T+24:00</span> 절반
              </p>
              <p>
                24시간 경과. 절반이 지났다.
              </p>
              <p className="mt-2">
                다른 팀들의 상황이 스피커로 전달된다.
              </p>
              <p className="mt-2 text-red-400 font-mono text-sm">
                팀 2: 2명 탈락 (저체온증)<br/>
                팀 5: 1명 탈락 (자발적 포기)<br/>
                팀 8: 3명 탈락 (산소 부족)<br/>
                팀 7: 0명 탈락
              </p>
              <p className="mt-2 text-white">
                팀 7만 전원 생존.
              </p>
              <p className="mt-2 text-gray-400">
                하지만 아무도 기뻐하지 않는다. 다른 팀의 탈락자들 생각에.
              </p>
              <p className="mt-2 text-cyber-purple italic">
                하늘: "저 사람들은... 괜찮은 거야?"
              </p>
              <p className="mt-2 text-gray-400 italic">
                진우: "시뮬레이션이야. 죽는 건 아니야."
              </p>
              <p className="mt-2 text-cyber-purple italic">
                하늘: "...그래도."
              </p>
            </div>

            {/* Hour 30 - Lin's Discovery */}
            <div className="p-4 bg-dark-800 rounded-lg border border-green-500/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-green-400 font-mono">T+30:00</span> 린의 발견
              </p>
              <p>
                린이 시뮬레이션 돔의 네트워크에 접속한다.
              </p>
              <p className="mt-2 text-green-400 italic">
                "이상해... 이 시뮬레이션, 뭔가 조작되고 있어."
              </p>
              <p className="mt-2">
                화면에 뜬 데이터:
              </p>
              <div className="mt-2 p-3 bg-dark-900 rounded font-mono text-sm">
                <p className="text-green-400">[TEAM 7 - SPECIAL PROTOCOL]</p>
                <p className="text-gray-500">- Difficulty: +40%</p>
                <p className="text-gray-500">- Observation: PRIORITY</p>
                <p className="text-gray-500">- Objective: EVALUATE SYNERGY</p>
                <p className="text-red-400">- Authority: [CLASSIFIED]</p>
              </div>
              <p className="mt-3 text-green-400">
                린의 눈이 커진다.
              </p>
              <p className="mt-2 text-green-400 italic">
                "우리 팀... 일부러 어렵게 만들어졌어."
              </p>
              <p className="mt-2 text-gray-400">
                누가? 왜?
              </p>
              <p className="mt-2">
                린이 USB를 꺼낸다. 데이터를 복사한다.
              </p>
            </div>

            {/* Hour 36 - Storm */}
            <div className="p-4 bg-dark-800 rounded-lg border border-orange-500/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-orange-400 font-mono">T+36:00</span> 먼지 폭풍
              </p>
              <p className="text-gray-400 text-sm mb-3">
                <Zap className="inline w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-yellow-400">기술 포인트: 화성 먼지 폭풍</span>
              </p>
              <p>
                경보음. 화성의 먼지 폭풍이 시뮬레이션된다.
              </p>
              <p className="mt-2 text-orange-400 font-mono">
                [DUST STORM INCOMING - WIND SPEED: 100km/h]
              </p>
              <p className="mt-2">
                시야가 0이 된다. 거주지 외벽이 흔들린다.
              </p>
              <p className="mt-4 text-white font-bold">
                지식의 교차수정 #5: 전술 + 생존 + 물리 + 로봇
              </p>
              <div className="mt-2 p-3 bg-dark-700/50 rounded space-y-2 text-sm">
                <p><span className="text-gray-400">진우:</span> "방어 태세! 약한 곳부터 보강해!"</p>
                <p><span className="text-cyber-purple">하늘:</span> "바람의 방향을 읽어야 해. 나 서바이벌에서 배웠어."</p>
                <p><span className="text-cyber-cyan">하준:</span> "풍압 = 0.5 × 공기밀도 × 속도². 100km/h면..."</p>
                <p><span className="text-blue-400">현수:</span> "하나! 외벽 지지해!"</p>
              </div>
              <p className="mt-3">
                로봇 "하나"가 외벽을 지탱한다. 7명이 협력해서 폭풍을 버틴다.
              </p>
              <p className="mt-2 text-gray-400">
                6시간의 폭풍. 아무도 잠들지 않는다.
              </p>
            </div>

            {/* Hour 42 */}
            <div className="p-4 bg-dark-800 rounded-lg border border-pink-500/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-pink-400 font-mono">T+42:00</span> 고백
              </p>
              <p>
                폭풍이 지나간 후. 모두 지쳐있다.
              </p>
              <p className="mt-2">
                <span className="text-yellow-400">김태호</span>와 <span className="text-pink-400">서연</span>이 따로 앉아 있다.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "학생, 아까... 알고 있었지?"
              </p>
              <p className="mt-2 text-pink-400 italic">
                "..."
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "내가 왜 쓰러졌는지."
              </p>
              <p className="mt-2">
                긴 침묵.
              </p>
              <p className="mt-2 text-pink-400 italic">
                "선생님은... 얼마나 남으셨어요?"
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "6개월. 아마도."
              </p>
              <p className="mt-2 text-pink-400 italic">
                "저도요. 비슷해요."
              </p>
              <p className="mt-4">
                두 시한부가 서로를 본다. 처음으로 비밀을 공유하는 사람.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "화성에서 죽으면... 지구에서 죽는 것보다 의미 있을까?"
              </p>
              <p className="mt-2 text-pink-400 italic">
                "저는 그냥... 누군가를 살리고 싶어요. 죽기 전에."
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "나는 가르치고 싶어. 마지막까지."
              </p>
              <p className="mt-4 text-white">
                멀리서 <span className="text-cyber-cyan">하준</span>이 두 사람을 지켜본다.
                무언가 느낀 듯한 표정.
              </p>
            </div>

            {/* Hour 48 - Finale */}
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <p className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-cyber-cyan font-mono">T+48:00</span> 종료
              </p>
              <p>
                사이렌이 울린다.
              </p>
              <p className="mt-2 text-white font-mono text-lg">
                [SIMULATION COMPLETE]
              </p>
              <p className="mt-2">
                팀 7. <span className="text-cyber-cyan">전원 생존.</span>
              </p>
              <p className="mt-4">
                돔 문이 열린다. 프로그램 책임자가 들어온다.
              </p>
              <p className="mt-2 text-gray-400">
                "팀 7, 축하합니다. 유일하게 전원 생존한 팀입니다."
              </p>
              <p className="mt-2">
                환호... 하려는 순간.
              </p>
              <p className="mt-2 text-green-400">
                린이 앞으로 나선다.
              </p>
              <p className="mt-2 text-green-400 italic font-bold">
                "왜 우리 팀만 난이도가 40% 더 높았죠?"
              </p>
              <p className="mt-2">
                정적.
              </p>
              <p className="mt-2">
                책임자의 표정이 굳는다.
              </p>
            </div>
          </div>
        </section>

        {/* Ending */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-cyber-purple pl-4">엔딩 - 클리프행어</h2>

          <div className="p-6 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-lg border border-dark-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              책임자가 린을 응시한다.
            </p>
            <p className="text-gray-400 italic mb-4">
              "어디서 그 정보를...?"
            </p>
            <p className="text-green-400 italic mb-4">
              "중요한 건 그게 아니죠. 왜 우리였어요?"
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              다른 팀원들도 린 뒤에 선다. 답을 요구하는 눈빛.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              책임자가 한숨을 쉰다. 그리고 말한다.
            </p>
            <div className="p-4 bg-dark-900 rounded-lg mb-4">
              <p className="text-white text-lg font-bold text-center">
                "당신들 7명은... 처음부터 함께 가도록 설계됐습니다."
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              <span className="text-cyber-cyan">하준</span>이 묻는다.
            </p>
            <p className="text-cyber-cyan italic mb-4">
              "무슨 말이에요? 누가 설계했다는 거죠?"
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              책임자가 뒤를 돌아본다. 어둠 속에서 누군가가 걸어 나온다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <span className="text-cyber-cyan">하준</span>의 얼굴이 창백해진다.
            </p>
            <p className="text-cyber-cyan italic text-xl mb-4">
              "...아버지?"
            </p>
            <p className="mt-4 text-2xl font-bold text-center text-cyber-cyan">
              TO BE CONTINUED...
            </p>
          </div>
        </section>

        {/* Knowledge Crossover Summary */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-yellow-400 pl-4">지식의 교차수정 정리</h2>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-dark-800 rounded-lg border border-dark-700">
              <p className="text-white font-bold">#1 산소 누출 대응</p>
              <p className="text-gray-400">물리(하준) + 전술(진우) → 삼각 측량으로 누출 위치 파악</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-dark-700">
              <p className="text-white font-bold">#2 물 추출</p>
              <p className="text-gray-400">물리(하준) + 로봇(현수) + 해킹(린) → 효율적인 토양 수분 추출</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-dark-700">
              <p className="text-white font-bold">#3 체온 유지</p>
              <p className="text-gray-400">생존(하늘) + 의학(서연) → 체온 공유로 저체온증 예방</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-dark-700">
              <p className="text-white font-bold">#4 응급 치료</p>
              <p className="text-gray-400">의학(서연) + 물리(하준) + 로봇(현수) → 간이 가압 챔버</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-dark-700">
              <p className="text-white font-bold">#5 먼지 폭풍 대응</p>
              <p className="text-gray-400">전술(진우) + 생존(하늘) + 물리(하준) + 로봇(현수) → 전원 협력</p>
            </div>
          </div>
        </section>

        {/* Tech Points */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-cyan-400 pl-4">기술 포인트</h2>
          <div className="space-y-3">
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">화성 먼지 폭풍</p>
              <p className="text-gray-400 text-sm mb-2">
                화성의 먼지 폭풍은 수개월간 지속될 수 있음. 풍속 최대 100km/h.
                하지만 대기 밀도가 낮아 실제 풍압은 지구의 1% 수준.
              </p>
              <p className="text-cyber-cyan text-sm">
                → ThinkPhysically 연계: "화성 폭풍의 물리학" 콘텐츠
              </p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">산소 분압과 가압</p>
              <p className="text-gray-400 text-sm mb-2">
                산소 부족 시 기압을 높이면 산소 분압이 상승하여 호흡이 수월해짐.
                이것이 고압 산소 치료의 원리.
              </p>
              <p className="text-cyber-cyan text-sm">
                → ThinkPhysically 연계: "산소와 기압의 관계" 콘텐츠
              </p>
            </div>
          </div>
        </section>

        {/* Mystery */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-red-400 pl-4">미스터리 전개</h2>
          <div className="space-y-3">
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-bold">팀 7이 설계됐다</p>
              <p className="text-gray-400 text-sm">7명이 함께 가도록 처음부터 계획된 것. 누가? 왜?</p>
            </div>
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-bold">하준의 아버지</p>
              <p className="text-gray-400 text-sm">죽은 줄 알았던 아버지가 나타났다. 그가 모든 것의 배후?</p>
            </div>
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-bold">린의 USB</p>
              <p className="text-gray-400 text-sm">린은 무슨 데이터를 복사했나? 그녀의 진짜 목적은?</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-dark-700">
          <Link
            href="/ideas/mars-ticket/episode-2"
            className="text-gray-500 hover:text-cyber-cyan transition"
          >
            ← EP.02: 서바이벌
          </Link>
          <div className="text-center">
            <p className="text-gray-500 text-sm">다음 에피소드</p>
            <p className="text-xl font-bold">EP.04: 아버지</p>
            <p className="text-gray-500 text-sm">하준의 과거, 팀 7의 진실</p>
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
