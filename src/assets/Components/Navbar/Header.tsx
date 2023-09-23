import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
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
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconCalendarEvent,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { useState } from "react";

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
          <img src={logo} style={{height:"50px",marginTop:"20px"}} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Home
                    </Box>
                  </Center>
                </a>
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
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Modern
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  City
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Beach
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Island
                </a>
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
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Branches
                    </Box>
                  </Center>
                </a>
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
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Modern
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  City
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Beach
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Island
                </a>
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
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Rooms
                    </Box>
                  </Center>
                </a>
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
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Modern
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  City
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Beach
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Island
                </a>
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
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Pages
                    </Box>
                  </Center>
                </a>
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
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Modern
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  City
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Beach
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Island
                </a>
                <Divider style={{ borderColor: "black" }} />
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Blog
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Contact Us
                    </Box>
                  </Center>
                </a>
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
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Modern
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  City
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Beach
                </a>
                <Divider style={{ borderColor: "black" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "10px 15px",
                    fontFamily: "vollkon",
                  }}
                >
                  Island
                </a>
                <Divider style={{ borderColor: "black" }} />
              </HoverCard.Dropdown>
            </HoverCard>
            <button className={classes.button}>
            <IconCalendarEvent style={{ marginRight:"10px",backgroundColor:"grey", borderRadius:"100px",padding:"5px",height:"36px",width:"36px"}}/>
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

          <a href="#" className={classes.link}>
            Home
          </a>
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
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

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
