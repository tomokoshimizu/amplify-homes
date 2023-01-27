/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="1000px"
      height="860px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomeCard")}
      {...rest}
    >
      <Image
        width="1000px"
        height="667px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="20px 20px 0px 0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="36.30681610107422px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="827px"
        height="63px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="692px"
        left="30px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.address}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="36.30681610107422px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="950px"
        height="45px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="755px"
        left="30px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Price: $"}${home?.price}${"/night"}`}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </View>
  );
}
