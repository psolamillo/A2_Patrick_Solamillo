import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const API_KEY = 'fca_live_QWZG0KZZ6vrnHAkJFrn9gVCUQR45NzR9Cpa3QE9Z';

export default function MainScreen() {
    const [baseCurrency, setBaseCurrency] = useState('CAD');
    const [targetCurrency, setTargetCurrency] = useState('USD');
    const [amount, setAmount] = useState('1');
    const [result, setResult] = useState('');
    const [rate, setRate] = useState('');
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

  const convertCurrency = async () => {
    setError('');
    setResult('');
    setRate('');

    if (!validateInputs()) return;

    setLoading(true);

    try {
      const base = baseCurrency.toUpperCase();
      const target = targetCurrency.toUpperCase();
      
      const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${base}&currencies=${target}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.errors || !response.ok) {
        throw new Error(data.message || 'Failed to get exchange rate');
      }

      if (!data.data || !data.data[target]) {
        throw new Error('Currency not found');
      }

      const exchangeRate = data.data[target];
      const converted = parseFloat(amount) * exchangeRate;
      
      setRate(exchangeRate.toFixed(4));
      setResult(converted.toFixed(2));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Network error. Check your connection.');
      }
    } finally {
      setLoading(false);
    }
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

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={convertCurrency}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Convert</Text>
        )}
      </TouchableOpacity>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {result ? (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            {amount} {baseCurrency} = {result} {targetCurrency}
          </Text>
          <Text style={styles.rateText}>Exchange Rate: {rate}</Text>
        </View>
      ) : null}

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
buttonDisabled: {
  backgroundColor: '#999',
},
error: {
  color: 'red',
  marginTop: 15,
  textAlign: 'center',
},
resultBox: {
  marginTop: 25,
  padding: 20,
  backgroundColor: '#e8f5e9',
  borderRadius: 8,
},
resultText: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#2e7d32',
},
rateText: {
  fontSize: 14,
  textAlign: 'center',
  color: '#666',
  marginTop: 8,
},
});