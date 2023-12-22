import { View } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Pressable } from "react-native";
import * as yup from "yup";

const usernameValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long.")
    .required("Username is required"),
});
const passwordValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Password must be at least 3 characters long.")
    .required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      <FormikTextInput name="mass" placeholder="Weight (kg)" validationSchema = {usernameValidationSchema} />
      <FormikTextInput name="height" placeholder="Height (m)" validationSchema = {passwordValidationSchema} />
      <Pressable onPress={onSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
