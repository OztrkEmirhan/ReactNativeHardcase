import React from 'react';
import { IconButton, List } from 'react-native-paper';

interface TodoListProps {
  todos: string[];
  onDeleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, onDeleteTodo}) => {
  return (
    <List.Section>
      <List.Subheader>TODO Listesi</List.Subheader>
      {todos.map((item, index) => (
        <List.Item
          key={index}
          title={item}
          titleStyle={{fontWeight: 'bold', color: '#6750A4'}}
          right={() => (
            <IconButton icon="delete" onPress={() => onDeleteTodo(index)} />
          )}
        />
      ))}
    </List.Section>
  );
};

export default TodoList;
