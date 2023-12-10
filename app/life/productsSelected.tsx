import {
    StyleSheet,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Text, TextInput } from '../../components/Themed'
import { globalStyles } from '../Styles/GlobalStyles'
import { Ionicons } from '@expo/vector-icons'
import YesNoCheckGroup from '../components/YesNoCheckGroup'
import {
    YesNoRadioGroup,
    YesNoRadioGroupState,
} from '../components/YesNoRadioGroup'
import { set } from 'date-fns'
import Button from '../../components/Button'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { af, is } from 'date-fns/locale'
import { ScrollView } from 'react-native-gesture-handler'
import {
    getMonthlyPremiumByAge,
    strToNumberExt,
} from '../../formulae/calculations'
import {
    useCoverAmount,
    useInterestedProduct,
    useQuoteContextType,
} from '../../context/QuoteContext'
import NavigationBar from '../../components/NavigationBar'
import { router } from 'expo-router'
import MultipleProductSelection from './components/MultipleProductSelection'
import { IPolicy, POLICIES } from './../data/policies'

type Props = {}

const ProductsSelected = (props: Props) => {
    const {
        coverAmount,
        setCoverAmount,
        customerInfo,
        quoteSummary,
        setQuoteSummary,
    } = useQuoteContextType()
    const [affordableCoverAmount, setAffordableCoverAmount] =
        React.useState<number>(0)
    const [newCoverAmount, setNewCoverAmount] = React.useState<number>(0)
    const [isSuitable, setIsSuitable] =
        React.useState<YesNoRadioGroupState>(false)
    const [isAffordable, setAffordable] = React.useState<boolean>(true)
    const [monthlyPremiumAmount, setMonthlyPremiumAmount] =
        React.useState<number>(0)
    const [maximumAffordablePremium, setMaximumAffordablePremium] =
        React.useState<number>(0)

    const [isRecalculating, setIsRecalculating] = React.useState<boolean>(false)
    const [originalMonthlyPremiumAmount, setOriginalMonthlyPremiumAmount] =
        React.useState<number>(0)
    const [idealSumHasChanged, setIdealSumHasChanged] =
        React.useState<boolean>(false)
    const { interestedProduct: interestProduct, setInterestedProduct } =
        useInterestedProduct()
    const hasMultipleProducts = interestProduct.length > 1

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const [selectedPolicy, setSelectedPolicy] = React.useState<IPolicy[]>([])

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], [])
    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index)
    }, [])

    const getMonthlyPremium = (
        coverAmount: number,
        dateOfBirth: Date | string
    ) => {
        const monthlyPremiumAmount = getMonthlyPremiumByAge(
            dateOfBirth,
            ceilIdealAMountOfCoverToNearestMillion(coverAmount)
        )
        setOriginalMonthlyPremiumAmount(monthlyPremiumAmount)
        setMonthlyPremiumAmount(monthlyPremiumAmount)
    }

    const checkAffordability = (monthlyPremiumAmount: number) => {
        let balance =
            coverAmount.totalMonthlyIncome -
            coverAmount.totalMonthlyExpenses -
            monthlyPremiumAmount

        setAffordable(balance >= 0)
        console.log('balance', balance, originalMonthlyPremiumAmount)
    }

    const getIdealPremiumAmount = () => {
        const monthlyPremiumAmount = getMonthlyPremiumByAge(
            customerInfo.dateOfBirth,
            coverAmount.idealAmountOfCover
        )
        return monthlyPremiumAmount
    }

    const getMaximumAffordablePremium = () => {
        return coverAmount.totalMonthlyIncome - coverAmount.totalMonthlyExpenses
    }

    useEffect(() => {
        if (affordableCoverAmount === 0) {
            setAffordableCoverAmount(coverAmount.idealAmountOfCover)
        }
        getMonthlyPremium(affordableCoverAmount, customerInfo.dateOfBirth)

        setMaximumAffordablePremium(getMaximumAffordablePremium())
        checkAffordability(monthlyPremiumAmount)
        setQuoteSummary({
            ...quoteSummary,
            affordableShortfall: affordableCoverAmount,
            affordablePremium: monthlyPremiumAmount,
            affordableAmount: affordableCoverAmount,
            product: interestProduct,
            name: customerInfo.firstName + ' ' + customerInfo.lastName,
        })
    }, [monthlyPremiumAmount, affordableCoverAmount])

    const handleRecalculate = () => {
        setIsRecalculating(true)
        setAffordableCoverAmount(newCoverAmount)

        getMonthlyPremium(affordableCoverAmount, customerInfo.dateOfBirth)
        checkAffordability(monthlyPremiumAmount)
        setTimeout(() => {
            setIsRecalculating(false)
            setIdealSumHasChanged(true)
        }, 2000)
    }

    const findPolicy = (policy: string) => {
        const selectedPolicy = interestProduct.filter(
            (item) => item.name === policy
        )

        return selectedPolicy
    }

    const findPolicyByNames = (policy: string) => {
        const selectPolicy = POLICIES.find((item) => item.name === policy)
        return selectPolicy?.description
    }

    //    console.log('interestProduct', findPolicyByNames(interestProduct[0].name))

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={[styles.container]}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View
                    style={[
                        {
                            justifyContent: 'center',
                            backgroundColor: '#00A3AD',
                            alignItems: 'center',
                            height: 80,
                        },
                        { zIndex: 100 },
                    ]}
                >
                    <Text style={{ fontSize: 24, color: '#fff' }}>
                        Your Quote
                    </Text>
                    <Text style={{ fontSize: 18, color: '#fff' }}>
                        REF: 123456789
                    </Text>
                </View>
                <View style={styles.container}>
                    <ScrollView style={styles.content}>
                        <View style={styles.content}>
                            {idealSumHasChanged ? (
                                <Text
                                    style={{
                                        textAlign: 'left',
                                        //marginHorizontal: 20,
                                        marginTop: 10,
                                        marginBottom: 20,
                                        fontSize: 16,
                                        fontFamily: 'OpenSans_700Bold',
                                    }}
                                    textBreakStrategy="highQuality"
                                >
                                    You have chosen a desired Amount of
                                    Insurance Cover (Sum Assured) and the
                                    corresponding Monthly premium
                                    is as shown below.
                                </Text>
                            ) : (
                                <Text style={globalStyles.section}>
                                    You have opted for insurance cover by
                                    selecting the following product(s). We have
                                    determined your Ideal Sum Assured and the
                                    corresponding Monthly Premium payable. This
                                    Ideal Sum Assured is not binding, so you can
                                    choose any other Sum Assured that may align
                                    with your personal preferences. Subsequent
                                    to that, we shall provide you with a Monthly
                                    Premium.
                                </Text>
                            )}
                            <View
                                style={[
                                    globalStyles.editGroup,
                                    {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    },
                                ]}
                            >
                                <Text>{interestProduct[0].name} </Text>
                                <Ionicons
                                    name="information-circle-outline"
                                    size={28}
                                    color="black"
                                    onPress={handlePresentModalPress}
                                />
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Amount of insurance cover (Sum Assured) for
                                    you is:{' '}
                                    <Text
                                        style={{
                                            fontFamily: 'OpenSans_700Bold',
                                        }}
                                    >
                                        Ghc{' '}
                                        {affordableCoverAmount.toLocaleString(
                                            undefined,
                                            {
                                                minimumFractionDigits: 0,
                                            }
                                        )}
                                    </Text>
                                </Text>
                                <Text style={globalStyles.label}>
                                    Monthly Premium payable is:{' '}
                                    <Text
                                        style={{
                                            fontFamily: 'OpenSans_700Bold',
                                        }}
                                    >
                                        Ghc{' '}
                                        {monthlyPremiumAmount.toLocaleString(
                                            undefined,
                                            {
                                                minimumFractionDigits: 0,
                                            }
                                        )}
                                    </Text>
                                </Text>
                            </View>
                            {isAffordable ? (
                                <View style={{ marginTop: 10 }}>
                                    <Text
                                        style={[
                                            globalStyles.label,
                                            { marginHorizontal: 20 },
                                        ]}
                                    >
                                        Is the Amount of insurance cover (Sum
                                        Assured) of{' '}
                                        <Text
                                            style={{
                                                fontFamily: 'OpenSans_700Bold',
                                            }}
                                        >
                                            Ghc{' '}
                                            {affordableCoverAmount.toLocaleString(
                                                undefined,
                                                {
                                                    minimumFractionDigits: 0,
                                                }
                                            )}
                                        </Text>{' '}
                                        suitable for you?
                                    </Text>
                                    <View style={{ marginHorizontal: 20 }}>
                                        <YesNoRadioGroup
                                            state={isSuitable}
                                            labelYes={'Yes, it is suitable'}
                                            labelNo={'No, not suitable'}
                                            onPressYes={() =>
                                                setIsSuitable(true)
                                            }
                                            onPressNo={() =>
                                                setIsSuitable(false)
                                            }
                                        />
                                    </View>
                                </View>
                            ) : (
                                <>
                                    <View
                                        style={{
                                            marginTop: 20,
                                            borderColor: 'red',
                                            borderWidth: 1,
                                        }}
                                    >
                                        <Text
                                            style={[
                                                globalStyles.label,
                                                {
                                                    marginTop: 10,
                                                    marginHorizontal: 20,
                                                },
                                            ]}
                                        >
                                            After reviewing the above
                                            information with your income and
                                            expenditure, we are of the view that
                                            you cannot afford the monthly
                                            premium of{' '}
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        'OpenSans_700Bold',
                                                }}
                                            >
                                                {monthlyPremiumAmount.toLocaleString(
                                                    undefined,
                                                    { minimumFractionDigits: 0 }
                                                )}
                                            </Text>
                                        </Text>
                                        <Text
                                            style={[
                                                globalStyles.label,
                                                {
                                                    marginTop: 10,
                                                    marginHorizontal: 20,
                                                    marginBottom: 20,
                                                },
                                            ]}
                                        >
                                            We recommend that you opt for a
                                            lower amount of insurance cover
                                            which may be affordable
                                        </Text>
                                    </View>
                                </>
                            )}

                            {isSuitable ? (
                                <View style={globalStyles.editGroup}>
                                    <Text style={globalStyles.label}>
                                        Congratulations. The Sum Assured is
                                        suitable for you. The next step is to
                                        complete the Pre-Underwriting
                                        Questionnaire.
                                    </Text>
                                </View>
                            ) : (
                                <View style={globalStyles.editGroup}>
                                    <Text style={globalStyles.label}>
                                        Where the Sum Assured is not suitable
                                        for the customer please enter their
                                        desired Cover Amount.
                                    </Text>
                                    <TextInput
                                        style={[globalStyles.input]}
                                        keyboardType="numeric"
                                        placeholder="0"
                                        value={String(newCoverAmount)}
                                        onChangeText={(text) =>
                                            setNewCoverAmount(
                                                strToNumberExt(text)
                                            )
                                        }
                                    />
                                    <Text
                                        style={[
                                            globalStyles.label,
                                            {
                                                fontFamily:
                                                    'OpenSans_SemiBoldItalic',
                                                fontSize: 15,
                                            },
                                        ]}
                                    >
                                        Customer can afford a maximum monthly
                                        premium of {'Ghs '}
                                        {maximumAffordablePremium.toLocaleString(
                                            undefined,
                                            { minimumFractionDigits: 0 }
                                        )}
                                    </Text>
                                    <Button
                                        showLoading={isRecalculating}
                                        onPress={() => handleRecalculate()}
                                        title="Recalculate"
                                    />
                                </View>
                            )}
                        </View>
                        {/*<MultipleProductSelection
                            affordableCoverAmount={affordableCoverAmount}
                        />*/}
                    </ScrollView>
                    <NavigationBar
                        enableBackButton
                        enableNextButton
                        onBackButtonPress={() => router.back()}
                        onNextButtonPress={() => {
                            router.push('/life/fieldunderwriting')
                        }}
                    />
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <View style={[styles.contentContainer, {}]}>
                            <View
                                style={[globalStyles.section, { margin: 20 }]}
                            >
                                <Text style={{ fontSize: 18 }}>
                                    <Text
                                        style={{
                                            fontFamily: 'OpenSans_700Bold',
                                        }}
                                    >
                                        {interestProduct[0].name}
                                    </Text>{' '}
                                    {findPolicyByNames(interestProduct[0].name)}
                                </Text>
                            </View>
                        </View>
                    </BottomSheetModal>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ProductsSelected

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    contentContainer: {
        flex: 1,
        borderTopColor: '#c3c3c3',
        borderTopWidth: 1,
        alignItems: 'center',
    },
    editInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        marginLeft: 10,
    },
})
function ceilIdealAMountOfCoverToNearestMillion(shortFall: number): number {
    return Math.ceil(shortFall / 1000000) * 1000000
}
