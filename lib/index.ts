// ThinkPhysically Core Systems

export {
  progressSystem,
  type UserProgress,
  type StageProgress,
  type LevelConfig,
  LEVEL_CONFIG,
  XP_REWARDS,
  STAGES_CONFIG,
} from './progress/ProgressSystem'

export {
  badgeSystem,
  type Badge,
  type BadgeCondition,
  type UnlockedBadge,
  BADGES,
  RARITY_COLORS,
  RARITY_NAMES,
} from './badges/BadgeSystem'

export {
  BaseSimulator,
  type SimulatorConfig,
  type SimulatorState,
  type ChallengeConfig,
  type Particle,
} from './simulators/BaseSimulator'
