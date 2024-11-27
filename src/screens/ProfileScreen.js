import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [screen, setScreen] = useState('login'); // Track which screen to show
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Home",
    });
  }, [navigation]);

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      navigation.navigate('Cart');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    alert(`Registration successful for ${fullName}`);
    setScreen('login'); // Go back to login screen after registration
  };

  const handleForgotPassword = () => {
    alert(`Password reset link sent to ${username}`);
    setScreen('login'); // Go back to login screen
  };

  return (
    <View style={styles.container}>
      {screen === 'login' && (
        <>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleLogin} />
          <TouchableOpacity onPress={() => setScreen('register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setScreen('forgotPassword')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </>
      )}

      {screen === 'register' && (
        <>
          <Text style={styles.title}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Button title="Submit" onPress={handleRegister} />
          <TouchableOpacity onPress={() => setScreen('login')}>
            <Text style={styles.link}>Back to Sign In</Text>
          </TouchableOpacity>
        </>
      )}

      {screen === 'forgotPassword' && (
        <>
          <Text style={styles.title}>Forgot Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <Button title="Submit" onPress={handleForgotPassword} />
          <TouchableOpacity onPress={() => setScreen('login')}>
            <Text style={styles.link}>Back to Sign In</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  link: {
    marginTop: 10,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});
