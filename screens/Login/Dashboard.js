import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../../navigation/TabNavigation";

export default function DashboardScreen() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}