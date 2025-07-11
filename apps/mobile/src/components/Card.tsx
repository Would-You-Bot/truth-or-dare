import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { cva, type VariantProps } from "class-variance-authority";
import { useMemo } from "react";
import { COLORS } from "../utils/constants";
import { typography } from "../utils/typography";

const cardVariants = cva("", {
  variants: {
    color: {
      red: COLORS.red,
      green: COLORS.green,
    },
  },
  defaultVariants: {
    color: "red",
  },
});

const shadowVariants = cva("", {
  variants: {
    color: {
      red: COLORS.darkRed,
      green: "#1A8B56",
    },
  },
  defaultVariants: {
    color: "red",
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  text: string;
  color?: "red" | "green";
}

export default function Card({ text, color = "red" }: CardProps) {
  const topBoxRotation = useMemo(() => Math.random() * 360, []);
  const bottomBoxRotation = useMemo(() => Math.random() * 360, []);

  return (
    <View
      style={[styles.cardContainer, { shadowColor: shadowVariants({ color }) }]}
    >
      <View style={[styles.card, { backgroundColor: cardVariants({ color }) }]}>
        <View
          className="w-32 h-32 bg-white/20 rounded-xl absolute"
          style={[
            styles.topBox,
            { transform: [{ rotate: `${topBoxRotation}deg` }] },
          ]}
        />

        <View
          className="w-32 h-32 bg-white/20 rounded-xl absolute"
          style={[
            styles.bottomBox,
            { transform: [{ rotate: `${bottomBoxRotation}deg` }] },
          ]}
        />

        <View style={styles.whiteOutline} />

        <LinearGradient
          colors={[
            "rgba(255,255,255,0.25)",
            "rgba(255,255,255,0.08)",
            "rgba(255,255,255,0)",
          ]}
          style={styles.topShine}
          locations={[0, 0.6, 1]}
        />

        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.08)",
            "rgba(255,255,255,0.25)",
          ]}
          style={styles.bottomShine}
          locations={[0, 0.4, 1]}
        />

        <LinearGradient
          colors={[
            "rgba(255,255,255,0.25)",
            "rgba(255,255,255,0.08)",
            "rgba(255,255,255,0)",
          ]}
          style={styles.leftShine}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.6, 1]}
        />

        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.08)",
            "rgba(255,255,255,0.25)",
          ]}
          style={styles.rightShine}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.4, 1]}
        />

        <LinearGradient
          colors={["rgba(255,255,255,0.25)", "transparent"]}
          style={[
            styles.innerShadow,
            {
              top: -4.56,
              left: -4.56,
              right: 4.56,
              bottom: 4.56,
            },
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.25)"]}
          style={[
            styles.innerShadow,
            {
              top: 4.56,
              left: 4.56,
              right: -4.56,
              bottom: -4.56,
            },
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        <Text style={styles.cardText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 4,
    shadowOffset: {
      width: -2.68,
      height: 2.68,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.28,
    elevation: 3,
  },
  card: {
    height: 255,
    width: 172.16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  topBox: {
    top: -64,
    left: -64,
  },
  bottomBox: {
    bottom: -64,
    right: -64,
  },
  whiteOutline: {
    position: "absolute",
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
  },
  topShine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bottomShine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  leftShine: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 12,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  rightShine: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 12,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  innerShadow: {
    position: "absolute",
    borderRadius: 16,
  },
  cardText: {
    color: "white",
    fontSize: 40,
    fontFamily: typography.h1.fontFamily,
    zIndex: 1,
  },
});
