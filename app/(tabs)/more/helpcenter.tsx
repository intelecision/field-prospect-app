import {
    FlatList,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native'
import React, { useCallback } from 'react'

import { router, useNavigation } from 'expo-router'
import { Text } from '../../../components/Themed'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import Colors, { colors } from '../../../constants/Colors'
import SearchHeader from '../../components/SearchHeader'

type Props = {}

const HelpCenter = (props: Props) => {
    const navigation = useNavigation()
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

    const _onFocus = () => {
        if (!isFocused) setIsFocused(true)
    }
    const _onBlur = () => {
        setIsFocused(false)
    }
    const oncancelButtonPress = () => {
        setIsFocused(false)
        setSearch('')
        _onBlur()
    }

    const updateSearch = useCallback(
        (text: string) => {
            setSearch(text)
            if (text.length > 0 && !isFocused) {
                setIsFocused(true)
            }
            if (text.length > 0) {
                //searchPhrases(search)
                setIsSearching(true)
            } else {
                setIsSearching(false)
            }
        },
        [search]
    )

    const handleSubmit = (item: string) => {
        //setSearch(item)
        //navigation.navigate('ProductSearch', { searchPhrase: item })
    }

    const handleSearch = (item: string) => {
        //navigation.navigate('ProductSearch', { searchPhrase: item })
    }
    const SearchResultItem = ({ item, onPress }: any) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.searchItem}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        {item}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#f8f8fa',
                paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
            }}
        >
            <StatusBar barStyle="dark-content" />
            <SearchHeader
                search={search}
                showBackButton={true}
                onChangeText={updateSearch}
                isFocused={isFocused}
                onBlur={_onBlur}
                onFocus={_onFocus}
                onCancelButtonPress={oncancelButtonPress}
                onSubmit={() => {
                    handleSubmit(search)
                }}
            />
            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <View style={styles.button}>
                        <Entypo name="home" size={24} color={colors.primary} />
                    </View>
                    <Text>Home</Text>
                </View>
                <TouchableOpacity
                    style={{}}
                    onPress={() => {
                        router.push('/help/knowledgeBase')
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View style={styles.button}>
                            <MaterialIcons
                                name="local-library"
                                size={24}
                                color={colors.primary}
                            />
                        </View>
                        <Text style={{}}>Knowledge Base</Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <View style={styles.button}>
                        <Entypo
                            name="ticket"
                            size={24}
                            color={colors.primary}
                        />
                    </View>
                    <Text style={{}}>Ticket</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1, padding: 20 }}
                    data={searchResults}
                    renderItem={({ item }) => (
                        <SearchResultItem
                            item={item}
                            onPress={() => {
                                router.push('/help/helpcenterdetails')
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
                />
            </View>
        </SafeAreaView>
    )
}

export default HelpCenter

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
