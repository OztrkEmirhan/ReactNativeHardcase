import React, { useState } from 'react';
import { Button, Snackbar, TextInput } from 'react-native-paper';

interface TodoInputProps {
  onAddTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({onAddTodo}) => {
  const [todo, setTodo] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleAddTodo = () => {
    if (!todo.trim()) {
      // Giriş alanı boşsa, snackbar ile hata mesajını göster.
      showSnackbar('Lütfen geçerli bir todo girin.');
      return;
    }

    onAddTodo(todo);
    setTodo('');
  };

  const showSnackbar = (text: string) => {
    setSnackbarVisible(true);
  };

  const hideSnackbar = () => {
    setSnackbarVisible(false);
  };

  return (
    <>
      <TextInput
        label="Todo Ekle"
        value={todo}
        onChangeText={text => setTodo(text)}
        style={{marginBottom: 10}}
      />
      <Button mode="contained" onPress={handleAddTodo}>
        Ekle
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={hideSnackbar}
        duration={3000} // Snackbar'ın görüntüleme süresi (ms cinsinden)
      >
        Lütfen geçerli bir todo girin.
      </Snackbar>
    </>
  );
};

export default TodoInput;
