const userInput = req.query.id;
const query = `SELECT * FROM users WHERE id = ${userInput}`;
