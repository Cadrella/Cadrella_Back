const cloudinary = require('cloudinary').v2;
const fs = require('fs'); // Required for local file upload
const path = require('path'); // To work with file paths


(async function() {
  // Cloudinary configuration
  cloudinary.config({ 
    cloud_name: 'dcorvb30c', 
    api_key: '458852964626743', 
    api_secret: '5oCK7baiPPM_EW-iVnxVoKcUbWc' 
  });

  // Uploading a local image
  const uploadResult = await cloudinary.uploader
    .upload(path.join(__dirname, 'Arrow_Left.png'), { // The path to your local file
      public_id: 'Arrow', // Optionally, specify a public_id
    })
    .catch((error) => {
      console.log('Upload error:', error);
    });

  console.log('Uploaded image details:', uploadResult);

  // Optimized URL (auto format and quality)
  const optimizedUrl = cloudinary.url('Arrow', {
    fetch_format: 'auto',
    quality: 'auto',
  });
  console.log('Optimized URL:', optimizedUrl);

})();
