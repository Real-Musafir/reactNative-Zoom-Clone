import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Jessy The",
    photo: require("../assets/face1.jpeg"),
  },
  {
    type: "contact",
    name: "Hemel Ahmed",
    photo: require("../assets/face2.jpeg"),
  },
  {
    type: "contact",
    name: "Kaiyes Boss",
    photo: require("../assets/face3.jpeg"),
  },
];

function ContactsMenu() {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {contact.type === "starred" ? (
            <View style={styles.startIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}

          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
}

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  startIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
