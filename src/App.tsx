
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { HeaderMegaMenu } from "./assets/Components/Navbar/Header";
import { Theme } from "./assets/Components/Navbar/Theme";
import { FooterLinks } from "./assets/Components/Navbar/Footer";
import {  HeroContentLeft } from "./assets/Components/Body/hero";
import { Room } from "./assets/Components/Body/Rooms";

function App() {
  

  return (
    
    <>
     <MantineProvider>

<HeaderMegaMenu/>
<HeroContentLeft/>

<Room/>
<Theme/>
<FooterLinks/>
      </MantineProvider> 
    </>
  )
}

export default App
