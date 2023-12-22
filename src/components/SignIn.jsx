import { View } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Pressable } from "react-native";

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      <FormikTextInput name="mass" placeholder="Weight (kg)" />
      <FormikTextInput name="height" placeholder="Height (m)" />
      <Pressable onPress={onSubmit}>
        <Text>Calculate</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
