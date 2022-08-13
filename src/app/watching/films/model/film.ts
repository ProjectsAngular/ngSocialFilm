import {Category} from "../../categories/model/category";
import {Video} from "../../videos/model/video";

export interface Film{
  id:number,
  title:string,
  synopsis:string,
  category:Category,
  video:Video
}
