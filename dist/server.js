import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the 'dist' directory
app.use(express.static(path.resolve(__dirname, 'dist'))); // More robust path resolution

// Handle any other route by returning the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html')); // More robust path resolution
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
