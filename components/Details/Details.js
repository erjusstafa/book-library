import { Image, StyleSheet, Text, View } from "react-native";

function Details({ route }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;

  return (
    <>
      <Image
        source={{
          uri: `https://covers.openlibrary.org/b/id/${itemId}-M.jpg`,
        }}
        style={styles.image}
      />
      <Text>{}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    width: 300,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  text: {
    fontSize: 12,
    width: 110,
  },
  title: {
    fontSize: 10,
    color: "orange",
  },
});
export default Details;
