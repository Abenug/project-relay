const app = require("./app");
const pool = require("./config/database");

const PORT = 3000;


pool.query("SELECT NOW()", (error, result) => {
    if (error) {
        console.log("Database connection failed ❌");
        console.error(error);
    } else {
        console.log("Database connected successfully ✅");
        console.log(result.rows);
    }
});


app.listen(PORT, () => {
    console.log(`Project Relay backend running on port ${PORT}`);
});