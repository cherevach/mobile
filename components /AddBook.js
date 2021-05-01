import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function AddBook({ addBook, navigation }) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState('');
    const [pricePlaceHolder, setPricePlaceHolder] = useState('Price')
    return (
        <KeyboardAwareScrollView>
            <SafeAreaView >
                <Text style={styles.text}>Title</Text>
                <TextInput style={styles.input}
                    onChangeText={setTitle}
                    value={title}
                    placeholder='Title'>
                </TextInput>
                <Text style={styles.text}>Subtitle</Text>
                <TextInput style={styles.input}
                    onChangeText={setSubtitle}
                    value={subtitle}
                    placeholder='Subtitle'>
                </TextInput>
                <Text style={styles.text}>Price</Text>
                <TextInput style={styles.input}
                    onChangeText={setPrice}
                    value={price}
                    placeholder={pricePlaceHolder}>
                </TextInput>
                <Button
                    type={'clear'}
                    onPress={() => {
                        if (/^\d+(\.\d{1,2})?$/.test(price)) {
                            addBook(title, subtitle, price);
                            setTitle('');
                            setSubtitle('');
                            setPrice('');
                            setPricePlaceHolder('Price');
                            navigation.goBack();
                        }
                        else {
                            setPrice('');
                            setPricePlaceHolder('Enter a numeric value for price');
                        };
                    }}
                    title={'Add'}
                    titleStyle={{ marginTop: 15, color: '#007AFF' }}>
                </Button>
            </SafeAreaView >
        </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({
    input: {
        width: '95%',
        height: 30,
        alignSelf: 'center',
        paddingLeft: 5,
        marginTop: 5,
        borderWidth: 2,
        borderColor: '#D0D0D0',
        borderRadius: 4

    },
    text: {
        marginTop: 15,
        marginLeft: '2%',
        fontSize: 16
    },
    button: {
        alignItems: 'flex-start',
        borderBottomWidth: 2,
        borderBottomColor: '#D0D0D0'
    }
});

export default AddBook;