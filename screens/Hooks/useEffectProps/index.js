import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const useEffectProps = () => {
  const [data, setData] = useState(10)
    return (
      <View style={styles.container}>
        <UseEffectPropsDisplay data={data}/>
        <Button title='Add state' onPress={()=>setData(data+10)}/>
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


export const UseEffectPropsDisplay = (props) => {
    const [data, setData] = useState("No data found")
    useEffect(() => {
      console.warn("use Effect", props.data)
      if (props >= 11) {
        setData("Hurray!!! New data is filled up")
      } else {
        setData("No data found")
      }
    })
      return (
        <View style={styles.container}>
          <Text style={styles.bigBlue}>Hooks</Text>
          <Text style={styles.text}>{data}</Text>
        </View>
      );
  };
  