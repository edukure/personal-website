import { Divider } from '@mantine/core';

import Bio from './Bio';
import ExperienceTimeline from './ExperienceTimeline';
import Footer from './Footer';
import Header from './Header';

function Resume() {
  return (
    <>
      <Header />
      <Divider my="sm" />
      <Bio />
      <ExperienceTimeline />
      <Footer />
    </>
  );
}

export default Resume;
