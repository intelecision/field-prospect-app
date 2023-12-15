import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../Styles/GlobalStyles'
import { useQuoteContextType } from '../../context/QuoteContext'

type Props = {
    sumAssured: number
}

const SummaryPage = ({ sumAssured }: Props) => {
    const { quoteSummary } = useQuoteContextType()

    return (
        <View>
            <View style={styles.content}>
                <View style={styles.paragraph}>
                    <Text style={globalStyles.section}>
                        You have opted for the following life Micro-Insurance
                        product(s).
                    </Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>
                        Product: Micro Insurance
                    </Text>
                    <Text style={styles.text}>
                        Sum assured:{' '}
                        <Text style={{ fontFamily: 'OpenSans_700Bold' }}>
                            {sumAssured.toLocaleString('GHS', {
                                style: 'currency',
                                currency: 'GHS',
                            })}
                        </Text>
                    </Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.text}>Cover Period: 5 years </Text>
                    <Text style={styles.text}>
                        Cover Start Date: 16 November 2023
                    </Text>

                    {/* {quoteSummary.fullName} */}
                </View>
            </View>
        </View>
    )
}

export default SummaryPage

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
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
})
