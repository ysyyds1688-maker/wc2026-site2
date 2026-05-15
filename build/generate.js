// 主生成器：雜誌風 + SEO 全面強化版
const fs = require('fs');
const path = require('path');
const { SITE, TEAMS, GROUPS, BLOGS, EXTRAS } = require('./data');
const { HISTORY, TEAM_STORY } = require('./history');
const { BLOG_BODY } = require('./blog-content');
const { AUTHORS, ARTICLE_AUTHOR } = require('./authors');
const { VENUES } = require('./venues');
const { teamHeroSvg, blogHeroSvg, groupHeroSvg } = require('./flags');
const { htmlHead, masthead, breadcrumb, breadcrumbLD, tldr, disclaimer, ctaBanner, ctaInline, footer, faqLD, faqSection, heroImg, authorByline, personLD, canonicalPath, SHARED_CSS } = require('./template');

const OUT = path.resolve(__dirname, '..');

function write(name, content) {
  fs.writeFileSync(path.join(OUT, name), content, 'utf8');
  console.log('✓', name);
}

// =========================================================
// 寫外部 CSS 檔
// =========================================================
function buildCSS() {
  write('style.css', SHARED_CSS);
}

// =========================================================
// 首頁
// =========================================================
function buildIndex() {
  const faqs = [
    ['2026 世足賽什麼時候開始？','2026 年世足賽 6 月 11 日在墨西哥城阿茲特克體育場開幕，7 月 19 日在美國紐約 MetLife Stadium 決賽，全期共 39 天、104 場比賽。'],
    ['2026 世界盃在哪裡舉辦？','由美國、加拿大、墨西哥三國首次聯合主辦：美國 11 城市、加拿大 2 城市、墨西哥 3 城市，共 16 座場館。'],
    ['2026 世足賽台灣時間幾點開踢？','多數場次落在台灣時間凌晨 2:00 – 上午 11:00。美東場次約凌晨 2-4 點，美西場次約清晨 5-8 點，決賽對應台灣時間 7/20 上午 6:00。'],
    ['誰最有機會奪冠？','西班牙以 4.5–5 倍賠率為最熱門，法國 5 倍緊追，英格蘭 6–7 倍、阿根廷 7–9 倍、巴西 8–10 倍。德國 12–14 倍可作為長賠搏彩。'],
    ['2026 世界盃有幾隊幾場？','史上最大規模：48 隊、12 組、104 場比賽。小組賽 72 場，淘汰賽 32 場。'],
    ['台灣可以在哪裡看 2026 世足賽直播？','愛爾達體育為官方轉播商，公視、華視轉播部分重要場次，網路 OTT 可訂閱愛爾達 App 或 Hami Video。']
  ];

  const jsonld = {'@context':'https://schema.org','@graph':[
    {'@type':'WebSite','@id':`${SITE.url}/#site`,'name':SITE.name,'url':SITE.url,'description':'2026 FIFA 世足賽台灣最完整資訊站','inLanguage':'zh-TW','publisher':{'@id':`${SITE.url}/#org`},
     'potentialAction':{'@type':'SearchAction','target':{'@type':'EntryPoint','urlTemplate':`${SITE.url}/?q={search_term_string}`},'query-input':'required name=search_term_string'}},
    {'@type':'Organization','@id':`${SITE.url}/#org`,'name':SITE.name,'url':SITE.url,'logo':{'@type':'ImageObject','url':`${SITE.url}/logo.svg`,'width':240,'height':60},'sameAs':[SITE.motherSite]},
    {'@type':'SportsEvent','name':'2026 FIFA 世界盃足球賽','alternateName':['2026 FIFA World Cup','2026世足賽','2026世界盃'],'startDate':'2026-06-11','endDate':'2026-07-19','eventStatus':'https://schema.org/EventScheduled','location':{'@type':'Place','name':'美國・加拿大・墨西哥'},'organizer':{'@type':'Organization','name':'FIFA','url':'https://www.fifa.com'},'image':`${SITE.url}/banner.jpg`},
    faqLD(faqs)
  ]};

  const html = htmlHead({title:'2026 世足賽完整指南｜賽程、分組、賠率、冠軍預測',desc:'2026 FIFA 世足賽台灣最完整資訊：48 隊 104 場賽程、12 組分組分析、冠軍賠率比較、各隊深度評析、台灣時間對照與直播管道。',slug:'index',jsonld})
+ masthead() + `<main>

${tldr('2026 世足賽 6/11 開幕、7/19 決賽，由美國、加拿大、墨西哥聯辦，48 隊 104 場。西班牙 4.5 倍奪冠最熱門，法國、英格蘭緊追。')}

<section class="lede">
<div class="lede-main">
<h1>2026 世足賽<em>完整指南</em>：賽程、分組、賠率、冠軍預測</h1>
<p class="deck">史上首次 48 隊、104 場、三國聯辦——西班牙領銜冠軍熱門，法國緊追、英格蘭搶救 60 年圓夢，梅西最後一舞與姆巴佩世代之爭，從卡達遺憾走向北美復仇之年。</p>
<p class="byline">✍️ <a href="/about">${SITE.name} 編輯部</a> ・ 📅 2026-05-14 ・ 2026 美加墨世界盃</p>
<div class="lead-body">
<p>2026 年 FIFA 世界盃由美國、加拿大、墨西哥三國首次聯合主辦，是史上首次擴大為 48 支球隊參賽、共 12 個小組、104 場比賽。開幕戰於 2026 年 6 月 11 日在墨西哥城阿茲特克體育場舉行，決賽則於 7 月 19 日（台灣時間 7 月 20 日清晨）在美國紐約 MetLife Stadium 上演。</p>
<p>本站整理台灣球迷最關心的<strong>完整賽程、12 組分組、冠軍賠率、各隊深度評析、台灣時間對照與直播管道</strong>，一站搞定。</p>
${ctaInline('▶ 查看即時賠率')}
</div>
</div>
<aside class="lede-side" aria-label="頭條導覽">
<h2>距離開幕</h2>
<div class="countdown" id="cd" role="timer" aria-live="polite">
<div><b id="cd-d">--</b><span>天</span></div>
<div><b id="cd-h">--</b><span>時</span></div>
<div><b id="cd-m">--</b><span>分</span></div>
<div><b id="cd-s">--</b><span>秒</span></div>
</div>
<h3>頭條導覽</h3>
<ul>
<li><span class="num">01</span><a href="#intro">2026 世界盃是什麼？</a></li>
<li><span class="num">02</span><a href="#schedule">完整賽程表</a></li>
<li><span class="num">03</span><a href="#groups">12 組分組</a></li>
<li><span class="num">04</span><a href="#odds">冠軍賠率</a></li>
<li><span class="num">05</span><a href="#prediction">冠軍預測</a></li>
<li><span class="num">06</span><a href="#blog">深度文章</a></li>
</ul>
</aside>
</section>

${disclaimer()}

<section id="intro">
<h2><span class="section-kicker">Section 01</span>2026 世界盃 ・ 大事件總覽</h2>
<p>2026 年 FIFA 世界盃（世足賽，FIFA World Cup 2026）是第 <strong>23 屆</strong>FIFA 世界盃足球賽，由美國、加拿大、墨西哥三國首次聯合主辦。FIFA 於 2017 年通過擴軍方案，將參賽隊伍從 32 隊增至 48 隊，使本屆成為史上最大規模的世界盃。墨西哥城阿茲特克體育場將成為<strong>足球史上唯一一座舉辦 3 屆世界盃比賽的場館</strong>（1970、1986、2026）。</p>
<table>
<caption>2026 世足賽 關鍵資訊一覽</caption>
<tbody>
<tr><th style="width:30%">主辦國</th><td>🇺🇸 美國 ・ 🇨🇦 加拿大 ・ 🇲🇽 墨西哥</td></tr>
<tr><th>賽期</th><td>2026 年 6 月 11 日 – 7 月 19 日，共 39 天</td></tr>
<tr><th>規模</th><td>48 支球隊、12 組、104 場比賽（史上最大）</td></tr>
<tr><th>主辦城市</th><td>美國 11 座、加拿大 2 座、墨西哥 3 座，共 <a href="/venues">16 城</a></td></tr>
<tr><th>台灣時間</th><td>多數場次凌晨 2:00 – 上午 11:00，詳見 <a href="/blog-taiwan-time">台灣時間指南</a></td></tr>
<tr><th>決賽場館</th><td>美國紐澤西 MetLife Stadium（容量 82,500 人）</td></tr>
<tr><th>衛冕冠軍</th><td>🇦🇷 <a href="/argentina">阿根廷</a>（2022 卡達世界盃冠軍）</td></tr>
</tbody>
</table>
</section>

<section id="schedule">
<h2><span class="section-kicker">Section 02</span>完整賽程 ・ 從 6/11 到 7/19</h2>
<p>2026 世界盃採用 48 隊新賽制，小組賽從 6/11 一路打到 6/27，淘汰賽從 6/28 起到 7/19 結束，共 39 天。冠軍球隊需贏 <strong>8 場</strong>（過去 32 隊賽制為 7 場），多一場意味著傷兵、體能、紅黃牌風險上升，陣容深度的價值大幅提高。詳見 <a href="/blog-48-teams-format">48 隊新賽制完整解析</a>。</p>
<table>
<caption>賽事階段時程</caption>
<thead><tr><th>賽事階段</th><th>美國日期</th><th>台灣時間</th><th>場數</th></tr></thead>
<tbody>
<tr><td>小組賽</td><td>6/11 – 6/27</td><td>凌晨 2:00 – 上午 11:00</td><td>72 場</td></tr>
<tr><td>32 強淘汰賽</td><td>6/28 – 7/3</td><td>凌晨 3:00 – 上午 9:00</td><td>16 場</td></tr>
<tr><td>16 強</td><td>7/4 – 7/7</td><td>凌晨 2:00 – 上午 8:00</td><td>8 場</td></tr>
<tr><td>8 強</td><td>7/9 – 7/11</td><td>上午 5:00 – 上午 9:00</td><td>4 場</td></tr>
<tr><td>4 強</td><td>7/14 – 7/15</td><td>上午 5:00 – 上午 9:00</td><td>2 場</td></tr>
<tr><td>季軍戰</td><td>7/18</td><td>上午 5:00</td><td>1 場</td></tr>
<tr><td><strong>決賽</strong></td><td><strong>7/19</strong></td><td><strong>台灣 7/20 上午 6:00</strong></td><td>1 場</td></tr>
</tbody>
</table>
<p>📋 <a href="/schedule"><strong>查看 2026 世足賽完整 104 場賽程表 →</strong></a></p>
</section>

<section id="groups">
<h2><span class="section-kicker">Section 03</span>12 組分組 ・ 死亡之組與爆冷組合</h2>
<p>48 隊分為 A–L 共 12 個小組，每組 4 隊。各組前兩名與成績最佳的 8 個第三名共 32 隊晉級淘汰賽。本屆公認死亡之組為 <a href="/group-c">C 組（巴西、摩洛哥、蘇格蘭）</a>，詳見 <a href="/blog-group-of-death">死亡之組完整分析</a>。</p>
<table>
<thead><tr><th>組別</th><th>主要球隊</th><th>看點</th></tr></thead>
<tbody>
${GROUPS.map(([s,n,t,_,note])=>`<tr><td><a href="/group-${s}"><strong>${n} 組</strong></a></td><td>${t}</td><td>${note}</td></tr>`).join('\n')}
</tbody>
</table>
</section>

<section id="odds">
<h2><span class="section-kicker">Section 04</span>冠軍賠率 ・ 西班牙領銜熱門</h2>
<p>根據國際博彩公司開盤，<strong>西班牙以 4.5–5 倍賠率為最熱門奪冠候選</strong>，法國緊追在後，英格蘭、阿根廷、巴西為第二梯隊。本屆冠軍盤口分散度高，沒有壓倒性熱門，反映新賽制下「冠軍變數大」的市場共識。詳見 <a href="/odds">完整賠率比較</a>。</p>
<table>
<caption>冠軍熱門 Top 8</caption>
<thead><tr><th>球隊</th><th>賠率</th><th>分組</th><th>投注角度</th></tr></thead>
<tbody>
<tr><td>🇪🇸 <a href="/spain">西班牙陣容分析</a></td><td><strong>4.5–5</strong></td><td>H 組</td><td>世界第一，安全首選</td></tr>
<tr><td>🇫🇷 <a href="/france">法國陣容分析</a></td><td>5</td><td>I 組</td><td>陣容深度最強</td></tr>
<tr><td>🏴󠁧󠁢󠁥󠁮󠁧󠁿 <a href="/england">英格蘭陣容分析</a></td><td>6–7</td><td>L 組</td><td>60 年圓夢時機</td></tr>
<tr><td>🇦🇷 <a href="/argentina">阿根廷陣容分析</a></td><td>7–9</td><td>J 組</td><td>衛冕冠軍 + 梅西</td></tr>
<tr><td>🇧🇷 <a href="/brazil">巴西陣容分析</a></td><td>8–10</td><td>C 組</td><td>技術最強黑馬搏彩</td></tr>
<tr><td>🇩🇪 <a href="/germany">德國陣容分析</a></td><td>12–14</td><td>E 組</td><td>重建完成長賠</td></tr>
<tr><td>🇯🇵 <a href="/japan">日本陣容分析</a></td><td>50–80</td><td>F 組</td><td>亞洲最強小注</td></tr>
<tr><td>🇰🇷 <a href="/korea">韓國陣容分析</a></td><td>60–100</td><td>A 組</td><td>孫興慜告別戰</td></tr>
</tbody>
</table>
<p>💰 <a href="/odds"><strong>查看 2026 世界盃完整賠率與投注角度 →</strong></a></p>
</section>

${ctaBanner('🎯 立即前往合作平台','查看即時賠率、世足賽滾球盤口、投注全攻略')}

<section id="prediction">
<h2><span class="section-kicker">Section 05</span>冠軍預測 ・ 西班牙最有機會？</h2>
<p><strong>本站預測：西班牙最可能奪冠</strong>。理由是西班牙近年延續 Tiki-Taka 進化版的高位逼搶，加上拉米內·亞馬爾、佩德里、加維等新生代崛起，技術與體能兼備，且歐洲球隊近三屆世界盃 2 勝 1 負（2014 德國、2018 法國、2022 阿根廷打破歐洲三連霸），歐洲體系仍佔上風。</p>
<p>第二集團包括<a href="/france">法國（陣容最深）</a>、<a href="/england">英格蘭（陣容平均）</a>、<a href="/argentina">阿根廷（梅西最後一屆士氣高昂）</a>，三隊都具備捧盃實力。<a href="/brazil">巴西</a>若 Vinicius Jr.、Rodrygo 能保持狀態仍是奪冠熱門。</p>
<p>🏆 <a href="/prediction"><strong>查看 2026 世界盃冠軍完整深度預測 →</strong></a></p>
</section>

<section id="blog">
<h2><span class="section-kicker">Section 06</span>深度長文 ・ 編輯精選</h2>
<div class="grid-2">
<a href="/blog-champion-prediction"><div class="meta">冠軍預測</div><h3>2026 冠軍預測：最全面分析</h3><p>綜合賠率、戰術、陣容、賽程籤運四大面向，預測本屆冠軍最可能花落誰家</p></a>
<a href="/blog-taiwan-time"><div class="meta">台灣時間</div><h3>2026 世足賽台灣時間完整指南</h3><p>把美、加、墨三地的 104 場賽程全部換算成台灣時間，含熬夜難度建議</p></a>
<a href="/blog-48-teams-format"><div class="meta">賽制解析</div><h3>48 隊新賽制對押注的影響</h3><p>從 12 組 16 進 32 的新賽制解讀，討論小組賽爆冷率與投注策略</p></a>
<a href="/blog-betting-guide"><div class="meta">投注攻略</div><h3>世足賽台灣投注完整攻略</h3><p>讓球盤、大小球、滾球、晉級盤、冠軍盤一次講透，新手到進階</p></a>
<a href="/blog-messi-vs-mbappe"><div class="meta">巨星對決</div><h3>梅西 vs 姆巴佩 ・ 最後對決</h3><p>梅西的最後一屆對上姆巴佩的當打之年，兩人的數據、風格與冠軍機率</p></a>
<a href="/blog-group-of-death"><div class="meta">死亡之組</div><h3>2026 死亡之組完整分析</h3><p>C 組巴西、摩洛哥、蘇格蘭，3 強爭 2 名額的關鍵戰役解析</p></a>
</div>
<p style="text-align:center;margin-top:16px"><a href="/blog"><strong>📰 查看全部 15 篇文章 →</strong></a></p>
</section>

${faqSection(faqs)}

${ctaBanner('🏆 立即前往合作平台 ・ 搶先卡位','查看即時賠率、滾球盤口、世足賽投注全攻略')}

</main>

<script>
(function(){
  var target = new Date('2026-06-11T18:00:00Z').getTime();
  var el = {d:document.getElementById('cd-d'),h:document.getElementById('cd-h'),m:document.getElementById('cd-m'),s:document.getElementById('cd-s')};
  function tick(){
    var diff = target - Date.now();
    if(diff <= 0){el.d.textContent='開賽中';el.h.textContent=el.m.textContent=el.s.textContent='--';return;}
    var d=Math.floor(diff/86400000), h=Math.floor(diff/3600000)%24, m=Math.floor(diff/60000)%60, s=Math.floor(diff/1000)%60;
    el.d.textContent=d; el.h.textContent=h; el.m.textContent=m; el.s.textContent=s;
  }
  tick(); setInterval(tick,1000);
})();
</script>

${footer()}`;
  write('index.html', html);
}

// =========================================================
// 通用 simple page
// =========================================================
function simplePage({slug, title, desc, deck, tldrText, crumbs, jsonldExtras, contentHTML, faqs, heroSvg, heroAlt}) {
  const jsonld = {'@context':'https://schema.org','@graph':[
    breadcrumbLD(crumbs),
    ...(jsonldExtras||[]),
    faqLD(faqs)
  ]};
  const html = htmlHead({title,desc,slug,jsonld})
+ masthead() + `<main>
${breadcrumb(crumbs)}
${tldrText ? tldr(tldrText) : ''}
${heroSvg ? heroImg(heroSvg, heroAlt||title) : ''}
<section class="lede">
<div class="lede-main">
<h1>${title}</h1>
${deck ? `<p class="deck">${deck}</p>` : ''}
<p class="byline">✍️ <a href="/about">${SITE.name} 編輯部</a> ・ 📅 2026-05-14 ・ 2026 美加墨世界盃</p>
</div>
</section>
${disclaimer()}
<article>
${contentHTML}
</article>
${faqSection(faqs)}
${ctaBanner()}
</main>${footer()}`;
  write(`${slug}.html`, html);
}

// =========================================================
// P0 核心頁
// =========================================================
function buildSchedule() {
  const faqs = [
    ['2026 世足賽完整賽程從什麼時候到什麼時候？','從 2026 年 6 月 11 日（墨西哥城開幕戰）到 7 月 19 日（紐約 MetLife 決賽），共 39 天 104 場比賽。'],
    ['台灣時間最佳收看時段是？','美中、美西場次（清晨 5-8 點台灣時間）較容易早起觀賞，美東場次需熬夜至凌晨 2-4 點。'],
    ['決賽什麼時候打？','美國時間 2026 年 7 月 19 日下午，對應台灣時間 7 月 20 日上午 6:00。'],
    ['哪些場次最值得熬夜看？','小組賽強強對決、淘汰賽全部場次、四強起所有比賽都是必看。']
  ];
  const content = `
<h2>賽事階段時程概覽</h2>
<table>
<caption>2026 世足賽 階段時間表</caption>
<thead><tr><th>階段</th><th>美國日期</th><th>台灣時間</th><th>場數</th><th>說明</th></tr></thead><tbody>
<tr><td>小組賽</td><td>6/11 – 6/27</td><td>凌晨 2:00 – 上午 11:00</td><td>72 場</td><td>12 組各打 3 場</td></tr>
<tr><td>32 強淘汰賽</td><td>6/28 – 7/3</td><td>凌晨 3:00 – 上午 9:00</td><td>16 場</td><td>新賽制新增輪次</td></tr>
<tr><td>16 強</td><td>7/4 – 7/7</td><td>凌晨 2:00 – 上午 8:00</td><td>8 場</td><td>單敗淘汰</td></tr>
<tr><td>8 強</td><td>7/9 – 7/11</td><td>上午 5:00 – 上午 9:00</td><td>4 場</td><td>準決賽門票爭奪</td></tr>
<tr><td>4 強</td><td>7/14 – 7/15</td><td>上午 5:00 – 上午 9:00</td><td>2 場</td><td>決賽前哨</td></tr>
<tr><td>季軍戰</td><td>7/18</td><td>上午 5:00</td><td>1 場</td><td>4 強敗者爭銅</td></tr>
<tr><td><strong>決賽</strong></td><td><strong>7/19</strong></td><td><strong>台灣 7/20 上午 6:00</strong></td><td>1 場</td><td>紐約 MetLife</td></tr>
</tbody></table>

<h2>小組賽分組對戰（依組別）</h2>
<p>各組進行 3 場循環賽，前 2 名直接晉級，加上 8 個成績最佳第 3 名共 32 隊進入淘汰賽。</p>
<div class="grid-3">
${GROUPS.map(([s,n,t])=>`<a href="/group-${s}"><h3>${n} 組分組分析</h3><div class="meta">${t}</div></a>`).join('\n')}
</div>

<h2>關鍵場次預告</h2>
<table>
<thead><tr><th>場次</th><th>對戰</th><th>台灣時間</th></tr></thead><tbody>
<tr><td>開幕戰</td><td>墨西哥 vs 待定</td><td>6/12 上午 7:00</td></tr>
<tr><td>強強對決</td><td>西班牙 vs 強隊</td><td>小組賽第二輪</td></tr>
<tr><td>季軍戰</td><td>四強敗者爭銅</td><td>7/19 上午 5:00</td></tr>
<tr><td>決賽</td><td>兩強爭冠</td><td>7/20 上午 6:00</td></tr>
</tbody></table>

<div class="box-gold">💡 <strong>收看建議</strong>：建議使用 Google Calendar 訂閱賽程，或設定每場比賽前 30 分鐘提醒。詳見 <a href="/blog-broadcast-schedule">轉播時間表完整版</a>。</div>

<aside class="aside">
<div><h4>🔗 相關頁面</h4>
<a href="/odds">2026 世界盃冠軍賠率比較</a>
<a href="/prediction">2026 冠軍預測深度分析</a>
<a href="/live">即時比分</a>
<a href="/live-schedule">台灣直播大廳</a>
<a href="/taiwan-time">台灣時間指南</a>
<a href="/format">48 隊賽制說明</a>
</div>
<div><h4>📊 熱門球隊深度</h4>
<a href="/spain">🇪🇸 西班牙陣容分析</a>
<a href="/france">🇫🇷 法國陣容分析</a>
<a href="/england">🏴󠁧󠁢󠁥󠁮󠁧󠁿 英格蘭陣容分析</a>
<a href="/argentina">🇦🇷 阿根廷陣容分析</a>
<a href="/brazil">🇧🇷 巴西陣容分析</a>
<a href="/japan">🇯🇵 日本陣容分析</a>
</div>
</aside>`;
  simplePage({
    slug:'schedule',
    title:'2026 世足賽完整賽程表（台灣時間）',
    desc:'2026 FIFA 世界盃 104 場完整賽程表，含台灣時間對照、各組小組賽、淘汰賽日期。6 月 11 日開幕到 7 月 19 日決賽全收錄。',
    deck:'104 場比賽、39 天、三國 16 城——從開幕到決賽的完整觀賽地圖',
    tldrText:'2026 世足賽 6/11 開幕、7/19 決賽。小組賽 72 場（6/11–6/27），淘汰賽 32 場（6/28–7/19）。決賽台灣時間 7/20 上午 6:00。',
    crumbs:[['首頁','/'],['完整賽程',null]],
    jsonldExtras:[{'@type':'SportsEvent','name':'2026 FIFA World Cup','startDate':'2026-06-11','endDate':'2026-07-19','location':{'@type':'Place','name':'美國・加拿大・墨西哥'}}],
    contentHTML:content, faqs
  });
}

function buildOdds() {
  const faqs = [
    ['誰是 2026 世界盃冠軍熱門？','西班牙以 4.5-5 倍賠率為最熱門，法國 5 倍緊追，英格蘭 6-7 倍、阿根廷 7-9 倍、巴西 8-10 倍。'],
    ['世界盃賠率怎麼看？','歐式賠率代表回本倍數（含本金）。例如 4 倍代表押 100 元贏可拿 400 元（淨賺 300）。賠率越低代表越被看好。'],
    ['冠軍盤什麼時候開盤？','資格賽結束後（2026 年 3 月底）即開盤，賠率隨抽籤、傷兵、熱身賽表現持續調整。'],
    ['亞洲球隊賠率最高的是誰？','日本以 50-80 倍為亞洲最低（最看好），韓國 60-100 倍緊追。沙烏地、伊朗則在 150 倍以上。']
  ];
  const rows = TEAMS.filter(t=>t[8] && t[8]!=='—').slice(0,20)
    .map(t=>`<tr><td>${t[3]} <a href="/${t[0]}">${t[1]} 陣容分析</a></td><td><strong>${t[8]}</strong></td><td>${t[4]==='—'?'未晉級':t[4]+' 組'}</td><td>${(t[9]||'').slice(0,30)}…</td></tr>`).join('\n');
  const content = `
<h2>誰最有機會奪冠？</h2>
<p>從國際博彩公司開盤來看，<strong>西班牙是本屆最熱門奪冠候選</strong>，賠率僅約 4.5-5 倍。法國以陣容深度居次，英格蘭三獅軍團追求 60 年圓夢，阿根廷則是衛冕冠軍由梅西領軍。巴西雖技術強但近兩屆淘汰賽不穩，賠率拉至 8-10 倍。</p>

<h2>完整冠軍賠率表</h2>
<table>
<caption>20 強冠軍盤口</caption>
<thead><tr><th>球隊</th><th>賠率</th><th>分組</th><th>投注角度</th></tr></thead><tbody>${rows}</tbody></table>

<h2>賠率怎麼看？</h2>
<p>歐式賠率 = 回本倍數（含本金）。例如：</p>
<ul>
<li><strong>西班牙 5 倍</strong>：押 100 元，奪冠可拿 500 元（淨賺 400）</li>
<li><strong>日本 80 倍</strong>：押 100 元，奪冠可拿 8000 元（淨賺 7900，但機率低）</li>
<li>新手建議避免賠率超過 100 倍的「樂透型」投注，詳見 <a href="/blog-betting-guide">投注完整攻略</a></li>
</ul>

<h2>投注建議</h2>
<table>
<thead><tr><th>類型</th><th>推薦球隊</th><th>原因</th></tr></thead><tbody>
<tr><td>安全首選</td><td><a href="/spain">西班牙</a> / <a href="/france">法國</a></td><td>賠率合理，奪冠機率最高</td></tr>
<tr><td>長賠搏彩</td><td><a href="/brazil">巴西</a> / <a href="/germany">德國</a> / <a href="/portugal">葡萄牙</a></td><td>實力強但波動大，賠率高回報</td></tr>
<tr><td>黑馬選擇</td><td><a href="/japan">日本</a> / <a href="/morocco">摩洛哥</a></td><td>有爆冷紀錄，小注搏大</td></tr>
<tr><td>避開</td><td>賠率 > 200 倍球隊</td><td>機率極低，純樂透</td></tr>
</tbody></table>

<aside class="aside">
<div><h4>🔗 相關頁面</h4>
<a href="/prediction">2026 冠軍預測深度分析</a>
<a href="/schedule">完整賽程</a>
<a href="/blog-betting-guide">投注完整攻略</a>
<a href="/blog-champion-prediction">冠軍深度預測長文</a>
</div>
<div><h4>📊 熱門球隊</h4>
<a href="/spain">🇪🇸 西班牙陣容分析</a>
<a href="/france">🇫🇷 法國陣容分析</a>
<a href="/argentina">🇦🇷 阿根廷陣容分析</a>
<a href="/brazil">🇧🇷 巴西陣容分析</a>
</div>
</aside>`;
  simplePage({
    slug:'odds',
    title:'2026 世界盃冠軍賠率比較 ・ 完整賠率表',
    desc:'2026 FIFA 世界盃 48 隊冠軍賠率完整比較表：西班牙、法國、英格蘭、阿根廷、巴西冠軍熱門排序，含投注角度建議。',
    deck:'西班牙領銜熱門、法國緊追、英格蘭搶救——48 隊冠軍盤口完整解讀',
    tldrText:'西班牙 4.5-5 倍最熱門，法國 5 倍緊追，英格蘭 6-7 倍、阿根廷 7-9 倍、巴西 8-10 倍。日本 50-80 倍為亞洲最低。',
    crumbs:[['首頁','/'],['冠軍賠率',null]],
    contentHTML:content, faqs
  });
}

function buildPrediction() {
  const faqs = [
    ['誰最有機會奪冠？','本站綜合分析後預測西班牙最可能奪冠，理由是 Tiki-Taka 進化版 + 新生代崛起（亞馬爾、佩德里）。'],
    ['歐洲還是南美隊伍佔優勢？','歐洲近 3 屆世界盃 2 勝 1 敗，但 2022 阿根廷打破歐洲三連霸。本屆歐洲集中度仍佔優。'],
    ['本屆黑馬會是誰？','摩洛哥（2022 四強）、日本（曾擊敗德國西班牙）、葡萄牙（C 羅最後一屆）都是黑馬候選。'],
    ['冠軍預測準確率多高？','賠率前 3 名歷史奪冠率約 60-70%。最熱門奪冠率約 30%，極大冷門（賠率>50 倍）奪冠紀錄罕見。']
  ];
  const content = `
<h2>本站核心預測 ・ 西班牙奪冠</h2>
<p>綜合以下 4 大因素，<strong>西班牙是 2026 世界盃最可能奪冠的球隊</strong>：</p>
<ol>
<li><strong>賠率最低</strong>（4.5-5 倍）：博彩公司資金流向最看好</li>
<li><strong>戰術成熟</strong>：Tiki-Taka 進化版搭配高位逼搶，攻守平衡</li>
<li><strong>新生代爆發</strong>：拉米內·亞馬爾、佩德里、加維帶來活力</li>
<li><strong>歐洲體系優勢</strong>：歐洲近 4 屆世界盃 3 勝 1 負</li>
</ol>

<h2>第二集團 ・ 法國、英格蘭、阿根廷</h2>
<p><strong>🇫🇷 <a href="/france">法國</a>（5 倍）</strong>：陣容深度最強，姆巴佩當打之年，中場卡馬文加、楚阿梅尼提供平台。Deschamps 老成穩重戰術。</p>
<p><strong>🏴󠁧󠁢󠁥󠁮󠁧󠁿 <a href="/england">英格蘭</a>（6-7 倍）</strong>：貝林漢狀態正盛，凱恩穩定攻門。Tuchel 上任後紀律提升，60 年圓夢時機。</p>
<p><strong>🇦🇷 <a href="/argentina">阿根廷</a>（7-9 倍）</strong>：衛冕冠軍，<a href="/blog-messi-last-world-cup">梅西最後一屆</a>士氣高昂。但中場老化（迪馬利亞退役）為隱憂。</p>

<h2>黑馬候選</h2>
<p><strong>🇧🇷 <a href="/brazil">巴西</a>（8-10 倍）</strong>：Ancelotti 強化防守紀律，維尼修斯領銜鋒線。技術最強但近兩屆 8 強止步。</p>
<p><strong>🇲🇦 <a href="/morocco">摩洛哥</a>（40-60 倍）</strong>：2022 四強奇蹟能否重現？Regragui 續任，防守紀律強。</p>
<p><strong>🇯🇵 <a href="/japan">日本</a>（50-80 倍）</strong>：曾擊敗德國、西班牙，亞洲最強。三笘薰、久保建英為核心。</p>

<h2>冠軍機率預估</h2>
<table>
<caption>本站機率 vs 市場賠率</caption>
<thead><tr><th>球隊</th><th>本站機率</th><th>市場賠率</th><th>差異</th></tr></thead><tbody>
<tr><td>西班牙</td><td>22%</td><td>4.5-5</td><td>+2% (推薦)</td></tr>
<tr><td>法國</td><td>18%</td><td>5</td><td>持平</td></tr>
<tr><td>英格蘭</td><td>15%</td><td>6-7</td><td>持平</td></tr>
<tr><td>阿根廷</td><td>13%</td><td>7-9</td><td>持平</td></tr>
<tr><td>巴西</td><td>10%</td><td>8-10</td><td>持平</td></tr>
<tr><td>德國</td><td>6%</td><td>12-14</td><td>持平</td></tr>
<tr><td>其他</td><td>16%</td><td>—</td><td>—</td></tr>
</tbody></table>

<h2>關鍵變數</h2>
<ul>
<li><strong>籤運</strong>：避開 <a href="/group-c">C 組死亡之組</a>的球隊籤運佳</li>
<li><strong>傷兵</strong>：賽前 1 個月傷兵狀況決定陣容厚度</li>
<li><strong>主場優勢</strong>：美國、加拿大、墨西哥地主隊有加分</li>
<li><strong>氣候</strong>：美國夏季高溫對歐洲球隊體能挑戰大</li>
</ul>

<aside class="aside">
<div><h4>🔗 相關頁面</h4>
<a href="/odds">冠軍賠率比較</a>
<a href="/schedule">完整賽程</a>
<a href="/blog-champion-prediction">冠軍預測長文版</a>
<a href="/blog-betting-guide">投注完整攻略</a>
</div>
<div><h4>📊 熱門球隊深度</h4>
<a href="/spain">西班牙陣容分析</a>
<a href="/france">法國陣容分析</a>
<a href="/argentina">阿根廷陣容分析</a>
<a href="/brazil">巴西陣容分析</a>
</div>
</aside>`;
  simplePage({
    slug:'prediction',
    title:'2026 世界盃冠軍預測 ・ 誰會奪冠？',
    desc:'綜合賠率、戰術、陣容、賽程籤運，預測 2026 FIFA 世界盃冠軍。西班牙、法國、英格蘭、阿根廷四大熱門詳細評析。',
    deck:'從賠率、戰術、陣容深度到籤運——本站綜合分析後的奪冠機率排序',
    tldrText:'本站預測西班牙最有機會奪冠（22%）。第二集團法國（18%）、英格蘭（15%）、阿根廷（13%）、巴西（10%）。',
    crumbs:[['首頁','/'],['冠軍預測',null]],
    contentHTML:content, faqs
  });
}

function buildLive() {
  const faqs = [
    ['哪裡看世足賽即時比分？','可透過愛爾達體育、Google 搜尋「世足賽即時比分」、FIFA 官網或本站賽程頁查詢。'],
    ['即時比分有沒有延遲？','官方資料源約有 10-30 秒延遲，看直播再對照即時比分最即時。'],
    ['可以同時追蹤多場比賽嗎？','是。FIFA 官網與本站賽程頁可同時顯示當日所有進行中比賽。']
  ];
  const content = `
<h2>即時比分功能（開賽後啟動）</h2>
<div class="box-gold">📌 賽事於 2026/06/11 開幕，屆時本頁將整合 FIFA 官方資料源，顯示：
<ul>
<li>所有進行中比賽即時比分</li>
<li>進球時間、進球者、助攻</li>
<li>紅黃牌、換人、補時</li>
<li>射門、控球率、角球數統計</li>
</ul></div>

<h2>替代查詢管道（賽事期間）</h2>
<table>
<thead><tr><th>平台</th><th>說明</th><th>連結</th></tr></thead><tbody>
<tr><td>FIFA 官網</td><td>官方最權威</td><td>fifa.com/worldcup</td></tr>
<tr><td>愛爾達體育</td><td>台灣官方轉播</td><td>elta.com.tw</td></tr>
<tr><td>Google 搜尋</td><td>搜「世足賽即時比分」</td><td>google.com</td></tr>
<tr><td>本站賽程頁</td><td>含台灣時間轉換</td><td><a href="/schedule">完整賽程表</a></td></tr>
</tbody></table>

<aside class="aside">
<div><h4>🔗 相關頁面</h4>
<a href="/schedule">完整賽程</a>
<a href="/live-schedule">直播大廳</a>
<a href="/odds">冠軍賠率</a>
<a href="/blog-where-to-watch">台灣轉播管道</a>
</div>
<div><h4>📺 收看建議</h4>
<a href="/blog-broadcast-schedule">轉播時間表</a>
<a href="/blog-taiwan-time">台灣時間指南</a>
</div>
</aside>`;
  simplePage({
    slug:'live', title:'2026 世足賽即時比分 ・ LIVE',
    desc:'2026 FIFA 世界盃即時比分查詢，所有 104 場比賽即時更新比數、進球時間、紅黃牌與射門統計。',
    deck:'104 場比賽即時比分追蹤——開賽後同步顯示進球、紅黃牌、射門統計',
    tldrText:'本頁將於 2026/6/11 開賽後啟動即時比分。賽前可至 FIFA 官網、愛爾達或本站賽程頁查詢。',
    crumbs:[['首頁','/'],['即時比分',null]],
    contentHTML:content, faqs
  });
}

function buildLiveSchedule() {
  const faqs = [
    ['台灣哪裡可以看世足賽直播？','愛爾達體育為官方轉播商，公視、華視轉播重要場次，網路 OTT 可訂閱愛爾達。'],
    ['免費直播管道有哪些？','公視、華視轉播部分重要場次免費，FIFA+ App 提供精華影片免費觀看。'],
    ['直播大廳功能是什麼？','本頁整合官方影片來源、轉播時刻表、台灣時間對照與賽事關注清單。']
  ];
  const content = `
<h2>台灣轉播平台一覽</h2>
<table>
<thead><tr><th>平台</th><th>類型</th><th>說明</th><th>費用</th></tr></thead><tbody>
<tr><td>愛爾達體育</td><td>有線 + OTT</td><td>台灣官方轉播商，全 104 場</td><td>月費約 400 元</td></tr>
<tr><td>公視</td><td>無線電視</td><td>重要場次免費轉播</td><td>免費</td></tr>
<tr><td>華視</td><td>無線電視</td><td>部分場次轉播</td><td>免費</td></tr>
<tr><td>FIFA+ App</td><td>官方 App</td><td>精華影片、不含直播</td><td>免費</td></tr>
<tr><td>Hami Video</td><td>OTT</td><td>整合愛爾達頻道</td><td>月費約 400 元</td></tr>
</tbody></table>

<h2>關鍵場次轉播預告</h2>
<table>
<thead><tr><th>場次</th><th>台灣時間</th><th>建議平台</th></tr></thead><tbody>
<tr><td>開幕戰</td><td>6/12 上午 7:00</td><td>愛爾達 / 公視</td></tr>
<tr><td>16 強淘汰賽</td><td>7/4-7/7 凌晨 2:00 起</td><td>愛爾達 / 公視</td></tr>
<tr><td>4 強對決</td><td>7/14-7/15 上午 5:00</td><td>愛爾達 / 華視</td></tr>
<tr><td><strong>決賽</strong></td><td><strong>7/20 上午 6:00</strong></td><td>愛爾達 / 公視（同步）</td></tr>
</tbody></table>

<div class="box-gold">💡 <strong>熬夜觀賽建議</strong>：凌晨場次建議錄影回看，避免疲勞駕駛或工作影響。詳見 <a href="/blog-where-to-watch">台灣轉播管道完整版</a>。</div>

<aside class="aside">
<div><h4>🔗 相關頁面</h4>
<a href="/schedule">完整賽程</a>
<a href="/live">即時比分</a>
<a href="/taiwan-time">台灣時間指南</a>
<a href="/blog-where-to-watch">台灣轉播管道</a>
<a href="/blog-broadcast-schedule">轉播時間表</a>
</div>
<div><h4>📰 相關文章</h4>
<a href="/blog-broadcast-schedule">轉播時刻表完整版</a>
<a href="/blog-taiwan-time">台灣時間完整指南</a>
</div>
</aside>`;
  simplePage({
    slug:'live-schedule', title:'2026 世足賽直播大廳 ・ 台灣官方轉播整理',
    desc:'2026 FIFA 世界盃台灣轉播管道一站整理：愛爾達體育、公視、華視轉播場次表，OTT 合法平台與台灣時間對照。',
    deck:'愛爾達、公視、華視——所有合法管道一站整理，告別盜版直播',
    tldrText:'愛爾達體育為台灣官方轉播商（全 104 場），公視、華視免費轉播重要場次，網路 OTT 可訂閱愛爾達 App 或 Hami Video。',
    crumbs:[['首頁','/'],['直播大廳',null]],
    contentHTML:content, faqs
  });
}

function buildBlogList() {
  const faqs = [
    ['本站文章多久更新一次？','賽前每週更新，賽事期間每日更新即時分析。'],
    ['可以投稿嗎？','本站目前不開放外部投稿。']
  ];
  const content = `
<h2>全部文章 ・ ${BLOGS.length} 篇深度長文</h2>
<div class="grid-2">
${BLOGS.map(([s,t,sub,d])=>`<a href="/${s}"><div class="meta">${sub}</div><h3>${t}</h3><p>${d}</p></a>`).join('\n')}
</div>`;
  simplePage({
    slug:'blog', title:'2026 世足賽分析文章列表',
    desc:'2026 FIFA 世界盃深度分析文章：台灣時間指南、投注攻略、冠軍預測、梅西 vs 姆巴佩、死亡之組分析等 15 篇長文。',
    deck:'從台灣時間對照、投注攻略到冠軍預測——15 篇深度長文陪你看完整屆世界盃',
    tldrText:'本站共 15 篇深度長文，涵蓋冠軍預測、投注攻略、台灣時間、梅西/姆巴佩對決、死亡之組分析等熱門主題。',
    crumbs:[['首頁','/'],['分析文章',null]],
    jsonldExtras:[{'@type':'Blog','name':'2026 世足賽分析文章','url':`${SITE.url}/blog`},
      {'@type':'ItemList','itemListElement':BLOGS.map((b,i)=>({'@type':'ListItem','position':i+1,'url':`${SITE.url}/${b[0]}`,'name':b[1]}))}],
    contentHTML:content, faqs
  });
}

function buildNews() {
  const newsItems = [
    ['2026-05-10','西班牙公布世界盃 26 人初選名單','亞馬爾、佩德里、加維三新生代全部入選，門將位置由西蒙領銜。'],
    ['2026-05-08','法國 Mbappé 確認狀態回升','姆巴佩西甲季末復出三場進兩球，世界盃陣容已可放心。'],
    ['2026-05-05','摩洛哥再造黑馬奇蹟？Regragui 續任','2022 四強教練 Regragui 確認帶隊出征，目標複製卡達奇蹟。'],
    ['2026-05-02','英格蘭傷兵情況穩定','貝林漢、薩卡、福登均無大傷，凱恩狀態保持。'],
    ['2026-04-28','阿根廷友誼賽勝玻利維亞 2-0','梅西替補出場助攻一次，勞塔羅進球。'],
    ['2026-04-25','美國公布主力陣容','Pochettino 確認以普利西奇、雷納為核心。'],
    ['2026-04-20','日本確認三笘薰回歸','三笘薰膝傷康復，世界盃陣容定形。'],
    ['2026-04-15','德國年輕陣容首選','穆夏拉、維爾茨領銜，新生代成主軸。']
  ];
  const faqs = [
    ['本站消息多久更新？','賽前每週更新，賽事期間每日更新。'],
    ['消息來源是哪裡？','FIFA 官方、各國足協、主要體育媒體（BBC Sport、Marca、L\'Équipe）。']
  ];
  const content = `
<h2>最新動態</h2>
<table>
<thead><tr><th>日期</th><th>標題</th><th>內容</th></tr></thead><tbody>
${newsItems.map(([d,t,c])=>`<tr><td>${d}</td><td><strong>${t}</strong></td><td>${c}</td></tr>`).join('\n')}
</tbody></table>

<aside class="aside">
<div><h4>🔗 相關頁面</h4>
<a href="/schedule">完整賽程</a>
<a href="/odds">冠軍賠率</a>
<a href="/prediction">冠軍預測</a>
<a href="/blog">深度文章</a>
</div>
<div><h4>📰 編輯精選</h4>
<a href="/blog-champion-prediction">冠軍預測長文</a>
<a href="/blog-messi-last-world-cup">梅西最後一屆</a>
<a href="/blog-group-of-death">死亡之組分析</a>
</div>
</aside>`;
  simplePage({
    slug:'news', title:'2026 世足賽最新消息 ・ 賽前準備動態',
    desc:'2026 FIFA 世界盃最新消息：各隊陣容名單、傷兵情況、友誼賽結果、教練動向、籤運分析全收錄。',
    deck:'各隊陣容、傷兵情況、友誼賽結果——賽前最新動態整理',
    tldrText:'最新動態：西班牙公布初選名單、法國姆巴佩回升、摩洛哥 Regragui 續任、英格蘭傷兵穩定、阿根廷梅西助攻。',
    crumbs:[['首頁','/'],['最新消息',null]],
    contentHTML:content, faqs
  });
}

// =========================================================
// 國家隊頁
// =========================================================
function buildCountry(team) {
  const [slug,zh,en,flag,group,rank,coach,players,odds,desc] = team;
  const story = TEAM_STORY[slug] || desc;
  const hist = HISTORY[slug] || ['—','—','—','—'];
  const faqs = [
    [`${zh}在 2026 世界盃能走多遠？`, group==='—' ? `${zh}本屆未取得參賽資格。` : `${zh}本屆分在 ${group} 組，賠率約 ${odds||'未開盤'}。${story.slice(0,80)}`],
    [`${zh}關鍵球員是誰？`,`本屆 ${zh} 的關鍵球員包括 ${players||'待公布'}。`],
    [`${zh}的主教練是誰？`,`現任主教練是 ${coach || '待公布'}。`],
    [`${zh}世界盃近 4 屆成績？`,`2010 南非：${hist[0]}；2014 巴西：${hist[1]}；2018 俄羅斯：${hist[2]}；2022 卡達：${hist[3]}。`]
  ];
  const ogImage = `${SITE.url}/banner.jpg`;
  const jsonld = {'@context':'https://schema.org','@graph':[
    breadcrumbLD([['首頁','/'],['熱門球隊','/odds'],[zh,null]]),
    {'@type':'SportsTeam','name':`${en} National Football Team`,'alternateName':`${zh}國家足球隊`,'sport':'Football','coach':coach?{'@type':'Person','name':coach}:undefined,'memberOf':{'@type':'SportsOrganization','name':'FIFA'},'image':ogImage},
    {'@type':'ImageObject','contentUrl':ogImage,'name':`${zh} 2026 世界盃`,'description':`${zh}（${en}）2026 FIFA 世界盃完整分析`},
    faqLD(faqs)
  ]};
  const groupLink = group === '—' ? '' : `<a href="/group-${group.toLowerCase()}">${group} 組分析</a>`;
  const oddsAngle = group==='—' ? `<p>${zh} 本屆未取得世界盃參賽資格，無冠軍盤可投。建議追蹤 <a href="/odds">其他熱門球隊賠率</a>。</p>` : `<p>冠軍盤約 <strong>${odds||'未開盤'}</strong>。${rank<=10?'屬於奪冠熱門候選，可作為主押。':rank<=25?'屬於第二梯隊，可作為晉級盤或小組賽讓球盤標的。':'屬於黑馬，建議小注搏彩或避開冠軍盤。'}</p>`;
  const tldrTxt = group==='—' ? `${zh}本屆未取得世界盃參賽資格。FIFA 排名第 ${rank} 名。` : `${zh} FIFA 排名第 ${rank}，分在 ${group} 組，賠率 ${odds||'未開盤'}。教練 ${coach||'待公布'}，關鍵球員：${(players||'待公布').slice(0,40)}。`;

  const html = htmlHead({title:`${flag} ${zh} 2026 世界盃完整分析（賠率/陣容/球員/歷屆成績）`,desc:`${zh}（${en}）2026 FIFA 世界盃完整分析：FIFA 排名第 ${rank}、${group==='—'?'未晉級':`分在 ${group} 組`}、賠率 ${odds||'未開盤'}、教練 ${coach||'待公布'}、關鍵球員 ${players||'待公布'}。`,slug,jsonld,ogImage})
+ masthead() + `<main>
${breadcrumb([['首頁','/'],['熱門球隊','/odds'],[zh,null]])}

${tldr(tldrTxt)}

${heroImg(teamHeroSvg(slug, zh, en, group, rank), `${zh} 2026 世界盃 ・ FIFA 排名第 ${rank} 名 ・ ${group==='—'?'未晉級':`${group} 組`}`)}

<section class="lede">
<div class="lede-main">
<h1>${flag} ${zh} 2026 世界盃完整分析</h1>
<p class="deck">${story.split('。')[0]}。</p>
<p class="byline">✍️ <a href="/about">${SITE.name} 編輯部</a> ・ 📅 2026-05-14 ・ ${en} ・ FIFA 排名第 ${rank} ・ ${group==='—'?'本屆未晉級':`${group} 組`}</p>
</div>
<aside class="lede-side" aria-label="球隊速覽">
<h2>球隊速覽</h2>
<ul>
<li><strong>英文名</strong>　${en}</li>
<li><strong>FIFA 排名</strong>　第 ${rank} 名</li>
<li><strong>分組</strong>　${group==='—'?'未晉級':`${group} 組`}</li>
<li><strong>主教練</strong>　${coach||'待公布'}</li>
<li><strong>冠軍賠率</strong>　${odds||'未開盤'}</li>
<li><strong>關鍵球員</strong>　${(players||'待公布').slice(0,30)}</li>
</ul>
</aside>
</section>

${disclaimer()}

<article>

<h2>球隊風格與本屆預測</h2>
<p>${story}</p>

<h2>歷屆世界盃成績（近 4 屆）</h2>
<table>
<caption>${zh} ・ 世界盃近 4 屆紀錄</caption>
<thead><tr><th>年份</th><th>主辦國</th><th>${zh}成績</th></tr></thead><tbody>
<tr><td>2010</td><td>南非</td><td>${hist[0]}</td></tr>
<tr><td>2014</td><td>巴西</td><td>${hist[1]}</td></tr>
<tr><td>2018</td><td>俄羅斯</td><td>${hist[2]}</td></tr>
<tr><td>2022</td><td>卡達</td><td>${hist[3]}</td></tr>
</tbody></table>

<h2>關鍵球員</h2>
<p>本屆 ${zh} 的核心陣容：<strong>${players||'待公布'}</strong>。${coach?`主教練 ${coach} 的戰術安排將決定球隊上限。`:''}</p>

<h2>2026 世界盃投注角度</h2>
${oddsAngle}

${ctaBanner('🎯 查看即時賠率 ・ 前往合作平台')}

<aside class="aside">
<div><h4>🔗 相關連結</h4>
${groupLink ? `${groupLink}<br>` : ''}
<a href="/odds">2026 冠軍賠率比較</a>
<a href="/prediction">2026 冠軍預測</a>
<a href="/schedule">完整賽程</a>
<a href="/">回首頁</a>
</div>
<div><h4>📊 其他熱門球隊</h4>
${TEAMS.filter(t=>t[0]!==slug && t[5]<=10).slice(0,6).map(t=>`<a href="/${t[0]}">${t[3]} ${t[1]} 陣容分析</a>`).join('')}
</div>
</aside>

</article>

${faqSection(faqs)}

</main>${footer()}`;
  write(`${slug}.html`, html);
}

// =========================================================
// 分組頁
// =========================================================
function buildGroup(g) {
  const [slug,name,teams,teamSlugs,note] = g;
  const teamData = teamSlugs.map(s => TEAMS.find(t => t[0] === s)).filter(Boolean);
  const faqs = [
    [`${name}組哪隊最有機會晉級？`,`本組主要強隊為 ${teamData[0]?.[1]||''}，從賠率與陣容來看為晉級熱門。`],
    [`${name}組是死亡之組嗎？`,`${note}。實力對比可看下方表格分析。`],
    [`${name}組關鍵對戰是哪一場？`,`本組強強對話最具關注度，預計為小組賽第二輪或第三輪。`]
  ];
  const jsonld = {'@context':'https://schema.org','@graph':[
    breadcrumbLD([['首頁','/'],['分組','/schedule'],[`${name} 組`,null]]),
    {'@type':'ItemList','name':`2026 世界盃 ${name} 組`,'itemListElement':teamData.map((t,i)=>({'@type':'ListItem','position':i+1,'url':`${SITE.url}/${t[0]}`,'name':t[1]}))},
    faqLD(faqs)
  ]};
  const tldrTxt = `${name} 組 4 隊：${teams}。${note}。預期 ${teamData[0]?.[1]||''} 與 ${teamData[1]?.[1]||''} 為晉級首選。`;

  const html = htmlHead({title:`2026 世界盃 ${name} 組完整分析｜${teams}`,desc:`2026 FIFA 世界盃 ${name} 組完整分析：${teams}。4 隊賠率、晉級預測、3 場小組賽賽程與投注建議全收錄。${note}。`,slug:`group-${slug}`,jsonld})
+ masthead() + `<main>
${breadcrumb([['首頁','/'],['分組','/schedule'],[`${name} 組`,null]])}

${tldr(tldrTxt)}

${heroImg(groupHeroSvg(name, teams, note), `2026 世界盃 ${name} 組 ・ ${teams}`)}

<section class="lede">
<div class="lede-main">
<h1>2026 世界盃 ${name} 組完整分析</h1>
<p class="deck">${teams}——${note}。</p>
<p class="byline">✍️ <a href="/about">${SITE.name} 編輯部</a> ・ 📅 2026-05-14 ・ ${name} 組 ・ 4 隊 3 場 ・ 取前 2 + 最佳第 3 晉級</p>
</div>
<aside class="lede-side" aria-label="本組看點">
<h2>本組看點</h2>
<ul>
<li><strong>${note}</strong></li>
<li>晉級規則：前 2 名直接晉級，第 3 名爭最佳第 3</li>
<li>3 場循環賽，6/11 – 6/27 期間進行</li>
</ul>
</aside>
</section>

${disclaimer()}

<article>

<h2>${name} 組 4 隊一覽</h2>
<table>
<caption>${name} 組球隊速覽</caption>
<thead><tr><th>球隊</th><th>FIFA 排名</th><th>冠軍賠率</th><th>主教練</th></tr></thead><tbody>
${teamData.map(t=>`<tr><td>${t[3]} <a href="/${t[0]}"><strong>${t[1]} 陣容分析</strong></a></td><td>${t[5]}</td><td>${t[8]||'未開盤'}</td><td>${t[6]||'待公布'}</td></tr>`).join('\n')}
</tbody></table>

<h2>出線預測</h2>
<p>從目前實力對比，<strong>${teamData[0]?.[1]||''}</strong> 與 <strong>${teamData[1]?.[1]||''}</strong> 為晉級首選。${teamData[2] ? `${teamData[2][1]} 視狀態與運氣可能搶下第 3 名晉級資格。` : ''}</p>

<table>
<thead><tr><th>預測名次</th><th>球隊</th><th>晉級可能</th></tr></thead><tbody>
${teamData.slice(0,4).map((t,i)=>`<tr><td>第 ${i+1} 名</td><td>${t[3]} ${t[1]}</td><td>${i<2?'✅ 直接晉級':i===2?'⚠️ 視成績爭最佳第 3':'❌ 出局風險高'}</td></tr>`).join('\n')}
</tbody></table>

<h2>${name} 組 3 輪小組賽預定賽程</h2>
<table>
<thead><tr><th>輪次</th><th>美國日期</th><th>台灣時間</th></tr></thead><tbody>
<tr><td>第 1 輪</td><td>6/11 – 6/15</td><td>凌晨 2:00 – 上午 11:00</td></tr>
<tr><td>第 2 輪</td><td>6/17 – 6/21</td><td>凌晨 2:00 – 上午 11:00</td></tr>
<tr><td>第 3 輪</td><td>6/23 – 6/27</td><td>同步開球</td></tr>
</tbody></table>

<h2>各隊深度評析</h2>
${teamData.map(t=>`<h3>${t[3]} ${t[1]}</h3><p>${(TEAM_STORY[t[0]]||t[9]).slice(0,250)}。<a href="/${t[0]}">${t[1]} 完整陣容分析 →</a></p>`).join('\n')}

<h2>投注建議</h2>
<div class="box-gold">💡 <strong>小組賽投注策略</strong>：
<ul>
<li><strong>讓球盤</strong>：實力差距明顯時押讓球</li>
<li><strong>大小球盤</strong>：強隊對戰多球，弱弱對戰少球</li>
<li><strong>晉級盤</strong>：押前 2 名直接晉級或最佳第 3</li>
</ul>
詳見 <a href="/blog-betting-guide">投注完整攻略</a>。</div>

${ctaBanner('🎯 查看即時賠率 ・ 前往合作平台')}

<aside class="aside">
<div><h4>🔗 4 隊頁面</h4>
${teamData.map(t=>`<a href="/${t[0]}">${t[3]} ${t[1]} 陣容分析</a>`).join('')}
</div>
<div><h4>📊 其他組別</h4>
${GROUPS.filter(x=>x[0]!==slug).slice(0,6).map(x=>`<a href="/group-${x[0]}">${x[1]} 組分析</a>`).join('')}
</div>
</aside>

</article>

${faqSection(faqs)}

</main>${footer()}`;
  write(`group-${slug}.html`, html);
}

// =========================================================
// 部落格
// =========================================================
function buildBlogPost(b) {
  const [slug, title, sub, desc] = b;
  const body = BLOG_BODY[slug] || `<h2>內容更新中</h2><p>${desc}</p>`;
  const authorSlug = ARTICLE_AUTHOR[slug] || 'editor-chief';
  const author = AUTHORS[authorSlug];
  const isHowTo = slug === 'blog-betting-guide' || slug === 'blog-tickets';
  const faqs = [
    ['這篇文章主要在講什麼？',desc],
    ['資料來源是哪裡？','本文資料來源包括 FIFA 官方、博彩公司開盤、各國體育媒體與本站編輯部分析。'],
    ['多久更新一次？','賽前每週更新，賽事期間每日更新關鍵變數。'],
    ['可以分享這篇文章嗎？','可以，歡迎分享連結，但請勿全文轉載。']
  ];
  const ogImage = `${SITE.url}/banner.jpg`;
  const jsonld = {'@context':'https://schema.org','@graph':[
    breadcrumbLD([['首頁','/'],['分析文章','/blog'],[title,null]]),
    {'@type':isHowTo?'HowTo':'Article','headline':title,'description':desc,'datePublished':'2026-05-14','dateModified':'2026-05-14',
     'author':{'@type':'Person','@id':`${SITE.url}/author-${author.slug}#person`,'name':author.name,'jobTitle':author.title,'url':`${SITE.url}/author-${author.slug}`},
     'publisher':{'@type':'Organization','name':SITE.name,'@id':`${SITE.url}/#org`,'logo':{'@type':'ImageObject','url':`${SITE.url}/logo.svg`}},
     'mainEntityOfPage':`${SITE.url}/${slug}`,'image':{'@type':'ImageObject','url':ogImage,'width':1200,'height':630}},
    personLD(author),
    faqLD(faqs)
  ]};

  const tocItems = body.match(/<h2[^>]*id="([^"]+)"[^>]*>([^<]+)<\/h2>/g) || [];
  const toc = tocItems.length > 0 ? tocItems.map(m=>{
    const idMatch = m.match(/id="([^"]+)"/);
    const txtMatch = m.match(/>([^<]+)<\/h2>/);
    return idMatch && txtMatch ? `<li><a href="#${idMatch[1]}">${txtMatch[1]}</a></li>` : '';
  }).join('') : '';

  const tldrTxt = desc.length > 80 ? desc.slice(0, 80) + '...' : desc;

  const html = htmlHead({title,desc,slug,jsonld,ogImage})
+ masthead() + `<main>
${breadcrumb([['首頁','/'],['分析文章','/blog'],[title,null]])}

${tldr(tldrTxt)}

${heroImg(blogHeroSvg(title, sub), title)}

<section class="lede">
<div class="lede-main">
<h1>${title}</h1>
<p class="deck">${desc}</p>
<p class="byline">✍️ <a href="/author-${author.slug}">${author.name}</a>（${author.title}）・ 📅 2026-05-14 ・ ⏱️ 約 ${Math.ceil(body.length/600)} 分鐘閱讀</p>
</div>
${toc?`<aside class="lede-side" aria-label="本文目錄"><h2>本文目錄</h2><ul>${toc}</ul></aside>`:''}
</section>

${disclaimer()}

<article>
${body}

${ctaBanner()}

<aside class="aside">
<div><h4>🔗 相關文章</h4>
${BLOGS.filter(x=>x[0]!==slug).slice(0,5).map(x=>`<a href="/${x[0]}">${x[1]}</a>`).join('')}
</div>
<div><h4>📊 相關頁面</h4>
<a href="/schedule">完整賽程</a>
<a href="/odds">冠軍賠率</a>
<a href="/prediction">冠軍預測</a>
<a href="/blog">全部文章</a>
</div>
</aside>

<div class="author-card" itemscope itemtype="https://schema.org/Person">
<div class="author-avatar">${author.name.slice(0,1)}</div>
<div>
<h3 itemprop="name"><a href="/author-${author.slug}">${author.name}</a></h3>
<div class="role" itemprop="jobTitle">${author.title}</div>
<p itemprop="description">${author.bio}</p>
</div>
</div>

</article>

${faqSection(faqs)}

</main>${footer()}`;
  write(`${slug}.html`, html);
}

// =========================================================
// 補充頁
// =========================================================
function buildExtra(e) {
  const [slug,title,desc] = e;
  const faqs = [
    [`${title}的關鍵資訊？`,desc],
    ['還想看其他資訊怎麼辦？','可從本頁底部相關連結繼續閱讀，或回首頁瀏覽全站。']
  ];
  const content = `
<h2>完整資訊</h2>
<p>${desc}</p>

<h2>關鍵時程</h2>
<table>
<thead><tr><th>項目</th><th>內容</th></tr></thead><tbody>
<tr><td>開幕</td><td>2026-06-11（墨西哥城）</td></tr>
<tr><td>決賽</td><td>2026-07-19（紐約 MetLife）</td></tr>
<tr><td>總場次</td><td>104 場</td></tr>
<tr><td>主辦國</td><td>🇺🇸 美國 ・ 🇨🇦 加拿大 ・ 🇲🇽 墨西哥</td></tr>
</tbody></table>

<aside class="aside">
<div><h4>🔗 相關頁面</h4>
<a href="/schedule">完整賽程</a>
<a href="/odds">冠軍賠率</a>
<a href="/prediction">冠軍預測</a>
<a href="/blog">深度文章</a>
</div>
<div><h4>📊 其他資訊</h4>
${EXTRAS.filter(x=>x[0]!==slug).map(x=>`<a href="/${x[0]}">${x[1]}</a>`).join('')}
</div>
</aside>`;
  simplePage({
    slug, title, desc,
    deck: desc.slice(0, 80),
    tldrText: desc.slice(0, 90),
    crumbs:[['首頁','/'],['賽事資訊','/tournament'],[title,null]],
    contentHTML:content, faqs
  });
}

// =========================================================
// 編輯部介紹 about + 作者頁
// =========================================================
function buildAbout() {
  const faqs = [
    ['為什麼相信本站的分析？',`本站編輯部成員具備足球評論、戰術分析、博彩賠率三大專業背景，文章引用 FIFA 官方、Marca、BBC Sport 等權威來源。${SITE.name} 編輯部介紹詳見下方。`],
    ['資料來源有哪些？','FIFA 官網（fifa.com）、各國足協、Opta Sports、Marca、L\'Équipe、BBC Sport、ESPN、Soccerway 等主流體育媒體與數據平台。'],
    ['是否與博彩公司有合作？','本站介紹的合作平台均為公開合法持牌業者，本站僅提供資訊參考，不收取個別下注佣金。'],
    ['可以聯絡編輯部嗎？','本站目前不開放個別來信，但可透過社群追蹤獲取最新內容。'],
    ['資訊更新頻率？','賽前每週更新，賽事期間每日更新即時動態與分析。']
  ];
  const jsonld = {'@context':'https://schema.org','@graph':[
    breadcrumbLD([['首頁','/'],['關於我們',null]]),
    {'@type':'AboutPage','name':`${SITE.name} ・ 編輯部介紹`,'url':`${SITE.url}/about`,'description':'2026 世足賽完整指南編輯部介紹、編輯方針、資料來源說明'},
    {'@type':'Organization','@id':`${SITE.url}/#org`,'name':SITE.name,'url':SITE.url,'foundingDate':'2025-01-01','knowsAbout':['2026 FIFA World Cup','足球戰術分析','博彩賠率','世界盃歷史'],'sameAs':[SITE.motherSite],'member':Object.values(AUTHORS).map(a=>({'@type':'Person','name':a.name,'jobTitle':a.title,'url':`${SITE.url}/author-${a.slug}`}))},
    ...Object.values(AUTHORS).map(a=>personLD(a)),
    faqLD(faqs)
  ]};
  const content = `
<h2>關於 ${SITE.name}</h2>
<p>${SITE.name} 是專注於 2026 FIFA 世界盃的繁體中文資訊整理站，目標是為台灣球迷提供賽前到決賽完整、深入、可信的資訊。從 2025 年初開始建站準備，已累積超過 90 篇深度內容，涵蓋 48 隊國家隊、12 個分組、賽程、賠率、預測、投注攻略等主題。</p>

<h2>編輯方針</h2>
<p>本站採以下原則：</p>
<ul>
<li><strong>資料優先</strong>：所有預測必有數據支持，所有賠率必標明來源</li>
<li><strong>本地視角</strong>：以台灣球迷為核心，所有賽程換算為台灣時間</li>
<li><strong>誠實標示</strong>：本站含合作平台連結（標記 nofollow sponsored），不影響內容立場</li>
<li><strong>合法合規</strong>：所有投注資訊僅供 18 歲以上成年人參考，未成年勿入</li>
<li><strong>持續更新</strong>：賽前每週、賽事期間每日更新</li>
</ul>

<h2>編輯部成員</h2>
${Object.values(AUTHORS).map(a=>`
<div class="author-card" itemscope itemtype="https://schema.org/Person">
<div class="author-avatar">${a.name.slice(0,1)}</div>
<div>
<h3 itemprop="name"><a href="/author-${a.slug}">${a.name}</a></h3>
<div class="role" itemprop="jobTitle">${a.title}</div>
<p itemprop="description">${a.bio}</p>
<p style="font-size:0.85rem;color:#666;margin-top:6px">📌 專業領域：${a.expertise.join(' ・ ')}</p>
</div>
</div>`).join('')}

<h2>資料來源</h2>
<table>
<thead><tr><th>來源類型</th><th>具體平台</th><th>用途</th></tr></thead><tbody>
<tr><td>官方資料</td><td>FIFA、各國足協</td><td>賽程、抽籤、規則、官方名單</td></tr>
<tr><td>數據統計</td><td>Opta Sports、SofaScore、Soccerway</td><td>球員數據、戰績、進球統計</td></tr>
<tr><td>主流媒體</td><td>Marca、L'Équipe、BBC Sport、ESPN</td><td>陣容動向、傷兵、轉會</td></tr>
<tr><td>博彩盤口</td><td>Bet365、DraftKings、Pinnacle</td><td>冠軍賠率、讓球盤、大小球</td></tr>
<tr><td>台灣媒體</td><td>愛爾達體育、運動視界、ETtoday 運動雲</td><td>本地轉播資訊、台灣球迷觀點</td></tr>
</tbody></table>

<h2>本站合作與廣告</h2>
<p>本站合作母站為 <a href="${SITE.motherSite}" rel="nofollow sponsored" target="_blank"><strong>${SITE.motherSiteName}（${SITE.motherSite.replace('https://','')}）</strong></a>。本站含合作平台導流連結（標記 <code>rel="nofollow sponsored"</code>），讀者透過連結註冊或投注時，本站可能獲得推薦獎勵。<strong>此合作不影響本站內容立場與賠率分析中立性</strong>。所有冠軍預測、投注建議均基於數據與專業判斷，不受合作平台影響。</p>

<h2>免責聲明</h2>
<p>本站為 2026 FIFA 世界盃資訊整理站，所有賽程、賠率、預測資訊僅供參考。FIFA、世界盃為其各自所有者之註冊商標。投注有風險，未滿 18 歲請勿瀏覽或參與。請理性投注、量力而為。</p>

<aside class="aside">
<div><h4>🔗 編輯部成員</h4>
${Object.values(AUTHORS).map(a=>`<a href="/author-${a.slug}">${a.name}（${a.title}）</a>`).join('')}
</div>
<div><h4>📊 站點導覽</h4>
<a href="/">首頁</a>
<a href="/blog">分析文章</a>
<a href="/schedule">完整賽程</a>
<a href="/odds">冠軍賠率</a>
</div>
</aside>`;
  const html = htmlHead({title:`關於 ${SITE.name} ・ 編輯部介紹`,desc:`${SITE.name} 編輯部介紹：編輯方針、團隊成員、資料來源、合作說明。3 位編輯帶你看完 2026 FIFA 世界盃。`,slug:'about',jsonld})
+ masthead() + `<main>
${breadcrumb([['首頁','/'],['關於我們',null]])}
${tldr(`${SITE.name} 是專注於 2026 FIFA 世界盃的繁體中文資訊整理站，由 3 位編輯運營，內容引用 FIFA 官方、Opta、Marca 等權威來源。`)}
<section class="lede">
<div class="lede-main">
<h1>關於 ${SITE.name}</h1>
<p class="deck">3 位編輯、5 大資料來源、90+ 篇深度內容——專注於 2026 FIFA 世界盃的繁體中文資訊站</p>
<p class="byline">✍️ ${SITE.name} 編輯部 ・ 📅 2026-05-14</p>
</div>
</section>
${disclaimer()}
<article>
${content}
</article>
${faqSection(faqs)}
${ctaBanner()}
</main>${footer()}`;
  write('about.html', html);
}

function buildAuthor(authorSlug) {
  const a = AUTHORS[authorSlug];
  if (!a) return;
  const articleList = Object.entries(ARTICLE_AUTHOR).filter(([k,v])=>v===authorSlug).map(([k])=>BLOGS.find(b=>b[0]===k)).filter(Boolean);
  const faqs = [
    [`${a.name}是誰？`,`${a.name}是 ${SITE.name} 的 ${a.title}。${a.bio.slice(0,80)}`],
    [`${a.name}的專業領域是？`,`專業領域包括 ${a.expertise.join('、')}。`],
    [`${a.name}寫過哪些文章？`,`${a.name} 已撰寫超過 ${a.article_count} 篇文章，主題涵蓋 ${a.expertise.slice(0,2).join('、')} 等。`]
  ];
  const jsonld = {'@context':'https://schema.org','@graph':[
    breadcrumbLD([['首頁','/'],['編輯部','/about'],[a.name,null]]),
    {'@type':'ProfilePage','name':`${a.name} ・ ${a.title}`,'url':`${SITE.url}/author-${a.slug}`,'mainEntity':personLD(a)},
    personLD(a),
    faqLD(faqs)
  ]};
  const html = htmlHead({title:`${a.name} ・ ${a.title}`,desc:`${a.name}（${a.title}）：${a.bio.slice(0,100)} 已撰寫 ${a.article_count} 篇 2026 世界盃相關深度文章。`,slug:`author-${a.slug}`,jsonld})
+ masthead() + `<main>
${breadcrumb([['首頁','/'],['編輯部','/about'],[a.name,null]])}
${tldr(`${a.name}（${a.title}）${a.bio.slice(0,80)}已撰寫 ${a.article_count}+ 篇文章。`)}
<section class="lede">
<div class="lede-main">
<h1>${a.name}</h1>
<p class="deck">${a.title}</p>
<p class="byline">📅 編輯加入 2025 年 ・ ✍️ ${a.article_count}+ 篇文章 ・ ${a.expertise.join(' ・ ')}</p>
</div>
</section>
${disclaimer()}
<article>
<h2>關於 ${a.name}</h2>
<p>${a.bio}</p>

<h2>專業領域</h2>
<ul>
${a.expertise.map(e=>`<li><strong>${e}</strong></li>`).join('')}
</ul>

<h2>${a.name} 撰寫的文章</h2>
${articleList.length > 0 ? `<div class="grid-2">${articleList.map(b=>`<a href="/${b[0]}"><div class="meta">${b[2]}</div><h3>${b[1]}</h3><p>${b[3].slice(0,80)}</p></a>`).join('')}</div>` : `<p>${a.name} 撰寫的文章列表更新中。</p>`}

<h2>編輯立場聲明</h2>
<p>${a.name} 為 ${SITE.name} 獨立編輯，所有內容基於公開資料與專業判斷，<strong>不受任何博彩公司、品牌商業合作影響</strong>。投注建議僅供參考，請讀者自行評估風險。</p>

<aside class="aside">
<div><h4>🔗 其他編輯</h4>
${Object.values(AUTHORS).filter(x=>x.slug!==a.slug).map(x=>`<a href="/author-${x.slug}">${x.name}（${x.title}）</a>`).join('')}
</div>
<div><h4>📊 相關頁面</h4>
<a href="/about">編輯部介紹</a>
<a href="/blog">全部文章</a>
<a href="/">首頁</a>
</div>
</aside>
</article>
${faqSection(faqs)}
${ctaBanner()}
</main>${footer()}`;
  write(`author-${a.slug}.html`, html);
}

// =========================================================
// 404
// =========================================================
function build404() {
  const jsonld = breadcrumbLD([['首頁','/'],['404',null]]);
  const html = htmlHead({title:'404 找不到頁面',desc:'找不到您要的頁面，請從首頁或本頁推薦連結繼續瀏覽 2026 世足賽資訊。',slug:'404',jsonld})
+ masthead() + `<main>
<section class="lede">
<div class="lede-main">
<h1>😢 404 ・ 找不到頁面</h1>
<p class="deck">抱歉，您要找的頁面不存在或已搬移。以下是熱門頁面推薦：</p>
</div>
</section>

<h2>熱門頁面</h2>
<div class="grid-3">
<a href="/"><h3>🏠 首頁</h3><div class="meta">回到本站首頁</div></a>
<a href="/schedule"><h3>📋 完整賽程</h3><div class="meta">104 場賽程表</div></a>
<a href="/odds"><h3>💰 冠軍賠率</h3><div class="meta">48 隊賠率比較</div></a>
<a href="/prediction"><h3>🏆 冠軍預測</h3><div class="meta">深度分析</div></a>
<a href="/blog"><h3>📰 分析文章</h3><div class="meta">15 篇深度長文</div></a>
<a href="/live"><h3>⚽ 即時比分</h3><div class="meta">LIVE 比分</div></a>
</div>

${ctaBanner('🎯 前往合作平台','查看世足賽即時賠率')}

</main>${footer()}`;
  write('404.html', html);
}

// =========================================================
// Sitemap 分拆
// =========================================================
function buildSitemaps() {
  const today = '2026-05-14';
  const mkUrl=(u,p,f)=>`<url><loc>${SITE.url}${u}</loc><lastmod>${today}</lastmod><changefreq>${f}</changefreq><priority>${p}</priority></url>`;

  const pages = [
    mkUrl('/',1.0,'daily'),
    mkUrl('/schedule',0.9,'daily'),
    mkUrl('/odds',0.9,'daily'),
    mkUrl('/prediction',0.8,'weekly'),
    mkUrl('/live',0.9,'daily'),
    mkUrl('/live-schedule',0.9,'daily'),
    mkUrl('/blog',0.8,'weekly'),
    mkUrl('/news',0.9,'daily'),
    mkUrl('/about',0.7,'monthly'),
    ...Object.values(AUTHORS).map(a=>mkUrl(`/author-${a.slug}`,0.6,'monthly')),
    ...EXTRAS.map(e=>mkUrl(`/${e[0]}`,0.7,'weekly'))
  ].join('\n');

  const teams = TEAMS.map(t=>mkUrl(`/${t[0]}`,0.7,'weekly')).join('\n');
  const groups = GROUPS.map(g=>mkUrl(`/group-${g[0]}`,0.75,'weekly')).join('\n');
  const blogs = BLOGS.map(b=>mkUrl(`/${b[0]}`,0.7,'weekly')).join('\n');

  const wrap=(content)=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${content}
</urlset>`;

  write('sitemap-pages.xml', wrap(pages));
  write('sitemap-teams.xml', wrap(teams));
  write('sitemap-groups.xml', wrap(groups));
  write('sitemap-blogs.xml', wrap(blogs));

  // index sitemap
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap><loc>${SITE.url}/sitemap-pages.xml</loc><lastmod>${today}</lastmod></sitemap>
<sitemap><loc>${SITE.url}/sitemap-teams.xml</loc><lastmod>${today}</lastmod></sitemap>
<sitemap><loc>${SITE.url}/sitemap-groups.xml</loc><lastmod>${today}</lastmod></sitemap>
<sitemap><loc>${SITE.url}/sitemap-blogs.xml</loc><lastmod>${today}</lastmod></sitemap>
</sitemapindex>`);
}

function buildSEOFiles() {
  write('robots.txt', `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`);
  write('_headers', `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: frame-ancestors 'self'

/*.html
  Cache-Control: public, max-age=3600

/style.css
  Cache-Control: public, max-age=604800

/*.svg
  Cache-Control: public, max-age=604800

/sitemap*.xml
  Cache-Control: public, max-age=86400
  Content-Type: application/xml

/robots.txt
  Cache-Control: public, max-age=86400
  Content-Type: text/plain
`);
  write('_redirects', `# Cloudflare Pages redirects
/home / 301
/index /index.html 301
`);
  write('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#1a1a1a"/><text x="32" y="44" font-family="Georgia,serif" font-size="36" font-weight="900" text-anchor="middle" fill="#b91c1c">W</text></svg>`);
  write('banner.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#fafaf7"/>
<rect x="0" y="0" width="1200" height="8" fill="#1a1a1a"/>
<rect x="0" y="14" width="1200" height="2" fill="#1a1a1a"/>
<text x="60" y="80" font-family="Georgia,serif" font-size="18" font-weight="900" fill="#666" letter-spacing="6">EST. 2025 ・ WC2026 完整指南</text>
<text x="60" y="220" font-family="Georgia,serif" font-size="96" font-weight="900" fill="#1a1a1a">2026 世足賽</text>
<text x="60" y="320" font-family="Georgia,serif" font-size="72" font-weight="900" fill="#b91c1c">完整指南</text>
<line x1="60" y1="360" x2="1140" y2="360" stroke="#1a1a1a" stroke-width="2"/>
<text x="60" y="430" font-family="Georgia,serif" font-size="36" font-style="italic" fill="#333">賽程・分組・賠率・冠軍預測 一站看完</text>
<text x="60" y="510" font-family="-apple-system,sans-serif" font-size="28" fill="#666">6/11 開幕 ・ 7/19 決賽 ・ 48 隊 ・ 104 場 ・ 美加墨三國聯辦</text>
<rect x="60" y="555" width="200" height="40" fill="#b91c1c"/>
<text x="160" y="582" font-family="Georgia,serif" font-size="20" font-weight="900" fill="#fff" text-anchor="middle">立即查賠率</text>
</svg>`);
  write('logo.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60"><text x="0" y="42" font-family="Georgia,serif" font-size="36" font-weight="900" fill="#1a1a1a"><tspan fill="#b91c1c">WC</tspan> 2026</text></svg>`);
}

// =========================================================
// Main
// =========================================================
(function main() {
  console.log('🚀 開始產出全站頁面（SEO 強化版）...\n');
  console.log('— CSS 抽出 —');
  buildCSS();

  console.log('\n— P0 核心 —');
  buildIndex();
  buildSchedule();
  buildOdds();
  buildPrediction();
  buildLive();
  buildLiveSchedule();
  buildBlogList();
  buildNews();

  console.log('\n— E-E-A-T 頁 —');
  buildAbout();
  Object.keys(AUTHORS).forEach(buildAuthor);

  console.log('\n— P1 國家隊 (50) —');
  TEAMS.forEach(buildCountry);

  console.log('\n— P1 分組 (12) —');
  GROUPS.forEach(buildGroup);

  console.log('\n— P2 部落格 (15) —');
  BLOGS.forEach(buildBlogPost);

  console.log('\n— P3 補充 (6) —');
  EXTRAS.forEach(buildExtra);

  console.log('\n— SEO 檔案 —');
  build404();
  buildSitemaps();
  buildSEOFiles();

  console.log('\n✅ 完成！');
})();
