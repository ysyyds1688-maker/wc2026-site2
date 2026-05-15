# 🚀 複製此站到新導流站 ・ Claude Prompt 模板

> 把本檔下半部「Prompt 內容」整段複製貼到新 Claude session，**先把開頭 3 個變數換成你要的值**，按 Enter 即可。預計 5-10 分鐘自動完工。

---

## 📋 使用方式

1. 複製下面「Prompt 內容」整段（從 ⬇️ 開始到 ⬆️ 結束）
2. 開新 Claude Code session（建議在新的 `/Users/user/Downloads/` 子目錄啟動）
3. 把開頭 3 個 `_______` 填上你要的值：
   - 新 Cloudflare Pages 專案名（例：`wc2026-site3`）
   - 新導流短連結（例：`https://lihi2.me/abc123`）
   - 本地工作目錄（例：`/Users/user/Downloads/wc2026-site3`）
4. 貼到新對話，按 Enter，等 5-10 分鐘完工

## 📌 如果要做**不同主題**的站（NBA、奧運、職棒……）

在 Prompt 最開頭額外加一段：

```
備註：本次主題是「[新主題名]」，不是世足賽。請保留所有 UI/SEO/E-E-A-T 結構不變，
只重寫 build/data.js + build/blog-content.js + build/history.js + build/authors.js
中的內容資料（隊伍/比賽/部落格主題改為新主題）。其他檔案結構保留。
```

---

## 🎯 Prompt 內容（從下面 ⬇️ 開始複製）

⬇️ **從這裡開始複製** ⬇️

```
請依以下完整規格幫我建一個新的世足賽導流站，從首頁到部署一次完成、不要中途反問細節。

【需要你填的 3 個變數】
- 新 Cloudflare Pages 專案名（例：wc2026-site3）：_______
- 導流目標短連結（例：https://lihi2.me/XXXX）：_______
- 本地工作目錄（例：/Users/user/Downloads/wc2026-site3）：_______

【模板來源】
已存在的成品模板：https://github.com/ysyyds1688-maker/wc2026-site2
這個 repo 包含完整的 build/ 生成器，請直接 clone 後修改 3 個變數重新生成即可。
所有 UI、SEO、內容架構都已寫在 build/ 目錄下，不要從頭重建。

【執行步驟】
1. 先 cd 到上層目錄
2. gh repo clone ysyyds1688-maker/wc2026-site2 [新本地目錄]
3. cd 新目錄、rm -rf .git、git init -b main
4. 修改 build/data.js 開頭的 SITE 物件：
   - name 改為新站名（建議跟 wc2026-site2 略有區別，例：「2026世足賽資訊站」）
   - url 改為 https://[新專案名].pages.dev
   - cta 改為新的短連結
   - ogImage 改為 https://[新專案名].pages.dev/banner.jpg
5. node build/generate.js 重新生成全部頁面（會自動套用新變數）
6. 用既有的 banner.jpg（從模板帶過來，不用重新生成 OG 圖）
7. npx wrangler pages project create [新專案名] --production-branch=main
8. npx wrangler pages deploy . --project-name=[新專案名] --branch=main --commit-dirty=true --commit-message="initial"
9. gh repo create [新專案名] --private --source=. --remote=origin --push
10. 驗證：curl 首頁、spain、blog 各一個應回 200

【規格說明 ・ UI/UX】
- 風格：雜誌/報紙風（不是 ys89.games 原版的琥珀金白底）
- 配色：白米色底 #fafaf7 + 黑字 #1a1a1a + 紅標 #b91c1c
- 字體：Noto Serif TC（大標）+ Noto Sans TC（內文）
- 結構：報紙頭板 masthead + sticky topnav + 兩欄式 lede（主標+側邊速覽）
- 首字大寫 drop cap（每段第一字放大）
- 表格上下粗黑線、CTA 黑底紅 hover
- RWD：960px / 640px 兩個斷點
- CSS 外部化在 /style.css（不要 inline）

【規格說明 ・ SEO 必備項目（全部已在模板內，不要拿掉）】
1. 每頁完整 meta：title、description、canonical（無 .html）、hreflang zh-TW + x-default
2. 每頁 OG + Twitter Card（含 og:image:alt、twitter:image:alt）
3. JSON-LD schema 14 種類型已涵蓋：WebSite、Organization、SportsEvent、SportsTeam、ItemList、Article、HowTo、FAQPage、BreadcrumbList、Person、ProfilePage、AboutPage、ImageObject、SearchAction
4. 每頁有 BreadcrumbList schema + 視覺麵包屑
5. 每頁有 TL;DR 30 字直答區塊（AEO，給 Google AI Overview）
6. 每頁有 FAQ 區（3-6 題）+ FAQPage schema
7. 每頁單一 h1（masthead 用 <p class="title">，不是 <h1>）
8. 內連 anchor text 多樣化（具體關鍵字而非「→ 完整分析」）
9. Sitemap 分拆：sitemap.xml（index）+ sitemap-pages/teams/groups/blogs.xml 共 5 個檔案
10. robots.txt、_headers（CSP + X-Content-Type-Options）、_redirects、404.html、favicon.svg、logo.svg、banner.jpg（OG 圖 1200x630 JPG）

【規格說明 ・ E-E-A-T 強化】
- /about 頁：編輯部介紹、編輯方針、資料來源、合作說明
- 3 個作者頁：/author-editor-chief、/author-analyst-tactics、/author-analyst-betting
- 每篇部落格有具名作者 + author card + Person schema
- Article schema 連結 Person + Organization
- 模板的 build/authors.js 已寫好 3 位作者資料，請保留

【規格說明 ・ 內容架構（共 101 頁，模板已有，勿改）】
- 首頁 1 + P0 核心 7 頁（schedule/odds/prediction/live/live-schedule/blog/news）
- 50 國家隊頁（含 2010/2014/2018/2022 真實歷屆成績、教練、關鍵球員、賠率）
- 12 組分組頁（A-L）
- 15 篇部落格（每篇 2400-2800 字真實獨特內容，非模板化）
- 6 個補充頁（format/venues/taiwan-time/ticket/tournament/world-cup-2026）
- /about + 3 個作者頁
- 404.html
- 全站平均字數約 1850 字

【規格說明 ・ Hero 圖】
- 國家隊頁用國旗配色 SVG hero（每國各自配色，build/flags.js 已有 50 國設定）
- 部落格頁用黑底紅標題 SVG hero
- 分組頁用米色底 SVG hero
- 全部含 alt text 與 ImageObject schema

【規格說明 ・ CTA 與導流】
- 每頁有 cta-banner（黑底大按鈕）與 cta-inline（紅按鈕）
- 所有導流連結加 rel="nofollow sponsored" target="_blank"
- CTA 全部指向 SITE.cta 變數，改 data.js 一處即可全站生效

【完成標準】
- node build/generate.js 跑完無錯
- ls *.html 應該有 100+ 個 HTML 檔
- 部署後 curl https://[新專案名].pages.dev/ 回 200
- curl https://[新專案名].pages.dev/spain 回 200
- curl https://[新專案名].pages.dev/blog-champion-prediction 回 200
- curl https://[新專案名].pages.dev/sitemap.xml 回 200
- git push 完成、GitHub repo private 已建立

【不需要做的事】
- 不要重寫部落格內容（模板已有 15 篇 2400-2800 字長文）
- 不要重做 UI 設計（雜誌風已定）
- 不要追問風格選項
- 不要建議多語言、PWA、AMP（低 ROI 不做）
- 不要重生 OG 圖（用模板帶過來的 banner.jpg 即可）

預計總時間 5-10 分鐘。完成後回報網址、GitHub repo 連結、commit hash。
```

⬆️ **複製到這裡結束** ⬆️

---

## 📦 本模板包含的成品規格

| 類別 | 數量 / 內容 |
|------|------------|
| HTML 頁面 | 101 個 |
| 部落格長文 | 15 篇（每篇 2400-2800 字真實獨特內容） |
| 國家隊頁面 | 50 個（含 2010-2022 真實歷屆成績） |
| 分組頁面 | 12 個（A-L） |
| 補充頁面 | 6 個 |
| E-E-A-T 頁面 | 1 個 /about + 3 個作者頁 |
| Schema 類型 | 14 種 |
| Sitemap | 1 index + 4 子 sitemap |
| 全站平均字數 | 1850 字 |
| OG 圖 | banner.jpg（1200×630 JPG 245KB） |

## 🛠️ 模板檔案結構

```
wc2026-site2/
├── build/
│   ├── data.js              # SITE 變數 + 50 國 + 12 組 + 15 部落格 + 6 補充
│   ├── template.js          # head/nav/footer/CSS/schema 模板函式
│   ├── generate.js          # 主生成器
│   ├── history.js           # 50 國歷屆世界盃成績
│   ├── blog-content.js      # 15 篇部落格獨特長文內容
│   ├── authors.js           # 3 位編輯部成員資料
│   ├── flags.js             # 50 國國旗 SVG 配色 + hero 函式
│   └── venues.js            # 16 主辦城市資料
├── style.css                # 外部 CSS（雜誌風）
├── banner.jpg               # OG 圖 1200×630
├── favicon.svg / logo.svg
├── sitemap.xml + 4 子 sitemap
├── robots.txt / _headers / _redirects / 404.html
└── *.html                   # 101 個生成頁面
```

## 🔁 改 SITE 即可全站套用新值

只要改 `build/data.js` 開頭：

```js
const SITE = {
  name: '新站名',
  brand: 'WC2026 完整指南',
  url: 'https://[新專案名].pages.dev',
  cta: 'https://lihi2.me/[新短連結]',
  ctaText: '立即前往合作平台',
  ogImage: 'https://[新專案名].pages.dev/banner.jpg',
};
```

然後 `node build/generate.js`，全站 101 頁所有 CTA、canonical、OG 都會更新。
