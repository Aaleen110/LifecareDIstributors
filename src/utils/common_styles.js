import { StyleSheet } from 'react-native';
import Colors from './colors';
import Global from './globals';

const common_styles = StyleSheet.create({
    container: {
        height: Global.screenHeight,
        width: Global.screenWidth,
        backgroundColor: Colors.themeBackground,
        flex: 1
    },

    titleText: {
        fontSize: 25,
        color: Colors.titleColor,
        fontWeight: 'bold',

    },
});

export default common_styles;