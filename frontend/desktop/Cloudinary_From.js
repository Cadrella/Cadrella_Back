const cloudinary = require('cloudinary').v2;

(async function() {
    // Cloudinary configuration
    cloudinary.config({ 
      cloud_name: 'dcorvb30c', 
      api_key: '458852964626743', 
      api_secret: '5oCK7baiPPM_EW-iVnxVoKcUbWc' 
    });

  // Upload an image from URL with a custom public_id
  const uploadResult = await cloudinary.uploader
    .upload('https://res.cloudinary.com/dcorvb30c/image/upload/f_auto,q_auto/Frame_Square?_a=BAMAJaRg0', { // The URL of the image
      public_id: 'Frame_Square', // Custom ID you want
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
