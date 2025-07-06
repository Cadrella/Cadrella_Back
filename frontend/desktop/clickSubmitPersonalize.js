const clickOnSubmitPersonalize = async (event) => {
    styleOfWall?.remove();  // Optional chaining for safe removal

    const fileInput = document.getElementById('image_input');
    const formElement = document.getElementById('products_container');

    if (fileInput.files.length === 0) {
        alert('Please select a file before submitting!');
        console.log('No file selected.');
        return false;
    }

    if (!formElement.checkValidity()) return;

    const formData = new FormData(formElement);
    let formObject = Object.fromEntries(formData.entries());
    const imageFile = formData.get('image_input');

    //console.log(imageFile);

    if (imageFile instanceof Blob) {
        try {
            const base64Image = await convertToBase64(imageFile);
            formObject.image_input = base64Image;

            // Now send it
            fetch('http://localhost:3000/personalize', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formObject)
            })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));

        } catch (error) {
            console.error('Error converting image to Base64:', error);
        }
    } else {
        console.warn('No image selected or wrong type');
    }

    console.log("This is the personalizing form data", formObject);
};

// Helper function to convert image to Base64
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
