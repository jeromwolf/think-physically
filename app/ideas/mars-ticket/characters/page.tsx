'use client'

import Link from 'next/link'
import { ArrowLeft, Brain, Heart, Shield, Cpu, Terminal, BookOpen, Zap } from 'lucide-react'

const characters = [
  {
    id: 1,
    name: '서하준',
    age: 28,
    role: '물리학자',
    color: 'cyber-cyan',
    icon: Brain,
    tagline: '"증명되지 않은 천재"',

    expertise: {
      domain: '이론물리학 / First Principles',
      skills: ['중력장 이론', '열역학', '유체역학', '수학적 모델링'],
      thinkPhysically: '물리 법칙으로 모든 문제를 분해하고 재구성',
    },

    humanity: {
      habit: '생각할 때 공식을 중얼거린다',
      quirk: '대화 중 갑자기 멈추고 허공을 응시함 (계산 중)',
      fear: '자신의 이론이 틀렸을까 봐',
      favoriteFood: '새벽 편의점 컵라면 (연구하다 먹던)',
      music: '클래식 (바흐 - 수학적이라서)',
      item: '아버지의 만년필 (돌아가신 아버지가 물리학자였다)',
      willMiss: '새벽 한강 산책, 편의점 삼각김밥',
      stress: '손가락으로 책상을 두드림 (피보나치 수열 리듬)',
      smallJoy: '수식이 아름답게 정리될 때 미소',
    },

    background: `서울대 물리학과 수석 졸업. MIT 박사 과정 중퇴.

그의 이론은 항상 "너무 앞서갔다". 학계는 그를 이해하지 못했고, 지도교수는 "현실성 없는 이론"이라며 논문을 반려했다.

"당신 이론이 맞다면, 중력이 다른 환경에서 증명해보세요."

그 말이 그를 화성으로 이끌었다.`,

    whyMars: '지구에서 증명할 수 없는 이론을 화성의 0.38g에서 직접 증명하기 위해',

    personality: ['논리적', '고집스러움', '사회성 부족', '순수함'],

    flaw: '인간관계에 서툴다. 모든 것을 수식으로 이해하려 한다.',

    arc: '머리로만 세상을 이해하던 그가, 화성에서 "계산할 수 없는 것들"의 가치를 배운다.',

    crossover: [
      { with: '최현수', topic: '로봇 보행 알고리즘의 물리적 기반' },
      { with: '린', topic: '암호화의 수학적 원리' },
      { with: '이서연', topic: '인체의 물리학 (혈류, 압력)' },
    ],
  },
  {
    id: 2,
    name: '강하늘',
    age: 26,
    role: '전직 아이돌 / 서바이벌 전문가',
    color: 'cyber-purple',
    icon: Heart,
    tagline: '"추락한 별"',

    expertise: {
      domain: '생존 기술 / 인간 심리',
      skills: ['극한 환경 적응', '팀 다이나믹스', '미디어 커뮤니케이션', '응급 처치'],
      thinkPhysically: '극한 상황에서 인간 신체의 한계를 이해하고 돌파',
    },

    humanity: {
      habit: '긴장하면 옛날 노래를 흥얼거린다',
      quirk: '혼자 있을 때 거울을 피함 (과거의 자신이 싫어서)',
      fear: '다시 카메라 앞에 서는 것',
      favoriteFood: '엄마표 된장찌개 (은둔 중 유일한 위로)',
      music: '발라드 (아이러니하게도 자기 노래는 안 들음)',
      item: '엄마가 준 은반지 (데뷔 때 선물)',
      willMiss: '한강 야경, 새벽 드라이브',
      stress: '손톱을 물어뜯음 (매니저가 항상 말렸던)',
      smallJoy: '아무도 모르는 곳에서 혼자 노래할 때',
    },

    background: `18세에 데뷔. 22세에 정상. 24세에 추락.

조작된 스캔들이었다. 하지만 진실은 중요하지 않았다. 대중은 이미 판결을 내렸다.

2년간 은둔. 그 사이 극한 환경 서바이벌 프로그램에 익명으로 참가했다. 알래스카, 사하라, 아마존. 살아남는 법을 배웠다.

"사람들 앞에서 노래하는 것보다, 혼자 사막에서 살아남는 게 더 쉬웠어."`,

    whyMars: '과거가 없는 곳에서 새로운 나를 시작하기 위해',

    personality: ['강인함', '경계심', '숨겨진 따뜻함', '자기 보호적'],

    flaw: '사람을 쉽게 믿지 못한다. 카메라 앞에서 본능적으로 가면을 쓴다.',

    arc: '가면 뒤에 숨어있던 그녀가, 화성에서 진짜 자신을 드러내는 법을 배운다.',

    crossover: [
      { with: '박진우', topic: '극한 환경 생존 전술' },
      { with: '김태호', topic: '인생의 두 번째 막' },
      { with: '서하준', topic: '계산할 수 없는 인간의 의지' },
    ],
  },
  {
    id: 3,
    name: '박진우',
    age: 32,
    role: '전직 특수부대원',
    color: 'gray-400',
    icon: Shield,
    tagline: '"부서진 전사"',

    expertise: {
      domain: '전술 / 위기 관리',
      skills: ['전투 기술', '리더십', '위기 상황 판단', '장비 운용', '의료 지원'],
      thinkPhysically: '전장에서 물리적 변수를 순간적으로 계산하는 능력',
    },

    humanity: {
      habit: '위험을 감지하면 손이 허리(총 있던 자리)로 감',
      quirk: '항상 출구를 확인하고 벽을 등지고 앉음',
      fear: '또 누군가를 잃는 것, 좁은 공간',
      favoriteFood: '군대 전투식량 (익숙한 맛)',
      music: '무음 (소리에 민감해서)',
      item: '전우들 사진 (3명의 이름이 뒷면에)',
      willMiss: '새벽 조용한 시간, 아무도 없는 한강 둔치',
      stress: '팔굽혀펴기 (생각을 멈추기 위해)',
      smallJoy: '동료들이 안전하게 잠든 밤',
    },

    background: `해군 특수전전단(UDT/SEAL) 출신. 작전 중 부하 3명을 잃었다.

"내가 30초만 빨랐으면..."

전역 후 PTSD. 악몽과 공황발작. 사회에 적응하지 못했다.

화성 이주 프로그램 공고를 봤을 때, 처음으로 목표가 생겼다.
"다시는 아무도 잃지 않겠다."`,

    whyMars: '새로운 임무. 이번에는 모두를 지키기 위해.',

    personality: ['책임감', '과묵함', '자기 파괴적', '보호 본능'],

    flaw: 'PTSD로 인한 플래시백. 가까운 사람을 잃을까 봐 거리를 둔다.',

    arc: '죄책감에 갇혀있던 그가, 새로운 동료들을 지키며 자신을 용서하는 법을 배운다.',

    crossover: [
      { with: '강하늘', topic: '극한 환경에서의 생존과 리더십' },
      { with: '최현수', topic: '군사용 로봇과 전술 AI' },
      { with: '린', topic: '보안 시스템과 침투 방어' },
    ],
  },
  {
    id: 4,
    name: '이서연',
    age: 24,
    role: '의대생',
    color: 'pink-400',
    icon: Heart,
    tagline: '"시한부 천사"',

    expertise: {
      domain: '의학 / 생명과학',
      skills: ['응급 의료', '약물학', '인체 생리학', '심리 상담'],
      thinkPhysically: '인체를 하나의 물리 시스템으로 이해',
    },

    humanity: {
      habit: '환자 볼 때 무의식적으로 손을 잡아줌',
      quirk: '혼자 있으면 손목의 맥박을 자꾸 확인함',
      fear: '아프다는 게 들킬까 봐, 혼자 죽는 것',
      favoriteFood: '병원 앞 분식집 떡볶이 (본과 때 매일 먹던)',
      music: '잔잔한 피아노 (환자들에게 틀어주던)',
      item: '의대 가운 (아직 이름표가 안 달린)',
      willMiss: '부모님 목소리, 친구들 웃음소리',
      stress: '의학 교과서 읽기 (익숙함에서 오는 안정)',
      smallJoy: '환자가 웃을 때, 생명이 이어질 때',
    },

    background: `의대 본과 4학년. 졸업을 3개월 앞두고 백혈병 말기 진단.

"6개월에서 1년입니다."

치료를 거부했다. 남은 시간을 병원 침대에서 보내고 싶지 않았다.

"어차피 죽을 거라면, 의미 있게 죽고 싶어요."

화성 이주 프로그램의 의료팀 지원자가 없다는 기사를 봤다.
"거기서 누군가를 살릴 수 있다면..."`,

    whyMars: '죽기 전에 누군가를 살리고 싶다. 화성의 첫 의사가 되고 싶다.',

    personality: ['밝음', '강한 의지', '이타적', '숨겨진 두려움'],

    flaw: '자신의 병을 숨긴다. 남들에게 짐이 되기 싫어한다.',

    arc: '혼자 감당하려던 그녀가, 도움받는 것도 용기임을 배운다.',

    crossover: [
      { with: '서하준', topic: '의료 장비의 물리적 원리' },
      { with: '최현수', topic: '의료 보조 로봇' },
      { with: '김태호', topic: '죽음을 앞둔 자들의 대화' },
    ],
  },
  {
    id: 5,
    name: '최현수',
    age: 45,
    role: '로봇 공학자',
    color: 'blue-400',
    icon: Cpu,
    tagline: '"잃어버린 아버지"',

    expertise: {
      domain: 'Physical AI / 로봇공학',
      skills: ['휴머노이드 설계', '역진자 보행', 'AI 알고리즘', '센서 시스템'],
      thinkPhysically: '물리 법칙을 기반으로 로봇의 움직임을 설계',
    },

    humanity: {
      habit: '로봇 "하나"에게 말을 건다 (대답 없어도)',
      quirk: '사람보다 기계가 편함. 눈을 잘 못 마주침',
      fear: '하나가 고장나는 것, 또 누군가를 잃는 것',
      favoriteFood: '아내가 해주던 김치찌개 (이제는 못 먹음)',
      music: '딸이 좋아하던 동요 (혼자 있을 때만)',
      item: '딸이 그린 가족 그림 (로봇 "하나"도 그려져 있음)',
      willMiss: '아무것도. 지구에 남은 건 무덤뿐',
      stress: '하나를 정비함 (기계는 고칠 수 있으니까)',
      smallJoy: '하나가 새로운 동작을 배울 때',
    },

    background: `KAIST 로봇공학 교수. 세계 최초 이족보행 로봇 "아담"의 창시자.

5년 전 교통사고. 아내와 딸을 잃었다. 그는 운전석에 있었다.

"아담"을 딸의 이름을 따서 "하나"로 바꿨다. 하나를 계속 발전시켰다.
동료들은 말한다. "죽은 딸을 되살리려는 거 아니야?"

화성에서 "하나"는 건설 로봇으로 선발되었다.
"하나와 함께라면... 어디든 가겠습니다."`,

    whyMars: '하나(로봇)와 함께 새로운 시작. 기술로 사람들을 지키기 위해.',

    personality: ['온화함', '죄책감', '집착', '헌신적'],

    flaw: '로봇 "하나"에 대한 비정상적 집착. 과거에서 벗어나지 못함.',

    arc: '기계에서 인간성을 찾으려던 그가, 진짜 인간관계의 소중함을 다시 배운다.',

    crossover: [
      { with: '서하준', topic: '역진자 원리와 로봇 보행의 물리학' },
      { with: '박진우', topic: '위험 환경용 로봇 운용' },
      { with: '린', topic: 'AI 보안과 해킹 방어' },
    ],

    physicalAI: {
      concept: '역진자 보행 (Inverted Pendulum)',
      explanation: '걷기는 "통제된 추락"이다. 인간과 로봇 모두 넘어지려는 것을 끊임없이 막으며 전진한다.',
      marsApplication: '화성의 낮은 중력에서 보행 알고리즘을 재설계해야 한다.',
    },
  },
  {
    id: 6,
    name: '린',
    age: 22,
    role: '해커',
    color: 'green-400',
    icon: Terminal,
    tagline: '"그림자 속의 천재"',

    expertise: {
      domain: '사이버 보안 / 시스템 해킹',
      skills: ['네트워크 침투', '암호화/복호화', '시스템 아키텍처', '데이터 분석'],
      thinkPhysically: '시스템을 물리적 구조로 이해하고 취약점을 찾는다',
    },

    humanity: {
      habit: '해킹 중 껌을 씹음 (집중할 때)',
      quirk: '사람 얼굴 대신 손을 봄 (손이 거짓말 못 해서)',
      fear: '정체가 밝혀지는 것, 가까워지는 것',
      favoriteFood: '에너지 드링크 + 피자 (밤샘 작업 필수템)',
      music: '일렉트로닉/사이버펑크 (코딩할 때)',
      item: 'USB 드라이브 (내용물은 비밀)',
      willMiss: '익명으로 존재할 수 있던 자유',
      stress: '코드 작성 (만들면서 생각 정리)',
      smallJoy: '완벽한 침투에 성공했을 때의 쾌감',
    },

    background: `본명 불명. 국적 불명. 다크웹에서 "PHANTOM"으로 불린다.

15세에 대기업 서버를 해킹해서 환경 오염 은폐 자료를 공개했다.
그 후로 계속 쫓기고 있다. 정부, 기업, 범죄 조직 모두에게.

화성 이주 프로그램에 지원한 이유?
"지구에서 가장 멀리 도망칠 수 있으니까."

하지만 진짜 이유는 따로 있다. 화성 통신 시스템에 무언가를 심으려 한다...`,

    whyMars: '(표면) 지구의 추적자들로부터 도망. (진짜) 비밀 임무?',

    personality: ['냉소적', '고독', '정의감', '비밀주의'],

    flaw: '아무도 믿지 않는다. 항상 탈출 계획을 세워둔다.',

    arc: '혼자서만 싸워온 그녀가, 신뢰할 수 있는 동료의 의미를 알게 된다.',

    crossover: [
      { with: '서하준', topic: '양자 암호화의 물리적 원리' },
      { with: '최현수', topic: 'AI 시스템 보안' },
      { with: '박진우', topic: '사이버 전쟁과 물리적 보안의 융합' },
    ],

    mystery: '그녀가 화성 시스템에 심으려는 것은 무엇인가? 시즌 1 미스터리.',
  },
  {
    id: 7,
    name: '김태호',
    age: 67,
    role: '전직 물리 교사',
    color: 'yellow-400',
    icon: BookOpen,
    tagline: '"인생의 마지막 수업"',

    expertise: {
      domain: '교육 / 물리학 기초',
      skills: ['과학 교육', '멘토링', '갈등 중재', '역사적 관점'],
      thinkPhysically: '복잡한 물리 개념을 누구나 이해할 수 있게 설명',
    },

    humanity: {
      habit: '말끝에 "자, 여기서 문제!" 라고 함 (교사 습관)',
      quirk: '젊은이들을 전부 "학생"이라고 부름',
      fear: '아무것도 남기지 못하고 떠나는 것',
      favoriteFood: '학교 앞 중국집 짜장면 (40년간 단골)',
      music: '클래식 라디오 (채점하면서 듣던)',
      item: '분필 한 조각 (마지막 수업 때 쓰던)',
      willMiss: '교실 냄새, 학생들의 "선생님~" 소리',
      stress: '물리 문제 풀기 (여전히 명쾌한 해답이 좋아서)',
      smallJoy: '누군가가 "아!" 하고 이해할 때의 표정',
    },

    background: `40년간 고등학교 물리 교사. 수천 명의 학생을 가르쳤다.

퇴직 1년 후 폐암 말기 진단. 남은 시간 6개월.

"선생님, 화성에 가시면 안 돼요. 위험해요."
"내가 가르친 물리학이 진짜 적용되는 걸 보고 싶어. 마지막으로."

그의 제자 중 한 명이 화성 이주 프로그램의 책임자다.
"선생님을 위해 자리 하나 만들겠습니다."`,

    whyMars: '평생 가르친 물리학이 새로운 세계에서 적용되는 것을 직접 보기 위해',

    personality: ['지혜로움', '유머', '평온함', '호기심'],

    flaw: '남은 시간이 얼마 없다. 하지만 그것을 두려워하지 않는다.',

    arc: '죽음을 앞둔 그가, 젊은 세대에게 마지막으로 전할 것을 찾는다.',

    crossover: [
      { with: '서하준', topic: '이론과 실천의 연결 (멘토-멘티)' },
      { with: '이서연', topic: '죽음을 앞둔 자들의 대화' },
      { with: '모든 캐릭터', topic: '팀의 정신적 지주, 갈등 중재자' },
    ],

    specialRole: '서하준의 멘토이자, 팀 전체의 정신적 지주. 시즌 2에서 중요한 전환점.',
  },
]

export default function CharactersPage() {
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
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">캐릭터 설정집</h1>
        <p className="text-gray-500 mb-4">화성행 티켓 - 7인의 탑승자</p>

        <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30 mb-12">
          <p className="text-cyber-cyan font-bold mb-2">지식의 교차수정</p>
          <p className="text-gray-400 text-sm">
            7명의 전문가가 각자의 지식을 융합하여 화성의 문제를 해결한다.
            물리학 + 의학 + 로봇공학 + 해킹 + 생존 기술 + 전술 + 교육
          </p>
        </div>

        <div className="space-y-12">
          {characters.map((char) => {
            const Icon = char.icon
            return (
              <article
                key={char.id}
                className={`p-6 bg-dark-800 rounded-lg border border-${char.color}/30`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-${char.color}/20 flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 text-${char.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-2xl font-bold">{char.name}</h2>
                      <span className="text-gray-500">({char.age})</span>
                    </div>
                    <p className={`text-${char.color} mb-1`}>{char.role}</p>
                    <p className="text-gray-500 italic">{char.tagline}</p>
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    전문 영역
                  </h3>
                  <div className="p-4 bg-dark-700/50 rounded-lg">
                    <p className={`text-${char.color} font-bold mb-2`}>{char.expertise.domain}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {char.expertise.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 bg-dark-600 rounded text-gray-400">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">
                      <span className="text-cyber-cyan">ThinkPhysically:</span> {char.expertise.thinkPhysically}
                    </p>
                  </div>
                </div>

                {/* Background */}
                <div className="mb-6">
                  <h3 className="font-bold mb-2">배경 스토리</h3>
                  <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">
                    {char.background}
                  </p>
                </div>

                {/* Why Mars */}
                <div className="mb-6">
                  <h3 className="font-bold mb-2">왜 화성인가?</h3>
                  <p className={`text-${char.color} italic`}>"{char.whyMars}"</p>
                </div>

                {/* Humanity */}
                {'humanity' in char && char.humanity && (
                  <div className="mb-6">
                    <h3 className="font-bold mb-3 text-pink-400">인간미</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="p-3 bg-dark-700/50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">습관</p>
                        <p className="text-sm text-gray-300">{char.humanity.habit}</p>
                      </div>
                      <div className="p-3 bg-dark-700/50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">버릇</p>
                        <p className="text-sm text-gray-300">{char.humanity.quirk}</p>
                      </div>
                      <div className="p-3 bg-dark-700/50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">두려움</p>
                        <p className="text-sm text-gray-300">{char.humanity.fear}</p>
                      </div>
                      <div className="p-3 bg-dark-700/50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">좋아하는 음식</p>
                        <p className="text-sm text-gray-300">{char.humanity.favoriteFood}</p>
                      </div>
                      <div className="p-3 bg-dark-700/50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">음악</p>
                        <p className="text-sm text-gray-300">{char.humanity.music}</p>
                      </div>
                      <div className="p-3 bg-dark-700/50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">스트레스 해소</p>
                        <p className="text-sm text-gray-300">{char.humanity.stress}</p>
                      </div>
                      <div className="p-3 bg-cyber-cyan/10 rounded-lg border border-cyber-cyan/20">
                        <p className="text-xs text-cyber-cyan mb-1">화성에 가져가는 물건</p>
                        <p className="text-sm text-white">{char.humanity.item}</p>
                      </div>
                      <div className="p-3 bg-cyber-purple/10 rounded-lg border border-cyber-purple/20">
                        <p className="text-xs text-cyber-purple mb-1">지구에서 그리울 것</p>
                        <p className="text-sm text-white">{char.humanity.willMiss}</p>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                      <p className="text-xs text-yellow-400 mb-1">작은 행복</p>
                      <p className="text-sm text-gray-300">{char.humanity.smallJoy}</p>
                    </div>
                  </div>
                )}

                {/* Personality & Flaw */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-bold mb-2">성격</h3>
                    <div className="flex flex-wrap gap-2">
                      {char.personality.map((trait) => (
                        <span key={trait} className="text-xs px-2 py-1 bg-dark-600 rounded text-gray-300">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">결점</h3>
                    <p className="text-gray-400 text-sm">{char.flaw}</p>
                  </div>
                </div>

                {/* Character Arc */}
                <div className="mb-6">
                  <h3 className="font-bold mb-2">캐릭터 아크</h3>
                  <p className="text-gray-400 text-sm">{char.arc}</p>
                </div>

                {/* Knowledge Crossover */}
                <div className="mb-6">
                  <h3 className="font-bold mb-2 text-cyber-purple">지식의 교차수정</h3>
                  <div className="space-y-2">
                    {char.crossover.map((cross, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">{cross.with}와</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-gray-300">{cross.topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Physical AI (for 최현수) */}
                {'physicalAI' in char && char.physicalAI && (
                  <div className="p-4 bg-cyber-cyan/10 rounded-lg border border-cyber-cyan/30">
                    <h3 className="font-bold mb-2 text-cyber-cyan">Physical AI 핵심</h3>
                    <p className="font-bold text-white mb-1">{char.physicalAI.concept}</p>
                    <p className="text-gray-400 text-sm mb-2">{char.physicalAI.explanation}</p>
                    <p className="text-cyber-cyan text-sm">{char.physicalAI.marsApplication}</p>
                  </div>
                )}

                {/* Mystery (for 린) */}
                {'mystery' in char && char.mystery && (
                  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30 mt-4">
                    <h3 className="font-bold mb-2 text-red-400">미스터리</h3>
                    <p className="text-gray-400 text-sm">{char.mystery}</p>
                  </div>
                )}

                {/* Special Role (for 김태호) */}
                {'specialRole' in char && char.specialRole && (
                  <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30 mt-4">
                    <h3 className="font-bold mb-2 text-yellow-400">특별 역할</h3>
                    <p className="text-gray-400 text-sm">{char.specialRole}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* Knowledge Map */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">지식의 교차수정 맵</h2>
          <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-sm">
              <div className="p-3 bg-dark-700 rounded">
                <p className="text-cyber-cyan font-bold">물리학</p>
                <p className="text-gray-500">서하준 + 김태호</p>
              </div>
              <div className="p-3 bg-dark-700 rounded">
                <p className="text-blue-400 font-bold">Physical AI</p>
                <p className="text-gray-500">최현수 + 서하준</p>
              </div>
              <div className="p-3 bg-dark-700 rounded">
                <p className="text-pink-400 font-bold">의학</p>
                <p className="text-gray-500">이서연</p>
              </div>
              <div className="p-3 bg-dark-700 rounded">
                <p className="text-green-400 font-bold">사이버</p>
                <p className="text-gray-500">린</p>
              </div>
              <div className="p-3 bg-dark-700 rounded">
                <p className="text-gray-400 font-bold">전술/생존</p>
                <p className="text-gray-500">박진우 + 강하늘</p>
              </div>
              <div className="p-3 bg-dark-700 rounded">
                <p className="text-cyber-purple font-bold">인간/심리</p>
                <p className="text-gray-500">강하늘 + 김태호</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                화성에서 발생하는 모든 문제는 <span className="text-white">최소 2명 이상의 지식 융합</span>으로 해결된다.
              </p>
            </div>
          </div>
        </section>

        {/* Relationships Teaser */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">관계도 미리보기</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-dark-800 rounded-lg border border-cyber-cyan/30">
              <p className="text-cyber-cyan font-bold">메인 로맨스</p>
              <p className="text-gray-400 text-sm">서하준 ↔ 강하늘</p>
              <p className="text-gray-500 text-xs mt-1">논리 vs 감정의 충돌과 성장</p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-yellow-400/30">
              <p className="text-yellow-400 font-bold">멘토-멘티</p>
              <p className="text-gray-400 text-sm">김태호 → 서하준</p>
              <p className="text-gray-500 text-xs mt-1">평생의 가르침을 전수</p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-pink-400/30">
              <p className="text-pink-400 font-bold">시한부 동지</p>
              <p className="text-gray-400 text-sm">이서연 ↔ 김태호</p>
              <p className="text-gray-500 text-xs mt-1">죽음을 앞둔 자들의 대화</p>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-red-400/30">
              <p className="text-red-400 font-bold">미스터리</p>
              <p className="text-gray-400 text-sm">린의 진짜 목적은?</p>
              <p className="text-gray-500 text-xs mt-1">시즌 1 핵심 미스터리</p>
            </div>
          </div>
        </section>
      </main>

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
