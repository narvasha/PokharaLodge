
import { Container, Grid,  Skeleton, Title, rem,Text, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';
import {  Card, Image,  AspectRatio } from '@mantine/core';
import classes from './Deluxe.module.css';


export function Deluxe() {
 
  const mockdata = [
    {
      title: '6 feet wide x 6.5 feet long bed. Good for Honey-Moon couple.',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/05/deluxe-room-11.jpg',
      date: 'Deluxe Room with single bed',
    },
    {
      title: '1 queen size bed and 1 single bed ( 5 x 6.5 and 3 x 6.5 fits ) ',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/05/room-10.jpg',
      date: 'Deluxe room with 2 beds',
    },
    {
      title: 'Deluxe room’s bath room',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/05/deluxe-bathroom.jpg',
      date: 'Bathroom',
    },
    {
      title: 'A beautiful mountain view seen from window of the room.',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/04/hotel-pokhara-lodge-43.jpg',
      date: 'Mountain View',
    },
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
          <Title style={{ color: "#474747", fontWeight: 500 }}>DELUXE ROOMS</Title>
          
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
      <SimpleGrid cols={{ base: 2, sm:2 }}>{cards}</SimpleGrid>
    </Container>
  <Text className={classes.text}>
  Deluxe room with mountain views : Hotel have only 2 deluxe room on the top floor with excellent Annapurna mountain range with Fishtail mountain views. One room # 11 with 1 large king size bed ( 6×6.5 fits ) other Room # 10 is with 1 queen size bed and 1 single bed ( 5 x 6.5 and 3 x 6.5 fits ) which is suitable for a couple, 2 different people and family of 2 people with children. Deluxe room have facilities of multi channel Smart Television with internet, ceiling fan, automatic temperature controllable air- conditioning (air con). The most popular facility in this room is you can make your own tea and coffee any time. Tea bags, Cups, Sugar and Electric Kettle is in the room. So any time you can make your own black Tea, Hot Water or Cup Noodles.
  </Text>
  
  </>
  )
}