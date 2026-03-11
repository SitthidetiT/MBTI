import type { Question, Dimension } from '@/types';

// 60 MBTI questions — NERIS model (5 dimensions × 12 questions)
// direction: 1 = scores for pole A (E/N/T/J/A), -1 = scores for pole B (I/S/F/P/T)

export const questions: Question[] = [
  // ─── MIND: Extraversion (E) vs Introversion (I) ───
  {
    id: 1,
    dimension: 'EI',
    th: 'คุณชอบออกไปพบปะสังสรรค์กับผู้คนมากกว่าอยู่คนเดียว',
    en: 'You prefer going out and socializing over spending time alone.',
    direction: 1,
  },
  {
    id: 2,
    dimension: 'EI',
    th: 'คุณรู้สึกมีพลังงานหลังจากใช้เวลาอยู่คนเดียว',
    en: 'You feel energized after spending time alone.',
    direction: -1,
  },
  {
    id: 3,
    dimension: 'EI',
    th: 'คุณสบายใจที่จะเป็นจุดสนใจในงานสังสรรค์',
    en: 'You are comfortable being the center of attention at parties.',
    direction: 1,
  },
  {
    id: 4,
    dimension: 'EI',
    th: 'คุณมักชอบทำงานคนเดียวมากกว่าทำงานเป็นกลุ่ม',
    en: 'You usually prefer working alone rather than in groups.',
    direction: -1,
  },
  {
    id: 5,
    dimension: 'EI',
    th: 'คุณชอบพูดคุยกับคนแปลกหน้าในงานปาร์ตี้หรือกิจกรรมสังคม',
    en: 'You enjoy chatting with strangers at parties or social events.',
    direction: 1,
  },
  {
    id: 6,
    dimension: 'EI',
    th: 'คุณต้องการเวลาส่วนตัวเพื่อฟื้นฟูพลังงานหลังจากพบผู้คนมาก',
    en: 'You need personal time to recharge after being around many people.',
    direction: -1,
  },
  {
    id: 7,
    dimension: 'EI',
    th: 'คุณเริ่มบทสนทนาได้ง่ายในสถานการณ์ใหม่ๆ',
    en: 'You easily initiate conversations in new situations.',
    direction: 1,
  },
  {
    id: 8,
    dimension: 'EI',
    th: 'คุณมักคิดก่อนพูด และไม่รีบแบ่งปันความคิด',
    en: "You tend to think before speaking and don't rush to share your thoughts.",
    direction: -1,
  },
  {
    id: 9,
    dimension: 'EI',
    th: 'คุณสนุกกับการมีเพื่อนหลายคนมากกว่ามีเพื่อนสนิทแค่ไม่กี่คน',
    en: 'You enjoy having many friends rather than a few close ones.',
    direction: 1,
  },
  {
    id: 10,
    dimension: 'EI',
    th: 'คุณรู้สึกเหนื่อยหลังจากอยู่ในงานสังสรรค์นานๆ',
    en: 'You feel drained after long social gatherings.',
    direction: -1,
  },
  {
    id: 11,
    dimension: 'EI',
    th: 'คุณชอบที่จะแสดงออกและพูดคุยถึงความคิดของตัวเองในกลุ่ม',
    en: 'You like expressing yourself and sharing your ideas with groups.',
    direction: 1,
  },
  {
    id: 12,
    dimension: 'EI',
    th: 'คุณชอบทำกิจกรรมเงียบๆ เช่น อ่านหนังสือหรือดูหนัง มากกว่าออกไปข้างนอก',
    en: 'You prefer quiet activities like reading or watching movies over going out.',
    direction: -1,
  },

  // ─── ENERGY: Intuition (N) vs Observant/Sensing (S) ───
  {
    id: 13,
    dimension: 'NS',
    th: 'คุณมักจินตนาการถึงความเป็นไปได้มากกว่าโฟกัสที่รายละเอียดจริง',
    en: 'You often imagine possibilities rather than focusing on current realities.',
    direction: 1,
  },
  {
    id: 14,
    dimension: 'NS',
    th: 'คุณให้ความสำคัญกับประสบการณ์จริงและข้อเท็จจริงที่จับต้องได้',
    en: 'You value hands-on experience and concrete facts.',
    direction: -1,
  },
  {
    id: 15,
    dimension: 'NS',
    th: 'คุณชอบคิดเชิงนามธรรมและทฤษฎีมากกว่าเรื่องปฏิบัติ',
    en: 'You prefer thinking about abstract concepts and theories over practical matters.',
    direction: 1,
  },
  {
    id: 16,
    dimension: 'NS',
    th: 'คุณชอบงานที่มีขั้นตอนชัดเจนและผลลัพธ์ที่วัดได้',
    en: 'You prefer tasks with clear steps and measurable results.',
    direction: -1,
  },
  {
    id: 17,
    dimension: 'NS',
    th: 'คุณมองหารูปแบบและความเชื่อมโยงที่ซ่อนอยู่ในสิ่งต่างๆ',
    en: 'You look for underlying patterns and connections in things.',
    direction: 1,
  },
  {
    id: 18,
    dimension: 'NS',
    th: 'คุณให้ความสนใจกับรายละเอียดเล็กน้อยของสิ่งรอบข้าง',
    en: 'You pay close attention to the small details of your surroundings.',
    direction: -1,
  },
  {
    id: 19,
    dimension: 'NS',
    th: 'คุณมักคิดถึงอนาคตและสิ่งที่อาจเป็นไปได้ในระยะยาว',
    en: 'You often think about the future and what could be possible long-term.',
    direction: 1,
  },
  {
    id: 20,
    dimension: 'NS',
    th: 'คุณเชื่อถือสิ่งที่พิสูจน์ได้และทดสอบมาแล้วมากกว่าแนวคิดใหม่ๆ',
    en: 'You trust things that are proven and tested over new, unproven ideas.',
    direction: -1,
  },
  {
    id: 21,
    dimension: 'NS',
    th: 'คุณสนุกกับการถกเถียงเรื่องแนวคิดและทฤษฎีที่ซับซ้อน',
    en: 'You enjoy debating complex ideas and theoretical concepts.',
    direction: 1,
  },
  {
    id: 22,
    dimension: 'NS',
    th: 'คุณมักนำเสนอข้อมูลแบบตรงไปตรงมาและชัดเจน',
    en: 'You usually present information in a direct and straightforward manner.',
    direction: -1,
  },
  {
    id: 23,
    dimension: 'NS',
    th: 'คุณรู้สึกดึงดูดกับสิ่งที่แปลกใหม่และแตกต่างจากเดิม',
    en: 'You are drawn to things that are novel and different from the norm.',
    direction: 1,
  },
  {
    id: 24,
    dimension: 'NS',
    th: 'คุณเชื่อว่าวิธีที่ได้ผลในอดีตมักจะยังดีในปัจจุบัน',
    en: 'You believe that methods that worked in the past are usually still good now.',
    direction: -1,
  },

  // ─── NATURE: Thinking (T) vs Feeling (F) ───
  {
    id: 25,
    dimension: 'TF',
    th: 'คุณตัดสินใจโดยอาศัยตรรกะและเหตุผลมากกว่าความรู้สึก',
    en: 'You make decisions based on logic and reason rather than feelings.',
    direction: 1,
  },
  {
    id: 26,
    dimension: 'TF',
    th: 'คุณคำนึงถึงความรู้สึกของผู้อื่นเมื่อต้องตัดสินใจ',
    en: "You consider others' feelings when making decisions.",
    direction: -1,
  },
  {
    id: 27,
    dimension: 'TF',
    th: 'คุณสามารถวิจารณ์ผู้อื่นได้อย่างตรงไปตรงมาโดยไม่รู้สึกผิด',
    en: 'You can criticize others straightforwardly without feeling guilty.',
    direction: 1,
  },
  {
    id: 28,
    dimension: 'TF',
    th: 'คุณให้ความสำคัญกับความกลมเกลียวในกลุ่มมากกว่าการยึดหลักการ',
    en: 'You value group harmony more than sticking strictly to principles.',
    direction: -1,
  },
  {
    id: 29,
    dimension: 'TF',
    th: 'คุณมองปัญหาอย่างเป็นกลางและตัดอารมณ์ออกได้',
    en: 'You can look at problems objectively and separate emotions from them.',
    direction: 1,
  },
  {
    id: 30,
    dimension: 'TF',
    th: 'ความสัมพันธ์ระหว่างบุคคลมีความสำคัญต่อคุณมากกว่าประสิทธิภาพ',
    en: 'Personal relationships matter more to you than efficiency.',
    direction: -1,
  },
  {
    id: 31,
    dimension: 'TF',
    th: 'คุณชอบการอภิปรายที่เน้นข้อเท็จจริงและตรรกะ',
    en: 'You prefer discussions focused on facts and logic.',
    direction: 1,
  },
  {
    id: 32,
    dimension: 'TF',
    th: 'คุณรู้สึกเห็นอกเห็นใจผู้อื่นได้ง่ายในสถานการณ์ที่ยากลำบาก',
    en: 'You easily empathize with others in difficult situations.',
    direction: -1,
  },
  {
    id: 33,
    dimension: 'TF',
    th: 'ความถูกต้องสำคัญกว่าการทำให้ทุกคนรู้สึกดี',
    en: 'Being correct is more important than making everyone feel good.',
    direction: 1,
  },
  {
    id: 34,
    dimension: 'TF',
    th: 'คุณรู้สึกไม่สบายใจเมื่อต้องตัดสินใจที่อาจทำให้ผู้อื่นเจ็บปวด',
    en: 'You feel uncomfortable making decisions that might hurt others.',
    direction: -1,
  },
  {
    id: 35,
    dimension: 'TF',
    th: 'คุณสามารถแยกแยะงานกับอารมณ์ส่วนตัวได้อย่างชัดเจน',
    en: 'You can clearly separate work from personal emotions.',
    direction: 1,
  },
  {
    id: 36,
    dimension: 'TF',
    th: 'คุณมักช่วยเหลือผู้อื่นก่อนโดยไม่ต้องรอให้เขาขอ',
    en: 'You often help others before being asked.',
    direction: -1,
  },

  // ─── TACTICS: Judging (J) vs Prospecting/Perceiving (P) ───
  {
    id: 37,
    dimension: 'JP',
    th: 'คุณชอบวางแผนล่วงหน้าและทำตามแผนที่วางไว้',
    en: 'You prefer planning ahead and sticking to your plans.',
    direction: 1,
  },
  {
    id: 38,
    dimension: 'JP',
    th: 'คุณชอบปล่อยให้ทุกอย่างเป็นไปแบบ spontaneous และยืดหยุ่น',
    en: 'You prefer keeping things spontaneous and flexible.',
    direction: -1,
  },
  {
    id: 39,
    dimension: 'JP',
    th: 'คุณรู้สึกสบายใจเมื่อทุกอย่างเป็นระเบียบและมีโครงสร้าง',
    en: 'You feel comfortable when everything is organized and structured.',
    direction: 1,
  },
  {
    id: 40,
    dimension: 'JP',
    th: 'คุณชอบทิ้งตัวเลือกไว้และไม่รีบสรุป',
    en: 'You like keeping options open and avoid rushing to conclusions.',
    direction: -1,
  },
  {
    id: 41,
    dimension: 'JP',
    th: 'คุณรู้สึกกังวลเมื่องานยังไม่เสร็จสิ้น',
    en: 'You feel anxious when tasks are left unfinished.',
    direction: 1,
  },
  {
    id: 42,
    dimension: 'JP',
    th: 'คุณทำงานได้ดีภายใต้ความกดดันของ deadline แบบ last-minute',
    en: 'You work well under the pressure of last-minute deadlines.',
    direction: -1,
  },
  {
    id: 43,
    dimension: 'JP',
    th: 'คุณชอบทำตาม schedule และรายการ to-do ที่วางไว้',
    en: 'You like following a schedule and maintaining a to-do list.',
    direction: 1,
  },
  {
    id: 44,
    dimension: 'JP',
    th: 'คุณชอบการเปลี่ยนแปลงแบบกะทันหันและสถานการณ์ที่ไม่คาดคิด',
    en: 'You enjoy unexpected changes and spontaneous situations.',
    direction: -1,
  },
  {
    id: 45,
    dimension: 'JP',
    th: 'คุณชอบให้ทุกอย่างตัดสินใจเสร็จสิ้นก่อนดำเนินการ',
    en: 'You like having everything decided before taking action.',
    direction: 1,
  },
  {
    id: 46,
    dimension: 'JP',
    th: 'คุณมักเริ่มโปรเจคหลายอย่างพร้อมกันโดยไม่รีบเสร็จ',
    en: 'You often start multiple projects simultaneously without rushing to finish them.',
    direction: -1,
  },
  {
    id: 47,
    dimension: 'JP',
    th: 'สถานที่ของคุณมักเป็นระเบียบและจัดการได้ดี',
    en: 'Your living space is usually tidy and well-organized.',
    direction: 1,
  },
  {
    id: 48,
    dimension: 'JP',
    th: 'คุณมักปรับตัวได้เร็วเมื่อแผนเปลี่ยนแปลงกะทันหัน',
    en: 'You adapt quickly when plans change unexpectedly.',
    direction: -1,
  },

  // ─── IDENTITY: Assertive (A) vs Turbulent (T) ───
  {
    id: 49,
    dimension: 'AT',
    th: 'คุณมั่นใจในตัวเองและไม่กังวลเกี่ยวกับสิ่งที่ผู้อื่นคิดถึงคุณ',
    en: "You are confident in yourself and don't worry about what others think of you.",
    direction: 1,
  },
  {
    id: 50,
    dimension: 'AT',
    th: 'คุณมักวิพากษ์วิจารณ์ตัวเองหลังจากทำสิ่งต่างๆ',
    en: 'You often criticize yourself after doing things.',
    direction: -1,
  },
  {
    id: 51,
    dimension: 'AT',
    th: 'คุณรู้สึกสงบและไม่ค่อยเครียดกับปัญหาต่างๆ',
    en: 'You feel calm and rarely get stressed by problems.',
    direction: 1,
  },
  {
    id: 52,
    dimension: 'AT',
    th: 'คุณมักกังวลถึงผลที่อาจเกิดขึ้นก่อนตัดสินใจ',
    en: 'You often worry about potential outcomes before making decisions.',
    direction: -1,
  },
  {
    id: 53,
    dimension: 'AT',
    th: 'คุณพอใจในความสำเร็จของตัวเองโดยไม่ต้องการคำยืนยันจากผู้อื่น',
    en: 'You are satisfied with your achievements without needing validation from others.',
    direction: 1,
  },
  {
    id: 54,
    dimension: 'AT',
    th: 'ความผิดพลาดเล็กน้อยทำให้คุณรู้สึกกังวลนานกว่าที่ควร',
    en: 'Minor mistakes tend to bother you longer than they should.',
    direction: -1,
  },
  {
    id: 55,
    dimension: 'AT',
    th: 'คุณรู้สึกมั่นคงทางอารมณ์แม้ในสถานการณ์ที่กดดัน',
    en: 'You feel emotionally stable even in high-pressure situations.',
    direction: 1,
  },
  {
    id: 56,
    dimension: 'AT',
    th: 'คุณมักตั้งค่ามาตรฐานสำหรับตัวเองสูงกว่าความเป็นจริง',
    en: 'You often set standards for yourself that are higher than realistic.',
    direction: -1,
  },
  {
    id: 57,
    dimension: 'AT',
    th: 'คุณไม่ค่อยครุ่นคิดถึงสิ่งที่ผ่านไปแล้วหรือสิ่งที่อาจเกิดขึ้น',
    en: 'You rarely dwell on things that have passed or things that might happen.',
    direction: 1,
  },
  {
    id: 58,
    dimension: 'AT',
    th: 'คุณรู้สึกกดดันกับตัวเองเมื่อยังไม่บรรลุเป้าหมาย',
    en: "You feel pressured when you haven't yet achieved your goals.",
    direction: -1,
  },
  {
    id: 59,
    dimension: 'AT',
    th: 'คุณรู้สึกมั่นใจในทักษะและความสามารถของตัวเอง',
    en: 'You feel confident in your skills and abilities.',
    direction: 1,
  },
  {
    id: 60,
    dimension: 'AT',
    th: 'คุณมักรู้สึกว่าตัวเองสามารถทำได้ดีกว่านี้เสมอ',
    en: 'You often feel that you could always do better.',
    direction: -1,
  },
];

export function shuffleQuestions(qs: Question[]): Question[] {
  const byDimension: Record<Dimension, Question[]> = { EI: [], NS: [], TF: [], JP: [], AT: [] };
  qs.forEach((q) => byDimension[q.dimension].push(q));

  const shuffled: Question[] = [];
  const keys = Object.keys(byDimension) as Dimension[];
  const maxLen = Math.max(...keys.map((k) => byDimension[k].length));
  for (let i = 0; i < maxLen; i++) {
    keys.forEach((k) => {
      if (byDimension[k][i]) shuffled.push(byDimension[k][i]);
    });
  }
  return shuffled;
}
