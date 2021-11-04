import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container:{
    height: RFValue(48),
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 20,
    paddingBottom: getBottomSpace()+32

  }
 

})