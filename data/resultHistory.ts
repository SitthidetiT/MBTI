import type { DimScores } from '@/types';

export interface ResultHistory {
  typeKey: string;
  identity: string;
  scores: DimScores;
  date: string;
  mode: 'standard' | 'detailed' | 'career';
}

const STORAGE_KEY = 'mbti_result_history';
const MAX_RESULTS = 20;

export function saveResult(result: ResultHistory): void {
  try {
    const history = getHistory();
    history.unshift(result);
    if (history.length > MAX_RESULTS) {
      history.length = MAX_RESULTS;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // localStorage unavailable (SSR, private browsing)
  }
}

export function getHistory(): ResultHistory[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // noop
  }
}
