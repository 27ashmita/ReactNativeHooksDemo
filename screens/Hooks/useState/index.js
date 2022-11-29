import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const UseState = () => {
  const [count, setCount] = useState(0);
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlue}>This is useState Class</Text>
        <Text style={styles.text}>Count is: {count}</Text>
        <Button title='Add state' onPress={()=>setCount(count+1)}/>
        <Button title='Remove state' onPress={()=>setCount(count-1)}/>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    margin: 20
  },
  text: {
    color: 'red',
    alignSelf: 'center',
    margin: 20
  },
});