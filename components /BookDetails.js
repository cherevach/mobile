import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, ScrollView } from 'react-native';
import books from '../assets/books/books';
import images from '../assets/books/images'

function BookDetails({ route }) {
    const { isbn13 } = route.params;
    let book;
    books[isbn13] ? book = books[isbn13] : book = {};

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={images[book.image]} />
                <Text>{`Title: ${book.title ?? '-'}`}</Text>
                <Text>{`Subtitle: ${book.subtitle ?? '-'}`}</Text>
                <Text>{`Description: ${book.desc ?? '-'}\n`}</Text>
                <Text>{`Authors: ${book.authors ?? '-'}`}</Text>
                <Text>{`Publisher: ${book.publisher ?? '-'}\n`}</Text>
                <Text>{`Pages: ${book.pages ?? '-'}`}</Text>
                <Text>{`Year: ${book.year ?? '-'}`}</Text>
                <Text>{`Rating: ${book.year ?? '-'}/5`}</Text>
            </ScrollView>
        </SafeAreaView >
    )
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    image: {
        alignSelf: 'center',
        width: 220,
        height: 300
    }

});

export default BookDetails;
