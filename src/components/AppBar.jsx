import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
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
      <ScrollView horizontal>
        <Pressable>
          <Text>Repositories</Text>
        </Pressable>

        <Link to="/sign-in">
          <Text>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
