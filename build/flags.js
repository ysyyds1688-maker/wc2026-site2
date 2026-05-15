// 50 國國旗 SVG（簡化色塊版）
// 用於每隊頁面 hero 圖，給 Google 抓取且不依賴 emoji
// 設計：800x500，左 1/3 國旗 / 右 2/3 隊名 + 副標
const FLAG_CONFIG = {
  argentina: ['#74acdf','#fff','#74acdf'],
  spain: ['#aa151b','#f1bf00','#aa151b'],
  france: ['#0055a4','#fff','#ef4135'],
  england: ['#fff','#ce1124','#fff'],
  brazil: ['#009c3b','#ffdf00','#009c3b'],
  germany: ['#000','#dd0000','#ffce00'],
  portugal: ['#006600','#ff0000','#ff0000'],
  netherlands: ['#ae1c28','#fff','#21468b'],
  belgium: ['#000','#fae042','#ed2939'],
  italy: ['#008c45','#fff','#cd212a'],
  croatia: ['#ff0000','#fff','#171796'],
  uruguay: ['#0038a8','#fff','#0038a8'],
  japan: ['#fff','#bc002d','#fff'],
  mexico: ['#006847','#fff','#ce1126'],
  usa: ['#bf0a30','#fff','#002868'],
  canada: ['#ff0000','#fff','#ff0000'],
  morocco: ['#c1272d','#c1272d','#006233'],
  senegal: ['#00853f','#fdef42','#e31b23'],
  korea: ['#fff','#cd2e3a','#0047a0'],
  switzerland: ['#d52b1e','#fff','#d52b1e'],
  denmark: ['#c8102e','#fff','#c8102e'],
  poland: ['#fff','#dc143c','#dc143c'],
  austria: ['#ed2939','#fff','#ed2939'],
  scotland: ['#0065bd','#fff','#0065bd'],
  czech: ['#fff','#d7141a','#11457e'],
  serbia: ['#c6363c','#0c4076','#fff'],
  turkey: ['#e30a17','#fff','#e30a17'],
  ukraine: ['#0057b7','#0057b7','#ffd700'],
  hungary: ['#cd2a3e','#fff','#436f4d'],
  sweden: ['#006aa7','#fecc00','#006aa7'],
  norway: ['#ba0c2f','#fff','#00205b'],
  ecuador: ['#ffdd00','#0033a0','#ce1126'],
  paraguay: ['#d52b1e','#fff','#0038a8'],
  colombia: ['#fcd116','#003893','#ce1126'],
  venezuela: ['#fcd116','#00247d','#cf142b'],
  iran: ['#239f40','#fff','#da0000'],
  saudi: ['#006c35','#006c35','#006c35'],
  australia: ['#012169','#012169','#e4002b'],
  qatar: ['#fff','#8a1538','#8a1538'],
  uzbekistan: ['#0099b5','#fff','#1eb53a'],
  jordan: ['#000','#fff','#007a3d'],
  iraq: ['#ce1126','#fff','#007a3d'],
  'ivory-coast': ['#f77f00','#fff','#009e60'],
  ghana: ['#ce1126','#fcd116','#006b3f'],
  egypt: ['#ce1126','#fff','#000'],
  tunisia: ['#e70013','#fff','#e70013'],
  'south-africa': ['#007a4d','#fcb514','#001489'],
  'cape-verde': ['#003893','#fff','#cf2027'],
  curacao: ['#002b7f','#f9e814','#fff'],
  haiti: ['#00209f','#00209f','#d21034'],
  panama: ['#fff','#d21034','#005293'],
  'new-zealand': ['#012169','#fff','#cc142b'],
  bosnia: ['#002395','#ffd700','#002395'],
  congo: ['#009543','#fbde4a','#dc241f'],
  algeria: ['#006233','#fff','#d21034']
};

// 產生橫向 3 段條紋國旗 SVG（簡化版，僅用於視覺辨識）
function flagSvg(slug, w=400, h=260) {
  const c = FLAG_CONFIG[slug] || ['#666','#999','#ccc'];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="${w}" height="${h}" preserveAspectRatio="none" role="img" aria-label="${slug} 國旗">
<rect x="0" y="0" width="1" height="2" fill="${c[0]}"/>
<rect x="1" y="0" width="1" height="2" fill="${c[1]}"/>
<rect x="2" y="0" width="1" height="2" fill="${c[2]}"/>
</svg>`;
}

// 國家隊 hero banner（1200x500）
function teamHeroSvg(slug, zhName, enName, group, rank) {
  const c = FLAG_CONFIG[slug] || ['#666','#999','#ccc'];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${zhName} 國家足球隊 2026 世界盃">
<rect width="1200" height="500" fill="#fafaf7"/>
<g>
<rect x="0" y="0" width="133" height="500" fill="${c[0]}"/>
<rect x="133" y="0" width="134" height="500" fill="${c[1]}"/>
<rect x="267" y="0" width="133" height="500" fill="${c[2]}"/>
</g>
<rect x="400" y="0" width="800" height="500" fill="#fafaf7"/>
<line x1="400" y1="0" x2="400" y2="500" stroke="#1a1a1a" stroke-width="3"/>
<text x="440" y="100" font-family="Georgia,serif" font-size="22" font-weight="900" fill="#666" letter-spacing="6">2026 FIFA WORLD CUP</text>
<text x="440" y="220" font-family="Georgia,serif" font-size="92" font-weight="900" fill="#1a1a1a">${zhName}</text>
<text x="440" y="280" font-family="Georgia,serif" font-size="42" font-weight="700" fill="#b91c1c">${enName}</text>
<line x1="440" y1="320" x2="1140" y2="320" stroke="#1a1a1a" stroke-width="2"/>
<text x="440" y="380" font-family="-apple-system,sans-serif" font-size="26" fill="#333">FIFA 排名 第 ${rank} 名 ・ ${group==='—'?'本屆未晉級':`${group} 組`}</text>
<text x="440" y="430" font-family="Georgia,serif" font-size="22" font-style="italic" fill="#666">完整陣容、賠率、歷屆紀錄一站看完</text>
</svg>`;
}

// 部落格 hero banner（1200x400，用文章標題與 kicker）
function blogHeroSvg(title, kicker) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${title}">
<rect width="1200" height="400" fill="#1a1a1a"/>
<rect x="0" y="0" width="1200" height="6" fill="#b91c1c"/>
<text x="60" y="80" font-family="Georgia,serif" font-size="18" font-weight="900" fill="#b91c1c" letter-spacing="6">${kicker.toUpperCase()}</text>
<foreignObject x="60" y="110" width="1080" height="200">
<div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Georgia,serif;font-size:54px;font-weight:900;color:#fff;line-height:1.15">${title}</div>
</foreignObject>
<line x1="60" y1="340" x2="1140" y2="340" stroke="#666" stroke-width="1"/>
<text x="60" y="375" font-family="-apple-system,sans-serif" font-size="20" fill="#999">2026 FIFA 世界盃 ・ ys89.biz</text>
</svg>`;
}

// 分組頁 hero
function groupHeroSvg(name, teams, note) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet" role="img" aria-label="2026 世界盃 ${name} 組">
<rect width="1200" height="400" fill="#fafaf7"/>
<rect x="0" y="0" width="1200" height="8" fill="#1a1a1a"/>
<text x="60" y="100" font-family="Georgia,serif" font-size="22" font-weight="900" fill="#b91c1c" letter-spacing="6">GROUP ${name}</text>
<text x="60" y="200" font-family="Georgia,serif" font-size="88" font-weight="900" fill="#1a1a1a">${name} 組</text>
<text x="60" y="260" font-family="Georgia,serif" font-size="32" font-weight="700" fill="#333">${teams}</text>
<line x1="60" y1="290" x2="1140" y2="290" stroke="#1a1a1a" stroke-width="2"/>
<text x="60" y="340" font-family="Georgia,serif" font-size="22" font-style="italic" fill="#666">${note}</text>
</svg>`;
}

module.exports = { FLAG_CONFIG, flagSvg, teamHeroSvg, blogHeroSvg, groupHeroSvg };
