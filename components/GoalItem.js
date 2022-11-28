import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem} key={props.item.id}>
      <Pressable
        android_ripple={{ color: '#4e0ba7' }}
        onPress={props.onRemoveGoal.bind(this, props.item.id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressItem: { opacity: 0.5 },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
