import { Box, Highlight, Text } from '@mantine/core';

function CVBio() {
  return (
    <Box>
      <Highlight
        component="p"
        sx={{ textIndent: '1.5rem' }}
        highlight={['Next.js', 'React']}
        highlightStyles={(theme) => ({
          color: theme.colors.blue[5],
          fontWeight: 700,
          background: 'transparent',
        })}
      >
        {
          "I started programming in C# back in 2018 developing desktop applications, but in early 2021 Next.js showed me how easely I could build frontend (even fullstack) software. Since then I've been studying frontend development with React and Next.js."
        }
      </Highlight>
      <Highlight
        component="p"
        highlight={['Biomedical Engineering']}
        highlightStyles={(theme) => ({
          backgroundImage: theme.fn.linearGradient(
            45,
            theme.colors.cyan[6],
            theme.colors.teal[6]
          ),
          fontWeight: 700,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        })}
      >
        {
          "🎓 I'm close the end of my graduation in Biomedical Engineering at the Universidade Federal de Uberlândia. Even though I find many things about this field interesting, I feel happier coding and studying software development."
        }
      </Highlight>
    </Box>
  );
}

export default CVBio;
