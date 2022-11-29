import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const useEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("No data found")
  useEffect(() => {
    console.warn("use Effect", count)
    if (count >= 5) {
      setData("Hurray!!! New data is filled up")
    } else {
      setData("No data found")
    }
  })
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlue}>This is useState Class</Text>
        <Text style={styles.text}>Count is: {count}</Text>
        <Text style={styles.text}>{data}</Text>
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
