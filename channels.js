/*
  فهرست ثابت شبکه‌ها
  ===================
  هر خط یک شبکه‌ست:

    { id: "tv1", name: "IRIB TV1", fa: "شبکه یک", cat: "iran", badge: "۱", color: "#1565c0",
      streams: ["https://.../playlist.m3u8"], embed: "https://...", urls: ["https://..."] },

    id       شناسه‌ی یکتا با حروف لاتین (برای علاقه‌مندی‌ها، ترتیب و پنهان کردن)
    name     نام نمایشی شبکه (انگلیسی، مثل رسیور)
    fa       نام فارسی (برای جستجو)
    cat      دسته (یکی از id های SAT_CATEGORIES)
    badge    متن کوتاه لوگو (اختیاری)
    color    رنگ لوگو (اختیاری)
    streams  لینک‌های پخش مستقیم (.m3u8) که داخل خود صفحه پخش می‌شن؛ به ترتیب امتحان می‌شن
    embed    صفحه‌ای که داخل کادر پیش‌نمایش باز می‌شه (اختیاری)
    urls     سایت‌های پخش شبکه؛ اگه پخش مستقیم نبود یا کار نکرد، اینا باز می‌شن

  شبکه‌های دیگه رو هر کاربر خودش اضافه می‌کنه (⚙ ← افزودن شبکه، یا بازگردانی از فایل پشتیبان)؛
  دسته‌های خالی توی منو نشون داده نمی‌شن.
*/

{
window.SAT_CATEGORIES = [
  { id: "news",    name: "خبری" },
  { id: "english", name: "یادگیری زبان انگلیسی" },
  { id: "movies",  name: "فیلم و سریال" },
  { id: "iranfilm", name: "فیلم ایرانی" },
  { id: "intl",    name: "فیلم و سریال خارجی" },
  { id: "docs",    name: "مستند و تاریخی" },
  { id: "sports",  name: "ورزشی" },
  { id: "music",   name: "موسیقی" },
  { id: "kids",    name: "کودک و نوجوان" },
  { id: "general", name: "سرگرمی و عمومی" },
  { id: "iran",    name: "شبکه‌های داخلی" },
];

const P = n => `https://www.parsatv.com/name=${n}`;
const TWB = n => `https://ncdn.telewebion.ir/${n}/live/playlist.m3u8`;
const TWB_SITE = n => `https://telewebion.com/live/${n}`;
// سپهر، سایت رسمی پخش زنده‌ی صداوسیما؛ داخل کادر پیش‌نمایش باز می‌شه (با VPN خاموش)
const SEPEHR = n => `https://sepehrtv.ir/live/${n}`;

window.SAT_CHANNELS = [
  /* ── خانواده صدا و سیما (شبکه‌های سراسری ایران) ── */
  { id: "tv1", name: "IRIB TV1", fa: "شبکه یک", cat: "iran", badge: "۱", color: "#1565c0", streams: [TWB("tv1")], embed: SEPEHR("tv1"), urls: [SEPEHR("tv1"), TWB_SITE("tv1")] },
  { id: "tv2", name: "IRIB TV2", fa: "شبکه دو", cat: "iran", badge: "۲", color: "#2e7d32", streams: [TWB("tv2")], embed: SEPEHR("tv2"), urls: [SEPEHR("tv2"), TWB_SITE("tv2")] },
  { id: "tv3", name: "IRIB TV3", fa: "شبکه سه", cat: "sports", badge: "۳", color: "#0d47a1", streams: [TWB("tv3")], embed: SEPEHR("tv3"), urls: [SEPEHR("tv3"), TWB_SITE("tv3")] },
  { id: "tv4", name: "IRIB TV4", fa: "شبکه چهار", cat: "docs", badge: "۴", color: "#00695c", streams: [TWB("tv4")], embed: SEPEHR("tv4"), urls: [SEPEHR("tv4"), TWB_SITE("tv4")] },
  { id: "tehran", name: "IRIB Tehran", fa: "شبکه تهران", cat: "iran", badge: "تهران", color: "#6a1b9a", streams: [TWB("tehran")], embed: SEPEHR("tehran"), urls: [SEPEHR("tehran"), TWB_SITE("tehran")] },
  { id: "aflak", name: "IRIB Aflak", fa: "شبکه افلاک (لرستان)", cat: "iran", badge: "افلاک", color: "#4e342e", streams: [TWB("aflak")], embed: SEPEHR("aflak"), urls: [SEPEHR("aflak")] },
  { id: "irinn", name: "IRIB News", fa: "شبکه خبر", cat: "iran", badge: "خبر", color: "#b71c1c", streams: [TWB("irinn")], embed: SEPEHR("irinn"), urls: [SEPEHR("irinn"), TWB_SITE("irinn")] },
  { id: "varzesh", name: "IRIB Varzesh", fa: "شبکه ورزش", cat: "sports", badge: "ورزش", color: "#1b5e20", streams: [TWB("varzesh")], embed: SEPEHR("varzesh"), urls: [SEPEHR("varzesh"), TWB_SITE("varzesh")] },
  { id: "mostanad", name: "IRIB Mostanad", fa: "شبکه مستند", cat: "docs", badge: "مستند", color: "#2e7d32",
    streams: [TWB("mostanad")], embed: SEPEHR("mostanad"), urls: [SEPEHR("mostanad"), TWB_SITE("mostanad"), P("Mostanad")] },
  { id: "nasim", name: "IRIB Nasim", fa: "نسیم", cat: "iran", badge: "نسیم", color: "#00838f", streams: [TWB("nasim")], embed: SEPEHR("nasim"), urls: [SEPEHR("nasim"), TWB_SITE("nasim")] },
  { id: "tamasha", name: "IRIB Tamasha", fa: "تماشا", cat: "movies", badge: "تماشا", color: "#283593", streams: [TWB("hdtest")], embed: SEPEHR("tamasha"), urls: [SEPEHR("tamasha"), TWB_SITE("hdtest")] },
  { id: "namayesh", name: "IRIB Namayesh", fa: "نمایش", cat: "iranfilm", badge: "نمایش", color: "#5e35b1", streams: [TWB("namayesh")], embed: SEPEHR("namayesh"), urls: [SEPEHR("namayesh"), TWB_SITE("namayesh")] },
  { id: "ifilm", name: "iFilm", fa: "آی‌فیلم", cat: "iranfilm", badge: "iFILM", color: "#c77800",
    streams: [TWB("ifilm"), "https://live.presstv.ir/hls/ifilmfa.m3u8"], embed: SEPEHR("ifilm"), urls: [SEPEHR("ifilm"), TWB_SITE("ifilm"), P("iFilm-Persian")] },
  { id: "ifilm2", name: "iFilm 2", fa: "آی‌فیلم ۲", cat: "iranfilm", badge: "iFILM 2", color: "#a35f00",
    streams: ["https://live.presstv.ir/hls/ifilm2.m3u8"], embed: SEPEHR("ifilmdari"), urls: ["https://fa2.ifilmtv.ir/Home/Live", SEPEHR("ifilmdari")] },
  { id: "pooya", name: "IRIB Pooya", fa: "پویا و نهال", cat: "kids", badge: "پویا", color: "#f9a825", streams: [TWB("pooya")], embed: SEPEHR("pooya"), urls: [SEPEHR("pooya"), TWB_SITE("pooya")] },
  { id: "salamat", name: "IRIB Salamat", fa: "سلامت", cat: "iran", badge: "سلامت", color: "#00897b", streams: [TWB("salamat")], embed: SEPEHR("salamat"), urls: [SEPEHR("salamat"), TWB_SITE("salamat")] },
  { id: "amouzesh", name: "IRIB Amouzesh", fa: "آموزش", cat: "iran", badge: "آموزش", color: "#3949ab", streams: [TWB("amouzesh")], embed: SEPEHR("amouzesh"), urls: [SEPEHR("amouzesh"), TWB_SITE("amouzesh")] },
  { id: "nava", name: "IRIB Nava", fa: "نوا", cat: "music", badge: "نوا", color: "#00796b", streams: [TWB("nava")], embed: SEPEHR("nava"), urls: [SEPEHR("nava"), TWB_SITE("nava")] },
  { id: "iribuhd", name: "IRIB UHD", fa: "فراتر (UHD)", cat: "iran", badge: "UHD", color: "#212121", streams: [TWB("faratar")] },
  { id: "irnatv", name: "IRNA TV", fa: "ایرنا", cat: "iran", streams: ["https://tv.irna.ir/live/stream/index.m3u8"] },
];

window.SAT_ACCESS = {
  defaultDays: 90,
  users: {
    "user-01": { "active": true, "durationDays": 90, "expires": null },
    "user-02": { "active": true, "durationDays": 90, "expires": null },
    "user-03": { "active": true, "durationDays": 90, "expires": null },
    "user-04": { "active": true, "durationDays": 90, "expires": null },
    "user-05": { "active": true, "durationDays": 90, "expires": null },
    "user-06": { "active": true, "durationDays": 90, "expires": null },
    "user-07": { "active": true, "durationDays": 90, "expires": null },
    "user-08": { "active": true, "durationDays": 90, "expires": null },
    "user-09": { "active": true, "durationDays": 90, "expires": null },
    "user-10": { "active": true, "durationDays": 90, "expires": null }
  }
};
}
