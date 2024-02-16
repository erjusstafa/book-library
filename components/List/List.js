import * as React from "react";
import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import SingleScreen from "./SingleScreen/SingleScreen";

export default function List({ navigation }) {
  //state
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);

  //URL
  const api = `https://openlibrary.org/people/mekBot/books/already-read.json`;

  //fetch API
  const fetchApi = () => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        setFilteredDataSource(res);
        setData(res.reading_log_entries);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchApi();
  }, []);

  //filtering by searching
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = data.filter(function (item) {
        const itemData = item?.work?.title
          ? item?.work?.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      setFilteredDataSource(data);
      setSearch(text);
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      {filteredDataSource.length === 0 ? (
        <Text style={{ textAlign: "center" }}>No results...</Text>
      ) : (
        <FlatList
          data={search.length <= 0 ? data : filteredDataSource}
          renderItem={({ item }) => {
            return <SingleScreen item={item} navigation={navigation} />;
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "orange",
    backgroundColor: "#FFFFFF",
            borderRadius: 5,

  },
});
