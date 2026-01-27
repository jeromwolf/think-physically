'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Lock, Check, Play, Zap, Bot, Star, Flame, Trophy } from 'lucide-react'

interface StageProgress {
  stageId: string
  status: 'locked' | 'available' | 'in_progress' | 'completed'
  completedAt?: number
  checkpoints: string[]
  bestRecord?: number
}

interface UserProgress {
  version: number
  name: string
  level: number
  xp: number
  xpToNextLevel: number
  stages: Record<string, StageProgress>
  badges: string[]
  challengeRecords: Record<string, number>
  totalPlayTime: number
  lastVisit: number
  streak: number
  createdAt: number
  updatedAt: number
}

const STAGES = [
  {
    id: 'remove-the-part',
    title: '부품을 없애라',
    subtitle: '부품의 최저단가는 부품을 없애는 것이다',
    category: 'First Principles',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(0, 245, 255, 0.5)',
  },
  {
    id: 'controlled-falling',
    title: '통제된 추락',
    subtitle: '걷기는 통제된 추락이다',
    category: 'Physical AI',
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(191, 0, 255, 0.5)',
    hasSimulator: true,
  },
  {
    id: 'coming-soon-1',
    title: 'Coming Soon',
    subtitle: '새로운 물리학적 사고',
    category: 'Soon',
    icon: Star,
    color: 'from-gray-600 to-gray-700',
    glowColor: 'rgba(100, 100, 100, 0.3)',
    disabled: true,
  },
]

const LEVEL_TITLES = [
  '호기심', '관찰자', '실험자', '이론가', '물리학자',
  '과학자', '연구원', '교수', '석학', '일론급'
]

export default function StageMap() {
  const [progress, setProgress] = useState<UserProgress | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadProgress = () => {
      try {
        const data = localStorage.getItem('think-physically-progress')
        if (data) {
          setProgress(JSON.parse(data))
        } else {
          const initialProgress: UserProgress = {
            version: 1,
            name: '',
            level: 1,
            xp: 0,
            xpToNextLevel: 100,
            stages: {
              'remove-the-part': { stageId: 'remove-the-part', status: 'available', checkpoints: [] },
              'controlled-falling': { stageId: 'controlled-falling', status: 'locked', checkpoints: [] },
            },
            badges: [],
            challengeRecords: {},
            totalPlayTime: 0,
            lastVisit: Date.now(),
            streak: 1,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }
          localStorage.setItem('think-physically-progress', JSON.stringify(initialProgress))
          setProgress(initialProgress)
        }
      } catch (error) {
        console.error('Failed to load progress:', error)
      }
      setIsLoaded(true)
    }

    loadProgress()
  }, [])

  const getOverallProgress = () => {
    if (!progress) return { completed: 0, total: STAGES.length, percentage: 0 }
    const completed = Object.values(progress.stages).filter(s => s.status === 'completed').length
    return {
      completed,
      total: STAGES.filter(s => !s.disabled).length,
      percentage: Math.round((completed / STAGES.filter(s => !s.disabled).length) * 100)
    }
  }

  const overallProgress = getOverallProgress()

  const getStageStatus = (stageId: string) => {
    if (!progress) return 'locked'
    return progress.stages[stageId]?.status || 'locked'
  }

  const StageStatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'completed':
        return <Check className="w-6 h-6" />
      case 'available':
      case 'in_progress':
        return <Play className="w-6 h-6" />
      default:
        return <Lock className="w-5 h-5" />
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="animate-pulse text-cyber-cyan">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-900 bg-grid py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            나의 <span className="gradient-text">물리학적 사고</span> 여정
          </h1>
          <p className="text-gray-400">
            스테이지를 클리어하며 물리학적 사고를 배워보세요
          </p>
        </div>

        <div className="bg-dark-800 rounded-2xl border border-dark-600 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-cyan to-cyber-purple flex items-center justify-center text-2xl font-bold text-dark-900">
                {progress?.level || 1}
              </div>
              <div>
                <div className="text-sm text-gray-400">Level {progress?.level || 1}</div>
                <div className="text-xl font-bold">
                  {LEVEL_TITLES[(progress?.level || 1) - 1]}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-32 h-2 bg-dark-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple transition-all"
                      style={{
                        width: `${progress ? (progress.xp / progress.xpToNextLevel) * 100 : 0}%`
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {progress?.xp || 0}/{progress?.xpToNextLevel || 100} XP
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-cyan">
                  {overallProgress.completed}/{overallProgress.total}
                </div>
                <div className="text-sm text-gray-400">완료 스테이지</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-purple flex items-center justify-center gap-1">
                  <Flame className="w-5 h-5" />
                  {progress?.streak || 0}
                </div>
                <div className="text-sm text-gray-400">연속 학습</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 flex items-center justify-center gap-1">
                  <Trophy className="w-5 h-5" />
                  {progress?.badges.length || 0}
                </div>
                <div className="text-sm text-gray-400">배지</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">전체 진행률</span>
              <span className="text-cyber-cyan">{overallProgress.percentage}%</span>
            </div>
            <div className="h-3 bg-dark-600 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple transition-all duration-500"
                style={{ width: `${overallProgress.percentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {STAGES.map((stage, index) => {
            const status = stage.disabled ? 'locked' : getStageStatus(stage.id)
            const isAccessible = status === 'available' || status === 'in_progress' || status === 'completed'
            const Icon = stage.icon

            const stageContent = (
              <div
                className={`
                  relative p-6 rounded-2xl border transition-all duration-300
                  ${isAccessible
                    ? 'bg-dark-800 border-dark-600 hover:border-cyber-cyan cursor-pointer hover:shadow-lg'
                    : 'bg-dark-800/50 border-dark-700 opacity-60'}
                  ${status === 'completed' ? 'border-green-500/50' : ''}
                `}
                style={{
                  boxShadow: isAccessible ? `0 0 30px ${stage.glowColor}` : 'none',
                }}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`
                      w-16 h-16 rounded-xl flex items-center justify-center text-white
                      ${status === 'completed'
                        ? 'bg-green-500'
                        : status === 'locked'
                          ? 'bg-dark-600'
                          : `bg-gradient-to-br ${stage.color}`
                      }
                    `}
                  >
                    <StageStatusIcon status={status} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`
                        text-xs font-medium px-2 py-1 rounded-full
                        ${status === 'completed'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-dark-600 text-gray-400'}
                      `}>
                        Stage {index + 1}
                      </span>
                      <span className="text-xs text-gray-500">{stage.category}</span>
                      {stage.hasSimulator && (
                        <span className="text-xs bg-cyber-purple/20 text-cyber-purple px-2 py-1 rounded-full">
                          Simulator
                        </span>
                      )}
                    </div>
                    <h3 className={`
                      text-xl font-bold mb-1
                      ${isAccessible ? 'text-white' : 'text-gray-500'}
                    `}>
                      {stage.title}
                    </h3>
                    <p className="text-sm text-gray-400">{stage.subtitle}</p>
                  </div>

                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${isAccessible ? `bg-gradient-to-br ${stage.color}` : 'bg-dark-600'}
                  `}>
                    <Icon className={`w-6 h-6 ${isAccessible ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                </div>

                {status === 'completed' && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      완료
                    </div>
                  </div>
                )}

                {index < STAGES.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-dark-600 z-10" />
                )}
              </div>
            )

            return isAccessible && !stage.disabled ? (
              <Link key={stage.id} href={`/blog/${stage.id}`}>
                {stageContent}
              </Link>
            ) : (
              <div key={stage.id}>
                {stageContent}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-700 text-gray-300 rounded-xl hover:bg-dark-600 transition border border-dark-600"
          >
            <Trophy className="w-5 h-5" />
            내 프로필 & 배지 보기
          </Link>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #00f5ff 0%, #bf00ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bg-grid {
          background-image:
            linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  )
}
