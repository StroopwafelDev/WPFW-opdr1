const showRoom = document.querySelector(".showroom")
const categorySelect = document.querySelector(".category-select")




function showProjects() {
    fetch("/projecten.json")
        .then(myData => myData.json())
        .then(jsonData => createCard(jsonData));
}


function createCard(data) {
    console.log(categorySelect.value);
    let prepared = ``
    data.forEach(project => {
        if (categorySelect.value == "All") {
            prepared += `
        
            <div class="card">
                <h3 class="card-header">
                    ${project.titel}
                </h3>
                <p class="card-body">
                    ${project.beschrijving}    
                </p>
                <h4>Categoriën</h4>
                <ul>`
            project.categoriën.forEach(categorie => {
                prepared += `<li>${categorie}</li>`
            });
            prepared += `</ul>
            </div>

        `;
        } else {
            project.categoriën.forEach(category => {
                if (category == categorySelect.value) {
                    prepared += `
        
            <div class="card">
                <h3 class="card-header">
                    ${project.titel}
                </h3>
                <p class="card-body">
                    ${project.beschrijving}    
                </p>
                <h4>Categoriën</h4>
                <ul>`
                    project.categoriën.forEach(categorie => {
                        prepared += `<li>${categorie}</li>`
                    });
                    prepared += `</ul>
            </div>

        `;
                    
                }
            });
        }
    });

    showRoom.innerHTML = prepared

}

showProjects();