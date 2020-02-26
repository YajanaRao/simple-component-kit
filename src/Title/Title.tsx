import { ReactChildren } from "react";
import * as React from 'react';
import { useTheme } from '../util/ThemeProvider';


import { Text } from 'react-native';

interface TitleProps {
  children: ReactChildren;
  size: number;
}

export const Title = ({ children, size }: TitleProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const fontSize = size ? size : 20;
  return <Text style={{ color: colors.text, fontSize  }}>{children}</Text>
};