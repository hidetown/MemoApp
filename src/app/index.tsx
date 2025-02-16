import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* ヘッダー部分 */}
            <View>
                {/* ヘッダーの中で２分割したMemo App部分 */}
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>

            {/* MemoList */}
            <View>
                {/* MemoListItem */}
                <View>
                    {/* 左側のビュー */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025/02/16 19:14</Text>
                    </View>
                    {/* 右側のビュー */}
                    <View>
                        <Text>x</Text>
                    </View>
                </View>

                {/* MemoListItem */}
                <View>
                    {/* 左側のビュー */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025/02/16 19:14</Text>
                    </View>
                    {/* 右側のビュー */}
                    <View>
                        <Text>x</Text>
                    </View>
                </View>

                {/* MemoListItem */}
                <View>
                    {/* 左側のビュー */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025/02/16 19:14</Text>
                    </View>
                    {/* 右側のビュー */}
                    <View>
                        <Text>x</Text>
                    </View>
                </View>

                {/* MemoListItem */}
                <View>
                    {/* 左側のビュー */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025/02/16 19:14</Text>
                    </View>
                    {/* 右側のビュー */}
                    <View>
                        <Text>x</Text>
                    </View>
                </View>

                {/* MemoListItem */}
                <View>
                    {/* 左側のビュー */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025/02/16 19:14</Text>
                    </View>
                    {/* 右側のビュー */}
                    <View>
                        <Text>x</Text>
                    </View>
                </View>

                {/* MemoListItem */}
                <View>
                    {/* 左側のビュー */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025/02/16 19:14</Text>
                    </View>
                    {/* 右側のビュー */}
                    <View>
                        <Text>x</Text>
                    </View>
                </View>

                {/* MemoListItem */}
                <View>
                    {/* 左側のビュー */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025/02/16 19:14</Text>
                    </View>
                    {/* 右側のビュー */}
                    <View>
                        <Text>x</Text>
                    </View>
                </View>

                {/* MemoListItem */}
                <View>
                    {/* 左側のビュー */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025/02/16 19:14</Text>
                    </View>
                    {/* 右側のビュー */}
                    <View>
                        <Text>x</Text>
                    </View>
                </View>

                {/* MemoListItem */}
                <View>
                    {/* 左側のビュー */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025/02/16 19:14</Text>
                    </View>
                    {/* 右側のビュー */}
                    <View>
                        <Text>x</Text>
                    </View>
                </View>

            </View>

            {/* CreateButtun */}
            <View>
                <Text>+</Text>
            </View>

        </View>
    )
}

// stylesはアロー関数ではないんだ。
const styles = StyleSheet.create({
    container: {
        // 画面全体を覆う
        flex: 1,

        // 上下中央に子要素を持ってくる。※CSSとは逆
        justifyContent: 'center',
        // 左右中央に子要素を持ってくる。※CSSとは逆
        alignItems: 'center'
    }
})

export default Index
