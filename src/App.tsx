import React from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { Container } from "./components/Layout";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <main style={{ minHeight: "60vh" }}>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
