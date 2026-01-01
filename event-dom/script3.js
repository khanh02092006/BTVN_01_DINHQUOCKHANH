const display = document.getElementById("display");

fetch("https://zelda.fanapis.com/api/characters?limit=10")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Lỗi HTTP: " + response.status);
        }
        return response.json();
    })
    .then((data) => {
        data.data.forEach((item) => {
            const card = document.createElement("div");
            card.className = "card";

            const name = document.createElement("h3");
            name.innerText = item.name;

            const race = document.createElement("div");
            race.className = "race";
            race.innerText = "Race: " + (item.race);

            const desc = document.createElement("p");
            desc.innerText = item.description;

            card.appendChild(name);
            card.appendChild(race);
            card.appendChild(desc);

            display.appendChild(card);
        });
    })
    .catch((err) => {
        console.error(err);
    });