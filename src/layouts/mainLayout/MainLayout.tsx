import React from "react";
import styles from "./MainLayout.module.css";
import { Header, Footer } from "../../componets";
export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>{children}</div>
      <Footer />
    </>
  );
};
