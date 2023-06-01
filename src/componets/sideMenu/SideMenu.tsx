import React from "react";
import styles from "./SideMenu.moduel.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
interface item {
  label: string;
  key: string;
  children?: any;
}
function treeArrFun(arr: any) {
  let treeArr: any = [];
  arr.forEach((val, ind) => {
    let list:item;
    if (val.title) {
      list = {
        label: val.title,
        key: val.title + "-" + ind,
        children:
          val.subMenu && val.subMenu.length > 0 ? treeArrFun(val.subMenu) : [],
      };
    } else {
      list = {
        label: val,
        key: val + ind,
      };
    }
    treeArr.push(list);
  });
  return treeArr;
}
let list=treeArrFun(sideMenuList)
export const SideMenu: React.FC = () => {
  return  <Menu className={styles['sideMenu']}  mode="vertical" items={list} />;
};
