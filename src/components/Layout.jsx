const MyLayout = ({ children }) => {
  return (
    <>
      <header></header>
      {children}
      <footer>
        <small>© Purwadhika WD Latte Team 2023. All rights reserved</small>
      </footer>
    </>
  );
};

export default MyLayout;
