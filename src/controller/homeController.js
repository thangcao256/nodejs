import pool from "../configs/connectDB"

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * from `users`');
    return res.render('index.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let userId = req.params.userId;
    let user = await pool.execute('SELECT * from users where id = ?', [userId]);
    console.log("id: ", user[0])
    return res.send(JSON.stringify(user[0]))
}

let createNewUser = async (req, res) => {
    // let firstName = req.body.firstName
    let { firstName, lastName, email, address } = req.body;

    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.redirect('/')
    // return res.send(req.body)
}

module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser
}