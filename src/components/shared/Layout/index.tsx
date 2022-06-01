import { Component, children } from "solid-js";
import { styled } from "solid-styled-components";
import Header from "./elements/Header";

interface Props {
  title: string;
  children: any;
}

const LayoutComponent: Component<Props> = (props) => {
  const c = children(() => props.children);

  return (
    <Layout>
      <HeaderExtends title={props.title} />
      <>{c()}</>
    </Layout>
  );
};

const Layout = styled("div")``;

const HeaderExtends = styled(Header)`
  position: fixed;
`;

export default LayoutComponent;
