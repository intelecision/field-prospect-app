import { StyleSheet, View } from 'react-native'
import React from 'react'
import { YesNoRadioGroup, YesNoRadioGroupState } from './YesNoRadioGroup'
import { Text } from '../../components/Themed'
import { globalStyles } from '../Styles/GlobalStyles'

type Props = {
    question: string
    state: YesNoRadioGroupState
    labelYes: string
    labelNo: string
    isRow?: boolean
    onPressYes: () => void
    onPressNo: () => void
}

const YesNoQuestionnaire = ({
    state,
    question,
    labelYes = 'Yes',
    labelNo = 'No',
    isRow = true,

    onPressNo,
    onPressYes,
}: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text style={styles.label}>{question}</Text>
            </View>
            <View style={{}}>
                <YesNoRadioGroup
                    isRow={isRow}
                    state={state}
                    labelYes={labelYes}
                    labelNo={labelNo}
                    onPressYes={() => {
                        onPressYes()
                    }}
                    onPressNo={() => {
                        onPressNo()
                    }}
                />
            </View>
        </View>
    )
}

export default YesNoQuestionnaire

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    label: {
        flex: 1,

        fontSize: 16,
    },
})
