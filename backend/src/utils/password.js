const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;


// Hash password before saving to database
async function hashPassword(password) {
    return await bcrypt.hash(password, SALT_ROUNDS);
}


// Compare entered password with stored hash
async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}


module.exports = {
    hashPassword,
    comparePassword
};