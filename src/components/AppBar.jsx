import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text>Repositories</Text>
      </Pressable>
      <Link to="/sign-in">
        <Text>Sign In</Text>
      </Link>
    </View>
  );
};

export default AppBar;
