import { List, Text, Timeline } from '@mantine/core';

const Home = () => {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2}>
      <Timeline.Item title="Front-End intern (Content Team)">
        <List>
          <List.Item>
            {
              "I'm contributing to new courses about React and Next.js with TypeScript"
            }
          </List.Item>
          <List.Item>
            {
              "I'll start writing articles about topics I find interesting about those tecnologies soon"
            }
          </List.Item>
        </List>
        <Text color="dimmed" size="sm" style={{ marginTop: 4 }}>
          Nov 2021 ~ now
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Advanced Front-End Bootcamp (Next.js)">
        <List>
          <List.Item>
            {
              "Spent 3 months dedicated to this bootcamp in which my primary responsability was helping students and explaining concepts that they didn't quite understand with video lessons only. The main subject of the course was Next.js, but I also helped filling the gaps related to React and Front-End as a whole."
            }
          </List.Item>
          <List.Item>
            {
              'Every module (2 weeks), I wrote about problems the students could face and gave them tips about how they could solve them.'
            }
          </List.Item>
          <List.Item>
            {
              "With the help of other interns, I reviewed student's projects and helped choosing which ones would be showcased."
            }
          </List.Item>
        </List>
        <Text color="dimmed" size="sm" style={{ marginTop: 4 }}>
          July 2021 ~ Nov 2021
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Scuba Team intern">
        <List>
          <List.Item>
            {
              "Spent a few months just answering basic questions of HTML, CSS and JavaScript. I didn't go beyond the basics, but this taught me how to explain concepts in a simple manner for beginners to understand."
            }
          </List.Item>
          <List.Item>{'Studied React and Next.js when I could'}</List.Item>
        </List>
        <Text color="dimmed" size="sm" style={{ marginTop: 4 }}>
          April 2021 ~ July 2021
        </Text>
      </Timeline.Item>
    </Timeline>
  );
};

export default Home;
