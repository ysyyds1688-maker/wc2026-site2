# wc2026-site2

2026 FIFA 世界盃資訊導流站（site 2）。

## 站點資訊
- Cloudflare Pages 專案：`wc2026-site2`
- URL：https://ys89.biz
- 導流目標：https://lihi2.me/SGvyv
- 頁面數：97 個 HTML（首頁 + P0 核心 7 + 國家隊 50 + 分組 12 + 部落格 15 + 補充 6 + 404 + 列表頁等）

## 結構
```
/
├── index.html               # 首頁
├── schedule.html            # 完整賽程
├── odds.html                # 冠軍賠率
├── prediction.html          # 冠軍預測
├── live.html                # 即時比分
├── live-schedule.html       # 直播大廳
├── blog.html                # 部落格列表
├── news.html                # 最新消息
├── format/venues/...        # 補充頁面
├── group-{a-l}.html         # 12 組
├── {country}.html           # 50 國家隊
├── blog-{topic}.html        # 15 篇部落格
├── 404.html
├── sitemap.xml
├── robots.txt
├── _headers / _redirects
├── favicon.svg / banner.svg / logo.svg
└── build/                   # 生成器（不需部署）
    ├── data.js
    ├── template.js
    └── generate.js
```

## 重新生成所有頁面
```bash
node build/generate.js
```

## 部署
```bash
npx wrangler pages deploy . --project-name=wc2026-site2 --commit-dirty=true
```
