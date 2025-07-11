function createCatalogues(field_name) {
    fetch('https://cadrella-back.onrender.com/catalogs')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            console.log('Received data:', data);
            catalogs_data = data;

            document.querySelectorAll('.field').forEach(el => el.remove());
            document.querySelectorAll('#Caption').forEach(el => el.remove());
            document.querySelectorAll('#Thumbnail').forEach(el => el.remove());

            history.pushState({page: 'catalogs'}, '', '/catalogs');

            // Reference to main content container
            const mainContent = document.getElementById('main_content');

            // Loop through each field and create the structure
            catalogs_data.forEach(catalogData => {
            if(catalogData.field_name !== field_name) return;

            const field = document.createElement('section');
            field.className = 'field';

            const imageSection = document.createElement('section');
            imageSection.className = 'image_section';

            const img = document.createElement('img');
            img.src = 'Frame.png'; // Replace with the actual image path
            img.className = 'field_image';
            img.alt = 'Field Image';

            imageSection.appendChild(img);

            const nameSection = document.createElement('section');
            nameSection.className = 'field_name_section';

            const p = document.createElement('p');
            p.className = 'field_name';
            p.innerHTML = `${catalogData.catalog_name} &nbsp; &rarr;`;

            nameSection.appendChild(p);

            field.appendChild(imageSection);
            field.appendChild(nameSection);

            field.addEventListener('click', () => {
                createCatalogues();
            });

            mainContent.appendChild(field);
            });

        }, 1000);
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
