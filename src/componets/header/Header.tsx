import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Dropdown, Button, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
const items: MenuProps["items"] = [
  {
    label: "中文",
    key: "1",
  },
  {
    label: "英文",
    key: "2",
  },
];
export const Header: React.FC = () => {
  return (
    <div className={styles["app-header"]}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown menu={{ items }}>
            <Button>
              <Space>
                语言
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Space className={styles["button-group"]}>
            <Button value="small">登录</Button>
            <Button value="small">注册</Button>
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
};
