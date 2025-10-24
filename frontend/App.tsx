// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { checkHealth } from './src/api/client';

export default function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    checkHealth()
      .then(res => setStatus(`Backend: ${res.data.status}`))
      .catch(err => setStatus(`Error: ${err.message}`));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
