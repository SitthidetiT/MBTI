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
