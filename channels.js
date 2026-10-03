/*
  فهرست ثابت شبکه‌های ریموت ماهواره
  ==================================
  برای اضافه کردن یک شبکه‌ی همیشگی، یک خط شبیه بقیه به دسته‌ی مناسب اضافه کن:

    { id: "gemtv", name: "جم تی‌وی", cat: "movies", badge: "GEM", color: "#7b1fa2",
      streams: ["https://.../index.m3u8"],
      urls: ["https://www.parsatv.com/name=GEM-TV"] },

    id       شناسه‌ی یکتا با حروف لاتین (برای علاقه‌مندی‌ها و پنهان کردن)
    name     نام نمایشی شبکه
    cat      دسته: news | movies | docs | sports | music | general
    badge    متن روی لوگو (اختیاری)
    color    رنگ لوگو (اختیاری)
    streams  لینک‌های پخش مستقیم (.m3u8) که داخل خود صفحه پخش می‌شن؛ به ترتیب امتحان می‌شن
    urls     سایت‌های پخش شبکه؛ اگه پخش مستقیم نبود یا کار نکرد، اینا باز می‌شن

  لینک‌های پخش مستقیم از https://github.com/iptv-org/iptv برداشته شدن و ممکنه گاهی عوض بشن.
  شماره‌ی هر شبکه به ترتیب همین فهرست داده می‌شه.
  شبکه‌هایی که از داخل خود صفحه اضافه می‌شن فقط در همان مرورگر ذخیره می‌شن و از ۱۰۱ شماره می‌گیرن.
*/

window.SAT_CATEGORIES = [
  { id: "news",    name: "خبری",           icon: "📰" },
  { id: "movies",  name: "فیلم و سریال",   icon: "🎬" },
  { id: "docs",    name: "مستند",          icon: "🌍" },
  { id: "sports",  name: "ورزشی",          icon: "⚽" },
  { id: "music",   name: "موسیقی",         icon: "🎵" },
  { id: "general", name: "سرگرمی و عمومی", icon: "📺" },
];

window.SAT_CHANNELS = [
  /* ── خبری ── */
  { id: "iranintl", name: "ایران اینترنشنال", cat: "news", badge: "IRAN INTL", color: "#b3121b",
    streams: ["https://hlspackager.akamaized.net/live/DB/IRAN_INTERNATIONAL/HLS/IRAN_INTERNATIONAL.m3u8",
              "https://live.livetvstream.co.uk/LS-63503-4/index.m3u8"],
    urls: ["https://www.youtube.com/@IRANINTL/live", "https://www.parsatv.com/name=Iran-International-TV"] },
  { id: "bbcpersian", name: "بی‌بی‌سی فارسی", cat: "news", badge: "BBC", color: "#a50e0e",
    streams: ["https://vs-hls-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_persian_tv/mobile_wifi_main_hd_abr_v2.m3u8",
              "https://vs-hls-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_persian_tv/pc_hd_abr_v2.m3u8"],
    urls: ["https://www.parsatv.com/name=BBC-Persian"] },
  { id: "voa", name: "صدای آمریکا", cat: "news", badge: "VOA", color: "#1d4f91",
    streams: ["https://voa-ingest.akamaized.net/hls/live/2033876/tvmc07/playlist.m3u8",
              "https://voaphls.wns.live/hls/stream.m3u8"],
    urls: ["https://www.parsatv.com/name=VOA-Persian"] },
  { id: "radiofarda", name: "رادیو فردا", cat: "news", badge: "فردا", color: "#c2410c",
    urls: ["https://www.parsatv.com/name=Radio-Farda", "https://www.parsatv.com/name=Radio-Farda-TV"] },

  /* ── فیلم و سریال ── */
  { id: "gemtv", name: "جم تی‌وی", cat: "movies", badge: "GEM", color: "#7b1fa2",
    streams: ["https://ca-rt.onetv.app/gem/index-0.m3u8?token=onetv202"],
    urls: ["https://www.parsatv.com/name=GEM-TV"] },
  { id: "gemseries", name: "جم سریال", cat: "movies", badge: "GEM SERIES", color: "#8e24aa",
    streams: ["https://ca-rt.onetv.app/gemseriesplus/index-0.m3u8?token=onetv202"],
    urls: ["https://www.parsatv.com/name=GEM-Series", "https://www.parsatv.com/name=GEM-Series-Plus"] },
  { id: "gembollywood", name: "جم بالیوود", cat: "movies", badge: "BOLLYWOOD", color: "#c2185b",
    streams: ["https://ca-rt.onetv.app/gembollywood/index-0.m3u8?token=onetv202"],
    urls: ["https://www.parsatv.com/name=GEM-Bollywood"] },
  { id: "gemriver", name: "جم ریور", cat: "movies", badge: "GEM RIVER", color: "#00796b",
    streams: ["https://ca-rt.onetv.app/gemriver/index-0.m3u8?token=onetv202",
              "https://ca-rt.onetv.app/gemriverplus/index-0.m3u8?token=onetv202"],
    urls: ["https://www.parsatv.com/name=GEM-River"] },
  { id: "gemdrama", name: "جم درام", cat: "movies", badge: "GEM DRAMA", color: "#ad1457",
    streams: ["https://ca-rt.onetv.app/gemdrama/index-0.m3u8?token=onetv202",
              "https://ca-rt.onetv.app/gemdramaplus/index-0.m3u8?token=onetv202"],
    urls: ["https://www.parsatv.com/name=GEM-Drama"] },
  { id: "gemrubix", name: "جم روبیکس", cat: "movies", badge: "RUBIX", color: "#e65100",
    streams: ["https://ca-rt.onetv.app/gemrubix/index-0.m3u8?token=onetv202",
              "https://ca-rt.onetv.app/gemrubixplus/index-0.m3u8?token=onetv202"],
    urls: ["https://www.parsatv.com/name=GEM-Rubix", "https://www.parsatv.com/name=GEM-Rubix-Plus"] },
  { id: "persianacinema", name: "پرشیانا سینما", cat: "movies", badge: "PERSIANA CINEMA", color: "#b71c1c",
    streams: ["https://cinehls.persiana.live/hls/stream.m3u8", "https://todayhls.wns.live/hls/stream.m3u8"],
    urls: ["https://www.parsatv.com/name=Persiana-Cinema"] },
  { id: "persianaseries", name: "پرشیانا سریال", cat: "movies", badge: "PERSIANA SERIES", color: "#c62828",
    streams: ["https://onehls.persiana.live/hls/stream.m3u8"] },
  { id: "persiananostalgia", name: "پرشیانا نوستالژی", cat: "movies", badge: "NOSTALGIA", color: "#795548",
    streams: ["https://noshls.persiana.live/hls/stream.m3u8"] },
  { id: "mbcpersia", name: "ام‌بی‌سی پرشیا", cat: "movies", badge: "MBC", color: "#1565c0",
    streams: ["https://hls.mbcpersia.live/hls/stream.m3u8",
              "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-persia/818ee8e4b592dc497608f066d825bfb4/index.m3u8"],
    urls: ["https://www.parsatv.com/name=MBC-Persia"] },
  { id: "afrafilm", name: "افرا فیلم", cat: "movies", badge: "AFRA FILM", color: "#4e342e",
    streams: ["https://afrafhls.wns.live/hls/stream.m3u8"] },
  { id: "grandcinema", name: "گرند سینما", cat: "movies", badge: "GRAND CINEMA", color: "#3e2723",
    streams: ["https://gcinemahls.wns.live/hls/stream.m3u8"] },
  { id: "khatereh", name: "خاطره", cat: "movies", badge: "خاطره", color: "#6d4c41",
    urls: ["https://www.parsatv.com/name=Khatereh-TV"] },
  { id: "ifilm", name: "آی‌فیلم", cat: "movies", badge: "iFILM", color: "#c77800",
    streams: ["https://ncdn.telewebion.ir/ifilm/live/playlist.m3u8", "https://live.presstv.ir/hls/ifilmfa.m3u8"],
    urls: ["https://telewebion.com/live/ifilm", "https://www.parsatv.com/name=iFilm-Persian"] },
  { id: "ifilm2", name: "آی‌فیلم ۲", cat: "movies", badge: "iFILM 2", color: "#a35f00",
    streams: ["https://live.presstv.ir/hls/ifilm2.m3u8"],
    urls: ["https://fa2.ifilmtv.ir/Home/Live"] },
  { id: "namayesh", name: "نمایش", cat: "movies", badge: "نمایش", color: "#5e35b1",
    streams: ["https://ncdn.telewebion.ir/namayesh/live/playlist.m3u8"],
    urls: ["https://telewebion.com/live/namayesh"] },
  { id: "tamasha", name: "تماشا", cat: "movies", badge: "تماشا", color: "#283593",
    streams: ["https://ncdn.telewebion.ir/hdtest/live/playlist.m3u8"] },
  { id: "ytfilms", name: "فیلم‌های یوتیوب", cat: "movies", badge: "YouTube", color: "#d32f2f",
    urls: ["https://www.youtube.com/channel/UClgRkhTL3_hImCAmdLfDE4g"] },

  /* ── مستند ── */
  { id: "mostanad", name: "شبکه مستند", cat: "docs", badge: "مستند", color: "#2e7d32",
    streams: ["https://ncdn.telewebion.ir/mostanad/live/playlist.m3u8"],
    urls: ["https://telewebion.com/live/mostanad", "https://www.parsatv.com/name=Mostanad"] },
  { id: "tv4", name: "شبکه چهار", cat: "docs", badge: "۴", color: "#00695c",
    streams: ["https://ncdn.telewebion.ir/tv4/live/playlist.m3u8"],
    urls: ["https://telewebion.com/live/tv4"] },
  { id: "persianadocs", name: "پرشیانا مستند", cat: "docs", badge: "PERSIANA DOCS", color: "#33691e",
    streams: ["https://scihls.persiana.live/hls/stream.m3u8"] },
  { id: "persianatravel", name: "پرشیانا سفر", cat: "docs", badge: "TRAVEL", color: "#0277bd",
    streams: ["https://ptravelhls.persiana.live/hls/stream.m3u8", "https://mardomhls.wns.live/hls/stream.m3u8"] },
  { id: "manotodocs", name: "مستندهای منوتو", cat: "docs", badge: "manoto", color: "#37474f",
    urls: ["https://www.youtube.com/playlist?list=PLK_tIl1mumy8EHJtlHd0H_omDgqKGsrwu"] },
  { id: "dwdocs", name: "DW Documentary", cat: "docs", badge: "DW DOC", color: "#0a4d8c",
    urls: ["https://www.youtube.com/channel/UCW39zufHfsuGgpLviKh297Q"] },
  { id: "nasatv", name: "NASA TV", cat: "docs", badge: "NASA", color: "#0b3d91",
    urls: ["https://www.parsatv.com/name=NASA-TV"] },

  /* ── ورزشی ── */
  { id: "varzesh", name: "شبکه ورزش", cat: "sports", badge: "ورزش", color: "#1b5e20",
    streams: ["https://ncdn.telewebion.ir/varzesh/live/playlist.m3u8"],
    urls: ["https://telewebion.com/live/varzesh"] },
  { id: "tv3", name: "شبکه سه", cat: "sports", badge: "۳", color: "#0d47a1",
    streams: ["https://ncdn.telewebion.ir/tv3/live/playlist.m3u8"],
    urls: ["https://telewebion.com/live/tv3"] },

  /* ── موسیقی ── */
  { id: "nava", name: "نوا", cat: "music", badge: "نوا", color: "#00796b",
    streams: ["https://ncdn.telewebion.ir/nava/live/playlist.m3u8"],
    urls: ["https://telewebion.com/live/nava"] },
  { id: "pmc", name: "PMC", cat: "music", badge: "PMC", color: "#ad1457",
    streams: ["https://pmchls.wns.live/hls/stream.m3u8"],
    urls: ["https://www.parsatv.com/name=PMC"] },
  { id: "pmcroyale", name: "PMC Royale", cat: "music", badge: "ROYALE", color: "#6a1b9a",
    streams: ["https://pmcrohls.wns.live/hls/stream.m3u8"],
    urls: ["https://www.parsatv.com/name=PMC-Royale"] },
  { id: "4music", name: "4Music", cat: "music", badge: "4MUSIC", color: "#283593",
    streams: ["https://itthls.wns.live/hls/stream.m3u8"],
    urls: ["https://www.parsatv.com/name=4Music"] },
  { id: "persianamusic", name: "پرشیانا موزیک", cat: "music", badge: "PERSIANA MUSIC", color: "#bf360c",
    streams: ["https://musichls.persiana.live/hls/stream.m3u8"],
    urls: ["https://www.parsatv.com/name=Persiana-Music"] },
  { id: "persianafolk", name: "پرشیانا موسیقی محلی", cat: "music", badge: "FOLK", color: "#8d6e63",
    streams: ["https://sonhls.persiana.live/hls/stream.m3u8"] },
  { id: "navahang", name: "نواهنگ", cat: "music", badge: "NAVAHANG", color: "#00695c",
    streams: ["https://simahls.wns.live/hls/stream.m3u8"] },

  /* ── سرگرمی و عمومی ── */
  { id: "tapesh", name: "تپش", cat: "general", badge: "TAPESH", color: "#b71c1c",
    urls: ["https://www.parsatv.com/name=Tapesh", "https://www.parsatv.com/name=Tapesh-Iran"] },
  { id: "persianaone", name: "پرشیانا وان", cat: "general", badge: "PERSIANA ONE", color: "#880e4f",
    urls: ["https://www.parsatv.com/name=Persiana-One"] },
  { id: "persianafamily", name: "پرشیانا فمیلی", cat: "general", badge: "FAMILY", color: "#ad1457",
    streams: ["https://familyhls.persiana.live/hls/stream.m3u8"] },
  { id: "persianacomedy", name: "پرشیانا کمدی", cat: "general", badge: "COMEDY", color: "#f57f17",
    streams: ["https://comedyhls.persiana.live/hls/stream.m3u8"] },
  { id: "nasim", name: "نسیم", cat: "general", badge: "نسیم", color: "#00838f",
    streams: ["https://ncdn.telewebion.ir/nasim/live/playlist.m3u8"],
    urls: ["https://telewebion.com/live/nasim"] },
  { id: "manoto", name: "منوتو (آرشیو)", cat: "general", badge: "manoto", color: "#263238",
    urls: ["https://www.youtube.com/@manototv/videos"] },
  { id: "erfan", name: "عرفان حلقه", cat: "general", badge: "عرفان", color: "#4a148c",
    streams: ["https://hls.erfanhalgheh.live/hls/stream.m3u8"],
    urls: ["https://www.parsatv.com/name=Erfan-Halgheh"] },
];
