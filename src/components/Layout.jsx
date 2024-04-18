import Box from "@mui/material/Box";
import React from "react";
import Footer from "./Footer";
import MenuAppBar from "./Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"}>
      <MenuAppBar />
      <Box flex={1} maxHeight={"100%"}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
