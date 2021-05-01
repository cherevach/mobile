import React from 'react';
import { View, Image, Text, StyleSheet, Pressable, TouchableHighlight, Animated, } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import images from '../assets/books/images';

function Book({ image, title, subtitle, price, onPress, handleDelete }) {
    return (
        <Swipeable renderRightActions={() => {
            return (
                <TouchableHighlight onPress={handleDelete}>
                    <View style={styles.RightActions}>
                        <Animated.Text style={styles.RightActionsText}>
                            Delete
                    </Animated.Text>
                    </View>
                </TouchableHighlight>)
        }}>
            <Pressable onPress={onPress}
                style={({ pressed }) => [{
                    backgroundColor: pressed ? '#D0D0D0' : '#F2F2F2'
                }]}
            >
                <View style={styles.item}>
                    <Image source={images[image]} style={styles.image} />
                    <View style={styles.description}>
                        <Text >{title}</Text>
                        <Text >{subtitle}</Text>
                        <Text >{price}</Text>
                    </View>
                </View>
            </Pressable>
        </Swipeable>
    )
}
const styles = StyleSheet.create({
    item: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D0D0D0',
    },
    image: {
        width: 100,
        height: 120,
    },
    description: {
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 15,
        flexShrink: 1,
        justifyContent: 'space-between',
    },
    RightActions: {
        display: 'flex',
        flex: 1,
        width: 80,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    RightActionsText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15
    }
});

export default Book;
