import React, { useRef, forwardRef, useState } from 'react';
import { Image, StyleSheet, Text, Animated, View } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { useCombinedRefs } from '../../utils/use-combined-refs';
import { ScrollView } from 'react-native-gesture-handler';

export const AnimatedList = forwardRef((_, ref) => {
  const modalizeRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);
  const animated = useRef(new Animated.Value(0)).current;

  const opacity = animated.interpolate({ inputRange: [0, 0.9, 1], outputRange: [0, 0.5, 1] });

  return (
    <Modalize
      ref={combinedRef}
      panGestureAnimatedValue={animated}
      withHandle={true}
      handlePosition="inside"
      overlayStyle={{ opacity }}
      HeaderComponent={() => {
        return (
          <Animated.View style={[s.modal__header, { opacity }]}>
            <Text>TEST</Text>
          </Animated.View>
        );
      }}
    >
      <ScrollView>
        <View style={s.list__header} />
        <View style={s.list__header} />
        <View style={s.list__header} />
        <View style={s.list__header} />
        <View style={s.list__header} />
        <View style={s.list__header} />
        <View style={s.list__header} />
        <View style={s.list__header} />
        <View style={s.list__header} />
        <View style={s.list__header} />
      </ScrollView>
    </Modalize>
  );
});

const s = StyleSheet.create({
  modal__header: {
    height: 150,
    backgroundColor: 'red',
  },
  list__header: {
    marginTop: 20,
    height: 150,
    backgroundColor: 'yellow',
  },
});
