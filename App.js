/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const App = () => {
  // we will make a countdown set to 3 sec
  const [counter, setCounter] = useState(3);

  //  we will make a counter up- which will record user actions.
  const [numPresses, changePresses] = useState(0);

  //  we create array  of picutres
  const [images, setImages] = useState([
    { id: "1", image: require("./1.jpg") },
    { id: "2", image: require("./2.jpg") },
    { id: "3", image: require("./3.jpg") },
    { id: "4", image: require("./4.jpg") },
    { id: "5", image: require("./5.jpg") },
    { id: "6", image: require("./6.jpg") },
    { id: "7", image: require("./7.jpg") },
    { id: "8", image: require("./8.jpg") },
  ]);

  //  we will make a "map" counter moveing thorugh the array
  const [numarray, changearray] = useState(0);
  // change counter number if decited if to move to the next picutres or not
  useEffect(() => {
    if (counter == 0) {
      changearray(numarray + 1);
    }
  }, [counter]);
  //  show the alert only one time if the numPresses is equal 3-6-9 etc
  useEffect(() => {
    if (numPresses > 0 && numPresses % 3 == 0) {
      alert("Wow you already saw " + numPresses + " pictures");
    }
  }, [numPresses]);

  //  get the size of the array
  let x = images.length - 1;

  //   stop intvervals to not go below 0
  let y = 0;
  let w = () => {
    setCounter((counter) => {
      if (counter == 0) {
        clearInterval(y);
        return 3;
      }
      return counter - 1;
    });
  };
  //  we will set interval of counter- going down 1 sec at a time.
  const Timer = () => {
    if (counter > 0) {
      y = setInterval(w, 1000);
    } else {
      setCounter(counter + 3);
    }
  };

  return (
    <View style={styles.contanier}>
      <Text style={styles.sectionTitle}>{counter}</Text>
      <View style={styles.mainConatinerStyle}>
        <Button
          color="#841584"
          title="Press me!"
          onPress={() =>
            alert(
              "Welcome to ELONTHEAPP Press Random in order to see interesting pictures!"
            )
          }
        />
      </View>
      <Image source={images[numarray]["image"]} style={styles.randompicture} />

      <TouchableOpacity
        onPress={() => {
          changePresses(numPresses + 1);
          Timer();
          if (numarray == x) {
            changearray(0);
          }
        }}
        style={styles.Buttonpositon}
      >
        <Text style={styles.buttonTEXT}>Random</Text>
        <Text style={styles.sectionTitleb}>
          Total pictures showed {numPresses}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: "#07121B",
  },
  mainConatinerStyle: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    right: 160,
    top: 0,
  },

  buttonTEXT: {
    fontSize: 45,
    color: "#B9AAFF",
    height: 100,
  },

  sectionTitle: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    color: "red",
    padding: 8,
    fontSize: 40,
    fontWeight: "600",
    alignSelf: "center",
  },

  Buttonpositon: {
    position: "relative",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitleb: {
    flex: 1,
    color: "blue",
    padding: 8,
    fontSize: 24,
    fontWeight: "600",
    height: 100,
  },
  randompicture: {
    marginTop: 10,
    width: "80%",
    height: "57%",
    alignSelf: "center",
  },
});

export default App;
