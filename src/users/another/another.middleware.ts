import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AnotherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    // name === "asad" ? next() : "Please give correct name!"
    console.log("FirstMiddleware is called!");

    next()
  }
}
