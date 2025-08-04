const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`<h2>Thanks, ${req.body.name}! Your message has been received.</h2>`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
