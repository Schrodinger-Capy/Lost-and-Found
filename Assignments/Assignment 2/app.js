const express = require('express');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config();

const app = express();
const itemRoutes = require('./routes/itemRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/items', itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
