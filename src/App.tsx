import React from "react";

import styles from "./App.module.css";
// import {
//   Header,
//   Footer,
//   SideMenu,
//   Carousel,
//   ProductCollection,
// } from "./componets";
// import { Col, Row, Typography } from "antd";
// import { productList1, productList2,productList3} from "./mockups";
// import sideImage from './assets/images/sider_2019_02-04.png'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, RegisterPage, SignInPage } from "./pages";
function App() {
  return (
    <div className={styles.App}>
      {/* <Header></Header>
      /~ 内容 ~/
      <div className={styles["page-content"]}>
        <Row gutter={16} style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu></SideMenu>
          </Col>
          <Col span={18}>
            <Carousel></Carousel>
          </Col>
        </Row>

        /~ 产品内容 ~/
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
      <Footer></Footer>*/}
      <BrowserRouter>
        {/* Switch只能渲染一个路由(优先级最高的路由)，exact开启精准匹配路由模式 */}
        <Switch>
          {/* Route自动向组件传递history，location,match的数据 */}
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/signIn" component={SignInPage}></Route>
          {/*   <Route path="/login" render={() => <h1>登录</h1>}></Route>
          /~ 404页面是所有路由最后添加的 ~/
          <Route  render={() => <h1>404页面</h1>}></Route>*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
