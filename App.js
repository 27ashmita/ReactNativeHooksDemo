import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Hooks } from './screens/Hooks';

const App = () => {
  const [data, setData] = useState(10)
    return (
      <View style={styles.container}>
        <Hooks data={data}/>
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

export default App;