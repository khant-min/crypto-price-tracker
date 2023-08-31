import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function ListItem({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
  onPress,
}) {
  const priceChangeColor = priceChangePercentage7d > 0 ? "green" : "red";

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        {/* left side */}
        <View style={styles.leftWrapper}>
          <Image style={styles.image} source={{ uri: logoUrl }} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/* right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={[styles.subTitle, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  titleWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subTitle: { fontSize: 14, color: "#a9abb1", marginTop: 4 },
  rightWrapper: { alignItems: "flex-end" },
});
