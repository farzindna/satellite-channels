/*
  فهرست ثابت شبکه‌های ریموت
  ===========================
  هر خط یک شبکه‌ست:

    { id: "gemtv", name: "GEM TV", fa: "جم تی‌وی", cat: "movies", badge: "GEM", color: "#7b1fa2",
      streams: ["https://.../index.m3u8"], urls: ["https://www.parsatv.com/name=GEM-TV"] },

    id       شناسه‌ی یکتا با حروف لاتین (برای علاقه‌مندی‌ها، ترتیب و پنهان کردن)
    name     نام نمایشی شبکه (انگلیسی، مثل رسیور)
    fa       نام فارسی (برای جستجو)
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
  { id: "english", name: "یادگیری زبان انگلیسی" },
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
  { id: "iranintl", name: "Iran International", fa: "ایران اینترنشنال", cat: "news", badge: "IRAN INTL", color: "#b3121b",
    streams: ["https://hlspackager.akamaized.net/live/DB/IRAN_INTERNATIONAL/HLS/IRAN_INTERNATIONAL.m3u8", "https://live.livetvstream.co.uk/LS-63503-4/index.m3u8"],
    embed: "https://www.youtube.com/embed/live_stream?channel=UCat6bC0Wrqq9Bcq7EkH_yQw", urls: ["https://www.youtube.com/@IRANINTL/live", P("Iran-International-TV")] },
  { id: "bbcpersian", name: "BBC Persian", fa: "بی‌بی‌سی فارسی", cat: "news", badge: "BBC", color: "#a50e0e",
    streams: ["https://vs-hls-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_persian_tv/mobile_wifi_main_hd_abr_v2.m3u8",
              "https://vs-hls-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_persian_tv/pc_hd_abr_v2.m3u8"],
    urls: [P("BBC-Persian")] },
  { id: "voa", name: "VOA Persian", fa: "صدای آمریکا", cat: "news", badge: "VOA", color: "#1d4f91",
    streams: ["https://voa-ingest.akamaized.net/hls/live/2033876/tvmc07/playlist.m3u8", WNS("voaphls")], urls: [P("VOA-Persian")] },
  { id: "iranefarda", name: "Irane Farda TV", fa: "ایران فردا", cat: "news", badge: "FARDA TV", color: "#37474f",
    streams: ["https://iranefardalive.com/stream/live.m3u8"], urls: [P("Irane-Farda")] },
  { id: "dwenglish", name: "DW English", fa: "دویچه‌وله انگلیسی", cat: "english", badge: "DW", color: "#0a4d8c",
    streams: ["https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/master.m3u8",
              "https://amg01644-amg01644c1-amgplt0343.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg01644-amg01644c1-amgplt0343/playlist.m3u8"] },
  { id: "radiofarda", name: "Radio Farda", fa: "رادیو فردا", cat: "news", badge: "فردا", color: "#c2410c",
    urls: [P("Radio-Farda"), P("Radio-Farda-TV")] },
  { id: "kanalyek", name: "Channel One", fa: "کانال یک", cat: "news", badge: "CH 1", color: "#0d47a1",
    streams: [PERSIANA("pemirateshls")], urls: [P("Channel-One")] },
  { id: "tolonews", name: "TOLOnews", fa: "طلوع نیوز", cat: "news", badge: "TOLO NEWS", color: "#c62828",
    streams: ["https://tgn.bozztv.com/eshgtv-dvrfl05/gin-tolonews/index.m3u8"] },

  /* ── یادگیری زبان انگلیسی (اخبار و برنامه‌های انگلیسی‌زبان با لهجه‌های مختلف) ── */
  { id: "bbcnews", name: "BBC News", fa: "بی‌بی‌سی نیوز", cat: "english", streams: ["https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/mobile_wifi_main_hd_abr_v2.m3u8"] },
  { id: "aljazeeraen", name: "Al Jazeera English", fa: "الجزیره انگلیسی", cat: "english", streams: ["https://live-hls-apps-aje-fa.getaj.net/AJE/index.m3u8"] },
  { id: "france24en", name: "France 24 English", fa: "فرانس ۲۴ انگلیسی", cat: "english", streams: ["https://live.france24.com/hls/live/2037218-b/F24_EN_HI_HLS/master_5000.m3u8"] },
  { id: "nhkworld", name: "NHK World-Japan", fa: "ان‌اچ‌کی ژاپن", cat: "english", streams: ["https://masterpl.hls.nhkworld.jp/hls/w/live/smarttv.m3u8"] },
  { id: "trtworld", name: "TRT World", fa: "تی‌آر‌تی ورلد", cat: "english", streams: ["https://mumbai-edge.smartplaytv.in/TRTWorld/index.m3u8", "https://dash2.antik.sk/live/test_trt_world_atktv/playlist.m3u8"] },
  { id: "cgtnen", name: "CGTN English", fa: "سی‌جی‌تی‌ان انگلیسی", cat: "english", streams: ["https://amg00405-rakutentv-cgtn-rakuten-i9tar.amagi.tv/master.m3u8", "https://h5cul1yar48um3t.wcetv.com/hls/cgtn.m3u8"] },
  { id: "abcnews", name: "ABC News Live", fa: "ای‌بی‌سی نیوز", cat: "english", streams: ["https://abcnews-streams.akamaized.net/hls/live/2023560/abcnewshudson1/master.m3u8", "https://abcnews-streams.akamaized.net/hls/live/2023561/abcnewshudson2/master.m3u8"] },
  { id: "cbsnewsny", name: "CBS News New York", fa: "سی‌بی‌اس نیوز", cat: "english", streams: ["https://cbsn-ny.cbsnstream.cbsnews.com/out/v1/ec3897d58a9b45129a77d67aa247d136/master.m3u8"] },
  { id: "nbcnewsnow", name: "NBC News NOW", fa: "ان‌بی‌سی نیوز", cat: "english", streams: ["https://aegis-cloudfront-1.tubi.video/605fb6ea-f89c-451a-873c-030cb726b493/master.m3u8", "https://d1si3n1st4nkgb.cloudfront.net/10502/88896001/hls/master.m3u8?ads.xumo_channelId=88896001"] },
  { id: "abcau", name: "ABC News Australia", fa: "ای‌بی‌سی استرالیا", cat: "english", streams: ["https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8"] },
  { id: "reuters", name: "Reuters", fa: "رویترز", cat: "english", streams: ["https://amg00453-reuters-amg00453c1-rakuten-uk-2110.playouts.now.amagi.tv/playlist/amg00453-reuters-reuters-rakutenuk/playlist.m3u8", "https://amg00453-reuters-amg00453c1-xumo-us-2073.playouts.now.amagi.tv/reuters-reuters-hls/playlist.m3u8"] },
  { id: "bloomberg", name: "Bloomberg TV", fa: "بلومبرگ", cat: "english", streams: ["https://bloomberg.com/media-manifest/streams/us.m3u8", "https://bloomberg.com/media-manifest/streams/eu.m3u8"] },
  { id: "cnaorig", name: "CNA Originals", fa: "سی‌ان‌ای", cat: "english", streams: ["https://amg01082-cna-amg01082c1-rlaxx-us-11304.playouts.now.amagi.tv/playlist.m3u8"] },
  { id: "arirang", name: "Arirang TV", fa: "آریرانگ", cat: "english", streams: ["https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8"] },
  { id: "i24en", name: "i24NEWS English", fa: "آی۲۴ انگلیسی", cat: "english", streams: ["https://i24newsenglish-cdn.encoders.immergo.tv/master.m3u8"] },
  { id: "wion", name: "WION", fa: "وایون", cat: "english", streams: ["https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8"] },
  { id: "africanews", name: "Africanews English", fa: "آفریکانیوز", cat: "english", streams: ["https://cdn-euronews.akamaized.net/live/eds/africanews-en/25049/index.m3u8"] },
  { id: "ted", name: "TED", fa: "تد (سخنرانی‌ها)", cat: "english", streams: ["https://d1b16tvvxk3tnu.cloudfront.net/TED.m3u8"] },
  { id: "pbskids", name: "PBS Kids", fa: "پی‌بی‌اس کیدز", cat: "english", streams: ["https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8", "https://livestream.pbskids.org/out/v1/11f2e6b73eaa4887b3746cb863960e79/pst.m3u8"] },
  { id: "mrbean", name: "Mr Bean Animated", fa: "مستر بین کارتونی", cat: "english", streams: ["https://amg00627-amg00627c23-samsung-gb-3927.playouts.now.amagi.tv/playlist.m3u8"] },
  { id: "mrbeanlive", name: "Mr Bean Live Action", fa: "مستر بین", cat: "english", streams: ["https://amg00627-amg00627c40-rakuten-uk-5725.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanpopupcc-rakutenuk/playlist.m3u8"] },
  { id: "moviesphere", name: "MovieSphere", fa: "فیلم انگلیسی", cat: "english", streams: ["https://aegis-cloudfront-1.tubi.video/8b127a5b-3054-4f39-93a2-1c4aab9ef5ff/playlist.m3u8", "https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8"] },
  { id: "classicarts", name: "Classic Arts Showcase", fa: "هنر کلاسیک", cat: "english", streams: ["https://classicarts.akamaized.net/hls/live/1024257/CAS/master.m3u8"] },

  /* ── فیلم و سریال ── */
  { id: "gemtv", name: "GEM TV", fa: "جم تی‌وی", cat: "movies", badge: "GEM", color: "#7b1fa2", streams: [GEM("gem"), GEM("gemtvplus")], urls: [P("GEM-TV")] },
  { id: "gemseries", name: "GEM Series", fa: "جم سریال", cat: "movies", badge: "GEM SERIES", color: "#8e24aa", streams: [GEM("gemseriesplus")], urls: [P("GEM-Series")] },
  { id: "gemfilm", name: "GEM Film", fa: "جم فیلم", cat: "movies", badge: "GEM FILM", color: "#6a1b9a", streams: [GEM("gemfilm")] },
  { id: "gemclassic", name: "GEM Classic", fa: "جم کلاسیک", cat: "movies", badge: "CLASSIC", color: "#5d4037", streams: [GEM("gemclassic")] },
  { id: "gemonyx", name: "GEM Onyx", fa: "جم اونیکس", cat: "movies", badge: "ONYX", color: "#212121", streams: [GEM("gemonyx")] },
  { id: "gemdrama", name: "GEM Drama", fa: "جم درام", cat: "movies", badge: "GEM DRAMA", color: "#ad1457", streams: [GEM("gemdrama"), GEM("gemdramaplus")], urls: [P("GEM-Drama")] },
  { id: "gemriver", name: "GEM River", fa: "جم ریور", cat: "movies", badge: "GEM RIVER", color: "#00796b", streams: [GEM("gemriver"), GEM("gemriverplus")], urls: [P("GEM-River")] },
  { id: "gemrubix", name: "GEM Rubix", fa: "جم روبیکس", cat: "movies", badge: "RUBIX", color: "#e65100", streams: [GEM("gemrubix"), GEM("gemrubixplus")], urls: [P("GEM-Rubix")] },
  { id: "gembollywood", name: "GEM Bollywood", fa: "جم بالیوود", cat: "movies", badge: "BOLLYWOOD", color: "#c2185b", streams: [GEM("gembollywood")], urls: [P("GEM-Bollywood")] },
  { id: "gemcomedy", name: "GEM Comedy", fa: "جم کمدی", cat: "movies", badge: "GEM COMEDY", color: "#f57f17", streams: [GEM("gemcomedy")] },
  { id: "persianacinema", name: "Persiana Cinema", fa: "پرشیانا سینما", cat: "movies", badge: "PERSIANA CINEMA", color: "#b71c1c",
    streams: [PERSIANA("cinehls"), WNS("todayhls")], urls: [P("Persiana-Cinema")] },
  { id: "persianaseries", name: "Persiana Series", fa: "پرشیانا سریال", cat: "movies", badge: "PERSIANA SERIES", color: "#c62828", streams: [PERSIANA("onehls")] },
  { id: "persianairanian", name: "Persiana Iranian", fa: "پرشیانا ایرانیان", cat: "movies", badge: "IRANIAN", color: "#880e4f", streams: [PERSIANA("irhls")], urls: [P("Persiana-Iranian")] },
  { id: "persiananostalgia", name: "Persiana Nostalgia", fa: "پرشیانا نوستالژی", cat: "movies", badge: "NOSTALGIA", color: "#795548", streams: [PERSIANA("noshls")] },
  { id: "persianakorea", name: "Persiana Korea", fa: "پرشیانا کره", cat: "movies", badge: "KOREA", color: "#1565c0", streams: [PERSIANA("korhls")] },
  { id: "persianaturkiye", name: "Persiana Turkiye", fa: "پرشیانا ترکیه", cat: "movies", badge: "TÜRKİYE", color: "#c62828", streams: [PERSIANA("turkhls")] },
  { id: "persianalatino", name: "Persiana Latino", fa: "پرشیانا لاتین", cat: "movies", badge: "LATINO", color: "#ef6c00", streams: [PERSIANA("latinohls")] },
  { id: "mbcpersia", name: "MBC Persia", fa: "ام‌بی‌سی پرشیا", cat: "movies", badge: "MBC", color: "#1565c0",
    streams: ["https://hls.mbcpersia.live/hls/stream.m3u8", "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-persia/818ee8e4b592dc497608f066d825bfb4/index.m3u8"],
    urls: [P("MBC-Persia")] },
  { id: "afrafilm", name: "Afra Film", fa: "افرا فیلم", cat: "movies", badge: "AFRA FILM", color: "#4e342e", streams: [WNS("afrafhls")] },
  { id: "afraseries", name: "Afra Series", fa: "افرا سریال", cat: "movies", badge: "AFRA SERIES", color: "#5d4037", streams: [WNS("afrashls")] },
  { id: "avaseries", name: "AVA Series", fa: "آوا سریال", cat: "movies", badge: "AVA SERIES", color: "#283593", streams: [WNS("avaserieshls")] },
  { id: "grandcinema", name: "Grand Cinema", fa: "گرند سینما", cat: "movies", badge: "GRAND CINEMA", color: "#3e2723", streams: [WNS("gcinemahls")] },
  { id: "cafefilm", name: "Cafe Film", fa: "کافه فیلم", cat: "movies", badge: "CAFE FILM", color: "#6d4c41", streams: [WNS("cafefhls")] },
  { id: "goldstar", name: "Gold Star", fa: "گلد استار", cat: "movies", badge: "GOLD STAR", color: "#b8860b", streams: [WNS("moviethls")] },
  { id: "metafilm", name: "Meta Film", fa: "متا فیلم", cat: "movies", badge: "META FILM", color: "#4527a0", streams: [WNS("metafilmhls")] },
  { id: "newflix", name: "Newflix", fa: "نیوفلیکس", cat: "movies", badge: "NEWFLIX", color: "#b71c1c", streams: [WNS("newfhls")] },
  { id: "ekranmovies", name: "Ekran Movies", fa: "اکران مووی", cat: "movies", badge: "EKRAN", color: "#37474f", streams: [GEM("EkranMovies")] },
  { id: "t2movies", name: "T2 Movies", fa: "تی۲ مووی", cat: "movies", badge: "T2 MOVIES", color: "#00838f", streams: [GEM("T2Movies")] },
  { id: "classictv", name: "Classic TV", fa: "کلاسیک تی‌وی", cat: "movies", badge: "CLASSIC TV", color: "#4e342e", streams: [WNS("clshls")] },
  { id: "khatereh", name: "Khatereh TV", fa: "خاطره", cat: "movies", badge: "خاطره", color: "#6d4c41", urls: [P("Khatereh-TV")] },
  { id: "ifilm", name: "iFilm", fa: "آی‌فیلم", cat: "movies", badge: "iFILM", color: "#c77800",
    streams: [TWB("ifilm"), "https://live.presstv.ir/hls/ifilmfa.m3u8"], urls: [TWB_SITE("ifilm"), P("iFilm-Persian")] },
  { id: "ifilm2", name: "iFilm 2", fa: "آی‌فیلم ۲", cat: "movies", badge: "iFILM 2", color: "#a35f00",
    streams: ["https://live.presstv.ir/hls/ifilm2.m3u8"], urls: ["https://fa2.ifilmtv.ir/Home/Live"] },
  { id: "namayesh", name: "IRIB Namayesh", fa: "نمایش", cat: "movies", badge: "نمایش", color: "#5e35b1", streams: [TWB("namayesh")], urls: [TWB_SITE("namayesh")] },
  { id: "tamasha", name: "IRIB Tamasha", fa: "تماشا", cat: "movies", badge: "تماشا", color: "#283593", streams: [TWB("hdtest")] },
  { id: "ytfilms", name: "YouTube Movies", fa: "فیلم‌های یوتیوب", cat: "movies", badge: "YouTube", color: "#d32f2f", embed: "https://www.youtube.com/embed/videoseries?list=UUlgRkhTL3_hImCAmdLfDE4g", urls: ["https://www.youtube.com/channel/UClgRkhTL3_hImCAmdLfDE4g"] },

  /* ── مستند و تاریخی ── */
  { id: "mostanad", name: "IRIB Mostanad", fa: "شبکه مستند", cat: "docs", badge: "مستند", color: "#2e7d32",
    streams: [TWB("mostanad")], urls: [TWB_SITE("mostanad"), P("Mostanad")] },
  { id: "tv4", name: "IRIB TV4", fa: "شبکه چهار", cat: "docs", badge: "۴", color: "#00695c", streams: [TWB("tv4")], urls: [TWB_SITE("tv4")] },
  { id: "persianadocs", name: "Persiana Docs", fa: "پرشیانا مستند", cat: "docs", badge: "PERSIANA DOCS", color: "#33691e", streams: [PERSIANA("scihls")] },
  { id: "persianatravel", name: "Persiana Travel", fa: "پرشیانا سفر", cat: "docs", badge: "TRAVEL", color: "#0277bd", streams: [PERSIANA("ptravelhls"), WNS("mardomhls")] },
  { id: "persianamedical", name: "Persiana Medical", fa: "پرشیانا پزشکی", cat: "docs", badge: "MEDICAL", color: "#00838f", streams: [PERSIANA("phd2hls"), WNS("tfnhls")] },
  { id: "gemnature", name: "GEM Nature", fa: "جم نیچر", cat: "docs", badge: "GEM NATURE", color: "#2e7d32", streams: [GEM("gemnature")] },
  { id: "manotodocs", name: "Manoto Documentaries", fa: "مستندهای منوتو", cat: "docs", badge: "manoto", color: "#37474f",
    embed: "https://www.youtube.com/embed/videoseries?list=PLK_tIl1mumy8EHJtlHd0H_omDgqKGsrwu", urls: ["https://www.youtube.com/playlist?list=PLK_tIl1mumy8EHJtlHd0H_omDgqKGsrwu"] },
  { id: "historyhit", name: "History Hit", fa: "History Hit (تاریخی)", cat: "docs", badge: "HISTORY HIT", color: "#7f1d1d", streams: ["https://lds-timeline-rakuten.amagi.tv/playlist.m3u8"] },
  { id: "historyhunters", name: "History Hunters", fa: "History Hunters (تاریخی)", cat: "docs", badge: "HISTORY", color: "#6d4c41",
    streams: ["https://amg00841-amg00841c7-rakuten-uk-2820.playouts.now.amagi.tv/playlist/amg00841-aeemeafast-historyhuntersrakuten-rakutenuk/playlist.m3u8"] },
  { id: "truehistory", name: "True History", fa: "True History (تاریخی)", cat: "docs", badge: "TRUE HISTORY", color: "#5d4037",
    streams: ["https://linear-188.frequency.stream/dist/glewedtv/188/hls/master/playlist.m3u8"] },
  { id: "cgtndoc", name: "CGTN Documentary", fa: "CGTN Documentary", cat: "docs", badge: "CGTN DOC", color: "#0d47a1",
    streams: ["https://hlspackager.akamaized.net/live/DB/CGTN_DOCUMENTARY/HLS/CGTN_DOCUMENTARY.m3u8", "https://global.cgtn.cicc.media.caton.cloud/master/cgtn-documentary.m3u8"] },
  { id: "docplus", name: "Documentary+", fa: "Documentary+", cat: "docs", badge: "DOC+", color: "#263238",
    streams: ["https://ef79b15c8c7c46c7a9de9d33001dbd07.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-859-DOCUMENTARYPLUS-DOCUMENTARYPLUS/mt/documentaryplus/859/hls/master/playlist.m3u8"] },
  { id: "curiosity", name: "Curiosity Now", fa: "Curiosity Now", cat: "docs", badge: "CURIOSITY", color: "#1565c0",
    streams: ["https://amg00170-curiositystream-amg00170c3-rakuten-us-2289.playouts.now.amagi.tv/playlist/amg00170-curiositystreamllcfast-curiositynowrow-rakutenus/playlist.m3u8"] },
  { id: "docubay", name: "DocuBay", fa: "DocuBay", cat: "docs", badge: "DOCUBAY", color: "#004d40",
    streams: ["https://cc-mgr91yrk4pehy.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-mgr91yrk4pehy/playlist.m3u8"] },
  { id: "bbcearth", name: "BBC Earth", fa: "BBC Earth", cat: "docs", badge: "BBC EARTH", color: "#1b5e20",
    streams: ["https://aegis-cloudfront-1.tubi.video/bb1fc6ad-9948-42ea-aaf3-20acfcdeecac/playlist.m3u8"] },
  { id: "lovenature", name: "Love Nature", fa: "Love Nature (حیات وحش)", cat: "docs", badge: "LOVE NATURE", color: "#2e7d32",
    streams: ["https://aegis-cloudfront-1.tubi.video/6d6d0f24-8445-4b4c-bdf6-44f9e38beaa4/playlist.m3u8", "https://mumbai-edge.smartplaytv.in/LoveNature/index.m3u8"] },
  { id: "realwild", name: "Real Wild", fa: "Real Wild (حیات وحش)", cat: "docs", badge: "REAL WILD", color: "#33691e", streams: ["https://lds-realwild-rakuten.amagi.tv/playlist.m3u8"] },
  { id: "wildearth", name: "WildEarth", fa: "WildEarth (سافاری زنده)", cat: "docs", badge: "WILDEARTH", color: "#827717",
    streams: ["https://wildearth-ono.amagi.tv/playlist/amg01290-wildearth-oando/playlist.m3u8", "https://wildearth-xumo.amagi.tv/master.m3u8"] },
  { id: "naturetime", name: "Nature Time", fa: "Nature Time", cat: "docs", badge: "NATURE TIME", color: "#388e3c",
    streams: ["https://amg00090-amgnaturetimeemea-rakuten.amagi.tv/playlist.m3u8", "https://bamusa-naturetime-emea-eng-rakuten.amagi.tv/playlist.m3u8"] },
  { id: "terramater", name: "Terra Mater Wild", fa: "Terra Mater Wild", cat: "docs", badge: "TERRA MATER", color: "#4e342e",
    streams: ["https://amg01775-amg01775c1-amgplt0343.playout.now3.amagi.tv/playlist/amg01775-amg01775c1-amgplt0343/playlist.m3u8"] },
  { id: "chinatravel", name: "China Travel", fa: "China Travel (سفر)", cat: "docs", badge: "CHINA TRAVEL", color: "#c62828",
    streams: ["https://fastlive.cctvplus.com/out/v1/ca6f9297b7314a63959435028af287fc/index.m3u8"] },
  { id: "dwdocs", name: "DW Documentary", fa: "DW Documentary", cat: "docs", badge: "DW DOC", color: "#0a4d8c", embed: "https://www.youtube.com/embed/videoseries?list=UUW39zufHfsuGgpLviKh297Q", urls: ["https://www.youtube.com/channel/UCW39zufHfsuGgpLviKh297Q"] },
  { id: "nasatv", name: "NASA TV", fa: "NASA TV", cat: "docs", badge: "NASA", color: "#0b3d91", embed: "https://www.youtube.com/embed/live_stream?channel=UCLA_DiR1FfKNvjuUpBHmylQ", urls: [P("NASA-TV")] },

  /* ── ورزشی ── */
  { id: "varzesh", name: "IRIB Varzesh", fa: "شبکه ورزش", cat: "sports", badge: "ورزش", color: "#1b5e20", streams: [TWB("varzesh")], urls: [TWB_SITE("varzesh")] },
  { id: "tv3", name: "IRIB TV3", fa: "شبکه سه", cat: "sports", badge: "۳", color: "#0d47a1", streams: [TWB("tv3")], urls: [TWB_SITE("tv3")] },
  { id: "persianafight", name: "Persiana Fight", fa: "پرشیانا فایت (رزمی)", cat: "sports", badge: "FIGHT", color: "#b71c1c", streams: [PERSIANA("fighthls")] },
  { id: "gemfit", name: "GEM Fit", fa: "جم فیت (ورزش و تناسب)", cat: "sports", badge: "GEM FIT", color: "#00897b", streams: [GEM("gemfit")] },

  /* ── موسیقی ── */
  { id: "nava", name: "IRIB Nava", fa: "نوا", cat: "music", badge: "نوا", color: "#00796b", streams: [TWB("nava")], urls: [TWB_SITE("nava")] },
  { id: "pmc", name: "PMC", fa: "PMC", cat: "music", badge: "PMC", color: "#ad1457", streams: [WNS("pmchls")], urls: [P("PMC")] },
  { id: "pmcroyale", name: "PMC Royale", fa: "PMC Royale", cat: "music", badge: "ROYALE", color: "#6a1b9a", streams: [WNS("pmcrohls")], urls: [P("PMC-Royale")] },
  { id: "4music", name: "4Music", fa: "4Music", cat: "music", badge: "4MUSIC", color: "#283593", streams: [WNS("itthls")], urls: [P("4Music")] },
  { id: "persianamusic", name: "Persiana Music", fa: "پرشیانا موزیک", cat: "music", badge: "PERSIANA MUSIC", color: "#bf360c", streams: [PERSIANA("musichls")], urls: [P("Persiana-Music")] },
  { id: "persianafolk", name: "Persiana Folk", fa: "پرشیانا موسیقی محلی", cat: "music", badge: "FOLK", color: "#8d6e63", streams: [PERSIANA("sonhls")] },
  { id: "persianavibe", name: "Persiana Vibe", fa: "پرشیانا وایب", cat: "music", badge: "VIBE", color: "#4a148c", streams: [PERSIANA("raphls")] },
  { id: "navahang", name: "Navahang TV", fa: "نواهنگ", cat: "music", badge: "NAVAHANG", color: "#00695c", streams: [WNS("simahls")] },
  { id: "gemmifa", name: "GEM Mifa", fa: "جم میفا", cat: "music", badge: "MIFA", color: "#d81b60", streams: [GEM("gemmifa"), GEM("gemmifaplus")] },

  /* ── کودک و نوجوان ── */
  { id: "pooya", name: "IRIB Pooya", fa: "پویا و نهال", cat: "kids", badge: "پویا", color: "#f9a825", streams: [TWB("pooya")] },
  { id: "gemjunior", name: "GEM Junior", fa: "جم جونیور", cat: "kids", badge: "JUNIOR", color: "#fb8c00", streams: [GEM("gemjunior")] },
  { id: "gemkids", name: "GEM Kids", fa: "جم کیدز", cat: "kids", badge: "GEM KIDS", color: "#43a047", streams: [GEM("gemkids")] },
  { id: "persianajunior", name: "Persiana Junior", fa: "پرشیانا جونیور", cat: "kids", badge: "JUNIOR", color: "#039be5", streams: [PERSIANA("junhls")] },
  { id: "persianateen", name: "Persiana Teen", fa: "پرشیانا تین", cat: "kids", badge: "TEEN", color: "#8e24aa", streams: [PERSIANA("kphls")] },

  /* ── سرگرمی و عمومی ── */
  { id: "manoto", name: "Manoto", fa: "منوتو", cat: "general", badge: "manoto", color: "#263238",
    streams: [GEM("manototv")], urls: ["https://www.youtube.com/@manototv/videos"] },
  { id: "tapesh", name: "Tapesh TV", fa: "تپش", cat: "general", badge: "TAPESH", color: "#b71c1c",
    streams: ["https://iptv.tapesh.tv/tapesh/playlist.m3u8"], urls: [P("Tapesh"), P("Tapesh-Iran")] },
  { id: "tapesh2", name: "Tapesh 2", fa: "تپش ۲", cat: "general", badge: "TAPESH 2", color: "#c62828", streams: [WNS("maxtvhls")] },
  { id: "persianaone", name: "Persiana One", fa: "پرشیانا وان", cat: "general", badge: "PERSIANA ONE", color: "#880e4f", urls: [P("Persiana-One")] },
  { id: "persianaplus", name: "Persiana Plus", fa: "پرشیانا پلاس", cat: "general", badge: "PERSIANA PLUS", color: "#6a1b9a", streams: [PERSIANA("euhls")] },
  { id: "persianafamily", name: "Persiana Family", fa: "پرشیانا فمیلی", cat: "general", badge: "FAMILY", color: "#ad1457", streams: [PERSIANA("familyhls")] },
  { id: "persianacomedy", name: "Persiana Comedy", fa: "پرشیانا کمدی", cat: "general", badge: "COMEDY", color: "#f57f17", streams: [PERSIANA("comedyhls")] },
  { id: "persianareality", name: "Persiana Reality", fa: "پرشیانا ریالیتی", cat: "general", badge: "REALITY", color: "#5e35b1", streams: [PERSIANA("twohls")] },
  { id: "gemlife", name: "GEM Life", fa: "جم لایف", cat: "general", badge: "GEM LIFE", color: "#00897b", streams: [GEM("gemlife")] },
  { id: "gemfood", name: "GEM Food", fa: "جم فود (آشپزی)", cat: "general", badge: "GEM FOOD", color: "#ef6c00", streams: [GEM("gemfood")] },
  { id: "parstv", name: "Pars TV", fa: "پارس تی‌وی", cat: "general", badge: "PARS", color: "#1565c0", streams: [WNS("parshls")], urls: [P("Pars-TV")] },
  { id: "itn", name: "ITN TV", fa: "ITN", cat: "general", badge: "ITN", color: "#0d47a1", streams: [WNS("itnhls")], urls: [P("ITN-TV")] },
  { id: "omideiran", name: "Omid-e-Iran", fa: "امید ایران", cat: "general", badge: "OITN", color: "#2e7d32", streams: [WNS("oitnhls")] },
  { id: "iccplus", name: "ICC Plus", fa: "ICC Plus", cat: "general", badge: "ICC", color: "#283593", streams: [WNS("icchls")] },
  { id: "homeplus", name: "Home Plus", fa: "هوم پلاس", cat: "general", badge: "HOME PLUS", color: "#00838f", streams: [WNS("homeplushls")] },
  { id: "tolotv", name: "TOLO TV", fa: "طلوع", cat: "general", badge: "TOLO", color: "#d32f2f", streams: ["https://tgn.bozztv.com/eshgtv-dvrfl05/gin-tolohd/tracks-v1a1/mono.m3u8"] },
  { id: "erfan", name: "Erfan Halgheh", fa: "عرفان حلقه", cat: "general", badge: "عرفان", color: "#4a148c",
    streams: ["https://hls.erfanhalgheh.live/hls/stream.m3u8"], urls: [P("Erfan-Halgheh")] },

  /* ── شبکه‌های داخلی (صدا و سیما) ── */
  { id: "tv1", name: "IRIB TV1", fa: "شبکه یک", cat: "iran", badge: "۱", color: "#1565c0", streams: [TWB("tv1")], urls: [TWB_SITE("tv1")] },
  { id: "tv2", name: "IRIB TV2", fa: "شبکه دو", cat: "iran", badge: "۲", color: "#2e7d32", streams: [TWB("tv2")], urls: [TWB_SITE("tv2")] },
  { id: "tehran", name: "IRIB Tehran", fa: "شبکه تهران", cat: "iran", badge: "تهران", color: "#6a1b9a", streams: [TWB("tehran")], urls: [TWB_SITE("tehran")] },
  { id: "nasim", name: "IRIB Nasim", fa: "نسیم", cat: "iran", badge: "نسیم", color: "#00838f", streams: [TWB("nasim")], urls: [TWB_SITE("nasim")] },
  { id: "omid", name: "IRIB Omid", fa: "امید", cat: "iran", badge: "امید", color: "#ef6c00", streams: [TWB("omid")] },
  { id: "ofogh", name: "IRIB Ofogh", fa: "افق", cat: "iran", badge: "افق", color: "#4e342e", streams: [TWB("ofogh")] },
  { id: "salamat", name: "IRIB Salamat", fa: "سلامت", cat: "iran", badge: "سلامت", color: "#00897b", streams: [TWB("salamat")] },
  { id: "amouzesh", name: "IRIB Amouzesh", fa: "آموزش", cat: "iran", badge: "آموزش", color: "#3949ab", streams: [TWB("amouzesh")] },
  { id: "iribuhd", name: "IRIB UHD", fa: "فراتر (UHD)", cat: "iran", badge: "UHD", color: "#212121", streams: [TWB("faratar")] },
];
}
