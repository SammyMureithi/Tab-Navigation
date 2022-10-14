import { Button, StyleSheet, Text, View } from 'react-native';

function HomePage({navigation}) {
    return (
        <View>
            <Text>HomePages </Text>
            <Button title='Detailed' onPress={()=>navigation.navigate("Detailed")}/>
        </View>
  )
}

export default HomePage