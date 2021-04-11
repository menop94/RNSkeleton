import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

export function LoadingModal({ loading }: { loading: boolean }) {
  return (
    <Modal visible={loading} transparent>
      <View style={styles.container}>
        <View style={styles.content}>
          <ActivityIndicator color="white" size="large" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
