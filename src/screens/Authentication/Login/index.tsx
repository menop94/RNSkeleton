import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthInput, FormButton } from '../../../components';
import { LoadingModal } from '../../../components/LoadingModal';
import { Strings } from '../../../constants/Strings';
import { useAuth } from '../../../context/createDataContext';

function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserName = (value: string) => {
    setUserName(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onPressLogin = async () => {
    setLoading(true);

    try {
      await login({ userName, password });
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthInput
        key={'username'}
        onChange={onChangeUserName}
        placeholder={Strings.USERNAME_PLACEHOLDER}
        value={userName}
      />
      <AuthInput
        key={'password'}
        onChange={onChangePassword}
        placeholder={Strings.PASSWORD_PLACEHOLDER}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <FormButton onPress={onPressLogin} text={Strings.LOGIN} />
      </View>
      {loading && <LoadingModal loading={loading} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
});

export default Login;
