const http = require('http');
const { createClient } = require('@supabase/supabase-js');
const cloudinary = require('cloudinary').v2;

const path = require('path');

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY; // trimmed for safety
const supabase = createClient(supabaseUrl, supabaseKey);

// JSON Response Helper
function writeJSON(res, statusCode, data) {
    setCORSHeaders(res);
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

// Set CORS headers
function setCORSHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Supabase helpers
async function supabaseGetFieldsJSON() {
    const { data, error } = await supabase.from('fields').select('*');
    if (error) {
        console.error('Error fetching fields:', error.message);
        return null;
    }
    return data;
}

async function supabaseGetCatalogsJSON() {
    const { data, error } = await supabase.from('catalogs').select('*');
    if (error) {
        console.error('Error fetching catalogs:', error.message);
        return null;
    }
    return data;
}

async function supabaseGetProductsJSON() {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('product_id', { ascending: true });

    if (error) {
        console.error('Error fetching products:', error.message);
        return null;
    }
    return data;
}

// Main HTTP server (not async!)
const server = http.createServer((req, res) => {
    setCORSHeaders(res);

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'GET') {
        switch (req.url) {
            case '/': {
                const userAgent = req.headers['user-agent'] || '';
                const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent);

                const filePath = isMobileDevice
                    ? path.join(__dirname, 'frontend/mobile/index.html')
                    : path.join(__dirname, 'frontend/desktop/index.html');

                fs.readFile(filePath, (err, data) => {
                    if (err) {
                    res.writeHead(500);
                    res.end('Internal Server Error');
                    return;
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                });
            }

            case '/fields': {
                (async () => {
                    const data = await supabaseGetFieldsJSON();
                    if (data) writeJSON(res, 200, data);
                    else writeJSON(res, 500, { error: 'Failed to fetch fields' });
                })();
                break;
            }

            case '/catalogs': {
                (async () => {
                    const data = await supabaseGetCatalogsJSON();
                    if (data) writeJSON(res, 200, data);
                    else writeJSON(res, 500, { error: 'Failed to fetch catalogs' });
                })();
                break;
            }

            case '/products': {
                (async () => {
                    const data = await supabaseGetProductsJSON();
                    if (data) writeJSON(res, 200, data);
                    else writeJSON(res, 500, { error: 'Failed to fetch products' });
                })();
                break;
            }

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
        }
    }

    else if (req.method === 'POST') {
        switch (req.url) {
            case '/order': {
                let body = '';
                req.on('data', chunk => { body += chunk; });
                req.on('end', () => {
                    try {
                        const formObject = JSON.parse(body);
                        console.log('Received Order:', formObject);
                        writeJSON(res, 200, { message: 'Order received' });
                        insertProductsOrder(formObject);
                    } catch {
                        writeJSON(res, 400, { error: 'Invalid JSON' });
                    }
                });
                break;
            }

            case '/personalize': {
                let body = '';
                req.on('data', chunk => { body += chunk; });
                req.on('end', () => {
                    (async () => {
                        try {
                            const formObject = JSON.parse(body);
                            const imageUrl = await uploadBase64Image(formObject.image_input);
                            writeJSON(res, 200, { message: 'Personalized order received' });
                            insertPersonalizeOrder(formObject, imageUrl);
                        } catch {
                            writeJSON(res, 400, { error: 'Invalid JSON' });
                        }
                    })();
                });
                break;
            }

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
        }
    }
});

/*server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});*/

server.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});


// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadBase64Image(base64) {
    const result = await cloudinary.uploader.upload(base64);
    return result.secure_url;
}

async function insertPersonalizeOrder(orderData, imageUrl) {
    const { error } = await supabase.from('personalized_orders').insert([{
        customer_first_name: orderData.first_name,
        customer_last_name: orderData.last_name,
        customer_email: orderData.email,
        customer_phone_num: orderData.phone,
        customer_address: orderData.address,
        personalized_image: imageUrl,
        quantity: orderData.quantity
    }]);

    if (error) console.error('Insert failed:', error);
}

async function insertProductsOrder(orderData) {
    const { error } = await supabase.from('products_orders').insert([{
        customer_first_name: orderData.first_name,
        customer_last_name: orderData.last_name,
        customer_email: orderData.email,
        customer_phone_num: orderData.phone,
        customer_address: orderData.address,
        quantity: orderData.quantity,
        product_id: orderData.product_id
    }]);

    if (error) console.error('Insert failed:', error);
}
