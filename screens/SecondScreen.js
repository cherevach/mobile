import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import PieChart from '../components /PieChart';
import Graph from '../components /Graph';

function SecondScreen() {
    function switchCharts(val) {
        switch (val) {
            case 'graph': return <Graph />;
            case 'piechart': return <PieChart />;
        }
    }
    const [value, setValue] = useState('graph');
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <SwitchSelector
                options={[
                    { label: 'Graph', value: 'graph' },
                    { label: 'Pie chart', value: 'piechart' }
                ]}
                textColor='#000000'
                selectedColor='#ffffff'
                buttonColor='#000000'
                borderRadius={10}
                initial={0}
                style={{
                    top: 10,
                    width: '90%',
                    maxWidth: 500
                }}
                onPress={val => setValue(val)}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {switchCharts(value)}
            </View>
        </SafeAreaView>
    );
}

export default SecondScreen;