import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

interface Props {
  name: string;
  focused: boolean;
}

export default function TabBarIcon({ name, focused }: Props) {
  return (
    <Ionicons
      name={name}
      size={30}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
