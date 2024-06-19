import { Link, router } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen(){
  return (
    <SafeAreaView>
      <View style={{
        padding: 10
      }}>
        <Text>Index Page</Text>
        <Button title="Click to home"
          onPress={() => router.push('/home')}
        />
      </View>
    </SafeAreaView>
  ) 
}