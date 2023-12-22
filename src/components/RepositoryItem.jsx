import React from "react";
import { View } from "react-native-web";
import Text from "./Text";

const RepositoryItem = ({
  fullName,
  description,
  language,
  stars,
  forks,
  reviews,
  rating,
}) => {
  return (
    <View>
      <Text>Fullname: {fullName}</Text>
      <Text>Desctoption: {description}</Text>
      <Text>Langiage: {language}</Text>
      <Text>Start: {stars}</Text>
      <Text>Forks: {forks}</Text>
      <Text>Reviews: {reviews}</Text>
      <Text>Rating:{rating}</Text>
    </View>
  );
};

export default RepositoryItem;
