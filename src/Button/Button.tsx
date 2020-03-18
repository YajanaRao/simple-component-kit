import React from 'react';
import colour from "color";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from 'util/ThemeProvider';

export interface ButtonProps {
    onPress?: () => void;
    disabled?: boolean;
    children: any;
    color?: string;
}

export const Button = ({ onPress, disabled = false, children, color }: ButtonProps) => {
    const theme = useTheme();
    const { colors, roundness, dark } = theme;
    let backgroundColor: string = color ? color : colors.primary;
    const isDark = colour(backgroundColor).isDark();
    let textColor: string = isDark ? "white" : "black";
    if (disabled) {
        backgroundColor = colour(backgroundColor)
            .lighten(0.6)
            .hex()
        textColor = colour(backgroundColor)
            .lighten(0.5)
            .hex()
    }

    let borderRadius = roundness;
    const textStyle = {
        color: textColor
    }
    return (
        <View style={{ alignSelf: "stretch" }}>
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                style={[{ backgroundColor, borderRadius }, styles.button]}
            >
                <Text style={[textStyle, styles.label]}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        minWidth: 64,
        borderStyle: "solid",
    },
    label: {
        textAlign: 'center',
        letterSpacing: 1,
        marginVertical: 9,
        marginHorizontal: 16,
    },
});
