import React from 'react';
import { VictoryPie } from 'victory-native'

function PieChart() {
    const data = [
        { x: ' ', y: 5, color: '#9B704B' },
        { x: ' ', y: 5, color: '#00EFF3' },
        { x: ' ', y: 10, color: '#FF7D12' },
        { x: ' ', y: 80, color: '#003EFF' }
    ];
    return (
        <VictoryPie
            data={data}
            innerRadius={65}
            height={350}
            style={{
                data: { fill: (d) => d.datum.color }
            }}
        />
    )
}

export default PieChart;