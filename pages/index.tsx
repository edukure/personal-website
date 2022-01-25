import { Box } from '@mantine/core';

import CVScreen from 'screens/ResumeScreen';

const Home = () => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: theme.colors.gray[2],
        padding: '10px',
      })}
    >
      <CVScreen />
    </Box>
  );
};

export default Home;
