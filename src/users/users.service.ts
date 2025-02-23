import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/Users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private userModel: Model<Users>,
    ) {}

}
