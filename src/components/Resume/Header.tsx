import { Avatar, Box, Text, Title } from '@mantine/core';
import { MdEmail, MdLocationPin } from 'react-icons/md';

function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar size="lg" radius="xl" src="/perfil.jpeg" />
        <Box ml={4} sx={{ padding: '8px' }}>
          <Title order={1} sx={{ lineHeight: 1.2 }}>
            Eduardo Tioma
          </Title>
          <Text color="dimmed" size="sm" sx={{ lineHeight: 0.8 }}>
            Front-End software developer
          </Text>
        </Box>
      </Box>

      <Box>
        <Box sx={{ display: 'flex' }}>
          <MdLocationPin />
          <Text ml="4px" sx={{ fontSize: '12px' }}>
            São Caetano do Sul, SP - Brazil
          </Text>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <MdEmail />
          <Text ml="4px" sx={{ fontSize: '12px' }}>
            tioma.eduardo@gmail.com
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
