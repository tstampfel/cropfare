import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text, Platform, Image } from "react-native";
import Card from "../../../ui/Card";
import { color, fontSize } from "../../../ui/designSystem";
import { truncateString } from "../../../utils/commonUtils";
import Star from "../../../assets/svgs/star.svg";
import Location from "../../../assets/svgs/location.svg";
import CardDivider from "../../../assets/svgs/card-divider.svg";
import Button from "../../common/Button";
import Plus from "../../../assets/svgs/plus.svg";
import StyledText from "react-native-styled-text";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface ProductCardProps {
  title: string;
  description: string;
  companyName: string;
  price: number;
  currency: string;
  currencySymbol: string;
  location: string;
  delivery: string;
  rating: number;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  title,
  description,
  companyName,
  price,
  currency,
  currencySymbol,
  location,
  rating,
}: ProductCardProps) => {
  return (
    <Card>
      <View style={styles.productDetails}>
        <Image
          style={styles.image}
          source={require("./../../../assets/mocks/grapes.png")}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            {truncateString(description, 70)}
          </Text>
          <View style={styles.company}>
            <Image
              style={styles.companyLogo}
              source={require("./../../../assets/mocks/companyLogo.png")}
            />
            <Text style={styles.companyName}>{companyName}</Text>
            <Text style={styles.rating}>{rating} </Text>
            <View style={styles.starContainer}>
              <Star />
            </View>
          </View>
          <View style={styles.locationContainer}>
            <Location />
            <Text style={styles.locationName}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider}>
        <CardDivider width={"100%"} />
      </View>
      <View style={styles.bottomContent}>
        <View style={styles.priceContainer}>
          <View style={styles.priceBubble}>
            <StyledText
              style={styles.priceText}
            >{`<b>$${price}</b> / kg `}</StyledText>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={"Go to store"}
            onPress={() => {
              console.log("Go to store");
            }}
            icon={<FontAwesome name="cart-plus" size={20} color="white" />}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  priceText: {
    fontSize: fontSize.m,
  },
  priceBubble: {
    padding: "5%",
    backgroundColor: "#F3F9EB",
    borderRadius: 20,
    flexDirection: "row",
    alignContent: "flex-end",
  },
  bottomContent: {
    flexDirection: "row",
    marginBottom: "1%",
  },
  priceContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    flex: 1,
    marginRight: "1%",
  },
  divider: {
    paddingLeft: "4%",
    paddingRight: "4%",
    marginBottom: "1%",
    justifyContent: "center",
  },
  locationName: {
    marginLeft: "2%",
  },
  locationContainer: {
    marginLeft: "2%",
    marginTop: "2%",
    flexDirection: "row",
  },
  starContainer: {
    paddingTop: "2%",
    alignContent: "flex-start",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
  },

  rating: {
    paddingTop: "2%",
    textAlignVertical: "center",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginLeft: "10%",
  },
  companyName: {
    color: color.textGreen,
    textAlignVertical: "center",
    marginLeft: "2%",
    paddingTop: "2%",
    fontWeight: "bold",

    fontSize: fontSize.s,
    alignSelf: "flex-start",
  },
  company: {
    paddingTop: "2%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  companyLogo: {},
  description: {
    paddingTop: "0.5%",
    fontSize: fontSize.xs,
    textAlign: "left",
    color: color.textDescriptionGray,
  },
  title: {
    fontSize: fontSize.l - 4,
    fontWeight: "500",
  },

  productDetails: {
    flexDirection: "row",
  },
  details: {
    paddingTop: "2%",
    paddingLeft: "3%",
    flexDirection: "column",
    flex: 1,
  },
  image: {
    margin: "2%",
  },
});

export default ProductCard;
