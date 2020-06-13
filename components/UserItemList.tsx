import * as React from 'react';
import { View, ImageSourcePropType, StyleSheet, Text , Image} from 'react-native';

interface Props {
    title?: string
    width: number
    height:number
    source:ImageSourcePropType
}

const UserItemList = ({ source,title,width=50,height=50}: Props) => {
    return (
        <View style={style.container}>
            <Image source={source}   
              style={{ width: width, height: height }}
            /> 
            <Text style={style.text}>{title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    text: {
        paddingLeft: '1rem',
        fontSize:15
    }
})


export default UserItemList