import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Item, ItemMenu} from '../constants/interfaces';

interface Props {
  item: ItemMenu;
  getItem: Function;
}
const Section = ({item, getItem}: Props) => {
  let list = item.items;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <ScrollView horizontal style={styles.box}>
        {list.map((listItem: Item) => {
          return (
            <TouchableOpacity
              onPress={() => getItem(listItem)}
              style={styles.item}>
              {listItem && listItem.url ? (
                <Image
                  source={{uri: listItem.url}}
                  resizeMode="contain"
                  style={styles.containerImg}
                />
              ) : (
                <ActivityIndicator size="small" />
              )}
              <Text numberOfLines={3}>{listItem.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },
  box: {},
  item: {
    backgroundColor: 'white',
    width: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#D8D8D8',
    padding: 10,
    marginRight: 5,
    alignItems: 'center',
  },
  containerImg: {
    width: 95,
    height: 95,
  },
});
export default Section;
