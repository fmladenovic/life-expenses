import { IEntity } from "./entity";
import { TGender } from "./gender";
import { IHome } from "./home";

export interface IUser extends IEntity {
  name: string;
  imageURL?: string;
  gender: TGender;
  homeIds: IHome['_id'][]
}