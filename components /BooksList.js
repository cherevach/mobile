import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Book from './Book';

function BooksList({ data, deleteBook, search, handleSearch, navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SearchBar
                containerStyle={{ backgroundColor: '#F2F2F2' }}
                platform='ios'
                placeholder='Type Here...'
                onChangeText={handleSearch}
                value={search} />
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return <Book
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        price={item.price}
                        handleDelete={() => deleteBook(item)}
                        onPress={() => navigation.navigate('Book details', { isbn13: item.isbn13 })}
                    />;
                }}
                keyExtractor={(item, index) =>
                    //create unique key for each item
                    item.price.toString + (Math.random() * 100 + 1).toString()} />
        </SafeAreaView>
    );
}

export default BooksList;