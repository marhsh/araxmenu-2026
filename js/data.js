const data = {
  iranian: {
    title: "🍽 غذاهای ایرانی",
    items: [
      { name: "زرشک پلو با مرغ مجلسی (400 گرم ران مرغ)", price: "450,000 تومان", img: "image/42.webp", available: true },
      { name: "زرشک پلو با مرغ مجلسی مایکروفری (400 گرم ران مرغ)", price: "520,000 تومان", img: "image/32.webp", available: true },
      { name: "چلو خورشت قرمه سبزی", price: "340,000 تومان", img: "image/48.webp", available: true },
      { name: "چلو خورشت قیمه سیب زمینی", price: "340,000 تومان", img: "image/47.webp", available: true },
      { name: "چلو کره زعفرانی", price: "170,000 تومان", img: "image/36.webp", available: true },
      { name: "ته‌چین زعفرانی (۶ تکه)", price: "200,000 تومان", img: "image/37.webp", available: true }
    ]
  },
  kabab: {
    title: "🍢 چلوکباب‌ها",
    sections: [
      { subtitle: "🥇 VIP", items: [
          { name: "چلو جوجه کباب VIP (290 گرم سینه مرغ)", price: "680,000 تومان", img: "image/1.webp", available: true },
          { name: "چلو جوجه کباب ماسالا VIP (290 گرم ران مرغ)", price: "680,000 تومان", img: "image/4.webp", available: true },
          { name: "چلو کوبیده (لقمه) VIP (250 گرم گوشت مخلوط)", price: "680,000 تومان", img: "image/6.webp", available: true },
          { name: "چلو کباب وزیری (میکس) VIP (220 گرم سینه مرغ + 200 گرم گوشت مخلوط)", price: "770,000 تومان", img: "image/9.webp", available: true },
          { name: "چلو کباب نگینی VIP (250 گرم گوشت مخلوط + 40 گرم سینه مرغ)", price: "720,000 تومان", img: "image/12.webp", available: true }
        ]},
      { subtitle: "🥈 ویژه مایکروفری", items: [
          { name: "چلو جوجه کباب ویژه مایکروفری (220 گرم سینه مرغ)", price: "535,000 تومان", img: "image/2.webp", available: true },
          { name: "چلو جوجه کباب ماسالا ویژه مایکروفری (220 گرم ران مرغ)", price: "535,000 تومان", img: "image/5.webp", available: true },
          { name: "چلو کوبیده (لقمه) ویژه مایکروفری (200 گرم گوشت مخلوط)", price: "545,000 تومان", img: "image/7.webp", available: true },
          { name: "چلو کباب وزیری (میکس) ویژه مایکروفری (220 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "685,000 تومان", img: "image/10.webp", available: true },
          { name: "چلو کباب نگینی ویژه مایکروفری (180 گرم گوشت مخلوط + 30 گرم سینه مرغ)", price: "575,000 تومان", img: "image/13.webp", available: true }
        ]},
      { subtitle: "⭐ ویژه آراکس", items: [
          { name: "چلو جوجه کباب ویژه آراکس (220 گرم سینه مرغ)", price: "460,000 تومان", img: "image/3.webp", available: true },
          { name: "چلو جوجه کباب ماسالا ویژه آراکس (220 گرم ران مرغ)", price: "460,000 تومان", img: "image/57.webp", available: true },
          { name: "چلو کوبیده (لقمه) ویژه آراکس (200 گرم گوشت مخلوط)", price: "460,000 تومان", img: "image/41.webp", available: true },
          { name: "چلو کباب وزیری (میکس) ویژه آراکس (220 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "610,000 تومان", img: "image/45.webp", available: true },
          { name: "چلو کباب نگینی ویژه آراکس (180 گرم گوشت مخلوط + 30 گرم سینه مرغ)", price: "500,000 تومان", img: "image/40.webp", available: true }
        ]},
      { subtitle: "🥉 اقتصادی", items: [
          { name: "چلو جوجه کباب اقتصادی (180 گرم سینه مرغ)", price: "380,000 تومان", img: "image/3.webp", available: true },
          { name: "چلو کوبیده (لقمه) اقتصادی (160 گرم گوشت مخلوط)", price: "380,000 تومان", img: "image/41.webp", available: true },
          { name: "چلو کباب وزیری (میکس) اقتصادی (180 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "535,000 تومان", img: "image/45.webp", available: true }
        ]}
    ]
  },
  khoreak: {
    title: "🍗 خوراک‌ها",
    sections: [
      { subtitle: "🥇 VIP", items: [
          { name: "خوراک جوجه کباب VIP (290 گرم سینه مرغ)", price: "490,000 تومان", img: "image/16.webp", available: true },
          { name: "خوراک جوجه کباب ماسالا VIP (290 گرم ران مرغ)", price: "490,000 تومان", img: "image/43.webp", available: true },
          { name: "خوراک کوبیده (لقمه) VIP (250 گرم گوشت مخلوط)", price: "490,000 تومان", img: "image/20.webp", available: true },
          { name: "خوراک کباب وزیری (میکس) VIP (220 گرم سینه مرغ + 200 گرم گوشت مخلوط)", price: "610,000 تومان", img: "image/23.webp", available: true },
          { name: "خوراک کباب نگینی VIP (250 گرم گوشت مخلوط + 40 گرم سینه مرغ)", price: "520,000 تومان", img: "image/27.webp", available: true }
        ]},
      { subtitle: "🥈 ویژه", items: [
          { name: "خوراک جوجه کباب ویژه (220 گرم سینه مرغ)", price: "360,000 تومان", img: "image/17.webp", available: true },
          { name: "خوراک جوجه کباب ماسالا ویژه  (220 گرم ران مرغ)", price: "360,000 تومان", img: "image/39.webp", available: true },
          { name: "خوراک کوبیده (لقمه) ویژه  (200 گرم گوشت مخلوط)", price: "360,000 تومان", img: "image/21.webp", available: true },
          { name: "خوراک کباب وزیری (میکس) ویژه (220 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "530,000 تومان", img: "image/24.webp", available: true },
          { name: "خوراک کباب نگینی ویژه  (180 گرم گوشت مخلوط + 30 گرم سینه مرغ)", price: "400,000 تومان", img: "image/26.webp", available: true }
        ]},
      { subtitle: "🥉 اقتصادی", items: [
          { name: "خوراک جوجه کباب اقتصادی (180 گرم سینه مرغ)", price: "280,000 تومان", img: "image/17.webp", available: true },
          { name: "خوراک کوبیده اقتصادی (160 گرم گوشت مخلوط)", price: "280,000 تومان", img: "image/21.webp", available: true },
          { name: "خوراک کباب وزیری (میکس) اقتصادی (180 گرم سینه مرغ + 160 گرم گوشت مخلوط)", price: "440,000 تومان", img: "image/24.webp", available: true }
        ]}
    ]
  },
  drink: {
    title: "🥤 نوشیدنی‌ها",
    items: [
      { name: "نوشابه قوطی (کوکا، فانتا، اسپرایت)", price: "85,000 تومان", img: "image/drink/4.webp", available: true },
      { name: "نوشابه قوطی کوکا زیرو", price: "90,000 تومان", img: "image/drink/6.webp", available: true },
      { name: "نوشابه بطری (کوکا، فانتا، اسپرایت)", price: "55,000 تومان", img: "image/drink/9.webp", available: true },
      { name: "نوشابه خانواده (کوکا، فانتا، اسپرایت)", price: "120,000 تومان", img: "image/drink/3.webp", available: true },
      { name: "نوشابه خانواده کوکا زیرو", price: "130,000 تومان", img: "image/drink/8.webp", available: true },
      { name: "دلستر قوطی (لیمو، هلو، استوایی)", price: "90,000 تومان", img: "image/drink/1.webp", available: true },
      { name: "دلستر خانواده (لیمو، هلو، استوایی)", price: "125,000 تومان", img: "image/drink/2.webp", available: true },
      { name: "دوغ خانواده خوشگوار", price: "140,000 تومان", img: "image/drink/5.webp", available: true },
      { name: "دوغ لیوانی", price: "40,000 تومان", img: "image/drink/7.webp", available: true },
      { name: "انرژی‌زا One Day", price: "130,000 تومان", img: "image/drink/10.webp", available: true },
      { name: "آبمعدنی بزرگ", price: "40,000 تومان", img: "image/drink/12.webp", available: true },
      { name: "آبمعدنی کوچک", price: "25,000 تومان", img: "image/drink/11.webp", available: true },
      { name: "لیموناد قوطی", price: "90,000 تومان", img: "image/drink/13.webp", available: true },
      { name: "لیموناد خانواده", price: "125,000 تومان", img: "image/drink/14.webp", available: true }
    ]
  },
  side: {
    title: "🧂 مخلفات",
    items: [
      { name: "ماست", price: "45,000 تومان", img: "image/59.webp", available: true },
      { name: "ماست و خیار", price: "60,000 تومان", img: "image/52.webp", available: true },
      { name: "سالاد شیرازی", price: "60,000 تومان", img: "image/53.webp", available: true },
      { name: "سالاد فصل", price: "75,000 تومان", img: "image/60.webp", available: true },
      { name: "ماست موسیر شرکتی", price: "50,000 تومان", img: "image/61.webp", available: true },
      { name: "زیتون پرورده شرکتی", price: "70,000 تومان", img: "image/62.webp", available: true },
      { name: "ترشی", price: "50,000 تومان", img: "image/50.webp", available: true }
    ]
  },
  hotstarter: {
    title: "🍲 پیش‌غذا",
    items: [
      { name: "سوپ روز", price: "80,000 تومان", img: "image/58.webp", available: true }
    ]
  }
};