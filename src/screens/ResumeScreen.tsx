import { Paper } from '@mantine/core';

import Resume from 'components/Resume';

const ResumeScreen = () => {
  return (
    <>
      <Paper
        padding="md"
        shadow="xs"
        sx={{ maxWidth: 720, paddingLeft: '2rem', paddingRight: '2rem' }}
      >
        <Resume />
      </Paper>
    </>
  );
};

export default ResumeScreen;
