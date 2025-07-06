let fields_data;
let catalogs_data;
let products_data;

fetch('https://cadrella-back.onrender.com/fields')
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


fetch('https://cadrella-back.onrender.com/catalogs')
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


fetch('https://cadrella-back.onrender.com/products')
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
