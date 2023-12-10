import { el } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
    currentStep: number
    numberOfSteps: number
}

function Progress({ currentStep, numberOfSteps: totalSteps }: Props) {
    const [steps, setSteps] = useState<number[]>([])
    useEffect(() => {
        setSteps(makeArray(totalSteps))
    }, [currentStep, totalSteps])

    const makeArray = (n: number) => {
        return Array.from({ length: n }, (_, i) => i + 1)
    }

    const Circle = (isCurrent: boolean) => {
        return (
            <View
                style={[
                    styles.circle,
                    { backgroundColor: isCurrent ? '#fff' : '#e66e' },
                ]}
            />
        )
    }

    const LineBetween = () => {
        return (
            <View style={{ width: 20, height: 1, backgroundColor: '#fff' }} />
        )
    }

    const renderCircles = () => {
        //const steps = makeArray(totalSteps)
        const len = steps.length
        return steps.map((step, index) =>
            index != len - 1 ? (
                <View
                    key={index}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={[
                            styles.circle,
                            {
                                backgroundColor:
                                    currentStep >= index ? '#fff' : undefined,
                            },
                        ]}
                    />
                    <LineBetween />
                </View>
            ) : (
                <View
                    key={index}
                    style={[
                        styles.circle,
                        {
                            backgroundColor:
                                currentStep >= index ? '#fff' : undefined,
                        },
                    ]}
                />
            )
        )
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            {renderCircles()}
        </View>
    )
}

export default Progress
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        //padding: 20,
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 12 / 2,
        //backgroundColor: '#ddd',
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
