import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dtos/user.dto";

@Controller("users")
export class UsersController {
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    return { userData, msg: "User Created Successfully!" };
  }


  // @Post("/add-user")
  // createUser() {
  //   return { msg: "User Created Successfully!" };
  // }
  // @Post(":id")
  // createUser(@Param("id") id: string) {
  //   return { id, msg: "User Created Successfully!" };
  // }


  @Post("/abc")
  findByCity() {
    return {};
  }

  @Get("/abc")
  findByName(@Query("sortBy") sortBy: string, @Query("cityName") cityName: string) {
    return { sortBy, cityName, msg: "User filtered in ascending order and by city name!" };
  }

  // @Get()
  // findByName() {
  //   return { msg: "User founded!" };
  // }

  // @Patch()
  // updateUser() {
  //   return { msg: "User updated!" };
  // }

  // @Delete()
  // deleteUser() {
  //   return { msg: "User Deleted!" };
  // }




}
