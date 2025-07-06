const http = require('http');
const cloudinary = require('cloudinary').v2;
const { createClient } = require('@supabase/supabase-js');

// Supabase config from environment variables
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Cloudinary config from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create HTTP server
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method === 'POST') {
    switch (url) {
      case '/order': {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
          try {
            const formObject = JSON.parse(body);
            console.log('Received Form Object:', formObject);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Form received successfully!' }));

            insertProductsOrder(formObject);
          } catch (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid JSON data' }));
          }
        });
        break;
      }

      case '/personalize': {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
          try {
            const formObject = JSON.parse(body);
            console.log('Received Personalize Form:', formObject);

            const imageUrl = await uploadBase64Image(formObject.image_input);
            await insertPersonalizeOrder(formObject, imageUrl);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Personalized form received!' }));
          } catch (error) {
            console.error('Personalize error:', error);
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid JSON data' }));
          }
        });
        break;
      }

      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Helpers

async function uploadBase64Image(base64) {
  const result = await cloudinary.uploader.upload(base64);
  return result.secure_url;
}

async function insertPersonalizeOrder(orderData, imageUrl) {
  const { data, error } = await supabase
    .from('personalized_orders')
    .insert([{
      customer_first_name: orderData.first_name,
      customer_last_name: orderData.last_name,
      customer_email: orderData.email,
      customer_phone_num: orderData.phone,
      customer_address: orderData.address,
      personalized_image: imageUrl,
      quantity: orderData.quantity
    }]);

  if (error) console.error('Insert Error (Personalize):', error);
  else console.log('Insert Success (Personalize):', data);
}

async function insertProductsOrder(orderData) {
  const { data, error } = await supabase
    .from('products_orders')
    .insert([{
      customer_first_name: orderData.first_name,
      customer_last_name: orderData.last_name,
      customer_email: orderData.email,
      customer_phone_num: orderData.phone,
      customer_address: orderData.address,
      quantity: orderData.quantity,
      product_id: orderData.product_id
    }]);

  if (error) console.error('Insert Error (Product):', error);
  else console.log('Insert Success (Product):', data);
}
