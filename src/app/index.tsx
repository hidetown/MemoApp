import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* ヘッダー部分 */}
            <View style={styles.header}>
                {/* ヘッダーの中で下部分にMemo Appなどを表示する。 */}
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
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
        // 画面全体に要素を広げる。
        // 設定しないと子要素の高さまでしか対応しない。
        flex: 1,
        backgroundColor: '#ffffff'
        // 上下中央に子要素を持ってくる。※CSSとは逆
        // justifyContent: 'center',
        // 左右中央に子要素を持ってくる。※CSSとは逆
        // alignItems: 'center'
    },

    // header関連
    header: {
        backgroundColor: '#467FD3',
        height: 104,
        // 子要素を下に配置する。
        justifyContent: 'flex-end'
    },

    headerInner: {
        // 子要素を中央に配置する。
        // ? : なぜhederではなく、headerInnerなんだろう。
        alignItems: 'center'
    },

    headerTitle: {
        // ? : bottomとmarginBottomの違いは？
        marginBottom: 8,
        fontSize: 24,
        // heightとlineHeightの違いは？
        lineHeight: 32,
        fontWeight: 'medium',
        color: '#ffffff'
    },

    headerRight: {
        // FlexBoxのコントロールを無視して右側に配置する。
        // 絶対位置を指定する。
        position: 'absolute',
        right: 16,
        bottom: 16,

        color: 'rgba(255, 255, 255, 0.7)'
    }
})

export default Index
