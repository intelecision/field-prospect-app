import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

type Props = {}

const HelpCenterDetails = (props: Props) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text
                        style={[
                            styles.paragraph,
                            { fontSize: 18, fontFamily: 'OpenSans_700Bold' },
                        ]}
                    >
                        What is Life Insurance
                    </Text>
                    <Text style={styles.paragraph}>
                        Insurance that pays out a sum of money either on the
                        death of the insured person or after a set period
                    </Text>
                    <Text style={styles.paragraph}>
                        There are several types of life insurance policies
                        available, each with its own unique features and
                        benefits. Here are some of the most common types of life
                        insurance policies:
                    </Text>
                    <Text style={styles.paragraph}>
                        1. **Term life insurance**: This policy provides
                        coverage for a specific period, usually between 10 and
                        30 years. It is generally the most affordable type of
                        life insurance and is ideal for those who need coverage
                        for a specific period, such as while their children are
                        growing up or while they are paying off a mortgage.
                    </Text>
                    <Text style={styles.paragraph}>
                        2. **Whole life insurance**: This policy provides
                        coverage for your entire life and includes a savings
                        component that grows over time. It is more expensive
                        than term life insurance but offers lifelong protection
                        and can be used as an investment vehicle.
                    </Text>
                    <Text style={styles.paragraph}>
                        3. **Universal life insurance**: This policy is similar
                        to whole life insurance but offers more flexibility in
                        terms of premiums and death benefits. It allows you to
                        adjust your premiums and death benefits as your needs
                        change over time.
                    </Text>
                    <Text style={styles.paragraph}>
                        4. **Mortgage life insurance**: This policy is designed
                        to pay off your mortgage in the event of your death. It
                        is usually purchased in conjunction with a mortgage and
                        provides coverage for the length of the mortgage term.
                    </Text>
                    <Text style={styles.paragraph}>
                        5. **Endowment policy**: This policy provides coverage
                        for a specific period, similar to term life insurance,
                        but also includes a savings component that pays out at
                        the end of the policy term.
                    </Text>
                    <Text style={styles.paragraph}>
                        6. **Indexed universal life**: This policy is similar to
                        universal life insurance but allows you to invest your
                        premiums in an index fund, which can provide higher
                        returns than traditional investments.
                    </Text>
                    <Text style={styles.paragraph}>
                        7. **Variable universal life insurance**: This policy is
                        similar to universal life insurance but allows you to
                        invest your premiums in a variety of investment options,
                        such as stocks, bonds, and mutual funds.
                    </Text>
                    <Text style={styles.paragraph}>
                        8. **Accidental death and dismemberment insurance**:
                        This policy provides coverage in the event of accidental
                        death or dismemberment, such as the loss of a limb or
                        eyesight.
                    </Text>
                    {''}
                    <Text style={styles.paragraph}>
                        9. **Variable Life Insurance**: This policy is similar
                        to whole life insurance but allows you to invest your
                        premiums in a variety of investment options, such as
                        stocks, bonds, and mutual funds.
                    </Text>
                    <Text style={styles.paragraph}>
                        10. **Burial Life Insurance**: This policy provides
                        coverage specifically for funeral expenses.
                    </Text>
                    <Text style={styles.paragraph}>
                        11. **Money Back Policy**: This policy provides coverage
                        for a specific period and pays out a percentage of the
                        premium paid if you survive the policy term.
                    </Text>
                    <Text style={styles.paragraph}>
                        12. **Group Life Insurance**: This policy is typically
                        offered by employers as part of their employee benefits
                        package.
                    </Text>
                    <Text style={styles.paragraph}>
                        13. **Short Term Life Insurance**: This policy provides
                        coverage for a short period, usually between 1 and 5
                        years.
                    </Text>
                    <Text style={styles.paragraph}>
                        14. **No-Medical-Exam Life Insurance**: This policy does
                        not require a medical exam but may have higher premiums
                        than other types of life insurance.
                    </Text>
                    <Text style={styles.paragraph}>
                        15. **Supplemental Life Insurance**: This policy
                        provides additional coverage on top of an existing life
                        insurance policy.
                    </Text>
                    <Text style={styles.paragraph}>
                        16. **Simplified Issue Life Insurance**: This policy
                        requires only a few health questions to be answered and
                        does not require a medical exam.
                    </Text>
                    <Text style={styles.paragraph}>
                        17. **Guaranteed Issue Life Insurance**: This policy
                        does not require a medical exam or health questions but
                        may have lower death benefits than other types of life
                        insurance policies.
                    </Text>
                    <Text style={styles.paragraph}>
                        18. **Joint Life Insurance**: This policy covers two
                        people under one policy and pays out when one or both
                        people die. It is typically used by married couples.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default HelpCenterDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
        textAlign: 'justify',
    },
})
