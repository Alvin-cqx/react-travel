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
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { giveMeDataActionCreator } from "../../redux/recommendProducts/recommendProductsAction";
// 抽取出来的
import { MainLayout } from "../../layouts/mainLayout/index";
const mapStateToProps = (state: RootState) => {
  return {
    productList: state.recommendProducts.productList,
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    giveMeData: () => {
      dispatch(giveMeDataActionCreator());
    },
  };
};
type PropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
interface State {
  productList: any[];
}
class HomePageComp extends React.Component<PropsType> {
  componentDidMount() {
    this.props.giveMeData();
  }
  render(): React.ReactNode {
    // console.log(this.props,'this.props')
    return (
      // 方法1
      // <div>
      //   <Header></Header>
      //   {/* 内容 */}
      //   <div className={styles["page-content"]}>
      //     <Row gutter={16} style={{ marginTop: 20 }}>
      //       <Col span={6}>
      //         <SideMenu></SideMenu>
      //       </Col>
      //       <Col span={18}>
      //         <Carousel></Carousel>
      //       </Col>
      //     </Row>

      //     {/* 产品内容 */}
      //     <ProductCollection
      //       title={
      //         <Typography.Title level={3} type="warning">
      //           爆款推荐
      //         </Typography.Title>
      //       }
      //       sideImage={sideImage}
      //       products={productList1}
      //     ></ProductCollection>
      //     <ProductCollection
      //       title={
      //         <Typography.Title level={3} type="danger">
      //           新品上市
      //         </Typography.Title>
      //       }
      //       sideImage={sideImage}
      //       products={productList2}
      //     ></ProductCollection>
      //     <ProductCollection
      //       title={
      //         <Typography.Title level={3} type="success">
      //           国内游推荐
      //         </Typography.Title>
      //       }
      //       sideImage={sideImage}
      //       products={productList3}
      //     ></ProductCollection>
      //   </div>
      //   <Footer></Footer>
      // </div>
      <div>
        <MainLayout>
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
        </MainLayout>
      </div>
    );
  }
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComp);
