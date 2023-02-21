import { ReactNode } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface AndroidSafeAreaViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const AndroidSafeAreaView = ({
  children,
  style,
}: AndroidSafeAreaViewProps) => {
  return (
    <SafeAreaView style={[androidSafeAreaViewStyles, style]}>
      {children}
    </SafeAreaView>
  );
};

const androidSafeAreaViewStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
}).AndroidSafeArea;
