import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Modal
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

class ToggleableFilters extends React.Component {
    /**
    * The following is for showing and hiding the filter options modal
    */    
    state = {
        isVisible: false
    };

    displayFiltersModal(show){
        this.setState({isVisible: show})
        }
    /**
    * !! No documentation after this point. Comments in the render function break the application. !!
    */  
    render(){
        return(
            <View>
            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible}
            >
                <View style={styles.filtersOptionsContainer}>

                    <View style={styles.filtersCheckboxRowContainer}>
                        <CheckBox/>
                        <Text style={styles.filtersCheckboxLabel}>Academic Buildings</Text>
                    </View>
                    <View style={styles.filtersCheckboxRowContainer}>
                        <CheckBox/>
                        <Text style={styles.filtersCheckboxLabel}>Parking</Text>
                    </View>
                    <View style={styles.filtersCheckboxRowContainer}>
                        <CheckBox/>
                        <Text style={styles.filtersCheckboxLabel}>Recreation Services</Text>
                    </View>
                    <View style={styles.filtersCheckboxRowContainer}>
                        <CheckBox/>
                        <Text style={styles.filtersCheckboxLabel}>Student Housing</Text>
                    </View>
                    <View style={styles.filtersCheckboxRowContainer}>
                        <CheckBox/>
                        <Text style={styles.filtersCheckboxLabel}>University Services</Text>
                    </View>
            
                </View>

              <Text 
                style={styles.filtersModalCloseText}
                onPress={() => {
                this.displayFiltersModal(!this.state.isVisible);}}>Close</Text>
            </Modal>

         <View style = { styles.modalContainer }>
            <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                    this.displayFiltersModal(true);
                }}>
                <Text style={{color: 'white'}}>Filters</Text>
            </TouchableOpacity>               
        </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({

    modalContainer: {
        padding: 25,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      modalButton: {
        borderColor: 'black',
        padding: 10,
        display: 'flex',
        height: 30,
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        backgroundColor: '#00703c',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5,
        shadowOffset: { 
          height: 10, 
          width: 0 
        },
        shadowRadius: 20,
      },
      filtersModalCloseText: {
        fontSize: 24,
        color: '#00703c',
        textAlign: 'center'
    },
    filtersOptionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      filtersOptionsText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      filtersCheckboxLabel: {
          margin: 8
      },
      filtersCheckboxRowContainer: {
          flexDirection: "row"
      }

});

export { ToggleableFilters };