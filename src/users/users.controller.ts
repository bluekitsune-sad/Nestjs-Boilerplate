import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/CreateUsers.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    // @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUsersDto) {
        return this.usersService.createUser(createUserDto);
    }
}
