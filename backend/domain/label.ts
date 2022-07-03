import { IEntity } from "./entity";
import { IHome } from "./home";

export interface ILabel extends IEntity {
  homeId: IHome['_id'];
  name: string;
  description: string;
  color: string;
}