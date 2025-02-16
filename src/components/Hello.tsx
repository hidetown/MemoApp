// reatct-nativeから必要なツールをインポートする。
// type TextStyle : TextStyleという型をインポートする。
import { View, Text, StyleSheet, type TextStyle } from 'react-native'

// Propsというオブジェクトの中にはchildrenという値がある。
// そのchildrenは文字列型である。
interface Props {
    children: string
    // 必須ではなく、オプションにする。
    bang?: boolean
    // styleをコンポーネント外から受け取る。
    style?: TextStyle
}

// componentは関数で定義される。
// Hello定数にアロー関数：() => {}の値を代入する。
// propsにPropsオブジェクトを継承させる。
const Hello = (props: Props): JSX.Element => {
    // props.children : <Hello></Hello>の子要素（中身）を示す。
    const { children, bang, style } = props
    return (
        <View>
            {/* 配列を使用することで複数当てはめることができ、後の要素が選択される。 */}
            <Text style={[styles.text, style]}>
                {/* bangがnullであっても、trueとの比較によるbooleanで振り分ける。 */}
                Hello {children}{bang === true ? '!!!' : ''}
            </Text>
        </View>
    )
}

// StyleSheetを記述する。
const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        // フォントサイズはpxの記載不要
        fontSize: 40,
        fontWeight: 'bold',
        // 内側の余白を設定する。
        padding: 16
    }
})

// Helloというコンポーネントを他のファイルで使用できるようにする。
export default Hello
