'use client'

import Link from 'next/link'
import { ArrowLeft, Rocket, Clock, MapPin, Users, AlertTriangle, Zap } from 'lucide-react'

export default function Episode2Synopsis() {
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

        <h1 className="text-4xl font-bold mb-2">EP.02: 서바이벌</h1>
        <p className="text-gray-500 mb-8">화성행 티켓 - 시즌1 두 번째 에피소드</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>2040년 3월 16일 ~ 3월 18일</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>화성 선발 훈련 센터</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>7인 전원 등장</span>
          </div>
        </div>

        {/* Previously */}
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg mb-8">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <p className="font-bold text-red-400">EP1 클리프행어</p>
          </div>
          <p className="text-gray-400 text-sm">
            화성행 이주선 설계 결함 발견. 탑승 인원 100명 → 50명으로 축소.
            <br />
            50명 중 25명이 추가 탈락해야 한다.
          </p>
        </div>

        {/* Synopsis */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-cyber-cyan pl-4">시놉시스</h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">오프닝 - 혼란</p>
              <p>
                선발 센터 로비가 아수라장이 됐다. 50명의 합격자들이 소리친다.
              </p>
              <p className="mt-2 text-gray-400">
                "이게 무슨 소리야!" / "설계 결함이라고?" / "사기 아니야?"
              </p>
              <p className="mt-2">
                스크린에 프로그램 책임자가 등장한다.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "72시간 내에 서바이벌 테스트를 진행합니다. 25명만 화성에 갈 수 있습니다."
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 1 - 팀 배정</p>
              <p>
                50명이 10개 팀으로 나뉜다. 각 팀 5명.
              </p>
              <p className="mt-2 text-cyber-cyan">
                <strong>팀 7:</strong> 서하준, 강하늘, 박진우, 이서연, 최현수, 린, 김태호
              </p>
              <p className="mt-2 text-gray-500">
                (의도적으로 7명이 한 팀에 배정됨 - 후에 밝혀지는 이유가 있다)
              </p>
              <p className="mt-4">
                처음 만나는 7인. 어색한 침묵.
              </p>
              <p className="mt-2">
                <span className="text-yellow-400">김태호</span>가 먼저 입을 연다.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "자, 여기서 문제. 서로 이름도 모르는데 어떻게 팀이 되겠어요?"
              </p>
              <p className="mt-2 text-gray-400">
                어색한 웃음. 하나씩 자기소개가 시작된다.
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 2 - 자기소개</p>

              <div className="space-y-3 mt-3">
                <div className="pl-4 border-l-2 border-cyber-cyan">
                  <p className="text-cyber-cyan">서하준</p>
                  <p className="text-sm text-gray-400">"물리학자입니다. 중력 관련 연구를 합니다."</p>
                  <p className="text-xs text-gray-500">(짧고 건조함. 눈을 잘 못 마주침)</p>
                </div>

                <div className="pl-4 border-l-2 border-cyber-purple">
                  <p className="text-cyber-purple">강하늘</p>
                  <p className="text-sm text-gray-400">"...생존 전문가예요."</p>
                  <p className="text-xs text-gray-500">(아이돌 경력은 숨김. 린이 뭔가 눈치챈 듯)</p>
                </div>

                <div className="pl-4 border-l-2 border-gray-400">
                  <p className="text-gray-400">박진우</p>
                  <p className="text-sm text-gray-400">"전직 군인입니다."</p>
                  <p className="text-xs text-gray-500">(더 이상 말 안 함. 출구를 확인하고 있음)</p>
                </div>

                <div className="pl-4 border-l-2 border-pink-400">
                  <p className="text-pink-400">이서연</p>
                  <p className="text-sm text-gray-400">"의대생이에요! 의료 담당으로 왔어요."</p>
                  <p className="text-xs text-gray-500">(밝게 웃음. 하지만 손목을 자꾸 만짐)</p>
                </div>

                <div className="pl-4 border-l-2 border-blue-400">
                  <p className="text-blue-400">최현수</p>
                  <p className="text-sm text-gray-400">"로봇 공학자입니다. 하나... 아, 제 로봇 이름이에요."</p>
                  <p className="text-xs text-gray-500">(로봇 얘기할 때만 눈이 빛남)</p>
                </div>

                <div className="pl-4 border-l-2 border-green-400">
                  <p className="text-green-400">린</p>
                  <p className="text-sm text-gray-400">"시스템 엔지니어."</p>
                  <p className="text-xs text-gray-500">(껌을 씹으며. 사람들 손을 관찰 중)</p>
                </div>

                <div className="pl-4 border-l-2 border-yellow-400">
                  <p className="text-yellow-400">김태호</p>
                  <p className="text-sm text-gray-400">"저는 그냥... 물리 선생이었어요. 40년 동안."</p>
                  <p className="text-xs text-gray-500">(따뜻한 미소. 서하준이 살짝 고개를 돌림)</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <p className="font-bold text-white mb-2">SCENE 3 - 첫 번째 테스트: 감압 챔버</p>
              <p className="text-gray-400 text-sm mb-3">
                <Zap className="inline w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-yellow-400">기술 포인트: 화성 대기압</span>
              </p>
              <p>
                화성 대기압(6.1 hPa)을 시뮬레이션하는 감압 챔버.
                팀별로 입장. 산소가 점점 줄어든다.
              </p>
              <p className="mt-2 text-cyber-cyan">
                하준이 중얼거린다. "화성 대기압은 지구의 0.6%..."
              </p>
              <p className="mt-2 text-pink-400">
                서연이 누군가의 손을 잡는다. "괜찮아요, 천천히 숨 쉬세요."
              </p>
              <p className="mt-2">
                다른 팀원이 공황 상태에 빠진다.
                <span className="text-gray-400">박진우</span>가 침착하게 그를 진정시킨다.
              </p>
              <p className="mt-2 text-gray-400 italic">
                "호흡에 집중해. 4초 들이쉬고, 7초 내쉬어."
              </p>
              <p className="mt-3 text-white">
                <strong>결과:</strong> 팀 7, 전원 통과. 다른 팀들에서 3명 탈락.
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 4 - 밤, 숙소</p>
              <p>
                7명이 같은 방에 배정됐다. 이층 침대 4개.
              </p>
              <p className="mt-2">
                <span className="text-blue-400">최현수</span>는 로봇 "하나"를 정비하고 있다.
              </p>
              <p className="mt-2 text-blue-400 italic">
                "하나야, 오늘 잘했어. 내일도 잘하자."
              </p>
              <p className="mt-2 text-gray-500">
                (다른 팀원들이 이상하게 쳐다봄)
              </p>
              <p className="mt-4">
                <span className="text-cyber-purple">하늘</span>이 창밖을 보며 조용히 노래를 흥얼거린다.
              </p>
              <p className="mt-2 text-green-400">
                린이 귀를 쫑긋 세운다.
              </p>
              <p className="mt-2 text-green-400 italic">
                "그 노래... 3년 전에 유행했던 거 아니야?"
              </p>
              <p className="mt-2">
                하늘이 굳는다. 린이 눈을 가늘게 뜬다.
              </p>
              <p className="mt-2 text-cyber-purple italic">
                "...그냥 좋아하는 노래야."
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 5 - 새벽, 복도</p>
              <p>
                <span className="text-cyber-cyan">하준</span>이 잠을 못 이루고 복도를 걷는다.
                손가락으로 벽을 두드린다. (피보나치 리듬)
              </p>
              <p className="mt-2">
                <span className="text-yellow-400">김태호</span>가 벤치에 앉아 있다.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "학생, 잠이 안 와요?"
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "...선생님은요?"
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "나이 먹으면 잠이 줄어. 물리 법칙은 아니지만."
              </p>
              <p className="mt-4">
                어색한 침묵. 김태호가 하늘을 올려다본다.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "저기 보이는 저 별... 화성이야. 6개월 후면 우리가 저기 있을지도 몰라."
              </p>
              <p className="mt-2 text-cyber-cyan">
                하준도 하늘을 본다. 처음으로 긴장이 조금 풀린 표정.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "화성까지의 거리는 약 2억 2500만 km... 빛의 속도로 12분 30초..."
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "자, 여기서 문제. 그 거리를 사람이 가려면?"
              </p>
              <p className="mt-2">
                하준이 살짝 미소 짓는다. 처음으로.
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-purple/30">
              <p className="font-bold text-white mb-2">SCENE 6 - 둘째 날: 팀 미션</p>
              <p className="text-gray-400 text-sm mb-3">
                <Zap className="inline w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-yellow-400">기술 포인트: 화성 물 추출</span>
              </p>
              <p>
                <strong>미션:</strong> 제한된 자원으로 화성 환경에서 물을 추출하라.
              </p>
              <p className="mt-2">
                각 팀에게 주어진 것: 화성 토양 샘플, 기본 장비, 전력 100W 제한.
              </p>
              <p className="mt-4 text-white font-bold">
                팀 7의 접근:
              </p>
              <div className="mt-2 space-y-2 text-sm">
                <p><span className="text-cyber-cyan">하준:</span> "화성 토양의 수분 함량은 약 2%..."</p>
                <p><span className="text-blue-400">현수:</span> "하나가 토양을 가열할 수 있어. 200도까지."</p>
                <p><span className="text-green-400">린:</span> "전력 효율을 최적화할게."</p>
                <p><span className="text-pink-400">서연:</span> "추출된 물의 순도 체크는 제가 할게요!"</p>
                <p><span className="text-gray-400">진우:</span> "안전 확보. 장비 고장 시 대응 담당."</p>
                <p><span className="text-cyber-purple">하늘:</span> "..."</p>
              </div>
              <p className="mt-4 text-white">
                하늘이 아무 역할도 못 맡는다. 어색하게 서 있다.
              </p>
              <p className="mt-2 text-yellow-400">
                김태호가 하늘에게 다가간다.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "학생, 여기 와봐요. 팀 분위기 관리가 제일 중요한 거 알아요?"
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">SCENE 7 - 갈등</p>
              <p>
                미션 중, 의견 충돌이 발생한다.
              </p>
              <p className="mt-2 text-cyber-cyan">
                하준: "열분해 방식이 효율적이야. 수치상으로..."
              </p>
              <p className="mt-2 text-gray-400">
                진우: "실전에선 수치대로 안 돼. 예비 방안이 필요해."
              </p>
              <p className="mt-2 text-cyber-cyan">
                하준: "물리 법칙은 실전에서도 똑같이 작동해."
              </p>
              <p className="mt-2 text-gray-400">
                진우: "전장에서 그렇게 말하다 죽은 사람 많아."
              </p>
              <p className="mt-4">
                팽팽한 긴장감. 다른 팀원들이 당황한다.
              </p>
              <p className="mt-2 text-cyber-purple">
                하늘이 끼어든다.
              </p>
              <p className="mt-2 text-cyber-purple italic">
                "둘 다 맞는 말이야. 하준 씨 방식으로 하되, 진우 씨가 말한 예비 방안도 준비하면 되잖아."
              </p>
              <p className="mt-2">
                두 남자가 서로를 본다.
                하준이 먼저 고개를 끄덕인다.
              </p>
              <p className="mt-2 text-cyber-cyan italic">
                "...그게 합리적이네."
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-green-400/30">
              <p className="font-bold text-white mb-2">SCENE 8 - 린의 발견</p>
              <p>
                린이 시스템을 점검하다가 이상한 걸 발견한다.
              </p>
              <p className="mt-2 text-gray-400">
                선발 센터의 내부 네트워크에 숨겨진 파일.
              </p>
              <p className="mt-2 text-green-400 font-mono text-sm">
                [CLASSIFIED] Project_ARES_Selection_Criteria.pdf
              </p>
              <p className="mt-2">
                린의 눈이 커진다. 해킹을 시작한다.
              </p>
              <p className="mt-2 text-green-400 italic">
                "...팀 7이 왜 7명이지? 다른 팀은 다 5명인데."
              </p>
              <p className="mt-2 text-gray-500">
                파일을 열기 직전, 시스템 알람이 울린다.
                린이 급히 접속을 끊는다.
              </p>
              <p className="mt-2 text-red-400">
                누군가 린을 지켜보고 있었다.
              </p>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg border border-pink-400/30">
              <p className="font-bold text-white mb-2">SCENE 9 - 서연의 비밀</p>
              <p>
                밤. 서연이 화장실에서 약을 먹는다. 손이 떨린다.
              </p>
              <p className="mt-2">
                거울에 비친 자신의 얼굴. 창백하다.
              </p>
              <p className="mt-2 text-pink-400 italic">
                "조금만... 조금만 더 버텨."
              </p>
              <p className="mt-2">
                문이 열린다. <span className="text-yellow-400">김태호</span>가 들어온다.
              </p>
              <p className="mt-2">
                서연이 급히 약을 숨긴다. 하지만 김태호는 이미 봤다.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "학생..."
              </p>
              <p className="mt-2 text-pink-400 italic">
                "아무것도 아니에요. 그냥 영양제예요."
              </p>
              <p className="mt-2">
                김태호는 아무 말도 하지 않는다.
                하지만 그의 눈에는 뭔가 아는 듯한 슬픔이 있다.
              </p>
              <p className="mt-2 text-yellow-400 italic">
                "...나도 그래. 영양제."
              </p>
              <p className="mt-2">
                두 사람의 눈이 마주친다. 서로의 비밀을 직감한다.
              </p>
            </div>
          </div>
        </section>

        {/* Ending */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-cyber-purple pl-4">엔딩 - 클리프행어</h2>

          <div className="p-6 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-lg border border-dark-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>셋째 날 아침. 최종 테스트 발표.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              스크린에 뜬 문구:
            </p>
            <div className="p-4 bg-dark-900 rounded-lg mb-4">
              <p className="text-xl font-mono text-center text-white">
                FINAL TEST: MARS SIMULATION
              </p>
              <p className="text-center text-red-400 mt-2">
                "48시간 동안 화성 환경에서 생존하라"
              </p>
              <p className="text-center text-gray-500 text-sm mt-2">
                탈락 기준: 사망 판정 또는 자발적 포기
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              팀원들이 서로를 본다. 긴장감이 감돈다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              그때, 린이 하준에게 쪽지를 건넨다.
            </p>
            <p className="text-green-400 font-bold text-lg mb-4">
              "우리 팀, 이상해. 조심해."
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              하준이 쪽지를 읽는다. 고개를 들어 린을 본다.
              린은 이미 다른 곳을 보고 있다.
            </p>
            <p className="mt-4 text-2xl font-bold text-center text-cyber-cyan">
              TO BE CONTINUED...
            </p>
          </div>
        </section>

        {/* Character Moments */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-pink-400 pl-4">캐릭터 인간미 포인트</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-dark-800 rounded-lg border border-cyber-cyan/20">
              <p className="text-cyber-cyan font-bold">서하준</p>
              <p className="text-gray-400">손가락으로 피보나치 리듬 두드림</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-cyber-purple/20">
              <p className="text-cyber-purple font-bold">강하늘</p>
              <p className="text-gray-400">긴장하면 옛날 노래 흥얼거림</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-gray-400/20">
              <p className="text-gray-400 font-bold">박진우</p>
              <p className="text-gray-400">항상 출구 확인, 벽 등지고 앉음</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-pink-400/20">
              <p className="text-pink-400 font-bold">이서연</p>
              <p className="text-gray-400">무의식적으로 손목 맥박 확인</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-blue-400/20">
              <p className="text-blue-400 font-bold">최현수</p>
              <p className="text-gray-400">로봇 "하나"에게 말 걸기</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-green-400/20">
              <p className="text-green-400 font-bold">린</p>
              <p className="text-gray-400">껌 씹으며 사람들 손 관찰</p>
            </div>
            <div className="p-3 bg-dark-800 rounded-lg border border-yellow-400/20 md:col-span-2">
              <p className="text-yellow-400 font-bold">김태호</p>
              <p className="text-gray-400">"자, 여기서 문제!" / 모두를 "학생"이라 부름</p>
            </div>
          </div>
        </section>

        {/* Tech Highlight */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-yellow-400 pl-4">기술 포인트</h2>
          <div className="space-y-3">
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">화성 대기압 (6.1 hPa)</p>
              <p className="text-gray-400 text-sm mb-2">
                지구 대기압(1013 hPa)의 0.6%. 감압 챔버 테스트의 과학적 근거.
              </p>
              <p className="text-cyber-cyan text-sm">
                → ThinkPhysically 연계: "화성에서 숨쉬기" 콘텐츠
              </p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-white mb-2">화성 토양 물 추출</p>
              <p className="text-gray-400 text-sm mb-2">
                화성 토양의 수분 함량 2%. 열분해로 추출 가능. MOXIE 실험 기반.
              </p>
              <p className="text-cyber-cyan text-sm">
                → ThinkPhysically 연계: "화성에서 물 만들기" 콘텐츠
              </p>
            </div>
          </div>
        </section>

        {/* Mystery Setup */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-red-400 pl-4">미스터리 복선</h2>
          <div className="space-y-3">
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-bold">왜 팀 7만 7명인가?</p>
              <p className="text-gray-400 text-sm">다른 팀은 모두 5명. 의도적 배치?</p>
            </div>
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-bold">린이 발견한 비밀 파일</p>
              <p className="text-gray-400 text-sm">Project ARES Selection Criteria - 무엇을 숨기고 있나?</p>
            </div>
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-bold">누가 린을 감시하고 있는가?</p>
              <p className="text-gray-400 text-sm">시스템 알람의 진짜 의미</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-dark-700">
          <Link
            href="/ideas/mars-ticket/episode-1"
            className="text-gray-500 hover:text-cyber-cyan transition"
          >
            ← EP.01: 편도 티켓
          </Link>
          <div className="text-center">
            <p className="text-gray-500 text-sm">다음 에피소드</p>
            <p className="text-xl font-bold">EP.03: 48시간</p>
            <p className="text-gray-500 text-sm">화성 시뮬레이션 서바이벌</p>
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
