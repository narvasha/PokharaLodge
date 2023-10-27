import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import photo3 from "../../assets/Images/best-mountain-view-from.jpg";
import classes from './AboutUs.module.css';

export function AboutUs() {
  return (
    <Container size="md" style={{ maxWidth: "90%"}}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> React <br /> components library
          </Title>
          <Text c="dimmed" mt="md" style={{ maxWidth: "90%"}}>
          Located on Lakeside Street number 3, New Pokhara Lodge is an exceptional choice for tourists visiting Pokhara. Just a 4-minute stroll from Phewa Lake, this lodge offers a captivating garden adorned with diverse plants and flowers that enhance the ambiance. The garden is a cherished spot where many guests indulge in breakfast and beverages amidst a serene atmosphere. Moreover, New Pokhara Lodge boasts breathtaking views of the Annapurna range, Fishtail Himalaya, Dhaulagiri, Lamjung, Manaslu, and more, providing a truly mesmerizing experience. Some rooms even offer spectacular views of the majestic Himalayan Mountains.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
        <Image src={photo3} className={classes.image}  style={{ maxWidth: "500%"}}/>
      </div>
    </Container>
  );
}