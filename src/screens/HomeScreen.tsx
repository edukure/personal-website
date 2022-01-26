import {
  Box,
  Image,
  keyframes,
  Button,
  Container,
  Title,
  Text,
  Highlight,
} from '@mantine/core';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Link from 'next/link';

const xAxis = keyframes({
  from: {
    transform: ' translateX(-120px)',
  },
  to: {
    transform: 'translateX(120px)',
  },
});
const yAxis = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '25%': {
    transform: 'translateY(-52px)',
  },
  '50%': {
    transform: 'translateY(0px)',
  },
  '75%': {
    transform: 'translateY(52px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
});

const HomeScreen = () => {
  return (
    <Container
      size="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
      }}
    >
      <Box
        component="header"
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
            justifyContent: 'space-between',
            flexDirection: 'row',
          },
        })}
      >
        <Box
          sx={(theme) => ({
            order: 2,
            textAlign: 'center',
            [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
              textAlign: 'left',
              order: 1,
            },
          })}
        >
          <Text sx={{ color: 'white', textTransform: 'uppercase' }}>
            {"whyhellothere! 👋  I'm"}
          </Text>
          <Highlight
            highlight={['Eduardo Tioma']}
            highlightStyles={(theme) => ({
              backgroundImage: theme.fn.linearGradient(
                120,
                '#94d1bb',
                '#5cc59e'
              ),
              fontWeight: 700,
              fontSize: '3rem',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            })}
          >
            {'Eduardo Tioma'}
          </Highlight>

          <Highlight
            highlight={['Front-end Developer']}
            highlightStyles={(theme) => ({
              backgroundImage: theme.fn.linearGradient(
                180,
                theme.colors.gray[1],
                theme.colors.gray[2]
              ),
              fontWeight: 700,
              fontSize: '1.5rem',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            })}
            sx={{ color: 'white' }}
          >
            {"and I'm a Front-end Developer"}
          </Highlight>
          <Link href="/resume" passHref>
            <Button
              mt={16}
              component="a"
              rightIcon={<HiOutlineExternalLink size={20} />}
              radius="xl"
              size="md"
              color="dark"
            >
              resume
            </Button>
          </Link>
        </Box>

        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            height: 96 * 3,
            width: 96 * 3,
            order: 1,
            [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
              order: 2,
              height: 96 * 2,
            },
          })}
        >
          <Box
            sx={{
              overflow: 'hidden',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundImage: 'url(https://github.com/edukure.png)',
              backgroundPosition: 'center',
              backgroundSize: '64px 64px',
            }}
          />
          {/* Next.js */}
          <Box
            sx={(theme) => ({
              position: 'absolute',
              width: 240,
              height: 96,
              borderRadius: '50%',
              border: '4px solid',
              borderColor: '#5cc59e',
              display: 'grid',
              placeItems: 'center',
            })}
          >
            <Box
              className="grid animate-x place-items-center"
              sx={{
                display: 'grid',
                placeItems: 'center',
                animation: `${xAxis} 2000ms ease-in-out infinite alternate`,
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  placeItems: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  animation: `${yAxis} 4000ms cubic-bezier(.3,0,.67,.99) infinite`,
                }}
              >
                <Image src="/next-icon.png" alt="logo next.js" />
              </Box>
            </Box>
          </Box>
          {/* Alura */}
          <Box
            sx={(theme) => ({
              transform: 'rotate(-120deg)',
              position: 'absolute',
              width: 240,
              height: 96,
              borderRadius: '50%',
              border: '4px solid',
              borderColor: '#5cc59e',
              display: 'grid',
              placeItems: 'center',
            })}
          >
            <Box
              className="grid animate-x place-items-center"
              sx={{
                display: 'grid',
                placeItems: 'center',
                animation: `${xAxis} 2000ms ease-in-out infinite alternate`,
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  placeItems: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  animation: `${yAxis} 4000ms cubic-bezier(.3,0,.67,.99) infinite`,
                }}
              >
                <Image
                  src="/alura-icon.png"
                  sx={{
                    transform: 'rotate(120deg)',
                  }}
                  alt="logo alura"
                />
              </Box>
            </Box>
          </Box>

          {/* JS */}
          <Box
            sx={(theme) => ({
              transform: 'rotate(120deg)',
              position: 'absolute',
              width: 240,
              height: 96,
              borderRadius: '50%',
              border: '4px solid',
              borderColor: '#5cc59e',
              display: 'grid',
              placeItems: 'center',
            })}
          >
            <Box
              className="grid animate-x place-items-center"
              sx={{
                display: 'grid',
                placeItems: 'center',
                animation: `${xAxis} 2000ms ease-in-out infinite alternate`,
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  placeItems: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  animation: `${yAxis} 4000ms cubic-bezier(.3,0,.67,.99) infinite`,
                }}
              >
                <Image
                  src="/js-icon.png"
                  sx={{
                    transform: 'rotate(-120deg)',
                  }}
                  alt="logo alura"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeScreen;
