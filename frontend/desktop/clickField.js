function clickOnField(field_name) {
    if(styleOfWall) styleOfWall.remove();
    
    document.querySelectorAll('.catalog').forEach((catalog) => {
        catalog.remove();
    })

    document.querySelectorAll('.field').forEach((field) => {
        if(field.classList[1] == 'active') {
            field.classList.remove('active');
            field.classList.add('inactive');
        }
    })

    //if(this.classList.length = 2 && this.classList[1] == 'inactive') this.classList.remove('inactive');
    //console.log(document.querySelectorAll(`[data-field-name="${field_name}"]`).classList);
    //document.querySelectorAll(`[data-field-name="${field_name}"]`).classList.add('active');

    for (let j = 0; j < catalogs_data.length; j++) {
        if(catalogs_data[j].field_name != field_name) {
            console.log(`It doesn't match`);
            continue;
        };

        console.log(`It does match`);
        // Create .catalog section
        const catalog = document.createElement("section");
        catalog.className = "catalog";

        // Create .catalog_image div
        const catalogImage = document.createElement("div");
        catalogImage.className = "catalog_image";
        const catalog_image = document.createElement('img');
        catalog_image.src = catalogs_data[j].catalog_image;
        //catalog_image.style.height = '90px';
        catalog_image.style.width = '115px';
        catalogImage.appendChild(catalog_image);

        // Create .catalog_name div
        const catalogName = document.createElement("div");
        catalogName.innerHTML = catalogs_data[j].catalog_name;
        catalogName.className = "catalog_name";

        // Append image and name to catalog section
        catalog.appendChild(catalogImage);
        catalog.appendChild(catalogName);

        // Append catalog to catalogs
        document.querySelector('.catalogs').appendChild(catalog);

        catalog.addEventListener('click', () => {
            clickOnCatalog(catalogs_data[j].catalog_name);
        });

        }
    // Append catalogs to main section
    const catalogs = document.querySelector('.catalogs');
    document.getElementById('field_and_catalogs').appendChild(catalogs);
}
