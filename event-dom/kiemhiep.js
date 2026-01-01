const container = document.querySelector(".container");

async function fetchCharacters() {
    const res = await fetch("https://zelda.fanapis.com/api/characters?limit=10");
    const data = await res.json();
    const list = data.data;

    const first = list[0];

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

    const renderLayout = (first, sidebarHTML) => {
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

            <div class="story-description">
                <p style="margin-bottom: 15px;">An Tuyệt Thiên như là hòa tan đông tuyết, kêu vô cùng thân mật, còn
                    ngoặc.</p>

                <div class="dialogue">
                    "'Cất. Không biết xấu hổ." Ngụy Ôn Lan trợn mắt một cái, thầm thầm mắng một câu.
                </div>

                <p style="margin-bottom: 15px;">"Đồng cảm." An Ninh cũng nói.</p>

                <p style="margin-bottom: 15px;">Tựa hồ tại chặn ghét hai nữ nhân này phương diện, mẹ con các nàng lại đã
                    đạt thành nhất trí.</p>

                <p style="margin-bottom: 15px;">Lâm Mộc Đông Diễn cũng An Thiên Nhất đến lúc, tại chỗ 3000 bộ lạc dự
                    tiệc người, cơ hồ đều ngưng tư minh nói chuyện với nhau, mắt lộ ra vẻ sùng kính, nhìn về phía cái
                    này quy phục cũng qúy tứ.</p>

                <div class="dialogue">
                    "Cô cổ." Mộc Đông Diễn ôn nhu mỉm cười, thanh âm rất để nghe, cũng làm cho rất thân mật, mang theo
                    thiếu niên kia An Thiên Nhất, leo lên Tuyệt Tỉnh hào.
                </div>

                <p>"Thiên Nhất." An Sương, An Huyền Minh, An Như Yên chờ Cổ bảng thiên tài, đều hướng thiếu niên tóc
                    vàng kia gật đầu.</p>
            </div>
    </div>

    <div class="right-sidebar">
      <div class="sidebar-title">TOP Truyện Đề Cử</div>
      ${sidebarHTML}
    </div>
  `;
    };

    const sidebar = sidebarHTML(list.slice(1));
    renderLayout(first, sidebar);
}

fetchCharacters();
