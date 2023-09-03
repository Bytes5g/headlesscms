import {useNavigation} from '@react-navigation/native';
import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type DrawerStack = {
  [key: string]: {
    pageUrl: string;
    title: string;
  };
};

export type StackType = {
  DrawerStack: undefined;
  Product: {id: number};
};

export const useAppNavigation = () =>
  useNavigation<DrawerNavigationProp<DrawerStack & StackType>>();

export type NavigationProps = DrawerScreenProps<DrawerStack>;
export type StackNavigationProps = NativeStackNavigationProp<StackType>;
