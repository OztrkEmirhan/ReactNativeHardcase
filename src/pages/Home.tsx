import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TextInput,
  Button,
  List,
  IconButton,
  Snackbar,
} from 'react-native-paper';
import MMKVStorage from 'react-native-mmkv-storage';

const Home = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');

  const mmkv = new MMKVStorage.Loader().initialize();

  useEffect(() => {
    // Uygulama yüklendiğinde MMKV'den verileri al
    const storedTodos = mmkv.getString('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      const updatedTodos = [...todos, todo];
      setTodos(updatedTodos);
      mmkv.setString('todos', JSON.stringify(updatedTodos));
      setTodo('');
    } else {
      setSnackbarText('Lütfen geçerli bir todo girin.');
      setSnackbarVisible(true);
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    mmkv.setString('todos', JSON.stringify(updatedTodos));
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Todo Ekle"
        value={todo}
        onChangeText={text => setTodo(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddTodo} style={styles.button}>
        Ekle
      </Button>

      <List.Section>
        <List.Subheader>TODO Listesi</List.Subheader>
        {todos.map((item, index) => (
          <List.Item
            key={index}
            title={item}
            titleStyle={styles.todoItemTitle}
            // eslint-disable-next-line react/no-unstable-nested-components
            right={() => (
              <IconButton
                icon="delete"
                onPress={() => handleDeleteTodo(index)}
              />
            )}
          />
        ))}
      </List.Section>

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
  input: {
    marginVertical: 8,
  },
  button: {
    marginTop: 16,
  },
  todoItemTitle: {
    fontWeight: 'bold',
    color: '#6750A4',
  },
});

export default Home;
