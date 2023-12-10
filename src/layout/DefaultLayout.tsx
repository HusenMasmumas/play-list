import React from "react";
import "./index.css";
import ContentLayout from "./ContentLayout";
import HeadBarLayout from "./HeadBarLayout";
import { Layout } from "antd";

const DefaultLayout = () => {
  return (
    <div>
      <Layout>
        <HeadBarLayout />
        <ContentLayout />
      </Layout>
    </div>
  );
};

export default DefaultLayout;
