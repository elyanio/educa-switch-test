import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rating } from '../Rating';

interface Props {
    title: string;
    rating: number;
}

export const ListItemTitle = ({ title, rating }: Props) => {
    return (
        <View style={styles.title} >
            <Rating rating={rating} />
            <Text>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center'
    }
});