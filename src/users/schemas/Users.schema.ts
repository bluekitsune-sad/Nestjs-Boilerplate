import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Users {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: false })
  displayname?: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
