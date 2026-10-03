/*
  فهرست ثابت شبکه‌های ریموت
  ===========================
  هر خط یک شبکه‌ست:

    { id: "gemtv", name: "جم تی‌وی", cat: "movies", badge: "GEM", color: "#7b1fa2",
      streams: ["https://.../index.m3u8"], urls: ["https://www.parsatv.com/name=GEM-TV"] },

    id       شناسه‌ی یکتا با حروف لاتین (برای علاقه‌مندی‌ها، ترتیب و پنهان کردن)
    name     نام نمایشی شبکه
    cat      دسته (یکی از id های SAT_CATEGORIES)
    badge    متن کوتاه لوگو (اختیاری)
    color    رنگ لوگو (اختیاری)
    streams  لینک‌های پخش مستقیم (.m3u8) که داخل خود صفحه پخش می‌شن؛ به ترتیب امتحان می‌شن
    embed    پخش یوتیوب داخل خود صفحه (اختیاری)
    urls     سایت‌های پخش شبکه؛ اگه پخش مستقیم نبود یا کار نکرد، اینا باز می‌شن

  لینک‌های پخش مستقیم از https://github.com/iptv-org/iptv برداشته شدن و ممکنه گاهی عوض بشن.
  ترتیب و شماره‌ی شبکه‌ها رو می‌شه از داخل صفحه (دکمه‌ی آبی «ویرایش») با کشیدن عوض کرد.
*/

{
window.SAT_CATEGORIES = [
  { id: "news",    name: "خبری" },
  { id: "movies",  name: "فیلم و سریال" },
  { id: "docs",    name: "مستند و تاریخی" },
  { id: "sports",  name: "ورزشی" },
  { id: "music",   name: "موسیقی" },
  { id: "kids",    name: "کودک و نوجوان" },
  { id: "general", name: "سرگرمی و عمومی" },
  { id: "iran",    name: "شبکه‌های داخلی" },
];

const P = n => `https://www.parsatv.com/name=${n}`;
const GEM = n => `https://ca-rt.onetv.app/${n}/index-0.m3u8?token=onetv202`;
const PERSIANA = n => `https://${n}.persiana.live/hls/stream.m3u8`;
const WNS = n => `https://${n}.wns.live/hls/stream.m3u8`;
const TWB = n => `https://ncdn.telewebion.ir/${n}/live/playlist.m3u8`;
const TWB_SITE = n => `https://telewebion.com/live/${n}`;

window.SAT_CHANNELS = [
  /* ── خبری ── */
  { id: "iranintl", name: "ایران اینترنشنال", cat: "news", badge: "IRAN INTL", color: "#b3121b",
    streams: ["https://hlspackager.akamaized.net/live/DB/IRAN_INTERNATIONAL/HLS/IRAN_INTERNATIONAL.m3u8", "https://live.livetvstream.co.uk/LS-63503-4/index.m3u8"],
    embed: "https://www.youtube.com/embed/live_stream?channel=UCat6bC0Wrqq9Bcq7EkH_yQw", urls: ["https://www.youtube.com/@IRANINTL/live", P("Iran-International-TV")] },
  { id: "bbcpersian", name: "بی‌بی‌سی فارسی", cat: "news", badge: "BBC", color: "#a50e0e",
    streams: ["https://vs-hls-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_persian_tv/mobile_wifi_main_hd_abr_v2.m3u8",
              "https://vs-hls-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_persian_tv/pc_hd_abr_v2.m3u8"],
    urls: [P("BBC-Persian")] },
  { id: "voa", name: "صدای آمریکا", cat: "news", badge: "VOA", color: "#1d4f91",
    streams: ["https://voa-ingest.akamaized.net/hls/live/2033876/tvmc07/playlist.m3u8", WNS("voaphls")], urls: [P("VOA-Persian")] },
  { id: "iranefarda", name: "ایران فردا", cat: "news", badge: "FARDA TV", color: "#37474f",
    streams: ["https://iranefardalive.com/stream/live.m3u8"], urls: [P("Irane-Farda")] },
  { id: "dwenglish", name: "DW English", cat: "news", badge: "DW", color: "#0a4d8c",
    streams: ["https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/master.m3u8",
              "https://amg01644-amg01644c1-amgplt0343.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg01644-amg01644c1-amgplt0343/playlist.m3u8"] },
  { id: "radiofarda", name: "رادیو فردا", cat: "news", badge: "فردا", color: "#c2410c",
    urls: [P("Radio-Farda"), P("Radio-Farda-TV")] },
  { id: "kanalyek", name: "کانال یک", cat: "news", badge: "CH 1", color: "#0d47a1",
    streams: [PERSIANA("pemirateshls")], urls: [P("Channel-One")] },
  { id: "tolonews", name: "طلوع نیوز", cat: "news", badge: "TOLO NEWS", color: "#c62828",
    streams: ["https://tgn.bozztv.com/eshgtv-dvrfl05/gin-tolonews/index.m3u8"] },

  /* ── فیلم و سریال ── */
  { id: "gemtv", name: "جم تی‌وی", cat: "movies", badge: "GEM", color: "#7b1fa2", streams: [GEM("gem"), GEM("gemtvplus")], urls: [P("GEM-TV")] },
  { id: "gemseries", name: "جم سریال", cat: "movies", badge: "GEM SERIES", color: "#8e24aa", streams: [GEM("gemseriesplus")], urls: [P("GEM-Series")] },
  { id: "gemfilm", name: "جم فیلم", cat: "movies", badge: "GEM FILM", color: "#6a1b9a", streams: [GEM("gemfilm")] },
  { id: "gemclassic", name: "جم کلاسیک", cat: "movies", badge: "CLASSIC", color: "#5d4037", streams: [GEM("gemclassic")] },
  { id: "gemonyx", name: "جم اونیکس", cat: "movies", badge: "ONYX", color: "#212121", streams: [GEM("gemonyx")] },
  { id: "gemdrama", name: "جم درام", cat: "movies", badge: "GEM DRAMA", color: "#ad1457", streams: [GEM("gemdrama"), GEM("gemdramaplus")], urls: [P("GEM-Drama")] },
  { id: "gemriver", name: "جم ریور", cat: "movies", badge: "GEM RIVER", color: "#00796b", streams: [GEM("gemriver"), GEM("gemriverplus")], urls: [P("GEM-River")] },
  { id: "gemrubix", name: "جم روبیکس", cat: "movies", badge: "RUBIX", color: "#e65100", streams: [GEM("gemrubix"), GEM("gemrubixplus")], urls: [P("GEM-Rubix")] },
  { id: "gembollywood", name: "جم بالیوود", cat: "movies", badge: "BOLLYWOOD", color: "#c2185b", streams: [GEM("gembollywood")], urls: [P("GEM-Bollywood")] },
  { id: "gemcomedy", name: "جم کمدی", cat: "movies", badge: "GEM COMEDY", color: "#f57f17", streams: [GEM("gemcomedy")] },
  { id: "persianacinema", name: "پرشیانا سینما", cat: "movies", badge: "PERSIANA CINEMA", color: "#b71c1c",
    streams: [PERSIANA("cinehls"), WNS("todayhls")], urls: [P("Persiana-Cinema")] },
  { id: "persianaseries", name: "پرشیانا سریال", cat: "movies", badge: "PERSIANA SERIES", color: "#c62828", streams: [PERSIANA("onehls")] },
  { id: "persianairanian", name: "پرشیانا ایرانیان", cat: "movies", badge: "IRANIAN", color: "#880e4f", streams: [PERSIANA("irhls")], urls: [P("Persiana-Iranian")] },
  { id: "persiananostalgia", name: "پرشیانا نوستالژی", cat: "movies", badge: "NOSTALGIA", color: "#795548", streams: [PERSIANA("noshls")] },
  { id: "persianakorea", name: "پرشیانا کره", cat: "movies", badge: "KOREA", color: "#1565c0", streams: [PERSIANA("korhls")] },
  { id: "persianaturkiye", name: "پرشیانا ترکیه", cat: "movies", badge: "TÜRKİYE", color: "#c62828", streams: [PERSIANA("turkhls")] },
  { id: "persianalatino", name: "پرشیانا لاتین", cat: "movies", badge: "LATINO", color: "#ef6c00", streams: [PERSIANA("latinohls")] },
  { id: "mbcpersia", name: "ام‌بی‌سی پرشیا", cat: "movies", badge: "MBC", color: "#1565c0",
    streams: ["https://hls.mbcpersia.live/hls/stream.m3u8", "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-persia/818ee8e4b592dc497608f066d825bfb4/index.m3u8"],
    urls: [P("MBC-Persia")] },
  { id: "afrafilm", name: "افرا فیلم", cat: "movies", badge: "AFRA FILM", color: "#4e342e", streams: [WNS("afrafhls")] },
  { id: "afraseries", name: "افرا سریال", cat: "movies", badge: "AFRA SERIES", color: "#5d4037", streams: [WNS("afrashls")] },
  { id: "avaseries", name: "آوا سریال", cat: "movies", badge: "AVA SERIES", color: "#283593", streams: [WNS("avaserieshls")] },
  { id: "grandcinema", name: "گرند سینما", cat: "movies", badge: "GRAND CINEMA", color: "#3e2723", streams: [WNS("gcinemahls")] },
  { id: "cafefilm", name: "کافه فیلم", cat: "movies", badge: "CAFE FILM", color: "#6d4c41", streams: [WNS("cafefhls")] },
  { id: "goldstar", name: "گلد استار", cat: "movies", badge: "GOLD STAR", color: "#b8860b", streams: [WNS("moviethls")] },
  { id: "metafilm", name: "متا فیلم", cat: "movies", badge: "META FILM", color: "#4527a0", streams: [WNS("metafilmhls")] },
  { id: "newflix", name: "نیوفلیکس", cat: "movies", badge: "NEWFLIX", color: "#b71c1c", streams: [WNS("newfhls")] },
  { id: "ekranmovies", name: "اکران مووی", cat: "movies", badge: "EKRAN", color: "#37474f", streams: [GEM("EkranMovies")] },
  { id: "t2movies", name: "تی۲ مووی", cat: "movies", badge: "T2 MOVIES", color: "#00838f", streams: [GEM("T2Movies")] },
  { id: "classictv", name: "کلاسیک تی‌وی", cat: "movies", badge: "CLASSIC TV", color: "#4e342e", streams: [WNS("clshls")] },
  { id: "khatereh", name: "خاطره", cat: "movies", badge: "خاطره", color: "#6d4c41", urls: [P("Khatereh-TV")] },
  { id: "ifilm", name: "آی‌فیلم", cat: "movies", badge: "iFILM", color: "#c77800",
    streams: [TWB("ifilm"), "https://live.presstv.ir/hls/ifilmfa.m3u8"], urls: [TWB_SITE("ifilm"), P("iFilm-Persian")] },
  { id: "ifilm2", name: "آی‌فیلم ۲", cat: "movies", badge: "iFILM 2", color: "#a35f00",
    streams: ["https://live.presstv.ir/hls/ifilm2.m3u8"], urls: ["https://fa2.ifilmtv.ir/Home/Live"] },
  { id: "namayesh", name: "نمایش", cat: "movies", badge: "نمایش", color: "#5e35b1", streams: [TWB("namayesh")], urls: [TWB_SITE("namayesh")] },
  { id: "tamasha", name: "تماشا", cat: "movies", badge: "تماشا", color: "#283593", streams: [TWB("hdtest")] },
  { id: "ytfilms", name: "فیلم‌های یوتیوب", cat: "movies", badge: "YouTube", color: "#d32f2f", embed: "https://www.youtube.com/embed/videoseries?list=UUlgRkhTL3_hImCAmdLfDE4g", urls: ["https://www.youtube.com/channel/UClgRkhTL3_hImCAmdLfDE4g"] },

  /* ── مستند و تاریخی ── */
  { id: "mostanad", name: "شبکه مستند", cat: "docs", badge: "مستند", color: "#2e7d32",
    streams: [TWB("mostanad")], urls: [TWB_SITE("mostanad"), P("Mostanad")] },
  { id: "tv4", name: "شبکه چهار", cat: "docs", badge: "۴", color: "#00695c", streams: [TWB("tv4")], urls: [TWB_SITE("tv4")] },
  { id: "persianadocs", name: "پرشیانا مستند", cat: "docs", badge: "PERSIANA DOCS", color: "#33691e", streams: [PERSIANA("scihls")] },
  { id: "persianatravel", name: "پرشیانا سفر", cat: "docs", badge: "TRAVEL", color: "#0277bd", streams: [PERSIANA("ptravelhls"), WNS("mardomhls")] },
  { id: "persianamedical", name: "پرشیانا پزشکی", cat: "docs", badge: "MEDICAL", color: "#00838f", streams: [PERSIANA("phd2hls"), WNS("tfnhls")] },
  { id: "gemnature", name: "جم نیچر", cat: "docs", badge: "GEM NATURE", color: "#2e7d32", streams: [GEM("gemnature")] },
  { id: "manotodocs", name: "مستندهای منوتو", cat: "docs", badge: "manoto", color: "#37474f",
    embed: "https://www.youtube.com/embed/videoseries?list=PLK_tIl1mumy8EHJtlHd0H_omDgqKGsrwu", urls: ["https://www.youtube.com/playlist?list=PLK_tIl1mumy8EHJtlHd0H_omDgqKGsrwu"] },
  { id: "historyhit", name: "History Hit (تاریخی)", cat: "docs", badge: "HISTORY HIT", color: "#7f1d1d", streams: ["https://lds-timeline-rakuten.amagi.tv/playlist.m3u8"] },
  { id: "historyhunters", name: "History Hunters (تاریخی)", cat: "docs", badge: "HISTORY", color: "#6d4c41",
    streams: ["https://amg00841-amg00841c7-rakuten-uk-2820.playouts.now.amagi.tv/playlist/amg00841-aeemeafast-historyhuntersrakuten-rakutenuk/playlist.m3u8"] },
  { id: "truehistory", name: "True History (تاریخی)", cat: "docs", badge: "TRUE HISTORY", color: "#5d4037",
    streams: ["https://linear-188.frequency.stream/dist/glewedtv/188/hls/master/playlist.m3u8"] },
  { id: "cgtndoc", name: "CGTN Documentary", cat: "docs", badge: "CGTN DOC", color: "#0d47a1",
    streams: ["https://hlspackager.akamaized.net/live/DB/CGTN_DOCUMENTARY/HLS/CGTN_DOCUMENTARY.m3u8", "https://global.cgtn.cicc.media.caton.cloud/master/cgtn-documentary.m3u8"] },
  { id: "docplus", name: "Documentary+", cat: "docs", badge: "DOC+", color: "#263238",
    streams: ["https://ef79b15c8c7c46c7a9de9d33001dbd07.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-859-DOCUMENTARYPLUS-DOCUMENTARYPLUS/mt/documentaryplus/859/hls/master/playlist.m3u8"] },
  { id: "curiosity", name: "Curiosity Now", cat: "docs", badge: "CURIOSITY", color: "#1565c0",
    streams: ["https://amg00170-curiositystream-amg00170c3-rakuten-us-2289.playouts.now.amagi.tv/playlist/amg00170-curiositystreamllcfast-curiositynowrow-rakutenus/playlist.m3u8"] },
  { id: "docubay", name: "DocuBay", cat: "docs", badge: "DOCUBAY", color: "#004d40",
    streams: ["https://cc-mgr91yrk4pehy.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-mgr91yrk4pehy/playlist.m3u8"] },
  { id: "bbcearth", name: "BBC Earth", cat: "docs", badge: "BBC EARTH", color: "#1b5e20",
    streams: ["https://aegis-cloudfront-1.tubi.video/bb1fc6ad-9948-42ea-aaf3-20acfcdeecac/playlist.m3u8"] },
  { id: "lovenature", name: "Love Nature (حیات وحش)", cat: "docs", badge: "LOVE NATURE", color: "#2e7d32",
    streams: ["https://aegis-cloudfront-1.tubi.video/6d6d0f24-8445-4b4c-bdf6-44f9e38beaa4/playlist.m3u8", "https://mumbai-edge.smartplaytv.in/LoveNature/index.m3u8"] },
  { id: "realwild", name: "Real Wild (حیات وحش)", cat: "docs", badge: "REAL WILD", color: "#33691e", streams: ["https://lds-realwild-rakuten.amagi.tv/playlist.m3u8"] },
  { id: "wildearth", name: "WildEarth (سافاری زنده)", cat: "docs", badge: "WILDEARTH", color: "#827717",
    streams: ["https://wildearth-ono.amagi.tv/playlist/amg01290-wildearth-oando/playlist.m3u8", "https://wildearth-xumo.amagi.tv/master.m3u8"] },
  { id: "naturetime", name: "Nature Time", cat: "docs", badge: "NATURE TIME", color: "#388e3c",
    streams: ["https://amg00090-amgnaturetimeemea-rakuten.amagi.tv/playlist.m3u8", "https://bamusa-naturetime-emea-eng-rakuten.amagi.tv/playlist.m3u8"] },
  { id: "terramater", name: "Terra Mater Wild", cat: "docs", badge: "TERRA MATER", color: "#4e342e",
    streams: ["https://amg01775-amg01775c1-amgplt0343.playout.now3.amagi.tv/playlist/amg01775-amg01775c1-amgplt0343/playlist.m3u8"] },
  { id: "chinatravel", name: "China Travel (سفر)", cat: "docs", badge: "CHINA TRAVEL", color: "#c62828",
    streams: ["https://fastlive.cctvplus.com/out/v1/ca6f9297b7314a63959435028af287fc/index.m3u8"] },
  { id: "dwdocs", name: "DW Documentary", cat: "docs", badge: "DW DOC", color: "#0a4d8c", embed: "https://www.youtube.com/embed/videoseries?list=UUW39zufHfsuGgpLviKh297Q", urls: ["https://www.youtube.com/channel/UCW39zufHfsuGgpLviKh297Q"] },
  { id: "nasatv", name: "NASA TV", cat: "docs", badge: "NASA", color: "#0b3d91", embed: "https://www.youtube.com/embed/live_stream?channel=UCLA_DiR1FfKNvjuUpBHmylQ", urls: [P("NASA-TV")] },

  /* ── ورزشی ── */
  { id: "varzesh", name: "شبکه ورزش", cat: "sports", badge: "ورزش", color: "#1b5e20", streams: [TWB("varzesh")], urls: [TWB_SITE("varzesh")] },
  { id: "tv3", name: "شبکه سه", cat: "sports", badge: "۳", color: "#0d47a1", streams: [TWB("tv3")], urls: [TWB_SITE("tv3")] },
  { id: "persianafight", name: "پرشیانا فایت (رزمی)", cat: "sports", badge: "FIGHT", color: "#b71c1c", streams: [PERSIANA("fighthls")] },
  { id: "gemfit", name: "جم فیت (ورزش و تناسب)", cat: "sports", badge: "GEM FIT", color: "#00897b", streams: [GEM("gemfit")] },

  /* ── موسیقی ── */
  { id: "nava", name: "نوا", cat: "music", badge: "نوا", color: "#00796b", streams: [TWB("nava")], urls: [TWB_SITE("nava")] },
  { id: "pmc", name: "PMC", cat: "music", badge: "PMC", color: "#ad1457", streams: [WNS("pmchls")], urls: [P("PMC")] },
  { id: "pmcroyale", name: "PMC Royale", cat: "music", badge: "ROYALE", color: "#6a1b9a", streams: [WNS("pmcrohls")], urls: [P("PMC-Royale")] },
  { id: "4music", name: "4Music", cat: "music", badge: "4MUSIC", color: "#283593", streams: [WNS("itthls")], urls: [P("4Music")] },
  { id: "persianamusic", name: "پرشیانا موزیک", cat: "music", badge: "PERSIANA MUSIC", color: "#bf360c", streams: [PERSIANA("musichls")], urls: [P("Persiana-Music")] },
  { id: "persianafolk", name: "پرشیانا موسیقی محلی", cat: "music", badge: "FOLK", color: "#8d6e63", streams: [PERSIANA("sonhls")] },
  { id: "persianavibe", name: "پرشیانا وایب", cat: "music", badge: "VIBE", color: "#4a148c", streams: [PERSIANA("raphls")] },
  { id: "navahang", name: "نواهنگ", cat: "music", badge: "NAVAHANG", color: "#00695c", streams: [WNS("simahls")] },
  { id: "gemmifa", name: "جم میفا", cat: "music", badge: "MIFA", color: "#d81b60", streams: [GEM("gemmifa"), GEM("gemmifaplus")] },

  /* ── کودک و نوجوان ── */
  { id: "pooya", name: "پویا و نهال", cat: "kids", badge: "پویا", color: "#f9a825", streams: [TWB("pooya")] },
  { id: "gemjunior", name: "جم جونیور", cat: "kids", badge: "JUNIOR", color: "#fb8c00", streams: [GEM("gemjunior")] },
  { id: "gemkids", name: "جم کیدز", cat: "kids", badge: "GEM KIDS", color: "#43a047", streams: [GEM("gemkids")] },
  { id: "persianajunior", name: "پرشیانا جونیور", cat: "kids", badge: "JUNIOR", color: "#039be5", streams: [PERSIANA("junhls")] },
  { id: "persianateen", name: "پرشیانا تین", cat: "kids", badge: "TEEN", color: "#8e24aa", streams: [PERSIANA("kphls")] },

  /* ── سرگرمی و عمومی ── */
  { id: "manoto", name: "منوتو", cat: "general", badge: "manoto", color: "#263238",
    streams: [GEM("manototv")], urls: ["https://www.youtube.com/@manototv/videos"] },
  { id: "tapesh", name: "تپش", cat: "general", badge: "TAPESH", color: "#b71c1c",
    streams: ["https://iptv.tapesh.tv/tapesh/playlist.m3u8"], urls: [P("Tapesh"), P("Tapesh-Iran")] },
  { id: "tapesh2", name: "تپش ۲", cat: "general", badge: "TAPESH 2", color: "#c62828", streams: [WNS("maxtvhls")] },
  { id: "persianaone", name: "پرشیانا وان", cat: "general", badge: "PERSIANA ONE", color: "#880e4f", urls: [P("Persiana-One")] },
  { id: "persianaplus", name: "پرشیانا پلاس", cat: "general", badge: "PERSIANA PLUS", color: "#6a1b9a", streams: [PERSIANA("euhls")] },
  { id: "persianafamily", name: "پرشیانا فمیلی", cat: "general", badge: "FAMILY", color: "#ad1457", streams: [PERSIANA("familyhls")] },
  { id: "persianacomedy", name: "پرشیانا کمدی", cat: "general", badge: "COMEDY", color: "#f57f17", streams: [PERSIANA("comedyhls")] },
  { id: "persianareality", name: "پرشیانا ریالیتی", cat: "general", badge: "REALITY", color: "#5e35b1", streams: [PERSIANA("twohls")] },
  { id: "gemlife", name: "جم لایف", cat: "general", badge: "GEM LIFE", color: "#00897b", streams: [GEM("gemlife")] },
  { id: "gemfood", name: "جم فود (آشپزی)", cat: "general", badge: "GEM FOOD", color: "#ef6c00", streams: [GEM("gemfood")] },
  { id: "parstv", name: "پارس تی‌وی", cat: "general", badge: "PARS", color: "#1565c0", streams: [WNS("parshls")], urls: [P("Pars-TV")] },
  { id: "itn", name: "ITN", cat: "general", badge: "ITN", color: "#0d47a1", streams: [WNS("itnhls")], urls: [P("ITN-TV")] },
  { id: "omideiran", name: "امید ایران", cat: "general", badge: "OITN", color: "#2e7d32", streams: [WNS("oitnhls")] },
  { id: "iccplus", name: "ICC Plus", cat: "general", badge: "ICC", color: "#283593", streams: [WNS("icchls")] },
  { id: "homeplus", name: "هوم پلاس", cat: "general", badge: "HOME PLUS", color: "#00838f", streams: [WNS("homeplushls")] },
  { id: "tolotv", name: "طلوع", cat: "general", badge: "TOLO", color: "#d32f2f", streams: ["https://tgn.bozztv.com/eshgtv-dvrfl05/gin-tolohd/tracks-v1a1/mono.m3u8"] },
  { id: "erfan", name: "عرفان حلقه", cat: "general", badge: "عرفان", color: "#4a148c",
    streams: ["https://hls.erfanhalgheh.live/hls/stream.m3u8"], urls: [P("Erfan-Halgheh")] },

  /* ── شبکه‌های داخلی (صدا و سیما) ── */
  { id: "tv1", name: "شبکه یک", cat: "iran", badge: "۱", color: "#1565c0", streams: [TWB("tv1")], urls: [TWB_SITE("tv1")] },
  { id: "tv2", name: "شبکه دو", cat: "iran", badge: "۲", color: "#2e7d32", streams: [TWB("tv2")], urls: [TWB_SITE("tv2")] },
  { id: "tehran", name: "شبکه تهران", cat: "iran", badge: "تهران", color: "#6a1b9a", streams: [TWB("tehran")], urls: [TWB_SITE("tehran")] },
  { id: "nasim", name: "نسیم", cat: "iran", badge: "نسیم", color: "#00838f", streams: [TWB("nasim")], urls: [TWB_SITE("nasim")] },
  { id: "omid", name: "امید", cat: "iran", badge: "امید", color: "#ef6c00", streams: [TWB("omid")] },
  { id: "ofogh", name: "افق", cat: "iran", badge: "افق", color: "#4e342e", streams: [TWB("ofogh")] },
  { id: "salamat", name: "سلامت", cat: "iran", badge: "سلامت", color: "#00897b", streams: [TWB("salamat")] },
  { id: "amouzesh", name: "آموزش", cat: "iran", badge: "آموزش", color: "#3949ab", streams: [TWB("amouzesh")] },
  { id: "iribuhd", name: "فراتر (UHD)", cat: "iran", badge: "UHD", color: "#212121", streams: [TWB("faratar")] },
];
}
