import React from "react";
import { Image, Typography } from "antd";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
interface propsType extends RouteComponentProps {
  id: string | number;
  size: "large" | "small";
  title: string;
  imageSrc: string;
  price: string;
}
//  history location match,使用了withRouter高阶函数之后获取的
const ProductImageComp: React.FC<propsType> = ({
  id,
  size,
  title,
  imageSrc,
  price,
  history,
  location,
  match,
}) => {
  return (
    // 方法1：
    // <div style={{marginRight:10}} onClick={()=>history.push(`/detail/${id}`)}>
    //     {size === "large" ? (
    //         <Image src={imageSrc} height={285} width={"100%"} />
    //     ) : (
    //         <Image src={imageSrc} height={120} width={"100%"} />
    //     )}
    //     <div>
    //         <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
    //         <Typography.Text type="danger" strong>
    //             ¥ {price} 起
    //         </Typography.Text>
    //     </div>
    // </div>
    // 方法2：
    <Link to={`/detail/${id}`}
    >
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={"100%"} />
      ) : (
        <Image src={imageSrc} height={120} width={"100%"} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </Link>
  );
};

export const ProductImage = withRouter(ProductImageComp);
