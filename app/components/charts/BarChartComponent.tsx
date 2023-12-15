import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-chart-kit'

type Props = {}

const BarChartComponent = (props: Props) => {
    const screenWidth = Dimensions.get('window').width
    const graphStyle = {
        marginVertical: 8,
        borderRadius: 16,
    }
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16,
        },
    }

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
            },
        ],
    }
    return (
        <View style={styles.container}>
            <BarChart
                style={graphStyle}
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel="$"
                yAxisSuffix="" // Add the yAxisSuffix property here
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        </View>
    )
}

export default BarChart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    bar: {
        height: 60,
        width: 20,
        marginRight: 5,
    },
    barContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'baseline',
        backgroundColor: '#efefef',
        padding: 10,
        bottom: 0,
        position: 'absolute',
    },
})
