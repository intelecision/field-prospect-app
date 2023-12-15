import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HelpScreen from './components/helpScreen'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { colors } from '../../../constants/Colors'
import { router } from 'expo-router'
import { Props, styles } from './faq'

export const FrequentlyAskedQuestions = (props: Props) => {
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
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        {item}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <HelpScreen>
            <View style={styles.content}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View style={styles.button}>
                            <Entypo
                                name="home"
                                size={24}
                                color={colors.primary}
                            />
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
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
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
                                <Text
                                    style={{ fontSize: 16, fontWeight: 'bold' }}
                                >
                                    {isSearching
                                        ? 'No Results'
                                        : 'Search for help articles'}
                                </Text>
                            </View>
                        }
                    />
                </View>
            </View>
        </HelpScreen>
    )
}
