/*
  فهرست ثابت شبکه‌ها
  ===================
  شبکه‌های عمومی و امن (داخلی رسمی، مستندهای جهانی، طبیعت، فضا، زبان انگلیسی و آموزش)
  بدون نیاز به ایمپورت فایل، به صورت پیش‌فرض در صفحه لود می‌شوند.
  شبکه‌های حساس سیاسی و ماهواره‌ای در فایل‌های ایمپورت اختصاصی قرار دارند.
*/

{
window.SAT_CATEGORIES = [
  {
    "id": "iran",
    "name": "شبکه‌های داخلی"
  },
  {
    "id": "nature",
    "name": "طبیعت و حیات وحش"
  },
  {
    "id": "travel",
    "name": "سفر و آرامش"
  },
  {
    "id": "docs",
    "name": "مستند و تاریخی"
  },
  {
    "id": "sports",
    "name": "ورزشی"
  },
  {
    "id": "kids",
    "name": "کودک و نوجوان"
  },
  {
    "id": "english",
    "name": "یادگیری زبان انگلیسی"
  },
  {
    "id": "news",
    "name": "خبری"
  },
  {
    "id": "movies",
    "name": "فیلم و سریال"
  },
  {
    "id": "iranfilm",
    "name": "فیلم ایرانی"
  },
  {
    "id": "intl",
    "name": "فیلم و سریال خارجی"
  },
  {
    "id": "music",
    "name": "موسیقی"
  },
  {
    "id": "general",
    "name": "سرگرمی و عمومی"
  }
];

const P = n => `https://www.parsatv.com/name=${n}`;
const TWB = n => `https://ncdn.telewebion.ir/${n}/live/playlist.m3u8`;
const TWB_SITE = n => `https://telewebion.com/live/${n}`;
const SEPEHR = n => `https://sepehrtv.ir/live/${n}`;

window.SAT_CHANNELS = [
  {"id":"tv1","name":"IRIB TV1","fa":"شبکه یک","cat":"iran","badge":"۱","color":"#1565c0","streams":["https://ncdn.telewebion.ir/tv1/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/tv1","urls":["https://sepehrtv.ir/live/tv1","https://telewebion.com/live/tv1"]},
  {"id":"tv2","name":"IRIB TV2","fa":"شبکه دو","cat":"iran","badge":"۲","color":"#2e7d32","streams":["https://ncdn.telewebion.ir/tv2/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/tv2","urls":["https://sepehrtv.ir/live/tv2","https://telewebion.com/live/tv2"]},
  {"id":"tv3","name":"IRIB TV3","fa":"شبکه سه","cat":"sports","badge":"۳","color":"#0d47a1","streams":["https://ncdn.telewebion.ir/tv3/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/tv3","urls":["https://sepehrtv.ir/live/tv3","https://telewebion.com/live/tv3"]},
  {"id":"tv4","name":"IRIB TV4","fa":"شبکه چهار","cat":"docs","badge":"۴","color":"#00695c","streams":["https://ncdn.telewebion.ir/tv4/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/tv4","urls":["https://sepehrtv.ir/live/tv4","https://telewebion.com/live/tv4"]},
  {"id":"tehran","name":"IRIB Tehran","fa":"شبکه تهران","cat":"iran","badge":"تهران","color":"#6a1b9a","streams":["https://ncdn.telewebion.ir/tehran/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/tehran","urls":["https://sepehrtv.ir/live/tehran","https://telewebion.com/live/tehran"]},
  {"id":"aflak","name":"IRIB Aflak","fa":"شبکه افلاک (لرستان)","cat":"iran","badge":"افلاک","color":"#4e342e","streams":["https://ncdn.telewebion.ir/aflak/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/aflak","urls":["https://sepehrtv.ir/live/aflak"]},
  {"id":"irinn","name":"IRIB News","fa":"شبکه خبر","cat":"iran","badge":"خبر","color":"#b71c1c","streams":["https://ncdn.telewebion.ir/irinn/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/irinn","urls":["https://sepehrtv.ir/live/irinn","https://telewebion.com/live/irinn"]},
  {"id":"varzesh","name":"IRIB Varzesh","fa":"شبکه ورزش","cat":"sports","badge":"ورزش","color":"#1b5e20","streams":["https://ncdn.telewebion.ir/varzesh/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/varzesh","urls":["https://sepehrtv.ir/live/varzesh","https://telewebion.com/live/varzesh"]},
  {"id":"mostanad","name":"IRIB Mostanad","fa":"شبکه مستند","cat":"docs","badge":"مستند","color":"#2e7d32","streams":["https://ncdn.telewebion.ir/mostanad/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/mostanad","urls":["https://sepehrtv.ir/live/mostanad","https://telewebion.com/live/mostanad","https://www.parsatv.com/name=Mostanad"]},
  {"id":"nasim","name":"IRIB Nasim","fa":"نسیم","cat":"iran","badge":"نسیم","color":"#00838f","streams":["https://ncdn.telewebion.ir/nasim/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/nasim","urls":["https://sepehrtv.ir/live/nasim","https://telewebion.com/live/nasim"]},
  {"id":"tamasha","name":"IRIB Tamasha","fa":"تماشا","cat":"movies","badge":"تماشا","color":"#283593","streams":["https://ncdn.telewebion.ir/hdtest/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/tamasha","urls":["https://sepehrtv.ir/live/tamasha","https://telewebion.com/live/hdtest"]},
  {"id":"namayesh","name":"IRIB Namayesh","fa":"نمایش","cat":"iranfilm","badge":"نمایش","color":"#5e35b1","streams":["https://ncdn.telewebion.ir/namayesh/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/namayesh","urls":["https://sepehrtv.ir/live/namayesh","https://telewebion.com/live/namayesh"]},
  {"id":"ifilm","name":"iFilm","fa":"آی‌فیلم","cat":"iranfilm","badge":"iFILM","color":"#c77800","streams":["https://ncdn.telewebion.ir/ifilm/live/playlist.m3u8","https://live.presstv.ir/hls/ifilmfa.m3u8"],"embed":"https://sepehrtv.ir/live/ifilm","urls":["https://sepehrtv.ir/live/ifilm","https://telewebion.com/live/ifilm","https://www.parsatv.com/name=iFilm-Persian"]},
  {"id":"ifilm2","name":"iFilm 2","fa":"آی‌فیلم ۲","cat":"iranfilm","badge":"iFILM 2","color":"#a35f00","streams":["https://live.presstv.ir/hls/ifilm2.m3u8"],"embed":"https://sepehrtv.ir/live/ifilmdari","urls":["https://fa2.ifilmtv.ir/Home/Live","https://sepehrtv.ir/live/ifilmdari"]},
  {"id":"pooya","name":"IRIB Pooya","fa":"پویا و نهال","cat":"kids","badge":"پویا","color":"#f9a825","streams":["https://ncdn.telewebion.ir/pooya/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/pooya","urls":["https://sepehrtv.ir/live/pooya","https://telewebion.com/live/pooya"]},
  {"id":"salamat","name":"IRIB Salamat","fa":"سلامت","cat":"iran","badge":"سلامت","color":"#00897b","streams":["https://ncdn.telewebion.ir/salamat/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/salamat","urls":["https://sepehrtv.ir/live/salamat","https://telewebion.com/live/salamat"]},
  {"id":"amouzesh","name":"IRIB Amouzesh","fa":"آموزش","cat":"iran","badge":"آموزش","color":"#3949ab","streams":["https://ncdn.telewebion.ir/amouzesh/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/amouzesh","urls":["https://sepehrtv.ir/live/amouzesh","https://telewebion.com/live/amouzesh"]},
  {"id":"nava","name":"IRIB Nava","fa":"نوا","cat":"music","badge":"نوا","color":"#00796b","streams":["https://ncdn.telewebion.ir/nava/live/playlist.m3u8"],"embed":"https://sepehrtv.ir/live/nava","urls":["https://sepehrtv.ir/live/nava","https://telewebion.com/live/nava"]},
  {"id":"iribuhd","name":"IRIB UHD","fa":"فراتر (UHD)","cat":"iran","badge":"UHD","color":"#212121","streams":["https://ncdn.telewebion.ir/faratar/live/playlist.m3u8"]},
  {"id":"irnatv","name":"IRNA TV","fa":"ایرنا","cat":"iran","streams":["https://tv.irna.ir/live/stream/index.m3u8"]},
  {"id":"nasatv","name":"NASA TV","fa":"تلویزیون رسمی ناسا (فضا)","cat":"nature","badge":"NASA","color":"#0b3d91","streams":["https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8"],"embed":"","urls":["https://www.nasa.gov/live"]},
  {"id":"dwdoc","name":"DW Documentary","fa":"مستند دویچه‌وله","cat":"docs","badge":"DW DOC","color":"#002d5a","streams":["https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8"],"embed":"","urls":["https://www.dw.com/en/documentaries/s-100806"]},
  {"id":"redbulltv","name":"Red Bull TV","fa":"ردبول تی‌وی (ماجراجویی و طبیعت)","cat":"sports","badge":"RED BULL","color":"#db0a40","streams":["https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8"],"embed":"","urls":["https://www.redbull.com/int-en/live-tv"]},
  {"id":"fifatv","name":"FIFA TV","fa":"فیفا تی‌وی","cat":"sports","badge":"FIFA","color":"#0288d1","streams":["https://d2w9q46ikgrcwx.cloudfront.net/v1/sysdata_s_p_a_fifa_7/samsungheadend_us/latest/main/hls/playlist.m3u8","https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8"],"embed":"https://www.parsatv.com/m/name=FIFA-TV","urls":["https://www.parsatv.com/name=FIFA-TV","https://www.parsatv.com/name=FIFA-Plus"]},
  {"id":"pbskids","name":"PBS Kids","fa":"پی‌بی‌اس کیدز","cat":"english","badge":"","color":"","streams":["https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8","https://livestream.pbskids.org/out/v1/11f2e6b73eaa4887b3746cb863960e79/pst.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"xpbsnature","name":"PBS Nature","fa":"طبیعت","cat":"nature","badge":"","color":"","streams":["https://d3mr43kyql7wgk.cloudfront.net/PBS_Nature.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"xpbstravel","name":"PBS Travel","fa":"سفر","cat":"travel","badge":"","color":"","streams":["https://d3hqevbyoxtkoi.cloudfront.net/PBS_Travel.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"mrbean","name":"Mr Bean Animated","fa":"مستر بین کارتونی","cat":"kids","badge":"","color":"","streams":["https://amg00627-amg00627c23-samsung-gb-3927.playouts.now.amagi.tv/playlist.m3u8"],"embed":"","urls":[]},
  {"id":"mrbeanlive","name":"Mr Bean Live Action","fa":"مستر بین","cat":"kids","badge":"","color":"","streams":["https://amg00627-amg00627c40-rakuten-uk-5725.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanpopupcc-rakutenuk/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"xmrbeananime","name":"Mr. Bean Anime","fa":"مستر بین","cat":"kids","badge":"","color":"","streams":["https://amg00627-amg00627c28-rakuten-uk-3984.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanukcc-rakutenuk/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"xevolutionearth","name":"Evolution Earth","fa":"طبیعت","cat":"nature","badge":"","color":"","streams":["https://amg00276-amg00276c15-samsung-gb-3790.playouts.now.amagi.tv/playlist.m3u8"],"embed":"","urls":[]},
  {"id":"xinwild","name":"INWILD","fa":"حیات وحش","cat":"nature","badge":"","color":"","streams":["https://amg00861-terninternation-inwild-samsunguk-w5wic.amagi.tv/playlist/amg00861-terninternation-inwild-samsunguk/playlist.m3u8"],"embed":"","urls":[]},
  {"id":"xspacelive","name":"Space Live","fa":"فضا","cat":"nature","badge":"","color":"","streams":["https://d111bsx9oooqoh.cloudfront.net/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"xbravewilderness","name":"Brave Wilderness","fa":"حیات وحش","cat":"nature","badge":"","color":"","streams":["https://d95zc3i1pxhs7.cloudfront.net/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"x4ktraveltv","name":"4K Travel TV","fa":"سفر","cat":"travel","badge":"","color":"","streams":["https://streams2.sofast.tv/sofastplayout/33c31ac4-51fa-46ae-afd0-0d1fe5e60a80_0_HLS/master.m3u8"],"embed":"","urls":[]},
  {"id":"historyhit","name":"History Hit","fa":"History Hit (تاریخی)","cat":"docs","badge":"HISTORY HIT","color":"#7f1d1d","streams":["https://lds-timeline-rakuten.amagi.tv/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"historyhunters","name":"History Hunters","fa":"History Hunters (تاریخی)","cat":"docs","badge":"HISTORY","color":"#6d4c41","streams":["https://amg00841-amg00841c7-rakuten-uk-2820.playouts.now.amagi.tv/playlist/amg00841-aeemeafast-historyhuntersrakuten-rakutenuk/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"truehistory","name":"True History","fa":"True History (تاریخی)","cat":"docs","badge":"TRUE HISTORY","color":"#5d4037","streams":["https://linear-188.frequency.stream/dist/glewedtv/188/hls/master/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"cgtndoc","name":"CGTN Documentary","fa":"CGTN Documentary","cat":"docs","badge":"CGTN DOC","color":"#0d47a1","streams":["https://hlspackager.akamaized.net/live/DB/CGTN_DOCUMENTARY/HLS/CGTN_DOCUMENTARY.m3u8","https://global.cgtn.cicc.media.caton.cloud/master/cgtn-documentary.m3u8"],"embed":"","urls":[]},
  {"id":"docplus","name":"Documentary+","fa":"Documentary+","cat":"docs","badge":"DOC+","color":"#263238","streams":["https://ef79b15c8c7c46c7a9de9d33001dbd07.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-859-DOCUMENTARYPLUS-DOCUMENTARYPLUS/mt/documentaryplus/859/hls/master/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"curiosity","name":"Curiosity Now","fa":"Curiosity Now","cat":"docs","badge":"CURIOSITY","color":"#1565c0","streams":["https://amg00170-curiositystream-amg00170c3-rakuten-us-2289.playouts.now.amagi.tv/playlist/amg00170-curiositystreamllcfast-curiositynowrow-rakutenus/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"docubay","name":"DocuBay","fa":"DocuBay","cat":"docs","badge":"DOCUBAY","color":"#004d40","streams":["https://cc-mgr91yrk4pehy.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-mgr91yrk4pehy/playlist.m3u8"],"embed":"","urls":[]},
  {"id":"lovenature","name":"Love Nature","fa":"Love Nature (حیات وحش)","cat":"nature","badge":"LOVE NATURE","color":"#2e7d32","streams":["https://aegis-cloudfront-1.tubi.video/6d6d0f24-8445-4b4c-bdf6-44f9e38beaa4/playlist.m3u8","https://mumbai-edge.smartplaytv.in/LoveNature/index.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"realwild","name":"Real Wild","fa":"Real Wild (حیات وحش)","cat":"nature","badge":"REAL WILD","color":"#33691e","streams":["https://lds-realwild-rakuten.amagi.tv/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"wildearth","name":"WildEarth","fa":"WildEarth (سافاری زنده)","cat":"nature","badge":"WILDEARTH","color":"#827717","streams":["https://wildearth-ono.amagi.tv/playlist/amg01290-wildearth-oando/playlist.m3u8","https://wildearth-xumo.amagi.tv/master.m3u8"],"embed":"","urls":[]},
  {"id":"naturetime","name":"Nature Time","fa":"Nature Time","cat":"nature","badge":"NATURE TIME","color":"#388e3c","streams":["https://amg00090-amgnaturetimeemea-rakuten.amagi.tv/playlist.m3u8","https://bamusa-naturetime-emea-eng-rakuten.amagi.tv/playlist.m3u8"],"embed":"","urls":[]},
  {"id":"terramater","name":"Terra Mater Wild","fa":"Terra Mater Wild","cat":"nature","badge":"TERRA MATER","color":"#4e342e","streams":["https://amg01775-amg01775c1-amgplt0343.playout.now3.amagi.tv/playlist/amg01775-amg01775c1-amgplt0343/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"chinatravel","name":"China Travel","fa":"China Travel (سفر)","cat":"travel","badge":"CHINA TRAVEL","color":"#c62828","streams":["https://fastlive.cctvplus.com/out/v1/ca6f9297b7314a63959435028af287fc/index.m3u8"],"embed":"","urls":[]},
  {"id":"moviesphere","name":"MovieSphere","fa":"فیلم انگلیسی","cat":"english","badge":"","color":"","streams":["https://aegis-cloudfront-1.tubi.video/8b127a5b-3054-4f39-93a2-1c4aab9ef5ff/playlist.m3u8","https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"xhappykids","name":"HappyKids","fa":"کودک","cat":"kids","badge":"","color":"","streams":["https://dil9xdvretp0f.cloudfront.net/index.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"xloolookids","name":"LooLoo Kids","fa":"شعر کودک","cat":"kids","badge":"","color":"","streams":["https://amg02757-amg02757c5-samsung-gb-5765.playouts.now.amagi.tv/playlist/amg02757-loolookids-llkenfast-samsunggb/playlist.m3u8"],"embed":"","urls":[]},
  {"id":"classicarts","name":"Classic Arts Showcase","fa":"هنر کلاسیک","cat":"english","badge":"","color":"","streams":["https://classicarts.akamaized.net/hls/live/1024257/CAS/master.m3u8"],"embed":"","urls":[]},
  {"id":"dwenglish","name":"DW English","fa":"دویچه‌وله انگلیسی","cat":"english","badge":"DW","color":"#0a4d8c","streams":["https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/master.m3u8","https://amg01644-amg01644c1-amgplt0343.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg01644-amg01644c1-amgplt0343/playlist.m3u8"],"embed":"","urls":[]},
  {"id":"aljazeeraen","name":"Al Jazeera English","fa":"الجزیره انگلیسی","cat":"english","badge":"","color":"","streams":["https://live-hls-apps-aje-fa.getaj.net/AJE/index.m3u8"],"embed":"","urls":[]},
  {"id":"france24en","name":"France 24 English","fa":"فرانس ۲۴ انگلیسی","cat":"english","badge":"","color":"","streams":["https://live.france24.com/hls/live/2037218-b/F24_EN_HI_HLS/master_5000.m3u8"],"embed":"","urls":[]},
  {"id":"nhkworld","name":"NHK World-Japan","fa":"ان‌اچ‌کی ژاپن","cat":"english","badge":"","color":"","streams":["https://masterpl.hls.nhkworld.jp/hls/w/live/smarttv.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"trtworld","name":"TRT World","fa":"تی‌آر‌تی ورلد","cat":"english","badge":"","color":"","streams":["https://mumbai-edge.smartplaytv.in/TRTWorld/index.m3u8","https://dash2.antik.sk/live/test_trt_world_atktv/playlist.m3u8"],"embed":"","urls":[]},
  {"id":"cgtnen","name":"CGTN English","fa":"سی‌جی‌تی‌ان انگلیسی","cat":"english","badge":"","color":"","streams":["https://amg00405-rakutentv-cgtn-rakuten-i9tar.amagi.tv/master.m3u8","https://h5cul1yar48um3t.wcetv.com/hls/cgtn.m3u8"],"embed":"","urls":[]},
  {"id":"reuters","name":"Reuters","fa":"رویترز","cat":"english","badge":"","color":"","streams":["https://amg00453-reuters-amg00453c1-rakuten-uk-2110.playouts.now.amagi.tv/playlist/amg00453-reuters-reuters-rakutenuk/playlist.m3u8","https://amg00453-reuters-amg00453c1-xumo-us-2073.playouts.now.amagi.tv/reuters-reuters-hls/playlist.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"bloomberg","name":"Bloomberg TV","fa":"بلومبرگ","cat":"english","badge":"","color":"","streams":["https://bloomberg.com/media-manifest/streams/us.m3u8","https://bloomberg.com/media-manifest/streams/eu.m3u8"],"embed":"","urls":[],"subs":true},
  {"id":"africanews","name":"Africanews English","fa":"آفریکانیوز","cat":"english","badge":"","color":"","streams":["https://cdn-euronews.akamaized.net/live/eds/africanews-en/25049/index.m3u8"],"embed":"","urls":[]}
];

window.SAT_ACCESS = {
  "enforceAccess": false,
  "defaultDays": 90,
  "users": {
    "user-01": {
      "active": true,
      "durationDays": 90,
      "expires": null
    },
    "user-02": {
      "active": true,
      "durationDays": 90,
      "expires": null
    },
    "user-03": {
      "active": true,
      "durationDays": 90,
      "expires": null
    },
    "user-04": {
      "active": true,
      "durationDays": 90,
      "expires": null
    },
    "user-05": {
      "active": true,
      "durationDays": 90,
      "expires": null
    },
    "user-06": {
      "active": true,
      "durationDays": 90,
      "expires": null
    },
    "user-07": {
      "active": true,
      "durationDays": 90,
      "expires": null
    },
    "user-08": {
      "active": true,
      "durationDays": 90,
      "expires": null
    },
    "user-09": {
      "active": true,
      "durationDays": 90,
      "expires": null
    },
    "user-10": {
      "active": true,
      "durationDays": 90,
      "expires": null
    }
  }
};
}
