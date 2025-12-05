import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Currency Converter</Text>
      
      <View style={styles.content}>
        <Text style={styles.description}>
          A currency converter app that provides real-time exchange rates.
        </Text>
        
        <Text style={styles.sectionTitle}>Features:</Text>
        <Text style={styles.feature}>• Real-time exchange rates</Text>
        <Text style={styles.feature}>• Support for 150+ currencies</Text>
        <Text style={styles.feature}>• Clean and intuitive interface</Text>
        <Text style={styles.feature}>• Input validation</Text>
        
        <View style={styles.studentInfo}>
          <Text style={styles.sectionTitle}>Information:</Text>
          <Text style={styles.info}>Course: COMP3074 - Mobile Development</Text>
          <Text style={styles.info}>Patrick Solamillo</Text>
          <Text style={styles.info}>ID: 101464667</Text>
        </View>
        
        <Text style={styles.footer}>
          Powered by Free Currency API
        </Text>
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
  content: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  feature: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
    marginLeft: 10,
  },
  studentInfo: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
    fontStyle: 'italic',
  },
});
