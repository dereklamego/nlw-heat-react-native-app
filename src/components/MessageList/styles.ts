import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 20
  },

  content:{

    paddingBottom: RFValue(135),
    paddingTop: RFValue(154)

  }
})