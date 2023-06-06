import React from "react";
import styles from "./DetailPage.module.css";
import { RouteComponentProps } from "react-router-dom";
interface routeInter{
  detailId:string
}
export const DetailPage:React.FC<RouteComponentProps<routeInter>>=(props)=>{
  return (<h1>路由详情页，id:{props.match.params.detailId}</h1>)
}