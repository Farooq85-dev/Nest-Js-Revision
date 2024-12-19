import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersMiddleware } from "./users.middleware";
import { AnotherMiddleware } from "./another/another.middleware";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AnotherMiddleware, UsersMiddleware).forRoutes({
      path: "/users/abc",
      method: RequestMethod.POST,
    });
  }
}
