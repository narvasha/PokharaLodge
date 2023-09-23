import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import {  IconBrandInstagram, IconBrandFacebook, IconBrandGmail } from '@tabler/icons-react';

import classes from './FooterLinks.module.css';
import logo from "../../Images/hotel logo.webp";
const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      
    ],
  },
  
  {
    title: 'Community',
    links: [
      { label: 'Follow on Facebook', link: 'https://www.facebook.com/pokharalodge' },
      { label: 'Follow on Instagram', link: '#' },
      { label: 'Email Us', link: '#' },
     
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <img src={logo} style={{height:"50px",marginTop:"20px"}} />
          <Text size="xs" c="dimmed"  className={classes.description} >
          Book your stay at New Pokhara Lodge and create unforgettable memories in Nepal’s breathtaking paradise.”
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
        Copyright © 2023 Hotel in Lakeside Pokhara | Powered by New Pokhara Lodge, Lakeside Pokhara Nepal.Telephone 977-9846107866
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGmail style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}