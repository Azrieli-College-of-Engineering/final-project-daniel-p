const expr = require ('express');
const app = expr();
const path = require('path');
let user_db =[]; // a db for all user
app.use(expr.urlencoded({ extended: true}));
// 1. 
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head><title>מערכת רישום מאובטחת</title></head>
        <body style="font-family: sans-serif; direction: rtl; text-align: center;">
            <h2>אנא הירשם למערכת</h2>
            <form action="/confirm" method="POST" style="display: inline-block; text-align: right;">
                מייל: <br><input type="email" name="email" id="email" required><br><br>
                שם משתמש: <br><input type="text" name="user" id="user" required><br><br>
                סיסמה: <br><input type="password" name="pass" id="pass" required><br><br>
                מיקוד: <br><input type="text" name="zip" id="zip" required><br><br>
                <button type="submit">שלח נתונים</button>
            </form>
        </body>
        </html>
    `);
});


// 2
app.post('/confirm', (req, res) => {
    const { email, user, zip ,pass} = req.body;
    user_db.push({user, email, pass, zip});
    let userList = user_db.map(u => {u.user}).join(' ');
    res.send(`
       <html>
        <body style="direction: rtl; text-align: center;">
            <h1>thanks:, ${user}!</h1>
            <p>we sent a email to : ${email}</p>
            <p>your zip:${zip}</p>
            <p>password:${pass}</p>
            <a href="/">חזור לדף הבית</a>
            <br><br><br>
            <hr><h3> want to know your friends?</h3>
            <div>${userList}</div> 
        </body>
        </html>

    `);
});

app.listen(3000, () => {
    console.log('server on : http://localhost:3000')});