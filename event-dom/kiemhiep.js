const container = document.querySelector(".container");

const sidebarHTML = (list) => {
    let HTML = "";
    list.forEach((item, index) => {
        HTML += `
      <div class="story-item">
        <div class="rank-number">${index + 1}</div>
        <div class="story-info">
          <div class="story-name">${item.name}</div>
          <div class="story-tags">${item.description}</div>
        </div>
      </div>
    `;
    });
    return HTML;
};

const renderLayout = (first, sidebarHtmlString) => {
    container.innerHTML = `
    <div class="left-sidebar">
      <img src="https://genk.mediacdn.vn/k:2016/1-1465352650525/5-ly-do-khien-soai-ca-kiem-hiep-duoc-van-nguoi-me.jpg"
        alt="Vạn Cổ Đệ Nhất Thần" class="book-cover">
      <div class="author-info">
        <div class="author-label">Tác giả:</div>
        <div class="author-name">Phong Thanh Dương</div>
      </div>
    </div>

    <div class="main-content">
      <div class="content-header">THÔNG TIN TRUYỆN:</div>
      <h1 class="story-title">${first.name}</h1>

      <div class="story-intro">${first.description}</div>
      <div class="section-title">Giới thiệu nội dung:</div>

      <div class="dialogue">
        "Diễn nhì, Tiểu Thiên Nhất, bên này."
      </div>
    </div>

    <div class="right-sidebar">
      <div class="sidebar-title">TOP Truyện Đề Cử</div>
      ${sidebarHtmlString}
    </div>
  `;
};

async function fetchCharacters() {
    const res = await fetch("https://zelda.fanapis.com/api/characters?limit=10");
    const data = await res.json();
    const list = data.data;

    const first = list[0];
    const sidebar = sidebarHTML(list.slice(1));

    renderLayout(first, sidebar);
}

fetchCharacters();
