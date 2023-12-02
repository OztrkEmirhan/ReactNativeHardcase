/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MMKVStorage from 'react-native-mmkv-storage';
import { Snackbar } from 'react-native-paper';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const Home = () => {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [snackbarText, setSnackbarText] = React.useState('');

  const mmkv = new MMKVStorage.Loader().initialize();

  useEffect(() => {
    const storedTodos = mmkv.getString('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = (todo: string) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    mmkv.setString('todos', JSON.stringify(updatedTodos));
    showSnackbar('Todo eklendi!');
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    mmkv.setString('todos', JSON.stringify(updatedTodos));
    showSnackbar('Todo silindi!');
  };

  const showSnackbar = (text: string) => {
    setSnackbarText(text);
    setSnackbarVisible(true);
  };

  return (
    <View style={styles.container}>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}>
        {snackbarText}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Home;
