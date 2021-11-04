import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  
  button:{
    height: RFValue(48),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },

  icon:{
    color: COLORS.BLACK_SECONDARY,
    marginRight:12
  }
})