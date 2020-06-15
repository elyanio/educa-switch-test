import * as React from 'react';
import { View, ImageSourcePropType, StyleSheet, Text, Image, requireNativeComponent } from 'react-native';
import UserItemList from '../components/UserItemList'
import { FlatList } from 'react-native-gesture-handler';

export interface MockData {
    name: string
    id:string
    avatar: ImageSourcePropType
}

interface Props {
    width: number
    height: number
    nameRepo: string,
    descriptionRepo: string
}
const dataApi: MockData[] = [
    {   id:"1", 
        name: 'Alejandro',
        avatar: require('../assets/images/robot-prod.png')
    }, { 
        id:"2",
        name: 'Alejandro',
        avatar: require('../assets/images/robot-prod.png')
    },
    { 
        id:"3",
        name: 'Alejandro',
        avatar: require('../assets/images/robot-dev.png')
    }
];



export const UserListView = ({ width, height, nameRepo, descriptionRepo }: Props) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>{nameRepo}</Text>
            <Text style={style.description}>{descriptionRepo}</Text>
            <FlatList
                data={dataApi}
                renderItem={({ item, index }) =>
                    <View style={style.item}>
                        <UserItemList
                            key={item.id}
                            title={item.name}
                            source={item.avatar}
                            height={height}
                            width={width}
                        />
                    </View>

                }
            />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column"
    },
    item: {
        marginBottom: 5,
        paddingLeft: 10,

    },
    title: {
        fontSize: 25,
        paddingLeft: 10,
        marginBottom: 10
    },
    description: {
        fontSize: 15,
        paddingLeft: 10,
        marginBottom: 15

    }
})

