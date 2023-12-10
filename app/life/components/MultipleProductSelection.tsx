import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useInterestedProduct } from '../../../context/QuoteContext'
import { LifeInsuranceProduct } from '../../../model/entities'
import { globalStyles } from '../../Styles/GlobalStyles'
import { Text, TextInput } from '../../../components/Themed'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    affordableCoverAmount: number
}

const MultipleProductSelection = ({ affordableCoverAmount }: Props) => {
    const { interestedProduct, setInterestedProduct } = useInterestedProduct()
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                You have opted for insurance cover by selecting the following
                product(s). We have determined your Ideal Sum Assured and the
                corresponding Monthly Premium payable. This Ideal Sum Assured is
                not binding, so you can choose any other Sum Assured that may
                align with your personal preferences. Subsequent to that, we
                shall provide you with a Monthly Premium.
            </Text>
            <Text style={[globalStyles.label, { marginTop: 10 }]}>
                The Ideal total Amount of insurance cover (Sum Assured) for you
                is:{' '}
                <Text style={{ fontFamily: 'OpenSans_700Bold' }}>
                    Ghc{' '}
                    {affordableCoverAmount.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                    })}
                </Text>
            </Text>
            <View style={styles.content}>
                <Text style={styles.paragraph}>
                    Please allocate the amount you want to spend on each of the
                    insurance products you have selected
                </Text>
                <Text style={styles.paragraph}>
                    You can also remove any product you are no longer interested
                    or can not afford
                </Text>
            </View>
            {interestedProduct.map((item: LifeInsuranceProduct) => (
                <View style={styles.content} key={item.id}>
                    <Text style={globalStyles.label}>{item.name}</Text>
                    <View style={styles.itemRow}>
                        <TextInput
                            style={[globalStyles.input, { width: '80%' }]}
                            keyboardType="numeric"
                            placeholder="0"
                        />
                        <Ionicons
                            name="md-remove-circle"
                            size={24}
                            color="crimson"
                        />
                    </View>
                </View>
            ))}
        </View>
    )
}

export default MultipleProductSelection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    paragraph: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
})
