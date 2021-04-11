import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ping } from '../../api/ping';
import { useAuth } from '../../context/createDataContext';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28 }}>
        Welcome, {user.firstName} {user.lastName}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => ping()}>
        <Text>PING</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => logout()}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 30,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
