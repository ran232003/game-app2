import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function StartScreen() {
  const [text, setText] = React.useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.startScreen}
    >
      <ScrollView contentContainerStyle={styles.innerViewContainer}>
        <View>
          <Text style={styles.mainTitle}>Guess My Number</Text>
        </View>
        <View style={styles.innerView}>
          <View style={styles.titleText}>
            <Text style={styles.titleTextStyle}>Enter a Number</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={text}
              keyboardType="numeric" // Ensures only numeric input is allowed
              maxLength={10} // Optionally limit the number of digits
              onChangeText={(text) => setText(text)}
              style={styles.input}
              textColor={"yellow"}
              underlineColor="yellow"
              theme={{
                colors: {
                  text: "yellow",
                  primary: "yellow",
                  underlineColor: "yellow",
                },
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Confirm
            </Button>
            <Button mode="contained" onPress={() => setText("")}>
              Reset
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerViewContainer: {
    flexGrow: 1, // This makes sure the content can scroll if needed
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#3b021f",
    color: "yellow",
    width: "60%",
  },
  titleText: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  innerView: {
    backgroundColor: "#3b021f",
    width: "90%",
    padding: 30,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  titleTextStyle: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 40,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    marginBottom: 40,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  btn: {
    marginRight: 10,
  },
});
