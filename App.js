import { useState } from 'react';
import { FlatList, StyleSheet, View, Pressable, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => setModalVisible(false);

  const addGoalHandler = (newGoal) => {
    setGoals((currentGoal) => [...currentGoal, { text: newGoal, id: Math.random().toString() }]);
    closeModal();
  };

  const removeGoalHandle = (id) => {
    setGoals((currentGoal) => currentGoal.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#5e0acc" onPress={() => setModalVisible(true)} />
        {modalVisible ? <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} onCancel={closeModal} /> : ''}
        <View style={styles.goalContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => <GoalItem item={itemData.item} onRemoveGoal={removeGoalHandle} />}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    margin: 0,
  },
  goalContainer: {
    flex: 4,
    paddingTop: 20,
  },
});
