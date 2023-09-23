import { useMantineColorScheme, Button, Group } from '@mantine/core';

export function Theme() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group style={{height:"1000px"}}>
        
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}