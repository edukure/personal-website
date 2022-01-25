import { Box, Button } from '@mantine/core';
import { SiGithub, SiLinkedin } from 'react-icons/si';

function CVFooter() {
  return (
    <Box
      component="footer"
      mt={12}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button
        component="a"
        href="https://www.linkedin.com/in/eduardo-tioma-b036a4170/"
        target="_blank"
        variant="subtle"
        color="blue"
        leftIcon={<SiLinkedin size={20} />}
      >
        Eduardo Tioma
      </Button>
      <Button
        component="a"
        href="https://github.com/edukure"
        target="_blank"
        variant="subtle"
        leftIcon={<SiGithub size={20} />}
        sx={(theme) => ({
          backgroundColor: theme.colors.white,
          color: theme.colors.gray[9],
          '&:hover': {
            backgroundColor: theme.colors.gray[1],
          },
        })}
      >
        @edukure
      </Button>
    </Box>
  );
}

export default CVFooter;
