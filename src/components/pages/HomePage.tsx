import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomePage</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View
        style={[
          styles.boxContainer,
          { marginTop: 220, flexDirection: "row", }
        ]}
      >
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
  },
  boxContainer: {
    marginTop: 30,
    flex: 1,
    flexDirection: "column",
  },
  box: {
    borderWidth: 1,
    borderColor: "#000",
    width: 50,
    height: 50,
    margin: 10,
  }
});

export default HomePage;