import {
    FlatList,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import HelpScreen from './components/helpScreen'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { colors } from '../../../constants/Colors'
import { router } from 'expo-router'
import { Text } from '../../components/Themed'

type Props = {}

const FrequentlyAskedQuestions = (props: Props) => {
    const [search, setSearch] = React.useState<string>('')
    const [isSearching, setIsSearching] = React.useState<boolean>(false)
    const [isFocused, setIsFocused] = React.useState<boolean>(false)
    const [searchResults, setSearchResults] = React.useState<string[]>([
        'How to generate a Quote',
        'What is Life Insurance?',
        'What is Term Life Insurance?',
        'What is the difference between Term Life and Whole Life Insurance?',
        'What is the difference between Life and non-Life Insurance?',
        'What is Sum Assured?',
        'What is a premium?',
        'what is a waiting period?',
        'What is a beneficiary?',
        'What is a nominee?',
        'What is a insurance policy?',
        'What is a policy holder?',
        'What is a policy term?',
        'what is underwriting?',
        'Can I buy a policy for someone else?',
        'Can I buy more than one policy?',
    ])

    const SearchResultItem = ({ item, onPress }: any) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.searchItem}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15 }}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <HelpScreen handleSubmit={() => console.log('submit')}>
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1, padding: 20 }}
                    data={searchResults}
                    renderItem={({ item }) => (
                        <SearchResultItem
                            item={item}
                            onPress={() => {
                                //router.push('/help/helpcenterdetails')
                                console.log('pressed')
                            }}
                        />
                    )}
                    keyExtractor={(item) => item}
                    ListEmptyComponent={
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                {isSearching
                                    ? 'No Results'
                                    : 'Search for help articles'}
                            </Text>
                        </View>
                    }
                    ListHeaderComponent={() => (
                        <View style={{ height: 40 }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'OpenSans_700Bold',

                                    marginBottom: 10,
                                }}
                            >
                                Frequently Asked Questions
                            </Text>
                        </View>
                    )}
                />
            </View>
        </HelpScreen>
    )
}

export default FrequentlyAskedQuestions

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    searchItem: {
        borderRadius: 6,
        padding: 10,
        marginVertical: 2,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: 100,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
})
