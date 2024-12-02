import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 
  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const WorkSettings = [
  'School',
  'Club',
  'Private Training and Camps',
  'Youth Sport Facility/Organizations',
  'Faith-Based',
  'Others'
];

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    date: '',
    phone: '',
    state: '',
    workSetting: '',
    otherWorkSetting: '',
    ethnicity: ''
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatPhoneNumber = (text) => {
    const cleaned = text.replace(/\D+/g, ''); 
    const match = cleaned.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const formatted = `${match[1]}${match[2] ? `-${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}`;
      return formatted;
    }
    return text;
  };

  const handlePhoneChange = (text) => {
    const formattedPhone = formatPhoneNumber(text);
    handleInputChange('phone', formattedPhone);


    if (formattedPhone.replace(/\D+/g, '').length < 10) {
      setPhoneError('Phone number must be 10 digits.');
    } else {
      setPhoneError('');
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      handleInputChange('date', selectedDate.toISOString().split('T')[0]); 
    }
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Baseline - Precourse Questionnaire</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={formData.fullName}
        onChangeText={(text) => handleInputChange('fullName', text)}
      />
      
      <View style={styles.datePickerContainer}>
        <Text>Date: {formData.date || "Not selected"}</Text>
        <Button title="Pick a Date" onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
          <DateTimePicker
            value={formData.date ? new Date(formData.date) : new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>
      
      <View>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={formData.phone}
          onChangeText={handlePhoneChange}
          keyboardType="phone-pad"
        />
        {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
      </View>
      
      <View style={styles.pickerContainer}>
        <Text>State of Residence</Text>
        <Picker
          selectedValue={formData.state}
          onValueChange={(itemValue) => handleInputChange('state', itemValue)}
        >
          <Picker.Item label="Select State" value="" />
          {US_STATES.map((state) => (
            <Picker.Item key={state} label={state} value={state} />
          ))}
        </Picker>
      </View>
      
      <View style={styles.pickerContainer}>
        <Text>Work Setting</Text>
        <Picker
          selectedValue={formData.workSetting}
          onValueChange={(itemValue) => handleInputChange('workSetting', itemValue)}
        >
          <Picker.Item label="Select Work Setting" value="" />
          {WorkSettings.map((setting) => (
            <Picker.Item key={setting} label={setting} value={setting} />
          ))}
        </Picker>
      </View>
      
      {formData.workSetting === 'Others' && (
        <TextInput
          style={styles.input}
          placeholder="Please specify work setting"
          value={formData.otherWorkSetting}
          onChangeText={(text) => handleInputChange('otherWorkSetting', text)}
        />
      )}
      
      <View style={styles.pickerContainer}>
        <Text>Ethnicity</Text>
        <Picker
          selectedValue={formData.ethnicity}
          onValueChange={(itemValue) => handleInputChange('ethnicity', itemValue)}
        >
          <Picker.Item label="Select Ethnicity" value="" />
          <Picker.Item label="Hispanic or Latino" value="Hispanic" />
          <Picker.Item label="Not Hispanic or Latino" value="Not Hispanic" />
        </Picker>
      </View>
      
      <Button 
        title="Save and Go to Next Step" 
        onPress={handleSave}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  pickerContainer: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  datePickerContainer: {
    marginBottom: 20
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 10
  }
});

export default App;
