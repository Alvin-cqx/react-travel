import React from "react";
import { Provider } from "react-redux";
import rootStore from "./redux/store";
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
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  HomePage,
  RegisterPage,
  SignInPage,
  DetailPage,
  SearchPage,
  shoppingCart,
} from "./pages";
import { useSelector } from "./redux/hook";
// redux持久化
import { PersistGate } from "redux-persist/lib/integration/react";
// 路由私有化
const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signIn" }} />
    );
  };
  return <Route render={routeComponent} {...rest} />;
};

function App() {
  const token = useSelector((s) => s.user.token);
  return (
    <Provider store={rootStore.store}>
      <PersistGate loading={null} persistor={rootStore.persistor}>
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
              <Route
                exact
                path="/search/:keywords?"
                component={SearchPage}
              ></Route>
              <Route
                exact
                path="/detail/:productId"
                component={DetailPage}
              ></Route>
              {/* 路由私有化 */}
              <PrivateRoute
                isAuthenticated={token !== null}
                path="/shoppingCart"
                component={shoppingCart}
              />
              {/*   <Route path="/login" render={() => <h1>登录</h1>}></Route>
          /~ 404页面是所有路由最后添加的 ~/
          <Route  render={() => <h1>404页面</h1>}></Route>*/}
            </Switch>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
