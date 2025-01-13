import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

const distPath = path.resolve(__dirname, 'dist');
console.log('Serving static files from:', distPath); // Debugging log

app.use(express.static(distPath));

app.get('*', (req, res) => {
  const indexPath = path.resolve(__dirname, 'dist', 'index.html');
  console.log('Sending index.html from:', indexPath); // Debugging log
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
