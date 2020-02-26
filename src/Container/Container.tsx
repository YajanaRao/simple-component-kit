import React, { ReactChildren } from 'react';
import {  View } from 'react-native';
import { useTheme } from 'util/ThemeProvider';

export interface ContainerProps{
    children: ReactChildren;
    m: number;
    p: number;
}

export const Container = ({children, m=16, p=16}: ContainerProps) => {
    const theme = useTheme();
    const { colors } = theme;
    return (
      <View style={{ backgroundColor: colors.background, margin: m, padding: p }}>
         {children}
      </View>
    );
}
