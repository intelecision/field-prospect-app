import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useQuestionnaireContextType } from '../../context/QuestionnaireContext'

import { Text } from '../../components/Themed'

import Button from '../../components/Button'
import Screen from './components/Screen'
import { globalStyles } from '../Styles/GlobalStyles'
import { useQuoteContextType } from '../../context/QuoteContext'
import { router } from 'expo-router'
import NavigationBar from '../../components/NavigationBar'

const QuoteSummaryPage = () => {
    const { quoteSummary } = useQuoteContextType()

    return (
        <Screen
            heading={'Summary'}
            handleCancel={() => {
                console.log('Cancel')
            }}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.paragraph}>
                        <Text style={globalStyles.section}>
                            You have opted for the following life insurance
                            product(s).
                        </Text>
                        <Text style={[styles.text, { marginTop: 10 }]}>
                            Product: Group Life
                        </Text>
                        <Text style={styles.text}>
                            Sum assured:{' '}
                            <Text style={{ fontFamily: 'OpenSans_700Bold' }}>
                                {quoteSummary.affordableAmount?.toLocaleString(
                                    'GHS',
                                    { style: 'currency', currency: 'GHS' }
                                )}
                            </Text>
                        </Text>
                        <Text style={styles.text}>
                            Annual Premium:{' '}
                            <Text style={{ fontFamily: 'OpenSans_700Bold' }}>
                                {quoteSummary.affordablePremium?.toLocaleString(
                                    'GHS',
                                    { style: 'currency', currency: 'GHS' }
                                )}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        {quoteSummary.accepted ? (
                            <Text style={styles.text}>
                                We have completed pre-underwriting and based on
                                the results, we are able to accept you for Life
                                Insurance{' '}
                            </Text>
                        ) : (
                            <Text style={[styles.text, { color: 'crimson' }]}>
                                We have completed pre-underwriting and based on
                                the results, we are NOT able to accept you for
                                Life Insurance{' '}
                            </Text>
                        )}
                    </View>
                </View>

                <View style={styles.footer}>
                    <NavigationBar
                        enableBackButton
                        enableNextButton
                        onBackButtonPress={() => router.back()}
                        onNextButtonPress={() => {
                            router.push('/life/applicationForm')
                        }}
                    />
                </View>
            </View>
        </Screen>
    )
}

export default QuoteSummaryPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
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
    footer: {
        height: 130,
        backgroundColor: '#fff',
        padding: 20,
        position: 'relative',
    },
})
