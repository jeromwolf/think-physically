'use client'

import Link from 'next/link'
import { ArrowLeft, Rocket, Users, AlertTriangle, Radio, Heart, Star } from 'lucide-react'

const scenes = [
  {
    id: 1,
    title: '프롤로그: T-60분',
    location: '발사대',
    time: '새벽 5시',
    content: `지구의 마지막 일출.

팀7, 우주복을 입고 발사대로 향하는 복도.
전 세계 생중계. 시청자 23억 명.

[각자의 표정]
하준: 담담하게, 하지만 주머니 속 USB를 만짐
하늘: 카메라를 향해 미소, 하지만 눈가가 촉촉함
린: 고개 숙이고 걸음, 누군가를 피하듯
진우: 군인처럼 정면 응시
서연: 창밖 하늘을 올려다봄
현수: 하나(로봇)와 나란히
태호: 천천히, 하지만 흔들림 없이

관제센터에서 지켜보는 서민혁(아버지).
그의 손에 들린 사진 - 어린 하준.

서민혁: (독백)
"잘 가라, 아들아.
아빠가 만든 길을 걸어가렴.
그리고... 용서해다오."`,
    emotion: '비장함, 긴장',
  },
  {
    id: 2,
    title: '뜻밖의 승객',
    location: '우주선 탑승구',
    time: 'T-45분',
    content: `탑승 직전, 관제센터에서 긴급 연락.

"팀7, 잠시 대기하세요.
추가 탑승자가 있습니다."

팀원들 당혹.

진우: "추가 탑승자? 지금요?"

발사대 엘리베이터가 열림.
나타난 인물 - 젊은 여성, 의료 장비 가방.

"안녕하세요. 저는 한소희.
화성 의료팀 긴급 배치입니다."

서연의 얼굴이 굳어짐.
알아보는 표정.

서연: (속삭임) "...선배?"

한소희가 서연을 보며 미소.
"오랜만이야, 서연아."

[플래시백 - 서연의 의대 시절]
한소희 - 서연의 선배.
서연에게 의학을 가르쳐준 사람.
서연이 백혈병 진단받던 날 옆에 있던 사람.

현재로 돌아와.

태호: (조용히) "아는 사이인가 봐."

서연: "...네. 제 선배예요."

하준이 린에게 눈짓.
린이 고개를 끄덕임 - 조사해볼게.

한소희: "잘 부탁드려요.
6개월 동안 여러분 건강 책임질게요."

팀7 → 팀8이 됨.`,
    emotion: '의외, 긴장',
    mysteryPoint: '한소희는 누구의 의도로 합류했나?',
  },
  {
    id: 3,
    title: '이륙',
    location: '우주선 내부',
    time: 'T-10분 ~ T+0',
    content: `좌석에 고정된 8명.
심장 박동 소리가 들릴 것 같은 정적.

관제: "T-10분. 최종 점검 시작."

[기술 시퀀스]
- 연료 가압 시스템 확인
- 관성 항법 장치 동기화
- 생명 유지 시스템 ON
- 통신 시스템 체크

현수: "하나, 상태 보고."

하나: "모든 시스템 정상.
승무원 심박수 평균 112.
정상 범위 내 긴장 상태입니다."

T-5분.

하늘이 옆자리 하준의 손을 잡음.
하준이 잠시 놀라지만, 잡아줌.

T-1분.

태호: "애들아, 한 가지만 기억해.
우리가 처음이야.
처음은 원래 무섭고, 원래 실수해.
그래도 괜찮아.
우리가 길을 만드는 거니까."

T-30초.

진우: "심호흡. 다들 버텨."

T-10초.

관제: "10... 9... 8..."

서연이 눈을 감음.
어머니의 얼굴을 떠올림.

"3... 2... 1..."

"이륙."

[발사 시퀀스]
- 엔진 점화
- 3G의 압력이 몸을 누름
- 진동, 굉음
- 창밖으로 지구가 작아져감

하준: (이를 악물며) "...가는 거다."

2분 후, 1단 로켓 분리.
압력이 줄어듦.

4분 후, 2단 로켓 분리.
무중력 시작.

관제: "화성행 우주선 '아레스 1호',
지구 궤도 진입 성공.
축하합니다, 팀7... 아니, 팀8."

환호성.
하늘이 눈물을 흘리며 웃음.
하준이 창밖을 바라봄.

푸른 지구가 점점 작아짐.
이제 돌아갈 수 없다.`,
    emotion: '긴장, 감동, 해방감',
    techPoint: '다단 로켓 분리, 무중력 전환 (실제 발사 시퀀스 기반)',
  },
  {
    id: 4,
    title: '첫 식사',
    location: '우주선 거주 모듈',
    time: '발사 후 6시간',
    content: `무중력에 적응 중인 8명.

[무중력 적응기]
- 린: 의외로 잘 적응, 게임처럼 즐김
- 진우: 군 훈련 덕에 안정적
- 하늘: 처음엔 어지러워하다 금방 적응
- 서연: 약간 멀미, 한소희가 케어
- 현수: 하나에게 의지하며 이동
- 태호: 가장 힘들어함, 나이의 한계
- 하준: 물리학자답게 움직임을 계산하며 이동

첫 식사 시간.
둥둥 떠다니는 음식 패키지.

하늘: "이게 6개월 동안 먹을 거예요?"

현수: "화성에 도착하면
직접 재배한 걸 먹을 수 있어.
그때까지만 버텨."

태호가 힘겹게 음식을 입에 넣음.
서연이 걱정스럽게 바라봄.

서연: "선생님, 괜찮으세요?"

태호: "괜찮아. 그냥...
생각보다 힘드네."
(웃으며) "늙은이가 모험하면
이런 대가를 치르는 거야."

한소희가 다가옴.
"제가 도와드릴게요."

태호의 맥박을 체크하며
서연과 눈이 마주침.
묘한 긴장감.`,
    emotion: '적응, 일상의 시작',
    humanityMoment: '무중력에서의 첫 식사, 각자의 적응 방식',
  },
  {
    id: 5,
    title: '린의 조사',
    location: '우주선 통신실',
    time: '발사 후 12시간',
    content: `다들 잠든 밤(우주에 밤은 없지만).

린, 몰래 통신 시스템에 접속.
한소희에 대한 정보 검색.

[검색 결과]
- 한소희, 32세, 외과 전문의
- 서울대 의대 수석 졸업
- NASA 화성 의료 프로그램 참여
- 특이사항: 없음

린: "너무 깨끗해. 오히려 수상해."

더 깊이 파고듦.
암호화된 파일 발견.

파일명: "ARES_MEDICAL_PROTOCOL_8"

린이 해독 시도.
성공.

파일 내용:
"8번째 승무원 한소희.
임무: 의료 지원 + 특별 관찰.
관찰 대상: [검열됨]
보고 주기: 주 1회.
보고 대상: 서민혁."

린의 표정이 굳어짐.

"관찰 대상...? 누구를?"

그때, 뒤에서 목소리.

한소희: "뭐 하는 거야, 린?"

린이 화들짝 놀라 뒤돌아봄.
한소희가 서 있음.

한소희: (미소) "잠이 안 와서 나왔는데.
너도 그런가 봐?"

린: "...네. 그냥요."

한소희가 린의 화면을 힐끗 봄.
이미 린이 창을 닫은 후.

한소희: "우주에서의 첫 밤은
다들 잠이 안 와.
정상이야. 걱정 마."

한소희가 떠남.

린, 식은땀.
"저 여자... 뭔가 있어."`,
    emotion: '의심, 긴장',
    mysteryPoint: '한소희의 진짜 임무는? 관찰 대상은 누구?',
  },
  {
    id: 6,
    title: '서연과 한소희',
    location: '의료실',
    time: '발사 후 24시간',
    content: `서연, 정기 검진을 위해 의료실 방문.

한소희: "앉아, 서연아."

조용한 검진.
한소희가 서연의 혈액 샘플 채취.

한소희: "...상태가 안 좋네."

서연: "알아요."

한소희: "지구에 있었으면
최소 6개월은 더 버틸 수 있었어.
화성까지 가는 건..."

서연: "알면서 왔어요."

침묵.

한소희: "왜? 왜 굳이 화성이야?"

서연: (창밖을 보며)
"지구에서 죽으면 그냥 환자예요.
아픈 사람. 불쌍한 사람.
하지만 여기서는..."

한소희: "뭔데?"

서연: "탐험가요.
인류 최초로 화성에 가는 사람.
제 삶에 의미를 주고 싶었어요.
남은 시간이 얼마 안 되니까."

한소희가 서연을 바라봄.
복잡한 표정.

한소희: "...너 변했다."

서연: "선배도요.
예전엔 환자한테 더 따뜻했는데."

한소희: (쓴웃음) "사람은 변해."

한소희가 서연에게 약을 건넴.
"이거 먹어. 새로 개발된 약이야.
완치는 못 해도, 진행을 늦춰줄 거야."

서연: "...고마워요."

한소희: "고마워하지 마.
내가 여기 온 이유 중 하나가
너니까."

서연이 멈칫.

한소희: (돌아서며)
"화성에 도착할 때까지는
살려줄게. 약속해."

문이 닫힘.
서연, 혼자 남아 약을 바라봄.

"...나 때문에?"`,
    emotion: '긴장, 복잡한 감정',
    mysteryPoint: '한소희가 서연 때문에 왔다?',
  },
  {
    id: 7,
    title: '첫 번째 밤',
    location: '우주선 전망대',
    time: '발사 후 36시간',
    content: `전망대에 모인 8명.
(우주선에서 지구를 볼 수 있는 유일한 공간)

지구가 이제 농구공 크기.
점점 작아지고 있음.

태호: "저게 우리가 살던 곳이야.
70억 명이 저 작은 공 위에."

하늘: "이상해요.
저기 있을 때는 몰랐는데.
멀리서 보니까..."

진우: "소중해 보여?"

하늘: "네. 그리고... 작아 보여요."

하준이 조용히.
"우주에서 보면 다 작아 보여.
국가도, 전쟁도, 경쟁도.
다 저 작은 공 안에서 벌어지는 일이야."

린: "근데 우리는 이제
저 공 밖에 있네요."

현수: "새로운 이야기를 쓰는 거지.
지구가 아닌 곳에서."

하나(로봇): "화성까지 남은 거리:
5,420만 km.
예상 도착일: 186일 후."

모두 침묵.
186일. 긴 여정의 시작.

서연이 창에 손을 댐.
"잘 있어, 지구."

하나씩 자기 방으로 돌아감.

마지막에 남은 하준과 하늘.

하늘: "무슨 생각해요?"

하준: "...아버지 편지."

하늘: "열어봤어요?"

하준: "아니. 아직."
(하늘을 보며) "화성 도착하면 열어볼 거야.
린이 준 USB랑 같이."

하늘: "왜 굳이 화성에서?"

하준: "돌아갈 수 없는 곳에서 봐야
진짜 답을 찾을 수 있을 것 같아서."

하늘이 하준의 손을 잡음.

하늘: "혼자 보지 마요.
저도 같이 볼게요."

하준: "...왜?"

하늘: "몰라요. 그냥.
당신이 혼자인 거 싫어서."

두 사람, 창밖의 지구를 바라봄.
점점 작아지는 푸른 점.

TO BE CONTINUED...

[예고]
EP.07: 우주의 일상
- 6개월의 여정이 본격 시작
- 좁은 공간에서의 갈등
- 하나(로봇)의 이상 징후
- "팀8에 숨겨진 또 하나의 비밀"`,
    emotion: '여운, 새로운 시작',
    romancePoint: '하늘이 하준에게 "당신이 혼자인 거 싫어서"',
  },
]

const episodeInfo = {
  number: 6,
  title: '이륙',
  subtitle: '드디어, 화성을 향해',
  previousEp: { num: 5, title: '카운트다운' },
  nextEp: { num: 7, title: '우주의 일상' },
}

const keyMoments = [
  { type: '이벤트', desc: '8번째 승무원 한소희 합류' },
  { type: '기술', desc: '실제 발사 시퀀스 묘사' },
  { type: '미스터리', desc: '한소희의 관찰 대상은?' },
  { type: '인간미', desc: '무중력 적응기, 첫 식사' },
  { type: '로맨스', desc: '"당신이 혼자인 거 싫어서"' },
]

const techElements = [
  {
    name: '다단 로켓 분리',
    realTech: true,
    desc: '1단, 2단 로켓 순차 분리로 우주 궤도 진입',
    source: 'SpaceX Falcon Heavy / NASA SLS',
  },
  {
    name: '무중력 전환',
    realTech: true,
    desc: '로켓 엔진 정지 후 자유낙하 상태 = 무중력',
    source: 'NASA 우주비행사 훈련 프로그램',
  },
  {
    name: '관성 항법 장치',
    realTech: true,
    desc: '자이로스코프와 가속도계로 우주선 위치 계산',
    source: 'Apollo/Shuttle 항법 시스템',
  },
  {
    name: '우주 식량',
    realTech: true,
    desc: '동결건조 식품, 진공포장 등 장기 보관 가능 형태',
    source: 'NASA Space Food Systems',
  },
]

const newCharacter = {
  name: '한소희',
  age: 32,
  role: '외과 전문의',
  background: '서울대 의대 수석, NASA 화성 의료 프로그램',
  connection: '서연의 의대 선배, 백혈병 진단 당시 함께 있었음',
  mystery: '서민혁에게 보고하는 관찰자? 관찰 대상은 누구?',
  quote: '"화성에 도착할 때까지는 살려줄게. 약속해."',
}

export default function Episode6Page() {
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
          <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded">
            시즌1 피날레
          </span>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-b from-red-500/10 to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-red-400 animate-pulse" />
            <span className="text-red-400 font-mono text-2xl">T-0</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {episodeInfo.title}
          </h1>
          <p className="text-xl text-gray-400">
            10... 9... 8...<br />
            드디어, 지구를 떠난다.
          </p>
        </div>
      </div>

      {/* New Character */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-cyber-purple" />
          새로운 캐릭터
        </h2>
        <div className="p-6 bg-dark-800 rounded-lg border border-cyber-purple/30">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple text-2xl font-bold">
              8
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">
                {newCharacter.name}
                <span className="text-gray-500 font-normal ml-2">({newCharacter.age})</span>
              </h3>
              <p className="text-cyber-purple mb-2">{newCharacter.role}</p>
              <p className="text-sm text-gray-400 mb-2">{newCharacter.background}</p>
              <p className="text-sm text-gray-400 mb-2">
                <span className="text-pink-400">서연과의 관계:</span> {newCharacter.connection}
              </p>
              <p className="text-sm text-yellow-400 mb-3">
                <span className="text-yellow-400">미스터리:</span> {newCharacter.mystery}
              </p>
              <p className="text-sm italic text-gray-500">"{newCharacter.quote}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Moments */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          핵심 순간
        </h2>
        <div className="grid md:grid-cols-5 gap-3">
          {keyMoments.map((moment, i) => (
            <div key={i} className="p-3 bg-dark-800 rounded-lg border border-dark-700 text-center">
              <p className="text-xs text-red-400 mb-1">{moment.type}</p>
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
                <span className="text-2xl font-bold text-red-400">
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
                {scene.mysteryPoint && (
                  <span className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded">
                    미스터리: {scene.mysteryPoint}
                  </span>
                )}
                {scene.humanityMoment && (
                  <span className="text-xs px-2 py-1 bg-green-400/20 text-green-400 rounded">
                    인간미: {scene.humanityMoment}
                  </span>
                )}
                {scene.romancePoint && (
                  <span className="text-xs px-2 py-1 bg-red-400/20 text-red-400 rounded">
                    로맨스: {scene.romancePoint}
                  </span>
                )}
              </div>
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

      {/* Season 1 Finale Note */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="p-6 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-lg border border-cyber-cyan/30">
          <h3 className="text-lg font-bold mb-3 text-center">시즌 1 완결</h3>
          <p className="text-center text-gray-400 mb-4">
            EP.01~06: 선발 과정과 지구 출발
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-cyber-cyan">7→8</p>
              <p className="text-sm text-gray-500">팀 구성</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyber-purple">186일</p>
              <p className="text-sm text-gray-500">남은 여정</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-400">3개</p>
              <p className="text-sm text-gray-500">미해결 미스터리</p>
            </div>
          </div>
        </div>
      </div>

      {/* Unresolved Mysteries */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Radio className="w-5 h-5 text-yellow-400" />
          미해결 미스터리
        </h2>
        <div className="space-y-3">
          <div className="p-4 bg-dark-800 rounded-lg border border-yellow-400/30">
            <p className="font-bold text-yellow-400 mb-1">1. PROJECT_ARES USB</p>
            <p className="text-sm text-gray-400">하준이 가진 USB. 화성 도착 후 열기로 함. 무슨 내용?</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-yellow-400/30">
            <p className="font-bold text-yellow-400 mb-1">2. 한소희의 관찰 대상</p>
            <p className="text-sm text-gray-400">서민혁에게 보고하는 한소희. 누구를 관찰하는가?</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-yellow-400/30">
            <p className="font-bold text-yellow-400 mb-1">3. 서민혁의 진짜 목적</p>
            <p className="text-sm text-gray-400">15년간 죽은 척한 이유. 팀8을 설계한 궁극적 이유는?</p>
          </div>
        </div>
      </div>

      {/* Next Episode Preview */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-400/30">
          <p className="text-sm text-blue-400 mb-2">시즌 2 시작</p>
          <h3 className="text-2xl font-bold mb-3">EP.07: 우주의 일상</h3>
          <ul className="space-y-1 text-gray-400">
            <li>• 6개월의 여정이 본격 시작</li>
            <li>• 좁은 공간에서의 갈등</li>
            <li>• 하나(로봇)의 이상 징후</li>
            <li>• "팀8에 숨겨진 또 하나의 비밀"</li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-8 border-t border-dark-700">
        <div className="flex justify-between items-center">
          <Link
            href="/ideas/mars-ticket/episode-5"
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
            화성행 티켓 EP.06 | ThinkPhysically
          </p>
        </div>
      </footer>
    </div>
  )
}
