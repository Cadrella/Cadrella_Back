let fields_data;
let catalogs_data;
let products_data;

fetch('http://localhost:3000/fields')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            console.log('Received data:', data);
            fields_data = data;
        }, 1000)
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


fetch('http://localhost:3000/catalogs')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            console.log('Received data:', data);
        }, 1000)
        catalogs_data = data;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            console.log('Received data:', data);
        }, 1000)
        products_data = data;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });