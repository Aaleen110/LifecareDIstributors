import React, { Component } from "react";
import { View, ScrollView, Text, Platform, TouchableOpacity, Image, Animated, FlatList } from "react-native";
import Colors from "../../utils/colors";
import common_styles from "../../utils/common_styles";
import Global from "../../utils/globals";

class Parties extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <View style={common_styles.container}>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1, marginBottom: 50 }}>
                    <Text style={common_styles.titleText}>{'Boss..'}</Text>
                </View>
            </View>
        );
    }

}

export default Parties;
