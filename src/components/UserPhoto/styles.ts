import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar:{
    width: 48,
    height: 48,
    borderWidth:2.5,
    borderColor: COLORS.BLACK_SECONDARY
  }
})