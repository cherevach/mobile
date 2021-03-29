import React from 'react';
import { Text, View } from 'react-native';

function MainScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>
                {'Черевач Анатолій\n Група ІП-83\n ЗК ІП-8525'}
            </Text>
        </View>
    );
}

export default MainScreen;