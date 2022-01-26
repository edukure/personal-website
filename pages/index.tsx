import { Box } from '@mantine/core';

import HomeScreen from 'screens/HomeScreen';

const Home = () => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#363a51',
        // background: theme.fn.linearGradient(0, '#0b8896', '#5DE4AB'),
        padding: '10px',
      })}
    >
      <HomeScreen />
    </Box>
  );
};

export default Home;
