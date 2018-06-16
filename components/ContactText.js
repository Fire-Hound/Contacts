import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Ionicons';

import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

const styles = StyleSheet.create({
    names: {
        fontSize: 26
    }
});

const ContactText = (props) => {
    return (
        <View style={{borderColor:'#ff0000', borderWidth: 2,width:300,flex:1, flexDirection: 'row'}}>
        <View 
        style={{ flex: 1, justifyContent: 'space-between'}}>
            <Text style={props.styleName}>
                {props.name}
            </Text>
            <Text style={props.style}>
            {props.number}
            </Text>
        </View>
        <View>
            <Icon name="ios-call"/>
        </View>
        </View>
    );
}

export default ContactText;

