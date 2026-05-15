# 🚀 從新電腦複製此站到新導流站 ・ 一鍵流程

> **新電腦只要 3 步驟：clone repo → 開 Claude Code → 貼一句話**

---

## 📋 在新電腦執行的 3 步驟

### Step 1：環境準備（首次只做一次）

如果新電腦還沒裝這些工具：

```bash
# macOS：用 brew
brew install gh node

# 登入你的 GitHub 帳號（ysyyds1688-maker）
gh auth login
# 選 GitHub.com → HTTPS → Login with web browser
```

### Step 2：Clone 模板 repo（30 秒）

```bash
# 把 [NEW_PROJECT_NAME] 換成新專案名，例如 wc2026-site3
gh repo clone ysyyds1688-maker/wc2026-site2 ~/Downloads/[NEW_PROJECT_NAME]
cd ~/Downloads/[NEW_PROJECT_NAME]
rm -rf .git && git init -b main
```

### Step 3：開 Claude Code 並貼這一句

在新電腦進入剛 clone 的目錄、開 Claude Code，把下面整段貼進去（**填好 3 個變數再貼**）：

```
請打開本目錄的 CLONE-ME.md，依照「自動執行指令」章節的步驟自動執行建站、部署、push 整個流程。

【3 個變數】
- 新 Cloudflare Pages 專案名：_______
- 新導流短連結（CTA URL）：_______
- 新本地工作目錄（這個目錄的絕對路徑）：_______

完成後請回報網址、GitHub repo 連結、commit hash。
```

**就這樣**。Claude 會自動讀本檔的「自動執行指令」章節，跑完整流程，5-10 分鐘交付新站。

---

## 🤖 自動執行指令（給 Claude 看的，不用你動）

> Claude 讀到這段時，請依以下完整規格執行，不要中途反問細節。

### 執行步驟

1. 確認當前目錄是使用者提供的新本地工作目錄
2. 修改 `build/data.js` 開頭的 `SITE` 物件：
   - `name` 改為新站名（建議與 `2026世足賽完整指南` 略有區別，例：「2026世足賽資訊站」、「WC2026 觀賽指南」）
   - `url` 改為 `https://[新專案名].pages.dev`
   - `cta` 改為新的短連結
   - `ogImage` 改為 `https://[新專案名].pages.dev/banner.jpg`
   - `motherSite` 保留 `https://ys89.fun`（除非使用者指定改）
   - `motherSiteName` 保留 `夜色娛樂城`
3. 執行 `node build/generate.js` 重新生成全部頁面（會自動套用新變數）
4. 確認 `banner.jpg` 存在（從模板帶過來，不需重新生成 OG 圖）
5. 執行 `npx wrangler pages project create [新專案名] --production-branch=main`
6. 執行 `npx wrangler pages deploy . --project-name=[新專案名] --branch=main --commit-dirty=true --commit-message="initial"`
7. 執行 `gh repo create [新專案名] --private --source=. --remote=origin --push`
8. 驗證：curl 首頁、`/spain`、`/blog-champion-prediction`、`/sitemap.xml` 應全部回 200
9. 完成後回報 Cloudflare Pages URL、GitHub repo URL、commit hash

### 規格說明 ・ UI/UX（已在模板內，不要改）

- 風格：雜誌/報紙風（不是琥珀金白底）
- 配色：白米色底 `#fafaf7` + 黑字 `#1a1a1a` + 紅標 `#b91c1c`
- 字體：Noto Serif TC（大標）+ Noto Sans TC（內文）
- 結構：報紙頭板 masthead + sticky topnav + 兩欄式 lede
- 首字大寫 drop cap、表格上下粗黑線、CTA 黑底紅 hover
- RWD：960px / 640px 兩個斷點
- CSS 外部化在 `/style.css`

### 規格說明 ・ SEO 必備項目（已在模板內，勿移除）

1. 每頁完整 meta：title、description、canonical（無 .html）、hreflang zh-TW + x-default
2. 每頁 OG + Twitter Card（含 og:image:alt、twitter:image:alt）
3. 14 種 JSON-LD schema：WebSite、Organization、SportsEvent、SportsTeam、ItemList、Article、HowTo、FAQPage、BreadcrumbList、Person、ProfilePage、AboutPage、ImageObject、SearchAction
4. 每頁有 BreadcrumbList schema + 視覺麵包屑
5. 每頁有 TL;DR 30 字直答區塊（AEO，給 Google AI Overview）
6. 每頁有 FAQ 區 + FAQPage schema
7. 每頁單一 h1（masthead 用 `<p class="title">`）
8. 內連 anchor text 多樣化（具體關鍵字）
9. Sitemap 分拆：`sitemap.xml`（index）+ 4 個子 sitemap
10. robots.txt、_headers（CSP）、_redirects、404.html、favicon.svg、logo.svg、banner.jpg

### 規格說明 ・ E-E-A-T

- `/about` 編輯部介紹頁
- 3 個作者頁：`/author-editor-chief`、`/author-analyst-tactics`、`/author-analyst-betting`
- 每篇部落格具名作者 + author card + Person schema
- Article schema 連結 Person + Organization
- Organization schema `sameAs` 含 `https://ys89.fun`（母站關聯）

### 規格說明 ・ 內容架構（共 101 頁，勿改）

- 首頁 1 + P0 核心 7 頁
- 50 國家隊頁（含真實 2010-2022 歷屆成績）
- 12 組分組頁
- 15 篇部落格（每篇 2400-2800 字真實獨特內容）
- 6 個補充頁
- `/about` + 3 個作者頁
- 404.html

### 規格說明 ・ 母站連結

- `SITE.motherSite = 'https://ys89.fun'`
- `SITE.motherSiteName = '夜色娛樂城'`
- footer 第 4 欄與 `/about` 頁均顯示母站連結（金色顯眼）
- legal 區也有母站合作說明
- 全部 `rel="nofollow sponsored" target="_blank"`

### 不需要做的事

- 不要重寫部落格內容（模板已有 15 篇 2400-2800 字長文）
- 不要重做 UI 設計（雜誌風已定）
- 不要追問風格選項
- 不要建議多語言、PWA、AMP
- 不要重生 OG 圖（用模板帶過來的 banner.jpg）

### 完成標準

- `node build/generate.js` 跑完無錯
- `ls *.html` 應該有 100+ 個 HTML 檔
- 部署後 curl 首頁回 200
- curl `/spain`、`/blog-champion-prediction`、`/sitemap.xml` 全部回 200
- `git push` 完成
- GitHub repo private 已建立

預計總時間 5-10 分鐘。

---

## ⚠️ 故障排除

**Q：`gh auth login` 之後仍然不能 clone（private repo）**
A：執行 `gh auth refresh -s repo` 取得更多權限

**Q：`wrangler pages deploy` 提示要登入**
A：執行 `npx wrangler login` 用 Cloudflare 帳號授權

**Q：`node build/generate.js` 報錯找不到模組**
A：模板沒有 node_modules，但全部用 Node 內建模組，不需要 npm install。確認 Node ≥ 18

**Q：新專案名跟現有重複**
A：Cloudflare Pages 專案名全域唯一，挑沒人用過的（例如 wc2026-site3、wc2026-site4 ...）

---

## 📦 相關連結

- **本模板 repo**：https://github.com/ysyyds1688-maker/wc2026-site2
- **完整 prompt 版**（給其他情境用）：[PROMPT-TEMPLATE.md](./PROMPT-TEMPLATE.md)
- **模板部署中的站**：https://ys89.biz
