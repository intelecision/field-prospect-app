import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { YesNoRadioGroupState } from './YesNoRadioGroup'
import ToggleButton from './ToggleButtom'

interface Props {
    state: YesNoRadioGroupState
    hasError?: boolean
    labelYes: string
    labelNo: string
    isRow?: boolean
    onPressYes: () => void
    onPressNo: () => void
}

const YesNoToggleCheckBox = (props: Props) => {
    const {
        state,
        labelYes,
        labelNo,
        isRow = true,
        onPressYes,
        onPressNo,
        hasError,
    } = props
    return (
        <View style={isRow ? styles.rowContainer : styles.columnContainer}>
            <View style={{ marginVertical: 10 }}>
                <ToggleButton
                    label={labelYes}
                    filled={state === true}
                    hasError={hasError}
                    onPress={onPressYes}
                />
            </View>
            <View style={{ marginVertical: 10 }}>
                <ToggleButton
                    label={labelNo}
                    filled={state === false}
                    hasError={hasError}
                    onPress={onPressNo}
                />
            </View>
        </View>
    )
}

export default YesNoToggleCheckBox

const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //width: 200,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        //width: 200,
    },
    columnContainer: {
        flexDirection: 'column',
    },
})
