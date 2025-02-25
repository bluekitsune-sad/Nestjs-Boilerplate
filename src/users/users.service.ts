import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/Users.schema';
import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/CreateUsers.dto';
import { UpdateUsersDto } from './dto/UpdateUsers.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private userModel: Model<Users>,
    ) {}

    createUser(createUserDto: CreateUsersDto) {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    getUsers() {
        return this.userModel.find();
    }

    getUserById(id: string) {
        return this.userModel.findById(id);
    }

    updateUser(id: string, updateUserDto: UpdateUsersDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }
}
