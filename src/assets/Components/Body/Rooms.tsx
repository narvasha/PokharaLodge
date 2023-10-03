import { IconEye, IconEyeDollar, IconFriends, IconMessageCircle, IconMoneybag, IconReportMoney, IconZoomMoney } from '@tabler/icons-react';
import { Card, Text, Group, Center, rem, useMantineTheme, SimpleGrid, Title } from '@mantine/core';
import classes from './Room.module.css';
import { Link } from 'react-router-dom';

export function Room() {
  const theme = useMantineTheme();

  return (
    <div style={{ padding:"60px"}}>
     
        <Title order={1}>
        Our Best Rooms
        </Title>
        <Text mt={10} mb={10}>
        Plenty of services to assure your relaxation and comfortability.
        </Text>
    <SimpleGrid cols={4} spacing={"28px"}>
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="/deluxe"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            'url(https://www.pokharalodge.com/wp-content/uploads/2019/04/deluxe-room-pokhara-lodge.jpg)',
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
          Deluxe Room
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
            With Mountatin Views
            </Text>

            <Group gap="lg">
              <Center>
                <IconReportMoney
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                $35-$45
                </Text>
              </Center>
              <Center>
                {/* <IconFriends
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  5
                </Text> */}
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
    
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="/family"
    //   href="https://mantine.dev/"
      target="_blank"
    >
      <div
      
        className={classes.image}
        
        style={{
          backgroundImage:
            'url(https://www.pokharalodge.com/wp-content/uploads/2021/03/family-room.jpg)',
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
        <Link to="family" className={classes.link}/>
          <Text size="lg" className={classes.title} fw={500}>
          Family Room
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
            With Mountatin Views
            </Text>

            <Group gap="lg">
              <Center>
                <IconReportMoney
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                $25
                </Text>
              </Center>
              <Center>
                {/* <IconFriends
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  5
                </Text> */}
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="/standard"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            'url(https://www.pokharalodge.com/wp-content/uploads/2019/05/standard-double-twin-room-2.jpg)',
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
          Standard Room
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
            With Mountatin Views
            </Text>

            <Group gap="lg">
              <Center>
                <IconReportMoney
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                $14-$22
                </Text>
              </Center>
              <Center>
                {/* <IconFriends
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  5
                </Text> */}
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="/semideluxe"
    //   href="https://mantine.dev/"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            'url(https://www.pokharalodge.com/wp-content/uploads/2019/05/room-16.jpg)',
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
          Semi-Deluxe Room
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
            With Mountatin Views
            </Text>

            <Group gap="lg">
              <Center>
                <IconReportMoney
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                $18-$25
                </Text>
              </Center>
              <Center>
                {/* <IconFriends
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  5
                </Text> */}
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
    </SimpleGrid>
    </div>
  );
}