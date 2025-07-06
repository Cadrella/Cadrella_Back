let catalogues_2 = document.getElementById('catalogues');

let clickOnChooseCatalogs = () => {

    if(styleOfWall) styleOfWall.remove();

    if(document.getElementById('catalogues_text').getAttribute("data-products_or_catalogues") == "products")
        return;

    if(document.getElementById('field_and_catalogs')) {
        document.getElementById('field_and_catalogs').remove();
        document.removeEventListener('click', fieldAndCatalogs);
        return;
    }

    setTimeout(() => {
        document.addEventListener('click', removeCatalogues);
    }, 0);

    // Create main section
    const fieldAndCatalogs = document.createElement("section");
    fieldAndCatalogs.id = "field_and_catalogs";

    // Create .field div
    const fields = document.createElement("div");
    fields.id = "fields";
    fieldAndCatalogs.appendChild(fields);

    for (let i = 0; i < fields_data.length; i++) {
        // Create .field div
        let field = document.createElement("div");
        field.className = "field";
        field.innerHTML = fields_data[i].field_name;
        field.setAttribute('data-field-name', fields_data[i].field_name);
        fields.appendChild(field);

        field.addEventListener('click', () => {
            clickOnField(fields_data[i].field_name);
        });
    }

    // Create .catalogs div
    const catalogs = document.createElement("div");
    catalogs.className = "catalogs";

    console.log(fields_data[0].field_name);

    /*document.querySelectorAll('.field').forEach((field) => {
        if(field.getAttribute('data-field-name') == fields_data[0].field_name) 
            field.classList.add('active');
    })*/

    for (let j = 0; j < catalogs_data.length; j++) {
        if(catalogs_data[j].field_name != fields_data[0].field_name) {
            console.log(`It doesn't match`);
            continue;
        };
        
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
        catalogs.appendChild(catalog);

        catalog.addEventListener('click', () => {
            clickOnCatalog(catalogs_data[j].catalog_name);
        });

        }
    // Append catalogs to main section
    fieldAndCatalogs.appendChild(catalogs);

    // Append everything to body
    if(document.getElementById('all_content'))
        document.getElementById('all_content').appendChild(fieldAndCatalogs);
}

catalogues_2.addEventListener('click', (event) => {
    event.stopPropagation();
    clickOnChooseCatalogs();
});