import React, { useState, useEffect } from "react";
import styles from "./DetailPage.module.css";
import { RouteComponentProps, useParams } from "react-router-dom";
import axios from "axios";
interface MatchParams {
  detailId: string;
}
export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  //useParams 返回URL参数的键/值对的对象
  const { detailId } = useParams<MatchParams>();

  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://123.56.149.216:8080/api/productCollections"
        );
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <h1>
      路由详情页，id:{props.match.params.detailId}:{detailId}
      {/* 渲染html */}
      {/* <div
          dangerouslySetInnerHTML={{ __html: product.features }}
          style={{ margin: 50 }}
        ></div> */}
    </h1>
  );
};
