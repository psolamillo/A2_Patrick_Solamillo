import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function MainScreen() {
    const [baseCurrency, setBaseCurrency] = useState('CAD');
    const [targetCurrency, setTargetCurrency] = useState('USD');
    const [amount, setAmount] = useState('1');
    const [convertedAmount, setConvertedAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>From Currency</Text>
        <TextInput
          style={styles.input}
          value={baseCurrency}
          onChangeText={(text) => setBaseCurrency(text.toUpperCase())}
          placeholder="CAD"
          maxLength={3}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>To Currency</Text>
        <TextInput
          style={styles.input}
          value={targetCurrency}
          onChangeText={(text) => setTargetCurrency(text.toUpperCase())}
          placeholder="USD"
          maxLength={3}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          placeholder="1"
          keyboardType="decimal-pad"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
  marginBottom: 15,
},
label: {
  fontSize: 14,
  color: '#666',
  marginBottom: 5,
},
input: {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 8,
  padding: 12,
  fontSize: 16,
}
});