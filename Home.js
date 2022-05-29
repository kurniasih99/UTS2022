import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UTS STMIK Antar Bangsa</Text>
      <View>
        <Text style={styles.text}>Nama : Kurniasih</Text>
        <Text style={styles.text}>NIM : 2010034</Text>
        <Text style={styles.text}>Kelas : 1.4B / TI</Text>
      </View>
      <Text style={styles.subtitle}>Semangat</Text>
      <Button
        title="Logout" 
        onPress={() => {
          navigation.navigate('Login')
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    alignItems: 'flex-start'
  }
});
