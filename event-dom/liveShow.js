const container = document.querySelector(".girl");

const fetchLiveshow = async () => {
    const res = await fetch("https://phish.in/api/v2/shows?page=1&per_page=10&sort=date%3Adesc&audio_status=any&start_date=1970-01-01&end_date=2070-01-01?limit=6");
    console.log("res", res)
    const data = await res.json();
    console.log("data", data);
    const list = data.shows;
    console.log("list", list)
    container.innerHTML = "";

    list.forEach(item => {
        container.innerHTML += `
        <div class="card">
            <div class="img_container">
                <img src="${item.album_cover_url}">
            </div>
            <div class="card_content">
                <h2 class="title_img">${item.tour_name}</h2>
                <p class="venue_name">${item.venue_name}</p>
                 <p class="duration">khanh dep zai</p>
            </div>
        </div>
        `;
    });
};

fetchLiveshow();
