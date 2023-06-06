import React from "react";
import styles from "./HomePage.module.css";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
} from "../../componets";
import { Col, Row, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../../assets/images/sider_2019_02-04.png";

export class HomePage extends React.Component {
  render(): React.ReactNode {
    // console.log(this.props,'this.props')
    return (
      <div>
        <Header></Header>
        {/* 内容 */}
        <div className={styles["page-content"]}>
          <Row gutter={16} style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu></SideMenu>
            </Col>
            <Col span={18}>
              <Carousel></Carousel>
            </Col>
          </Row>

          {/* 产品内容 */}
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                爆款推荐
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList1}
          ></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                新品上市
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList2}
          ></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                国内游推荐
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList3}
          ></ProductCollection>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
