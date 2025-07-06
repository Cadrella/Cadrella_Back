const http = require('http');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabaseUrl = 'https://ijhvfampizuvqwjwtyqt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqaHZmYW1waXp1dnF3and0eXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNjk2MTQsImV4cCI6MjA2MDc0NTYxNH0.vyRMSFf7fAOSAFxilMZipIHqzg-1xbn5OnsZZhk7CaM'
const supabase = createClient(supabaseUrl, supabaseKey);

// Define the async function
async function supabaseGetJSON() {
    const { data, error } = await supabase
      .from('catalogs')
      .select('*');
  
    if (error) {
      console.error('Error fetching data:', error.message);
      return null;
    }
  
    console.log('Products:', data);
    return data;
  }
  
const server = http.createServer(async (req, res) => {

    // Add CORS headers to allow requests from any origin (you can replace * with a specific domain if needed)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET' && req.url === '/data') {
    let data = await supabaseGetJSON();
    console.log('this is the data:' + data);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3001, () => {
  console.log('Server is listening on http://localhost:3001');
});
