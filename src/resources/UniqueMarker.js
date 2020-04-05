import React from 'react'
import {View,StyleSheet,Image} from 'react-native'

const UniqueMarker = ({item}) => {
    return (
        <View style={styles.roundMarker}>
            <Image style={styles.roundImage} source={{uri:item.markerImage}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    roundMarker: {
        height: 30,
        width: 30,
        backgroundColor: 'black',
        borderRadius: 25,
    },
    roundImage: {
        height: 25,
        width: 25,
        borderRadius: 25
    }
})

export default UniqueMarker