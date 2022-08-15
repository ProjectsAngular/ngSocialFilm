import {Category} from "../../categories/model/category";
import {Video} from "../../videos/model/video";
import {BannerVideo} from "../../bannerVideos/model/bannerVideo";

export interface Film{
  id:number,
  title:string,
  synopsis:string,
  category:Category,
  video:Video,
  bannerVideo:BannerVideo
}
