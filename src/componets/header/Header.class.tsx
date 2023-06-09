import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Dropdown, Button, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps } from "react-router-dom";
import type { MenuProps } from "antd";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
// // 方法1
import store from "../../redux/store";
import { LanguageState } from "../../redux/language/languageReducer";
import { LanguageActionTypes } from "../../redux/language/languageAction";
// 方法1
// class HeaderComp extends React.Component<RouteComponentProps, state> {
//   constructor(props) {
//     super(props);
//     const storeState = store.getState();
//     this.state = {
//       language: storeState.language,
//       languageList: storeState.languageList,
//     };
//     // 监听store的变化进行更新
//     store.subscribe(() => {
//       const storeData = store.getState();
//       this.setState({
//         language: storeData.language,
//       });
//     });
//   }
//   render(): React.ReactNode {
//     const { history } = this.props;
//     const items: MenuProps["items"] = [];
//     this.state.languageList.forEach((item, ind) => {
//       items?.push({
//         label: item.name,
//         key: item.code,
//       });
//     });
//     const handleMenuClick = (e: any) => {
//       const action: LanguageActionTypes = {
//         type: "change_language",
//         payload: e.key,
//       };
//       store.dispatch(action);
//     };
//     return (
//       <div className={styles["app-header"]}>
//         <div className={styles["top-header"]}>
//           <div className={styles.inner}>
//             <Typography.Text>让旅游更幸福</Typography.Text>
//             <Dropdown menu={{ items, onClick: handleMenuClick }}>
//               <Button>
//                 <Space>
//                   {this.state.language === "zh" ? "中文" : "English"}
//                   <DownOutlined />
//                 </Space>
//               </Button>
//             </Dropdown>
//             <Space className={styles["button-group"]}>
//               <Button value="small" onClick={() => history.push("/signIn")}>
//                 登录
//               </Button>
//               <Button value="small" onClick={() => history.push("/register")}>
//                 注册
//               </Button>
//             </Space>
//           </div>
//         </div>
//         <Layout.Header className={styles["main-header"]}>
//           <img src={logo} alt="" className={styles["App-logo"]} />
//           <Typography.Title level={3} className={styles.title}>
//             React 旅游网
//           </Typography.Title>
//           <Input.Search
//             placeholder={"请输入地址"}
//             className={styles["search-input"]}
//           ></Input.Search>
//         </Layout.Header>

//         <Menu mode="horizontal" className={styles["main-menu"]}>
//           <Menu.Item key={1}>旅游首页</Menu.Item>
//           <Menu.Item key={2}>周末游</Menu.Item>
//           <Menu.Item key={3}>跟团游</Menu.Item>
//           <Menu.Item key={4}>自由行</Menu.Item>
//           <Menu.Item key={5}>私家团</Menu.Item>
//           <Menu.Item key={6}>游轮</Menu.Item>
//           <Menu.Item key={7}>酒店+景点</Menu.Item>
//           <Menu.Item key={8}>当地玩乐</Menu.Item>
//           <Menu.Item key={9}>主题游</Menu.Item>
//           <Menu.Item key={10}>定制游</Menu.Item>
//           <Menu.Item key={11}>游学</Menu.Item>
//           <Menu.Item key={12}>签证</Menu.Item>
//         </Menu>
//       </div>
//     );
//   }
// }

// export const Header = withRouter(HeaderComp);

// 方法2 使用 connect
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { Dispatch } from "redux";
import {userSlice} from '../../redux/user/slice'
import {
  changeLanguageActionCreator,
} from "../../redux/language/languageAction";
interface state extends LanguageState {
  // productList:any
}
// mapStateToProps会自动挂载在this.props上
const mapStateToProps = (state: RootState) => {
  return {
    language: state.language.language,
    languageList: state.language.languageList,
  };
};

const mapDispatchToProps=(dispatch:Dispatch)=>{
  return{
    changeLanguage:(code:'zh'|'en')=>{
      const action=changeLanguageActionCreator(code)
      dispatch(action)
    }
  }
}
type PropsType = RouteComponentProps & // react-router 路由props类型
  ReturnType<typeof mapStateToProps>& // redux store 映射类型 
  ReturnType <typeof mapDispatchToProps> // redux dispatch 映射类型 
class HeaderComp extends React.Component<PropsType, state> {
  // constructor(props) {
  //   super(props);
  //   const storeState = store.getState();
  //   this.state = {
  //     language: storeState.language,
  //     languageList: storeState.languageList,
  //   };
  //   // 监听store的变化进行更新
  //   store.subscribe(() => {
  //     const storeData = store.getState();
  //     this.setState({
  //       language: storeData.language,
  //     });
  //   });
  // }
  render(): React.ReactNode {
    const { history } = this.props;
    const items: MenuProps["items"] = [];
    this.props.languageList.forEach((item, ind) => {
      items?.push({
        label: item.name,
        key: item.code,
      });
    });
    const handleMenuClick = (e: any) => {
      this.props.changeLanguage(e.key)
    };
   
    return (
      <div className={styles["app-header"]}>
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown menu={{ items, onClick: handleMenuClick }}>
              <Button>
                <Space>
                  {this.props.language === "zh" ? "中文" : "English"}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Space className={styles["button-group"]}>
              <Button value="small" onClick={() => history.push("/signIn")}>
                登录
              </Button>
              <Button value="small" onClick={() => history.push("/register")}>
                注册
              </Button>
             
            </Space>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
            React 旅游网
          </Typography.Title>
          <Input.Search
            placeholder={"请输入地址"}
            className={styles["search-input"]}
          ></Input.Search>
        </Layout.Header>

        <Menu mode="horizontal" className={styles["main-menu"]}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key={4}>自由行</Menu.Item>
          <Menu.Item key={5}>私家团</Menu.Item>
          <Menu.Item key={6}>游轮</Menu.Item>
          <Menu.Item key={7}>酒店+景点</Menu.Item>
          <Menu.Item key={8}>当地玩乐</Menu.Item>
          <Menu.Item key={9}>主题游</Menu.Item>
          <Menu.Item key={10}>定制游</Menu.Item>
          <Menu.Item key={11}>游学</Menu.Item>
          <Menu.Item key={12}>签证</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export const Header = connect(mapStateToProps,mapDispatchToProps)(withRouter(HeaderComp));
