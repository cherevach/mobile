import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddBook from '../components /AddBook';
import BooksList from '../components /BooksList';
import BookDetails from '../components /BookDetails';

const Stack = createStackNavigator();

function ThirdScreen({ navigation }) {
    const [search, setSearch] = useState('');
    const [masterData, setMasterData] = useState(require('../assets/books/BooksList.json').books);
    const [filteredData, setFilteredData] = useState(masterData);

    const addBook = (title, subtitle, price) => {
        setMasterData([...masterData, { 'title': title, 'subtitle': subtitle, 'price': "$" + price }]);
        setFilteredData([...masterData, { 'title': title, 'subtitle': subtitle, 'price': "$" + price }]);
    };

    const handleSearch = (input) => {
        if (input) {
            const newData = masterData.filter(book => book.title.toLowerCase().indexOf(input.toLowerCase()) > -1);
            setFilteredData(newData);
            setSearch(input);
        }
        else {
            setFilteredData(masterData);
            setSearch(input);
        };
    };

    const deleteBook = (item) => {
        const newData = [...masterData];
        newData.splice(newData.indexOf(item), 1);
        setMasterData(newData);
        setFilteredData(newData);
    };
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Books'
                options={{
                    headerRight: () => (
                        <Button style={{ marginTop: -7 }}
                            onPress={() => navigation.navigate('Add book')}
                            type='clear'
                            icon={<Ionicons name='add' size={30} color='#007AFF' />}
                        />
                    ),
                }}
            >
                {(props) => <BooksList {...props}
                    data={filteredData}
                    deleteBook={deleteBook}
                    search={search}
                    handleSearch={handleSearch} />}
            </Stack.Screen>
            <Stack.Screen
                name='Add book'
            >
                {(props) => <AddBook {...props} addBook={addBook} />}
            </Stack.Screen>
            <Stack.Screen
                name='Book details'
                component={BookDetails}
            >
            </Stack.Screen>

        </Stack.Navigator>
    )
};

export default ThirdScreen;
