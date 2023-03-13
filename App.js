import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Bug from './components/Bug';

export default function App() {
  const [bug, setBug] = useState();
  
  const handleAddBug = () => {
    console.log(bug);
  }

  return (
    <View style={styles.container}>
      
    {/* Today's Bugs */}
      <View style={styles.bugsWrapper}>
        <Text style={styles.sectionTitle}>Reported Bugs</Text>

        <View style={styles.items}>
          {/* This is where the bug will go */}
          <Bug text={'Bug 1'}/>
          <Bug text={'Bug 2'}/>
        </View>
      </View>
      {/* Write a bug */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeBugWrapper}>

        <TextInput style={styles.input} placeholder={'Enter your bug'} value={bug} onChangeText={text=>setBug(text)} />
        <TouchableOpacity onPress={()=>handleAddBug()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
    bugsWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30,
    },
    writeBugWrapper:{
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,

    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
  });
