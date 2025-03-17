import { createJwtToken } from "../utils/jwt.js";
import { responder } from "../utils/index.js";

const login = async (req, res, next) => {
  const jwtToken = createJwtToken("sample_user_id")
  responder(res, jwtToken);
}

const register = async (req, res, next) => {
  console.log('called signup')
}

const forgot_password = async (req, res, next) => {
  console.log('forgot_password');
}

export {
  login,
  register, 
  forgot_password
}
