import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function MainScreen() {
    const [baseCurrency, setBaseCurrency] = useState('CAD');
    const [targetCurrency, setTargetCurrency] = useState('USD');
    const [amount, setAmount] = useState('1');
    const [convertedAmount, setConvertedAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

  const validateInputs = () => {
    const currencyRegex = /^[A-Z]{3}$/;
    
    if (!currencyRegex.test(baseCurrency.toUpperCase())) {
      setError('Base currency must be 3 uppercase letters');
      return false;
    }
    if (!currencyRegex.test(targetCurrency.toUpperCase())) {
      setError('Target currency must be 3 uppercase letters');
      return false;
    }
    
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      setError('Amount must be a positive number');
      return false;
    }
    
    return true;
  };

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

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>

      {error ? <Text style={styles.error}>{error}</Text> : null}

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
},
button: {
  backgroundColor: '#007AFF',
  padding: 15,
  borderRadius: 8,
  marginTop: 10,
},
buttonText: {
  color: '#fff',
  textAlign: 'center',
  fontSize: 16,
  fontWeight: '600',
},
error: {
  color: 'red',
  marginTop: 15,
  textAlign: 'center',
},
});