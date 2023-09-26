
import { Container, Title, Text, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';
import {  Card, Image,  AspectRatio } from '@mantine/core';
import classes from './SemiDeluxe.module.css';


export function SemiDeluxe() {
 
  const mockdata = [
    {
      title: 'Double bed and single bed room',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/05/room-16.jpg',
      date: 'Semi-Deluxe Room with two beds',
    },
    {
      title: '1 queen size bed  ',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/05/room-17.jpg',
      date: 'Semi-Deluxe room with 1 beds',
    },
    {
      title: 'Semi-Deluxe room’s bath room',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/05/new-bathroom.jpg',
      date: 'Bathroom',
    },
    // {
    //   title: 'A beautiful mountain view seen from window of the room.',
    //   image:
    //     'https://www.pokharalodge.com/wp-content/uploads/2019/04/hotel-pokhara-lodge-43.jpg',
    //   date: 'Mountain View',
    // },
  ];
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));
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
          <Title style={{ color: "#474747", fontWeight: 500 }}>SEMI-DELUXE ROOMS</Title>
          
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
      <Container py="xl" style={{width:"100%", maxWidth:"100%"}}>
      <SimpleGrid cols={{ base: 2, sm:3 }}>{cards}</SimpleGrid>
    </Container>
  <Text className={classes.text}>
  Superior Double or Twin Room with Terrace located in the new building south of existing building on the first floor. 1 Room have queens bed and 2 rooms have a single bed and semi double bed with ceiling fan, TV, attached bathroom and private balcony. Free WIFI. The most popular facility in this room is you can make your own tea and coffee any time. Tea bags, Cups, Sugar and Electric Kettle is in the room. So any time you can make your own black Tea or Hot Water or Cup Noodles.
  </Text>
  
  </>
  )
}