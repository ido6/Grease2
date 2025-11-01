export type Product = { 
  id: number; 
  title: string; 
  color: string; 
  size: number[]; 
  heel: 'flat'|'mid'|'high'; 
  collection: string; 
  image: string;
  price: number;
};

export type Bag = { 
  id: number; 
  title: string; 
  color: string; 
  material: string; 
  size: 'small'|'medium'|'large'; 
  image: string;
  price: number;
};

export const PRODUCTS: Product[] = [
  { 
    id: 1, 
    title: 'סנדל רצועות צהוב', 
    color: 'yellow', 
    size: [36,37,38,39], 
    heel: 'mid', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_3hvxti3hvxti3hvx.png',
    price: 349.90
  },
  { 
    id: 2, 
    title: 'סניקרס לבן', 
    color: 'white', 
    size: [36,37,38,39,40], 
    heel: 'flat', 
    collection: 'classic', 
    image: '/Photos/Gemini_Generated_Image_40hzms40hzms40hz.png',
    price: 299.90
  },
  { 
    id: 3, 
    title: 'עקב שחור קלאסי', 
    color: 'black', 
    size: [37,38,39], 
    heel: 'high', 
    collection: 'evening', 
    image: '/Photos/Gemini_Generated_Image_6feuft6feuft6feu.png',
    price: 450.00
  },
  { 
    id: 4, 
    title: 'נעלי עקב אדומות', 
    color: 'red', 
    size: [36,37,38,39,40], 
    heel: 'high', 
    collection: 'evening', 
    image: '/Photos/Gemini_Generated_Image_6ova7b6ova7b6ova.png',
    price: 420.00
  },
  { 
    id: 5, 
    title: 'סנדלי פלטפורמה', 
    color: 'beige', 
    size: [36,37,38,39,40,41], 
    heel: 'mid', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_7mtfc07mtfc07mtf.png',
    price: 380.00
  },
  { 
    id: 6, 
    title: 'נעלי עקב זהב', 
    color: 'gold', 
    size: [37,38,39,40], 
    heel: 'high', 
    collection: 'evening', 
    image: '/Photos/Gemini_Generated_Image_8c6i6q8c6i6q8c6i.png',
    price: 410.00
  },
  { 
    id: 7, 
    title: 'סנדלי קיץ לבנים', 
    color: 'white', 
    size: [36,37,38,39], 
    heel: 'flat', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_8perus8perus8per.png',
    price: 280.00
  },
  { 
    id: 8, 
    title: 'נעלי בלט שחורות', 
    color: 'black', 
    size: [35,36,37,38,39], 
    heel: 'flat', 
    collection: 'classic', 
    image: '/Photos/Gemini_Generated_Image_9p31a09p31a09p31.png',
    price: 220.00
  },
  { 
    id: 9, 
    title: 'סנדלי דייסון', 
    color: 'tan', 
    size: [36,37,38,39,40], 
    heel: 'flat', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_aerjvdaerjvdaerj.png',
    price: 320.00
  },
  { 
    id: 10, 
    title: 'נעלי עקב בצבע פסטל', 
    color: 'pink', 
    size: [36,37,38,39], 
    heel: 'high', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_arllzmarllzmarll.png',
    price: 400.00
  },
  { 
    id: 11, 
    title: 'סניקרס גריז', 
    color: 'black', 
    size: [36,37,38,39,40,41], 
    heel: 'flat', 
    collection: 'classic', 
    image: '/Photos/Gemini_Generated_Image_cq9vokcq9vokcq9v.png',
    price: 350.00
  },
  { 
    id: 12, 
    title: 'נעלי עקב כסופות', 
    color: 'silver', 
    size: [37,38,39], 
    heel: 'high', 
    collection: 'evening', 
    image: '/Photos/Gemini_Generated_Image_cqwvewcqwvewcqwv.png',
    price: 460.00
  },
  { 
    id: 13, 
    title: 'סנדלי רצועות חומים', 
    color: 'brown', 
    size: [36,37,38,39,40], 
    heel: 'mid', 
    collection: 'classic', 
    image: '/Photos/Gemini_Generated_Image_es5j4res5j4res5j.png',
    price: 340.00
  },
  { 
    id: 14, 
    title: 'נעלי עקב ורודות', 
    color: 'pink', 
    size: [36,37,38,39], 
    heel: 'high', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_frgkxpfrgkxpfrgk.png',
    price: 390.00
  },
  { 
    id: 15, 
    title: 'סנדלי אצבע שחורים', 
    color: 'black', 
    size: [36,37,38,39,40], 
    heel: 'flat', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_i2rrtxi2rrtxi2rr.png',
    price: 250.00
  },
  { 
    id: 16, 
    title: 'נעלי מניבה לבנות', 
    color: 'white', 
    size: [36,37,38,39,40], 
    heel: 'mid', 
    collection: 'classic', 
    image: '/Photos/Gemini_Generated_Image_i2rrtxi2rrtxi2rr (1).png',
    price: 370.00
  },
  { 
    id: 17, 
    title: 'נעלי עקב כחולות', 
    color: 'blue', 
    size: [37,38,39,40], 
    heel: 'high', 
    collection: 'evening', 
    image: '/Photos/Gemini_Generated_Image_iaxjf4iaxjf4iaxj.png',
    price: 430.00
  },
  { 
    id: 18, 
    title: 'סנדלי פלטפורמה שחורים', 
    color: 'black', 
    size: [36,37,38,39,40], 
    heel: 'mid', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_jw8bqjjw8bqjjw8b.png',
    price: 360.00
  },
  { 
    id: 19, 
    title: 'נעלי עקב ירוקות', 
    color: 'green', 
    size: [36,37,38,39], 
    heel: 'high', 
    collection: 'evening', 
    image: '/Photos/Gemini_Generated_Image_ke3eb7ke3eb7ke3e.png',
    price: 440.00
  },
  { 
    id: 20, 
    title: 'סניקרס גריז קלאסי', 
    color: 'white', 
    size: [36,37,38,39,40,41], 
    heel: 'flat', 
    collection: 'classic', 
    image: '/Photos/Gemini_Generated_Image_kvld4zkvld4zkvld.png',
    price: 330.00
  },
  { 
    id: 21, 
    title: 'נעלי מגפים קצרים', 
    color: 'brown', 
    size: [36,37,38,39,40], 
    heel: 'mid', 
    collection: 'classic', 
    image: '/Photos/Gemini_Generated_Image_nhqaz7nhqaz7nhqa.png',
    price: 480.00
  },
  { 
    id: 22, 
    title: 'סנדלי לייזר צבעוניים', 
    color: 'multicolor', 
    size: [36,37,38,39,40], 
    heel: 'flat', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_pebd01pebd01pebd.png',
    price: 310.00
  },
  { 
    id: 23, 
    title: 'נעלי עקב טורקז', 
    color: 'turquoise', 
    size: [37,38,39], 
    heel: 'high', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_r1w8uwr1w8uwr1w8.png',
    price: 415.00
  },
  { 
    id: 24, 
    title: 'סנדלי אצבע חומים', 
    color: 'brown', 
    size: [36,37,38,39], 
    heel: 'flat', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_ra0hgzra0hgzra0h.png',
    price: 260.00
  },
  { 
    id: 25, 
    title: 'נעלי עקב ארגמן', 
    color: 'burgundy', 
    size: [37,38,39], 
    heel: 'high', 
    collection: 'evening', 
    image: '/Photos/Gemini_Generated_Image_s8mytss8mytss8my.png',
    price: 445.00
  },
  { 
    id: 26, 
    title: 'סנדלי פלטפורמה לבנים', 
    color: 'white', 
    size: [36,37,38,39,40], 
    heel: 'mid', 
    collection: 'summer', 
    image: '/Photos/Gemini_Generated_Image_vtbn8fvtbn8fvtbn.png',
    price: 375.00
  },
  { 
    id: 27, 
    title: 'נעלי עקב זהב מבריק', 
    color: 'gold', 
    size: [36,37,38,39], 
    heel: 'high', 
    collection: 'evening', 
    image: '/Photos/Gemini_Generated_Image_vtkv6dvtkv6dvtkv.png',
    price: 420.00
  }
];

export const BAGS: Bag[] = [
  { 
    id: 1, 
    title: 'תיק עור קלאסי', 
    color: 'brown', 
    material: 'leather', 
    size: 'large', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARNlHKT2rENjY1nGE6oGJ-IU9vGtZZYSeaWtLYmk_o0T9o5MV9V8qczl7-aCxvGp06zqFPQ4NHTpPM17aTI6ge2WA41TM9UxwraPEIq3btelHvQcwNPH24zHsdGuEY_U0LFN96Jcjh5BqjxxLpJbh_yndunpviOcTpaIxJqLzy2y8XT9BKNg4TWgbmBtSDl4kzhGY3wW5CWP20gFQ7TXrILTJYeVWHXqyIG71vXWtUy12RRIBFiLU6SCuVwdj1mTcG2TQtg7nKuHs',
    price: 580.00
  },
  { 
    id: 2, 
    title: 'תיק צד קלוע', 
    color: 'beige', 
    material: 'woven', 
    size: 'medium', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMUAL0ZD8Fg9zHWphCrEFzcrMZPkdWc8l4XdYTB69yXs5kHwLPDf1ZInKR7P8PtDi1MZHDL0QTzdCMHDYFUZOFyy1R4U9DYxIuvvN4Z7SuAPi4DOhVzyRi9NJFFd2qq-mr23gBC_0w8MC-pRuntOIsTv7lBevYyWf3lxiL87q1v9pQfgEf3_7sm8y-PqpTNIa9rq3CAoWEilyKGwIcz31fFjAYspwnB4TTPiYwl8gVgxWvFA8yrPYAx72idRwNn9aqOsSPKwo7nqc',
    price: 420.00
  }
];
