// ProgressSystem.ts - 사용자 진행 상태 관리
// ThinkPhysically 핵심 시스템 - 10년 장기 운영을 위한 확장 가능한 구조

export interface StageProgress {
  stageId: string
  status: 'locked' | 'available' | 'in_progress' | 'completed'
  completedAt?: number
  checkpoints: string[] // 완료한 체크포인트 ID들
  bestRecord?: number // 시뮬레이터가 있는 스테이지의 최고 기록
}

export interface UserProgress {
  version: number // 데이터 마이그레이션을 위한 버전
  name: string
  level: number
  xp: number
  xpToNextLevel: number
  stages: Record<string, StageProgress>
  badges: string[]
  challengeRecords: Record<string, number> // challengeId -> bestTime
  totalPlayTime: number // 초 단위
  lastVisit: number
  streak: number // 연속 방문 일수
  createdAt: number
  updatedAt: number
}

export interface LevelConfig {
  level: number
  title: string
  xpRequired: number
}

// 레벨 설정 - 확장 가능
export const LEVEL_CONFIG: LevelConfig[] = [
  { level: 1, title: '호기심', xpRequired: 0 },
  { level: 2, title: '관찰자', xpRequired: 100 },
  { level: 3, title: '실험자', xpRequired: 300 },
  { level: 4, title: '이론가', xpRequired: 600 },
  { level: 5, title: '물리학자', xpRequired: 1000 },
  { level: 6, title: '과학자', xpRequired: 1500 },
  { level: 7, title: '연구원', xpRequired: 2200 },
  { level: 8, title: '교수', xpRequired: 3000 },
  { level: 9, title: '석학', xpRequired: 4000 },
  { level: 10, title: '일론급', xpRequired: 5500 },
]

// XP 보상 설정
export const XP_REWARDS = {
  stageComplete: 50,
  checkpointComplete: 10,
  challengeComplete: 20,
  challengeRecord: 30,
  dailyVisit: 5,
  streakBonus: 10, // streak 일수당 추가
}

// 스테이지 정의 - 콘텐츠 확장 시 여기에 추가
export const STAGES_CONFIG = [
  {
    id: 'remove-the-part',
    title: '부품의 최저단가는 부품을 없애는 것이다',
    category: 'first-principles',
    order: 1,
    hasSimulator: false,
    checkpoints: ['checkpoint-1', 'final-mission'],
    unlockCondition: null, // 첫 스테이지는 항상 열림
  },
  {
    id: 'controlled-falling',
    title: '걷기는 통제된 추락이다',
    category: 'physical-ai',
    order: 2,
    hasSimulator: true,
    simulatorId: 'inverted-pendulum',
    checkpoints: ['checkpoint-1', 'simulator-challenge'],
    unlockCondition: 'remove-the-part', // 이전 스테이지 완료 필요
  },
  // 새 스테이지 추가는 여기에
]

class ProgressSystem {
  private static instance: ProgressSystem
  private readonly STORAGE_KEY = 'think-physically-progress'
  private readonly CURRENT_VERSION = 1
  private progress: UserProgress | null = null
  private listeners: ((progress: UserProgress) => void)[] = []

  private constructor() {
    this.loadProgress()
  }

  static getInstance(): ProgressSystem {
    if (!ProgressSystem.instance) {
      ProgressSystem.instance = new ProgressSystem()
    }
    return ProgressSystem.instance
  }

  // 진행 상태 로드
  private loadProgress(): void {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY)
      if (data) {
        const parsed = JSON.parse(data)
        this.progress = this.migrateIfNeeded(parsed)
      } else {
        this.progress = this.createInitialProgress()
      }
      this.checkDailyVisit()
    } catch (error) {
      console.error('Failed to load progress:', error)
      this.progress = this.createInitialProgress()
    }
  }

  // 초기 진행 상태 생성
  private createInitialProgress(): UserProgress {
    const stages: Record<string, StageProgress> = {}

    STAGES_CONFIG.forEach((stage, index) => {
      stages[stage.id] = {
        stageId: stage.id,
        status: index === 0 ? 'available' : 'locked',
        checkpoints: [],
      }
    })

    return {
      version: this.CURRENT_VERSION,
      name: '',
      level: 1,
      xp: 0,
      xpToNextLevel: LEVEL_CONFIG[1].xpRequired,
      stages,
      badges: [],
      challengeRecords: {},
      totalPlayTime: 0,
      lastVisit: Date.now(),
      streak: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
  }

  // 데이터 마이그레이션 (버전 업그레이드 시)
  private migrateIfNeeded(data: UserProgress): UserProgress {
    if (data.version === this.CURRENT_VERSION) {
      return data
    }

    // 향후 버전 마이그레이션 로직 추가
    // if (data.version === 1) { ... migrate to v2 }

    return { ...data, version: this.CURRENT_VERSION }
  }

  // 일일 방문 체크
  private checkDailyVisit(): void {
    if (!this.progress) return

    const now = Date.now()
    const lastVisit = new Date(this.progress.lastVisit)
    const today = new Date(now)

    // 날짜가 다르면 방문 처리
    if (lastVisit.toDateString() !== today.toDateString()) {
      const daysDiff = Math.floor((now - this.progress.lastVisit) / (1000 * 60 * 60 * 24))

      if (daysDiff === 1) {
        // 연속 방문
        this.progress.streak += 1
        this.addXP(XP_REWARDS.dailyVisit + (XP_REWARDS.streakBonus * Math.min(this.progress.streak, 7)))
      } else {
        // 연속 끊김
        this.progress.streak = 1
        this.addXP(XP_REWARDS.dailyVisit)
      }

      this.progress.lastVisit = now
      this.saveProgress()
    }
  }

  // 진행 상태 저장
  private saveProgress(): void {
    if (!this.progress) return

    this.progress.updatedAt = Date.now()
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.progress))
    this.notifyListeners()
  }

  // 리스너 알림
  private notifyListeners(): void {
    if (!this.progress) return
    this.listeners.forEach(listener => listener(this.progress!))
  }

  // 리스너 등록
  addListener(callback: (progress: UserProgress) => void): void {
    this.listeners.push(callback)
  }

  // 리스너 제거
  removeListener(callback: (progress: UserProgress) => void): void {
    this.listeners = this.listeners.filter(l => l !== callback)
  }

  // 현재 진행 상태 가져오기
  getProgress(): UserProgress | null {
    return this.progress
  }

  // 사용자 이름 설정
  setName(name: string): void {
    if (!this.progress) return
    this.progress.name = name
    this.saveProgress()
  }

  // XP 추가 및 레벨업 처리
  addXP(amount: number): { leveledUp: boolean; newLevel?: number } {
    if (!this.progress) return { leveledUp: false }

    this.progress.xp += amount

    // 레벨업 체크
    const currentLevelConfig = LEVEL_CONFIG.find(l => l.level === this.progress!.level + 1)
    if (currentLevelConfig && this.progress.xp >= currentLevelConfig.xpRequired) {
      this.progress.level += 1

      // 다음 레벨 XP 설정
      const nextLevelConfig = LEVEL_CONFIG.find(l => l.level === this.progress!.level + 1)
      this.progress.xpToNextLevel = nextLevelConfig?.xpRequired || this.progress.xp

      this.saveProgress()
      return { leveledUp: true, newLevel: this.progress.level }
    }

    this.saveProgress()
    return { leveledUp: false }
  }

  // 스테이지 상태 업데이트
  updateStageStatus(stageId: string, status: StageProgress['status']): void {
    if (!this.progress || !this.progress.stages[stageId]) return

    this.progress.stages[stageId].status = status

    if (status === 'completed') {
      this.progress.stages[stageId].completedAt = Date.now()
      this.addXP(XP_REWARDS.stageComplete)
      this.unlockNextStage(stageId)
    }

    this.saveProgress()
  }

  // 다음 스테이지 언락
  private unlockNextStage(completedStageId: string): void {
    const nextStage = STAGES_CONFIG.find(s => s.unlockCondition === completedStageId)
    if (nextStage && this.progress?.stages[nextStage.id]) {
      this.progress.stages[nextStage.id].status = 'available'
    }
  }

  // 체크포인트 완료
  completeCheckpoint(stageId: string, checkpointId: string): void {
    if (!this.progress || !this.progress.stages[stageId]) return

    const stage = this.progress.stages[stageId]
    if (!stage.checkpoints.includes(checkpointId)) {
      stage.checkpoints.push(checkpointId)
      this.addXP(XP_REWARDS.checkpointComplete)

      // 모든 체크포인트 완료 시 스테이지 완료 처리
      const stageConfig = STAGES_CONFIG.find(s => s.id === stageId)
      if (stageConfig && stage.checkpoints.length >= stageConfig.checkpoints.length) {
        this.updateStageStatus(stageId, 'completed')
      }

      this.saveProgress()
    }
  }

  // 챌린지 기록 업데이트
  updateChallengeRecord(challengeId: string, time: number): { isNewRecord: boolean; previousRecord?: number } {
    if (!this.progress) return { isNewRecord: false }

    const previousRecord = this.progress.challengeRecords[challengeId]

    if (!previousRecord || time > previousRecord) {
      this.progress.challengeRecords[challengeId] = time
      this.addXP(previousRecord ? XP_REWARDS.challengeRecord : XP_REWARDS.challengeComplete)
      this.saveProgress()
      return { isNewRecord: true, previousRecord }
    }

    return { isNewRecord: false, previousRecord }
  }

  // 배지 획득
  addBadge(badgeId: string): boolean {
    if (!this.progress) return false

    if (!this.progress.badges.includes(badgeId)) {
      this.progress.badges.push(badgeId)
      this.saveProgress()
      return true
    }
    return false
  }

  // 배지 보유 확인
  hasBadge(badgeId: string): boolean {
    return this.progress?.badges.includes(badgeId) || false
  }

  // 플레이 시간 추가
  addPlayTime(seconds: number): void {
    if (!this.progress) return
    this.progress.totalPlayTime += seconds
    this.saveProgress()
  }

  // 레벨 타이틀 가져오기
  getLevelTitle(level?: number): string {
    const targetLevel = level || this.progress?.level || 1
    const config = LEVEL_CONFIG.find(l => l.level === targetLevel)
    return config?.title || '호기심'
  }

  // 스테이지 진행률 계산
  getOverallProgress(): { completed: number; total: number; percentage: number } {
    if (!this.progress) return { completed: 0, total: 0, percentage: 0 }

    const total = STAGES_CONFIG.length
    const completed = Object.values(this.progress.stages).filter(s => s.status === 'completed').length

    return {
      completed,
      total,
      percentage: Math.round((completed / total) * 100)
    }
  }

  // 진행 상태 초기화 (개발/테스트용)
  resetProgress(): void {
    localStorage.removeItem(this.STORAGE_KEY)
    this.progress = this.createInitialProgress()
    this.notifyListeners()
  }

  // 특정 스테이지 잠금 해제 (개발/테스트용)
  devUnlockStage(stageId: string): void {
    if (!this.progress || !this.progress.stages[stageId]) return
    this.progress.stages[stageId].status = 'available'
    this.saveProgress()
  }

  // 모든 스테이지 잠금 해제 (개발/테스트용)
  devUnlockAllStages(): void {
    if (!this.progress) return
    Object.keys(this.progress.stages).forEach(stageId => {
      this.progress!.stages[stageId].status = 'available'
    })
    this.saveProgress()
  }
}

// 싱글톤 인스턴스 export
export const progressSystem = ProgressSystem.getInstance()
export default ProgressSystem
