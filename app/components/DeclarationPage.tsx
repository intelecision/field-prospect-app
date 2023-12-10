import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import CheckBoxWithLabel from './CheckBoxWithLabel'
import { Text } from '../../components/Themed'

type Props = {}

const DeclarationPage = (props: Props) => {
    const [isChecked, setIsChecked] = React.useState(false)
    const [isAgreed, setIsAgreed] = React.useState(false)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerContent}>
                {/*<Text>MICRO INSURANCE DECLARATION </Text>*/}

                <View style={styles.content}>
                    <Text style={styles.declare}>
                        I,{' '}
                        <Text style={{ fontFamily: 'OpenSans_700Bold' }}>
                            (Name of Client)
                        </Text>{' '}
                        hereby declare that I have been explained the following:
                    </Text>
                    <Text style={styles.declare}>
                        1. The nature of the insurance product, including the
                        benefits, risks, and exclusions;
                    </Text>
                    <Text style={styles.declare}>
                        2. The premium and mode of payment, and the effect of
                        non-payment of premiums;
                    </Text>
                    <Text style={styles.declare}>
                        3. The period of coverage and the terms and conditions
                        of the insurance contract;
                    </Text>
                    <Text style={styles.declare}>
                        4. The procedure for filing a claim, including the
                        documents required;
                    </Text>
                    <Text style={styles.declare}>
                        5. The procedure for surrendering the insurance
                        contract;
                    </Text>
                    <Text style={styles.declare}>
                        6. The procedure for replacing the insurance contract;
                    </Text>
                    <Text style={styles.declare}>
                        7. The procedure for withdrawing the proceeds of the
                        insurance contract;
                    </Text>
                    <Text style={styles.declare}>
                        8. The procedure for designating or changing the
                        beneficiary;
                    </Text>
                    <Text style={styles.declare}>
                        9. The procedure for availing of the grace period;
                    </Text>
                    <Text style={styles.declare}>
                        10. The procedure for reinstating the insurance
                        contract;
                    </Text>
                    <Text style={styles.declare}>
                        11. The procedure for converting the insurance contract;
                    </Text>
                    <Text style={styles.declare}>
                        12. The procedure for terminating the insurance
                        contract;
                    </Text>
                    <Text style={styles.declare}>
                        13. The procedure for the payment of the proceeds of the
                        insurance contract;
                    </Text>
                </View>
                <View style={{ padding: 20, marginHorizontal: 10 }}>
                    <CheckBoxWithLabel
                        label="I have been explained the above."
                        isChecked={isChecked}
                        onChecked={() => {
                            setIsChecked(!isChecked)
                        }}
                    />
                    <Text style={styles.declare}>
                        I hereby acknowledge that I have read and understood the
                        foregoing and that I am aware of my rights and
                        obligations under the insurance contract.
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 20, marginHorizontal: 10 }}>
                    <CheckBoxWithLabel
                        label="By clicking the button, you agree to our Terms of Service and Privacy Policy."
                        isChecked={isAgreed}
                        onChecked={() => {
                            setIsAgreed(!isAgreed)
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default DeclarationPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerContent: {
        flex: 1,
    },

    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    declare: {
        fontFamily: 'OpenSans_Medium',
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 16,
        margin: 10,
    },
})
