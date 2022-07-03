import { IEntity } from "./entity";
import { IHome } from "./home";
import { ILabel } from "./label";
import { TType } from "./type";
import { IUser } from "./user";

export interface IItem extends IEntity{
  homeId: IHome['_id'];
  createdByUserId: IUser['_id'];
  relatedToUserId: IUser['_id'];
  labelIds: ILabel['_id'][];
  onDate: Date;

  name: string;
  description: string;
  amount: number;
  
  typeId: TType;
}