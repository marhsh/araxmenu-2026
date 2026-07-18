const data = {
  iranian: {
    title: "🍽 غذاهای ایرانی",
    items: [
      { name: "زرشک پلو با مرغ مجلسی (400 گرم ران مرغ)", price: "450,000 تومان", img: "image/42.jpg", available: true },
      { name: "زرشک پلو با مرغ مجلسی مایکروفری (400 گرم ران مرغ)", price: "510,000 تومان", img: "image/32.webp", available: true },
      { name: "چلو خورشت قرمه سبزی", price: "320,000 تومان", img: "image/48.jpg", available: true },
      { name: "چلو خورشت قیمه بادمجان", price: "320,000 تومان", img: "image/47.jpg", available: true },
      { name: "چلو کره زعفرانی", price: "160,000 تومان", img: "image/36.jpg", available: true },
      { name: "ته‌چین زعفرانی (۶ تکه)", price: "180,000 تومان", img: "image/37.jpg", available: true }
    ]
  },
  kabab: {
    title: "🍢 چلوکباب‌ها",
    sections: [
      { subtitle: "🥇 VIP", items: [
          { name: "چلو جوجه کباب VIP (290 گرم سینه مرغ)", price: "650,000 تومان", img: "image/1.jpg", available: true },
          { name: "چلو جوجه کباب ماسالا VIP (290 گرم ران مرغ)", price: "650,000 تومان", img: "image/4.jpg", available: true },
          { name: "چلو کوبیده (لقمه) VIP (250 گرم گوشت مخلوط)", price: "650,000 تومان", img: "image/6.jpg", available: true },
          { name: "چلو کباب وزیری (میکس) VIP (220 گرم سینه مرغ + 200 گرم گوشت مخلوط)", price: "780,000 تومان", img: "image/9.jpg", available: true },
          { name: "چلو کباب نگینی VIP (250 گرم گوشت مخلوط + 40 گرم سینه مرغ)", price: "690,000 تومان", img: "image/12.jpg", available: true }
        ]},
      { subtitle: "🥈 ویژه مایکروفری", items: [
          { name: "چلو جوجه کباب ویژه مایکروفری (220 گرم سینه مرغ)", price: "510,000 تومان", img: "image/2.jpg", available: true },
          { name: "چلو جوجه کباب ماسالا ویژه مایکروفری (220 گرم ران مرغ)", price: "510,000 تومان", img: "image/5.jpg", available: true },
          { name: "چلو کوبیده (لقمه) ویژه مایکروفری (200 گرم گوشت مخلوط)", price: "510,000 تومان", img: "image/7.jpg", available: true },
          { name: "چلو کباب وزیری (میکس) ویژه مایکروفری (220 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "650,000 تومان", img: "image/10.jpg", available: true },
          { name: "چلو کباب نگینی ویژه مایکروفری (180 گرم گوشت مخلوط + 30 گرم سینه مرغ)", price: "540,000 تومان", img: "image/13.jpg", available: true }
        ]},
      { subtitle: "⭐ ویژه آراکس", items: [
          { name: "چلو جوجه کباب ویژه آراکس (220 گرم سینه مرغ)", price: "450,000 تومان", img: "image/3.jpg", available: true },
          { name: "چلو جوجه کباب ماسالا ویژه آراکس (220 گرم ران مرغ)", price: "450,000 تومان", img: "image/57.jpg", available: true },
          { name: "چلو کوبیده (لقمه) ویژه آراکس (200 گرم گوشت مخلوط)", price: "450,000 تومان", img: "image/41.jpg", available: true },
          { name: "چلو کباب وزیری (میکس) ویژه آراکس (220 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "590,000 تومان", img: "image/45.jpg", available: true },
          { name: "چلو کباب نگینی ویژه آراکس (180 گرم گوشت مخلوط + 30 گرم سینه مرغ)", price: "480,000 تومان", img: "image/40.jpg", available: true }
        ]},
      { subtitle: "🥉 اقتصادی", items: [
          { name: "چلو جوجه کباب اقتصادی (180 گرم سینه مرغ)", price: "360,000 تومان", img: "image/3.jpg", available: true },
          { name: "چلو کوبیده (لقمه) اقتصادی (160 گرم گوشت مخلوط)", price: "360,000 تومان", img: "image/41.jpg", available: true },
          { name: "چلو کباب وزیری (میکس) اقتصادی (180 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "510,000 تومان", img: "image/45.jpg", available: true }
        ]}
    ]
  },
  khoreak: {
    title: "🍗 خوراک‌ها",
    sections: [
      { subtitle: "🥇 VIP", items: [
          { name: "خوراک جوجه کباب VIP (290 گرم سینه مرغ)", price: "480,000 تومان", img: "image/16.jpg", available: true },
          { name: "خوراک جوجه کباب ماسالا VIP (290 گرم ران مرغ)", price: "480,000 تومان", img: "image/43.jpg", available: true },
          { name: "خوراک کوبیده (لقمه) VIP (250 گرم گوشت مخلوط)", price: "480,000 تومان", img: "image/20.jpg", available: true },
          { name: "خوراک کباب وزیری (میکس) VIP (220 گرم سینه مرغ + 200 گرم گوشت مخلوط)", price: "590,000 تومان", img: "image/23.jpg", available: true },
          { name: "خوراک کباب نگینی VIP (250 گرم گوشت مخلوط + 40 گرم سینه مرغ)", price: "500,000 تومان", img: "image/27.jpg", available: true }
        ]},
      { subtitle: "🥈 ویژه", items: [
          { name: "خوراک جوجه کباب ویژه مایکروفری (220 گرم سینه مرغ)", price: "350,000 تومان", img: "image/17.jpg", available: true },
          { name: "خوراک جوجه کباب ماسالا ویژه مایکروفری (220 گرم ران مرغ)", price: "350,000 تومان", img: "image/39.jpg", available: true },
          { name: "خوراک کوبیده (لقمه) ویژه مایکروفری (200 گرم گوشت مخلوط)", price: "350,000 تومان", img: "image/21.jpg", available: true },
          { name: "خوراک کباب وزیری (میکس) ویژه مایکروفری (220 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "510,000 تومان", img: "image/24.jpg", available: true },
          { name: "خوراک کباب نگینی ویژه مایکروفری (180 گرم گوشت مخلوط + 30 گرم سینه مرغ)", price: "380,000 تومان", img: "image/26.jpg", available: true }
        ]},
      { subtitle: "🥉 اقتصادی", items: [
          { name: "خوراک جوجه کباب اقتصادی (180 گرم سینه مرغ)", price: "270,000 تومان", img: "image/17.jpg", available: true },
          { name: "خوراک کوبیده اقتصادی (160 گرم گوشت مخلوط)", price: "270,000 تومان", img: "image/21.jpg", available: true },
          { name: "خوراک کباب وزیری (میکس) اقتصادی (180 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "420,000 تومان", img: "image/24.jpg", available: true }
        ]}
    ]
  },
  drink: {
    title: "🥤 نوشیدنی‌ها",
    items: [
      { name: "نوشابه قوطی (کوکا، فانتا، اسپرایت)", price: "80,000 تومان", img: "image/drink/4.jpg", available: true },
      { name: "نوشابه قوطی کوکا زیرو", price: "85,000 تومان", img: "image/drink/6.webp", available: true },
      { name: "نوشابه بطری (کوکا، فانتا، اسپرایت)", price: "48,000 تومان", img: "image/drink/9.png", available: true },
      { name: "نوشابه خانواده (کوکا، فانتا، اسپرایت)", price: "110,000 تومان", img: "image/drink/3.png", available: true },
      { name: "نوشابه خانواده کوکا زیرو", price: "120,000 تومان", img: "image/drink/8.jpg", available: true },
      { name: "دلستر قوطی (لیمو، هلو، استوایی)", price: "80,000 تومان", img: "image/drink/1.jpg", available: true },
      { name: "دلستر خانواده (لیمو، هلو، استوایی)", price: "120,000 تومان", img: "image/drink/2.png", available: true },
      { name: "دوغ خانواده خوشگوار", price: "140,000 تومان", img: "image/drink/5.png", available: true },
      { name: "دوغ لیوانی", price: "38,000 تومان", img: "image/drink/7.png", available: true },
      { name: "انرژی‌زا One Day", price: "120,000 تومان", img: "image/drink/10.jpg", available: true },
      { name: "آبمعدنی بزرگ", price: "35,000 تومان", img: "image/drink/12.webp", available: true },
      { name: "آبمعدنی کوچک", price: "20,000 تومان", img: "image/drink/11.webp", available: true },
      { name: "لیموناد قوطی", price: "82,000 تومان", img: "image/drink/13.webp", available: true },
      { name: "لیموناد خانواده", price: "105,000 تومان", img: "image/drink/14.webp", available: true }
    ]
  },
  side: {
    title: "🧂 مخلفات",
    items: [
      { name: "ماست", price: "35,000 تومان", img: "image/59.jpg", available: true },
      { name: "ماست و خیار", price: "45,000 تومان", img: "image/52.jpg", available: true },
      { name: "سالاد شیرازی", price: "45,000 تومان", img: "image/53.jpg", available: true },
      { name: "سالاد فصل", price: "60,000 تومان", img: "image/60.jpg", available: true },
      { name: "ماست موسیر شرکتی", price: "40,000 تومان", img: "image/61.jpg", available: true },
      { name: "زیتون پرورده شرکتی", price: "60,000 تومان", img: "image/62.jpg", available: true },
      { name: "ترشی", price: "40,000 تومان", img: "image/50.jpg", available: true }
    ]
  },
  hotstarter: {
    title: "🍲 پیش‌غذا",
    items: [
      { name: "سوپ روز", price: "60,000 تومان", img: "image/58.jpg", available: true }
    ]
  }
};