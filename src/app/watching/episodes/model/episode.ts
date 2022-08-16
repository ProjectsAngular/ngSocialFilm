import {Video} from "../../videos/model/video";

export interface Episode{
  id:number,
  title:string,
  synopsis:string,
  video:Video
}
