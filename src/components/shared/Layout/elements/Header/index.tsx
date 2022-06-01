import { Component } from "solid-js";
import { styled } from "solid-styled-components";

interface Props {
  title: string;
}

const HeaderComponent: Component<Props> = ({ title }) => {
  return <Header>{title}</Header>;
};

const Header = styled("header")`
  width: 100%;
  height: 80px;
  background-color: #ccc;
`;

export default HeaderComponent;
