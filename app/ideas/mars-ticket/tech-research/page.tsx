'use client'

import Link from 'next/link'
import { ArrowLeft, Droplets, Building, Zap, Bot, Leaf, Radio, ExternalLink, CheckCircle } from 'lucide-react'

const techResearch = [
  {
    id: 'water-extraction',
    icon: Droplets,
    color: 'blue-400',
    episode: 'EP3',
    title: '화성 물 추출',
    businessIdea: 'Water-from-Mars 시스템',

    realTech: {
      name: 'MOXIE & RedWater',
      status: '실험 성공 (2021-2023)',
      description: 'NASA의 화성 2020 로버 퍼서비어런스에 탑재된 MOXIE는 화성 대기의 CO₂에서 산소를 추출하는 데 성공했다.',
    },

    facts: [
      {
        fact: 'MOXIE는 총 122g의 산소 생성',
        detail: '작은 개가 10시간 호흡할 양. 98% 이상 순도.',
        source: 'NASA/JPL',
      },
      {
        fact: '화성 지하 얼음층 발견',
        detail: '중위도 지역에 수백 미터 두께의 얼음층 존재 확인.',
        source: 'NASA Mars Reconnaissance Orbiter',
      },
      {
        fact: 'RedWater 시스템 개발 중',
        detail: 'Honeybee Robotics가 지하 얼음을 녹여 추출하는 기술 개발. TRL-6 달성.',
        source: 'NASA SBIR',
      },
      {
        fact: '화성 기지에 필요한 물: 16톤',
        detail: '480솔(화성일) 동안 로켓 연료 생산용.',
        source: 'NASA Mars Mission Planning',
      },
    ],

    physics: {
      principle: '전기분해 (Electrolysis)',
      equation: '2H₂O → 2H₂ + O₂',
      explanation: '물을 전기로 분해하면 수소와 산소가 생성된다. 화성에서는 이 산소로 호흡하고, 수소는 로켓 연료로 사용.',
    },

    sources: [
      { name: 'NASA MOXIE', url: 'https://www.nasa.gov/mission/mars-2020-perseverance/moxie/' },
      { name: 'RedWater System (New Space Journal)', url: 'https://www.liebertpub.com/doi/10.1089/space.2021.0057' },
      { name: 'Science Advances - MOXIE Results', url: 'https://www.science.org/doi/10.1126/sciadv.abp8636' },
    ],
  },
  {
    id: '3d-printing',
    icon: Building,
    color: 'orange-400',
    episode: 'EP5',
    title: '3D 프린팅 건축',
    businessIdea: '화성 주거 모듈',

    realTech: {
      name: 'ICON Vulcan & Project Olympus',
      status: '지구 테스트 완료 (2023-2024)',
      description: 'ICON은 NASA와 협력하여 Mars Dune Alpha라는 1,700 sq ft 화성 시뮬레이션 거주지를 3D 프린팅으로 건설했다.',
    },

    facts: [
      {
        fact: 'Mars Dune Alpha: 1년간 4명 거주 실험 완료',
        detail: '2023년 6월 - 2024년 7월, NASA 존슨 우주센터에서 진행.',
        source: 'NASA CHAPEA',
      },
      {
        fact: 'LavaCrete: 화성용 콘크리트',
        detail: '화성 현지 재료(레골리스)를 이용한 건축 자재 개발 완료.',
        source: 'ICON',
      },
      {
        fact: 'NASA, ICON에 $5700만 계약',
        detail: '달과 화성 건설 기술 개발을 위한 SBIR Phase III.',
        source: 'NASA',
      },
      {
        fact: '레이저 소결 기술',
        detail: '고출력 레이저로 화성 표면 물질을 녹여 세라믹 구조물 생성.',
        source: 'ICON Project Olympus',
      },
    ],

    physics: {
      principle: '적층 제조 (Additive Manufacturing)',
      equation: null,
      explanation: '재료를 층층이 쌓아 올리는 방식. 화성에서는 현지 레골리스(토양)를 사용하여 지구에서 자재를 운반할 필요가 없다.',
    },

    sources: [
      { name: 'ICON Mars Habitat', url: 'https://www.iconbuild.com/newsroom/icon-3d-prints-the-first-simulated-mars-surface-habitat-for-nasa-designed-by-renowned-architecture-firm-big-bjarke-ingels-group' },
      { name: 'NASA CHAPEA Mission', url: 'https://www.nasa.gov/humans-in-space/chapea/' },
      { name: 'NASA-ICON Lunar Construction', url: 'https://www.nasa.gov/centers-and-facilities/marshall/nasa-icon-advance-lunar-construction-technology-for-moon-missions/' },
    ],
  },
  {
    id: 'body-heat',
    icon: Zap,
    color: 'yellow-400',
    episode: 'EP10',
    title: '체온 발전',
    businessIdea: '웨어러블 에너지',

    realTech: {
      name: '열전 발전기 (Thermoelectric Generator)',
      status: '연구 진행 중 (2023-2024)',
      description: '인체의 체온과 외부 온도 차이를 이용해 전기를 생성하는 웨어러블 기술.',
    },

    facts: [
      {
        fact: '3D 탄성 열전 네트워크 개발',
        detail: '초경량(0.28g/cm³), 초저 열전도율(0.04 W/m·K), 100% 이상 신축성.',
        source: 'Nature Communications, 2023',
      },
      {
        fact: '출력: 18.4 μW/cm²',
        detail: 'Mg 기반 열전 소재로 기존 Bi₂Te₃ 대체 가능.',
        source: 'Nature Communications, 2024',
      },
      {
        fact: '4K 온도차로도 작동',
        detail: '피부와 주변 환경의 최소 온도차로 센서/블루투스 구동 가능.',
        source: 'Nature, 2023',
      },
      {
        fact: '열전 재킷: 밀리와트급 발전',
        detail: '일상 착용으로 대부분의 웨어러블 IC/센서 전력 공급 가능.',
        source: 'Nature Communications',
      },
    ],

    physics: {
      principle: '제벡 효과 (Seebeck Effect)',
      equation: 'V = S × ΔT',
      explanation: '두 금속 접점의 온도 차이가 전압을 생성한다. 체온(~37°C)과 외부 온도(~25°C)의 차이인 약 12°C로 전기 생산.',
    },

    sources: [
      { name: 'Nature Communications - 3D Thermoelectric Network', url: 'https://www.nature.com/articles/s41467-023-38852-4' },
      { name: 'Nature Communications - High Output TEG', url: 'https://www.nature.com/articles/s41467-024-52841-1' },
      { name: 'PMC - Body Heat Harvesting Review', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10070544/' },
    ],
  },
  {
    id: 'robot-walking',
    icon: Bot,
    color: 'cyber-cyan',
    episode: 'EP7',
    title: '휴머노이드 로봇 보행',
    businessIdea: '감정 로봇 / Physical AI',

    realTech: {
      name: '역진자 모델 (Linear Inverted Pendulum Model)',
      status: '상용화 (Boston Dynamics Atlas)',
      description: '인간과 로봇의 이족 보행은 "통제된 추락"이다. 넘어지려는 것을 끊임없이 막으며 전진한다.',
    },

    facts: [
      {
        fact: 'Atlas: 세계에서 가장 역동적인 휴머노이드',
        detail: 'CES 2025에서 360도 회전하는 관절 시연.',
        source: 'Boston Dynamics',
      },
      {
        fact: 'Capture Point 기반 제어',
        detail: '로봇이 균형을 잡기 위해 발을 디뎌야 하는 지점을 실시간 계산.',
        source: 'Frontiers in Robotics and AI',
      },
      {
        fact: '전신 균형 제어',
        detail: '다리뿐 아니라 팔과 상체도 사용하여 균형 유지. 운동선수와 동일한 원리.',
        source: 'Boston Dynamics',
      },
      {
        fact: 'FLIPM: 유연 역진자 모델',
        detail: '스프링과 댐퍼를 추가하여 더 자연스러운 움직임 구현.',
        source: 'IEEE/Frontiers',
      },
    ],

    physics: {
      principle: '역진자 (Inverted Pendulum)',
      equation: 'τ = mgl sin(θ)',
      explanation: '막대기를 손바닥 위에 세우는 것과 같은 원리. 무게중심이 지지점 위에 있으면 불안정하므로 끊임없는 조정이 필요하다.',
    },

    marsApplication: {
      challenge: '화성 중력 0.38g에서의 보행',
      solution: '낮은 중력에서는 같은 속도로 걸어도 "추락"이 느려진다. 보행 알고리즘의 타이밍 파라미터 재조정 필요.',
    },

    sources: [
      { name: 'Boston Dynamics Atlas', url: 'https://bostondynamics.com/atlas/' },
      { name: 'Frontiers - Spherical Inverted Pendulum', url: 'https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2015.00021/full' },
      { name: 'IEEE Spectrum - Boston Dynamics Agility', url: 'https://spectrum.ieee.org/how-boston-dynamics-is-redefining-robot-agility' },
    ],
  },
  {
    id: 'vertical-farming',
    icon: Leaf,
    color: 'green-400',
    episode: 'EP9',
    title: '우주 수직 농장',
    businessIdea: '화성 식량 생산',

    realTech: {
      name: 'Controlled Environment Agriculture (CEA)',
      status: 'ISS 실험 중',
      description: '토양 없이, 물과 에너지를 최소화하며 식물을 재배하는 기술.',
    },

    facts: [
      {
        fact: 'ISS에서 상추, 고추 재배 성공',
        detail: 'Veggie 시스템으로 0.15m² 면적에서 신선 식품 생산.',
        source: 'NASA',
      },
      {
        fact: '화성 미션 식량: 10톤 필요',
        detail: '4명 크루, 500일 체류 기준.',
        source: 'NASA HRP',
      },
      {
        fact: '수직 농장 전력: 7.3kW/인',
        detail: '6명 크루 식량 생산에 약 45kW 필요.',
        source: 'NASA Space Agriculture',
      },
      {
        fact: '물 사용량 99% 감소',
        detail: 'Plenty Unlimited: 2에이커로 720에이커 노지 농장 수확량 달성.',
        source: 'NASA Spinoff',
      },
      {
        fact: '화성 중력(0.38g)의 이점',
        detail: '물이 아래로 흘러 순환식 수경재배 가능. 무중력보다 유리.',
        source: 'NASA',
      },
    ],

    physics: {
      principle: '수경재배 (Hydroponics)',
      equation: null,
      explanation: '뿌리에 직접 영양분이 녹은 물을 공급. 토양이 필요 없고 물을 100% 재활용 가능.',
    },

    sources: [
      { name: 'NASA Space Farming', url: 'https://www.nasa.gov/missions/station/so-you-want-to-be-a-space-farmer/' },
      { name: 'NASA Spinoff - Indoor Farming', url: 'https://spinoff.nasa.gov/Next-Level_Farming' },
      { name: 'CNN - Mars Vertical Farming', url: 'https://www.cnn.com/2023/03/24/world/mars-food-interstellar-lab-climate-scn-spc-intl/index.html' },
    ],
  },
  {
    id: 'deep-space-comms',
    icon: Radio,
    color: 'cyber-purple',
    episode: 'EP12',
    title: '심우주 레이저 통신',
    businessIdea: '화성-지구 고속 통신',

    realTech: {
      name: 'Deep Space Optical Communications (DSOC)',
      status: '기록 달성 (2024)',
      description: 'NASA의 레이저 통신 실험. 라디오파 대비 10-100배 빠른 데이터 전송.',
    },

    facts: [
      {
        fact: '267 Mbps 전송 성공',
        detail: '지구-화성 최근접 거리(3300만 마일)에서 브로드밴드급 속도.',
        source: 'NASA JPL, 2024',
      },
      {
        fact: '3억 700만 km에서 통신 성공',
        detail: '2024년 12월, 지구-화성 평균 거리보다 먼 거리에서 데이터 전송.',
        source: 'NASA JPL',
      },
      {
        fact: '2억 4천만 km에서 6.25 Mbps',
        detail: '같은 거리에서 라디오파보다 훨씬 높은 속도.',
        source: 'NASA',
      },
      {
        fact: '지연(Latency)은 해결 불가',
        detail: '빛의 속도 한계. 화성-지구 통신은 3-22분 지연.',
        source: 'Physics',
      },
    ],

    physics: {
      principle: '광속 제한 (Speed of Light Limit)',
      equation: 'c = 299,792,458 m/s',
      explanation: '빛도 시간이 걸린다. 화성이 가장 가까울 때(5500만 km) 3분, 가장 멀 때(4억 km) 22분 지연. 실시간 통화는 물리적으로 불가능.',
    },

    storyImplication: {
      drama: '실시간 통화 불가능 → 감정적 단절',
      solution: '드라마에서 "시간차 메시지"를 감정적 장치로 활용',
    },

    sources: [
      { name: 'NASA DSOC', url: 'https://www.nasa.gov/mission/deep-space-optical-communications-dsoc/' },
      { name: 'NASA JPL - DSOC Records', url: 'https://www.jpl.nasa.gov/news/nasas-deep-space-communications-demo-exceeds-project-expectations/' },
      { name: 'Science Alert - Final Laser Message', url: 'https://www.sciencealert.com/earth-just-received-final-nasa-laser-message-from-218-million-miles-away' },
    ],
  },
]

export default function TechResearchPage() {
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
        <h1 className="text-4xl font-bold mb-2">기술 리서치</h1>
        <p className="text-gray-500 mb-4">화성행 티켓 - 실제 과학 기반</p>

        <div className="p-4 bg-cyber-cyan/10 rounded-lg border border-cyber-cyan/30 mb-12">
          <p className="text-cyber-cyan font-bold mb-2">원칙: 사실에 기반한 물리학</p>
          <p className="text-gray-400 text-sm">
            드라마 속 모든 기술은 <span className="text-white">실제 연구 중이거나 이미 실험에 성공한 기술</span>이다.
            SF 판타지가 아닌, "곧 현실이 될 기술"을 보여준다.
          </p>
        </div>

        <div className="space-y-16">
          {techResearch.map((tech) => {
            const Icon = tech.icon
            return (
              <article key={tech.id} id={tech.id} className="scroll-mt-20">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-${tech.color}/20 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 text-${tech.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs px-2 py-1 bg-dark-700 rounded text-gray-400">{tech.episode}</span>
                      <h2 className="text-2xl font-bold">{tech.title}</h2>
                    </div>
                    <p className={`text-${tech.color}`}>사업 아이디어: {tech.businessIdea}</p>
                  </div>
                </div>

                {/* Real Tech Status */}
                <div className={`p-4 bg-dark-800 rounded-lg border border-${tech.color}/30 mb-6`}>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className={`w-4 h-4 text-${tech.color}`} />
                    <p className="font-bold text-white">{tech.realTech.name}</p>
                  </div>
                  <p className={`text-sm text-${tech.color} mb-2`}>{tech.realTech.status}</p>
                  <p className="text-gray-400 text-sm">{tech.realTech.description}</p>
                </div>

                {/* Facts */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3">실제 사실</h3>
                  <div className="space-y-3">
                    {tech.facts.map((item, i) => (
                      <div key={i} className="p-3 bg-dark-800 rounded-lg border border-dark-700">
                        <p className="font-bold text-white mb-1">{item.fact}</p>
                        <p className="text-gray-400 text-sm mb-1">{item.detail}</p>
                        <p className="text-gray-600 text-xs">출처: {item.source}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Physics Principle */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3">물리학 원리</h3>
                  <div className="p-4 bg-cyber-cyan/5 rounded-lg border border-cyber-cyan/20">
                    <p className="text-cyber-cyan font-bold mb-2">{tech.physics.principle}</p>
                    {tech.physics.equation && (
                      <p className="font-mono text-white text-lg mb-2">{tech.physics.equation}</p>
                    )}
                    <p className="text-gray-400 text-sm">{tech.physics.explanation}</p>
                  </div>
                </div>

                {/* Mars Application (if exists) */}
                {'marsApplication' in tech && tech.marsApplication && (
                  <div className="mb-6">
                    <h3 className="font-bold mb-3">화성 적용</h3>
                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-orange-400 font-bold mb-1">도전: {tech.marsApplication.challenge}</p>
                      <p className="text-gray-400 text-sm">{tech.marsApplication.solution}</p>
                    </div>
                  </div>
                )}

                {/* Story Implication (if exists) */}
                {'storyImplication' in tech && tech.storyImplication && (
                  <div className="mb-6">
                    <h3 className="font-bold mb-3">드라마 활용</h3>
                    <div className="p-4 bg-cyber-purple/10 rounded-lg border border-cyber-purple/20">
                      <p className="text-cyber-purple font-bold mb-1">{tech.storyImplication.drama}</p>
                      <p className="text-gray-400 text-sm">{tech.storyImplication.solution}</p>
                    </div>
                  </div>
                )}

                {/* Sources */}
                <div>
                  <h3 className="font-bold mb-3">참고 자료</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.sources.map((source) => (
                      <a
                        key={source.name}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-dark-700 rounded text-sm text-gray-400 hover:text-cyber-cyan transition"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {source.name}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Summary Table */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">기술 요약</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="text-left py-3 text-gray-500">에피소드</th>
                  <th className="text-left py-3 text-gray-500">기술</th>
                  <th className="text-left py-3 text-gray-500">현재 상태</th>
                  <th className="text-left py-3 text-gray-500">물리 원리</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-dark-700">
                  <td className="py-3 text-cyber-cyan">EP3</td>
                  <td className="py-3">화성 물 추출</td>
                  <td className="py-3 text-green-400">실험 성공</td>
                  <td className="py-3">전기분해</td>
                </tr>
                <tr className="border-b border-dark-700">
                  <td className="py-3 text-cyber-cyan">EP5</td>
                  <td className="py-3">3D 프린팅 건축</td>
                  <td className="py-3 text-green-400">지구 테스트 완료</td>
                  <td className="py-3">적층 제조</td>
                </tr>
                <tr className="border-b border-dark-700">
                  <td className="py-3 text-cyber-cyan">EP7</td>
                  <td className="py-3">로봇 보행</td>
                  <td className="py-3 text-green-400">상용화</td>
                  <td className="py-3">역진자 모델</td>
                </tr>
                <tr className="border-b border-dark-700">
                  <td className="py-3 text-cyber-cyan">EP9</td>
                  <td className="py-3">수직 농장</td>
                  <td className="py-3 text-yellow-400">ISS 실험 중</td>
                  <td className="py-3">수경재배</td>
                </tr>
                <tr className="border-b border-dark-700">
                  <td className="py-3 text-cyber-cyan">EP10</td>
                  <td className="py-3">체온 발전</td>
                  <td className="py-3 text-yellow-400">연구 중</td>
                  <td className="py-3">제벡 효과</td>
                </tr>
                <tr>
                  <td className="py-3 text-cyber-cyan">EP12</td>
                  <td className="py-3">심우주 통신</td>
                  <td className="py-3 text-green-400">기록 달성</td>
                  <td className="py-3">광속 제한</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Principle */}
        <div className="mt-12 p-6 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 border border-cyber-cyan/30 rounded-lg text-center">
          <p className="text-xl font-bold mb-2">
            "드라마 속 기술 = 곧 현실이 될 기술"
          </p>
          <p className="text-gray-400">
            모든 것은 물리 법칙에 기반한다.<br />
            상상이 아닌, 사실에서 시작한다.
          </p>
        </div>
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
