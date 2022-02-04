import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ContactsMenu from "./components/ContactsMenu";
import MenuButtons from "./components/MenuButtons";
import SearchBar from "./components/SearchBar";
import Home from "./screens/Home";
import Navigation from "./Navigation";

export default function App() {
  return <Navigation />;
}
