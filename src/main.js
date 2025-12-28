import './style.css'

console.log('MangaGallery v0.1 loaded.');

const worksGrid = document.querySelector('.works-grid');

// Hardcoded Note Metadata (With Actual Thumbnails)
const noteArticles = [
  {
    title: "【検証】スマホの写真だけで「レポ漫画」は作れるのか？ 京都の伝説サウナ「餃子湯」で試してみた",
    url: "https://note.com/kino_11/n/na421aec3b350",
    thumbnail: "https://assets.st-note.com/production/uploads/images/235201138/rectangle_large_type_2_494c2e4cf4034a49d1aa9cf8acf9c86a.png?fit=bounds&quality=85&width=1280"
  },
  {
    title: "【AI漫画】深淵なる資産（マナ）の枯渇、あるいは730日の黙示録（アポカリプス）",
    url: "https://note.com/kino_11/n/n39bb5b1c6deb",
    thumbnail: "https://assets.st-note.com/production/uploads/images/236779454/rectangle_large_type_2_606cfd87fe14ac48681efff2f21fdd54.png?fit=bounds&quality=85&width=1280"
  },
  {
    title: "【AI漫画】暴走する知性を縛れ ― バイブコーディングAI拘束録 ―",
    url: "https://note.com/kino_11/n/n23119dad3cc1",
    thumbnail: "https://assets.st-note.com/production/uploads/images/236981873/rectangle_large_type_2_4eafce2220f8da0703fabb4095de7440.png?fit=bounds&quality=85&width=1280"
  },
  {
    title: "如月千早『約束』。絶望から希望へ──220円で観られる、人生を変える20分【AI漫画】",
    url: "https://note.com/kino_11/n/n2894f8cafef2",
    thumbnail: "https://assets.st-note.com/production/uploads/images/237532323/rectangle_large_type_2_db5c5d5836c5d4575560dc9af5c8cef9.png?fit=bounds&quality=85&width=1280"
  },
  {
    title: "【AI漫画】Gitが怖くなくなる。漫画で理解するWeb公開の基本",
    url: "https://note.com/kino_11/n/n661863c1184f",
    thumbnail: "https://assets.st-note.com/production/uploads/images/238823401/rectangle_large_type_2_d1fd2fe5dd6fa83f2eabfbfd2cc52b33.png?fit=bounds&quality=85&width=1280"
  }
];

// Clear existing content
if (worksGrid) {
  worksGrid.innerHTML = '';
}

noteArticles.forEach((article) => {
  const card = document.createElement('article');
  card.className = 'work-card';

  card.innerHTML = `
    <div class="work-thumb" style="position: relative; overflow: hidden; height: 180px;">
       <img src="${article.thumbnail}" alt="" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; display: block;">
    </div>
    <div class="work-content">
      <h4 style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 3em; margin-bottom: 0.5rem; line-height: 1.5;">${article.title}</h4>
      <a href="${article.url}" target="_blank" class="btn btn-primary" style="font-size: 0.8rem; width: 100%; text-align: center; margin-top: auto;">Noteで読む</a>
    </div>
  `;

  if (worksGrid) {
    worksGrid.appendChild(card);
  }
});
