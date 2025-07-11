function createFields() {
    fetch('https://cadrella-back.onrender.com/fields')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            console.log('Received data:', data);
            fields_data = data;


            // Reference to main content container
            const mainContent = document.getElementById('main_content');

            // Loop through each field and create the structure
            fields_data.forEach(fieldData => {
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
            p.innerHTML = `${fieldData.field_name} &nbsp; &rarr;`;

            nameSection.appendChild(p);

            field.appendChild(imageSection);
            field.appendChild(nameSection);

            field.addEventListener('click', () => {
                createCatalogues(fieldData.field_name);
            });

            mainContent.appendChild(field);
            });

        }, 1000)
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
});
}

createFields();
