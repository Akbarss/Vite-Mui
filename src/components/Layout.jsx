import { Box, Grow } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Grow in mountOnEnter unmountOnExit {...{ timeout: 1680 }}>
        <Box flex="1" maxHeight="100%">
          {children}
        </Box>
      </Grow>
      <Footer />
    </Box>
  );
};

export default Layout;
