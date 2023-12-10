import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

export type YesNoCheckState = 'yes' | 'no' | 'empty'
interface YesNoCheckGroupProps {
    //state: YesNoCheckState
    //hasError?: boolean
    //labelYes: string
    //labelNo: string
    //onPressYes: () => void
    //onPressNo: () => void
}

const YesNoCheckGroup = (props: YesNoCheckGroupProps) => {
    const [isChecked, setChecked] = useState(false)
    const [isNoChecked, setNoChecked] = useState(false)
    return (
        <View style={styles.container}>
            <Checkbox
                value={isChecked}
                color={isChecked ? '#00A3AD' : undefined}
                onValueChange={setChecked}
            />
            <Checkbox
                value={!isChecked}
                color={!isChecked ? '#00A3AD' : undefined}
                onValueChange={setChecked}
            />
        </View>
    )
}

export default YesNoCheckGroup

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'red',
    },
})
