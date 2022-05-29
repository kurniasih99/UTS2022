import React, {useState, Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Register({navigation}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  
  onRegister = () => {
    if (!username && !password) {
      Alert.alert('Silakan masukkan nama pengguna dan kata sandi!')
    } else if (!username) {
      Alert.alert('Silakan masukkan nama pengguna')
    } else if (!password) {
      Alert.alert('Silakan masukkan nama kata sandi')
    } else if (password != password2) {
      Alert.alert('Konfirmasi Kata Sandi Salah')
    }
    else {
      Alert.alert('Daftar Berhasil Silakan Masuk dengan akun Anda');
      navigation.navigate('Login')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Daftar KNIAS App
      </Text>
      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder={'Nama Perngguna'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={'Kata Sandi'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        value={password2}
        onChangeText={(password2) => setPassword2(password2)}
        placeholder={'Konfirmasi Kata Sandi'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Register'}
        style={styles.button}
        onPress={() => {
          onRegister()}
        }
      />
      <Text 
        style={styles.register}
        onPress={() => {
          navigation.navigate('Login')
        }}
      >
        Sudah memiliki akun? Gabung
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