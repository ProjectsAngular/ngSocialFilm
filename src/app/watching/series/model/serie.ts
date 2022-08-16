import {Season} from "../../seasons/model/season";
import {Category} from "../../categories/model/category";

export interface Serie{
  id:number,
  title:string,
  synopsis:string,
  category:Category,
  seasons:Array<Season>
}
