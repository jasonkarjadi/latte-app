import { ChakraProvider } from "@chakra-ui/react";
import MyLayout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </ChakraProvider>
  );
};

export default MyApp;
