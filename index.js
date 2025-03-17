import express from 'express';

import * as middleware from "./src/api/middlewares/index.js";
import * as routes from "./src/api/routes/index.js";
import * as server from "./src/server.js"

const app = express();

middleware.init(app);
routes.init(app);
await server.init(app);
