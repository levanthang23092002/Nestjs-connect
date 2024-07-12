import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Users {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  passwork: string;
}
export const UsersSchema = SchemaFactory.createForClass(Users);
