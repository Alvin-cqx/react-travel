import React, { useState, useEffect } from "react";
import styles from "./DetailPage.module.css";
import { RouteComponentProps, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "../../redux/hook";
import { Button } from "antd";
import {
  productDetailSlice,
  getProductDetail,
} from "../../redux/productDetail/slice";
import { addShoppingCartItem } from "../../redux/shoppingCart/slice";
import { useDispatch } from "react-redux";
interface MatchParams {
  productId: string;
}
export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  //useParams 返回URL参数的键/值对的对象
  const { productId } = useParams<MatchParams>();
  // 方法1：
  // const [loading, setLoading] = useState<boolean>(true);
  // const [product, setProduct] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);
  const token = useSelector((s) => s.user.token) as string; //强行转换string类型

  // 方法2 数据转移到redux中
  const loading = useSelector((state) => state.productDetail.loading);
  const product = useSelector((state) => state.productDetail.data);
  const error = useSelector((state) => state.productDetail.error);
  const dispacth = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   // 方法1
      //   // setLoading(true);
      //   // 方法2
      //   dispacth(productDetailSlice.actions.fetchStart())
      //   const { data } = await axios.get(
      //     "http://123.56.149.216:8080/api/productCollections"
      //   );
      //   // 方法1
      //   // setProduct(data);
      //   // setLoading(false);
      //   // 方法2
      //   dispacth(productDetailSlice.actions.fetchSuccess(data))
      // } catch (error) {
      //   // // 方法1
      //   // setError(error);
      //   // setLoading(false);
      //    // 方法2
      //    dispacth(productDetailSlice.actions.fetchFail('error.msg'))
      // }
      dispacth(getProductDetail(productId));
    };
    fetchData();
  }, []);
  return (
    <h1>
      路由详情页，id:{props.match.params.productId}:{productId}
      <Button
        value="small"
        onClick={() => {
          dispacth(addShoppingCartItem({jwt:token, touristRouteId:productId}));
        }}
      >
        加入购物车
      </Button>
      {/* 渲染html */}  
      {/* <div
          dangerouslySetInnerHTML={{ __html: product.features }}
          style={{ margin: 50 }}
        ></div> */}
    </h1>
  );
};
