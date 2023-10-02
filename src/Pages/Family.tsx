
import { Container, Title, Text, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';
import {  Card, Image,  AspectRatio } from '@mantine/core';
import classes from './Standard.module.css';


export function Family() {
 
  const mockdata = [
    {
      title: 'Double bed and single bed room',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2021/03/family-room.jpg',
      date: 'Photo of a Family bed Room',
    },
    {
      title: '1 queen size bed  ',
      image:
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238132845.jpg?k=7836ae5890e4a74554084632559f9cde48a267f62067e1654d144eb95a20cd11&o=&hp=1',
      date: 'Photo of a Family bed Room ',
    },
    {
      title: 'Photo of a Standard Double or Twin bed Room ',
      image:
        'https://www.pokharalodge.com/wp-content/uploads/2021/03/family-room.jpg',
      date: 'Bedroom',
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
  New Pokhara Lodge in Lakeside Pokhara offer Family room with attached bathroom. It has 1 double bed and 2 single beds so 4 to 5 people of a family can easily accommodate. Carpeted rooms with wooden furnishings. The private bathroom is equipped with shower facilities. Rooms are with plenty of lights and 2 private windows, some rooms offer mountain views. Very high speed WI FI internet is on the air free of cost for all hotel guest. Standard family room can be booked for 3 to 5 people or for a family. Tea bags, Cups, Sugar and Electric Kettle is in the room. So any time you can make your own black Tea, Hot Water or Instant Noodles.
  </Text>
  
  </>
  )
}