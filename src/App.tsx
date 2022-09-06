import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyles";
import theme from "styles/theme";

import Header from "components/layout/Header";
import Promotion from "pages/Promotion";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Promotion />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
