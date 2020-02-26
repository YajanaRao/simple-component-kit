import React, { ReactChildren } from 'react';
import { View } from 'react-native';
import { useTheme } from 'util/ThemeProvider';

export interface CardProps {
   m?: number;
   p?: number;
   elevation?: number;
   children: ReactChildren
}



export const Card = ({m= 4, p= 8, elevation= 8, children}: CardProps) => {
   const theme = useTheme();
   const { colors, dark, roundness } = theme;
   let backgroundColor = colors.surface;
   
    return (
      <View style={{ margin: m, padding: p, backgroundColor, elevation, borderRadius: roundness }}>
         {children}
      </View>
    );
}
