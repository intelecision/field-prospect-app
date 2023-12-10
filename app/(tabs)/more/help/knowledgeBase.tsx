import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HelpScreen from './components/helpScreen'

type Props = {}

const KnowledgeBase = (props: Props) => {
    return (
        <HelpScreen canGoBack={true} handleSubmit={() => {}}>
            <Text>Knowledge Base</Text>
        </HelpScreen>
    )
}

export default KnowledgeBase

const styles = StyleSheet.create({})
