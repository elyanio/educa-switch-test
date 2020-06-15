import * as React from 'react';
import { View, ImageSourcePropType, StyleSheet, Text, Image } from 'react-native';

interface Props {
    title?: string
    width: number
    height: number
    source: ImageSourcePropType
}

const UserItem = (props: Props) => {
    const { title, source } = props
    const dynamicStyleInstance = styleInline(props);
    return (
        <View style={style.container}>
            <Image style={dynamicStyleInstance.image}
                source={source}
            />
            <Text style={style.text}>{title}</Text>
        </View>
    )
}
const styleInline = ({ width, height }: Props) => StyleSheet.create({
    image: {
        width,
        height,
    }
});

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row"
    },
    text: {
        paddingLeft: '0.5rem',
        fontSize: 15,
        flexDirection: "column-reverse"

    }
})

export default UserItem





