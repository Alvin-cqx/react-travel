import React from "react";
interface Props {}
interface State {}

export class SignInPage extends React.Component<Props, State> {
  constructor(props: Props) {
    console.log(props, "propspropspropsprops");
    super(props);
  }
  render(): React.ReactNode {
    return <h1>登录页面</h1>;
  }
}
