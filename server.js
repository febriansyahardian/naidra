const express = require('express');
const path = require('path'); // Tambahan penting
const app = express();
const port = process.env.PORT || 3000;

// 🟢 Serve file static dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 🟢 Setup EJS dan views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 🔵 Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
