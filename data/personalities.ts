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
  INTJ: {
    group: 'analysts',
    emoji: '🧠',
    nickname: { th: 'สถาปนิก', en: 'Architect' },
    overview: {
      th: 'INTJs เป็นผู้วางแผนเชิงกลยุทธ์ที่เงียบขรึมแต่มีพลังสูง พวกเขาเชื่อในตัวเองและต้องการความรู้และความสามารถเชิงลึก มองเห็นรูปแบบในทุกสิ่งและจุดอ่อนในทุกระบบ',
      en: 'INTJs are strategic planners — quiet yet powerful. They believe in themselves and seek deep knowledge and competence. They see patterns in everything and flaws in every system.',
    },
    strengths: {
      th: [
        'คิดเชิงกลยุทธ์',
        'มุ่งมั่นสูง',
        'วิเคราะห์เก่ง',
        'เปิดรับแนวคิดใหม่',
        'เชื่อมั่นในตัวเอง',
      ],
      en: [
        'Strategic thinking',
        'High determination',
        'Analytical',
        'Open to new ideas',
        'Self-confident',
      ],
    },
    weaknesses: {
      th: ['อาจดูเย็นชา', 'ไม่ยืดหยุ่น', 'โอ้อวด', 'ยากต่อการเปิดเผยความรู้สึก'],
      en: ['Can seem arrogant', 'Inflexible', 'Stubborn', 'Difficulty expressing feelings'],
    },
    careers: {
      th: ['วิศวกร', 'นักวิทยาศาสตร์', 'ผู้บริหาร', 'โปรแกรมเมอร์', 'นักกลยุทธ์'],
      en: ['Engineer', 'Scientist', 'Executive', 'Programmer', 'Strategist'],
    },
    relationships: {
      th: 'INTJs ต้องการคู่ชีวิตที่ฉลาดและเป็นอิสระ พวกเขาแสดงความรักผ่านการกระทำมากกว่าคำพูด และให้ความสำคัญกับความลึกซึ้งมากกว่าปริมาณความสัมพันธ์',
      en: 'INTJs need intelligent, independent partners. They show love through actions rather than words and value depth over breadth in relationships.',
    },
  },
  INTP: {
    group: 'analysts',
    emoji: '🔬',
    nickname: { th: 'นักตรรกะ', en: 'Logician' },
    overview: {
      th: 'INTPs เป็นนักคิดเชิงนวัตกรรมที่มีความกระหายในความรู้อย่างไม่สิ้นสุด ชอบทฤษฎีและตรรกะ มักหมกมุ่นกับความคิดและการแก้ปัญหาที่ซับซ้อน',
      en: 'INTPs are innovative thinkers with an unquenchable thirst for knowledge. They love theory and logic, and often get absorbed in ideas and complex problem-solving.',
    },
    strengths: {
      th: ['คิดสร้างสรรค์', 'วิเคราะห์ดีเยี่ยม', 'เรียนรู้เร็ว', 'คิดนอกกรอบ', 'ซื่อตรงในการคิด'],
      en: [
        'Creative thinking',
        'Excellent analysis',
        'Fast learner',
        'Outside-the-box thinking',
        'Intellectual honesty',
      ],
    },
    weaknesses: {
      th: ['ไม่ชอบกฎเกณฑ์', 'ขาดความเป็นระเบียบ', 'ลังเลใจ', 'อาจดูไม่แยแส'],
      en: ['Dislike rules', 'Disorganized', 'Indecisive', 'Can seem indifferent'],
    },
    careers: {
      th: ['นักวิจัย', 'นักปรัชญา', 'สถาปนิกซอฟต์แวร์', 'นักคณิตศาสตร์', 'นักเขียน'],
      en: ['Researcher', 'Philosopher', 'Software Architect', 'Mathematician', 'Writer'],
    },
    relationships: {
      th: 'INTPs ชอบคู่ชีวิตที่ชวนคิดและกระตุ้นสติปัญญา พวกเขาต้องการพื้นที่ส่วนตัวมาก แต่ลึกๆ แล้วภักดีต่อคนที่รัก',
      en: 'INTPs love partners who are thought-provoking and intellectually stimulating. They need a lot of personal space but are deeply loyal to those they love.',
    },
  },
  ENTJ: {
    group: 'analysts',
    emoji: '👑',
    nickname: { th: 'ผู้บัญชาการ', en: 'Commander' },
    overview: {
      th: 'ENTJs เป็นผู้นำที่มั่นใจและมีความสามารถสูง พวกเขามองเห็นเป้าหมายระยะยาวและรู้วิธีระดมคนเพื่อบรรลุวิสัยทัศน์ ปัญหาคืออาหารของพวกเขา',
      en: 'ENTJs are confident, capable leaders. They have long-term vision and know how to mobilize people to achieve goals. Problems are their food.',
    },
    strengths: {
      th: ['ภาวะผู้นำสูง', 'มั่นใจ', 'วางแผนเชิงกลยุทธ์', 'มีประสิทธิภาพ', 'แรงบันดาลใจสูง'],
      en: ['Strong leadership', 'Confident', 'Strategic planning', 'Efficient', 'Highly motivated'],
    },
    weaknesses: {
      th: ['ใจร้อน', 'ไม่อดทนต่อความไม่มีประสิทธิภาพ', 'ครอบงำผู้อื่น', 'ยากต่อการผ่อนคลาย'],
      en: ['Impatient', 'Intolerant of inefficiency', 'Domineering', 'Difficulty relaxing'],
    },
    careers: {
      th: ['ผู้บริหาร CEO', 'ทนายความ', 'ที่ปรึกษาธุรกิจ', 'นักการเมือง', 'ผู้ประกอบการ'],
      en: ['CEO', 'Lawyer', 'Business Consultant', 'Politician', 'Entrepreneur'],
    },
    relationships: {
      th: 'ENTJs เข้าสู่ความสัมพันธ์ด้วยความมุ่งมั่น พวกเขาต้องการคู่ที่เท่าเทียมและท้าทายพวกเขาได้ และชอบพัฒนาสิ่งต่างๆ ร่วมกัน',
      en: 'ENTJs enter relationships with determination. They need an equal partner who can challenge them and enjoy growing together.',
    },
  },
  ENTP: {
    group: 'analysts',
    emoji: '⚡',
    nickname: { th: 'นักโต้วาที', en: 'Debater' },
    overview: {
      th: 'ENTPs เป็นนักคิดเร็วที่ชอบท้าทายสิ่งที่มีอยู่ พวกเขาชอบโต้เถียง ไม่ใช่เพื่อชนะ แต่เพื่อสำรวจมุมมองต่างๆ พวกเขาเบื่อง่ายและต้องการสิ่งกระตุ้นใหม่เสมอ',
      en: 'ENTPs are quick thinkers who love challenging the status quo. They love to debate — not to win, but to explore perspectives. They get bored easily and always need new stimulation.',
    },
    strengths: {
      th: ['คิดเร็ว', 'สร้างสรรค์', 'กล้าหาญ', 'เปิดกว้าง', 'มีเสน่ห์'],
      en: ['Quick thinking', 'Creative', 'Fearless', 'Open-minded', 'Charismatic'],
    },
    weaknesses: {
      th: ['ขาดความสม่ำเสมอ', 'เบื่อง่าย', 'ไม่ยอมรับมุมมองผู้อื่น', 'หยาบกระด้าง'],
      en: ['Inconsistent', 'Get bored easily', 'Argumentative', 'Insensitive'],
    },
    careers: {
      th: ['ผู้ประกอบการ', 'ทนายความ', 'นักการตลาด', 'นักวิจัย', 'นักพัฒนาผลิตภัณฑ์'],
      en: ['Entrepreneur', 'Lawyer', 'Marketer', 'Researcher', 'Product Developer'],
    },
    relationships: {
      th: 'ENTPs ชอบความสัมพันธ์ที่กระตุ้นสติปัญญา พวกเขาต้องการคู่ที่ตามทันและสนุกกับการถกเถียงและแนวคิดใหม่ๆ',
      en: 'ENTPs love intellectually stimulating relationships. They need a partner who can keep up and enjoy debating and exchanging new ideas.',
    },
  },
  INFJ: {
    group: 'diplomats',
    emoji: '🌿',
    nickname: { th: 'ผู้สนับสนุน', en: 'Advocate' },
    overview: {
      th: 'INFJs เป็นผู้มีอุดมการณ์ที่หาได้ยาก มีสัญชาตญาณลึกซึ้งและข้อมูลเชิงลึกเกี่ยวกับผู้คน พวกเขาต้องการสร้างความแตกต่างที่แท้จริงในโลก',
      en: 'INFJs are rare idealists with deep intuition and insight into people. They want to make a real difference in the world.',
    },
    strengths: {
      th: ['เห็นอกเห็นใจสูง', 'มีวิสัยทัศน์', 'สร้างแรงบันดาลใจ', 'ตัดสินคนได้แม่นยำ', 'แน่วแน่'],
      en: ['Highly empathetic', 'Visionary', 'Inspiring', 'Perceptive about people', 'Principled'],
    },
    weaknesses: {
      th: ['สมบูรณ์แบบนิยม', 'เหนื่อยง่าย', 'ยากต่อการเปิดใจ', 'หลีกเลี่ยงความขัดแย้ง'],
      en: ['Perfectionist', 'Prone to burnout', 'Hard to open up', 'Conflict-averse'],
    },
    careers: {
      th: ['นักจิตวิทยา', 'นักเขียน', 'นักสังคมสงเคราะห์', 'ครู', 'แพทย์'],
      en: ['Psychologist', 'Writer', 'Social Worker', 'Teacher', 'Doctor'],
    },
    relationships: {
      th: 'INFJs ต้องการสภาพแวดล้อมที่ปลอดภัยและเชื่อถือใจได้ พวกเขาสามารถรับรู้อารมณ์ของคนรักได้ล่วงหน้า และต้องการความสัมพันธ์ที่ลึกซึ้งและมีความหมาย',
      en: "INFJs need a safe and trusting environment. They can sense their partner's emotions in advance and need a deep, meaningful connection.",
    },
  },
  INFP: {
    group: 'diplomats',
    emoji: '🌸',
    nickname: { th: 'นักไกล่เกลี่ย', en: 'Mediator' },
    overview: {
      th: 'INFPs เป็นนักอุดมคติที่มีจิตใจกว้างขวาง ขับเคลื่อนด้วยค่านิยมส่วนตัวและความต้องการที่จะสร้างความดีในโลก พวกเขาสร้างสรรค์และมีความรู้สึกลึกซึ้ง',
      en: 'INFPs are idealists with open hearts, driven by personal values and a desire to do good in the world. They are creative and deeply feeling.',
    },
    strengths: {
      th: ['เห็นอกเห็นใจ', 'สร้างสรรค์', 'มีค่านิยมชัดเจน', 'ยืดหยุ่น', 'เปิดกว้าง'],
      en: ['Empathetic', 'Creative', 'Strong values', 'Flexible', 'Open-minded'],
    },
    weaknesses: {
      th: ['ไม่ตื่นตัวกับเรื่องจริงๆ', 'ไม่ชอบข้อมูลดิบ', 'วิจารณ์ตัวเองมาก', 'ขาดทิศทาง'],
      en: ['Impractical', 'Dislikes hard data', 'Self-critical', 'Lacks direction'],
    },
    careers: {
      th: ['นักเขียน', 'นักดนตรี', 'อาจารย์', 'นักบำบัด', 'กราฟิกดีไซเนอร์'],
      en: ['Writer', 'Musician', 'Teacher', 'Therapist', 'Graphic Designer'],
    },
    relationships: {
      th: 'INFPs มองหาความสัมพันธ์ที่ลึกซึ้งทางจิตใจ พวกเขาอุทิศตัวและเห็นอกเห็นใจแต่ต้องการคู่ที่เข้าใจโลกภายในของพวกเขา',
      en: 'INFPs seek deep, meaningful connections. They are devoted and empathetic but need a partner who understands their inner world.',
    },
  },
  ENFJ: {
    group: 'diplomats',
    emoji: '🌟',
    nickname: { th: 'ผู้นำการเปลี่ยนแปลง', en: 'Protagonist' },
    overview: {
      th: 'ENFJs เป็นผู้นำที่มีเสน่ห์ มีแรงบันดาลใจอย่างยิ่งในการสร้างความแตกต่างในโลก พวกเขาเชี่ยวชาญในการเชื่อมต่อกับผู้คนและผลักดันให้พวกเขาเติบโต',
      en: 'ENFJs are charismatic leaders, passionately driven to make a difference in the world. They excel at connecting with people and inspiring growth.',
    },
    strengths: {
      th: ['มีเสน่ห์', 'เห็นอกเห็นใจ', 'มีความคิดสร้างสรรค์', 'วาทศิลป์', 'ภักดีสูง'],
      en: ['Charismatic', 'Empathetic', 'Creative', 'Eloquent', 'Highly loyal'],
    },
    weaknesses: {
      th: ['อ่อนไหวต่อการวิจารณ์', 'ยากต่อการตัดสินใจที่กระทบผู้อื่น', 'เสียสละตัวเองมากเกินไป'],
      en: [
        'Sensitive to criticism',
        'Difficulty making decisions that affect others',
        'Overly self-sacrificing',
      ],
    },
    careers: {
      th: ['ครู', 'ผู้จัดการ', 'โค้ช', 'นักการเมือง', 'ที่ปรึกษา'],
      en: ['Teacher', 'Manager', 'Coach', 'Politician', 'Counselor'],
    },
    relationships: {
      th: 'ENFJs พุ่งความพยายามทั้งหมดเพื่อสร้างความสัมพันธ์ที่แน่นแฟ้น พวกเขาอ่านคู่ชีวิตได้อย่างแม่นยำและพยายามทุกทางเพื่อให้ความสัมพันธ์เติบโต',
      en: 'ENFJs pour all their energy into building bonds. They read their partners accurately and go every length to make the relationship thrive.',
    },
  },
  ENFP: {
    group: 'diplomats',
    emoji: '🎨',
    nickname: { th: 'นักรณรงค์', en: 'Campaigner' },
    overview: {
      th: 'ENFPs เป็นวิญญาณเสรีที่มีชีวิตชีวา พวกเขาสร้างสรรค์ สังคม และมักเห็นชีวิตเป็นเรื่องราวที่ยิ่งใหญ่ที่พวกเขาเป็นตัวละครหลัก',
      en: "ENFPs are free spirits, bursting with creativity and social energy. They often see life as a grand adventure in which they're the main character.",
    },
    strengths: {
      th: ['มีพลังงานสูง', 'สร้างสรรค์', 'เปิดกว้าง', 'มีเสน่ห์', 'เห็นอกเห็นใจ'],
      en: ['High energy', 'Creative', 'Open-minded', 'Charismatic', 'Empathetic'],
    },
    weaknesses: {
      th: ['ขาดสมาธิ', 'อ่อนไหวง่าย', 'ไม่ชอบงานซ้ำซาก', 'วอกแวก'],
      en: ['Poor focus', 'Emotionally sensitive', 'Dislikes repetitive tasks', 'Easily distracted'],
    },
    careers: {
      th: ['นักแสดง', 'ครู', 'นักจิตวิทยา', 'นักข่าว', 'ผู้ประกอบการ'],
      en: ['Actor', 'Teacher', 'Psychologist', 'Journalist', 'Entrepreneur'],
    },
    relationships: {
      th: 'ENFPs มองหาความสัมพันธ์ที่ลึกซึ้ง พวกเขาต้องการคู่ที่แบ่งปันค่านิยมและเปิดใจต่อการเติบโตร่วมกัน',
      en: 'ENFPs seek depth in relationships. They need a partner who shares their values and embraces growth together.',
    },
  },
  ISTJ: {
    group: 'sentinels',
    emoji: '🏛️',
    nickname: { th: 'นักโลจิสติกส์', en: 'Logistician' },
    overview: {
      th: 'ISTJs เป็นคนที่ซื่อสัตย์ ตรงต่อเวลา และเชื่อถือได้ที่สุด พวกเขาให้คุณค่ากับประเพณีและความสม่ำเสมอ และทำงานด้วยความอุตสาหะในทุกสิ่ง',
      en: 'ISTJs are the most honest, punctual, and dependable of all types. They value tradition and consistency, and apply diligence to everything they do.',
    },
    strengths: {
      th: ['ซื่อสัตย์', 'ตั้งใจ', 'น่าเชื่อถือ', 'อดทน', 'มีระเบียบ'],
      en: ['Honest', 'Diligent', 'Dependable', 'Patient', 'Organized'],
    },
    weaknesses: {
      th: ['ต้านทานการเปลี่ยนแปลง', 'ดื้อ', 'ตัดสินใจตามกฎมากเกินไป', 'ไม่ยืดหยุ่น'],
      en: ['Resistant to change', 'Stubborn', 'Rules-bound', 'Inflexible'],
    },
    careers: {
      th: ['นักบัญชี', 'ทนายความ', 'แพทย์', 'ผู้จัดการโครงการ', 'ทหาร'],
      en: ['Accountant', 'Lawyer', 'Doctor', 'Project Manager', 'Military'],
    },
    relationships: {
      th: 'ISTJs จริงจังกับความสัมพันธ์และแสดงความรักผ่านการกระทำ พวกเขาคาดหวังความจงรักภักดีและความน่าเชื่อถือจากคู่ชีวิตเช่นกัน',
      en: 'ISTJs take relationships seriously and show love through actions. They expect loyalty and dependability from their partners in return.',
    },
  },
  ISFJ: {
    group: 'sentinels',
    emoji: '🛡️',
    nickname: { th: 'ผู้ปกป้อง', en: 'Defender' },
    overview: {
      th: 'ISFJs เป็นผู้พิทักษ์ที่ทุ่มเทอย่างยิ่งใหญ่ พวกเขาเก็บทุกรายละเอียดเกี่ยวกับคนที่พวกเขาสนใจและพร้อมสนับสนุนตลอดเวลา',
      en: 'ISFJs are fiercely devoted protectors. They store every detail about people they care for and are always ready to give support.',
    },
    strengths: {
      th: ['เห็นอกเห็นใจ', 'ทุ่มเท', 'น่าเชื่อถือ', 'ใส่ใจรายละเอียด', 'กระตือรือร้น'],
      en: ['Empathetic', 'Dedicated', 'Reliable', 'Detail-oriented', 'Enthusiastic'],
    },
    weaknesses: {
      th: ['อ่อนไหวเกินไป', 'ไม่แสดงความต้องการของตัวเอง', 'ไม่ยืดหยุ่น', 'ปฏิเสธผู้อื่นไม่เป็น'],
      en: ['Overly sensitive', 'Neglects own needs', 'Inflexible', "Can't say no"],
    },
    careers: {
      th: ['พยาบาล', 'ครู', 'นักสังคมสงเคราะห์', 'นักออกแบบภายใน', 'นักบัญชี'],
      en: ['Nurse', 'Teacher', 'Social Worker', 'Interior Designer', 'Accountant'],
    },
    relationships: {
      th: 'ISFJs เอาใจใส่คู่ชีวิตอย่างลึกซึ้ง พวกเขาจดจำวันพิเศษและรายละเอียดเล็กน้อย และทุ่มเทเพื่อคนที่รักอย่างไม่มีเงื่อนไข',
      en: 'ISFJs care deeply for their partners. They remember special dates and small details, and give unconditional dedication to loved ones.',
    },
  },
  ESTJ: {
    group: 'sentinels',
    emoji: '⚖️',
    nickname: { th: 'ผู้บริหาร', en: 'Executive' },
    overview: {
      th: 'ESTJs เป็นตัวแทนของประเพณีและระเบียบ พวกเขาภูมิใจในการนำครอบครัวและชุมชนอย่างมีประสิทธิภาพ',
      en: 'ESTJs represent tradition and order. They take pride in leading families and communities with efficiency and practicality.',
    },
    strengths: {
      th: ['จัดระเบียบได้ดี', 'มีสุขภาพจิตดี', 'ตรงต่อเวลา', 'น่าเชื่อถือ', 'ผู้นำที่มุ่งเป้าหมาย'],
      en: ['Well-organized', 'Strong-willed', 'Punctual', 'Dependable', 'Goal-oriented leader'],
    },
    weaknesses: {
      th: ['ขาดความยืดหยุ่น', 'ดื้อ', 'ไม่สะดวกกับอารมณ์', 'ตัดสินผู้อื่นเร็ว'],
      en: ['Inflexible', 'Stubborn', 'Uncomfortable with emotions', 'Judgmental'],
    },
    careers: {
      th: ['ผู้จัดการ', 'ครูใหญ่', 'ทนายความ', 'ผู้บัญชาการ', 'นักธุรกิจ'],
      en: ['Manager', 'Principal', 'Lawyer', 'Commander', 'Businessman'],
    },
    relationships: {
      th: 'ESTJs มุ่งมั่นกับครอบครัวและมอบความมั่นคง พวกเขาชื่นชอบประเพณีและพิธีกรรมต่างๆ และคาดหวังความเคารพและความรับผิดชอบจากคู่ชีวิต',
      en: 'ESTJs are devoted to family and provide stability. They love traditions and rituals, and expect respect and responsibility from their partners.',
    },
  },
  ESFJ: {
    group: 'sentinels',
    emoji: '🤝',
    nickname: { th: 'ผู้กงสุล', en: 'Consul' },
    overview: {
      th: 'ESFJs เป็นประชาชนที่สนับสนุนสังคม ยินดีเสมอที่จะช่วยเหลือ พวกเขาเอาใจใส่ผู้อื่นอย่างจริงจังและทำให้ทุกคนรู้สึกมีคุณค่า',
      en: 'ESFJs are sociable, caring citizens always ready to help. They take the welfare of others seriously and make everyone feel valued.',
    },
    strengths: {
      th: ['ห่วงใยผู้อื่น', 'สังคมดี', 'ซื่อสัตย์', 'น่าเชื่อถือ', 'ขยัน'],
      en: ['Caring', 'Sociable', 'Loyal', 'Reliable', 'Hardworking'],
    },
    weaknesses: {
      th: ['กังวลเรื่องสถานะสังคม', 'ไม่ยืดหยุ่น', 'ต้องการคำชม', 'เสียสละตัวเองมากเกินไป'],
      en: ['Status-conscious', 'Inflexible', 'Approval-seeking', 'Overly selfless'],
    },
    careers: {
      th: ['พยาบาล', 'ครู', 'นักสังคมสงเคราะห์', 'เจ้าหน้าที่ฝ่ายบุคคล', 'นักการตลาด'],
      en: ['Nurse', 'Teacher', 'Social Worker', 'HR Officer', 'Marketer'],
    },
    relationships: {
      th: 'ESFJs ทุ่มเทเพื่อความสัมพันธ์ที่ดี พวกเขาเอาใจใส่ความต้องการของคู่ชีวิตและต้องการความซาบซึ้งและคำยืนยันตอบแทน',
      en: "ESFJs invest deeply in relationships. They attend to their partner's needs and need appreciation and affirmation in return.",
    },
  },
  ISTP: {
    group: 'explorers',
    emoji: '🔧',
    nickname: { th: 'นักช่าง', en: 'Virtuoso' },
    overview: {
      th: 'ISTPs เป็นนักทดลองที่มีทักษะสูง พวกเขาชอบสำรวจด้วยมือและหาวิธีแก้ปัญหาเชิงปฏิบัติ สงสัยในทุกสิ่งและชอบรู้ว่าสิ่งต่างๆ ทำงานอย่างไร',
      en: 'ISTPs are highly skilled experimenters. They love hands-on exploration and finding practical solutions, curious about everything and how things work.',
    },
    strengths: {
      th: ['แก้ปัญหาเก่ง', 'สงบในวิกฤต', 'ปรับตัวง่าย', 'สร้างสรรค์', 'มีทักษะปฏิบัติ'],
      en: ['Problem-solver', 'Calm in crisis', 'Adaptable', 'Creative', 'Practical skills'],
    },
    weaknesses: {
      th: ['เก็บความรู้สึก', 'เบื่อง่าย', 'ใจร้าย', 'ขาดความมุ่งมั่นระยะยาว'],
      en: ['Private', 'Gets bored easily', 'Insensitive', 'Lacks long-term commitment'],
    },
    careers: {
      th: ['วิศวกร', 'นักกีฬา', 'นักบิน', 'คนขับรถแข่ง', 'นักสืบ'],
      en: ['Engineer', 'Athlete', 'Pilot', 'Race Car Driver', 'Detective'],
    },
    relationships: {
      th: 'ISTPs ชอบความสัมพันธ์ที่มีพื้นที่ส่วนตัว พวกเขาแสดงความรักผ่านการกระทำและต้องการคู่ที่เข้าใจว่าพวกเขาต้องการเวลาส่วนตัว',
      en: 'ISTPs prefer relationships with personal space. They show love through actions and need a partner who understands their need for alone time.',
    },
  },
  ISFP: {
    group: 'explorers',
    emoji: '🎭',
    nickname: { th: 'นักผจญภัย', en: 'Adventurer' },
    overview: {
      th: 'ISFPs เป็นศิลปินที่แท้จริง พวกเขามีชีวิตอยู่กับปัจจุบัน แสวงหาความงามและประสบการณ์ที่สดชื่น และแสดงตัวเองผ่านศิลปะและการกระทำ',
      en: 'ISFPs are true artists. They live in the moment, seek beauty and fresh experiences, and express themselves through art and action.',
    },
    strengths: {
      th: ['มีเสน่ห์', 'มีจิตใจศิลปิน', 'เห็นอกเห็นใจ', 'ยืดหยุ่น', 'อยากรู้อยากเห็น'],
      en: ['Charming', 'Artistic', 'Empathetic', 'Flexible', 'Curious'],
    },
    weaknesses: {
      th: ['อ่อนไหว', 'ขาดการวางแผน', 'ไม่มั่นใจตัวเอง', 'หลีกเลี่ยงความขัดแย้ง'],
      en: ['Sensitive', 'Lacks planning', 'Low self-confidence', 'Conflict-averse'],
    },
    careers: {
      th: ['ศิลปิน', 'ดีไซเนอร์', 'พยาบาล', 'นักดนตรี', 'ช่างภาพ'],
      en: ['Artist', 'Designer', 'Nurse', 'Musician', 'Photographer'],
    },
    relationships: {
      th: 'ISFPs ซื่อสัตย์และเอาใจใส่อย่างยิ่ง พวกเขาต้องการความสัมพันธ์ที่อบอุ่นและปลอดภัยเพื่อเปิดใจ',
      en: 'ISFPs are loyal and deeply caring. They need a warm, safe relationship to open up.',
    },
  },
  ESTP: {
    group: 'explorers',
    emoji: '🚀',
    nickname: { th: 'ผู้ประกอบการ', en: 'Entrepreneur' },
    overview: {
      th: 'ESTPs เป็นผู้มีพลังงานสูงที่ชอบผลักดีขีดจำกัด พวกเขาอยู่กับปัจจุบัน ตัดสินใจเร็ว และชอบการลงมือแก้ปัญหาจริงๆ',
      en: 'ESTPs are high-energy individuals who love pushing boundaries. They live in the moment, make fast decisions, and prefer hands-on problem-solving.',
    },
    strengths: {
      th: ['กล้า', 'มีเสน่ห์', 'ชาญฉลาดอย่างมีไหวพริบ', 'มีพลัง', 'ตื่นตัวสูง'],
      en: ['Bold', 'Charismatic', 'Perceptive', 'Energetic', 'Highly observant'],
    },
    weaknesses: {
      th: ['ไม่อดทน', 'ใจร้อน', 'ขาดแผนระยะยาว', 'ชอบเสี่ยง'],
      en: ['Impatient', 'Impulsive', 'Lacks long-term planning', 'Risk-taker'],
    },
    careers: {
      th: ['ผู้ประกอบการ', 'การตลาด', 'นักกีฬา', 'นักแสดง', 'นายหน้าอสังหาฯ'],
      en: ['Entrepreneur', 'Marketer', 'Athlete', 'Actor', 'Real Estate Agent'],
    },
    relationships: {
      th: 'ESTPs สนุกกับความตื่นเต้นในความสัมพันธ์ พวกเขาต้องการคู่ที่แอ็กทีฟและชอบการผจญภัยเช่นเดียวกัน',
      en: 'ESTPs enjoy the excitement in relationships. They need an active partner who loves adventure as much as they do.',
    },
  },
  ESFP: {
    group: 'explorers',
    emoji: '🎉',
    nickname: { th: 'นักบันเทิง', en: 'Entertainer' },
    overview: {
      th: 'ESFPs เป็นนักแสดงโดยธรรมชาติ ชีวิตคือเวที สิ่งแวดล้อมของพวกเขาเต็มไปด้วยความสนุกสนาน ความสร้างสรรค์ และความตื่นเต้น',
      en: 'ESFPs are natural performers — life is their stage. Their world is full of excitement, creativity and fun, and they love to share this with others.',
    },
    strengths: {
      th: ['มีพลัง', 'มีเสน่ห์', 'เห็นอกเห็นใจ', 'สังเกตรายละเอียดได้ดี', 'ยืดหยุ่น'],
      en: ['Energetic', 'Charismatic', 'Empathetic', 'Observant', 'Flexible'],
    },
    weaknesses: {
      th: ['ขาดการวางแผน', 'อ่อนไหว', 'เบื่อง่าย', 'ไม่ชอบความขัดแย้ง'],
      en: ['Poor planning', 'Sensitive', 'Gets bored easily', 'Conflict-averse'],
    },
    careers: {
      th: ['นักแสดง', 'นักดนตรี', 'พนักงานต้อนรับ', 'ครู', 'ผู้จัดงาน'],
      en: ['Performer', 'Musician', 'Flight Attendant', 'Teacher', 'Event Planner'],
    },
    relationships: {
      th: 'ESFPs นำความสนุกสนานและความอบอุ่นมาสู่ความสัมพันธ์ พวกเขาต้องการคู่ที่แบ่งปันความรู้สึกและประสบการณ์ร่วมกัน',
      en: 'ESFPs bring fun and warmth to relationships. They need a partner who shares feelings and experiences together.',
    },
  },
};

export function getTypeKey(scores: DimScores): TypeCode {
  // MBTI Default Tie-Breakers (50%): I, N, F, P
  const E = scores.EI > 50 ? 'E' : 'I';
  const N = scores.NS >= 50 ? 'N' : 'S'; // N is the default tie-breaker for N/S
  const T = scores.TF > 50 ? 'T' : 'F';
  const J = scores.JP > 50 ? 'J' : 'P';
  return `${E}${N}${T}${J}` as TypeCode;
}

export function getIdentity(scores: DimScores): Identity {
  // NERIS Default Tie-Breaker: T
  return scores.AT > 50 ? 'A' : 'T';
}
