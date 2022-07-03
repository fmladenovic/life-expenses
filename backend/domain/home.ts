import { IEntity } from "./entity";

export interface IHome extends IEntity {
  name: string;
  description: string;
  imageURL: string;
}
