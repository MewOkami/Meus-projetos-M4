import express, { Application, json } from "express";
import logics from "./logics";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.post("/products", middlewares.uniqueName, logics.create);
app.get("/products", logics.readProduct);

app.get("/products/:id", middlewares.idExists, logics.retrieve);
app.delete("/products/:id", middlewares.idExists, logics.destroy);
app.patch(
  "/products/:id",
  middlewares.uniqueName,
  middlewares.idExists,
  logics.partialUpdate
);

const PORT: number = 3000;
app.listen(PORT, (): void => {
  console.log(`Application is running on port: ${PORT}`);
});
