
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { HeaderMegaMenu } from "./assets/Components/Navbar/Header";
import { Theme } from "./assets/Components/Navbar/Theme";
import { FooterLinks } from "./assets/Components/Navbar/Footer";
import {  HeroContentLeft } from "./assets/Components/Body/hero";
import { Room } from "./assets/Components/Body/Rooms";
import { Services } from "./assets/Components/Body/Services";
import { Gallery } from "./assets/Components/Body/gallery";


function App() {
  

  return (
    
    <>
     <MantineProvider>

<HeaderMegaMenu/>
<HeroContentLeft/>


<Room/>


<Theme/>
<Gallery/>
<FooterLinks/>
      </MantineProvider> 
    </>
  )
}

export default App
