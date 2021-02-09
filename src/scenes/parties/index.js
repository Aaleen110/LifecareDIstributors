import React, { Component } from "react";
import { View, ScrollView, Text, Platform, TouchableOpacity, Image, Animated, FlatList } from "react-native";
import { CommonModal, SearchBar } from "../../components";
import Colors from "../../utils/colors";
import common_styles from "../../utils/common_styles";
import Global from "../../utils/globals";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Ripple from "react-native-material-ripple";
import ModalBox from "react-native-modalbox";

const DATA = [
    {
        name: 'Doctor/ Clinic',
        contact: '9623435889',
    },
    {
        name: 'Doctor/ Clinic',
        contact: '9623435889',
    },
    {
        name: 'Doctor/ Clinic',
        contact: '9623435889',
    },
];
const colorArr = [Colors.olive, Colors.salmon, Colors.brown, Colors.blue, Colors.purple, Colors.cyan]

class Parties extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addNewParty: false
        }
    }

    componentDidMount() {

    }

    renderRow = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: Colors.cardBg, borderWidth: 0.5, borderColor: '#525252', paddingVertical: 12, paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        onPress={() => props.onAction()}
                        style={{ height: 46, width: 46, borderRadius: 300, backgroundColor: colorArr[index], alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: "#fff" }}>CN</Text>
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ color: '#fff', fontSize: 19 }}>{item.name}</Text>
                        <Text style={{ color: '#A8A8A8', fontSize: 18 }}>{item.contact}</Text>
                    </View>
                </View>

                <Ripple>
                    <MaterialIcons name="call" color={Colors.themeBlue} size={28} />
                </Ripple>

            </View>
        )

    }

    renderFAB = () => {
        return (
            <Ripple
                onPress={() => this.setState({ addNewParty: true })} style={{ height: 60, width: 60, borderRadius: 35, backgroundColor: Colors.themeBlue, position: 'absolute', right: 16, bottom: 16, justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign name="plus" color={'#fff'} style={{ alignSelf: 'center' }} size={30} />
            </Ripple>
        )
    }


    render() {
        return (
            <View style={common_styles.container}>
                <SearchBar />

                <FlatList
                    data={DATA}
                    extraData={DATA}
                    style={{}}
                    renderItem={this.renderRow}
                    keyExtractor={item => item.id}
                />

                {this.renderFAB()}

                <ModalBox
                    position={'center'}
                    backdropPressToClose={true}
                    isOpen={this.state.addNewParty}
                    style={{
                        height: null,
                        width: '90%',
                        backgroundColor: Colors.cardBg,
                        borderWidth: 1,
                        borderColor: Colors.cardBorder,
                        borderRadius: 16,
                        paddingBottom: 16
                    }}
                    ref={'modal1'}
                    swipeToClose={this.state.swipeToClose}
                    onClosed={() => { this.setState({ addNewParty: false }) }}
                    onOpened={this.onOpen}
                    onClosingState={() => { this.setState({ addNewParty: false }) }}>
                    <CommonModal />
                </ModalBox>

            </View>
        );
    }

}

export default Parties;
