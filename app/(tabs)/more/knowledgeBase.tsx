import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HelpScreen from './components/helpScreen'

type Props = {}

const KnowledgeBase = (props: Props) => {
    return (
        <HelpScreen canGoBack={true} handleSubmit={() => {}}>
            <View style={styles.content}>
                <Text>Knowledge Base</Text>
            </View>
        </HelpScreen>
    )
}

export default KnowledgeBase

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
