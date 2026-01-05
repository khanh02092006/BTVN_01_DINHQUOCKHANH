async function fetchAnimol() {
    const res = await fetch("https://dogapi.dog/api/v2/breeds/036feed0-da8a-42c9-ab9a-57449b530b13");

    const json = await res.json();
    const breed = json.data.attributes;

    const cardHTML = `
            <div class="card">
                <div class="header">
                    <h1 id="breed-name">${breed.name}</h1>
                    <p id="breed-tagline">Playful and Intelligent Companion</p>
                </div>

                <div class="content">
                    <div class="info">
                        <p class="desc" id="breed-desc">
                            ${breed.description}
                        </p>

                        <div class="row">
                            <span><i class="fa-solid fa-heart" style="color: #d81818;"></i> Life Span</span>
                            <strong id="life-span">${breed.life.min} - ${breed.life.max} Years</strong>
                        </div>

                        <div class="row">
                            <span><i class="fa-solid fa-weight-hanging" style="color: #FFD43B;"></i> Weight</span>
                            <strong id="weight">${breed.male_weight.min} - ${breed.male_weight.max} kg (Male)</strong>
                        </div>

                        <div class="row">
                            <span><i class="fa-solid fa-shield" style="color: #74C0FC;"></i> Hypoallergenic</span>
                            <strong id="hypo">${breed.hypoallergenic}</strong>
                        </div>

                        <div class="row">
                            <span><i class="fa-solid fa-shoe-prints"></i> Group</span>
                            <strong id="group">${breed.group}</strong>
                        </div>

                        <div class="traits" id="traits">
                            <div><i class="fa-solid fa-brain" style="color: #FFD43B;"></i> Intelligent</div>
                            <div><i class="fa-solid fa-bolt-lightning" style="color: #FFD43B;"></i> Energetic</div>
                            <div><i class="fa-solid fa-heart" style="color: #d81818;"></i> Affectionate</div>
                            <div><i class="fa-solid fa-paw"></i> Small Game Hunter</div>
                        </div>
                    </div>

                    <div class="image">
                        <img src="https://tinhocnews.com/wp-content/uploads/2024/08/con-cho-vector-2.jpg" alt="${breed.name}">
                    </div>
                </div>
            </div>
        `;


    document.body.innerHTML = cardHTML;


}

fetchAnimol();