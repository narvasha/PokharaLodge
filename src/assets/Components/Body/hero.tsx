import { Overlay, Container, Title, Button, Text, Grid, GridCol, Paper, Box } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import hotel from "../../Images/hotel.jpg";
export function HeroContentLeft() {
  return (
    <div className={classes.hero}>
      {/* <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      /> */}
      
       
      <Container className={classes.container} size="md">
      
        <Box className={classes.box}>
        <Title className={classes.title}>NEW POKHARA LODGE </Title>
        <Text className={classes.description} size="xl" mt="xl">
        An ideal Hotel for peace loving travelers since 1994. Book Now!".
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          BOOK NOW
        </Button>
        
        
        </Box>
        </Container>
      
      <img className={classes.image} src={hotel} /> 
      
    </div>
    
  );
}
