import styles from "./SearchPage.module.css";
import React, { useEffect } from "react";
import { Header, Footer } from "../../componets/index";
import { useParams, useLocation } from "react-router-dom";
import { searchProduct } from "../../redux/productSearch/slice";
import { useSelector } from "../../redux/hook";
import { useDispatch } from "react-redux";
interface matchParams {
  keywords: string;
}
export const SearchPage: React.FC = () => {
  const { keywords } = useParams<matchParams>();
  const loading = useSelector((s) => s.productSearch.loading);
  const error = useSelector((s) => s.productSearch.error);
  const pagenation = useSelector((s) => s.productSearch.pagenation);
  const data = useSelector((s) => s.productSearch.data);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
  }, [location]);

  const onPageChange = (nextPage, pageSize) => {
    dispatch(searchProduct({ nextPage, pageSize, keywords }));
  };
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
