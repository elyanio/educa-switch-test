import React from 'react'
import { StyleSheet } from 'react-native'
import { List } from 'react-native-paper'
import { theme } from '../theme'
import { ListItemTitle } from './ListItemTitle'

interface Props {
    onPress: (itemId: string) => void;
    id: string;
    title: string;
    rating: number;
    description: string;
}

export const ListItemView = ({ id, title, rating, description, onPress }: Props) => {

    const handleOnPress = () => {
        onPress(id)
    }

    return (
        <List.Item
            style={styles.item}
            title={<ListItemTitle title={title} rating={rating} />}
            description={description}
            onPress={handleOnPress}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: theme.colors.white,
        height: 100,
        borderRadius: 10,
        margin: 5
    }
});