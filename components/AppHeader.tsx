import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const AppHeader = () => {

        return (
                <Appbar.Header  style={styles.headers} >
                        <Appbar.Content title="Githubs" style={styles.title} />
                </Appbar.Header>
        );
}

const styles = StyleSheet.create({
        headers: {
                backgroundColor: "#2155de",
                height:80
        },
        title: {
                backgroundColor: "#2155de",
                marginTop:25
        }
})


