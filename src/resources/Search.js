import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

class Search extends React.Component {
    state = {
        text: ''
      };

    render(){
        return(
            <View>
                <View style={styles.SearchRowContainer}>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Search"
                        placeholderTextColor = '#00703c'
                        autoCapitalize = "none"
                    />
                </View>
             </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        top:-665,
        height:45,
        borderColor: '#00703c',
        borderWidth: 1,
        width: 390,
        backgroundColor:'#FFFFFF',
        shadowColor:'#2f4f4f',
        shadowOpacity: 0.5,
        shadowOffset: { 
            height: 10, 
            width: 0 
          },
          shadowRadius: 30,
     }
});


export { Search };