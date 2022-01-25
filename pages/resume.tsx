import { Box } from '@mantine/core';

import ResumeScreen from 'screens/ResumeScreen';

const ResumePage = () => {
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
      <ResumeScreen />
    </Box>
  );
};

export default ResumePage;
