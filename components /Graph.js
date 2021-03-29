import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Line } from 'react-native-svg';
import { LineChart } from 'react-native-svg-charts';

export default function Plot() {
    let y = [];
    for (let i = -2 * Math.PI; i <= 2 * Math.PI; i = i + (Math.PI / 20)) {
        y.push(parseFloat(Math.sin(i).toFixed(10)));
    }; return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Svg
                width='280' height='280' viewBox='0 0 280 280'>
                <Path d='M140.4 1.44724e-07L144.73 7.5L136.07 7.5L140.4 1.44724e-07ZM280 140L272.5 144.33L272.5 135.67L280 140ZM139.65 280L139.65 6.75L141.15 6.75L141.15 280L139.65 280ZM-1.45917e-07 139.25L273.25 139.25L273.25 140.75L-1.44361e-07 140.75L-1.45917e-07 139.25Z' fill='black' />
                <Line x1='134' y1='109.25' x2='146' y2='109.25' stroke='black' stroke-width='1.5' />
                <Line x1='170.75' y1='134' x2='170.75' y2='146' stroke='black' stroke-width='1.5' />
            </Svg>
            <LineChart
                style={{ position: 'absolute', position: 'absolute', width: 280, height: 60 }}
                data={y}
                svg={{ stroke: 'blue' }}
            ></LineChart>
        </View>
    );
}
