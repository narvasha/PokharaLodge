
import { Container, Title, Text, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';
import {  Card, Image,  AspectRatio } from '@mantine/core';
import classes from './Standard.module.css';


export function Standard() {
 
  const mockdata = [
    {
      title: 'Double bed and single bed room',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/05/standard-double-twin-room-1-1024x768.jpg',
      date: 'Photo of a Standard Double or Twin bed Room ',
    },
    {
      title: '1 queen size bed  ',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/05/standard-double-twin-room-2-1024x683.jpg',
      date: 'Photo of a Standard Double or Twin bed Room ',
    },
    {
      title: 'Photo of a Standard Double or Twin bed Room ',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2019/05/standard-double-twin-room-3.jpg',
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
          <Title style={{ color: "#474747", fontWeight: 500 }}>STANDARD ROOMS</Title>
          
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
  Standard Double or Twin Room at Hotel New Pokhara Lodge Lakeside Pokhara. Carpeted rooms with wooden furnishings come with a cable TV and wardrobe. The private bathroom is equipped with shower facilities. Rooms are with plenty of lights and private windows, some rooms offer mountain views but all rooms offer garden views. Very high speed WI FI internet is on the air free of cost for all hotel guest. Standard rooms can be booked as single and double occupancy. Tea bags, Cups, Sugar and Electric Kettle is in the room. So any time you can make your own black Tea or Hot Water or Cup Noodles.
  </Text>
  
  </>
  )
}