import { IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './CreateUsers.dto';
export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
