import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import viewController from "./controllers/viewController.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = process.env.PORT || 32;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.set("/views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static("public", { 
    setHeaders: (res, path) => {
        if (path.endsWith(".css")) {
            res.setHeader("Content-Type", "text/css");
        }
    }
}));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "script-src 'self' https://kit.fontawesome.com");
    next();
});

app.get("/", viewController.getViewCommands);
app.get("/bash", viewController.getViewBash);
app.get("/tips", viewController.getViewTips);


app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
})

