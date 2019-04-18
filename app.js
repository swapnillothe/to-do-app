const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('to-do-app-react/build'));

app.get('/todo', (req, res) => {
    
    res.send('Todo App');
});

app.listen(PORT, () => {
    console.log(`server is listening ${PORT}`);
});
