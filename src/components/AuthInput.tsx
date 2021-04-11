import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type InputProps = {
  onChange: (text: string) => void;
  placeholder: string;
  value: string;
};

export function AuthInput(props: InputProps) {
  const { onChange, placeholder, value } = props;

  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChange} placeholder={placeholder} value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderColor: 'gray',
    borderRadius: 3,
    borderWidth: 1,
  },
});
