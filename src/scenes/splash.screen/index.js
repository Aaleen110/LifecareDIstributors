import React, { Component } from "react";
import { View, ScrollView, Text, Platform, TouchableOpacity, Image, Animated, FlatList } from "react-native";
import Colors from "../../utils/colors";
import common_styles from "../../utils/common_styles";
import Global from "../../utils/globals";
import Routes from "../../utils/routes";
import { StackActions } from '@react-navigation/native';


class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate(Routes.tabNav, { isFromList: false });
        }, 2000);
    }

    render() {
        return (
            <View style={common_styles.container}>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1, marginBottom: 50 }}>
                    <Text style={common_styles.titleText}>{'Life Care\nDistributors..'}</Text>
                </View>
            </View>
        );
    }

}

export default SplashScreen;
