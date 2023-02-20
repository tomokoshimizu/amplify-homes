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
      width="420px"
      height="480px"
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
        width="420px"
        height="359px"
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
      <View
        padding="0px 0px 0px 0px"
        width="412px"
        height="86px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="368px"
        left="8px"
        {...getOverrideProps(overrides, "Group 1")}
      >
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
          width="400px"
          height="39px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
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
          width="412px"
          height="47px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="39px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.price}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </View>
    </View>
  );
}
