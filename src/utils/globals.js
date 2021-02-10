import { Dimensions, Platform } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Global = {
    screenWidth: deviceWidth,
    screenHeight: deviceHeight,
    iOSPlatform: Platform.OS === "ios",
    rupeeSymbol: "\u20B9",
    LTHDateFormat: "yyyy-MM-dd'T'HH:mm:ss'Z'",
    LTHDateFormatMoment: "YYYY-MM-DDTHH:mm:ss",
    dateFormatDisplay: "Do MMM YYYY",
    appVersion: "1.0",
    DebugModeOff: true, // false for testing true for live
};

export default Global;
