import { Box, Button } from '@mantine/core';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { HiOutlineFolderDownload } from 'react-icons/hi';

import ResumeScreen from 'screens/ResumeScreen';

type ResumePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const ResumePage = ({ isPuppeteer }: ResumePageProps) => {
  const downloadResume = async () => {
    /* náo entendi direito como funciona, mas peguei daqui
      https://github.com/zhumeisongsong/react-url-image-downloader/blob/main/src/index.tsx
    */

    const URL = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/resume`
      : 'http://localhost:3000/api/resume';

    const link = document.createElement('a');

    link.href = URL;
    link.setAttribute('download', `Eduardo Tioma - Resume.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: isPuppeteer ? theme.colors.gray[2] : '#363a51',
        padding: `${isPuppeteer ? '16px' : '32px'} 10px`,
      })}
    >
      <ResumeScreen />
      {!isPuppeteer && (
        <Box
          sx={{
            maxWidth: 720,
            display: 'flex',
            justifyContent: 'end',
            width: '100%',
            boxShadow: '5px 5px solid black',
          }}
          mt={8}
        >
          <Button
            id="download-button"
            onClick={downloadResume}
            leftIcon={<HiOutlineFolderDownload size={24} />}
            sx={{ alignSelf: 'end' }}
          >
            download
          </Button>
        </Box>
      )}
    </Box>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log(context.req.headers['user-agent']);

  return {
    props: {
      isPuppeteer: context.req.headers['user-agent'] === 'puppeteer',
    },
  };
};

export default ResumePage;
