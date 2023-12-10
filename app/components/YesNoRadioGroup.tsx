import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'

import { RadioButton } from './RadioButton'

export type YesNoRadioGroupState = true | false | undefined
interface YesNoRadioGroup {
    state: YesNoRadioGroupState
    hasError?: boolean
    labelYes: string
    labelNo: string
    isRow?: boolean
    onPressYes: () => void
    onPressNo: () => void
}

export const YesNoRadioGroup = memo(function YesNoRadioGroup({
    state,
    labelYes,
    labelNo,
    isRow = true,
    onPressYes,
    onPressNo,
    hasError,
}: YesNoRadioGroup) {
    return (
        <View style={isRow ? styles.rowContainer : styles.columnContainer}>
            <View style={{ marginVertical: 10 }}>
                <RadioButton
                    label={labelYes}
                    filled={state === true}
                    hasError={hasError}
                    onPress={onPressYes}
                />
            </View>
            <View style={{ marginVertical: 10 }}>
                <RadioButton
                    label={labelNo}
                    filled={state === false}
                    hasError={hasError}
                    onPress={onPressNo}
                />
            </View>
        </View>
    )
})

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
