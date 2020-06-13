import React from 'react'
import { RepoListView } from '../components/RepoListView'

const mockData = [
    {
        key: '1',
        id: 1,
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.',
        rating: 5422
    },
    {
        key: '2',
        id: 2,
        title: 'Lorem ipsum dolor sit amet2.',
        description: 'Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.',
        rating: 5422
    },
    {
        key: '3',
        id: 3,
        title: 'Lorem ipsum dolor sit amet3.',
        description: 'Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.',
        rating: 5422
    },
    {
        key: '4',
        id: 4,
        title: 'Lorem ipsum dolor sit amet4.',
        description: 'Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.',
        rating: 5422
    }
]
export const RepoList = () => {

    const onItemPress = (itemId: number) => {
        console.log(itemId)
    }

    return <RepoListView data={mockData} onItemPress={onItemPress} />
}