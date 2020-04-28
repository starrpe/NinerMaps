/**
 * NinerMaps
 * Main body of the NinerMaps app set-up
 */

import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

/**
 * Local imports
 */
import { housing } from './resources/markers/housing'
import { academic } from './resources/markers/academic'
import { mapstyle } from './resources/MapStyle'



/**
* Region: initial position of the map is on UNCC lat/long
* Note on pinColor prop: GoogleMaps API doesn't accept custom
* hex colors for Android. Colors must be from the following list:
* red (default), tomato, orange, yellow, gold, what, tan, linen,
* green, blue/navy, aqua/teal/turquoise, violet/purple/plum, indigo
*/
export default class App extends React.Component {

    showMessage = () => {

        Alert.alert (

            'hi chase',

            

        )
    }
   




    render() {
        return (
            <View 
                style = { styles.container }>
                <MapView 
                    style={styles.map}
                    customMapStyle={mapstyle}
                    showsUserLocation={true}
                    region={{
                    latitude: 35.303555,
                    longitude: -80.73238,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                    }}>
                          

                      <Marker 
                          coordinate={{latitude: 35.308802, longitude:  -80.733709}}
                          markerImage={'..\\assets\\pins\\dorms.png'}
                          pinColor={'green'}>
                              <Callout >
                                  
                              <Text style={styles.callOutHeading}>
                                    Student Union {"\n"}
                                </Text>
                                
                                <TouchableOpacity
                               
                                 onPress={this.showMessage}
                                 >
                                
                                <Text  style={styles.buttons}>Dining and Services</Text>
        
                                </TouchableOpacity>
                                   

                                    
                                    
                                         
                                    
                                         
                                          <Text style={styles.buttons}>
                                                          Building Contacts
                                      
                                      
                                      </Text> 
                              

                              </Callout>
                      
                    
                        
                                
                        </Marker>





                {
                    housing.map(marker =>(
                        <Marker 
                            coordinate = {{
                                latitude: marker.latitude,
                                longitude: marker.longitude}}
                                title = {marker.title}
                                key = {marker.tag}
                                pinColor = {'gold'}>
                                
                                <Callout>
                                <Text style={styles.callOutHeading}>
                                {marker.title}
                                </Text>

                                <Text style={styles.buttons}>
                                                          Building Contacts
                                      
                                      
                                      </Text>

                                </Callout>



                        </Marker>
                    ))
                }
                {
                    academic.map(marker =>(
                        <Marker 
                        
                            coordinate = {{
                                latitude: marker.latitude,
                                longitude: marker.longitude}}
                                title = {marker.title}
                                key = {marker.tag}
                                pinColor = {'red'}
                                calloutImage= {marker.calloutImage}>

<Callout>

<Text style={styles.callOutHeading}>
                {marker.title}
                </Text>
                <Text style={styles.buttons}>
                          Services
      
      
      </Text>

</Callout>






                                
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
    },

    buttons: {

      color: '#08701C', 
      textAlign: 'center', 
      fontSize: 25, 
      borderStyle: 'solid',
      borderWidth: 2,
      paddingRight: 10,
      paddingLeft: 10,
      marginBottom: 10,
      borderRadius: 25,
      backgroundColor:"#F1F7EC"

    },
    callOutHeading: {

                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold', 
                color:'#08701C'

    }

    

});
