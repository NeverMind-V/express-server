const express = require('express');
const app = express();

app.use(express.static('dist/'));
app.use(express.json());

let users = [
    {
        'id': 1,
        'name': 'User1',
        'age': 19
    },
    {
        'id': 2,
        'name': 'User2',
        'age': 25
    },
    {
        'id': 3,
        'name': 'User3',
        'age': 45
    }
];

app.get('/users', (req, res) => {
    res.json(users);
});
app.delete('/users', (req, res) => {
    users = users.filter( user => user.id !== req.body.user_id);
    res.json(users);
});

app.get('/test', (req, res) => {
    res.send('Test');
});

app.get('/posts', (req, res) => {
    res.status(400).send('user error');
});

app.listen(8080);