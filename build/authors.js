// 編輯部成員（用於 E-E-A-T）
const AUTHORS = {
  'editor-chief': {
    slug: 'editor-chief',
    name: '主編',
    title: '主編 ・ 資深足球評論員',
    bio: '專注足球賽事評析超過 15 年，曾任職於多家體育媒體，擅長戰術分析、博彩賠率解讀與國際足壇動向追蹤。專業領域涵蓋歐洲五大聯賽、世界盃、歐國盃、美洲盃。',
    expertise: ['世界盃歷史','戰術分析','博彩賠率','歐洲足球'],
    article_count: 80
  },
  'analyst-tactics': {
    slug: 'analyst-tactics',
    name: '戰術分析師',
    title: '戰術分析師',
    bio: '足球戰術深度評論員，曾翻譯多本國際足球戰術專書。擅長以數據解讀比賽，是本站陣型分析與球員角色定位的主要撰稿人。',
    expertise: ['戰術陣型','球員角色','數據分析','歐洲球員追蹤'],
    article_count: 35
  },
  'analyst-betting': {
    slug: 'analyst-betting',
    name: '賠率分析師',
    title: '賠率分析師',
    bio: '熟悉博彩盤口機制與資金管理，曾任職於博彩相關產業 8 年。本站投注攻略、價值投注分析、滾球策略均出自其手。',
    expertise: ['博彩盤口','資金管理','價值投注','滾球策略'],
    article_count: 25
  }
};

// 文章 slug → author 對映
const ARTICLE_AUTHOR = {
  'blog-taiwan-time': 'editor-chief',
  'blog-48-teams-format': 'analyst-betting',
  'blog-betting-guide': 'analyst-betting',
  'blog-messi-vs-mbappe': 'editor-chief',
  'blog-champion-prediction': 'editor-chief',
  'blog-messi-last-world-cup': 'editor-chief',
  'blog-ronaldo-last-wc': 'editor-chief',
  'blog-opening-match': 'analyst-tactics',
  'blog-group-of-death': 'analyst-tactics',
  'blog-broadcast-schedule': 'editor-chief',
  'blog-format-explained': 'analyst-tactics',
  'blog-theme-song': 'editor-chief',
  'blog-tickets': 'editor-chief',
  'blog-where-to-watch': 'editor-chief',
  'blog-asia-teams': 'analyst-tactics'
};

module.exports = { AUTHORS, ARTICLE_AUTHOR };
