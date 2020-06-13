import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { ListItemView } from './ListItemView'

interface Props {
    data: any[];
    onItemPress: (itemId: number) => void;
}

export const RepoListView = ({ data, onItemPress }: Props) => {
    return (
        <FlatList
            data={data}
            style={styles.list}
            renderItem={({ item }) =>
                <ListItemView
                    key={item.key}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    onPress={onItemPress}
                    rating={item.rating}
                />
            }
            keyExtractor={item => item.key}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#eee'
    }
});