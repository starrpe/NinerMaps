/**
 * NinerMaps
 * Main body of the NinerMaps app set-up
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
/**
 * Marker point imports
 */
import { housing } from './resources/markers/housing'

/**
* Region: initial position of the map is on UNCC lat/long
* Note on pinColor prop: GoogleMaps API doesn't accept custom
* hex colors for Android. Colors must be from the following list:
* red (default), tomato, orange, yellow, gold, what, tan, linen,
* green, blue/navy, aqua/teal/turquoise, violet/purple/plum, indigo
*/
export default class App extends React.Component {
    render() {
        return (
            <View style = { styles.container } >
                <MapView style={styles.map}
                    region={{
                    latitude: 35.303555,
                    longitude: -80.73238,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                    }}>

                {
                    housing.map(marker =>(
                        <Marker 
                            coordinate = {{
                                latitude: marker.latitude,
                                longitude: marker.longitude}}
                                title = {marker.title}
                                key = {marker.tag}
                                image = {marker.markerImage}
                                pinColor = {'gold'}>
                        </Marker>
                    ))
                }

                </MapView>
            </View>
        );
     }
}


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }

});