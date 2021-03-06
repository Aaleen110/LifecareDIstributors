import React, { Component } from "react";
import { View, ScrollView, Text, Platform, TouchableOpacity, Image, Animated, FlatList, TextInput } from "react-native";
import { CommonModal, SearchBar } from "../../components";
import Colors from "../../utils/colors";
import common_styles from "../../utils/common_styles";
import Global from "../../utils/globals";
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

import Ripple from "react-native-material-ripple";
import ModalBox from "react-native-modalbox";
import Routes from "../../utils/routes";

const DATA = [
    {
        alert: true,
        name: 'Doctor/ Clinic',
        contact: '9623435889',
    },
    {
        alert: true,
        name: 'Doctor/ Clinic',
        contact: '9623435889',
    },
    {
        alert: true,
        name: 'Doctor/ Clinic',
        contact: '9623435889',
    },
];

const DATA2 = [
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

class AllPayments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSortModal: false
        }
    }

    componentDidMount() {

    }

    renderRow = ({ item, index }) => {
        return (
            <Ripple
                onPress={() => { this.props.navigation.navigate(Routes.paymentDetails) }}
                style={{ backgroundColor: Colors.cardBg, borderWidth: 0.5, borderColor: '#525252', paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        onPress={() => props.onAction()}
                        style={{ marginLeft: -4, height: 46, width: 10, borderRadius: 300, backgroundColor: item.alert ? Colors.themeRed : '#9B9B9B', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>{item.name}</Text>
                        <Text style={{ color: '#A8A8A8', fontSize: 17 }}>{item.contact}</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
                    <Text style={{ color: item.alert ? Colors.themeRed : '#9B9B9B', fontSize: 18, }}>{'₹50000'}</Text>
                    <Text style={{ color: '#A8A8A8', fontSize: 12 }}>{'Due-01/01/21'}</Text>
                </View>

            </Ripple>
        )

    }

    renderFAB = () => {
        return (
            <Ripple
                onPress={() => this.props.navigation.navigate(Routes.reports)} style={{ height: 60, width: 60, borderRadius: 35, backgroundColor: Colors.themeBlue, position: 'absolute', right: 16, bottom: 16, justifyContent: 'center', alignItems: 'center' }}>
                <Foundation name="graph-bar" color={'#fff'} style={{ alignSelf: 'center' }} size={30} />
            </Ripple>
        )
    }

    renderSortModal = () => {
        return (
            <ModalBox
                position={'center'}
                backdropPressToClose={true}
                isOpen={this.state.showSortModal}
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
                onClosed={() => { this.setState({ showSortModal: false }) }}
                onOpened={this.onOpen}
                onClosingState={() => { this.setState({ showSortModal: false }) }}>
                <View style={{ width: '100%' }}>
                    <Text style={{ color: "#fff", fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-end', padding: 16 }}>Sort by</Text>
                </View>

                <Ripple style={{ flexDirection: 'row' }}>
                    <Feather name="check-circle" color={'#eee'} style={{ alignSelf: 'center', marginLeft: 16 }} size={24} />
                    <Text style={{ color: "#fff", fontSize: 18, padding: 10, }}>Due Date</Text>
                </Ripple>

                <View style={{ height: 0.2, width: '100%', backgroundColor: '#DFDFDF' }}></View>

                <Ripple style={{ flexDirection: 'row' }}>
                    <Feather name="check-circle" color={'#eee'} style={{ alignSelf: 'center', marginLeft: 16 }} size={24} />
                    <Text style={{ color: "#fff", fontSize: 18, padding: 10, }}>High</Text>
                </Ripple>

                <View style={{ height: 0.2, width: '100%', backgroundColor: '#DFDFDF' }}></View>

                <Ripple style={{ flexDirection: 'row' }}>
                    <Feather name="check-circle" color={'#eee'} style={{ alignSelf: 'center', marginLeft: 16 }} size={24} />
                    <Text style={{ color: "#fff", fontSize: 18, padding: 10, }}>Low</Text>
                </Ripple>

            </ModalBox>
        )
    }


    render() {
        return (
            <View style={common_styles.container}>
                <SearchBar onAction={() => { this.setState({ showSortModal: true }) }} />

                <ScrollView style={{}}>
                    <Text style={{ color: '#747474', padding: 16, fontSize: 16 }}>LESS THAN 30 DAYS</Text>
                    <FlatList
                        data={DATA}
                        extraData={DATA}
                        style={{}}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.id}
                    />

                    <Text style={{ color: '#747474', padding: 16, fontSize: 16 }}>ALL PENDING PAYMENTS</Text>

                    <FlatList
                        data={DATA2}
                        extraData={DATA2}
                        style={{}}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>

                {this.renderSortModal()}

                {this.renderFAB()}

            </View>
        );
    }

}

export default AllPayments;
