import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import styles from './styles';

//testattu oneplus 6 puhelimella ja todettu toimivaksi ainakin androidissa

export default function App() {
  const [type, setType] = useState(0)
  const [weight, setWeight] = useState(0)
  const [amount, setAmount] = useState(0)
  const [gender, setGender] = useState('male')
  const [time, setTime] = useState(0)
  const [alcohol, setAlcohol] = useState(0)

const types = [
  {label : 'beer',value: 4.5},
  {label : 'wine',value: 38.5},
  {label : 'spirits',value: 55.5},
  {label : 'Nikin Speciaali',value: 72},
]

const amounts = [
    {label: '1 bottle',value: 1},
    {label: '2 bottles',value: 2},
    {label: '3 bottles',value: 3},
    {label: '4 bottles',value: 4},
    {label: '5 bottles',value: 5},
    {label: '6 bottles',value: 6},
    {label: '7 bottles',value: 7},
    {label: '8 bottles',value: 8},
    {label: '9 bottles',value: 9},
    {label: '10 bottles',value: 10},
    {label: '11 bottles',value: 11},
    {label: '12 bottles',value: 12},
    {label: '13 bottles',value: 13},
    {label: '14 bottles',value: 14},
    {label: '15 bottles',value: 15},
]
const times = [
  {label: '1 Hour',value: 1},
  {label: '2 Hour',value: 2},
  {label: '3 Hour',value: 3},
  {label: '4 Hour',value: 4},
  {label: '5 Hour',value: 5},
  {label: '6 Hour',value: 6},
  {label: '7 Hour',value: 7},
  {label: '8 Hour',value: 8},
  {label: '9 Hour',value: 9},
  {label: '10 Hour',value: 10},
  {label: '11 Hour',value: 11},
  {label: '12 Hour',value: 12},
  {label: '13 Hour',value: 13},
  {label: '14 Hour',value: 14},
  {label: '15 Hour',value: 15},
  {label: '16 Hour',value: 16},
  {label: '17 Hour',value: 17},
  {label: '18 Hour',value: 18},
  {label: '19 Hour',value: 19},
  {label: '20 Hour',value: 20},
  {label: '21 Hour',value: 21},
  {label: '22 Hour',value: 22},
  {label: '23 Hour',value: 23},
  {label: '24 Hour',value: 24},
  
]

  const genders = [
    {label: 'Male',value: 'male'},
    {label: 'Female',value: 'female'},
  ]
  
  const calculate = () => {
    console.log(time)
    
    let litres = amount * 0.33;
    let grams = litres * 8 * type;
    let burning = weight / 10;
    let gramsleft = grams - (burning * time);
    let promillesMale = gramsleft / (weight * 0.7);
    let promillesFemale = gramsleft / (weight * 0.6);

    
    if (gender === 'male') {
         setAlcohol(promillesMale)  
         if (promillesMale < 0) {setAlcohol(0)}
    }else {
      setAlcohol(promillesFemale)  
      if (promillesFemale < 0) {setAlcohol(0)}
    }
    if (weight == 0) alert ('need weight to calculate') 
    if (alcohol > 3) alert ('call a medic')
  } 

  return (
    <View style={styles.container}>

      <Text style={styles.Header}>Alcohol measurement apparatus </Text>
     <Text style={styles.Titles}>Weight</Text>
     <TextInput style={styles.Box} placeholder='enter your weight...' value={weight} onChangeText={text => setWeight(text)} keyboardType='number-pad' />

     <Text style={styles.Titles}>What did you drink?</Text>
     <Picker style={styles.picker} onValueChange={(itemValue)=> setType(itemValue)} selectedValue={type}>
      {
        types.map((type,index) => (
        <Picker.Item key={index} label={type.label} value={type.value} />
        ))
      }
     </Picker>
     <Text style={styles.Titles}>Amount</Text>
     <Picker style={styles.picker} onValueChange={(itemValue)=> setAmount(itemValue)} selectedValue={amount}>
      {
        amounts.map((amount,index) => (
        <Picker.Item key={index} label={amount.label} value={amount.value} />
        ))
      }
     </Picker>
     <Text style={styles.Titles}>Time</Text>
     <Picker style={styles.picker} onValueChange={(itemValue)=> setTime(itemValue)} selectedValue={time}>
      {
        times.map((time,index) => (
        <Picker.Item key={index} label={time.label} value={time.value} />
        ))
      }
     </Picker>
      <Text style={styles.Titles}>Gender</Text>
      <RadioForm
      buttonSize={20}
      radio_props={genders}
      initial={0}
      onPress={(value) => {setGender(value)}}
      />
     
     <Button title='Calculate' onPress={calculate} ></Button>
     <Text style= {[alcohol <= 0.5 ? styles.green : alcohol >= 0.5 && alcohol <= 1.2 ? styles.yellow : styles.red]}> {alcohol.toFixed(2)} promillea</Text>
     
    </View>
  );
}


