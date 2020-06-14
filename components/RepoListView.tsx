import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { ListItemView } from './ListItemView'
import { DataRepoResultType } from '../types'

interface Props {
    data: DataRepoResultType[];
    onItemPress: (itemId: string) => void;
}

export const RepoListView = ({ data, onItemPress }: Props) => {
    return (
        <FlatList
            data={data}
            style={styles.list}
            renderItem={({ item }) =>
                <ListItemView
                    key={item.id}
                    id={item.id}
                    title={item.repositoryName}
                    description={item.repositoryDescription}
                    onPress={onItemPress}
                    rating={item.stargazers}
                />
            }
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#eee'
    }
});