import passport from 'passport';

import {
  Strategy as JwtStrategy,
  ExtractJwt
} from "passport-jwt";


// ---- Jwt Auth -----
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "078e90b7-73f8-4291-93dc-dca65851d061"
}

const jwtStrategy = new JwtStrategy(jwtOpts, async (jwt_payload, done) => {
  console.log(jwtOpts)
  return done(null, {id: 213});
});

passport.use(jwtStrategy);

const jwtAuth = passport.authenticate('jwt', {
  session: false,
});

export {
  jwtAuth
}
