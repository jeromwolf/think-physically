// BadgeSystem.ts - 배지/업적 시스템
// ThinkPhysically 핵심 시스템 - flux-game의 AchievementSystem을 참고하여 구현

import { progressSystem } from '../progress/ProgressSystem'

export interface Badge {
  id: string
  name: string
  description: string
  icon: string // 이모지 또는 아이콘 클래스
  category: 'stage' | 'challenge' | 'milestone' | 'special'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  condition: BadgeCondition
  hidden?: boolean // 획득 전까지 숨김
}

export interface BadgeCondition {
  type: 'stage_complete' | 'challenge_time' | 'streak' | 'level' | 'total_stages' | 'special'
  value?: string | number
  comparator?: 'eq' | 'gte' | 'lte'
}

export interface UnlockedBadge {
  badgeId: string
  unlockedAt: number
}

// 배지 정의 - 확장 가능한 구조
export const BADGES: Badge[] = [
  // Stage Completion Badges
  {
    id: 'first-principle-beginner',
    name: 'First Principles 입문자',
    description: '첫 번째 스테이지를 완료했습니다',
    icon: '⚡',
    category: 'stage',
    rarity: 'common',
    condition: { type: 'stage_complete', value: 'remove-the-part' }
  },
  {
    id: 'controlled-falling-master',
    name: '통제된 추락 이해자',
    description: '두 번째 스테이지를 완료했습니다',
    icon: '🤖',
    category: 'stage',
    rarity: 'common',
    condition: { type: 'stage_complete', value: 'controlled-falling' }
  },

  // Challenge Badges
  {
    id: 'pendulum-3sec',
    name: '역진자 입문',
    description: '역진자 시뮬레이터에서 3초 버티기',
    icon: '🎯',
    category: 'challenge',
    rarity: 'common',
    condition: { type: 'challenge_time', value: 3, comparator: 'gte' }
  },
  {
    id: 'pendulum-5sec',
    name: '역진자 중급',
    description: '역진자 시뮬레이터에서 5초 버티기',
    icon: '🏅',
    category: 'challenge',
    rarity: 'rare',
    condition: { type: 'challenge_time', value: 5, comparator: 'gte' }
  },
  {
    id: 'pendulum-10sec',
    name: '역진자 마스터',
    description: '역진자 시뮬레이터에서 10초 버티기',
    icon: '🏆',
    category: 'challenge',
    rarity: 'epic',
    condition: { type: 'challenge_time', value: 10, comparator: 'gte' }
  },
  {
    id: 'pendulum-30sec',
    name: '역진자 전설',
    description: '역진자 시뮬레이터에서 30초 버티기',
    icon: '👑',
    category: 'challenge',
    rarity: 'legendary',
    condition: { type: 'challenge_time', value: 30, comparator: 'gte' },
    hidden: true
  },

  // Milestone Badges
  {
    id: 'streak-7',
    name: '7일 연속 학습',
    description: '7일 연속으로 방문했습니다',
    icon: '🔥',
    category: 'milestone',
    rarity: 'rare',
    condition: { type: 'streak', value: 7, comparator: 'gte' }
  },
  {
    id: 'streak-30',
    name: '30일 연속 학습',
    description: '30일 연속으로 방문했습니다',
    icon: '💫',
    category: 'milestone',
    rarity: 'epic',
    condition: { type: 'streak', value: 30, comparator: 'gte' }
  },
  {
    id: 'level-5',
    name: '물리학자',
    description: '레벨 5에 도달했습니다',
    icon: '🔬',
    category: 'milestone',
    rarity: 'rare',
    condition: { type: 'level', value: 5, comparator: 'gte' }
  },
  {
    id: 'level-10',
    name: '일론급 사고',
    description: '레벨 10에 도달했습니다',
    icon: '🚀',
    category: 'milestone',
    rarity: 'legendary',
    condition: { type: 'level', value: 10, comparator: 'gte' }
  },
  {
    id: 'all-stages-5',
    name: '탐험가',
    description: '5개 스테이지를 완료했습니다',
    icon: '🗺️',
    category: 'milestone',
    rarity: 'rare',
    condition: { type: 'total_stages', value: 5, comparator: 'gte' }
  },
  {
    id: 'all-stages-10',
    name: '정복자',
    description: '10개 스테이지를 완료했습니다',
    icon: '⭐',
    category: 'milestone',
    rarity: 'epic',
    condition: { type: 'total_stages', value: 10, comparator: 'gte' }
  },

  // Special Badges
  {
    id: 'early-adopter',
    name: '얼리어답터',
    description: 'ThinkPhysically의 초기 멤버',
    icon: '🌟',
    category: 'special',
    rarity: 'legendary',
    condition: { type: 'special', value: 'early-adopter' },
    hidden: true
  },
]

// 희귀도별 색상 설정
export const RARITY_COLORS = {
  common: { bg: '#94a3b8', text: '#ffffff', glow: 'rgba(148, 163, 184, 0.5)' },
  rare: { bg: '#3b82f6', text: '#ffffff', glow: 'rgba(59, 130, 246, 0.5)' },
  epic: { bg: '#a855f7', text: '#ffffff', glow: 'rgba(168, 85, 247, 0.5)' },
  legendary: { bg: '#f59e0b', text: '#000000', glow: 'rgba(245, 158, 11, 0.5)' },
}

export const RARITY_NAMES = {
  common: '일반',
  rare: '희귀',
  epic: '영웅',
  legendary: '전설',
}

class BadgeSystem {
  private static instance: BadgeSystem
  private readonly STORAGE_KEY = 'think-physically-badges'
  private unlockedBadges: UnlockedBadge[] = []
  private notificationQueue: Badge[] = []
  private isShowingNotification = false
  private listeners: ((badge: Badge) => void)[] = []

  private constructor() {
    this.loadBadges()
  }

  static getInstance(): BadgeSystem {
    if (!BadgeSystem.instance) {
      BadgeSystem.instance = new BadgeSystem()
    }
    return BadgeSystem.instance
  }

  // 배지 로드
  private loadBadges(): void {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY)
      this.unlockedBadges = data ? JSON.parse(data) : []
    } catch (error) {
      console.error('Failed to load badges:', error)
      this.unlockedBadges = []
    }
  }

  // 배지 저장
  private saveBadges(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.unlockedBadges))
  }

  // 리스너 등록 (배지 획득 시 콜백)
  addListener(callback: (badge: Badge) => void): void {
    this.listeners.push(callback)
  }

  // 리스너 제거
  removeListener(callback: (badge: Badge) => void): void {
    this.listeners = this.listeners.filter(l => l !== callback)
  }

  // 배지 획득 확인
  isUnlocked(badgeId: string): boolean {
    return this.unlockedBadges.some(b => b.badgeId === badgeId)
  }

  // 배지 정보 가져오기
  getBadge(badgeId: string): Badge | undefined {
    return BADGES.find(b => b.id === badgeId)
  }

  // 획득한 배지 목록
  getUnlockedBadges(): (Badge & { unlockedAt: number })[] {
    return this.unlockedBadges
      .map(ub => {
        const badge = this.getBadge(ub.badgeId)
        return badge ? { ...badge, unlockedAt: ub.unlockedAt } : null
      })
      .filter((b): b is Badge & { unlockedAt: number } => b !== null)
      .sort((a, b) => b.unlockedAt - a.unlockedAt)
  }

  // 카테고리별 배지 목록
  getBadgesByCategory(category: Badge['category']): Badge[] {
    return BADGES.filter(b => b.category === category)
  }

  // 전체 배지 통계
  getStats(): { total: number; unlocked: number; percentage: number } {
    const visibleBadges = BADGES.filter(b => !b.hidden || this.isUnlocked(b.id))
    return {
      total: visibleBadges.length,
      unlocked: this.unlockedBadges.length,
      percentage: Math.round((this.unlockedBadges.length / visibleBadges.length) * 100)
    }
  }

  // 배지 획득 (수동)
  unlock(badgeId: string): boolean {
    if (this.isUnlocked(badgeId)) return false

    const badge = this.getBadge(badgeId)
    if (!badge) return false

    this.unlockedBadges.push({
      badgeId,
      unlockedAt: Date.now()
    })
    this.saveBadges()

    // Progress 시스템에도 반영
    progressSystem.addBadge(badgeId)

    // 알림 표시
    this.showNotification(badge)

    // 리스너 알림
    this.listeners.forEach(l => l(badge))

    return true
  }

  // 조건 기반 배지 확인 및 획득
  checkAndUnlock(
    type: BadgeCondition['type'],
    value: string | number,
    challengeId?: string
  ): Badge | null {
    const matchingBadges = BADGES.filter(badge => {
      if (this.isUnlocked(badge.id)) return false
      if (badge.condition.type !== type) return false

      // 챌린지 타임의 경우 특별 처리
      if (type === 'challenge_time' && challengeId) {
        if (!badge.id.includes(challengeId.split('-')[0])) return false
      }

      // 조건 비교
      if (badge.condition.comparator) {
        const condValue = badge.condition.value as number
        const checkValue = value as number

        switch (badge.condition.comparator) {
          case 'gte': return checkValue >= condValue
          case 'lte': return checkValue <= condValue
          case 'eq': return checkValue === condValue
        }
      }

      return badge.condition.value === value
    })

    // 가장 높은 조건을 만족하는 배지 획득
    if (matchingBadges.length > 0) {
      // 희귀도 순으로 정렬 (높은 것부터)
      const sortedBadges = matchingBadges.sort((a, b) => {
        const rarityOrder = { legendary: 4, epic: 3, rare: 2, common: 1 }
        return rarityOrder[b.rarity] - rarityOrder[a.rarity]
      })

      // 모든 해당 배지 획득
      sortedBadges.forEach(badge => this.unlock(badge.id))

      return sortedBadges[0]
    }

    return null
  }

  // 스테이지 완료 시 배지 체크
  checkStageComplete(stageId: string): Badge | null {
    return this.checkAndUnlock('stage_complete', stageId)
  }

  // 챌린지 기록 시 배지 체크
  checkChallengeTime(challengeId: string, time: number): Badge | null {
    return this.checkAndUnlock('challenge_time', time, challengeId)
  }

  // 연속 방문 배지 체크
  checkStreak(streak: number): Badge | null {
    return this.checkAndUnlock('streak', streak)
  }

  // 레벨업 배지 체크
  checkLevel(level: number): Badge | null {
    return this.checkAndUnlock('level', level)
  }

  // 총 스테이지 완료 배지 체크
  checkTotalStages(count: number): Badge | null {
    return this.checkAndUnlock('total_stages', count)
  }

  // 알림 표시
  private showNotification(badge: Badge): void {
    this.notificationQueue.push(badge)
    if (!this.isShowingNotification) {
      this.processNotificationQueue()
    }
  }

  // 알림 큐 처리
  private processNotificationQueue(): void {
    if (this.notificationQueue.length === 0) {
      this.isShowingNotification = false
      return
    }

    this.isShowingNotification = true
    const badge = this.notificationQueue.shift()!
    const colors = RARITY_COLORS[badge.rarity]

    const notification = document.createElement('div')
    notification.className = 'badge-notification'
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, ${colors.bg}, ${colors.bg}dd);
      color: ${colors.text};
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 10px 40px ${colors.glow}, 0 0 60px ${colors.glow};
      display: flex;
      align-items: center;
      gap: 15px;
      max-width: 380px;
      z-index: 10000;
      animation: badgeSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      border: 1px solid rgba(255,255,255,0.2);
    `

    notification.innerHTML = `
      <div style="
        font-size: 48px;
        filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
        animation: badgeIconPulse 1s ease-in-out infinite;
      ">${badge.icon}</div>
      <div style="flex: 1;">
        <div style="
          font-size: 12px;
          text-transform: uppercase;
          opacity: 0.9;
          margin-bottom: 4px;
          letter-spacing: 1px;
        ">배지 획득!</div>
        <div style="
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 4px;
        ">${badge.name}</div>
        <div style="
          font-size: 14px;
          opacity: 0.9;
        ">${badge.description}</div>
        <div style="
          margin-top: 8px;
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
        ">${RARITY_NAMES[badge.rarity]}</div>
      </div>
    `

    // 애니메이션 스타일 추가
    if (!document.querySelector('#badge-animation-styles')) {
      const style = document.createElement('style')
      style.id = 'badge-animation-styles'
      style.innerHTML = `
        @keyframes badgeSlideIn {
          from {
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes badgeSlideOut {
          from {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes badgeIconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `
      document.head.appendChild(style)
    }

    document.body.appendChild(notification)

    // 4초 후 제거
    setTimeout(() => {
      notification.style.animation = 'badgeSlideOut 0.5s ease-in forwards'
      setTimeout(() => {
        notification.remove()
        this.processNotificationQueue()
      }, 500)
    }, 4000)
  }

  // 배지 초기화 (개발/테스트용)
  resetBadges(): void {
    this.unlockedBadges = []
    localStorage.removeItem(this.STORAGE_KEY)
  }
}

// 싱글톤 인스턴스 export
export const badgeSystem = BadgeSystem.getInstance()
export default BadgeSystem
