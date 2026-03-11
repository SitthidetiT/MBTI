import type {
  TypeCode,
  Group,
  Lang,
  GroupColors,
  PersonalityData,
  DimScores,
  Identity,
} from '@/types';

export const GROUP_COLORS: Record<Group, GroupColors> = {
  analysts: { bg: '#f3eafd', accent: '#8b5cf6', light: '#ede9fe' },
  diplomats: { bg: '#e6f7ee', accent: '#10b981', light: '#d1fae5' },
  sentinels: { bg: '#e1effe', accent: '#3b82f6', light: '#dbeafe' },
  explorers: { bg: '#fefce8', accent: '#f59e0b', light: '#fef9c3' },
};

export const personalities: Record<TypeCode, PersonalityData> = {
  // ─── ANALYSTS ───
  INTJ: {
    group: 'analysts',
    emoji: '🧠',
    nickname: { th: 'สถาปนิก', en: 'Architect' },
    overview: {
      th: 'INTJ เป็นนักวางกลยุทธ์ที่มีวิสัยทัศน์กว้างไกล พวกเขามองเห็นรูปแบบที่ซ่อนอยู่ในทุกสิ่ง มีความมุ่งมั่นอย่างแรงกล้าในการบรรลุเป้าหมาย และเชื่อมั่นในพลังของสติปัญญา เป็นคนที่ทำงานอย่างเป็นระบบ วางแผนทุกขั้นตอนอย่างรอบคอบ และไม่ยอมรับสิ่งกีดขวางอย่างง่ายดาย พวกเขาชอบความท้าทายทางสติปัญญาและมองหาวิธีปรับปรุงระบบอยู่เสมอ',
      en: 'INTJs are visionary strategists who see hidden patterns everywhere. They possess a fierce determination to achieve their goals and place immense trust in the power of intellect. Systematic workers who plan every step meticulously, they refuse to accept obstacles easily. They thrive on intellectual challenges and constantly seek ways to improve systems and processes around them.',
    },
    strengths: {
      th: [
        'คิดเชิงกลยุทธ์ได้ยอดเยี่ยม',
        'มุ่งมั่นและมีวินัยสูง',
        'วิเคราะห์ข้อมูลได้แม่นยำ',
        'เปิดรับแนวคิดใหม่ที่มีเหตุผล',
        'เชื่อมั่นในตัวเองสูง',
        'มีวิสัยทัศน์ระยะยาว',
      ],
      en: [
        'Excellent strategic thinking',
        'Highly determined and disciplined',
        'Accurate data analysis',
        'Open to logical new ideas',
        'High self-confidence',
        'Long-term vision',
      ],
    },
    weaknesses: {
      th: [
        'อาจดูเย็นชาหรือห่างเหิน',
        'ยากที่จะยอมรับความผิดพลาด',
        'มีแนวโน้มโอ้อวดทางสติปัญญา',
        'ยากต่อการเปิดเผยอารมณ์',
        'อาจดูถูกคนที่คิดช้ากว่า',
      ],
      en: [
        'May appear cold or distant',
        'Difficulty admitting mistakes',
        'Tendency toward intellectual arrogance',
        'Hard to express emotions',
        'May look down on slower thinkers',
      ],
    },
    workStyle: {
      th: [
        'ทำงานอย่างเป็นระบบและมีแผนชัดเจน',
        'ชอบทำงานอิสระมากกว่าทำงานกลุ่ม',
        'มุ่งเน้นประสิทธิภาพสูงสุด',
        'สร้างกลยุทธ์ระยะยาวได้ดี',
        'ไม่ชอบงานซ้ำซากหรือไม่มีจุดหมาย',
      ],
      en: [
        'Works systematically with clear plans',
        'Prefers independent work over teams',
        'Focuses on maximum efficiency',
        'Excels at long-term strategy',
        'Dislikes repetitive or purposeless tasks',
      ],
    },
    careers: {
      th: [
        'วิศวกรซอฟต์แวร์',
        'นักวิทยาศาสตร์ข้อมูล',
        'สถาปนิกระบบ',
        'ผู้บริหาร CEO',
        'นักวิจัย',
        'ที่ปรึกษาธุรกิจ',
      ],
      en: [
        'Software Engineer',
        'Data Scientist',
        'Systems Architect',
        'CEO',
        'Researcher',
        'Business Consultant',
      ],
    },
    relationships: {
      th: 'INTJ ต้องการคู่ชีวิตที่ฉลาดและเป็นอิสระ พวกเขาแสดงความรักผ่านการกระทำมากกว่าคำพูด ให้ความสำคัญกับความซื่อสัตย์และความลึกซึ้งเหนือสิ่งอื่นใด',
      en: 'INTJs need intelligent, independent partners. They show love through actions rather than words, valuing honesty and depth above all else.',
    },
    growthAreas: {
      th: [
        'ฝึกแสดงความเห็นอกเห็นใจมากขึ้น',
        'เรียนรู้ที่จะยอมรับมุมมองที่แตกต่าง',
        'พัฒนาทักษะการสื่อสารทางอารมณ์',
        'ลดความสมบูรณ์แบบนิยมลงบ้าง',
      ],
      en: [
        'Practice showing more empathy',
        'Learn to accept different perspectives',
        'Develop emotional communication skills',
        'Reduce perfectionist tendencies',
      ],
    },
    famousPeople: ['Elon Musk', 'Nikola Tesla', 'Isaac Newton', 'Michelle Obama'],
  },
  INTP: {
    group: 'analysts',
    emoji: '🔬',
    nickname: { th: 'นักตรรกะ', en: 'Logician' },
    overview: {
      th: 'INTP เป็นนักคิดเชิงนวัตกรรมที่มีความกระหายในความรู้อย่างไม่สิ้นสุด ชอบทฤษฎีและตรรกะ มักหมกมุ่นกับความคิดและการแก้ปัญหาที่ซับซ้อน พวกเขาสร้างแบบจำลองทางความคิดที่ซับซ้อนเพื่อทำความเข้าใจโลก และมีความสามารถพิเศษในการมองเห็นข้อบกพร่องในระบบตรรกะ',
      en: 'INTPs are innovative thinkers with an unquenchable thirst for knowledge. They love theory and logic, getting absorbed in complex problem-solving. They build intricate mental models and have a special ability to spot flaws in logical systems.',
    },
    strengths: {
      th: [
        'คิดสร้างสรรค์ระดับอัจฉริยะ',
        'วิเคราะห์ตรรกะได้ดีเยี่ยม',
        'เรียนรู้สิ่งใหม่ได้เร็วมาก',
        'คิดนอกกรอบอย่างเป็นธรรมชาติ',
        'ซื่อตรงทางสติปัญญา',
      ],
      en: [
        'Genius-level creative thinking',
        'Excellent logical analysis',
        'Very fast learner',
        'Naturally thinks outside the box',
        'Intellectual honesty',
      ],
    },
    weaknesses: {
      th: [
        'ไม่ชอบกฎเกณฑ์ที่ไร้เหตุผล',
        'ขาดความเป็นระเบียบ',
        'ลังเลในการตัดสินใจ',
        'อาจดูไม่สนใจคนรอบข้าง',
        'ยากที่จะลงมือทำจริง',
      ],
      en: [
        'Dislikes irrational rules',
        'Disorganized',
        'Indecisive',
        'May seem indifferent',
        'Difficulty taking action',
      ],
    },
    workStyle: {
      th: [
        'ชอบแก้ปัญหาที่ซับซ้อนและท้าทาย',
        'ทำงานได้ดีเมื่อมีอิสระทางความคิด',
        'ไม่ชอบโครงสร้างที่แข็งแกร่งเกินไป',
        'เก่งในการวิจัยและพัฒนา',
        'ชอบทำงานตามจังหวะของตัวเอง',
      ],
      en: [
        'Loves complex challenging problems',
        'Works best with intellectual freedom',
        'Dislikes rigid structures',
        'Excels at R&D',
        'Prefers working at own pace',
      ],
    },
    careers: {
      th: [
        'นักวิจัย',
        'สถาปนิกซอฟต์แวร์',
        'นักคณิตศาสตร์',
        'นักปรัชญา',
        'นักเขียน',
        'นักวิทยาศาสตร์',
      ],
      en: [
        'Researcher',
        'Software Architect',
        'Mathematician',
        'Philosopher',
        'Writer',
        'Scientist',
      ],
    },
    relationships: {
      th: 'INTP ชอบคู่ชีวิตที่ชวนคิดและกระตุ้นสติปัญญา ต้องการพื้นที่ส่วนตัวมาก แต่ลึกๆ แล้วภักดีต่อคนที่รักอย่างสุดหัวใจ',
      en: 'INTPs love intellectually stimulating partners. They need lots of personal space but are deeply loyal to those they love.',
    },
    growthAreas: {
      th: [
        'ฝึกการลงมือทำมากกว่าแค่คิด',
        'พัฒนาทักษะการจัดระเบียบ',
        'เรียนรู้การแสดงออกทางอารมณ์',
        'ฝึกการตัดสินใจให้เด็ดขาดขึ้น',
      ],
      en: [
        'Practice taking action instead of just thinking',
        'Develop organizational skills',
        'Learn emotional expression',
        'Practice decisive decision-making',
      ],
    },
    famousPeople: ['Albert Einstein', 'Bill Gates', 'Marie Curie', 'Larry Page'],
  },
  ENTJ: {
    group: 'analysts',
    emoji: '👑',
    nickname: { th: 'ผู้บัญชาการ', en: 'Commander' },
    overview: {
      th: 'ENTJ เป็นผู้นำที่มั่นใจและมีความสามารถสูง มองเห็นเป้าหมายระยะยาวและรู้วิธีระดมคนเพื่อบรรลุวิสัยทัศน์ พวกเขามีเสน่ห์ในการนำ ตัดสินใจได้เด็ดขาด และไม่กลัวที่จะรับผิดชอบ ปัญหาคืออาหารของพวกเขา',
      en: 'ENTJs are confident, capable leaders. They see long-term goals and know how to mobilize people to achieve their vision. Charismatic leaders who make decisive choices and never shy away from responsibility. Problems are their fuel.',
    },
    strengths: {
      th: [
        'ภาวะผู้นำที่โดดเด่น',
        'มั่นใจและเด็ดขาด',
        'วางแผนเชิงกลยุทธ์ระดับสูง',
        'มีประสิทธิภาพสูงมาก',
        'แรงบันดาลใจให้ผู้อื่นได้ดี',
      ],
      en: [
        'Outstanding leadership',
        'Confident and decisive',
        'Top-level strategic planning',
        'Extremely efficient',
        'Great at inspiring others',
      ],
    },
    weaknesses: {
      th: [
        'ใจร้อนกับความไม่มีประสิทธิภาพ',
        'อาจครอบงำผู้อื่น',
        'ยากต่อการผ่อนคลาย',
        'อาจเพิกเฉยต่อความรู้สึกคน',
        'ต้องการควบคุมทุกอย่าง',
      ],
      en: [
        'Impatient with inefficiency',
        'Can be domineering',
        'Difficulty relaxing',
        'May ignore emotions',
        'Need to control everything',
      ],
    },
    workStyle: {
      th: [
        'เป็นผู้นำโดยธรรมชาติในทุกทีม',
        'ตั้งเป้าหมายสูงและผลักดันให้สำเร็จ',
        'ชอบท้าทายระบบที่ไม่มีประสิทธิภาพ',
        'ตัดสินใจเร็วและมั่นใจ',
        'ชอบสภาพแวดล้อมที่แข่งขัน',
      ],
      en: [
        'Natural leader in every team',
        'Sets high goals and drives success',
        'Challenges inefficient systems',
        'Makes fast confident decisions',
        'Thrives in competitive environments',
      ],
    },
    careers: {
      th: [
        'ผู้บริหาร CEO',
        'ทนายความ',
        'ที่ปรึกษาธุรกิจ',
        'นักการเมือง',
        'ผู้ประกอบการ',
        'ผู้จัดการโครงการ',
      ],
      en: ['CEO', 'Lawyer', 'Business Consultant', 'Politician', 'Entrepreneur', 'Project Manager'],
    },
    relationships: {
      th: 'ENTJ เข้าสู่ความสัมพันธ์ด้วยความมุ่งมั่น ต้องการคู่ที่เท่าเทียมและท้าทายพวกเขาได้ ชอบเติบโตไปด้วยกัน',
      en: 'ENTJs enter relationships with determination. They need an equal partner who can challenge them and grow together.',
    },
    growthAreas: {
      th: [
        'ฝึกความอดทนกับผู้อื่น',
        'เรียนรู้การฟังมากกว่าสั่ง',
        'พัฒนาความยืดหยุ่นทางอารมณ์',
        'ให้เวลาผ่อนคลายมากขึ้น',
      ],
      en: [
        'Practice patience with others',
        'Learn to listen more than command',
        'Develop emotional flexibility',
        'Make more time for relaxation',
      ],
    },
    famousPeople: ['Steve Jobs', 'Margaret Thatcher', 'Napoleon Bonaparte', 'Gordon Ramsay'],
  },
  ENTP: {
    group: 'analysts',
    emoji: '⚡',
    nickname: { th: 'นักโต้วาที', en: 'Debater' },
    overview: {
      th: 'ENTP เป็นนักคิดเร็วที่ชอบท้าทายสิ่งที่มีอยู่ ชอบโต้เถียงเพื่อสำรวจมุมมองต่างๆ เบื่อง่ายและต้องการสิ่งกระตุ้นใหม่เสมอ มีความฉลาดและมีเสน่ห์ในการโน้มน้าวผู้อื่น',
      en: 'ENTPs are quick thinkers who love challenging the status quo. They debate to explore perspectives, get bored easily, and always need new stimulation. Smart and charismatic persuaders.',
    },
    strengths: {
      th: [
        'คิดเร็วและสร้างสรรค์',
        'กล้าหาญและเปิดกว้าง',
        'มีเสน่ห์ในการโน้มน้าว',
        'แก้ปัญหาเฉพาะหน้าเก่ง',
        'มีความรู้รอบตัวกว้าง',
      ],
      en: [
        'Quick and creative thinking',
        'Bold and open-minded',
        'Charismatic persuader',
        'Great at improvising solutions',
        'Wide general knowledge',
      ],
    },
    weaknesses: {
      th: [
        'ขาดความสม่ำเสมอ',
        'เบื่อง่ายในงานซ้ำซาก',
        'อาจไม่ยอมรับมุมมองผู้อื่น',
        'หยาบกระด้างโดยไม่ตั้งใจ',
        'เริ่มโปรเจคเยอะแต่ไม่ค่อยจบ',
      ],
      en: [
        'Inconsistent',
        'Gets bored with repetition',
        'Can be argumentative',
        'Unintentionally insensitive',
        'Starts many projects but rarely finishes',
      ],
    },
    workStyle: {
      th: [
        'ชอบงานที่ท้าทายและไม่ซ้ำซาก',
        'เก่งในการระดมสมอง',
        'ชอบโต้แย้งเพื่อหาทางออกใหม่',
        'ไม่ชอบกฎเกณฑ์ที่ตายตัว',
        'ทำงานได้ดีในสภาพแวดล้อมที่เปลี่ยนแปลงเร็ว',
      ],
      en: [
        'Loves challenging non-repetitive work',
        'Great at brainstorming',
        'Debates to find new solutions',
        'Dislikes rigid rules',
        'Thrives in fast-changing environments',
      ],
    },
    careers: {
      th: ['ผู้ประกอบการ', 'ทนายความ', 'นักการตลาด', 'นักวิจัย', 'นักพัฒนาผลิตภัณฑ์', 'นักเขียนบท'],
      en: ['Entrepreneur', 'Lawyer', 'Marketer', 'Researcher', 'Product Developer', 'Screenwriter'],
    },
    relationships: {
      th: 'ENTP ชอบความสัมพันธ์ที่กระตุ้นสติปัญญา ต้องการคู่ที่ตามทันและสนุกกับการถกเถียงแนวคิดใหม่ๆ',
      en: 'ENTPs love intellectually stimulating relationships. They need a partner who can keep up and enjoy debating new ideas.',
    },
    growthAreas: {
      th: [
        'ฝึกทำโปรเจคให้เสร็จก่อนเริ่มอันใหม่',
        'พัฒนาความอดทนกับรายละเอียด',
        'เรียนรู้วิธีพูดโดยไม่ทำร้ายคนอื่น',
        'ฝึกให้เกียรติความรู้สึกของผู้อื่น',
      ],
      en: [
        'Finish projects before starting new ones',
        'Develop patience with details',
        'Learn tactful communication',
        "Practice respecting others' feelings",
      ],
    },
    famousPeople: ['Mark Twain', 'Thomas Edison', 'Robert Downey Jr.', 'Sacha Baron Cohen'],
  },

  // ─── DIPLOMATS ───
  INFJ: {
    group: 'diplomats',
    emoji: '🌿',
    nickname: { th: 'ผู้สนับสนุน', en: 'Advocate' },
    overview: {
      th: 'INFJ เป็นผู้มีอุดมการณ์ที่หาได้ยาก มีสัญชาตญาณลึกซึ้งเกี่ยวกับผู้คน ต้องการสร้างความแตกต่างให้โลก มีความเห็นอกเห็นใจสูงมากและสามารถอ่านอารมณ์คนได้อย่างแม่นยำ',
      en: 'INFJs are rare idealists with deep intuition about people. They want to make a real difference in the world, possess immense empathy, and can read emotions with remarkable accuracy.',
    },
    strengths: {
      th: [
        'เห็นอกเห็นใจสูงมาก',
        'มีวิสัยทัศน์เพื่อส่วนรวม',
        'สร้างแรงบันดาลใจได้ดี',
        'ตัดสินคนได้แม่นยำ',
        'แน่วแน่ในอุดมการณ์',
      ],
      en: [
        'Extremely empathetic',
        'Visionary for greater good',
        'Great at inspiring others',
        'Perceptive about people',
        'Principled and determined',
      ],
    },
    weaknesses: {
      th: [
        'สมบูรณ์แบบนิยมสูงเกินไป',
        'เหนื่อยหมดพลังง่าย',
        'ยากต่อการเปิดใจ',
        'หลีกเลี่ยงความขัดแย้ง',
        'รู้สึกผิดหวังง่ายกับผู้อื่น',
      ],
      en: [
        'Overly perfectionist',
        'Prone to burnout',
        'Hard to open up',
        'Conflict-averse',
        'Easily disappointed in others',
      ],
    },
    workStyle: {
      th: [
        'ทำงานเพื่อเป้าหมายที่มีความหมาย',
        'ชอบช่วยเหลือพัฒนาผู้อื่น',
        'ทำงานได้ดีในสภาพแวดล้อมที่สงบ',
        'มีความคิดสร้างสรรค์สูง',
        'ไม่ชอบความขัดแย้งในที่ทำงาน',
      ],
      en: [
        'Works for meaningful goals',
        'Loves helping develop others',
        'Works well in peaceful environments',
        'Highly creative',
        'Dislikes workplace conflict',
      ],
    },
    careers: {
      th: ['นักจิตวิทยา', 'นักเขียน', 'นักสังคมสงเคราะห์', 'ครู', 'แพทย์', 'ที่ปรึกษา'],
      en: ['Psychologist', 'Writer', 'Social Worker', 'Teacher', 'Doctor', 'Counselor'],
    },
    relationships: {
      th: 'INFJ ต้องการสภาพแวดล้อมที่ปลอดภัย สามารถรับรู้อารมณ์ของคนรักได้ล่วงหน้า ต้องการความสัมพันธ์ที่ลึกซึ้งและมีความหมาย',
      en: "INFJs need safe, trusting environments. They sense partner's emotions in advance and need deep meaningful connections.",
    },
    growthAreas: {
      th: [
        'ลดมาตรฐานที่สูงเกินไปลงบ้าง',
        'เรียนรู้การดูแลตัวเองก่อน',
        'ฝึกการเผชิญหน้ากับความขัดแย้ง',
        'อย่ารับภาระทางอารมณ์ของคนอื่นมากเกินไป',
      ],
      en: [
        'Lower unrealistically high standards',
        'Learn self-care first',
        'Practice facing conflicts',
        "Don't absorb others' emotional burdens",
      ],
    },
    famousPeople: ['Martin Luther King Jr.', 'Nelson Mandela', 'Lady Gaga', 'Fyodor Dostoevsky'],
  },
  INFP: {
    group: 'diplomats',
    emoji: '🌸',
    nickname: { th: 'นักไกล่เกลี่ย', en: 'Mediator' },
    overview: {
      th: 'INFP เป็นนักอุดมคติที่มีจิตใจกว้างขวาง ขับเคลื่อนด้วยค่านิยมส่วนตัว สร้างสรรค์และมีความรู้สึกลึกซึ้ง ชอบช่วยเหลือผู้อื่นและมองโลกในแง่ดี',
      en: 'INFPs are open-hearted idealists driven by personal values. Creative and deeply feeling, they love helping others and see the good in the world.',
    },
    strengths: {
      th: [
        'เห็นอกเห็นใจอย่างลึกซึ้ง',
        'สร้างสรรค์และมีจินตนาการ',
        'มีค่านิยมชัดเจน',
        'ยืดหยุ่นและเปิดกว้าง',
        'ซื่อสัตย์กับตัวเอง',
      ],
      en: [
        'Deeply empathetic',
        'Creative and imaginative',
        'Strong personal values',
        'Flexible and open-minded',
        'True to themselves',
      ],
    },
    weaknesses: {
      th: [
        'ไม่ตื่นตัวกับเรื่องจริงจัง',
        'วิจารณ์ตัวเองมากเกินไป',
        'ขาดทิศทางบางครั้ง',
        'อ่อนไหวต่อคำวิจารณ์',
        'หลีกเลี่ยงความขัดแย้ง',
      ],
      en: [
        'Can be impractical',
        'Overly self-critical',
        'Sometimes lacks direction',
        'Sensitive to criticism',
        'Avoids conflict',
      ],
    },
    workStyle: {
      th: [
        'ทำงานเพื่อคุณค่าและความหมาย',
        'ชอบงานสร้างสรรค์และเป็นอิสระ',
        'ไม่ชอบสภาพแวดล้อมที่แข่งขัน',
        'ทำงานได้ดีเมื่อได้ช่วยเหลือผู้อื่น',
        'ต้องการ flexibility ในการทำงาน',
      ],
      en: [
        'Works for values and meaning',
        'Prefers creative independent work',
        'Dislikes competitive environments',
        'Works well when helping others',
        'Needs flexibility',
      ],
    },
    careers: {
      th: ['นักเขียน', 'นักดนตรี', 'อาจารย์', 'นักบำบัด', 'กราฟิกดีไซเนอร์', 'นักจิตวิทยา'],
      en: ['Writer', 'Musician', 'Professor', 'Therapist', 'Graphic Designer', 'Psychologist'],
    },
    relationships: {
      th: 'INFP มองหาความสัมพันธ์ที่ลึกซึ้งทางจิตใจ พร้อมอุทิศตัวเพื่อคนที่รักและต้องการคู่ที่เข้าใจโลกภายในของพวกเขา',
      en: 'INFPs seek deep meaningful connections. They devote themselves to loved ones and need a partner who understands their inner world.',
    },
    growthAreas: {
      th: [
        'ฝึกลงมือทำตามความฝัน',
        'พัฒนาทักษะการจัดการเวลา',
        'เรียนรู้การรับคำวิจารณ์อย่างสร้างสรรค์',
        'ฝึกที่จะไม่วิจารณ์ตัวเองมากเกินไป',
      ],
      en: [
        'Practice turning dreams into action',
        'Develop time management skills',
        'Learn to accept constructive criticism',
        'Stop being overly self-critical',
      ],
    },
    famousPeople: ['William Shakespeare', 'J.R.R. Tolkien', 'Princess Diana', 'Johnny Depp'],
  },
  ENFJ: {
    group: 'diplomats',
    emoji: '🌟',
    nickname: { th: 'ผู้นำการเปลี่ยนแปลง', en: 'Protagonist' },
    overview: {
      th: 'ENFJ เป็นผู้นำที่มีเสน่ห์ มีแรงบันดาลใจในการสร้างความแตกต่างให้โลก เชี่ยวชาญในการเชื่อมต่อกับผู้คนและผลักดันให้พวกเขาเติบโต',
      en: 'ENFJs are charismatic leaders passionate about making a difference. They excel at connecting with people and inspiring growth in everyone they meet.',
    },
    strengths: {
      th: [
        'มีเสน่ห์สูงมาก',
        'เห็นอกเห็นใจและอ่อนโยน',
        'สร้างแรงบันดาลใจได้ดีมาก',
        'มีทักษะการสื่อสารยอดเยี่ยม',
        'ภักดีสูงต่อคนรอบข้าง',
      ],
      en: [
        'Extremely charismatic',
        'Empathetic and gentle',
        'Excellent at inspiring',
        'Outstanding communication',
        'Deeply loyal',
      ],
    },
    weaknesses: {
      th: [
        'อ่อนไหวต่อการวิจารณ์',
        'เสียสละตัวเองมากเกินไป',
        'ยากต่อการตัดสินใจที่กระทบผู้อื่น',
        'อาจเป็นคนชอบเอาใจคน',
        'คาดหวังมากเกินไปจากผู้อื่น',
      ],
      en: [
        'Sensitive to criticism',
        'Overly self-sacrificing',
        'Difficulty with tough decisions',
        'Can be a people-pleaser',
        'Too high expectations of others',
      ],
    },
    workStyle: {
      th: [
        'เน้นพัฒนาทีมและคนรอบข้าง',
        'ทำงานเพื่อจุดมุ่งหมายที่ยิ่งใหญ่',
        'เก่งในการจัดการคนและโปรเจค',
        'สร้างบรรยากาศทำงานที่ดี',
        'ไม่ชอบทำงานคนเดียว',
      ],
      en: [
        'Focuses on team development',
        'Works for meaningful causes',
        'Great at managing people and projects',
        'Creates positive work atmosphere',
        'Prefers team work',
      ],
    },
    careers: {
      th: ['ครู', 'ผู้จัดการ', 'โค้ช', 'นักการเมือง', 'ที่ปรึกษา', 'นักจัดกิจกรรม'],
      en: ['Teacher', 'Manager', 'Coach', 'Politician', 'Counselor', 'Event Organizer'],
    },
    relationships: {
      th: 'ENFJ ทุ่มเทพลังทั้งหมดเพื่อสร้างความสัมพันธ์ที่แน่นแฟ้น อ่านคู่ชีวิตได้อย่างแม่นยำและพยายามทุกทางเพื่อให้ความสัมพันธ์เติบโต',
      en: 'ENFJs pour energy into building bonds. They read partners accurately and go every length to help relationships thrive.',
    },
    growthAreas: {
      th: [
        'เรียนรู้การดูแลตัวเองก่อน',
        'ฝึกการตั้งขอบเขตที่ชัดเจน',
        'ยอมรับว่าไม่สามารถช่วยทุกคนได้',
        'ลดความคาดหวังต่อผู้อื่น',
      ],
      en: [
        'Learn self-care first',
        'Practice setting clear boundaries',
        'Accept you cannot help everyone',
        'Lower expectations of others',
      ],
    },
    famousPeople: ['Barack Obama', 'Oprah Winfrey', 'Malala Yousafzai', 'Ben Affleck'],
  },
  ENFP: {
    group: 'diplomats',
    emoji: '🎨',
    nickname: { th: 'นักรณรงค์', en: 'Campaigner' },
    overview: {
      th: 'ENFP เป็นวิญญาณเสรีที่มีชีวิตชีวา สร้างสรรค์ มีพลังงานสูง และมักเห็นชีวิตเป็นเรื่องราวที่ยิ่งใหญ่ที่พวกเขาเป็นตัวละครหลัก',
      en: 'ENFPs are free spirits bursting with creativity and energy. They see life as a grand adventure in which they are the main character.',
    },
    strengths: {
      th: [
        'มีพลังงานติดต่อสูงมาก',
        'สร้างสรรค์และมีจินตนาการ',
        'เปิดกว้างและยอมรับทุกคน',
        'มีเสน่ห์ดึงดูดคน',
        'เห็นอกเห็นใจและเข้าใจคน',
      ],
      en: [
        'Contagiously high energy',
        'Creative and imaginative',
        'Open-minded and accepting',
        'Charismatic',
        'Empathetic and understanding',
      ],
    },
    weaknesses: {
      th: ['ขาดสมาธิจดจ่อ', 'อ่อนไหวทางอารมณ์', 'ไม่ชอบงานซ้ำซาก', 'วอกแวกง่าย', 'ยากที่จะพูด no'],
      en: [
        'Poor focus',
        'Emotionally sensitive',
        'Dislikes repetition',
        'Easily distracted',
        'Hard to say no',
      ],
    },
    workStyle: {
      th: [
        'ชอบงานที่สร้างสรรค์และมีความหลากหลาย',
        'ทำงานได้ดีในทีมที่มีพลัง',
        'ต้องการอิสระในการทำงาน',
        'ไม่ชอบกฎที่ไม่มีเหตุผล',
        'เก่งในการสร้างแรงบันดาลใจให้ทีม',
      ],
      en: [
        'Loves creative diverse work',
        'Works well in energetic teams',
        'Needs freedom at work',
        'Dislikes pointless rules',
        'Great at inspiring teams',
      ],
    },
    careers: {
      th: ['นักแสดง', 'ครู', 'นักจิตวิทยา', 'นักข่าว', 'ผู้ประกอบการ', 'ดีไซเนอร์'],
      en: ['Actor', 'Teacher', 'Psychologist', 'Journalist', 'Entrepreneur', 'Designer'],
    },
    relationships: {
      th: 'ENFP มองหาความสัมพันธ์ที่ลึกซึ้ง ต้องการคู่ที่แบ่งปันค่านิยมและเปิดใจต่อการเติบโตร่วมกัน',
      en: 'ENFPs seek depth in relationships. They need a partner who shares values and embraces growth together.',
    },
    growthAreas: {
      th: [
        'ฝึกสมาธิและจดจ่อกับสิ่งเดียว',
        'พัฒนาวินัยในตัวเอง',
        'เรียนรู้การปฏิเสธอย่างสุภาพ',
        'ฝึกทำโปรเจคจนเสร็จ',
      ],
      en: [
        'Practice focus and single-tasking',
        'Develop self-discipline',
        'Learn to politely say no',
        'Finish projects before starting new ones',
      ],
    },
    famousPeople: ['Robin Williams', 'Robert Downey Jr.', 'Walt Disney', 'Ellen DeGeneres'],
  },

  // ─── SENTINELS & EXPLORERS will be loaded from part 2 ───
  // Placeholder entries filled next
  ISTJ: {
    group: 'sentinels',
    emoji: '🏛️',
    nickname: { th: 'นักโลจิสติกส์', en: 'Logistician' },
    overview: {
      th: 'ISTJ เป็นคนที่เชื่อถือได้มากที่สุด รับผิดชอบ ตรงต่อเวลา และทำงานอย่างเป็นระบบ พวกเขาเคารพกฎเกณฑ์และประเพณี มีความซื่อสัตย์สูง และทำงานหนักเพื่อบรรลุเป้าหมาย',
      en: 'ISTJs are the most reliable people. Responsible, punctual, and systematic, they respect rules and traditions, hold high integrity, and work hard to achieve their goals.',
    },
    strengths: {
      th: [
        'ซื่อสัตย์และรับผิดชอบสูง',
        'มีระเบียบวินัยดีเยี่ยม',
        'มุ่งมั่นทำงานจนสำเร็จ',
        'ใส่ใจรายละเอียด',
        'อดทนและสม่ำเสมอ',
      ],
      en: [
        'Honest and highly responsible',
        'Excellent discipline',
        'Committed to completion',
        'Detail-oriented',
        'Patient and consistent',
      ],
    },
    weaknesses: {
      th: [
        'ยึดติดกับวิธีเดิมๆ',
        'ดื้อรั้นในความคิดตัวเอง',
        'ยากต่อการเปลี่ยนแปลง',
        'อาจดูไม่ยืดหยุ่น',
        'ไม่ค่อยแสดงอารมณ์',
      ],
      en: [
        'Stuck in old ways',
        'Stubborn in beliefs',
        'Resistant to change',
        'May seem inflexible',
        'Rarely shows emotions',
      ],
    },
    workStyle: {
      th: [
        'ทำงานตามกฎและขั้นตอนชัดเจน',
        'ใส่ใจข้อมูลและรายละเอียด',
        'ตรงต่อเวลาเสมอ',
        'ชอบสภาพแวดล้อมที่มีระเบียบ',
        'ทำงานได้ดีภายใต้โครงสร้างที่ชัดเจน',
      ],
      en: [
        'Follows clear rules and procedures',
        'Attentive to data and details',
        'Always punctual',
        'Prefers orderly environments',
        'Works best under clear structure',
      ],
    },
    careers: {
      th: ['นักบัญชี', 'ทหาร', 'วิศวกร', 'ผู้ตรวจสอบ', 'ผู้พิพากษา', 'นักวิเคราะห์การเงิน'],
      en: ['Accountant', 'Military Officer', 'Engineer', 'Auditor', 'Judge', 'Financial Analyst'],
    },
    relationships: {
      th: 'ISTJ เป็นคู่ชีวิตที่ซื่อสัตย์มาก แสดงความรักผ่านการกระทำจริง ดูแลเอาใจใส่ และให้เกียรติกฎเกณฑ์ชีวิตคู่',
      en: 'ISTJs are extremely loyal partners who show love through actions, care, and respect for relationship commitments.',
    },
    growthAreas: {
      th: [
        'ฝึกเปิดรับสิ่งใหม่ๆ มากขึ้น',
        'เรียนรู้แสดงอารมณ์ให้คนใกล้ชิด',
        'พัฒนาความยืดหยุ่นในการคิด',
        'ลองปรับเปลี่ยนวิธีทำงานบ้าง',
      ],
      en: [
        'Practice embracing new things',
        'Learn to express emotions to loved ones',
        'Develop flexibility in thinking',
        'Try changing work methods occasionally',
      ],
    },
    famousPeople: ['George Washington', 'Queen Elizabeth II', 'Warren Buffett', 'Natalie Portman'],
  },
  ISFJ: {
    group: 'sentinels',
    emoji: '🛡️',
    nickname: { th: 'ผู้ปกป้อง', en: 'Defender' },
    overview: {
      th: 'ISFJ เป็นคนอบอุ่นที่ทุ่มเทดูแลคนรอบข้าง มีความรับผิดชอบสูง จดจำรายละเอียดเล็กๆ น้อยๆ เกี่ยวกับคนที่รักได้อย่างน่าทึ่ง และเป็นกำลังหลักเบื้องหลังที่มักไม่ต้องการให้ใครรู้',
      en: 'ISFJs are warm people who devote themselves to caring for those around them. Highly responsible, they remember small details about loved ones and are the backbone behind the scenes.',
    },
    strengths: {
      th: [
        'มีความรับผิดชอบสูง',
        'อบอุ่นและเอาใจใส่',
        'จดจำรายละเอียดเกี่ยวกับคน',
        'อดทนและสม่ำเสมอ',
        'ภักดีต่อคนใกล้ชิด',
      ],
      en: [
        'Highly responsible',
        'Warm and caring',
        'Remembers details about people',
        'Patient and consistent',
        'Loyal to close ones',
      ],
    },
    weaknesses: {
      th: [
        'ไม่ค่อยปฏิเสธคนอื่น',
        'เก็บกดอารมณ์',
        'อาจถูกเอาเปรียบ',
        'ไม่ชอบการเปลี่ยนแปลง',
        'วิจารณ์ตัวเองมากเกินไป',
      ],
      en: [
        'Cannot say no easily',
        'Suppresses emotions',
        'May be taken advantage of',
        'Dislikes change',
        'Overly self-critical',
      ],
    },
    workStyle: {
      th: [
        'ทำงานอย่างมีระเบียบและทุ่มเท',
        'ชอบช่วยเหลือทีม',
        'ใส่ใจรายละเอียดเป็นพิเศษ',
        'ทำงานได้ดีในสภาพแวดล้อมที่มั่นคง',
        'รับผิดชอบงานที่ได้รับมอบหมายอย่างดี',
      ],
      en: [
        'Works with order and dedication',
        'Loves helping the team',
        'Exceptionally detail-oriented',
        'Works well in stable environments',
        'Fulfills assigned responsibilities well',
      ],
    },
    careers: {
      th: ['พยาบาล', 'ครูประถม', 'นักสังคมสงเคราะห์', 'เลขานุการ', 'นักบัญชี', 'บรรณารักษ์'],
      en: ['Nurse', 'Elementary Teacher', 'Social Worker', 'Secretary', 'Accountant', 'Librarian'],
    },
    relationships: {
      th: 'ISFJ ทุ่มเทอย่างสุดหัวใจเพื่อคนที่รัก ดูแลเอาใจใส่ทุกรายละเอียดเล็กๆ น้อยๆ ภักดีและเสียสละ',
      en: 'ISFJs devote themselves wholeheartedly to loved ones. They care for every small detail, are loyal and selfless.',
    },
    growthAreas: {
      th: [
        'เรียนรู้การพูด "ไม่" บ้าง',
        'ฝึกแสดงออกเมื่อไม่พอใจ',
        'พัฒนาการดูแลตัวเอง',
        'ยอมรับการเปลี่ยนแปลงมากขึ้น',
      ],
      en: [
        'Learn to say "no" sometimes',
        'Practice expressing dissatisfaction',
        'Develop self-care habits',
        'Accept change more easily',
      ],
    },
    famousPeople: ['Beyoncé', 'Kate Middleton', 'Anne Hathaway', 'Vin Diesel'],
  },
  ESTJ: {
    group: 'sentinels',
    emoji: '⚖️',
    nickname: { th: 'ผู้บริหาร', en: 'Executive' },
    overview: {
      th: 'ESTJ เป็นผู้จัดการโดยธรรมชาติ รักระเบียบวินัย ตรงไปตรงมา และเชื่อในความรับผิดชอบ พวกเขาเป็นหลักของชุมชนและเป็นคนที่ทำให้ทุกอย่างดำเนินไปอย่างราบรื่น',
      en: 'ESTJs are natural managers who love order, discipline, and responsibility. They are pillars of their communities and keep everything running smoothly.',
    },
    strengths: {
      th: [
        'มีภาวะผู้นำสูง',
        'จัดการเก่งมาก',
        'ตรงไปตรงมา',
        'รับผิดชอบและเชื่อถือได้',
        'ยึดมั่นในหลักการ',
      ],
      en: [
        'Strong leadership',
        'Excellent organizer',
        'Straightforward',
        'Responsible and reliable',
        'Principled',
      ],
    },
    weaknesses: {
      th: [
        'ดื้อรั้นเกินไป',
        'อาจไม่ยืดหยุ่น',
        'ใจร้อนกับความไม่มีประสิทธิภาพ',
        'อาจดูเอาแต่สั่ง',
        'ยากต่อการแสดงอารมณ์อ่อนโยน',
      ],
      en: [
        'Too stubborn',
        'Can be inflexible',
        'Impatient with inefficiency',
        'May seem bossy',
        'Difficulty showing tenderness',
      ],
    },
    workStyle: {
      th: [
        'จัดระเบียบทีมได้ยอดเยี่ยม',
        'ตั้งเป้าหมายชัดเจนและติดตาม',
        'ชอบโครงสร้างและกฎเกณฑ์',
        'ตรงต่อเวลาและคาดหวังให้คนอื่นเป็นเช่นกัน',
        'ตัดสินใจเด็ดขาด',
      ],
      en: [
        'Excellently organizes teams',
        'Sets clear goals and tracks progress',
        'Loves structure and rules',
        'Punctual and expects same from others',
        'Decisive',
      ],
    },
    careers: {
      th: ['ผู้จัดการ', 'ตำรวจ', 'ผู้พิพากษา', 'ทนายความ', 'นักธุรกิจ', 'ผู้บริหาร'],
      en: ['Manager', 'Police Officer', 'Judge', 'Lawyer', 'Businessman', 'Executive'],
    },
    relationships: {
      th: 'ESTJ เข้าสู่ความสัมพันธ์ด้วยความจริงจังและทุ่มเท ชอบความชัดเจนในกฎเกณฑ์ของชีวิตคู่',
      en: 'ESTJs enter relationships seriously and with commitment. They like clarity in the rules of partnership.',
    },
    growthAreas: {
      th: [
        'ฝึกฟังความคิดเห็นของผู้อื่น',
        'พัฒนาความยืดหยุ่น',
        'เรียนรู้การแสดงอารมณ์อ่อนโยน',
        'อดทนกับคนที่คิดต่าง',
      ],
      en: [
        'Practice listening to others opinions',
        'Develop flexibility',
        'Learn to show tenderness',
        'Be patient with different thinkers',
      ],
    },
    famousPeople: ['Sonia Sotomayor', 'Frank Sinatra', 'Judge Judy', 'James Monroe'],
  },
  ESFJ: {
    group: 'sentinels',
    emoji: '🤝',
    nickname: { th: 'ผู้กงสุล', en: 'Consul' },
    overview: {
      th: 'ESFJ เป็นคนใจดีที่ชอบดูแลผู้อื่น มีมนุษยสัมพันธ์ยอดเยี่ยม ให้ความสำคัญกับความสามัคคีและความสุขของกลุ่ม',
      en: 'ESFJs are kind-hearted caretakers with outstanding social skills. They prioritize group harmony and happiness above all else.',
    },
    strengths: {
      th: [
        'มีมนุษยสัมพันธ์ยอดเยี่ยม',
        'ใจดีและเอาใจใส่มาก',
        'รับผิดชอบสูง',
        'ภักดีต่อคนรอบข้าง',
        'สร้างบรรยากาศที่อบอุ่น',
      ],
      en: [
        'Excellent social skills',
        'Very kind and caring',
        'Highly responsible',
        'Loyal to those around',
        'Creates warm atmospheres',
      ],
    },
    weaknesses: {
      th: [
        'ต้องการคำยกย่อง',
        'อ่อนไหวต่อคำวิจารณ์',
        'กังวลเรื่องสถานะ',
        'ยากต่อการเปลี่ยนแปลง',
        'ชอบเอาใจคนมากเกินไป',
      ],
      en: [
        'Needs appreciation',
        'Sensitive to criticism',
        'Status-concerned',
        'Resistant to change',
        'Overly people-pleasing',
      ],
    },
    workStyle: {
      th: [
        'ทำงานเป็นทีมได้ดีมาก',
        'สร้างบรรยากาศดีให้ที่ทำงาน',
        'ชอบช่วยเหลือเพื่อนร่วมงาน',
        'ทำงานตามกฎเกณฑ์ที่ชัดเจน',
        'เหมาะกับงานบริการ',
      ],
      en: [
        'Excellent team worker',
        'Creates positive workplace atmosphere',
        'Loves helping colleagues',
        'Follows clear rules',
        'Suited for service roles',
      ],
    },
    careers: {
      th: ['พยาบาล', 'ครู', 'ฝ่ายบุคคล', 'นักจัดกิจกรรม', 'ที่ปรึกษา', 'นักประชาสัมพันธ์'],
      en: ['Nurse', 'Teacher', 'HR Specialist', 'Event Planner', 'Counselor', 'Public Relations'],
    },
    relationships: {
      th: 'ESFJ ทุ่มเทดูแลคนที่รักอย่างเต็มที่ ต้องการความชื่นชมและความมั่นคงในความสัมพันธ์',
      en: 'ESFJs fully devote themselves to caring for loved ones. They need appreciation and stability in relationships.',
    },
    growthAreas: {
      th: [
        'ฝึกยอมรับคำวิจารณ์อย่างสร้างสรรค์',
        'เรียนรู้ว่าไม่จำเป็นต้องทำให้ทุกคนพอใจ',
        'พัฒนาความเป็นอิสระทางความคิด',
        'ยอมรับการเปลี่ยนแปลง',
      ],
      en: [
        'Accept constructive criticism',
        'Learn you cannot please everyone',
        'Develop independent thinking',
        'Embrace change',
      ],
    },
    famousPeople: ['Taylor Swift', 'Bill Clinton', 'Jennifer Garner', 'Ed Sheeran'],
  },
  ISTP: {
    group: 'explorers',
    emoji: '🔧',
    nickname: { th: 'นักช่าง', en: 'Virtuoso' },
    overview: {
      th: 'ISTP เป็นนักแก้ปัญหาเชิงปฏิบัติ ชอบลงมือทำ รื้อสิ่งของมาศึกษา และสร้างสิ่งใหม่ด้วยมือตัวเอง ใจเย็นแต่กล้าเสี่ยง',
      en: 'ISTPs are practical problem-solvers who love hands-on work. They take things apart, study them, and build new things. Calm but daring.',
    },
    strengths: {
      th: [
        'แก้ปัญหาเฉพาะหน้าเก่งมาก',
        'ใจเย็นและมั่นคง',
        'ชอบเรียนรู้ผ่านการลงมือทำ',
        'มีทักษะช่างยอดเยี่ยม',
        'กล้าเสี่ยงอย่างมีเหตุผล',
      ],
      en: [
        'Great at troubleshooting',
        'Calm and steady',
        'Learns by doing',
        'Excellent mechanical skills',
        'Reasonably daring',
      ],
    },
    weaknesses: {
      th: [
        'เก็บตัวและเข้าถึงยาก',
        'เบื่อง่ายกับงานซ้ำซาก',
        'ไม่ชอบผูกมัด',
        'อาจดูไม่แยแสอารมณ์',
        'ยากต่อการวางแผนระยะยาว',
      ],
      en: [
        'Reserved and hard to reach',
        'Bored by repetition',
        'Dislikes commitment',
        'May seem emotionally detached',
        'Difficulty with long-term planning',
      ],
    },
    workStyle: {
      th: [
        'ชอบงานที่ลงมือทำได้จริง',
        'แก้ปัญหาแบบ hands-on',
        'ทำงานได้ดีเมื่อมีอิสระ',
        'ไม่ชอบกฎเกณฑ์มากเกินไป',
        'ปรับตัวเร็วในสถานการณ์ฉุกเฉิน',
      ],
      en: [
        'Loves hands-on work',
        'Hands-on problem solving',
        'Works well independently',
        'Dislikes excessive rules',
        'Adapts quickly in emergencies',
      ],
    },
    careers: {
      th: ['วิศวกร', 'ช่างยนต์', 'นักบิน', 'นักกีฬา', 'ช่างไฟฟ้า', 'โปรแกรมเมอร์'],
      en: ['Engineer', 'Mechanic', 'Pilot', 'Athlete', 'Electrician', 'Programmer'],
    },
    relationships: {
      th: 'ISTP แสดงความรักด้วยการกระทำ ช่วยซ่อมแซมหรือแก้ปัญหาให้คนที่รัก ต้องการพื้นที่ส่วนตัวมาก',
      en: 'ISTPs show love through actions — fixing things and solving problems for loved ones. They need lots of personal space.',
    },
    growthAreas: {
      th: [
        'ฝึกแสดงอารมณ์ให้คนใกล้ชิดรู้',
        'พัฒนาทักษะการวางแผนระยะยาว',
        'เรียนรู้การสื่อสารความรู้สึก',
        'ฝึกความอดทนกับงานที่ต้องใช้เวลา',
      ],
      en: [
        'Practice expressing emotions to close ones',
        'Develop long-term planning',
        'Learn to communicate feelings',
        'Practice patience with time-consuming tasks',
      ],
    },
    famousPeople: ['Michael Jordan', 'Tom Cruise', 'Clint Eastwood', 'Bear Grylls'],
  },
  ISFP: {
    group: 'explorers',
    emoji: '🎭',
    nickname: { th: 'นักผจญภัย', en: 'Adventurer' },
    overview: {
      th: 'ISFP เป็นศิลปินที่มีจิตวิญญาณเสรี มีความงามอยู่ในทุกอย่างที่ทำ ใจดี อ่อนโยน และมีความอ่อนไหวทางอารมณ์สูง ชอบใช้ชีวิตในปัจจุบัน',
      en: 'ISFPs are free-spirited artists who find beauty in everything. Kind, gentle, and highly emotionally sensitive, they live in the present moment.',
    },
    strengths: {
      th: [
        'มีความคิดสร้างสรรค์สูง',
        'อ่อนโยนและเข้าใจคน',
        'มีรสนิยมศิลปะดี',
        'ยืดหยุ่นและเปิดกว้าง',
        'ซื่อสัตย์กับตัวเอง',
      ],
      en: [
        'Highly creative',
        'Gentle and understanding',
        'Good artistic taste',
        'Flexible and open',
        'True to themselves',
      ],
    },
    weaknesses: {
      th: [
        'หลีกเลี่ยงความขัดแย้ง',
        'อ่อนไหวเกินไป',
        'ยากต่อการวางแผนระยะยาว',
        'ขาดความมั่นใจบ้าง',
        'ไม่ชอบถูกจำกัด',
      ],
      en: [
        'Avoids conflict',
        'Overly sensitive',
        'Difficulty with long-term plans',
        'Can lack confidence',
        'Hates being restricted',
      ],
    },
    workStyle: {
      th: [
        'ชอบงานสร้างสรรค์ที่มีอิสระ',
        'ทำงานด้วยความรู้สึกและแรงบันดาลใจ',
        'ไม่ชอบโครงสร้างที่แข็งแกร่ง',
        'ทำงานได้ดีเมื่อทำตามจังหวะตัวเอง',
        'ชอบงานที่ใช้ประสาทสัมผัส',
      ],
      en: [
        'Loves creative free work',
        'Works with feeling and inspiration',
        'Dislikes rigid structures',
        'Works best at own pace',
        'Prefers sensory work',
      ],
    },
    careers: {
      th: ['ศิลปิน', 'นักดนตรี', 'ช่างภาพ', 'เชฟ', 'นักออกแบบ', 'สัตวแพทย์'],
      en: ['Artist', 'Musician', 'Photographer', 'Chef', 'Designer', 'Veterinarian'],
    },
    relationships: {
      th: 'ISFP มีความรักที่ลึกซึ้งและอ่อนโยน แสดงความรักผ่านการทำสิ่งพิเศษเล็กๆ น้อยๆ ให้คนที่รัก',
      en: 'ISFPs love deeply and gently. They show love through small special gestures for their loved ones.',
    },
    growthAreas: {
      th: [
        'ฝึกการเผชิญหน้ากับปัญหา',
        'พัฒนาการวางแผนอนาคต',
        'เรียนรู้การแสดงจุดยืนของตัวเอง',
        'สร้างความมั่นใจในตัวเอง',
      ],
      en: [
        'Practice confronting problems',
        'Develop future planning',
        'Learn to assert yourself',
        'Build self-confidence',
      ],
    },
    famousPeople: ['Bob Dylan', 'Jimi Hendrix', 'Lana Del Rey', 'David Beckham'],
  },
  ESTP: {
    group: 'explorers',
    emoji: '🚀',
    nickname: { th: 'ผู้ประกอบการ', en: 'Entrepreneur' },
    overview: {
      th: 'ESTP เป็นคนที่เต็มไปด้วยพลังงานและการกระทำ ชอบใช้ชีวิตบนขอบ กล้าเสี่ยง และแก้ปัญหาได้อย่างรวดเร็ว มีเสน่ห์ดึงดูดผู้คนโดยธรรมชาติ',
      en: 'ESTPs are full of energy and action. They live on the edge, take risks, and solve problems quickly. They are naturally charismatic and magnetic.',
    },
    strengths: {
      th: [
        'มีพลังงานสูงมาก',
        'กล้าเสี่ยงและตัดสินใจเร็ว',
        'แก้ปัญหาเฉพาะหน้าได้ดี',
        'มีเสน่ห์ดึงดูดคน',
        'ปรับตัวเร็วมาก',
      ],
      en: [
        'Extremely energetic',
        'Bold risk-taker and fast decision maker',
        'Great at improvising',
        'Naturally charismatic',
        'Highly adaptable',
      ],
    },
    weaknesses: {
      th: [
        'ใจร้อนและหุนหันพลันแล่น',
        'เบื่อง่ายมาก',
        'ไม่ค่อยคิดผลระยะยาว',
        'อาจดูไม่จริงจัง',
        'ยากต่อการมุ่งมั่นระยะยาว',
      ],
      en: [
        'Impatient and impulsive',
        'Gets bored very easily',
        'Rarely thinks long-term',
        'May seem unserious',
        'Difficulty with long-term commitment',
      ],
    },
    workStyle: {
      th: [
        'ชอบงานที่ตื่นเต้นและท้าทาย',
        'แก้วิกฤตได้ยอดเยี่ยม',
        'ไม่ชอบนั่งโต๊ะนานๆ',
        'ทำงานเป็นทีมได้ดี',
        'ชอบการเจรจาต่อรอง',
      ],
      en: [
        'Loves exciting challenging work',
        'Excellent crisis resolver',
        'Dislikes sitting at desks',
        'Good team player',
        'Enjoys negotiation',
      ],
    },
    careers: {
      th: ['ผู้ประกอบการ', 'นักกีฬามืออาชีพ', 'นักขาย', 'นายหน้า', 'ตำรวจ', 'นักดับเพลิง'],
      en: [
        'Entrepreneur',
        'Professional Athlete',
        'Sales Executive',
        'Broker',
        'Police Officer',
        'Firefighter',
      ],
    },
    relationships: {
      th: 'ESTP นำความสนุกและตื่นเต้นเข้าสู่ความสัมพันธ์ ชอบทำสิ่งใหม่ๆ กับคู่ชีวิต แต่ต้องเรียนรู้การผูกมัด',
      en: 'ESTPs bring fun and excitement to relationships. They love exploring new things with partners but need to learn commitment.',
    },
    growthAreas: {
      th: [
        'ฝึกคิดก่อนทำ',
        'พัฒนาวินัยในการทำงานระยะยาว',
        'เรียนรู้ที่จะมุ่งมั่นกับสิ่งหนึ่ง',
        'ฝึกฟังความรู้สึกของผู้อื่น',
      ],
      en: [
        'Think before acting',
        'Develop long-term work discipline',
        'Learn to commit to one thing',
        'Practice listening to others feelings',
      ],
    },
    famousPeople: ['Donald Trump', 'Ernest Hemingway', 'Madonna', 'Jack Nicholson'],
  },
  ESFP: {
    group: 'explorers',
    emoji: '🎉',
    nickname: { th: 'นักบันเทิง', en: 'Entertainer' },
    overview: {
      th: 'ESFP เป็นตัวตลกของกลุ่ม เต็มไปด้วยพลังงานบวก ชอบสร้างความสุขให้คนรอบข้าง เป็นนักแสดงโดยธรรมชาติและสนุกสนานอยู่เสมอ',
      en: 'ESFPs are the life of the party. Full of positive energy, they love making people happy. Natural performers who are always fun to be around.',
    },
    strengths: {
      th: [
        'มีพลังงานบวกสูงมาก',
        'สร้างบรรยากาศสนุกสนาน',
        'เปิดกว้างและเป็นมิตร',
        'ปรับตัวเข้ากับคนได้ดี',
        'ตั้งใจฟังผู้อื่น',
      ],
      en: [
        'Extremely positive energy',
        'Creates fun atmosphere',
        'Open and friendly',
        'Adapts well to people',
        'Attentive listener',
      ],
    },
    weaknesses: {
      th: [
        'ขาดการวางแผนระยะยาว',
        'อ่อนไหวต่อคำวิจารณ์',
        'ตัดสินใจตามอารมณ์',
        'หลีกเลี่ยงเรื่องจริงจัง',
        'เบื่อง่ายกับงานซ้ำซาก',
      ],
      en: [
        'Poor long-term planning',
        'Sensitive to criticism',
        'Makes emotional decisions',
        'Avoids serious topics',
        'Bored by repetition',
      ],
    },
    workStyle: {
      th: [
        'สร้างบรรยากาศทำงานที่สนุก',
        'ชอบทำงานกับผู้คน',
        'ไม่ชอบงานที่ต้องนั่งอยู่กับที่',
        'เก่งในงานที่ต้องแสดงออก',
        'ปรับตัวเร็วกับสถานการณ์ใหม่',
      ],
      en: [
        'Makes work fun',
        'Loves working with people',
        'Dislikes stationary work',
        'Great at performative roles',
        'Adapts fast to new situations',
      ],
    },
    careers: {
      th: ['นักแสดง', 'นักดนตรี', 'ครู', 'พนักงานต้อนรับ', 'นักขาย', 'เชฟ'],
      en: ['Actor', 'Musician', 'Teacher', 'Flight Attendant', 'Sales Rep', 'Chef'],
    },
    relationships: {
      th: 'ESFP สร้างความรักที่สนุกสนานและอบอุ่น ชอบเซอร์ไพรส์และทำสิ่งพิเศษให้คู่ชีวิตเสมอ',
      en: 'ESFPs create fun and warm love. They love surprising and doing special things for their partners.',
    },
    growthAreas: {
      th: [
        'ฝึกวางแผนระยะยาว',
        'พัฒนาวินัยในตัวเอง',
        'เรียนรู้การเผชิญเรื่องจริงจัง',
        'ฝึกรับคำวิจารณ์อย่างสร้างสรรค์',
      ],
      en: [
        'Practice long-term planning',
        'Develop self-discipline',
        'Learn to face serious topics',
        'Accept constructive criticism',
      ],
    },
    famousPeople: ['Marilyn Monroe', 'Adele', 'Jamie Oliver', 'Will Smith'],
  },
};

export function getTypeKey(scores: DimScores): TypeCode {
  const E = scores.EI > 50 ? 'E' : 'I';
  const N = scores.NS >= 50 ? 'N' : 'S';
  const T = scores.TF > 50 ? 'T' : 'F';
  const J = scores.JP > 50 ? 'J' : 'P';
  return `${E}${N}${T}${J}` as TypeCode;
}

export function getIdentity(scores: DimScores): Identity {
  return scores.AT > 50 ? 'A' : 'T';
}
