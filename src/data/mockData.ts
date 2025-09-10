export type Product = {
  id: number;
  category: "hair" | "face" | "body" | "hands";
  name: string;
  description: string;
  price: number;
  imageSrc: string;
};
export const allProductsData: Product[] = [
  // --- منتجات الشعر ---
  {
    id: 1,
    category: "hair",
    name: "شامبو زيت الأرغان",
    description: "يغذي ويصلح الشعر التالف.",
    price: 120.0,
    imageSrc: "/images/hair.png",
  },
  {
    id: 2,
    category: "hair",
    name: "بلسم إصلاح مكثف",
    description: "لشعر ناعم وسهل التسريح.",
    price: 95.5,
    imageSrc: "/images/hair.png",
  },
  {
    id: 3,
    category: "hair",
    name: "ماسك الشعر بالورد",
    description: "مزيج فريد من الزيوت الطبيعية.",
    price: 150.0,
    imageSrc: "/images/hair.png",
  },

  // --- منتجات الوجه ---
  {
    id: 4,
    category: "face",
    name: "سيروم الذهب",
    description: "مضاد للشيخوخة ويعزز النضارة.",
    price: 250.0,
    imageSrc: "/images/face.png",
  },
  {
    id: 5,
    category: "face",
    name: "منظف رغوي بالصبار",
    description: "ينظف البشرة بعمق ويلطفها.",
    price: 80.0,
    imageSrc: "/images/face.png",
  },
  {
    id: 6,
    category: "face",
    name: "كريم ترطيب نهاري",
    description: "يحمي من أشعة الشمس ويرطب.",
    price: 180.0,
    imageSrc: "/images/face.png",
  },

  // --- منتجات الجسم (جديد) ---
  {
    id: 7,
    category: "body",
    name: "لوشن الجسم باللافندر",
    description: "لترطيب يدوم 24 ساعة ورائحة مهدئة.",
    price: 110.0,
    imageSrc: "/images/body.png",
  },
  {
    id: 8,
    category: "body",
    name: "مقشر الجسم بالقهوة",
    description: "يزيل الجلد الميت وينعم البشرة.",
    price: 135.0,
    imageSrc: "/images/body.png",
  },

  // --- منتجات اليدين (جديد) ---
  {
    id: 9,
    category: "hands",
    name: "كريم اليدين المكثف",
    description: "يعالج الجفاف والتشققات بفعالية.",
    price: 75.0,
    imageSrc: "/images/hand.png",
  },
  {
    id: 10,
    category: "hands",
    name: "زيت الأظافر المقوي",
    description: "لأظافر قوية وصحية.",
    price: 60.0,
    imageSrc: "/images/hand.png",
  },
];
