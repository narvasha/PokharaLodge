import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import rainbow from "../../assets/Images/rainbow.jpg";
import classes from './AboutUs.module.css';
import { Link } from 'react-router-dom';

export function AboutUs() {
  return (
    <>
    <div
      style={{
        marginTop: "0",
        backgroundColor: "#f5f3f0",
        borderBottom: "1px solid #f2f1f0",
        borderTop: "1px solid #f2f1f0",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingLeft: "95px",
          paddingRight: "95px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Title style={{ color: "#474747", fontWeight: 500 }}>ABOUT US</Title>
        <Text
            style={{
              fontSize: "16px",
              lineHeight: "1px",
              color: "#606060",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>{" "}
            <Link to="/Rooms" style={{ textDecoration: "none" }}>
            / Rooms
            </Link>
          </Text>
      </div>
    </div>
    <div style={{ width: "100%", padding: "100px 0", overflow: "hidden" }}/>
        <Container style={{ maxWidth: "90%" }}/>
          <div
            style={{
              borderRadius: "8px",
              marginBottom: "-200px",
              border: "1px solid #efefef",
              position: "relative",
              background: "#fff",
              overflow: "hidden",
            }}
          />
            <Container size="md" style={{ maxWidth: "90%" }}>
              <div className={classes.inner}>
                <div className={classes.content}>
                  <Title className={classes.title}>
                   NEW  POKHARA LODGE
                   
                  </Title>
                  <Text c="dimmed" mt="md" style={{ maxWidth: "100%" }}>
                  <br></br>

                    Located on Lakeside Street number 3, New Pokhara Lodge is an exceptional choice for tourists visiting Pokhara.Just a 4-minute stroll from Phewa Lake, this lodge offers a captivating garden adorned with diverse plants and flowers that enhance the ambiance.  The garden is a cherished spot where many guests indulge in breakfast and beverages amidst a serene atmosphere.
                    <br></br> Moreover, New Pokhara Lodge boasts breathtaking views of the Annapurna range, Fishtail Himalaya, Dhaulagiri, Lamjung, Manaslu, and more, providing a truly mesmerizing experience. Some rooms even offer spectacular views of the majestic Himalayan Mountains.

                   
                  </Text>

                  <List
                    mt={30}
                    spacing="sm"
                    size="sm"
                    icon={<ThemeIcon size={20} radius="xl">
                      <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                    </ThemeIcon>}
                  >
                    <List.Item>
                      <b>Beautiful Garden</b> – Beautiful Garden
                    </List.Item>
                    <List.Item>
                      <b>Mountain View</b> – Beautiful Garden
                    </List.Item>
                    <List.Item>
                      <b>Peaceful</b> – Beautiful Garden
                    </List.Item>
                  </List>

                  <Group mt={40}>
                    <Button radius="xl" size="md" className={classes.control}>
                      Book Now
                    </Button>
                    <Button variant="default" radius="xl" size="md" className={classes.control}>
                      Gallery
                    </Button>
                  </Group>
                </div>
                <Image src={rainbow} className={classes.image} style={{ maxWidth: "100%" }} />
                
              </div>
            </Container>
            </>
            );
          }