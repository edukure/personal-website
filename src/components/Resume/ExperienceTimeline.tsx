import {
  Badge,
  Group,
  Text,
  Timeline,
  Box,
  Title,
  List as MantineList,
  ThemeIcon,
} from '@mantine/core';

import { FiGitCommit, FiGitBranch } from 'react-icons/fi';

function ExperienceTimeline() {
  return (
    <Box component={'section'}>
      <Title order={2}>Grupo Alura</Title>
      <Timeline mt={8} active={2} bulletSize={20} lineWidth={4} color="teal">
        <Timeline.Item
          title="Front-End intern (Content Team)"
          bullet={<FiGitBranch size={12} />}
        >
          <List
            items={[
              "I'm contributing to new courses about React and Next.js with TypeScript",
              "I'll start writing articles about topics I find interesting about those tecnologies soon",
            ]}
          />

          <Group mt={8} spacing="xs">
            <Badge>Next.js</Badge>
            <Badge>React.js</Badge>
            <Badge>TypeScript</Badge>
          </Group>
          <Text color="dimmed" size="sm" mt={8}>
            Nov 2021 ~ now
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Advanced Front-End Bootcamp (Next.js)"
          bullet={<FiGitBranch size={12} />}
        >
          <List
            items={[
              "Spent 3 months dedicated to this bootcamp in which my primary responsability was helping students and explaining concepts that they didn't quite understand with video lessons only. The main subject of the course was Next.js, but I also helped filling the gaps related to React and Front-End as a whole.",
              'Every module (2 weeks), I wrote about problems the students could face and gave them tips about how they could solve them.',
              "With the help of other interns, I reviewed student's projects and helped choosing which ones would be showcased.",
            ]}
          />
          <Group mt={8} spacing="xs">
            <Badge>Next.js</Badge>
            <Badge>React.js</Badge>
            <Badge color="red">styled-components</Badge>
            <Badge color="pink">storybook</Badge>
            <Badge color="green">jest</Badge>
            <Badge color="red">React Testing Library</Badge>
          </Group>
          <Text color="dimmed" size="sm" mt={8}>
            July 2021 ~ Nov 2021
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Scuba Team intern"
          bullet={<FiGitBranch size={12} />}
        >
          <List
            items={[
              "Spent a few months just answering basic questions of HTML, CSS and JavaScript. I didn't go beyond the basics, but this taught me how to explain concepts in a simple manner for beginners to understand.",
              'Studied React and Next.js when I could',
            ]}
          />
          <Group mt={8} spacing="xs">
            <Badge color="orange">HTML</Badge>
            <Badge>CSS</Badge>
            <Badge color="yellow">javascript</Badge>
          </Group>
          <Text color="dimmed" size="sm" mt={8}>
            April 2021 ~ July 2021
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}

type ListProps = {
  items: string[];
};

function List({ items }: ListProps) {
  return (
    <MantineList
      styles={{
        itemIcon: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '2px',
        },
        item: {
          fontSize: '14px',
        },
      }}
      icon={
        <ThemeIcon
          size={18}
          radius="xl"
          sx={(theme) => ({
            backgroundColor: 'transparent',
            color: theme.colors.teal[8],
          })}
        >
          <FiGitCommit size={18} />
        </ThemeIcon>
      }
    >
      {items.map((item, index) => (
        <MantineList.Item key={index}>{item}</MantineList.Item>
      ))}
    </MantineList>
  );
}

export default ExperienceTimeline;
