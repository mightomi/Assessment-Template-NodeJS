import jwt from "jsonwebtoken";

const createJwtToken = (user_id) => {
  const payload = {
    user_id
  }
  const token = jwt.sign(payload, "078e90b7-73f8-4291-93dc-dca65851d061", { expiresIn: "1d" })

  const jwtToken = {
    token: "Bearer " + token,
  }

  return jwtToken;
}

export {
  createJwtToken
}
