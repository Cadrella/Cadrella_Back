let clickOnSubmitOrder = async (event) => {
    if(styleOfWall) styleOfWall.remove();

    if(!document.getElementById('form_container_order').checkValidity()) return;

    const formElement = document.getElementById('form_container_order');
    const formData = new FormData(formElement);

    let formObject = {};

    // Build the formObject and extract the File instance
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const product_id = document.querySelector('.product_img').getAttribute('data-product-id');

    formObject.product_id = product_id;

    let stringifiedFormObject = JSON.stringify(formObject);

    console.log("This is the ordering form data", formObject);

    // Now send it
    fetch('https://cadrella-back.onrender.com/order', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: stringifiedFormObject
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}
