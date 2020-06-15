import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StarIcon } from './StarIcon'

interface Props {
    rating: number;
}

export const Rating = ({ rating }: Props) => {
    return (
        <View style={styles.container} >
            <StarIcon width={16} height={16} />
            <Text style={styles.text} >{rating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginRight: 5,
        alignItems: 'center'
    },
    text: {
        marginLeft: 2,
        fontSize: 14
    }
});