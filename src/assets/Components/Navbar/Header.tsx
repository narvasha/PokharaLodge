import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
 
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import logo from "../../Images/hotel logo.webp";
import { useDisclosure } from "@mantine/hooks";


import {
 
  IconChevronDown,
  IconCalendarEvent,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";


export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
const[header,setHeader]=useState(false);
const changebackground=()=>{
    if(window.scrollY>=30){
        setHeader(true)
    }
    else {setHeader(false)}
}
 window.addEventListener("scroll", changebackground)

  return (
    <Box pb={0}>
      <header className={header? classes.headerfixed:classes.header}>
        <Group justify="space-between" h="100%">
          <img src={logo} style={{height:"30px",width:"330px",}} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link to="/" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Home
                    </Box>
                  </Center>
                </Link>
              </HoverCard.Target>

            </HoverCard>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link to="/about" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      About US
                    </Box>
                  </Center>
                </Link>
              </HoverCard.Target>

              {/* <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  width: "150px ",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "lightblue",
                  borderRadius:0,
                  padding:0
                }}
              >
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                 Services
                </Link>
                <Divider style={{ borderColor: "black" }} />
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                Location
                </Link>
                <Divider style={{ borderColor: "black" }} />
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                Prices
                </Link>
                
                <Divider style={{ borderColor: "black" }} />
              </HoverCard.Dropdown> */}
            </HoverCard>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link to="/rooms" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Rooms
                    </Box>
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  width: "150px ",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "lightblue",
                  borderRadius:0,
                  padding:0
                }}
              >
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                 Deluxe
                </Link>
                <Divider style={{ borderColor: "black" }} />
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                 Semi-Deluxe
                </Link>
                <Divider style={{ borderColor: "black" }} />
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                 Standard
                </Link>
                <Divider style={{ borderColor: "black" }} />
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                 Family
                </Link>
                <Divider style={{ borderColor: "black" }} />
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link to="Gallery" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Gallery
                    </Box>
                  </Center>
                </Link>
              </HoverCard.Target>
              
            </HoverCard>
            <Link to="#" className={classes.link}>
              Reviews
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              
                <Link to="contact" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Contact Us
                    </Box>
                  </Center>
                </Link>
              
              
            </HoverCard>
            <button className={classes.button}>
            <IconCalendarEvent style={{ marginRight:"10px",backgroundColor:"white", borderRadius:"100px",padding:"5px",height:"36px",width:"36px"}}/>
            BOOK NOW
          </button>
          </Group>
          
          

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to="#" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{}</Collapse>
          <Link to="#" className={classes.link}>
            Learn
          </Link>
          <Link to="#" className={classes.link}>
            Academy
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
