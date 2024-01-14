import { NextFunction, Request, Response } from "express";

const authorize = (req: Request, res: Response, next: NextFunction) => {
  const id = req.header("app_auth_id");

  if (id != process.env.APP_AUTH_ID) {
    return res.sendStatus(401);
  }
  next();
};

export default authorize;
