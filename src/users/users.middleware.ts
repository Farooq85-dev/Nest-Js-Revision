import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException("No tokens found!", HttpStatus.BAD_GATEWAY);
    }

    if (authorization === "farooq") {
      console.log("Test is passed!");
      next()
    }
    else {
      throw new HttpException("Invlaid Token!", HttpStatus.BAD_GATEWAY);
    }
  }
}
