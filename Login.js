import React, {useState, Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Login({navigation}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  onLogin = () => {
    if (!username && !password) {
      Alert.alert('Silakan masukkan nama pengguna dan kata sandi!')
    } else if (!username) {
      Alert.alert('Silakan masukkan nama pengguna')
    } else if (!password) {
      Alert.alert('Silakan masukkan kata sandi!')
    } else {
      Alert.alert('Berhasil');
      navigation.navigate('Home')
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        KNIAS App
      </Text>
      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder={'Nama Pengguna'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={'Kata Sandi'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Login'}
        style={styles.button}
        onPress={() => {
          onLogin()
        }}
      />
      <Text 
        style={styles.register}
        onPress={() => {
          navigation.navigate('Register')
        }}
      >
        Buat akun Baru! Daftar
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 280,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10
  },
  button: {
    borderRadius: 50,
    paddingHorizontal: 210
  },
  title: {
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "bold"
  },
  register: {
    marginTop: 20,
  }
});
