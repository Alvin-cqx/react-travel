import React from "react";

import styles from "./App.module.css";
import { Header, Footer,SideMenu,Carousel } from "./componets";
import { Col, Row } from "antd";
function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      {/* 内容 */}
      <div className={styles["page-content"]}>
        <Row gutter={16} style={{marginTop:20}}>
          <Col span={6} >
            <SideMenu></SideMenu>
          </Col>
          <Col span={18}>
            <Carousel></Carousel>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
