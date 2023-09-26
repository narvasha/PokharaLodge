import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Title } from '@mantine/core';
import classes from './Gallery.module.css';



const mockdata = [
  {
    title: 'just across road ',
    image:
      'https://www.pokharalodge.com/wp-content/uploads/2019/04/pokhara-mahendra-768x576.jpg',
    date: 'Fewa Lake',
  },
  {
    title: 'Davis-Fall',
    image:
      'https://pokharaphotogallery.com/wp-content/uploads/2019/07/davis-fall-8.jpg',
    date: 'Davis-Fall',
  },
  {
    title: 'People are crossing lake by boat to go Temple ',
    image:
      'https://pokharaphotogallery.com/wp-content/uploads/2019/07/barahi-temple-3.jpg',
    date: 'Tal-Baharai-Temple',
  },
  {
    title: ' You can visit the World-Peace-Stupa to enjoy the view of Pokhara',
    image:
      'https://pokharaphotogallery.com/wp-content/uploads/2019/07/peacestupa-2.jpg',
    date: 'World-Peace-Stupa',
  },
  {
    title: 'Museum ',
    image:
      'https://pokharaphotogallery.com/wp-content/uploads/2019/07/intmuseum6.jpg',
    date: 'International-Mountain-Museum',
  },
  {
    title: 'Sarangkot is a popular destination for tourists who come to enjoy the stunning sunrise and sunset views over the Himalayan mountains. Visitors can take a short hike up to the hilltop.',
    image:
      'https://pokharaphotogallery.com/wp-content/uploads/2019/07/sarangkot-sunrise-tour-8.jpg',
    date: 'SarangkOt',
  },
  
];

export function Gallery() {
  
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={2920 / 2080}>
        
        
        <Image src={article.image}  />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={900} mt="md">
        {article.date}
      </Text>
      <Text className={classes.text} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    
   <div>
    <div style={{ padding:"5px"}}>
<Title className={classes.title} >
  Places To Explore 
</Title>
  <Text className={classes.text}>
    There are lots of places that you can explore..........
  </Text>
    <Container py="xl" style={{width:"100%", maxWidth:"100%"}}>
      <SimpleGrid cols={{ base: 3, sm: 3 }}>{cards}</SimpleGrid>
    </Container>
    </div>
    </div>
  );

}
