# ThinkPhysically 프로젝트 현황

## 프로젝트 비전

**"세상의 문제를 물리학적으로 해결한다"**

- 일론 머스크처럼 생각하기
- 문제 해결의 희열
- 사업화할 수 있는 건 사업화
- K-콘텐츠 + 기술 + 창업의 융합

## 핵심 컨셉

### 생태계 구조
```
"화성행 티켓" (웹툰/드라마)
        │
        │ 기술/아이디어 궁금
        ↓
ThinkPhysically (설명 + 심화)
        │
        │ "나도 만들고 싶다"
        ↓
커뮤니티 (팀 빌딩)
        │
        │ 실제 실행
        ↓
스타트업 탄생
        │
        ↓
드라마가 현실이 됨
```

### 차별점
- K-콘텐츠 + 실제 기술 + 창업 영감
- 드라마가 사업 아이디어의 쇼케이스
- 세계 최초의 융합 플랫폼

## 메인 사업 아이템: 화성행 티켓

### 로그라인
> 2040년. 인류 최초 화성 이주가 시작된다.
> 선발된 100인. 각자의 이유로 지구를 떠난다.
> 편도 티켓. 돌아올 수 없는 여정.
> "당신은 왜 화성에 가려 하나요?"

### 장르
- 로맨스 + SF + 휴먼 드라마
- K-감성 + 실제 과학 기술

### 메인 캐릭터 (7인)
1. **서하준 (28)** - 물리학자, 천재지만 인정 못 받음
2. **강하늘 (26)** - 전직 아이돌, 스캔들로 추락
3. **박시우 (32)** - 전직 특수부대원, PTSD
4. **이지안 (24)** - 의대생, 말기 백혈병
5. **최현수 (45)** - 로봇 공학자, 가족 잃음
6. **린 (22)** - 해커, 쫓기는 중
7. **김태호 (67)** - 전직 교사, 말기 암

### 시즌 구성
- 시즌 1: 선발 (지구) - EP1~6
- 시즌 2: 여정 (우주) - EP7~
- 시즌 3: 정착 (화성)

### 드라마 속 기술 → 사업 아이디어 + 논문/발견
| 에피소드 | 기술 | 사업 아이디어 | 논문/연구 주제 |
|---------|------|--------------|---------------|
| EP3 | 화성 물 추출 | Water-from-Mars 시스템 | 사막 토양 수분 추출 효율 최적화 |
| EP3 | 산소 분압/가압 | 휴대용 가압 의료기기 | 저산소 환경 가압 치료 신모델 |
| EP5 | 3D 프린팅 건축 | 화성 주거 모듈 | 레골리스 기반 건축 소재 역학 |
| EP7 | 동반자 AI | 감정 로봇 | 극한 환경 인간-AI 상호작용 |
| EP9 | 식량 재배 | 수직 농장 | 저중력 식물 성장 메커니즘 |
| EP10 | 체온 발전 | 웨어러블 에너지 | 열전 변환 효율 한계 돌파 |
| EP12 | 우주 통신 | 지연 없는 화성-지구 통신 | 양자 얽힘 기반 초광속 통신 |

### 패션 커머스 (회상신 연계)
- 캐릭터별 회상신에 스타일리시한 의상 배치
- 드라마 속 의상 → 쇼핑몰 바로 구매 연동
- 강하늘(아이돌 시절) 패션이 킬러 콘텐츠
- K-드라마 패션 영향력 활용 (협찬/커머스)

## 현재 사이트 구조

```
think-physically/
├── app/
│   ├── page.tsx                    # 홈
│   ├── problems/                   # 문제 목록
│   │   └── remove-the-part/        # 첫 번째 문제
│   ├── blog/                       # 블로그
│   ├── stories/                    # 스토리
│   └── ideas/
│       └── mars-ticket/            # 화성행 티켓 메인
│           ├── characters/         # 캐릭터 프로필 (7인 상세)
│           ├── episode-1/          # EP1: 편도 티켓
│           ├── episode-2/          # EP2: 서바이벌
│           ├── episode-3/          # EP3: 48시간
│           ├── episode-4/          # EP4: 아버지
│           ├── episode-5/          # EP5: 카운트다운
│           ├── episode-6/          # EP6: 이륙 (시즌1 피날레)
│           ├── episode-7/          # EP7: 우주의 일상 (시즌2 시작)
│           ├── webtoon-ep1/        # 웹툰 1화 콘티 (50컷)
│           └── tech-research/      # 기술 리서치 (NASA, SpaceX 기반)
├── assets/
│   ├── characters/                 # 캐릭터 이미지 (기존)
│   ├── scenes/                     # 장면 이미지 + 캐릭터 배경(bg-*)
│   ├── video/                      # 출력 영상
│   ├── audio/                      # BGM
│   ├── editor/                     # YAML 시나리오 영상 편집기
│   │   ├── render.ts               # 메인 렌더러 (YAML → ffmpeg)
│   │   ├── schema.ts               # 타입 정의
│   │   ├── effects.ts              # 효과 (zoom, pan, fade)
│   │   └── text-overlay.ts         # 텍스트 오버레이
│   └── scenarios/                  # YAML 시나리오 파일
│       └── character-intro.yaml    # 캐릭터 소개 영상
└── CLAUDE.md
```

## 기술 스택
- Next.js 14 + TypeScript + Tailwind CSS
- 개발 서버: `npm run dev` (http://localhost:3002)

## AI 도구 활용
- **Claude**: 스토리, 기획, 코드, 프로젝트 관리
- **Gemini**: 캐릭터/장면 이미지 생성 (2026-01-27)
- **ChatGPT**: 리서치, 아이디어
- **Midjourney/DALL-E**: 추가 콘셉트 아트
- **Suno/Udio**: OST 프로토타입

## 멀티 플랫폼 전략

### 콘텐츠 채널
- **웹툰**: 네이버웹툰, 카카오페이지
- **드라마**: 넷플릭스, 티빙
- **유튜브**: 비하인드, 기술 설명, 메이킹
- **ThinkPhysically 사이트**: 심화 콘텐츠 + 커뮤니티

## 완료된 작업

### 웹사이트 (19개 페이지)
- ✅ 홈페이지
- ✅ 화성행 티켓 메인 허브 (1,260줄)
- ✅ 캐릭터 프로필 시스템 (650줄, 7인 상세)
- ✅ 에피소드 시놉시스 7개 (EP1~7)
- ✅ 웹툰 1화 콘티 (50컷, 67개 대사)
- ✅ 기술 리서치 페이지 (NASA/SpaceX 실제 기술 기반)

### 에셋 (113MB+)
- ✅ 캐릭터 이미지 7인 (기존 assets 폴더)
- ✅ 장면 이미지 (화성표면, 우주선발사, 지구멀어짐)
- ✅ 티저 영상 4버전 (ffmpeg 스크립트 포함)
- ✅ BGM

### Gemini 생성 이미지 (2026-01-27)
- ✅ **로고**: 화성행 티켓 타이틀 (우주 배경)
- ✅ **로고2**: 화성행 티켓 + ONE WAY TICKET (화성 배경) ⭐ 추천
- ✅ **장면1**: 화성 표면 + 로버 + 먼지폭풍
- ✅ **장면2**: 로켓 발사
- ✅ **장면3**: 우주선 창문에서 본 지구
- ✅ **캐릭터 이미지**: 서하준, 강하늘, 박시우, 이지안, 최현수, 린, 김태호(교체), 한소희

### Gemini 생성 이미지 (2026-01-28)
- ✅ **캐릭터 배경 이미지 7종**: bg-서하준, bg-강하늘, bg-박시우, bg-이지안, bg-최현수, bg-린, bg-김태호
- ✅ **영화 포스터 썸네일**: 7인 합성 포스터 (유튜브 썸네일용)
- ✅ **김태호 캐릭터 교체**: 연예인 닮은 문제로 새로 생성

### 유튜브 채널 (2026-01-27)
- ✅ **채널 개설**: @MarsTicketOfficial
- ✅ **채널아트**: 화성-지구 배경 + "화성행 티켓" + "ONE WAY TICKET" + 실루엣
- ✅ **프로필**: 로켓 + 화성 (추후 시네마틱 버전으로 업그레이드 예정)
- ✅ **첫 영상**: 티저_v4.mp4 업로드 (14초, Full HD)
  - 🔗 https://www.youtube.com/watch?v=2zxo7WbGwl8
- ⚠️ **저작권**: BGM 저작권 감지됨 (사용 허용, 수익은 저작권자)

### 유튜브 영상 (2026-01-28)
- ✅ **캐릭터 소개 영상**: character-intro.mp4 (60초, 1080p, 14.7MB)
  - 7인 캐릭터 배경 이미지 + 이름/직업/태그라인 + BGM
  - BGM: Pixabay "Risk" (저작권 무료)
  - 썸네일: 7인 합성 영화 포스터
  - @MarsTicketOfficial 채널 업로드 완료

### YAML 시나리오 영상 편집기 (2026-01-28)
- ✅ **editor/schema.ts**: 통합 타입 정의 (YAMLScene, YAMLScenario, Effect 9종, Transition 8종)
- ✅ **editor/effects.ts**: ffmpeg 효과 필터 (zoom-in/out, slow-zoom, pan-left/right/up/down, shake)
- ✅ **editor/text-overlay.ts**: drawtext/drawbox 필터 (대사, 나레이션, 타이틀, expansion=none)
- ✅ **editor/render.ts**: YAML 파싱 → filter_complex 조합 → ffmpeg 실행 (634줄)
- ✅ **editor/transitions.ts**: 트랜지션 전담 (fade, cut, dissolve, wipe, slide, zoom-transition)
- ✅ **editor/audio-mixer.ts**: 멀티 BGM + SFX 믹싱 (장면별 BGM 오버라이드, 크로스페이드, 덕킹)
- ✅ **scenarios/character-intro.yaml**: 캐릭터 소개 영상 시나리오
- ✅ **scenarios/ep01-one-way-ticket.yaml**: EP1 시나리오 (30장면, 155초)
- ✅ **scenarios/ep02-survival.yaml**: EP2 시나리오 (48장면, 210초)
- 사용법: `npx tsx assets/editor/render.ts assets/scenarios/<시나리오>.yaml`
- 옵션: `--scene N`, `--scenes M-N`, `--dry-run`, `--fast`
- 지원 장면: title, scene(나레이션), dialogue(대사), composite(캐릭터 합성)

### 에셋 자동 준비 시스템 (2026-01-31)
- ✅ **editor/asset-prep.ts**: 메인 CLI 오케스트레이터
- ✅ **editor/asset-analyzer.ts**: EP 시놉시스 분석 → 에셋 매니페스트 생성
- ✅ **editor/sfx-fetcher.ts**: Freesound.org API → SFX 자동 검색/다운로드
- ✅ **editor/bgm-fetcher.ts**: Pixabay Music 검색 URL 생성
- ✅ **editor/gemini-prompter.ts**: 장면별 Gemini 이미지 프롬프트 자동 생성
- 사용법: `npx tsx assets/editor/asset-prep.ts ep03`
- 옵션: `--analyze`, `--sfx`, `--bgm`, `--prompts`
- 환경변수: `FREESOUND_API_KEY` (freesound.org/apiv2/apply)

### 블로그 배포 (2026-01-31)
- ✅ **Vercel 배포**: https://think-physically.vercel.app
- ✅ **블로그 이미지 최적화**: PNG → WebP (16MB → 663KB)
- ✅ **next/image 적용**: mars-atmosphere, mars-distance 페이지
- GitHub: `jeromwolf/think-physically` → Vercel 자동 배포

### 시스템 설계
- ✅ 지식 크로스오버 시스템 (7인 전문성 융합)
- ✅ 드라마→사업 파이프라인 (기술별 스타트업 아이디어)
- ✅ 멀티플랫폼 전략

## 다음 작업
- **EP2 재렌더링**: 폰트 크기 키운 버전 (나레이션 40px, 대사 36px)
- **EP3 에셋 준비**: `npx tsx assets/editor/asset-prep.ts ep03` 실행
  - Freesound API 키 발급 필요
  - Gemini 이미지 10개 생성 필요
  - Pixabay BGM 4트랙 다운로드
- **EP3 시나리오 작성**: ep03-48hours.yaml
- **EP3~EP10 영상 제작**: 주 1~2회 업로드 목표
- 유튜브 쇼츠 제작 (구독자 성장용)
- 저작권 등록 (EP10 완료 후)
- Supabase 댓글 시스템 (Phase 2)
- 커뮤니티 + 로그인 (EP10 이후, Phase 3)

## 레퍼런스
- **스토리**: Nicky Case (인터랙티브), Wait But Why (딥 엔터테인먼트)
- **K-콘텐츠**: 오징어게임, 더 글로리 (글로벌 성공)
- **비전**: 일론 머스크, SpaceX, 화성 이주 계획

## 메모
- 2026-01-26: 방향 전환! K-콘텐츠 + 기술 + 창업 융합
- 2026-01-26: "화성행 티켓" 웹툰/드라마 기획 시작
- 2026-01-27: Gemini로 캐릭터/장면/로고 이미지 생성
- 2026-01-27: 유튜브 채널 @MarsTicketOfficial 개설 완료
- 2026-01-27: 채널아트 + 프로필 설정 완료
- 2026-01-27: 첫 영상 (티저_v4.mp4) 업로드 완료
- 2026-01-28: 캐릭터 이름 변경 (박진우→박시우, 이서연→이지안)
- 2026-01-28: 김태호 캐릭터 이미지 교체 (연예인 닮은 문제)
- 2026-01-28: Gemini로 캐릭터 배경 이미지 7종 생성
- 2026-01-28: 캐릭터 소개 영상 제작 및 유튜브 업로드 (60초, BGM: Pixabay Risk)
- 2026-01-28: 7인 합성 영화 포스터 썸네일 제작
- 2026-01-28: YAML 시나리오 영상 편집기 개발 (editor/render.ts + schema + effects + text-overlay)
- 2026-01-29: EP1 영상 제작 (30장면, 155초) + 유튜브 업로드
- 2026-01-30: EP2 영상 제작 (48장면, 210초) + 유튜브 업로드
- 2026-01-30: EP2 텍스트 렌더링 버그 수정 (ffmpeg expansion=none)
- 2026-01-30: 블로그 2개 작성 (화성 대기, 화성 거리)
- 2026-01-31: 블로그 Vercel 배포 (think-physically.vercel.app)
- 2026-01-31: 에디터 Phase 1 확장 (audio-mixer, transitions, shake/pan-up/down, 타입 통합)
- 2026-01-31: 에셋 자동 준비 시스템 구축 (asset-prep CLI, Freesound/Pixabay/Gemini 연동)

## 유튜브 채널
- 채널: @MarsTicketOfficial
- EP.01: https://www.youtube.com/watch?v=qKHeQsWrDQo
- EP.02: https://www.youtube.com/watch?v=oJFEOS2pm94

## 에디터 모듈 구조
```
assets/editor/
├── render.ts          (634줄) - 메인 렌더러
├── schema.ts          (137줄) - 타입 정의
├── effects.ts         (87줄)  - 이펙트 9종
├── transitions.ts     (95줄)  - 트랜지션 8종
├── audio-mixer.ts     (273줄) - 멀티 BGM + SFX 믹싱
├── text-overlay.ts    (221줄) - 텍스트 오버레이
├── asset-prep.ts      - 에셋 준비 CLI
├── asset-analyzer.ts  - 에셋 분석기
├── sfx-fetcher.ts     - Freesound SFX 다운로더
├── bgm-fetcher.ts     - BGM 검색 URL 생성
└── gemini-prompter.ts - Gemini 이미지 프롬프트 생성
```

---

> "드라마가 현실이 되는 세상"
> 이게 ThinkPhysically의 새로운 비전이다.
