import type { Question } from '@/types';

export const careerQuestions: Question[] = [
  // E vs I (Energy/Social environment at work)
  {
    id: 201,
    dimension: 'EI',
    th: 'ที่ทำงาน ฉันชอบการประชุมระดมสมองกับทีมมากกว่าการนั่งคิดงานเงียบๆ คนเดียว',
    en: 'At work, I prefer brainstorming with the team over working quietly alone.',
    direction: 1, // Agree = E
    mode: 'both',
  },
  {
    id: 202,
    dimension: 'EI',
    th: 'หลังจากทำงานที่ต้องพบปะผู้คนเยอะๆ ฉันรู้สึกหมดพลังและต้องการเวลาพักผ่อนส่วนตัว',
    en: 'After working with many people, I feel drained and need alone time to recharge.',
    direction: -1, // Agree = I
    mode: 'both',
  },
  {
    id: 203,
    dimension: 'EI',
    th: 'ฉันมักจะเป็นคนเริ่มบทสนทนาและสร้างมิตรภาพใหม่ๆ กับเพื่อนร่วมงานอยู่เสมอ',
    en: 'I often start conversations and build new connections with coworkers.',
    direction: 1, // Agree = E
    mode: 'both',
  },
  {
    id: 204,
    dimension: 'EI',
    th: 'ฉันชอบงานที่สามารถมีสมาธิทำอย่างต่อเนื่องโดยไม่มีคนมาขัดจังหวะ',
    en: 'I prefer work where I can focus continuously without interruptions.',
    direction: -1, // Agree = I
    mode: 'both',
  },

  // N vs S (Information/Processing at work)
  {
    id: 205,
    dimension: 'NS',
    th: 'ในการทำงาน ฉันชอบคิดถึงกลยุทธ์ระยะยาวและไอเดียใหม่ๆ มากกว่าการลงลึกในรายละเอียด',
    en: 'At work, I prefer long-term strategy and new ideas over diving into specific details.',
    direction: 1, // Agree = N
    mode: 'both',
  },
  {
    id: 206,
    dimension: 'NS',
    th: 'ฉันเก่งในการจำข้อเท็จจริง ตัวเลข และข้อมูลที่เป็นรูปธรรม',
    en: 'I am good at remembering facts, numbers, and concrete data.',
    direction: -1, // Agree = S
    mode: 'both',
  },
  {
    id: 207,
    dimension: 'NS',
    th: 'ฉันมักจะพบวิธีใหม่ๆ ในการแก้ปัญหาแบบเดิมๆ ในที่ทำงาน',
    en: 'I often find new ways to solve old problems at work.',
    direction: 1, // Agree = N
    mode: 'both',
  },
  {
    id: 208,
    dimension: 'NS',
    th: 'ฉันชอบเห็นตัวอย่างที่ชัดเจนหรือคู่มือปฏิบัติงาน มากกว่าฟังทฤษฎีหรือแนวคิด',
    en: 'I prefer clear examples or manuals over theories or concepts.',
    direction: -1, // Agree = S
    mode: 'both',
  },

  // T vs F (Decision Making/Values at work)
  {
    id: 209,
    dimension: 'TF',
    th: 'เมื่อต้องตัดสินใจในงาน ฉันยึดหลักตรรกะและประสิทธิภาพเป็นหลัก แม้จะขัดใจใครบางคน',
    en: 'When making work decisions, I prioritize logic and efficiency, even if it upsets someone.',
    direction: 1, // Agree = T
    mode: 'both',
  },
  {
    id: 210,
    dimension: 'TF',
    th: 'ความสามัคคีและความรู้สึกของเพื่อนร่วมงานมีความสำคัญมากกว่าการทำงานให้เสร็จเร็วแต่อึดอัดใจ',
    en: "Team harmony and coworkers' feelings are more important than getting work done fast but awkwardly.",
    direction: -1, // Agree = F
    mode: 'both',
  },
  {
    id: 211,
    dimension: 'TF',
    th: 'การให้ฟีดแบ็ก (Feedback) ตามความจริงอย่างตรงไปตรงมา ดีที่สุดสำหรับการพัฒนางาน',
    en: 'Giving honest, straightforward feedback is the best for improving work.',
    direction: 1, // Agree = T
    mode: 'both',
  },
  {
    id: 212,
    dimension: 'TF',
    th: 'ฉันมักจะตัดสินใจในงานโดยนำผลกระทบที่จะเกิดขึ้นกับผู้คนมาพิจารณาก่อนเสมอ',
    en: 'I usually make work decisions by first considering the impact on people.',
    direction: -1, // Agree = F
    mode: 'both',
  },

  // J vs P (Tactics/Planning at work)
  {
    id: 213,
    dimension: 'JP',
    th: 'ฉันทำงานได้ดีที่สุดเมื่อมีแผนงานที่ชัดเจนและกำหนดส่งมอบที่แน่นอน',
    en: 'I work best when there is a clear plan and a strict deadline.',
    direction: 1, // Agree = J
    mode: 'both',
  },
  {
    id: 214,
    dimension: 'JP',
    th: 'ฉันชอบงานที่ยืดหยุ่น สามารถปรับเปลี่ยนวิธีการได้ตลอดเวลา',
    en: 'I like flexible work where methods can be adapted at any time.',
    direction: -1, // Agree = P
    mode: 'both',
  },
  {
    id: 215,
    dimension: 'JP',
    th: 'ฉันมักจะทำงานเสร็จก่อนกำหนด เพื่อหลีกเลี่ยงความเครียดในนาทีสุดท้าย',
    en: 'I usually finish tasks before the deadline to avoid last-minute stress.',
    direction: 1, // Agree = J
    mode: 'both',
  },
  {
    id: 216,
    dimension: 'JP',
    th: 'ฉันรู้สึกมีพลังและได้ไอเดียดีๆ ขับเคลื่อนงานเมื่อใกล้วันกำหนดส่ง',
    en: 'I feel energized and get great ideas to drive the work forward near the deadline.',
    direction: -1, // Agree = P
    mode: 'both',
  },

  // A vs T (Identity/Stress at work)
  {
    id: 217,
    dimension: 'AT',
    th: 'เมื่อเกิดปัญหาหน้างาน ฉันสามารถตั้งสติและรับมือได้โดยไม่ตื่นตระหนก',
    en: 'When work problems arise, I can stay calm and handle them without panicking.',
    direction: 1, // Agree = A
    mode: 'both',
  },
  {
    id: 218,
    dimension: 'AT',
    th: 'ฉันมักจะกังวลว่าผลงานของฉันจะออกมาไม่ดีพอ หรือคนอื่นจะคิดอย่างไรกับงานของฉัน',
    en: "I often worry my work isn't good enough or what others think of my work.",
    direction: -1, // Agree = T
    mode: 'both',
  },
  {
    id: 219,
    dimension: 'AT',
    th: 'แม้ว่าฉันจะทำผิดพลาดในงาน ฉันสามารถปล่อยวางและมูฟออนได้อย่างรวดเร็ว',
    en: 'Even if I make a mistake at work, I can let it go and move on quickly.',
    direction: 1, // Agree = A
    mode: 'both',
  },
  {
    id: 220,
    dimension: 'AT',
    th: 'ฉันเป็นคนชอบความสมบูรณ์แบบ (Perfectionist) และกดดันตัวเองให้ต้องทำให้ดีที่สุดเสมอ',
    en: 'I am a perfectionist and push myself to always do my best.',
    direction: -1, // Agree = T
    mode: 'both',
  },
];
