import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS,FONTS } from "../../theme/";

export const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: getStatusBarHeight() + 17
  }
})

