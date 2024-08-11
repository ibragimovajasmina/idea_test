import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Likeprovider, { Productprovider, Productprovider2 } from "./context/likeContext.jsx";

import KarzinkaProvider from "./context/karzinkacontext.jsx";
import TanlanganProvider from "./context/tanlanganContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Likeprovider>
        <Productprovider>
        <Productprovider2>
        <TanlanganProvider>
          <KarzinkaProvider>
            <App />
          </KarzinkaProvider>
        </TanlanganProvider>
        </Productprovider2> 
        </Productprovider>
      </Likeprovider>
    </ChakraProvider>
  </BrowserRouter>
);
