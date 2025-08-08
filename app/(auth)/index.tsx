import { ImageBackground, Dimensions, Text } from 'react-native';
const background = require('assets/images/imageBackground.png');
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

const { width, height } = Dimensions.get('window');
export default function Home() {
  return (
    <ImageBackground
      source={background}
      style={{
        flex: 1,
        width: width,
        height: height,
      }}
      resizeMode="cover" // This will scale properly to any phone
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 justify-start px-8 pt-36">
          <Text className="text-6xl font-bold text-white">Start Planning Now!</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
