import type { LoveQuestion } from '@/types';

/**
 * 20 Love Type questions — 4 dimensions × 5 questions
 * Dimensions:
 *   LF — Leader (L) vs Follower (F) : who leads in the relationship
 *   AC — Amorous (A) vs Cautious (C) : approach to opening up romantically
 *   PR — Passionate (P) vs Rational (R) : heart vs head in love decisions
 *   EO — Expressive (E) vs Observant (O) : how openly feelings are shown
 *
 * direction: 1 = YES scores first pole (L/A/P/E), -1 = YES scores second pole (F/C/R/O)
 */
export const loveQuestions: LoveQuestion[] = [
  // ─── LF: Leader vs Follower ──────────────────────────────────────────────
  {
    id: 1,
    dimension: 'LF',
    th: 'ในความสัมพันธ์ คุณมักเป็นฝ่ายชวนออกเดทและวางแผนกิจกรรมต่างๆ อยู่เสมอ',
    en: 'In a relationship, you tend to be the one who plans dates and initiates activities.',
    direction: 1,
  },
  {
    id: 2,
    dimension: 'LF',
    th: 'คุณรู้สึกสบายใจเมื่อปล่อยให้แฟนเป็นคนตัดสินใจว่าจะไปไหนหรือทำอะไร',
    en: 'You feel comfortable letting your partner decide where to go and what to do.',
    direction: -1,
  },
  {
    id: 3,
    dimension: 'LF',
    th: 'เมื่อชอบใคร คุณมักเป็นฝ่ายแสดงออกหรือบอกความรู้สึกก่อนเสมอ',
    en: 'When you like someone, you are usually the first to express your feelings or make a move.',
    direction: 1,
  },
  {
    id: 4,
    dimension: 'LF',
    th: 'คุณชอบให้คู่ของคุณเป็นคนกำหนดจังหวะและทิศทางของความสัมพันธ์',
    en: 'You prefer your partner to set the pace and direction of the relationship.',
    direction: -1,
  },
  {
    id: 5,
    dimension: 'LF',
    th: 'คุณมักรับบทนำในการแก้ปัญหาหรือตัดสินใจสิ่งสำคัญในความสัมพันธ์',
    en: 'You naturally take the lead when solving problems or making important decisions together.',
    direction: 1,
  },

  // ─── AC: Amorous vs Cautious ─────────────────────────────────────────────
  {
    id: 6,
    dimension: 'AC',
    th: 'คุณมักตกหลุมรักได้ง่ายและค่อนข้างเร็ว',
    en: 'You tend to fall in love easily and fairly quickly.',
    direction: 1,
  },
  {
    id: 7,
    dimension: 'AC',
    th: 'คุณต้องใช้เวลานานมากกว่าจะเริ่มรู้สึกโรแมนติกกับใครสักคน',
    en: 'It takes you a long time before you start developing romantic feelings for someone.',
    direction: -1,
  },
  {
    id: 8,
    dimension: 'AC',
    th: 'เมื่อมีคนที่ถูกใจ คุณรู้สึกตื่นเต้นและกระตือรือร้นอยากรู้จักเขาให้มากขึ้น',
    en: 'When you have a crush, you feel noticeably excited and eager to get to know them more.',
    direction: 1,
  },
  {
    id: 9,
    dimension: 'AC',
    th: 'คุณชอบรู้จักใครสักคนในฐานะเพื่อนก่อน และค่อยพัฒนาเป็นความรักทีหลัง',
    en: 'You prefer to know someone well as a friend before considering pursuing a romance.',
    direction: -1,
  },
  {
    id: 10,
    dimension: 'AC',
    th: 'คุณเปิดรับการเริ่มต้นความสัมพันธ์ใหม่ได้อยู่เสมอเมื่อมีโอกาส',
    en: 'You are generally open to exploring new romantic connections when the opportunity arises.',
    direction: 1,
  },

  // ─── PR: Passionate vs Rational ──────────────────────────────────────────
  {
    id: 11,
    dimension: 'PR',
    th: 'คุณตัดสินใจเรื่องความรักด้วยหัวใจมากกว่าเหตุผล',
    en: 'You make romantic decisions by following your heart rather than logic.',
    direction: 1,
  },
  {
    id: 12,
    dimension: 'PR',
    th: 'ก่อนจะคบหาใคร คุณมักประเมินก่อนว่าชีวิตของทั้งคู่เข้ากันได้จริงหรือไม่',
    en: 'Before committing to someone, you carefully evaluate whether your lives are practically compatible.',
    direction: -1,
  },
  {
    id: 13,
    dimension: 'PR',
    th: 'อารมณ์ความรู้สึกเป็นสิ่งที่ขับเคลื่อนการกระทำของคุณในความสัมพันธ์มากที่สุด',
    en: 'Your emotions are the strongest driver of your actions within a romantic relationship.',
    direction: 1,
  },
  {
    id: 14,
    dimension: 'PR',
    th: 'คุณให้คุณค่ากับเป้าหมายร่วมและความเข้ากันในชีวิตมากกว่าความตื่นเต้นหรือเสน่หา',
    en: 'You value shared life goals and compatibility more than passion or emotional chemistry.',
    direction: -1,
  },
  {
    id: 15,
    dimension: 'PR',
    th: 'เมื่อมีความรู้สึก คุณสามารถผูกพันกับใครสักคนได้อย่างลึกซึ้งและรวดเร็ว',
    en: 'Once feelings develop, you can become deeply attached to someone very quickly.',
    direction: 1,
  },

  // ─── EO: Expressive vs Observant ─────────────────────────────────────────
  {
    id: 16,
    dimension: 'EO',
    th: 'คุณแสดงความรู้สึกและความรักต่อแฟนได้อย่างเปิดเผย ตรงไปตรงมา',
    en: 'You openly and directly express your feelings and affection to your partner.',
    direction: 1,
  },
  {
    id: 17,
    dimension: 'EO',
    th: 'คุณมักเก็บความรู้สึกโรแมนติกของตัวเองไว้ในใจ แม้จะอยู่ในความสัมพันธ์ที่ใกล้ชิด',
    en: 'You tend to keep your romantic feelings private, even in close relationships.',
    direction: -1,
  },
  {
    id: 18,
    dimension: 'EO',
    th: 'คนรอบข้างมักสังเกตได้ว่าคุณกำลังตกหลุมรักอยู่ เพราะคุณแสดงออกให้เห็น',
    en: 'People around you can usually tell when you are in love because you show it outwardly.',
    direction: 1,
  },
  {
    id: 19,
    dimension: 'EO',
    th: 'คุณชอบแสดงความรักผ่านการกระทำที่ใส่ใจอย่างเงียบๆ มากกว่าการพูดหรือแสดงออก',
    en: 'You prefer showing love through quiet, thoughtful actions rather than words or open display.',
    direction: -1,
  },
  {
    id: 20,
    dimension: 'EO',
    th: 'คุณชอบบอกแฟนว่าตอนนี้รู้สึกอย่างไร อยากให้เขารับรู้ความรู้สึกของคุณตลอดเวลา',
    en: 'You enjoy telling your partner exactly how you feel in the moment, wanting them to always know.',
    direction: 1,
  },
];

export function getLoveDimScores(
  answers: Record<number, boolean>
): Record<'LF' | 'AC' | 'PR' | 'EO', { first: number; second: number }> {
  const scores = {
    LF: { first: 0, second: 0 },
    AC: { first: 0, second: 0 },
    PR: { first: 0, second: 0 },
    EO: { first: 0, second: 0 },
  };
  loveQuestions.forEach((q) => {
    const answered = answers[q.id];
    if (answered === undefined) return;
    if (answered) {
      if (q.direction === 1) scores[q.dimension].first++;
      else scores[q.dimension].second++;
    }
  });
  return scores;
}

export function calculateLoveType(answers: Record<number, boolean>): string {
  const s = getLoveDimScores(answers);
  const L = s.LF.first >= s.LF.second ? 'L' : 'F';
  const A = s.AC.first >= s.AC.second ? 'A' : 'C';
  const P = s.PR.first >= s.PR.second ? 'P' : 'R';
  const E = s.EO.first >= s.EO.second ? 'E' : 'O';
  return `${L}${A}${P}${E}`;
}

/** Returns percentage (0–100) towards first pole for each dimension */
export function getLoveDimPercents(
  answers: Record<number, boolean>
): Record<'LF' | 'AC' | 'PR' | 'EO', number> {
  const s = getLoveDimScores(answers);
  const pct = (dim: { first: number; second: number }) => {
    const total = dim.first + dim.second;
    if (total === 0) return 50;
    return Math.round((dim.first / total) * 100);
  };
  return { LF: pct(s.LF), AC: pct(s.AC), PR: pct(s.PR), EO: pct(s.EO) };
}
