import {Season} from "../../seasons/model/season";
import {Category} from "../../categories/model/category";
import {BannerVideo} from "../../bannerVideos/model/bannerVideo";

export interface Serie{
  id:number,
  title:string,
  synopsis:string,
  category:Category,
  bannerVideo:BannerVideo
  seasons:Array<Season>
}
