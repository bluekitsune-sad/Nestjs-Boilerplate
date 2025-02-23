import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/Users.schema';
import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/CreateUsers.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private userModel: Model<Users>,
    ) {}

    createUser(createUserDto: CreateUsersDto) {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

}
