const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4006;

app.use(bodyParser.urlencoded({ extended: true }));

let user = [];


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/registration.html');
});

app.post('/register', (req, res) =>{
    const { username, email, password } = req.body;

    user.push({ username, email, password });

    res.redirect('/registered');
});

app.get('/registered', (req, res) => {
    let userList = '<h2>Registered Users:</h2><ul>';
    user.forEach(user => {
        userList += `<li>Username: ${user.username}, Email: ${user.email}, Password: ${user.password}</li>`;
    });
    userList += '</ul>';
    res.send(userList);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

/* app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'registration.html'));
})


app.listen(port, ()=>{
    console.log(`Server App Listening at http://localhost:${port}`);
}); */