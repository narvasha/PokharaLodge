import { Container, Grid, SimpleGrid, Skeleton, rem, Text,Title,Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import hotel from "../../src/assets/Images/Garden.jpg"
import parking from "../../src/assets/Images/parking.jpg";
import breakfast from "../../src/assets/Images/breakfasttable.jpg";

import photo1 from "../../src/assets/Images/some-beautiful-photos.jpg";


import photo2 from "../../src/assets/Images/full-building-picture.jpg";


import photo3 from "../../src/assets/Images/latest-photos-from-new.jpg";

import photo4 from "../../src/assets/Images/flower-and-garden-of.jpg";

import photo5 from "../../src/assets/Images/best-mountain-view-from.jpg";


import view from "../../src/assets/Images/view.jpg";
const PRIMARY_COL_HEIGHT = rem(300);

export function Gallery() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <div>  
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
          <Title style={{ color: "#474747", fontWeight: 500 }}>GALLERY</Title>
          
          <Text
            style={{
              fontSize: "16px",
              lineHeight: "15px",
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
      <Container my="md" style={{maxWidth:"90%"}}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      <Image src={photo2} />
        <Grid gutter="md">
          <Grid.Col>
          <Image src={photo1} />
            
          </Grid.Col>
          <Grid.Col span={12}>
          <Image src={photo3} />
          </Grid.Col>
          
        </Grid>
      </SimpleGrid>
    </Container>
    <Container my="md" style={{maxWidth:"90%"}}>
      <SimpleGrid cols={{ base: 3, sm: 2}} spacing="md">
      <Image src={hotel} />
        <Grid gutter="md">
          
          <Grid.Col span={12}>
          <Image src={view} />
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
    <Container my="md" style={{maxWidth:"90%"}}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      <Image src={hotel} />
        <Grid gutter="md">
          <Grid.Col span={16}>
          <Image src={parking} />
            
          
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
    </div>
  );
}