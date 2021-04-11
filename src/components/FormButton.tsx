import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};

export function FormButton(props: ButtonProps) {
  const { onPress, text } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 0.33,
    alignItems: 'center',
    backgroundColor: '#dedede',

    shadowColor: '#aaa',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
  },
  text: {
    fontSize: 20,
    color: '#242424',
  },
});
