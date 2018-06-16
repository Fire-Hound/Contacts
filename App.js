import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ContactText from './components/ContactText';
import {randomNumber} from './components/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 24
  },
  names: {
    fontSize: 26
  },
  number:{
    fontSize: 16
  }
});

const numbers = []
const names = ["Vikram","Kishan", "Ankit", "Zoo", "Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram"]
numbers = names.map( (value) => { return(randomNumber())})
names = names.map( (value, index) => { return(<ContactText key={index} styleName={styles.names}  
  styleNumber={styles.number} name={value} number={numbers[index]}/>) } )


export default class App extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <ScrollView style={styles.container} 
      contentContainerStyle={{alignItems : 'flex-start', justifyContent:'center'}}>
          {names}
      </ScrollView>
    );
  }
}

