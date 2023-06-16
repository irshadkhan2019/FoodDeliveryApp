import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import { MainLayout } from "../screens";

import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants/";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView scrollEnabled contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        {/* close */}
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: COLORS.white }}
            ></Image>
          </TouchableOpacity>
        </View>

        {/* profile */}
        {/* drawer items */}
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Drawer.Navigator
        initialRouteName="MainLayout"
        screenOptions={{
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: false,
        }}
        drawerContent={(props) => (
          <CustomDrawerContent navigation={props.navigation} />
        )}
      >
        <Drawer.Screen name="MainLayout" component={MainLayout} />
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
