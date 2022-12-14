import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const [cards, setCards] = useState(arr);
  const shuffle = () => {
    const shuffleArr = [...arr].sort(() => Math.random() - 0.5);
    setCards(shuffleArr);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {cards.map((item, index) => {
          return (
            <View item={item} key={index} style={styles.box}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.button} onPress={shuffle}>
        <Text>Shuffle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    flex: 1,
  },
  wrapper: {
    height: "50%",
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    height: "18%",
    width: "18%",
    backgroundColor: "#e5e5e5",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: "7%",
    width: "60%",
    borderRadius: 10,
    backgroundColor: "yellow",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
