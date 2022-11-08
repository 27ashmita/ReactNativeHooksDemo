import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Hooks = (props) => {
  const [data, setData] = useState("No data found")
  useEffect(() => {
    console.warn("use Effect", props.data)
    if (props.data >= 11) {
      setData("Hurray!!! New data is filled up")
    } else {
      setData("No data found", props.data)
    }
  })
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlue}>Hooks</Text>
        <Text style={styles.text}>{data}</Text>
        {/* <Text style={styles.text}>{data}</Text>
        <Button title='Add state' onPress={()=>setCount(count+1)}/>
        <Button title='Remove state' onPress={()=>setCount(count-1)}/> */}
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
