import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
  } from '@mantine/core';
  import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandTripadvisor, IconBrandBooking, IconBrandFacebook, IconBrandWhatsapp } from '@tabler/icons-react';
  import { ContactIconsList } from './ContactIcons';
  import classes from './ContactUs.module.css';
import { IconBrandVimeo } from '@tabler/icons-react';
  
  const social = [IconBrandTripadvisor, IconBrandBooking, IconBrandFacebook,IconBrandWhatsapp,IconBrandVimeo];
  
  export function ContactUs() {
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={50} className={classes.social} variant="transparent">
        <Icon size="5rem" stroke={1.5} />
      </ActionIcon>
    ));
  
    return (
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              You can contact us on following platfroms
            </Text>
  
            <ContactIconsList />
  
            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="Narvasha Adhiakri"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to book a room"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
  
            <Group justify="flex-end" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    );
  }