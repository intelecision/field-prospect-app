import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-chart-kit'
import PieChart from 'react-native-pie-chart'

type Props = {}

const data = [
    {
        name: 'Kwarteng',
        population: 24,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Fred',
        population: 28,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Kweku',
        population: 18,
        color: 'tomato',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Appiah',
        population: 15,
        color: '#0d47a1',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'You',
        population: 12,
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
]
const widthAndHeight = 200
const series = [123, 321, 123, 789, 537]
const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']
const agents = ['You', 'Kwame', 'Kofi', 'Akua', 'Felicia']

const PieChartComponent = (props: Props) => {
    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#08130D',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        avoidFalseZero: true,
    }
    const screenWidth = Dimensions.get('window').width

    return (
        <View
            style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}
        >
            <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.45}
                coverFill={'#FFF'}
            />
            {/*<PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
            />*/}
            <View style={{ marginTop: 14, marginLeft: 20 }}>
                {sliceColor.map((color, index) => (
                    <View
                        key={index}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            //justifyContent: 'center',
                            marginBottom: 10,
                        }}
                    >
                        <View
                            style={{
                                width: 10,
                                height: 10,
                                backgroundColor: color,
                                margin: 10,
                            }}
                        />
                        <Text>{agents[index]}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default PieChartComponent

const styles = StyleSheet.create({})
