import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";

function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();

  useEffect(() => {
    // const API_URL = "http://localhost:3001/";
    const API_URL = "http://192.168.0.102:3001/";

    let socket = io(`${API_URL}`);
    console.log("Yooooo");
    socket.on("connection", () => console.log("connected"));
  }, []);

  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
      />
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
});
