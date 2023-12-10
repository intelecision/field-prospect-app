import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../../components/Themed'

type Props = {
    content: { step: string; narrative: string }[]
}

const ContentIndex = ({ content }: Props) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <View style={styles.section} />
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    {content.map((stage, index) => (
                        <View key={index + 3}>
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    top: 10,
                                }}
                            >
                                <View style={styles.circle} />
                                <View style={[styles.horizontalLine]} />
                                <View
                                    key={index + 3}
                                    style={{ height: 50, top: 8 }}
                                >
                                    <Text
                                        key={index + 5}
                                        style={styles.index_text}
                                    >
                                        <Text style={styles.index_textBold}>
                                            Step. {index + 1}
                                        </Text>{' '}
                                    </Text>
                                </View>
                            </View>
                            <View
                                key={index + 2}
                                style={{ paddingHorizontal: 20 }}
                            >
                                <Text key={index + 4} style={styles.index_text}>
                                    {stage.step}
                                </Text>
                                <Text
                                    key={index + 1}
                                    style={{
                                        color: '#A9A9A9',
                                        textAlign: 'justify',
                                        fontSize: 16,
                                        fontFamily: 'OpenSans',
                                    }}
                                >
                                    {stage.narrative}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default ContentIndex

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    containerContent: {
        flex: 1,
    },

    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#A9A9A9',
        left: -8,
        top: -5,
    },

    horizontalLine: {
        width: 16,
        height: 1,
        top: -5,
        left: -13,
        borderWidth: 0.5,
        borderColor: '#A9A9A9',
        borderStyle: 'dotted',
        backgroundColor: '#A9A9A9',
    },

    section: {
        width: 8,
        borderLeftColor: '#f5f5f5',
        backgroundColor: '#f5f5f5',
    },
    dottedLine: {
        width: 10,
        height: 0.5,
        backgroundColor: '#ccc',
    },
    index_text: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'OpenSans_700Bold',
        color: '#A9A9A9',
    },
    index_textBold: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
        //color: '#A9A9A9',
        color: 'gray',
    },
})
