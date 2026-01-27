'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, Heart, Phone, Package, AlertTriangle, Zap } from 'lucide-react'

const scenes = [
  {
    id: 1,
    title: '프롤로그: D-14',
    location: '화성 이주 센터',
    time: '새벽 3시',
    content: `발표 직후의 혼란.

"2주요? 미쳤습니까?"
"6개월 훈련을 2주에?"

팀7 멤버들, 각자의 표정.
- 하준: 아버지를 노려보며 서 있음
- 하늘: 하준을 걱정스럽게 바라봄
- 린: 창밖을 보며 뭔가 검색 중
- 진우: 이미 짐을 싸기 시작
- 서연: 조용히 병원에 전화
- 현수: 하나(로봇)에게 뭔가 입력 중
- 태호: 눈을 감고 깊은 생각

서민혁(아버지) 회견:
"태양 폭풍 예측 모델에 따르면,
이번 발사 윈도우를 놓치면
다음 기회는 26개월 후입니다."

화면에 뜨는 태양 활동 그래프.
실제 과학 데이터 기반 설명.`,
    emotion: '충격, 혼란',
    techPoint: '태양 폭풍과 발사 윈도우 (실제 NASA 화성 발사 일정 기반)',
  },
  {
    id: 2,
    title: '압축된 훈련',
    location: '훈련 시설 곳곳',
    time: 'D-14 ~ D-10',
    content: `몽타주 시퀀스. 4일간의 압축 훈련.

[의료 훈련 - 서연 리드]
서연이 다른 멤버들에게 응급처치 교육.
"화성에서는 의사가 올 수 없어요.
여러분 각자가 의사가 되어야 해요."

태호가 떨리는 손으로 주사 연습.
서연이 조용히 그의 손을 잡아줌.

[로봇 조작 - 현수 리드]
하나(로봇)를 통해 원격 조작 교육.
"화성의 방사선 환경에서는
로봇이 먼저 나가야 합니다."

린이 놀라운 속도로 습득.
"게임이랑 비슷하네요."
현수: "...게임보다 지연 시간이 길어."

[심리 훈련 - 하늘 리드]
의외의 역할. 전 아이돌의 멘탈 관리 노하우.
"무대 공포증 이기는 법, 알려드릴게요.
화성 착륙이 무대라고 생각하면 돼요."

하준이 처음으로 하늘을 다르게 봄.
단순한 아이돌이 아니었다.

[물리학 기초 - 하준 리드]
"화성의 중력은 지구의 38%.
이건 단순히 '가볍다'는 게 아닙니다."

화이트보드에 수식을 쓰며.
"근육량, 골밀도, 심장 부하...
모든 게 달라집니다."

[전술 훈련 - 진우 리드]
"비상 상황 대응. 30초 안에 판단."
군인 특유의 명확한 지시.

팀원들, 처음엔 버벅대다가
점점 팀워크가 맞아감.`,
    emotion: '성장, 팀워크',
    knowledgeCrossover: [
      { from: '서연(의대생)', to: '전체', what: '응급의료' },
      { from: '현수(로봇공학)', to: '린(해커)', what: '원격 조작' },
      { from: '하늘(아이돌)', to: '전체', what: '멘탈 관리' },
      { from: '하준(물리학)', to: '전체', what: '화성 중력의 영향' },
      { from: '진우(특수부대)', to: '전체', what: '위기 대응' },
    ],
  },
  {
    id: 3,
    title: '작별의 시간',
    location: '각자의 장소',
    time: 'D-9 (유일한 외출 허가일)',
    content: `24시간 외출. 마지막 지구에서의 하루.

[하준]
아버지의 연구실을 찾아감.
15년간 비어있던 서재에서 발견한 것들.
- 아버지가 남긴 연구 노트
- "하준에게"라고 쓰인 봉투 (아직 열지 않음)
- 어린 하준과 찍은 사진

[하늘]
홀로 연습실에.
마지막으로 춤을 춘다.
아무도 없는 거울 앞에서.
눈물을 흘리며.

창밖으로 그녀를 지켜보는 하준.
들어가지 못하고 서 있음.

[린]
PC방에서 마지막 작업.
자신을 쫓던 조직의 서버에 접속.
무언가를 다운로드하고...
"...이건 보험이야."

화면에 스치는 파일명: "PROJECT_ARES_ORIGIN"

[서연]
병원 옥상에서 어머니와 통화.
"엄마... 나 화성 가."
"그래, 알아. 뉴스에서 봤어."
"...미안해."
"미안하긴. 네가 원하는 거잖아.
엄마는 네가 행복하면 돼."

[현수]
아내와 딸의 묘지.
하나(로봇)와 함께.
"여보, 지수야...
아빠가 화성에서 로봇 친구 많이 만들게.
외롭지 않게."

하나가 꽃을 묘비에 올려놓음.
현수의 프로그래밍이 아닌,
하나 스스로의 판단.

[진우]
전우의 묘지.
"...드디어 멀리 가네."
PTSD 플래시백이 스침.
하지만 이번엔 견딤.
"거기서 보자, 형."

[태호]
빈 교실에서 마지막 수업.
아무도 없는 책상들 앞에서
혼자 칠판에 글씨를 씀.

"인생의 마지막 수업:
두려워하지 마라.
새로운 시작을 위해
끝을 받아들여라."

그의 제자였던 기자가 몰래 촬영.
나중에 큰 화제가 될 영상.`,
    emotion: '이별, 결심',
    humanityMoment: '각 캐릭터의 가장 인간적인 순간',
  },
  {
    id: 4,
    title: '하준과 하늘',
    location: '한강 공원',
    time: 'D-9 밤',
    content: `외출의 마지막 밤.
우연히 같은 장소에서 만난 두 사람.

하늘이 먼저 발견.
"...왜 여기 있어요?"

하준: "새벽 한강 산책.
지구에서 가장 좋아하는 것 중 하나였어."

하늘: "저도요. 연습 끝나고 자주 왔어요.
아무도 저를 못 알아보니까."

침묵. 강물 소리.

하늘: "아버지... 많이 원망해요?"

하준: "...모르겠어.
15년 동안 죽은 줄 알았던 사람이
갑자기 나타나서
내 인생을 설계했다고 하면
뭘 느껴야 하는지."

하늘: "그래도 아버지잖아요."

하준: "쉽게 말하네."

하늘: "...저희 아버지는 진짜 돌아가셨어요.
제가 아이돌 할 때.
마지막으로 본 게 뉴스였대요.
스캔들 터진 날."

하준이 처음으로 하늘을 똑바로 봄.

하늘: "살아 있으면 원망이라도 할 수 있잖아요."

긴 침묵.

하준이 주머니에서 봉투를 꺼냄.
"아버지가 남긴 거. 아직 못 열었어."

하늘: "같이 열어볼까요?"

하준: "...왜?"

하늘: "혼자보다 나을 것 같아서."

봉투를 여는 하준.
안에는 짧은 편지와 USB.

편지 내용:
"하준아,
네가 이걸 읽고 있다면
아빠의 계획이 성공한 거다.
미안하다. 그리고 고맙다.
USB에 모든 진실이 있다.
화성에 도착하면 열어봐라.
- 아빠"

하준의 손이 떨림.
하늘이 조용히 그의 손을 잡음.

"괜찮아요. 우리가 같이 가잖아요."`,
    emotion: '위로, 연결',
    romancePoint: '첫 번째 손 잡기',
  },
  {
    id: 5,
    title: '린의 선택',
    location: '화성 이주 센터 / 서버실',
    time: 'D-7',
    content: `린, 밤늦게 서버실에 잠입.

다운받은 파일을 분석 중.
PROJECT_ARES의 원본 문서들.

발견한 충격적 사실:
- 팀7은 "우연히" 모인 게 아님
- 각 멤버의 만남까지 설계됨
- 하준과 하늘의 첫 만남도 계획
- 심지어 하늘의 스캔들도...

린: "이건..."

파일 더 깊이 들어감.
발견: 린 자신에 대한 파일.

"대상: 린 (본명 [검열됨])
상태: 확보 완료
특이사항: 조직 이탈자.
활용 가치 높음.
참고: 그녀가 쫓기는 '조직'은
우리가 만든 미끼."

린의 표정이 굳어감.

"...내가 쫓기던 것도 연출이었어?"

그 순간, 불이 켜짐.
서민혁(아버지)이 서 있음.

서민혁: "다 봤나?"

린: "...왜요? 왜 이런 짓을?"

서민혁: "화성에는 완벽한 팀이 필요했어.
자연스럽게 모일 확률은 0에 가까워.
그래서 만들었지."

린: "사람을 조종하면서요?"

서민혁: "결과적으로 너희는
서로에게 필요한 사람들이야.
시작이 인위적이었을 뿐."

린: "그게 정당화가 돼요?"

서민혁: "...안 돼.
하지만 화성 이주는 인류의 미래야.
개인의 자유보다 큰 가치가 있어."

린: "그건 당신 생각이죠."

서민혁: "맞아. 그래서 너한테
선택권을 주려고 해."

린을 똑바로 봄.

"이 사실을 팀에게 말해도 돼.
그러면 팀은 무너지겠지.
아니면 침묵하고,
화성에서 진실을 찾아도 돼.
선택은 네 몫이야."

린의 갈등.
말하면 팀이 무너짐.
침묵하면 거짓에 동참.

그녀의 손이 키보드 위에서 멈춤.`,
    emotion: '갈등, 배신감',
    mysteryReveal: '팀7 결성의 진실 일부 공개',
  },
  {
    id: 6,
    title: '카운트다운',
    location: '발사 준비 구역',
    time: 'D-3',
    content: `최종 점검의 날.

[기술 점검 - 현수]
우주선 시스템 최종 확인.
"생명 유지 장치... OK.
추진 시스템... OK.
하나, 네 상태는?"

하나: "모든 시스템 정상.
하지만 승무원들의
스트레스 지수가 높습니다."

현수: "그건... 어쩔 수 없지."

[의료 점검 - 서연]
각 멤버의 건강 상태 확인.
자신의 차트는 맨 마지막에.

"말기 백혈병 환자가
화성에 가는 게 말이 되나..."

태호가 다가옴.
"말이 되든 안 되든,
가고 싶으면 가는 거야.
그게 인생이야."

서연: "선생님도... 아프시잖아요."

태호: "그래서 더 잘 알지.
남은 시간을 어디서 보낼지는
자기가 정하는 거야."

[린의 결정]
팀 미팅 직전.
린이 하준을 따로 부름.

"...드릴 게 있어요."

USB를 건넴.

하준: "이게 뭔데?"

린: "PROJECT_ARES 파일.
아버지한테서... 아니,
제가 찾은 거예요."

하준: "내용이 뭔데?"

린: "...화성 도착하면 보세요.
지금 보면 우리 다 무너져요."

하준이 린을 바라봄.

"넌 봤어?"

린: "네."

"그래서?"

린: "...그래도 가고 싶어요.
쫓기던 것도, 만난 것도,
전부 연출이었을지 몰라도.
지금 이 팀은 진짜니까요."

하준이 USB를 받아듦.

"알았어. 화성에서 보자."`,
    emotion: '결심, 신뢰',
    knowledgeCrossover: [
      { from: '린', to: '하준', what: 'PROJECT_ARES 파일 전달' },
    ],
  },
  {
    id: 7,
    title: '에필로그: D-1',
    location: '우주선 내부',
    time: '발사 전날 밤',
    content: `마지막 밤.
7명이 처음으로 우주선에 탑승.

각자의 좌석에 앉아
지구를 내려다봄.

하늘: "내일이면... 진짜 가는 거네요."

진우: "돌아올 수 없는 거."

현수: "돌아올 필요 없어.
새로운 집을 만들면 되니까."

태호: "좋은 말이네. 기억해둬야지."

서연이 조용히 웃음.
"선생님, 화성에서도 그렇게
명언 많이 하실 거예요?"

태호: "당연하지. 화성 최초의
인생 선배가 될 거니까."

린이 창밖을 보며.
"...예쁘다. 지구."

하준이 아버지의 USB를 만지작거림.
하늘이 그걸 보고 손을 내밀지 않음.
대신 옆에 조용히 앉아 있음.

하준: "...고마워."

하늘: "뭐가요?"

하준: "그냥. 여기 있어줘서."

팀7, 각자의 생각에 잠김.

그때, 스피커에서 알림.

"주의: 태양 폭풍 예측 모델 업데이트.
예상보다 빠른 접근.
발사 일정 D-1에서 D-0으로 변경.
12시간 후 발사."

팀원들의 얼굴이 굳어짐.

진우가 먼저 일어남.
"준비하자."

하나(로봇)의 화면에 뜨는 메시지:
"지구 마지막 일출까지: 11시간 47분"

창밖으로 보이는 지구.
그 위로 떠오르는 태양.

TO BE CONTINUED...

[예고]
EP.06: 이륙
- 드디어 화성을 향해 출발
- 발사 직전, 뜻밖의 승객?
- 6개월의 여정이 시작된다`,
    emotion: '긴장, 결의',
    cliffhanger: '발사가 12시간 앞당겨짐',
  },
]

const episodeInfo = {
  number: 5,
  title: '카운트다운',
  subtitle: 'D-14에서 D-0까지',
  previousEp: { num: 4, title: '아버지' },
  nextEp: { num: 6, title: '이륙' },
}

const keyMoments = [
  { type: '지식 교차', desc: '5개 분야 압축 훈련 - 전원이 서로의 지식 공유' },
  { type: '인간미', desc: '7명의 마지막 지구에서의 하루' },
  { type: '로맨스', desc: '하준과 하늘, 한강에서 첫 손잡기' },
  { type: '미스터리', desc: 'PROJECT_ARES - 팀7은 처음부터 설계됨' },
  { type: '갈등', desc: '린의 선택 - 진실을 말할 것인가' },
]

const techElements = [
  {
    name: '태양 폭풍과 발사 윈도우',
    realTech: true,
    desc: '실제 NASA는 태양 활동을 모니터링하여 발사 일정 조정',
    source: 'NASA Space Weather Prediction',
  },
  {
    name: '화성 중력 (0.38g)',
    realTech: true,
    desc: '화성 중력은 지구의 38%, 인체에 다양한 영향',
    source: 'NASA Human Research Program',
  },
  {
    name: '원격 로봇 조작',
    realTech: true,
    desc: '방사선 환경에서 로봇 선행 작업은 실제 화성 탐사 전략',
    source: 'Mars Exploration Rover Program',
  },
]

export default function Episode5Page() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-dark-700">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/ideas/mars-ticket" className="text-gray-500 hover:text-white transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-xs text-gray-500">화성행 티켓</p>
              <p className="font-bold">EP.{episodeInfo.number}: {episodeInfo.title}</p>
            </div>
          </div>
          <span className="text-xs px-2 py-1 bg-orange-400/20 text-orange-400 rounded">
            시즌1 중반
          </span>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-500/10 to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-orange-400" />
            <span className="text-orange-400 font-mono text-2xl">D-14 → D-0</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {episodeInfo.title}
          </h1>
          <p className="text-xl text-gray-400">
            2주. 6개월 훈련을 압축한 시간.<br />
            마지막 지구에서의 순간들.
          </p>
        </div>
      </div>

      {/* Key Moments */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          핵심 순간
        </h2>
        <div className="grid md:grid-cols-5 gap-3">
          {keyMoments.map((moment, i) => (
            <div key={i} className="p-3 bg-dark-800 rounded-lg border border-dark-700 text-center">
              <p className="text-xs text-cyber-cyan mb-1">{moment.type}</p>
              <p className="text-sm text-gray-300">{moment.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scenes */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-6">시놉시스</h2>
        <div className="space-y-8">
          {scenes.map((scene) => (
            <div
              key={scene.id}
              className="p-6 bg-dark-800 rounded-lg border border-dark-700"
            >
              {/* Scene Header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-orange-400">
                  #{scene.id}
                </span>
                <h3 className="text-xl font-bold">{scene.title}</h3>
                <span className="text-xs px-2 py-1 bg-dark-700 rounded text-gray-400">
                  {scene.location}
                </span>
                <span className="text-xs text-gray-500">{scene.time}</span>
              </div>

              {/* Content */}
              <div className="prose prose-invert max-w-none mb-4">
                <pre className="whitespace-pre-wrap font-sans text-gray-300 text-sm leading-relaxed bg-transparent p-0">
                  {scene.content}
                </pre>
              </div>

              {/* Scene Meta */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-dark-600">
                <span className="text-xs px-2 py-1 bg-pink-400/20 text-pink-400 rounded">
                  감정: {scene.emotion}
                </span>
                {scene.techPoint && (
                  <span className="text-xs px-2 py-1 bg-cyber-cyan/20 text-cyber-cyan rounded">
                    기술: {scene.techPoint}
                  </span>
                )}
                {scene.romancePoint && (
                  <span className="text-xs px-2 py-1 bg-red-400/20 text-red-400 rounded">
                    로맨스: {scene.romancePoint}
                  </span>
                )}
                {scene.humanityMoment && (
                  <span className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded">
                    인간미: {scene.humanityMoment}
                  </span>
                )}
                {scene.mysteryReveal && (
                  <span className="text-xs px-2 py-1 bg-purple-400/20 text-purple-400 rounded">
                    미스터리: {scene.mysteryReveal}
                  </span>
                )}
                {scene.cliffhanger && (
                  <span className="text-xs px-2 py-1 bg-orange-400/20 text-orange-400 rounded">
                    클리프행어: {scene.cliffhanger}
                  </span>
                )}
              </div>

              {/* Knowledge Crossover */}
              {scene.knowledgeCrossover && (
                <div className="mt-4 p-3 bg-cyber-purple/10 rounded border border-cyber-purple/30">
                  <p className="text-xs text-cyber-purple mb-2">지식의 교차수정</p>
                  <div className="space-y-1">
                    {scene.knowledgeCrossover.map((kc, i) => (
                      <p key={i} className="text-sm text-gray-300">
                        <span className="text-cyber-cyan">{kc.from}</span>
                        {' → '}
                        <span className="text-cyber-purple">{kc.to}</span>
                        : {kc.what}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tech Elements */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-cyber-cyan" />
          실제 기술 요소
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {techElements.map((tech, i) => (
            <div key={i} className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <div className="flex items-center gap-2 mb-2">
                {tech.realTech && (
                  <span className="text-xs px-1.5 py-0.5 bg-green-400/20 text-green-400 rounded">
                    실제 기술
                  </span>
                )}
                <p className="font-bold text-sm">{tech.name}</p>
              </div>
              <p className="text-xs text-gray-400 mb-1">{tech.desc}</p>
              <p className="text-xs text-gray-600">출처: {tech.source}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Character Farewell */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-400" />
          작별의 순간들
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-cyber-cyan mb-2">하준</p>
            <p className="text-sm text-gray-400">아버지의 빈 서재에서 편지와 USB 발견</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-cyber-purple mb-2">하늘</p>
            <p className="text-sm text-gray-400">빈 연습실에서 마지막 춤, 눈물</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-green-400 mb-2">린</p>
            <p className="text-sm text-gray-400">PROJECT_ARES 파일 발견, 충격적 진실</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-pink-400 mb-2">서연</p>
            <p className="text-sm text-gray-400">병원 옥상에서 어머니와 통화</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-blue-400 mb-2">현수</p>
            <p className="text-sm text-gray-400">아내와 딸의 묘지, 하나가 스스로 꽃을 올림</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-gray-400 mb-2">진우</p>
            <p className="text-sm text-gray-400">전우의 묘지에서 PTSD를 견딤</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700 md:col-span-2">
            <p className="font-bold text-yellow-400 mb-2">태호</p>
            <p className="text-sm text-gray-400">빈 교실에서 마지막 수업 - 나중에 화제가 될 영상</p>
          </div>
        </div>
      </div>

      {/* Next Episode Preview */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-400/30">
          <p className="text-sm text-orange-400 mb-2">다음 에피소드</p>
          <h3 className="text-2xl font-bold mb-3">EP.06: 이륙</h3>
          <ul className="space-y-1 text-gray-400">
            <li>• 드디어 화성을 향해 출발</li>
            <li>• 발사 직전, 뜻밖의 승객?</li>
            <li>• 6개월의 여정이 시작된다</li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-8 border-t border-dark-700">
        <div className="flex justify-between items-center">
          <Link
            href="/ideas/mars-ticket/episode-4"
            className="text-gray-500 hover:text-white transition"
          >
            ← EP.{episodeInfo.previousEp.num}: {episodeInfo.previousEp.title}
          </Link>
          <Link
            href="/ideas/mars-ticket"
            className="text-cyber-cyan hover:underline"
          >
            목록으로
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-dark-700">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <p className="text-gray-600 text-sm">
            화성행 티켓 EP.05 | ThinkPhysically
          </p>
        </div>
      </footer>
    </div>
  )
}
