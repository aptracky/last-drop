import app from "./src/server/server";
import "dotenv/config.js";

//Variables
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[INFO] Server is running on http://localhost:${port}`);
});
