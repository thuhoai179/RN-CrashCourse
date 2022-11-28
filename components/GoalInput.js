import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [newGoal, setNewGoal] = useState('');

  const goalInputHandler = (text) => {
    setNewGoal(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(newGoal);
    setNewGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={newGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={props.onCancel} style={styles.button} />
          <Button title="Add goal" onPress={addGoalHandler} style={styles.button} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#5e0acc'
  },
  image: {
    height: 100,
    width: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%%',
    padding: 8,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    backgroundColor: '#2caeff'
  },
});
