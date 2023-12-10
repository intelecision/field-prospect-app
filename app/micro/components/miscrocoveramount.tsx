import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../Styles/GlobalStyles'
import {
    YesNoRadioGroup,
    YesNoRadioGroupState,
} from '../../components/YesNoRadioGroup'
import Button from '../../../components/Button'
import { strToNumberExt } from '../../../formulae/calculations'
import { MicroIncomeAndExpenses } from '../../../model/Quotes'

type Props = {
    incomeAndExpenses: MicroIncomeAndExpenses
    setCanMoveNext: (canMove: boolean) => void
    setSumAssured: (sumAssured: number) => void
}

const MicroInsuranceCover = [
    { coverAmount: 15000, premium: 70 },
    { coverAmount: 12000, premium: 60 },
    { coverAmount: 11000, premium: 50 },
    { coverAmount: 9600, premium: 40 },
    { coverAmount: 150000, premium: 30 },
    { coverAmount: 150000, premium: 20 },
    { coverAmount: 150000, premium: 0.5 },
    { coverAmount: 7200, premium: 30 },
    { coverAmount: 6000, premium: 25 },
    { coverAmount: 4800, premium: 20 },
]
const MicroCoverAmount = ({
    incomeAndExpenses,
    setCanMoveNext,
    setSumAssured,
}: Props) => {
    const [isSuitable, setIsSuitable] =
        React.useState<YesNoRadioGroupState>(undefined)
    const [affordableCoverAmount, setAffordableCoverAmount] =
        React.useState<number>(0)
    const [maximumAffordablePremium, setMaximumAffordablePremium] =
        React.useState<number>(0)
    const [newCoverAmount, setNewCoverAmount] = React.useState<number>(0)
    const [newPremium, setNewPremium] = React.useState<number>(0)

    const [isRecalculating, setIsRecalculating] = React.useState<boolean>(false)
    const [maximumCoverAmount, setMaximumCoverAmount] =
        React.useState<number>(0)
    const [ifNewPremium, setIfNewPremium] = React.useState<boolean>(false)

    //incomeAndExpenses.monthlyIncome * 12 * 5
    const calcMicroIncomeAndExpenses = () => {
        setMaximumCoverAmount(incomeAndExpenses.monthlyIncome * 12 * 6)
        setAffordableCoverAmount(incomeAndExpenses.monthlyIncome * 12) //100% of annual income
        setMaximumAffordablePremium(incomeAndExpenses.monthlyIncome * 0.06)
        setNewPremium(incomeAndExpenses.monthlyIncome * 0.06)
        setSumAssured(incomeAndExpenses.monthlyIncome * 12)
    }

    React.useEffect(() => {
        calcMicroIncomeAndExpenses()
    }, [incomeAndExpenses])

    const getMonthPremium = (coverAmount: number) => {
        let premium = 0
        MicroInsuranceCover.forEach((value) => {
            if (value.coverAmount === coverAmount) {
                premium = value.premium
            }
        })

        return premium
    }

    const handleRecalculate = () => {
        if (newCoverAmount < maximumCoverAmount) {
            setIfNewPremium(true)
            setIsRecalculating(true)
            if (newCoverAmount > 0) {
                setAffordableCoverAmount(
                    calcSumAssuredByPremium(newCoverAmount)
                )
                setSumAssured(calcSumAssuredByPremium(newCoverAmount))
                setNewPremium(newCoverAmount)
            }
            setIsRecalculating(false)
        } else {
            ///
            alert('You can not exceed your maximum cover amount')
        }
    }

    const calcSumAssuredByPremium = (premium: number) => {
        let sumAssured = 0
        MicroInsuranceCover.forEach((value) => {
            if (value.premium === premium) {
                sumAssured = value.coverAmount
            }
        })

        return sumAssured
    }
    {
        //Based on this new monthly premium your Sum Assured is
    }

    console.log('isRecalculating', isRecalculating)
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {ifNewPremium ? (
                    <>
                        <View
                            style={[globalStyles.editGroup, { paddingTop: 40 }]}
                        >
                            <Text>Based on this new monthly premium of</Text>
                            <Text style={{ fontSize: 20 }}>
                                GHS{' '}
                                {newPremium.toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}
                            </Text>
                        </View>
                        <View style={[globalStyles.editGroup, { padding: 1 }]}>
                            <Text>Your Sum Assured would be</Text>
                            <Text style={{ fontSize: 20 }}>
                                GHS{' '}
                                {affordableCoverAmount.toLocaleString(
                                    undefined,
                                    {
                                        minimumFractionDigits: 0,
                                    }
                                )}
                            </Text>
                        </View>
                    </>
                ) : (
                    <>
                        <View
                            style={[globalStyles.editGroup, { paddingTop: 40 }]}
                        >
                            <Text>
                                Your maximum affordable monthly premium based on
                                your income is
                            </Text>
                            <Text style={{ fontSize: 20 }}>
                                GHS{' '}
                                {newPremium.toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}
                            </Text>
                        </View>
                        <View style={[globalStyles.editGroup, { padding: 1 }]}>
                            <Text>Your Sum Assured would be</Text>
                            <Text style={{ fontSize: 20 }}>
                                GHS{' '}
                                {affordableCoverAmount.toLocaleString(
                                    undefined,
                                    {
                                        minimumFractionDigits: 0,
                                    }
                                )}
                            </Text>
                        </View>
                    </>
                )}
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={[globalStyles.label, { marginHorizontal: 20 }]}>
                    Is the monthly premium of{' '}
                    <Text
                        style={{
                            fontFamily: 'OpenSans_700Bold',
                        }}
                    >
                        Ghs{' '}
                        {newPremium.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                        })}
                    </Text>{' '}
                    suitable for you?
                </Text>
                <View style={{ marginHorizontal: 20 }}>
                    <YesNoRadioGroup
                        state={isSuitable}
                        labelYes={'Yes, it is suitable'}
                        labelNo={'No, not suitable'}
                        onPressYes={() => {
                            setIsSuitable(true)
                            setCanMoveNext(true)
                        }}
                        onPressNo={() => {
                            setIsSuitable(false)
                            setCanMoveNext(false)
                        }}
                    />
                </View>
            </View>
            {isSuitable ? (
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Congratulations. The Sum Assured is suitable for you.
                        The next step is to complete the Pre-Underwriting
                        Questionnaire.
                    </Text>
                </View>
            ) : (
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Where the monthly premium is not suitable for the
                        customer please enter a premium they can afford.
                    </Text>
                    <TextInput
                        style={[globalStyles.input]}
                        keyboardType="numeric"
                        placeholder="0"
                        value={String(newCoverAmount)}
                        onChangeText={(text) =>
                            setNewCoverAmount(strToNumberExt(text))
                        }
                    />
                    <Text
                        style={[
                            globalStyles.label,
                            {
                                fontFamily: 'OpenSans_SemiBoldItalic',
                                fontSize: 15,
                            },
                        ]}
                    >
                        Customer can afford a maximum monthly premium of{' '}
                        {'Ghs '}
                        {maximumAffordablePremium.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                        })}
                    </Text>
                    <Button
                        showLoading={isRecalculating}
                        onPress={() => handleRecalculate()}
                        title="Recalculate"
                    />
                </View>
            )}
        </View>
    )
}

export default MicroCoverAmount

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
})
