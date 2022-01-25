import { Box, Divider, Paper } from '@mantine/core';
import CVExperienceTimeline from '../components/CVExperienceTimeline';
import CVHeader from '../components/CVHeader';

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
      <Paper padding="md" shadow="xs" sx={{ maxWidth: 720 }}>
        <CVHeader />
        <Divider my="sm" />
        <CVExperienceTimeline />
      </Paper>
    </Box>
  );
};

export default Home;
