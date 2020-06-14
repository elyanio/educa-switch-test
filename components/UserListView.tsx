import * as React from 'react';
import { View, ImageSourcePropType, StyleSheet, Text, Image, requireNativeComponent } from 'react-native';
import UserItemList from '../components/UserItemList'
import { FlatList } from 'react-native-gesture-handler';

export interface MockData {
    name: string
    avatar: ImageSourcePropType
}

interface Props {
    width: number
    height: number
}
const dataApi: MockData[] = [
    {
        name: 'Alejandro',
        avatar: require('../assets/images/robot-prod.png')
    }, {
        name: 'Alejandro',
        avatar: require('../assets/images/robot-prod.png')
    },
    {
        name: 'Alejandro',
        avatar: require('../assets/images/robot-dev.png')
    }
];



export const UserListView = ({ width, height }: Props) => {
    return (
        <FlatList
            data={dataApi}
            renderItem={({ item, index }) =>
                <View style={style.item}>
                    <UserItemList
                        key={index}
                        title={item.name}
                        source={item.avatar}
                        height={height}
                        width={width}
                    />
                </View>

            }
        />
    )
}


const style = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1
    },
    item: {
        marginBottom: 5

    }
})

