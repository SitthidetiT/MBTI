import type { LoveTypeCode, LovePersonalityData } from '@/types';

const ROSE = { bg: '#fff1f2', accent: '#e11d48', light: '#ffe4e6' };
const PURPLE = { bg: '#f5f3ff', accent: '#7c3aed', light: '#ede9fe' };
const PINK = { bg: '#fdf4ff', accent: '#c026d3', light: '#fae8ff' };
const BLUE = { bg: '#eff6ff', accent: '#2563eb', light: '#dbeafe' };

export const lovePersonalities: Record<LoveTypeCode, LovePersonalityData> = {
  // ─── Leader + Amorous (Bold Romantics) — Rose ───────────────────────────
  LAPE: {
    emoji: '🦁',
    nickname: { th: 'สิงห์ราชา', en: 'Captain Lion' },
    overview: {
      th: 'LAPE คือผู้นำในความรักที่กล้าหาญ เปิดเผย และเต็มไปด้วยพลังงาน พวกเขาเป็นฝ่ายเข้าหาก่อนเสมอ ไม่เคยลังเลที่จะบอกความรู้สึก และนำพาความสัมพันธ์ด้วยหัวใจที่แรงกล้า เมื่อตกหลุมรัก โลกทั้งใบรู้ได้ทันที',
      en: 'LAPE is a bold, expressive, and high-energy leader in love. They always make the first move, never hesitate to share their feelings, and lead relationships with fierce, passionate heart. When they fall in love, the whole world knows.',
    },
    loveStrengths: {
      th: [
        'กล้าเข้าหาและแสดงความรู้สึกก่อน',
        'สร้างบรรยากาศโรแมนติกได้เสมอ',
        'มุ่งมั่นและซื่อสัตย์เมื่อรักจริง',
        'นำพาความสัมพันธ์ไปในทิศทางที่ดี',
      ],
      en: [
        'Bold at making first moves',
        'Creates romance effortlessly',
        'Fiercely loyal when truly in love',
        'Leads relationships with clear direction',
      ],
    },
    loveChallenges: {
      th: ['อาจครอบงำคู่โดยไม่ตั้งใจ', 'ใจร้อนและคาดหวังการตอบสนองที่รวดเร็ว'],
      en: [
        'May unintentionally overpower a partner',
        'Can be impatient and expect quick responses',
      ],
    },
    idealDate: {
      th: 'การผจญภัยที่ตื่นเต้น ท่องเที่ยวต่างจังหวัด หรือกิจกรรมประทับใจที่สร้างความทรงจำร่วมกัน',
      en: 'An exciting adventure, a road trip, or a memorable highlight activity that creates shared stories.',
    },
    communicationStyle: {
      th: 'พูดตรงและเปิดเผย บอกความรู้สึกโดยตรงไม่อ้อมค้อม ต้องการความชัดเจนในความสัมพันธ์',
      en: 'Direct and open — expresses feelings clearly without hesitation and values clarity in the relationship.',
    },
    color: ROSE,
  },
  LAPO: {
    emoji: '🦎',
    nickname: { th: 'กิ้งก่าสมบูรณ์แบบ', en: 'Perfect Chameleon' },
    overview: {
      th: 'LAPO เป็นผู้นำที่ปรับตัวเก่งและอ่านใจคู่ได้แม่น พวกเขาเข้าหาก่อน ตกหลุมรักได้ง่าย แต่ซ่อนความรู้สึกลึกๆ ไว้ภายใน มีเสน่ห์ดึงดูดอย่างเป็นธรรมชาติและสามารถปรับตัวให้เข้ากับคู่ได้อย่างราบรื่น',
      en: 'LAPO is an adaptable leader who can read their partner brilliantly. They initiate easily, fall for people quickly, but keep deeper feelings private. Naturally magnetic and seamlessly adaptable to whoever they love.',
    },
    loveStrengths: {
      th: [
        'ปรับตัวเข้ากับคู่ได้อย่างยอดเยี่ยม',
        'มีเสน่ห์ดึงดูดอย่างเป็นธรรมชาติ',
        'อ่านบรรยากาศและความต้องการของคู่ได้แม่น',
        'กล้าริเริ่มความสัมพันธ์ใหม่เสมอ',
      ],
      en: [
        'Exceptionally adaptable to their partner',
        'Naturally magnetic and charming',
        "Reads the room and partner's needs perfectly",
        'Bold in initiating new connections',
      ],
    },
    loveChallenges: {
      th: ['ความรู้สึกแท้จริงยากต่อการอ่าน', 'อาจดูปริศนาเกินไปจนคู่รู้สึกไม่มั่นใจ'],
      en: ['True feelings can be hard to read', 'Can seem too enigmatic, leaving a partner unsure'],
    },
    idealDate: {
      th: 'ประสบการณ์ใหม่ที่ไม่เคยทำมาก่อน เช่น คลาสทำอาหาร ดาวน์น้ำ หรือเที่ยว Spontaneous',
      en: 'A new experience neither has tried before — cooking class, diving, or a spontaneous trip.',
    },
    communicationStyle: {
      th: 'ฟังเก่งและปรับน้ำเสียงได้ดี แต่อาจไม่เปิดเผยความรู้สึกลึกๆ ทั้งหมด มักแสดงรักผ่านการกระทำ',
      en: 'Great listener who adapts their tone, but may not share deepest feelings openly. Often shows love through actions.',
    },
    color: ROSE,
  },
  LARE: {
    emoji: '✨',
    nickname: { th: 'นักสร้างสมดุลเสน่ห์', en: 'Charisma Balancer' },
    overview: {
      th: 'LARE ผสมผสานความเป็นผู้นำเข้ากับเหตุผล พวกเขาตกหลุมรักได้ง่ายเพราะหัวใจเปิด แต่ตัดสินใจเรื่องความสัมพันธ์ด้วยสติปัญญา เปิดเผยและมีเสน่ห์ พวกเขาเป็นคู่ที่สร้างความสมดุลทั้งอารมณ์และเหตุผลได้อย่างสวยงาม',
      en: 'LARE blends leadership with rationality. They fall for people easily because their heart is open, but make relationship decisions with wisdom. Expressive and charming, they create a beautiful balance of emotion and reason.',
    },
    loveStrengths: {
      th: [
        'คิดรอบคอบก่อนตัดสินใจสำคัญ',
        'เปิดเผยและสื่อสารได้ชัดเจน',
        'สร้างความสัมพันธ์ที่มั่นคงและมีทิศทาง',
        'ดึงดูดคนรอบข้างได้อย่างเป็นธรรมชาติ',
      ],
      en: [
        'Thinks carefully before major decisions',
        'Expressive and clear communicator',
        'Builds stable, purposeful relationships',
        'Naturally attracts those around them',
      ],
    },
    loveChallenges: {
      th: [
        'อาจวิเคราะห์มากเกินไปจนความโรแมนติกลดลง',
        'บางครั้งหลักเกณฑ์อาจทำให้คู่รู้สึกถูกตัดสิน',
      ],
      en: [
        'May over-analyze, reducing spontaneous romance',
        'High standards can sometimes make a partner feel judged',
      ],
    },
    idealDate: {
      th: 'งานสังคมที่มีบทสนทนาดีๆ ดินเนอร์บรรยากาศดี หรือกิจกรรมที่ได้เรียนรู้ร่วมกัน',
      en: 'A social event with great conversation, a lovely dinner, or an activity where you learn something new together.',
    },
    communicationStyle: {
      th: 'พูดชัดเจนและมีเหตุผล สามารถแสดงความรู้สึกได้ดีแต่ยังคงความสงบ',
      en: 'Clear, reasoned, and articulate — expresses feelings well but remains composed.',
    },
    color: ROSE,
  },
  LARO: {
    emoji: '🦅',
    nickname: { th: 'รุ่นพี่ในดวงใจ', en: 'Admired Senpai' },
    overview: {
      th: 'LARO คือผู้นำที่เย็นแต่ทรงพลัง พวกเขาเปิดรับความรักได้ง่าย แต่ประมวลผลด้วยเหตุผลและซ่อนความในใจไว้อย่างสงบ มีบุคลิกที่ดึงดูดใจและเป็นผู้ใหญ่ คนรอบข้างมักหลงเสน่ห์โดยไม่รู้ตัว',
      en: 'LARO is a cool but powerful leader. Open to love easily, yet processes with reason and keeps their heart quietly guarded. Their mature, magnetic presence draws people in without trying.',
    },
    loveStrengths: {
      th: [
        'มีบุคลิกที่สงบและมั่นคง',
        'ดูแลคู่ด้วยการกระทำมากกว่าคำพูด',
        'ตัดสินใจได้อย่างชาญฉลาดในสถานการณ์ยาก',
        'ดึงดูดใจด้วยความเป็นผู้ใหญ่ที่เป็นธรรมชาติ',
      ],
      en: [
        'Calm and steady in presence',
        'Cares through actions more than words',
        'Makes wise decisions under pressure',
        'Magnetically mature and composed',
      ],
    },
    loveChallenges: {
      th: [
        'อาจดูเย็นชาหรือห่างเหินเกินไป',
        'ความรู้สึกที่แท้จริงถูกเก็บไว้นาน ทำให้คู่รู้สึกไม่แน่ใจ',
      ],
      en: [
        'May come across as cold or distant',
        'Keeping true feelings in for long can leave a partner uncertain',
      ],
    },
    idealDate: {
      th: 'บรรยากาศที่สงบและมีคุณภาพ เช่น คาเฟ่เงียบ ชมพระอาทิตย์ตก หรือเดินเล่นในที่สวยงาม',
      en: 'A quiet, quality setting — a peaceful café, watching a sunset, or a scenic walk together.',
    },
    communicationStyle: {
      th: 'พูดน้อยแต่มีน้ำหนัก ฟังมากกว่าพูด แสดงความห่วงใยผ่านการกระทำที่มีความหมาย',
      en: 'Says little but means a lot — listens more than speaks, shows care through meaningful actions.',
    },
    color: ROSE,
  },

  // ─── Leader + Cautious (Cool Leaders) — Purple ──────────────────────────
  LCPE: {
    emoji: '🐣',
    nickname: { th: 'เด็กน้อยซ่อนหัวใจ', en: 'Hidden Baby' },
    overview: {
      th: 'LCPE ดูองอาจและแสดงออกได้ดีจากภายนอก แต่ซ่อนหัวใจที่อ่อนไหวเอาไว้อย่างระมัดระวัง พวกเขาเป็นผู้นำที่รอบคอบ ใช้เวลาในการเปิดใจ แต่เมื่อรักแล้วจะรักอย่างสุดหัวใจและแสดงออกมาอย่างล้นหลาม',
      en: 'LCPE appears bold and expressive on the outside, but hides a sensitive heart beneath. They are cautious leaders who take time to open up, yet when they do fall in love, they love with overflowing passion and expression.',
    },
    loveStrengths: {
      th: [
        'เมื่อรักแล้วทุ่มเทอย่างสมบูรณ์',
        'แสดงความรักออกมาได้อย่างชัดเจนและอบอุ่น',
        'มีส่วนนำและดูแลความสัมพันธ์',
        'ความรักที่ซ่อนไว้ยิ่งทำให้มีคุณค่ามากขึ้น',
      ],
      en: [
        'Fully devoted once they open up',
        'Warm and clear in expressing love',
        'Takes the lead in caring for the relationship',
        'Hidden depth makes their love all the more precious',
      ],
    },
    loveChallenges: {
      th: [
        'ใช้เวลานานกว่าจะเปิดใจ ทำให้คู่รอนาน',
        'อาจดูขัดแย้งระหว่างภาพลักษณ์ภายนอกกับความรู้สึกจริง',
      ],
      en: [
        'Takes long to open up, requiring patience from a partner',
        'External persona can clash with true inner feelings',
      ],
    },
    idealDate: {
      th: 'บรรยากาศส่วนตัวที่ไม่มีคนมาก เช่น ปิกนิก ดูหนังที่บ้าน หรือทำกิจกรรมด้วยกันสองคน',
      en: 'An intimate setting without crowds — a picnic, at-home movie night, or a just-the-two-of-you activity.',
    },
    communicationStyle: {
      th: 'เมื่อเปิดใจแล้วพูดได้อย่างอบอุ่นและเปิดเผย แต่ต้องใช้เวลาในการไว้วางใจพอ',
      en: 'Warm and expressive once trust is built, but requires time before opening up fully.',
    },
    color: PURPLE,
  },
  LCPO: {
    emoji: '🎭',
    nickname: { th: 'ตัวเอกแห่งเรื่องราว', en: 'Protagonist' },
    overview: {
      th: 'LCPO คือผู้นำที่ขับเคลื่อนด้วยหัวใจ แต่ระมัดระวังในการเปิดเผยตัวเอง พวกเขาเป็นแรงผลักดันเบื้องหลังความสัมพันธ์ ซึ่งท้ายที่สุดมักกลายเป็นจุดศูนย์กลางในชีวิตของคนที่รัก แม้จะแสดงออกน้อยกว่าที่รู้สึก',
      en: "LCPO is a passionate leader who navigates relationships with caution. They are the driving force behind relationships, often becoming the center of their partner's world — even while showing less on the surface than they feel inside.",
    },
    loveStrengths: {
      th: [
        'เป็นแรงผลักดันที่ยิ่งใหญ่ในความสัมพันธ์',
        'รักอย่างเต็มที่แม้จะไม่แสดงออกมากนัก',
        'มีบุคลิกที่ดึงดูดและน่าสนใจ',
        'รับผิดชอบและจริงจังในความรัก',
      ],
      en: [
        'A powerful force that drives the relationship forward',
        'Loves fully even if expression is reserved',
        'Has a magnetic, intriguing personality',
        'Responsible and serious about love',
      ],
    },
    loveChallenges: {
      th: ['คู่อาจไม่เข้าใจว่ารู้สึกอย่างไรอยู่จริงๆ', 'ความหวังสูงอาจนำไปสู่ความผิดหวัง'],
      en: [
        'Partner may not understand how they truly feel',
        'High expectations can lead to disappointment',
      ],
    },
    idealDate: {
      th: 'กิจกรรมที่มีความหมายและสร้างสรรค์ เช่น ดูละครเวที ไปพิพิธภัณฑ์ หรือทำ project ร่วมกัน',
      en: 'A meaningful creative activity — a play, museum visit, or working on a project together.',
    },
    communicationStyle: {
      th: 'มีความคิดลึกซึ้งแต่แสดงออกอย่างระมัดระวัง ให้เวลาและพื้นที่ก่อนจะเผยความรู้สึกจริง',
      en: 'Deeply thoughtful but cautious in expression — needs time and space before revealing true feelings.',
    },
    color: PURPLE,
  },
  LCRE: {
    emoji: '🦊',
    nickname: { th: 'จิ้งจอกนักวางแผน', en: 'Clever Fox' },
    overview: {
      th: 'LCRE นำทางความสัมพันธ์อย่างชาญฉลาดและมีกลยุทธ์ พวกเขาไม่ตกหลุมรักง่ายแต่เมื่อเลือกแล้วตัดสินใจด้วยความมั่นใจ แสดงออกได้ดีแต่ซ่อนดวงใจอันอ่อนไหวไว้ภายใต้ภาพลักษณ์ที่แข็งแกร่ง',
      en: "LCRE navigates love strategically and with intelligence. They don't fall easily, but when they choose someone, they commit with confidence. Expressive on the surface, but hides a sensitive heart beneath a strong exterior.",
    },
    loveStrengths: {
      th: [
        'คิดรอบคอบก่อนตัดสินใจทุกครั้ง',
        'มีอิสระในจิตใจแต่ซื่อสัตย์เมื่อมุ่งมั่น',
        'สื่อสารได้ดีและเปิดเผยเมื่อพร้อม',
        'นำพาความสัมพันธ์อย่างมีสติ',
      ],
      en: [
        'Thinks carefully before every major decision',
        'Independent yet deeply faithful when committed',
        'Communicates well and openly when ready',
        'Leads with mindful awareness',
      ],
    },
    loveChallenges: {
      th: [
        'ความระมัดระวังมากเกินไปอาจทำให้โอกาสหลุดมือ',
        'ภาพลักษณ์ที่แข็งแกร่งอาจทำให้คู่เข้าถึงยาก',
      ],
      en: [
        'Over-caution can let opportunities slip by',
        'Strong exterior can make it hard for a partner to feel close',
      ],
    },
    idealDate: {
      th: 'บทสนทนาที่ลึกซึ้งและมีสาระ เช่น ร้านกาแฟเงียบ หรือเดินเล่นและคุยกันสองคน',
      en: 'Deep, meaningful conversation — a quiet café or a walk where you talk just the two of you.',
    },
    communicationStyle: {
      th: 'พูดเมื่อมีสิ่งที่มีคุณค่าจะพูด ฟังเก่งและตอบสนองอย่างมีสติและรอบคอบ',
      en: "Speaks when there's something worthwhile to say — a great listener who responds thoughtfully.",
    },
    color: PURPLE,
  },
  LCRO: {
    emoji: '🐱',
    nickname: { th: 'เจ้าแมวผู้เป็นใหญ่', en: 'Boss Cat' },
    overview: {
      th: 'LCRO เป็นผู้นำที่เป็นอิสระและเย็นเฉย พวกเขาไม่ตกหลุมรักง่ายและพิจารณาทุกอย่างอย่างรอบคอบ แสดงความรักอย่างเงียบๆ ผ่านการกระทำ และมีเสน่ห์ที่ทำให้คนอยากเข้หาแม้จะดูห่างเหิน',
      en: "LCRO is an independent and cool leader. They don't fall easily and think everything through carefully. They show love quietly through actions, and have a distant charm that makes others want to get closer.",
    },
    loveStrengths: {
      th: [
        'มีความเป็นตัวเองสูงและไม่สูญเสียตัวตนในความสัมพันธ์',
        'ซื่อสัตย์และน่าเชื่อถือเมื่อมุ่งมั่น',
        'ความเป็นอิสระที่สมดุลสร้างความสัมพันธ์ที่มีสุขภาพดี',
        'เสน่ห์ที่เป็นธรรมชาติโดยไม่ต้องพยายาม',
      ],
      en: [
        'Strong sense of self, never loses identity in love',
        'Faithful and reliable when committed',
        'Healthy independence creates a balanced relationship',
        'Natural charm without trying',
      ],
    },
    loveChallenges: {
      th: ['อาจดูไม่แยแสจนคู่รู้สึกไม่มั่นใจ', 'ต้องใช้เวลานานมากกว่าจะเปิดใจให้ใคร'],
      en: [
        'May appear indifferent, leaving a partner insecure',
        'Takes a very long time to open up to someone',
      ],
    },
    idealDate: {
      th: 'เวลาคุณภาพสองคนในบรรยากาศสบายๆ ไม่ต้องวางแผนมาก เช่น นัดรับประทานอาหารค่ำที่บ้าน',
      en: 'Low-key quality time together — no elaborate plans needed, like a cozy dinner at home.',
    },
    communicationStyle: {
      th: 'พูดน้อยแต่มีน้ำหนักมาก แสดงความรักผ่านการมีอยู่และการดูแลที่สม่ำเสมอ',
      en: 'Quiet but impactful — shows love through consistent presence and steady care.',
    },
    color: PURPLE,
  },

  // ─── Follower + Amorous (Passionate Hearts) — Pink ──────────────────────
  FAPE: {
    emoji: '💎',
    nickname: { th: 'ผู้ทุ่มเทไม่มีที่สิ้นสุด', en: 'Last Lover' },
    overview: {
      th: 'FAPE คือผู้ที่รักอย่างบริสุทธิ์และทุ่มเทที่สุด พวกเขาตกหลุมรักได้ง่าย ทำตามความรู้สึก และแสดงออกถึงความรักอย่างเต็มที่ ความสัมพันธ์ของพวกเขาเต็มไปด้วยความอบอุ่น แต่บางครั้งอาจรักมากเกินไปจนเจ็บปวด',
      en: 'FAPE loves with pure, unwavering devotion. They fall easily, follow their heart, and express love in full. Their relationships overflow with warmth, though sometimes loving too much can lead to heartbreak.',
    },
    loveStrengths: {
      th: [
        'ทุ่มเทและซื่อสัตย์อย่างสมบูรณ์',
        'แสดงความรักออกมาได้อย่างอบอุ่นและชัดเจน',
        'ทำให้คู่รู้สึกว่าตัวเองสำคัญ',
        'พร้อมสนับสนุนคู่ในทุกสถานการณ์',
      ],
      en: [
        'Completely devoted and faithful',
        'Warm and clear in expressing love',
        'Makes a partner feel genuinely valued',
        'Ready to support through anything',
      ],
    },
    loveChallenges: {
      th: ['อาจรักมากเกินไปจนสูญเสียตัวตน', 'เจ็บปวดได้ง่ายเพราะเปิดใจอย่างเต็มที่'],
      en: [
        'May love too intensely and lose sense of self',
        'Easily hurt because of their fully open heart',
      ],
    },
    idealDate: {
      th: 'ดินเนอร์โรแมนติก ชมพระจันทร์ หรือกิจกรรมที่เน้นความใกล้ชิดและความสนิทสนม',
      en: 'A romantic dinner, moonlit walk, or any experience that deepens intimacy and closeness.',
    },
    communicationStyle: {
      th: 'เปิดใจและแสดงออกอย่างเต็มที่ พูดถึงความรู้สึกตรงๆ และต้องการการตอบรับที่ชัดเจน',
      en: 'Open-hearted and fully expressive — shares feelings directly and needs clear, honest feedback in return.',
    },
    color: PINK,
  },
  FAPO: {
    emoji: '😈',
    nickname: { th: 'นางฟ้าหน้าปีศาจ', en: 'Devil Angel' },
    overview: {
      th: 'FAPO มีเสน่ห์แบบสองบุคลิกที่ยากจะต้านทาน พวกเขาตกหลุมรักได้เร็ว รู้สึกรุนแรง แต่ซ่อนความลึกซึ้งที่แท้จริงของตัวเองไว้ ดูเปิดเผยและผ่อนคลาย แต่ภายในมีโลกภายในที่ซับซ้อนและน่าตื่นตาตื่นใจ',
      en: 'FAPO has an irresistible dual-nature charm. They fall fast and feel intensely, yet hide their true depth beneath the surface. Outwardly open and easygoing, but inside is a complex, fascinating inner world.',
    },
    loveStrengths: {
      th: [
        'มีเสน่ห์ที่หลงใหลได้ทันที',
        'ความลึกที่ซ่อนไว้ทำให้คู่อยากค้นหา',
        'เปิดรับและปรับตัวได้ดีในความสัมพันธ์',
        'รู้สึกลึกซึ้งแม้ดูผิวเผินจากภายนอก',
      ],
      en: [
        'Immediately captivating charm',
        'Hidden depth keeps a partner curious',
        'Open and adaptable in relationships',
        'Feels deeply despite appearing casual on the surface',
      ],
    },
    loveChallenges: {
      th: ['คู่อาจงุนงงกับพฤติกรรมที่ขัดแย้งกัน', 'ความรู้สึกที่แท้จริงอาจถูกเข้าใจผิด'],
      en: [
        'A partner may be confused by contradictory behavior',
        'True feelings can be misread or misunderstood',
      ],
    },
    idealDate: {
      th: 'กิจกรรมที่มีสองบรรยากาศ เช่น บาร์ที่เงียบตอนกลางวันและคึกคักกลางคืน หรือดูสิ่งที่มีสองด้านเสมอ',
      en: "Something with two moods — a bar that's quiet by day and lively by night, or any dual-natured experience.",
    },
    communicationStyle: {
      th: 'สลับระหว่างเปิดเผยและปิดทองหลังพระ คู่ต้องอ่านใจเป็น เพราะไม่ได้แสดงออกอย่างตรงไปตรงมาเสมอ',
      en: "Alternates between open and guarded — a partner needs to learn their cues as they aren't always direct.",
    },
    color: PINK,
  },
  FARE: {
    emoji: '📋',
    nickname: { th: 'ผู้จัดการความสัมพันธ์', en: 'Skilled Manager' },
    overview: {
      th: 'FARE เป็นคู่ชีวิตที่เชื่อถือได้และเปิดเผย พวกเขาตกหลุมรักได้ง่ายและแสดงออกชัดเจน แต่ตัดสินใจด้วยความสมเหตุสมผล พวกเขาสนับสนุนและดูแลคู่อย่างตั้งใจ ทำให้ความสัมพันธ์ดำเนินไปอย่างราบรื่น',
      en: 'FARE is a reliable, expressive partner. They fall in love easily and show it openly, but make relationship decisions with sound judgment. They support and care for their partner thoughtfully, keeping the relationship running smoothly.',
    },
    loveStrengths: {
      th: [
        'เชื่อถือได้และสม่ำเสมอในความรัก',
        'แสดงความรักออกมาได้ชัดเจนและอบอุ่น',
        'ตัดสินใจอย่างมีเหตุผลในสถานการณ์ยาก',
        'ดูแลความสัมพันธ์ให้ดำเนินไปได้อย่างดี',
      ],
      en: [
        'Reliable and consistent in love',
        'Warm and clear in expressing affection',
        'Makes sound decisions in difficult situations',
        "Actively maintains the relationship's health",
      ],
    },
    loveChallenges: {
      th: [
        'อาจจัดการมากเกินไปจนคู่รู้สึกอึดอัด',
        'ต้องการหลักฐานว่าความสัมพันธ์ดำเนินไปอย่างถูกต้อง',
      ],
      en: [
        'May over-manage the relationship, feeling stifling',
        'Needs reassurance that things are on track',
      ],
    },
    idealDate: {
      th: 'กิจกรรมที่มีการวางแผนและดำเนินได้ดี เช่น ทริปท่องเที่ยวที่จัดสรรดี หรืองานกิจกรรมที่ตกลงร่วมกัน',
      en: 'A well-planned activity — an organized trip or an event chosen together.',
    },
    communicationStyle: {
      th: 'สื่อสารได้ชัดเจน ตรงประเด็น และสร้างสรรค์ มักแนะนำทางออกเมื่อมีปัญหา',
      en: 'Clear, direct, and constructive — often suggests solutions when problems arise.',
    },
    color: PINK,
  },
  FARO: {
    emoji: '🌙',
    nickname: { th: 'สิ่งลึกลับแห่งราตรี', en: 'Mysterious One' },
    overview: {
      th: 'FARO มีเสน่ห์ที่ยากต่อการอธิบาย พวกเขาเปิดรับความรักง่าย แต่ประมวลทุกอย่างด้วยความเงียบและเหตุผล ดูลึกลับและห่างเหิน แต่แท้จริงแล้วมีโลกภายในที่อุดมสมบูรณ์อย่างน่าทึ่ง',
      en: 'FARO has a hard-to-explain magnetism. Open to love easily, yet processes everything with quiet reason. They appear mysterious and detached, but inside lies a remarkably rich inner world.',
    },
    loveStrengths: {
      th: [
        'มีความลึกและความมั่งคั่งภายในที่คู่ยิ่งค้นยิ่งหลงใหล',
        'ไม่ตัดสินอย่างรีบร้อนและรับฟังอย่างแท้จริง',
        'สร้างพื้นที่ปลอดภัยให้คู่รู้สึกได้รับการยอมรับ',
        'ตัดสินใจอย่างสงบและรอบคอบ',
      ],
      en: [
        'Rich inner depth that a partner keeps discovering',
        'Never rushes to judge and listens genuinely',
        'Creates a safe space where a partner feels accepted',
        'Calm and considered in decisions',
      ],
    },
    loveChallenges: {
      th: ['ความลึกลับอาจทำให้คู่รู้สึกโดดเดี่ยว', 'ขาดการแสดงออกอาจถูกตีความผิดว่าไม่แยแส'],
      en: [
        'Mysteriousness can make a partner feel lonely',
        'Lack of expression can be misread as indifference',
      ],
    },
    idealDate: {
      th: 'บรรยากาศที่เงียบสงบและมีความหมาย เช่น ดูดาว ลอยเรือ หรือเดินชายทะเลยามค่ำ',
      en: 'A quiet, meaningful setting — stargazing, a boat ride, or an evening walk by the sea.',
    },
    communicationStyle: {
      th: 'บทสนทนาที่ลึกและช้า ฟังมากกว่าพูด แต่เมื่อพูดมักมีคุณค่าและความหมายลึกซึ้ง',
      en: "Deep, unhurried conversations. Listens far more than they speak, but when they do, it's profound.",
    },
    color: PINK,
  },

  // ─── Follower + Cautious (Deep Dreamers) — Blue ─────────────────────────
  FCPE: {
    emoji: '🐕',
    nickname: { th: 'ฮาจิโกะผู้ซื่อสัตย์', en: 'Loyal Hachiko' },
    overview: {
      th: 'FCPE คือประเภทที่ซื่อสัตย์และทุ่มเทที่สุด พวกเขาใช้เวลาในการเปิดใจ แต่เมื่อรักแล้วรักอย่างไม่มีเงื่อนไขและแสดงออกมาอย่างเปิดเผยและอบอุ่น ความซื่อสัตย์ของพวกเขาหาได้ยากและน่าค่า',
      en: "FCPE is the most loyal and devoted of all types. They take time to open up, but once they love, it's unconditional — warm, openly expressed, and steadfast. Their loyalty is rare and precious.",
    },
    loveStrengths: {
      th: [
        'ซื่อสัตย์อย่างหาได้ยากในยุคนี้',
        'แสดงความรักอย่างอบอุ่นและชัดเจนเมื่อเปิดใจ',
        'ทุ่มเทอย่างไม่มีเงื่อนไขเมื่อมุ่งมั่น',
        'สร้างความสัมพันธ์ที่ยั่งยืนและมั่นคง',
      ],
      en: [
        "Rare loyalty in today's world",
        'Warm and clear in love once open',
        'Unconditionally devoted when committed',
        'Builds lasting, stable bonds',
      ],
    },
    loveChallenges: {
      th: [
        'ต้องใช้เวลานานในการเปิดใจ ทำให้คู่ต้องอดทน',
        'อาจยึดติดกับความสัมพันธ์นานเกินและปล่อยไม่ได้',
      ],
      en: [
        "Takes long to open up, requiring a partner's patience",
        'Can hold on to relationships too long, struggling to let go',
      ],
    },
    idealDate: {
      th: 'บรรยากาศที่สบายและคุ้นเคย เช่น ทำอาหารด้วยกันที่บ้าน หรือดูซีรีส์ที่ชอบร่วมกัน',
      en: 'A comfortable, familiar setting — cooking together at home or watching a favourite series.',
    },
    communicationStyle: {
      th: 'เมื่อเปิดใจแล้วพูดคุยได้อย่างอบอุ่นและเปิดเผย แต่ต้องการเวลาสร้างความไว้วางใจก่อน',
      en: 'Warm and open once trust is built — but needs significant time to get to that point.',
    },
    color: BLUE,
  },
  FCPO: {
    emoji: '🔥',
    nickname: { th: 'มอนสเตอร์ความรัก', en: 'Love Monster' },
    overview: {
      th: 'FCPO มีความรู้สึกรุนแรงอยู่ภายในที่แทบไม่เคยแสดงออกมาบนพื้นผิว พวกเขาระมัดระวังในการเปิดใจ ดูเงียบจากภายนอก แต่ภายในเต็มไปด้วยความรักและความหลงใหลอย่างล้นหลาม เมื่อห้ามใจไม่อยู่แล้ว ความรู้สึกจะระเบิดออกมาอย่างน่าทึ่ง',
      en: "FCPO harbours intense feelings that rarely surface. They are cautious about opening up, appearing quiet and reserved, but inside burns with overwhelming love and passion. When they can no longer hold back, it's remarkable.",
    },
    loveStrengths: {
      th: [
        'ความรู้สึกที่ลึกมากตั้งแต่ต้นแม้ไม่แสดงออก',
        'เมื่อเปิดใจแล้วรักอย่างสุดหัวใจอย่างแท้จริง',
        'ความลึกลับสร้างเสน่ห์ที่น่าสนใจ',
        'ทุ่มเทและซื่อสัตย์อย่างเต็มที่',
      ],
      en: [
        'Deeply intense feelings from the start, even if unshown',
        'Loves with their whole heart once opened',
        'Mystery creates genuine intrigue',
        'Fully devoted and faithful',
      ],
    },
    loveChallenges: {
      th: [
        'คู่อาจไม่รู้สึกได้ถึงความรู้สึกที่ซ่อนอยู่',
        'การระเบิดออกของความรู้สึกอาจทำให้คู่ตกใจ',
      ],
      en: [
        'A partner may not sense the hidden intensity',
        'Emotional eruptions can surprise an unprepared partner',
      ],
    },
    idealDate: {
      th: 'กิจกรรมที่เงียบแต่มีความเข้มข้น เช่น ไปห้องหนีออกด้วยกัน หรือดูหนังระทึกขวัญ',
      en: 'A quiet but intense activity — an escape room or watching a thriller together.',
    },
    communicationStyle: {
      th: 'พูดน้อยแต่รู้สึกมาก สัญญาณเล็กๆ มีความหมายมาก คู่ต้องเรียนรู้ที่จะอ่านภาษากาย',
      en: 'Says little but feels everything — small signals carry huge meaning. A partner must learn to read body language.',
    },
    color: BLUE,
  },
  FCRE: {
    emoji: '🐰',
    nickname: { th: 'กระต่ายนักคิด', en: 'Clever Rabbit' },
    overview: {
      th: 'FCRE เป็นประเภทที่ฉลาด อดทน และสุขุมในความรัก พวกเขาไม่ตกหลุมรักง่ายและคิดรอบคอบก่อนเสมอ แต่เมื่อเปิดใจแล้วสื่อสารได้ดีและแสดงออกอย่างมีเสน่ห์ พวกเขาเป็นคู่ที่ฉลาดและน่าพึ่งพา',
      en: "FCRE is smart, patient, and measured in love. They don't fall quickly and always think before acting, but once open, they communicate beautifully and express love with charm. They are a thoughtful, dependable partner.",
    },
    loveStrengths: {
      th: [
        'ฉลาดและรอบคอบในการตัดสินใจทุกอย่าง',
        'เมื่อพูดออกมาจะโรแมนติกและน่าฟัง',
        'เป็นคู่ที่น่าเชื่อถือและมีเหตุผล',
        'ไม่ตัดสินอย่างรีบร้อนและให้โอกาสอย่างเป็นธรรม',
      ],
      en: [
        'Smart and careful in every decision',
        'Romantic and meaningful when they do speak',
        'A reliable, rational partner',
        'Never rushes to judge and gives fair chances',
      ],
    },
    loveChallenges: {
      th: [
        'ใช้เวลาในการวิเคราะห์นานจนโมเมนต์โรแมนติกผ่านไป',
        'ความระมัดระวังสูงอาจทำให้ดูขาดความกระตือรือร้น',
      ],
      en: [
        'Over-analysis can cause romantic moments to pass',
        'High caution can appear as lack of enthusiasm',
      ],
    },
    idealDate: {
      th: 'กิจกรรมที่ท้าทายความคิดร่วมกัน เช่น เล่นเกมกระดาน หรือไปงาน Quiz Night',
      en: 'A mentally stimulating shared activity — board games, trivia night, or a puzzle.',
    },
    communicationStyle: {
      th: 'แม่นยำและมีเจตนา เมื่อพูดทุกคำมีความหมาย ฟังอย่างตั้งใจและตอบสนองอย่างรอบคอบ',
      en: 'Precise and intentional — every word counts. Listens actively and responds with care.',
    },
    color: BLUE,
  },
  FCRO: {
    emoji: '🎩',
    nickname: { th: 'จอมมายาแห่งความรัก', en: 'Romance Magician' },
    overview: {
      th: 'FCRO เป็นประเภทที่ลึกลับและน่าค้นหามากที่สุด พวกเขาระมัดระวัง สุขุม ไม่ตกหลุมรักง่าย และซ่อนความรู้สึกไว้อย่างแนบเนียน แต่เมื่อมุ่งมั่นแล้ว พวกเขาสร้างความมหัศจรรย์ในความสัมพันธ์ด้วยวิธีที่ไม่มีใครเหมือน',
      en: 'FCRO is the most mysterious and intriguing of all types. Cautious, measured, slower to fall, and expertly hidden in feelings — but once committed, they create magic in a relationship in ways no one else can.',
    },
    loveStrengths: {
      th: [
        'สร้างความมหัศจรรย์ในความสัมพันธ์ที่ไม่มีใครทำได้',
        'ความลึกลับทำให้ความสัมพันธ์ไม่เคยน่าเบื่อ',
        'ซื่อสัตย์อย่างลึกซึ้งเมื่อมุ่งมั่น',
        'มีมุมมองและวิธีคิดแบบเฉพาะตัวที่คู่ค้นพบได้ตลอด',
      ],
      en: [
        'Creates relationship magic that no one else can replicate',
        'Mystery keeps the relationship forever interesting',
        'Deeply faithful once committed',
        'Has a unique worldview a partner keeps discovering',
      ],
    },
    loveChallenges: {
      th: ['ต้องใช้เวลามากที่สุดก่อนจะเปิดใจให้ใคร', 'ความลึกลับสูงอาจทำให้คู่รู้สึกห่างเหิน'],
      en: [
        'Needs the most time of all types before opening up',
        'Deep mystery can make a partner feel distant',
      ],
    },
    idealDate: {
      th: 'บรรยากาศที่มีเวทมนต์และน่าค้นหา เช่น ร้านอาหารที่มีเรื่องราว เที่ยวงานศิลปะ หรือดูการแสดงพิเศษ',
      en: 'A magical, discovery-filled setting — a restaurant with a story, an art show, or a special performance.',
    },
    communicationStyle: {
      th: 'สื่อสารผ่านสัญลักษณ์ ท่าทาง และบรรยากาศมากกว่าคำพูดตรงๆ คู่ต้องใช้เวลาเรียนรู้ภาษาของพวกเขา',
      en: 'Communicates through symbols, gestures, and atmosphere more than direct words. A partner must spend time learning their language.',
    },
    color: BLUE,
  },
};
