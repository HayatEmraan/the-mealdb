const a = async (x) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`;
    const b = await fetch(url)
    const c = await b.json()
    const d = z(c.meals);
}

const z = y => {;
    const vz = document.getElementById("fav-container");
    vz.innerHTML = "";
    y.forEach(x => {
        const dz = document.createElement("div");
        dz.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${x.strMealThumb}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${x.strMeal}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button onclick = "zj(${x.idMeal})" class = "border-0 bg-transparent" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style = "color: #FFC107;">View Details</button>
                    </div>
                </div>
            </div>
        </div> 
        `;
        vz.appendChild(dz);
    })
}

document.getElementById("search-btn").addEventListener('click', function () {
    const sh = document.getElementById("search").value;
    a(sh);
})

const zj = x => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => tj(data.meals[0]));
}
const tj = z => {
    console.log(z);
    document.getElementById("staticBackdropLabel").innerText = z.strMeal;
    const bd = document.getElementById("modal-body");
    const img = document.createElement('article');
    img.innerHTML = `
    <img src="${z.strMealThumb}" class="img-fluid rounded-start" alt="...">
    <p>Category: ${z.strCategory}</p>
    <h5>Instructions: ${z.strInstructions}</h5>
    <p>Youtube: ${z.strYoutube}</p>
    `;
    bd.appendChild(img);
}

a('fish');