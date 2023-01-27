/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeCardOverridesProps = {
    HomeCard?: PrimitiveOverrideProps<ViewProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomeCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: HomeCardOverridesProps | undefined | null;
}>;
export default function HomeCard(props: HomeCardProps): React.ReactElement;
