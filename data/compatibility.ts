import type { TypeCode } from '@/types';

export interface CompatibilityData {
  /** 1–2 types: golden/ideal partner (complementary cognitive functions) */
  natural: TypeCode[];
  /** 2–3 types: highly compatible matches */
  good: TypeCode[];
  /** How this type loves & connects romantically */
  loveStyle: { th: string; en: string };
}

/**
 * MBTI Compatibility map.
 * Natural partners share all 4 cognitive functions in inverted order (golden pairs).
 * Good matches share strong cognitive function overlap.
 */
export const compatibility: Record<TypeCode, CompatibilityData> = {
  INTJ: {
    natural: ['ENFP'],
    good: ['ENTP', 'INFJ', 'ENTJ'],
    loveStyle: {
      th: 'รักอย่างลึกซึ้งและมุ่งมั่น แสดงความรักผ่านการกระทำ การวางแผนร่วมกัน และความซื่อสัตย์ มากกว่าคำพูดหรือท่าทางยิ่งใหญ่',
      en: 'Loves with deep commitment and intellectual connection. Shows affection through actions, planning, and loyalty rather than words or grand gestures.',
    },
  },
  INTP: {
    natural: ['ENFJ'],
    good: ['ENTJ', 'INFJ', 'ENTP'],
    loveStyle: {
      th: 'รักอย่างลึกซึ้งทางความคิด อาจดูสงวนท่าทีในตอนแรก แต่ทุ่มเทอย่างลึกซึ้งเมื่อตัดสินใจ แสดงรักผ่านการแชร์ความคิดและเวลาคุณภาพ',
      en: 'Loves intellectually and curiously. May seem reserved at first, but is deeply devoted once committed, showing love through shared ideas and quality time.',
    },
  },
  ENTJ: {
    natural: ['INFP'],
    good: ['INTP', 'ENFJ', 'INTJ'],
    loveStyle: {
      th: 'รักอย่างมีพลังและปกป้อง สนับสนุนความทะเยอทะยานของคู่ วางแผนอนาคตที่มั่นคงร่วมกัน และแสดงรักผ่านความมุ่งมั่นและการนำ',
      en: "Loves powerfully and protectively. Supports partner's ambitions, plans for a secure future together, and shows love through leadership and dedication.",
    },
  },
  ENTP: {
    natural: ['INFJ'],
    good: ['INTJ', 'INTP', 'ENFP'],
    loveStyle: {
      th: 'รักด้วยพลังงานและความตื่นเต้นทางสติปัญญา ชอบถกเถียงทางความคิด สำรวจไอเดียร่วมกัน และต้องการคู่ที่ตามทันความอยากรู้อยากเห็น',
      en: 'Loves with energy and intellectual excitement. Enjoys mental sparring, exploring ideas together, and needs a partner who can match their curiosity and wit.',
    },
  },
  INFJ: {
    natural: ['ENTP'],
    good: ['ENFP', 'INTJ', 'INFP'],
    loveStyle: {
      th: 'รักอย่างเข้มข้นและเต็มไปด้วยความเห็นอกเห็นใจ แสวงหาความเชื่อมโยงที่ลึกซึ้งทางจิตวิญญาณ ทุ่มเทอย่างสุดหัวใจให้กับคนที่ใช่',
      en: 'Loves with rare intensity and profound empathy. Seeks a deep soulful connection and gives everything to the right person, valuing authenticity above all.',
    },
  },
  INFP: {
    natural: ['ENTJ'],
    good: ['ENFJ', 'INFJ', 'INTJ'],
    loveStyle: {
      th: 'รักด้วยอุดมคติและความทุ่มเทที่บริสุทธิ์ แสวงหาคู่ที่เข้าใจโลกภายในและมีค่านิยมเดียวกัน แสดงรักผ่านความคิดสร้างสรรค์และการดูแลที่แท้จริง',
      en: 'Loves with pure idealism and devotion. Seeks a partner who understands their inner world and shares their values, expressing love through creativity and genuine care.',
    },
  },
  ENFJ: {
    natural: ['INTP'],
    good: ['INFP', 'ENTJ', 'ISFP'],
    loveStyle: {
      th: 'รักอย่างลึกซึ้งผ่านการดูแลและสนับสนุนการเติบโตของคู่ ทุ่มเทในความสามัคคีของความสัมพันธ์และทำงานอย่างไม่รู้จักเหนื่อยเพื่อให้ความรักเจริญรุ่งเรือง',
      en: "Loves profoundly through nurturing and supporting their partner's growth. Deeply invested in the relationship's harmony and works tirelessly to make love thrive.",
    },
  },
  ENFP: {
    natural: ['INTJ'],
    good: ['INFJ', 'ENTP', 'ENFJ'],
    loveStyle: {
      th: 'รักด้วยความหลงใหล กระตือรือร้น และความจริงแท้ที่ลึกซึ้ง นำความสุขและการผจญภัยสู่ความสัมพันธ์ และต้องการความเชื่อมโยงทางอารมณ์ที่แท้จริง',
      en: 'Loves with passion, enthusiasm, and deep authenticity. Brings joy and adventure to the relationship and needs a genuine emotional connection to truly thrive.',
    },
  },
  ISTJ: {
    natural: ['ESFP'],
    good: ['ESTP', 'ESTJ', 'ISFJ'],
    loveStyle: {
      th: 'รักผ่านความน่าเชื่อถือ ความทุ่มเท และการกระทำเพื่อคู่อย่างสม่ำเสมอ พิสูจน์ความมุ่งมั่นผ่านการกระทำที่สม่ำเสมอตลอดเวลา ไม่ใช่ท่าทางที่หรูหรา',
      en: 'Loves through reliability, dedication, and consistent acts of service. Proves commitment through steady actions over time rather than flashy gestures.',
    },
  },
  ISFJ: {
    natural: ['ESTP'],
    good: ['ESFP', 'ISTJ', 'ESFJ'],
    loveStyle: {
      th: 'รักโดยการจดจำทุกรายละเอียดและดูแลคู่อย่างเงียบๆ ซื่อสัตย์ อบอุ่น และสนับสนุนอย่างลึกซึ้ง — กระดูกสันหลังที่เงียบสงบที่ช่วยยึดความสัมพันธ์ไว้',
      en: 'Loves by remembering every detail and quietly caring for their partner. Deeply loyal, warm, and supportive — the quiet backbone that holds the relationship together.',
    },
  },
  ESTJ: {
    natural: ['ISFP'],
    good: ['ISTP', 'ISTJ', 'ESFJ'],
    loveStyle: {
      th: 'รักผ่านโครงสร้าง ความมุ่งมั่นที่ชัดเจน และการให้ความมั่นคง ให้ความสำคัญกับคำมั่นสัญญาในความสัมพันธ์อย่างจริงจัง และทำงานหนักเพื่อสร้างพันธมิตรที่มั่นคง',
      en: 'Loves through structure, clear commitment, and providing security. Takes relationship vows very seriously and works hard to build a stable, dependable partnership.',
    },
  },
  ESFJ: {
    natural: ['ISTP'],
    good: ['ISFP', 'ISFJ', 'ESTJ'],
    loveStyle: {
      th: 'รักด้วยความอบอุ่น ความใจกว้าง และความห่วงใยที่แท้จริงต่อความสุขของคู่ ทุ่มเทอย่างมากในการทำให้ความสัมพันธ์กลมกลืนและน่าจดจำ',
      en: "Loves with warmth, generosity, and genuine care for their partner's happiness. Puts tremendous effort into making the relationship harmonious and memorable.",
    },
  },
  ISTP: {
    natural: ['ESFJ'],
    good: ['ESTJ', 'ISFP', 'ESTP'],
    loveStyle: {
      th: 'รักผ่านการกระทำที่เป็นจริงและการเคารพพื้นที่ส่วนตัว เป็นอิสระแต่ซื่อสัตย์อย่างลึกซึ้งเมื่อมุ่งมั่น แสดงความห่วงใยผ่านการแก้ปัญหาและการอยู่เคียงข้าง',
      en: 'Loves through practical acts and respecting personal space. Independent but deeply loyal when committed, shows care through problem-solving and quiet presence.',
    },
  },
  ISFP: {
    natural: ['ESTJ'],
    good: ['ESFJ', 'ISTP', 'ESFP'],
    loveStyle: {
      th: 'รักอย่างอ่อนโยนและเป็นธรรมชาติผ่านท่าทางที่ใส่ใจและการอยู่เคียงข้าง สร้างช่วงเวลาโรแมนติกและแสดงความรักผ่านศิลปะ ความงาม และการกระทำจากใจ',
      en: 'Loves gently and spontaneously through thoughtful gestures and presence. Creates romantic moments and expresses love through art, beauty, and heartfelt acts.',
    },
  },
  ESTP: {
    natural: ['ISFJ'],
    good: ['ISTJ', 'ESFP', 'ISTP'],
    loveStyle: {
      th: 'รักด้วยความตื่นเต้น ความเป็นธรรมชาติ และการใช้ชีวิตอย่างเต็มที่ในปัจจุบัน นำพลังงานและการผจญภัยมาสู่ความสัมพันธ์ และแสดงรักผ่านการกระทำและเวลาคุณภาพ',
      en: 'Loves with excitement, spontaneity, and living fully in the moment. Brings energy and adventure to the relationship and expresses love through action and quality time.',
    },
  },
  ESFP: {
    natural: ['ISTJ'],
    good: ['ISFJ', 'ESTP', 'ISFP'],
    loveStyle: {
      th: 'รักด้วยความสุขที่แพร่กระจาย ความเสน่หา และความตื่นเต้น ทำให้ทุกวันรู้สึกพิเศษ แสดงรักผ่านการสัมผัสทางกาย ท่าทางเซอร์ไพรส์ และความสนุกร่วมกัน',
      en: 'Loves with infectious joy, affection, and spontaneity. Makes every day feel special, expressing love through physical affection, surprise gestures, and shared fun.',
    },
  },
};
