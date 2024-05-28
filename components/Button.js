import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES } from "../constants";

const Button = ({
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.thepink,
        margin: 10,
        width: '100%',
        ...styles.shadow
      }}
      onPress={onPress}
    >
      <Text
        style={{ color: COLORS.white, fontSize: 20,fontFamily: "Optima-ExtraBlack", }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
