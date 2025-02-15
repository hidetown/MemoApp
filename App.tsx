import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

// アローファンクションにして型を宣言する。
const App = (): JSX.Element => {
  // 型を宣言する。
  // let test: number = 1
  // test = 2

  // 関数も型宣言する。
  // testFuncという定数に戻り値を代入する。
  // const testFunc = (): string => {
  //   return "test"
  // }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App
