import { app } from "./app.js";
import { dbConnect } from "./config/db.config.js";

const PORT = process.env.PORT;

async function bootstrap() {
  await dbConnect();
  console.log("DB CONNECTED SUCCESSFULLY");
  console.log("DB CONNECTED SUCCESSFULLY");
  console.log("DB CONNECTED SUCCESSFULLY");

  app.listen(PORT, () => {
    console.log("Express server has been initialized with port: " + PORT);
  });
}

void bootstrap();
