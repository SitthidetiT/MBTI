import { questions, shuffleQuestions } from './questions';

describe('Questions Logic', () => {
  it('should have 60 questions', () => {
    expect(questions.length).toBe(60);
  });

  it('shuffleQuestions should return an array of the same length', () => {
    const shuffled = shuffleQuestions([...questions]);
    expect(shuffled.length).toBe(questions.length);
  });

  it('shuffleQuestions should contain the exact same questions (ignoring order)', () => {
    const originalIds = [...questions].map((q) => q.id).sort();
    const shuffledIds = shuffleQuestions([...questions])
      .map((q) => q.id)
      .sort();
    expect(originalIds).toEqual(shuffledIds);
  });

  it('all questions should have valid dimensions (EI, NS, TF, JP, AT)', () => {
    const validDimensions = ['EI', 'NS', 'TF', 'JP', 'AT'];
    questions.forEach((q) => {
      expect(validDimensions).toContain(q.dimension);
    });
  });

  it('all questions should have texts in th and en', () => {
    questions.forEach((q) => {
      expect(q.th).toBeDefined();
      expect(q.en).toBeDefined();
      expect(q.th.length).toBeGreaterThan(0);
      expect(q.en.length).toBeGreaterThan(0);
    });
  });
});
