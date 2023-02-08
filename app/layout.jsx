import Chakra from "./Chakra";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Chakra>{children}</Chakra>
      </body>
    </html>
  );
};

export default RootLayout;
