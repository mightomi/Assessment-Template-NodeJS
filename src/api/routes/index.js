import { criticalData } from "../controllers/criticalDataController.js";
import { login, register, forgot_password } from "../controllers/authController.js";

import { jwtAuth } from '../../config/passport_auth.js';


const init = (app) => {
	app.get("/api/v1/critical_data", jwtAuth, criticalData);
	app.post("/api/v1/login", login);
	app.post("/api/v1/register", register);
	app.post("/api/v1/forgot_password", forgot_password);
}

export {
  init
}
