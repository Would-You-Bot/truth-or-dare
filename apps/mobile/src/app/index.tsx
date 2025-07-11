import { View, Text } from "react-native";
import Card from "../components/Card";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-baloo-bold mb-8">Truth or Dare</Text>
      <Card text="Truth" color="red" />
      <Card text="Dare" color="green" />
    </View>
  );
}
