import express from 'express';
import cookieParser from 'cookie-parser';

import passport from 'passport';

const init = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(passport.initialize());
}

export {
  init
}
