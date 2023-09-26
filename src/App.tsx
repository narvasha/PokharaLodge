import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderMegaMenu } from "./assets/Components/Navbar/Header";
import { Theme } from "./assets/Components/Navbar/Theme";
import { FooterLinks } from "./assets/Components/Navbar/Footer";

import HomePage from "./Pages/HomePage";
import RoomPage from "./Pages/RoomPage";
import { Errorpage } from "./Pages/ErrorPage";
import { Deluxe } from "./Pages/Deluxe";


function App() {
  return (
    <>
      <MantineProvider>
        <Router>
           <HeaderMegaMenu />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage/>} />
              <Route path= "rooms" element={<RoomPage/>}/>
              <Route path= "deluxe" element={<Deluxe/>}/>
            </Route>
            <Route path="*" element={<Errorpage/>}/>
              
          </Routes>
          <Theme/>
        <FooterLinks /> 
        </Router>
       
      </MantineProvider>
    </>
  );
}

export default App;
