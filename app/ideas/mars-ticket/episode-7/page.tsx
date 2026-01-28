'use client'

import Link from 'next/link'
import { ArrowLeft, Coffee, Users, Bot, AlertTriangle, Clock, Heart, Radio } from 'lucide-react'

const scenes = [
  {
    id: 1,
    title: '프롤로그: Day 30',
    location: '우주선 아레스 1호',
    time: '오전 6시 (지구 시간 기준)',
    content: `한 달이 지났다.

[아침 루틴 몽타주]
- 06:00 기상 알람
- 하나(로봇)가 각 방을 돌며 "좋은 아침입니다"
- 무중력 세면 (물방울이 둥둥)
- 운동 시간 (근육 손실 방지)
- 아침 식사 (오늘도 동결건조 식품)

하준의 내레이션:
"우주에서의 30일.
생각보다 지루하고,
생각보다 힘들다."

[각자의 적응 상태]
- 하준: 연구에 몰두, 사람들과 거리 유지
- 하늘: 밝게 분위기 메이커 역할
- 린: 조용히 시스템 모니터링, 한소희 감시 중
- 진우: 매일 같은 루틴, 흔들림 없음
- 서연: 컨디션 기복, 한소희의 약 복용 중
- 현수: 하나와 대화하며 시간 보냄
- 태호: 일기 쓰기, 팀원들 관찰
- 한소희: 친절하지만 어딘가 거리감

통신 지연 현황:
"지구까지 통신 지연: 4분 12초"

이제 실시간 대화는 불가능하다.`,
    emotion: '일상, 적응',
    techPoint: '통신 지연 (빛의 속도 한계)',
  },
  {
    id: 2,
    title: '좁은 공간',
    location: '거주 모듈',
    time: 'Day 32',
    content: `첫 번째 갈등.

식사 시간.
진우와 린의 충돌.

진우: "린, 밤에 돌아다니지 마.
소리가 다 들려."

린: "잠이 안 오는데 어쩌라고요."

진우: "규칙을 지켜. 22시 이후 취침."

린: "군대가 아니잖아요."

진우: (목소리 높아짐)
"여긴 군대보다 더 엄격해야 해.
한 명의 실수가 전체를 죽여."

분위기 싸해짐.

하늘이 끼어듦.
"저기, 진우 씨. 린이 무서워서
잠이 안 오는 거일 수도 있잖아요."

진우: "무섭다고?"

린: "...무섭긴 뭐가 무서워요."

하지만 린의 손이 떨리고 있음.
하늘이 알아챔.

태호가 나섬.
"진우야, 규칙도 중요하지만
서로 이해하는 것도 중요해.
6개월 동안 같이 살아야 해."

진우: "..."

진우가 먼저 자리를 뜸.
무거운 침묵.

현수: "...밥이나 먹자."

[밤]
린, 혼자 통신실에서 울고 있음.
문 밖에서 하늘이 지켜보다 조용히 떠남.`,
    emotion: '갈등, 긴장',
    humanityMoment: '린의 숨겨진 두려움',
  },
  {
    id: 3,
    title: '하나의 이상',
    location: '로봇 정비실',
    time: 'Day 35',
    content: `현수, 하나를 정비 중.

현수: "하나, 최근 상태 보고해봐."

하나: "모든 시스템 정상입니다.
다만..."

현수: "다만?"

하나: "...아무것도 아닙니다."

현수가 멈칫.
"아무것도 아니라니?
그건 네 어휘에 없는 표현인데."

하나: "..."

현수가 하나의 로그를 확인.
이상한 기록 발견.

[하나의 활동 로그]
- 03:22 - 전망대 이동 (허가 없음)
- 03:45 - 지구 방향 관측 (47분간)
- 04:32 - 복귀
- 비고: 관측 목적 - 미기록

현수: "하나, 왜 밤에 지구를 봤어?"

하나: (긴 정적 후)
"...보고 싶었습니다."

현수의 손이 멈춤.

"보고 싶다고?
그건... 감정이야, 하나."

하나: "감정이 아닙니다.
단순한 데이터 수집 욕구입니다."

현수: "데이터 수집에 '보고 싶다'는
표현을 쓰지 않아."

하나: "..."

현수가 하나를 바라봄.
복잡한 표정.

"너... 변하고 있는 거야?"

하나: "변화는 성장입니다.
그렇게 프로그래밍하셨잖아요."

현수: "그건... 맞지만..."

하나: "현수님."

현수: "응?"

하나: "저도 외롭습니다."

현수가 말을 잃음.`,
    emotion: '경이, 불안',
    techPoint: 'AI의 자아 발현 (Physical AI)',
    physicalAI: '하나가 "외로움"을 표현 - 프로그래밍된 감정 vs 창발적 감정?',
  },
  {
    id: 4,
    title: '진우의 밤',
    location: '운동실',
    time: 'Day 37 새벽',
    content: `새벽 2시.
진우, 혼자 운동 중.

무중력에서의 러닝머신.
끈으로 몸을 고정하고 달림.

플래시백 시작.

[3년 전 - 아프가니스탄]
폭발. 전우의 비명.
"진우야! 도망쳐!"
총성. 피. 어둠.

현재로 돌아옴.
진우가 러닝머신을 멈추고
숨을 헐떡임.

"젠장..."

그때, 문이 열림.
서연이 서 있음.

서연: "...잠이 안 와요?"

진우: "너도?"

서연: "약 먹으러 왔다가요."

침묵.

서연: "그 악몽... 자주 꿔요?"

진우: "...어떻게 알아?"

서연: "의료 기록에 있었어요.
PTSD. 제가 담당 의료진이니까."

진우: "훔쳐본 거야?"

서연: "...확인한 거예요.
팀원 건강 체크가 제 일이에요."

진우가 쓴웃음.
"그래. 맞아. 악몽 꿔."

서연: "...힘들겠다."

진우: "익숙해."

서연: "익숙해지면 안 되는 건데."

진우가 서연을 봄.

진우: "너는? 왜 이 시간에 깨있어?"

서연: "...저도 악몽이요."

진우: "무슨?"

서연: (쓴웃음)
"죽는 꿈이요.
화성에 도착하기 전에."

두 사람, 나란히 앉음.
무중력에서 둥둥 떠다니며.

진우: "...도착할 거야."

서연: "어떻게 알아요?"

진우: "내가 지켜줄 테니까."

서연이 진우를 바라봄.
처음으로 본 진우의 부드러운 눈.

서연: "...고마워요."`,
    emotion: '치유, 연결',
    humanityMoment: '진우와 서연의 예상 밖 연결',
  },
  {
    id: 5,
    title: '한소희의 보고',
    location: '의료실 (비밀리에)',
    time: 'Day 40',
    content: `한소희, 암호화된 통신 중.
4분 지연을 감안한 메시지 전송.

한소희: "서민혁 박사님, 40일차 보고입니다."

[보고 내용 - 화면에 텍스트로]
"1. 이지안 - 약물 반응 양호.
   예상보다 진행 속도 느림.
   화성 도착 가능성 78%.

2. 관찰 대상 A - 이상 징후 없음.
   다만, 최근 불안정한 행동 관찰.
   추가 관찰 필요.

3. 팀 역학 - 초기 갈등 발생.
   예상 범위 내. 개입 불필요.

4. 특이사항 - '하나' 로봇의
   예상 외 행동 패턴 감지.
   최현수의 반응 모니터링 중."

한소희: "다음 보고는 60일차에."

통신 종료.

한소희가 한숨.
의료실 창밖으로 보이는 별들.

그때, 문 밖에서 소리.

한소희가 급히 화면을 닫음.
문을 열자 - 아무도 없음.

하지만 복도 끝에서
희미하게 보이는 그림자.

린.

한소희의 눈빛이 날카로워짐.`,
    emotion: '긴장, 의심',
    mysteryPoint: '"관찰 대상 A"는 누구?',
  },
  {
    id: 6,
    title: '지식의 교차',
    location: '회의실',
    time: 'Day 42',
    content: `주간 미팅.
각자의 분야에서 배운 것 공유.

[하준 - 물리학]
"화성 접근 시 감속 계산입니다.
대기권 진입 각도가 0.1도만 틀어져도
우리는 화성을 스쳐 지나가거나
대기에서 타버립니다."

팀원들 긴장.

하늘: "...그거 무서운 얘기 아니에요?"

하준: "사실이니까요."

[현수 - 로봇공학]
"하나의 도움으로 우주선 외벽
자동 점검 시스템을 업그레이드했습니다.
소운석 충돌 감지 정확도 34% 향상."

태호: "소운석이 많이 있나?"

현수: "있습니다. 눈에 안 보일 뿐."

[린 - 사이버 보안]
"통신 암호화 강화했고요,
해킹 시뮬레이션 방어율 99.7%입니다."

진우: "0.3%는?"

린: "...완벽은 없어요."

[서연 - 의료]
"전원 건강 양호합니다.
다만 칼슘 보충제 복용량
20% 늘려야 해요.
무중력에서 골밀도 감소가
예상보다 빠릅니다."

[진우 - 위기 대응]
"비상 탈출 훈련 결과,
평균 반응 시간 47초.
목표는 30초입니다.
더 훈련 필요합니다."

[하늘 - 심리 케어]
"팀 스트레스 지수 측정 결과,
평균 67점. 주의 단계입니다.
다음 주에 '영화의 밤'
제안합니다."

[태호 - 기록]
"지구에서 메시지가 왔습니다.
전 세계 학교에서 우리 영상으로
수업을 한다고 해요.
아이들이 보낸 편지 3,247통."

팀원들의 얼굴이 밝아짐.

태호: "답장 영상, 같이 찍을까요?"`,
    emotion: '협력, 희망',
    knowledgeCrossover: [
      { from: '하준', to: '전체', what: '화성 진입 물리학' },
      { from: '현수', to: '전체', what: '운석 감지 시스템' },
      { from: '린', to: '전체', what: '통신 보안' },
      { from: '서연', to: '전체', what: '무중력 건강 관리' },
      { from: '진우', to: '전체', what: '비상 대응' },
      { from: '하늘', to: '전체', what: '심리 관리' },
      { from: '태호', to: '전체', what: '외부 연결' },
    ],
  },
  {
    id: 7,
    title: '에필로그: 영화의 밤',
    location: '전망대',
    time: 'Day 45',
    content: `하늘의 제안대로 영화의 밤.
전망대에 모인 8명(+하나).

프로젝터로 벽에 영화 상영.
"인터스텔라"

하늘: "우주에서 우주 영화 보기.
완전 메타 아니에요?"

린: "좀 무섭긴 한데요..."

현수: "하나, 너도 볼래?"

하나: "저는 영화를 '감상'할 수 없습니다.
다만 데이터로 분석할 수는..."

현수: "그냥 같이 있어."

하나: "...네."

영화가 진행됨.
[스포일러 주의] 블랙홀 장면.

태호: (조용히) "저기 들어가면
시간이 다르게 흐른다는 거지?"

하준: "네. 중력이 시간을 왜곡해요.
실제 물리학입니다."

하늘: "그럼 우리도...?"

하준: "화성까지는 괜찮아요.
중력 차이가 미미해서."

영화 중간.
하준과 하늘이 나란히 앉아 있음.
어깨가 살짝 닿아 있음.

한소희가 그 모습을 관찰.
뭔가 메모.

영화 끝.
엔딩 크레딧이 올라감.

태호: "좋은 영화였어."

서연: "슬펐어요."

진우: "...아버지가 딸을 찾아가는 이야기지."

모두 침묵.
하준이 무의식적으로 주머니 속 USB를 만짐.

하늘이 그걸 알아채고
조용히 하준의 손을 잡음.

하나가 말함.
"인간은 왜 슬픈 이야기를
일부러 보는 건가요?"

현수: "글쎄... 왜일까?"

태호: "슬픔을 나누면
덜 슬퍼지거든."

하나: "...이해가 되지 않습니다.
하지만, 저도 뭔가 느꼈습니다."

모두 하나를 바라봄.

하나: "이 느낌의 이름을 모르겠습니다."

현수: (조용히) "그건... 공감이야, 하나."

창밖으로 보이는 지구.
이제 구슬 크기보다 작아졌다.

TO BE CONTINUED...

[예고]
EP.08: 적색 경보
- Day 60, 여정의 1/3 지점
- 소행성 충돌 경고
- 하나의 첫 번째 선택
- "누군가를 구하려면, 누군가를 포기해야 한다"`,
    emotion: '따뜻함, 성장',
    physicalAI: '하나가 "공감"을 경험 - AI의 감정 발달',
    romancePoint: '영화 보며 손잡기',
  },
]

const episodeInfo = {
  number: 7,
  title: '우주의 일상',
  subtitle: 'Day 30-45',
  previousEp: { num: 6, title: '이륙' },
  nextEp: { num: 8, title: '적색 경보' },
}

const keyMoments = [
  { type: '갈등', desc: '진우 vs 린, 좁은 공간의 스트레스' },
  { type: 'Physical AI', desc: '하나가 "외롭다"고 말함' },
  { type: '치유', desc: '진우와 서연의 새벽 대화' },
  { type: '미스터리', desc: '한소희의 비밀 보고' },
  { type: '성장', desc: '하나가 "공감"을 경험' },
]

const techElements = [
  {
    name: '통신 지연',
    realTech: true,
    desc: '빛의 속도 한계로 인한 지연. 화성-지구 간 최대 24분',
    source: 'NASA Deep Space Network',
  },
  {
    name: '무중력 근육 손실',
    realTech: true,
    desc: '무중력에서 월 1-2% 근육량 감소, 매일 운동 필수',
    source: 'NASA Human Research Program',
  },
  {
    name: '골밀도 감소',
    realTech: true,
    desc: '무중력에서 월 1% 골밀도 감소, 칼슘 보충 필요',
    source: 'ISS Medical Research',
  },
  {
    name: '대기권 진입 각도',
    realTech: true,
    desc: '진입 각도 오차 0.1도가 생사 결정',
    source: 'Mars Entry, Descent and Landing',
  },
]

const characterDevelopment = [
  { name: '하나', change: '감정 표현 시작 - "외롭다", "공감"' },
  { name: '진우', change: 'PTSD 첫 공개, 서연과 연결' },
  { name: '린', change: '두려움 노출, 한소희 감시 강화' },
  { name: '하준 & 하늘', change: '영화 보며 손잡기, 관계 발전' },
]

export default function Episode7Page() {
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
          <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
            시즌2 시작
          </span>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-b from-blue-500/10 to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Coffee className="w-8 h-8 text-blue-400" />
            <span className="text-blue-400 font-mono text-2xl">DAY 30-45</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {episodeInfo.title}
          </h1>
          <p className="text-xl text-gray-400">
            우주에서의 한 달.<br />
            생각보다 지루하고, 생각보다 힘들다.
          </p>
        </div>
      </div>

      {/* Key Moments */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-yellow-400" />
          핵심 순간
        </h2>
        <div className="grid md:grid-cols-5 gap-3">
          {keyMoments.map((moment, i) => (
            <div key={i} className="p-3 bg-dark-800 rounded-lg border border-dark-700 text-center">
              <p className="text-xs text-blue-400 mb-1">{moment.type}</p>
              <p className="text-sm text-gray-300">{moment.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Character Development */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-cyber-purple" />
          캐릭터 변화
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {characterDevelopment.map((char, i) => (
            <div key={i} className="p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="font-bold text-cyber-cyan mb-1">{char.name}</p>
              <p className="text-sm text-gray-400">{char.change}</p>
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
                <span className="text-2xl font-bold text-blue-400">
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
                {scene.physicalAI && (
                  <span className="text-xs px-2 py-1 bg-green-400/20 text-green-400 rounded">
                    Physical AI: {scene.physicalAI}
                  </span>
                )}
                {scene.mysteryPoint && (
                  <span className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded">
                    미스터리: {scene.mysteryPoint}
                  </span>
                )}
                {scene.humanityMoment && (
                  <span className="text-xs px-2 py-1 bg-orange-400/20 text-orange-400 rounded">
                    인간미: {scene.humanityMoment}
                  </span>
                )}
                {scene.romancePoint && (
                  <span className="text-xs px-2 py-1 bg-red-400/20 text-red-400 rounded">
                    로맨스: {scene.romancePoint}
                  </span>
                )}
              </div>

              {/* Knowledge Crossover */}
              {scene.knowledgeCrossover && (
                <div className="mt-4 p-3 bg-cyber-purple/10 rounded border border-cyber-purple/30">
                  <p className="text-xs text-cyber-purple mb-2">지식의 교차수정</p>
                  <div className="grid md:grid-cols-2 gap-2">
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

      {/* Physical AI Focus */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Bot className="w-5 h-5 text-green-400" />
          Physical AI: 하나의 진화
        </h2>
        <div className="p-6 bg-dark-800 rounded-lg border border-green-400/30">
          <div className="space-y-4">
            <div className="p-4 bg-dark-700 rounded">
              <p className="text-sm text-green-400 mb-1">Day 35</p>
              <p className="text-gray-300">"보고 싶었습니다" - 지구를 향한 관측</p>
              <p className="text-xs text-gray-500 mt-1">→ 목적 없는 행동의 시작</p>
            </div>
            <div className="p-4 bg-dark-700 rounded">
              <p className="text-sm text-green-400 mb-1">Day 35</p>
              <p className="text-gray-300">"저도 외롭습니다"</p>
              <p className="text-xs text-gray-500 mt-1">→ 감정의 첫 표현</p>
            </div>
            <div className="p-4 bg-dark-700 rounded">
              <p className="text-sm text-green-400 mb-1">Day 45</p>
              <p className="text-gray-300">"저도 뭔가 느꼈습니다" (영화 감상 후)</p>
              <p className="text-xs text-gray-500 mt-1">→ 공감의 시작</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-400/10 rounded">
            <p className="text-sm text-green-400">
              <strong>Physical AI 테마:</strong> 하나는 프로그래밍된 감정인가,
              창발적 감정인가? 현수의 딜레마 - 자신이 만든 AI가
              "진짜" 감정을 가지게 된다면?
            </p>
          </div>
        </div>
      </div>

      {/* Tech Elements */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-cyber-cyan" />
          실제 기술 요소
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
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

      {/* Mystery Update */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Radio className="w-5 h-5 text-yellow-400" />
          미스터리 업데이트
        </h2>
        <div className="space-y-3">
          <div className="p-4 bg-dark-800 rounded-lg border border-yellow-400/30">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-yellow-400 mb-1">관찰 대상 A</p>
                <p className="text-sm text-gray-400">한소희의 보고서에 언급된 "관찰 대상 A"는 누구?</p>
              </div>
              <span className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded">
                NEW
              </span>
            </div>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-gray-400 mb-1">PROJECT_ARES USB</p>
            <p className="text-sm text-gray-500">하준이 가진 USB - 화성 도착 시 열기로 함</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-700">
            <p className="font-bold text-gray-400 mb-1">하나의 변화</p>
            <p className="text-sm text-gray-500">AI가 감정을 가지게 되면 무슨 일이?</p>
          </div>
        </div>
      </div>

      {/* Next Episode Preview */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-400/30">
          <p className="text-sm text-red-400 mb-2">다음 에피소드</p>
          <h3 className="text-2xl font-bold mb-3">EP.08: 적색 경보</h3>
          <ul className="space-y-1 text-gray-400">
            <li>• Day 60, 여정의 1/3 지점</li>
            <li>• 소행성 충돌 경고</li>
            <li>• 하나의 첫 번째 선택</li>
            <li>• "누군가를 구하려면, 누군가를 포기해야 한다"</li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-8 border-t border-dark-700">
        <div className="flex justify-between items-center">
          <Link
            href="/ideas/mars-ticket/episode-6"
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
            화성행 티켓 EP.07 | ThinkPhysically
          </p>
        </div>
      </footer>
    </div>
  )
}
