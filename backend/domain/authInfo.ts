import { IEntity } from "./entity";
import { IUser } from "./user";

export interface IAuthInfo extends IEntity {
  userId: IUser['_id'];
  email: string;
  passwordHash?: string;
  facebookToken?: string;
}