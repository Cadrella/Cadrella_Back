const cloudinary = require('cloudinary').v2;

let url = products_data[0].product_image;

    (async function() {
        // Cloudinary configuration
        cloudinary.config({ 
          cloud_name: 'dcorvb30c', 
          api_key: '458852964626743', 
          api_secret: '5oCK7baiPPM_EW-iVnxVoKcUbWc' 
        });
    
      // Upload an image from URL with a custom public_id
      const uploadResult = await cloudinary.uploader
        .upload(url, { // The URL of the image
            //products_data[0].product_image
            //public_id: '', // Custom ID you want
        })
        .catch((error) => {
          console.log('Upload error:', error);
        });
    
      console.log('Uploaded image details:', uploadResult);
    
      // Generate the optimized URL for this image
      const optimizedUrl = cloudinary.url('Frame_Square', {
        fetch_format: 'auto',
        quality: 'auto',
      });
      console.log('Optimized URL:', optimizedUrl);
    })();