const express = require('express');
const path = require('path'); // <--- ini penting
const app = express();
const port = process.env.PORT || 3000; // untuk Vercel, pakai port dari environment

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set path views secara eksplisit
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`<h2>Thanks, ${req.body.name}! Your message has been received.</h2>`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
