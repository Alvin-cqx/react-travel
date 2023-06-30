import React from "react";
import { UserLayout } from "../../layouts/userLayout";
import {SignInForm} from './SignInForm'
interface Props {}
interface State {}
export const SignInPage: React.FC = (props: Props) => {
  return (
    <UserLayout>
      <SignInForm />
    </UserLayout>
  );
};
