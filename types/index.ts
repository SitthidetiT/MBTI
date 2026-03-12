// ─── Shared Types ───────────────────────────────────────────────────────────

export type Lang = 'th' | 'en';

export type Dimension = 'EI' | 'NS' | 'TF' | 'JP' | 'AT';

export type Group = 'analysts' | 'diplomats' | 'sentinels' | 'explorers';

export type TestMode = 'standard' | 'detailed';

export type TypeCode =
  | 'INTJ'
  | 'INTP'
  | 'ENTJ'
  | 'ENTP'
  | 'INFJ'
  | 'INFP'
  | 'ENFJ'
  | 'ENFP'
  | 'ISTJ'
  | 'ISFJ'
  | 'ESTJ'
  | 'ESFJ'
  | 'ISTP'
  | 'ISFP'
  | 'ESTP'
  | 'ESFP';

export type Identity = 'A' | 'T';

export interface DimScores {
  EI: number;
  NS: number;
  TF: number;
  JP: number;
  AT: number;
}

export interface Question {
  id: number;
  dimension: Dimension;
  th: string;
  en: string;
  direction: 1 | -1;
  mode: TestMode | 'both';
  weight?: number;
}

export interface AnswerState {
  dimension: Dimension;
  scaledValue: number;
  rawValue: number;
}

export type Answers = Record<number, AnswerState>;

export interface PersonalityData {
  group: Group;
  emoji: string;
  nickname: Record<Lang, string>;
  overview: Record<Lang, string>;
  strengths: Record<Lang, string[]>;
  weaknesses: Record<Lang, string[]>;
  careers: Record<Lang, string[]>;
  relationships: Record<Lang, string>;
  workStyle: Record<Lang, string[]>;
  growthAreas: Record<Lang, string[]>;
  famousPeople: string[];
}

export interface GroupColors {
  bg: string;
  accent: string;
  light: string;
}

// ─── Love Type ───────────────────────────────────────────────────────────────

export type LoveDimension = 'LF' | 'AC' | 'PR' | 'EO';

export type LoveTypeCode =
  | 'LAPE'
  | 'LAPO'
  | 'LARE'
  | 'LARO'
  | 'LCPE'
  | 'LCPO'
  | 'LCRE'
  | 'LCRO'
  | 'FAPE'
  | 'FAPO'
  | 'FARE'
  | 'FARO'
  | 'FCPE'
  | 'FCPO'
  | 'FCRE'
  | 'FCRO';

export interface LoveQuestion {
  id: number;
  dimension: LoveDimension;
  th: string;
  en: string;
  /** 1 = YES scores first pole (L/A/P/E), -1 = YES scores second pole (F/C/R/O) */
  direction: 1 | -1;
}

export interface LovePersonalityData {
  emoji: string;
  nickname: Record<Lang, string>;
  overview: Record<Lang, string>;
  loveStrengths: Record<Lang, string[]>;
  loveChallenges: Record<Lang, string[]>;
  idealDate: Record<Lang, string>;
  communicationStyle: Record<Lang, string>;
  color: GroupColors;
}
