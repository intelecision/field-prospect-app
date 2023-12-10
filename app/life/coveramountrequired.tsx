import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListItem from '../../components/ListItem'
import IncomeAndExpenditure from './components/MonthlyIncome'
import { router } from 'expo-router'

const CoverAmountRequired = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading_1}>Cover Amount Required</Text>
                    <Text style={styles.section}>
                        The first step is to work out the customer’s income and
                        expenditure. This will help to calculate the cover
                        amount required.
                    </Text>
                    <Text style={styles.heading_2}>Income and expenditure</Text>
                    <Text style={styles.section}>
                        The following information will be required in the next
                        step:
                    </Text>
                    <View style={styles.group}>
                        <ListItem text="Income" />
                        <ListItem text="Housing Cost" />
                        <ListItem text="Transportation" />
                        <ListItem text="Food" />
                        <ListItem text="Entertainment" />
                        <ListItem text="Loans" />
                        <ListItem text="And any other expenses they can think of" />
                    </View>
                </View>
                {/*<IncomeAndExpenditure salary={8900} otherIncome={1000} />*/}
                <NavigationBar
                    enableBackButton
                    enableNextButton
                    onNextButtonPress={() =>
                        router.push('/life/incomeandexpenditure')
                    }
                    onBackButtonPress={() => router.back()}
                />
            </View>
        </SafeAreaView>
    )
}

export default CoverAmountRequired

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontFamily: 'OpenSans',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    heading_1: {
        fontFamily: 'OpenSans',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    heading_2: {
        fontFamily: 'OpenSans',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bullet: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    group: {
        //marginTop: 10,
    },
    section: {
        fontFamily: 'OpenSans',
        fontSize: 16,
        marginBottom: 10,
    },
})
