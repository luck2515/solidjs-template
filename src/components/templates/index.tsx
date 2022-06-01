import { Component } from "solid-js";
import Layout from "../shared/Layout";

interface Props {}

const TopTemplate: Component<Props> = () => {
  return (
    <Layout title="トップページ">
      <p>トップページ</p>
    </Layout>
  );
};

export default TopTemplate;
