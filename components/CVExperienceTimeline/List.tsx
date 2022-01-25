import { List as MantineList, ThemeIcon } from '@mantine/core';
import { FiGitCommit } from 'react-icons/fi';

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

export default List;
