import {Episode} from "../../episodes/model/episode";

export interface Season{
  id:number,
  title:string,
  synopsis:string,
  episodes:Array<Episode>,
}
