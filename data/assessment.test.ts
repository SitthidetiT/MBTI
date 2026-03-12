import { getTypeKey, getIdentity } from './personalities';
import { questions } from './questions';
import { careerQuestions } from './career_questions';
import type { Answers, Dimension } from '../types';

// The exact calculation logic used in the application
function calculateScores(answers: Answers) {
  const dims: Record<Dimension, number> = { EI: 0, NS: 0, TF: 0, JP: 0, AT: 0 };
  const counts: Record<Dimension, number> = { EI: 0, NS: 0, TF: 0, JP: 0, AT: 0 };

  Object.values(answers).forEach(({ dimension, scaledValue }) => {
    dims[dimension] += scaledValue;
    counts[dimension]++;
  });

  const scores: Record<string, number> = {};
  (Object.keys(dims) as Dimension[]).forEach((dim) => {
    const maxScore = counts[dim] * 3;
    const pct = maxScore === 0 ? 50 : Math.round(((dims[dim] + maxScore) / (2 * maxScore)) * 100);
    scores[dim] = Math.max(0, Math.min(100, pct));
  });
  return scores as Record<Dimension, number>;
}

describe('Assessment Logic Verification', () => {
  it('should calculate exactly 100% for all dimensions if answering Strongly Agree in positive direction', () => {
    const answers: Answers = {};
    questions.forEach((q) => {
      // Simulate answering such that scaledValue is +3
      const rawValue = q.direction === 1 ? 3 : -3;
      answers[q.id] = {
        dimension: q.dimension,
        rawValue,
        scaledValue: rawValue * q.direction,
      };
    });

    const scores = calculateScores(answers);

    expect(scores.EI).toBe(100);
    expect(scores.NS).toBe(100);
    expect(scores.TF).toBe(100);
    expect(scores.JP).toBe(100);
    expect(scores.AT).toBe(100);

    const typeKey = getTypeKey(scores);
    const identity = getIdentity(scores);

    // EI: 100 -> E, NS: 100 -> N, TF: 100 -> T, JP: 100 -> J, AT: 100 -> A
    expect(typeKey).toBe('ENTJ');
    expect(identity).toBe('A');
  });

  it('should calculate exactly 0% for all dimensions if answering Strongly Disagree in positive direction', () => {
    const answers: Answers = {};
    questions.forEach((q) => {
      // Simulate answering such that scaledValue is -3
      const rawValue = q.direction === 1 ? -3 : 3;
      answers[q.id] = {
        dimension: q.dimension,
        rawValue,
        scaledValue: rawValue * q.direction,
      };
    });

    const scores = calculateScores(answers);

    expect(scores.EI).toBe(0);
    expect(scores.NS).toBe(0);
    expect(scores.TF).toBe(0);
    expect(scores.JP).toBe(0);
    expect(scores.AT).toBe(0);

    const typeKey = getTypeKey(scores);
    const identity = getIdentity(scores);

    // EI: 0 -> I, NS: 0 -> S, TF: 0 -> F, JP: 0 -> P, AT: 0 -> T
    expect(typeKey).toBe('ISFP');
    expect(identity).toBe('T');
  });

  it('should calculate strictly neutral 50% for all neutral answers (rawValue 0)', () => {
    const answers: Answers = {};
    questions.forEach((q) => {
      answers[q.id] = {
        dimension: q.dimension,
        rawValue: 0,
        scaledValue: 0,
      };
    });

    const scores = calculateScores(answers);

    expect(scores.EI).toBe(50);
    expect(scores.NS).toBe(50);
    expect(scores.TF).toBe(50);
    expect(scores.JP).toBe(50);
    expect(scores.AT).toBe(50);

    // 50% exactly biases towards I, S, F, P, T (all use > 50)
    const typeKey = getTypeKey(scores);
    const identity = getIdentity(scores);
    expect(typeKey).toBe('ISFP');
    expect(identity).toBe('T');
  });

  it('should perfectly map career test questions as well', () => {
    // Assert career questions have correct length
    expect(careerQuestions.length).toBe(20);

    const answers: Answers = {};
    careerQuestions.forEach((q) => {
      // Answer to force ESFJ-A
      // E: EI >= 50
      // S: NS < 50
      // F: TF < 50
      // J: JP >= 50
      // A: AT >= 50

      let targetScore: number;
      if (q.dimension === 'NS' || q.dimension === 'TF') {
        targetScore = -3; // negative pushes towards S and F
      } else {
        targetScore = 3; // positive pushes towards E, J, A
      }

      const rawValue = q.direction === 1 ? targetScore : -targetScore;
      answers[q.id] = {
        dimension: q.dimension,
        rawValue,
        scaledValue: rawValue * q.direction,
      };
    });

    const scores = calculateScores(answers);
    expect(scores.EI).toBe(100);
    expect(scores.NS).toBe(0);
    expect(scores.TF).toBe(0);
    expect(scores.JP).toBe(100);
    expect(scores.AT).toBe(100);

    const typeKey = getTypeKey(scores);
    const identity = getIdentity(scores);
    expect(typeKey).toBe('ESFJ');
    expect(identity).toBe('A');
  });
});
