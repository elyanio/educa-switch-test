import * as React from 'react';
import { View, ImageSourcePropType, StyleSheet, Text, Image } from 'react-native';
import { theme } from '../theme';

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
        flexDirection: "row",
          alignItems: 'flex-start',
          backgroundColor: theme.colors.white,
          height: 100,
          borderRadius: 10,
          margin: 5
    },
    text: {
        paddingLeft: '0.5rem',
        fontSize: 15,
        flexDirection: "column-reverse"

    }
})

export default UserItem





