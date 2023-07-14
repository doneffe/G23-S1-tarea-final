import { Fragment } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

const Layout = () => {
  return (
    <Fragment>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;
