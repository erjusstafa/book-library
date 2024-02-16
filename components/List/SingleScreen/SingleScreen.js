import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

function SingleScreen({ item }) {
  //state
  const [readBooks, setReadBooks] = useState([]);
  const [status, setStatus] = useState(false);

  const handleItemClick = (item) => {
    // Check if the button is already clicked
    const selectedIndex = readBooks.indexOf(item);
    if (selectedIndex === -1) {
      // If not clicked, add it to the  items array
      setReadBooks([...readBooks, item]);
      setStatus(true);
    } else {
      // If already clicked, remove it from the array
      const newSelectedItems = [...readBooks];
      newSelectedItems.splice(selectedIndex, 1);
      setReadBooks(newSelectedItems);
      setStatus(false);
    }
  };

  const textCss = {
    fontSize: 10,
    color: status ? "green" : "orange",
  };
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderColor: status ? "green" : "orange",
        borderWidth: 1,
        padding: 20,
        margin: 5,
        borderRadius: 5,
      }}
    >
      <Image
        source={{
          uri: `https://covers.openlibrary.org/b/id/${item?.work?.cover_id}-M.jpg`,
        }}
        style={styles.image}
      />
      <View>
        <View>
          <Text style={textCss}>Title</Text>
          <Text style={styles.text}>{item?.work?.title}</Text>
        </View>
        <View>
          <Text style={textCss}>Author</Text>
          <Text style={styles.text}>{item?.work?.author_names[0]}</Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={textCss}>Published Year</Text>
          <Text style={styles.text}>{item?.work?.first_publish_year}</Text>
        </View>
        <View>
          <Text style={textCss}> Book Status</Text>
          <View style={styles.buttonContainer}></View>
          <Text
            onPress={() => handleItemClick(item)}
            style={{
              color: status ? "green" : "orange",
              backgroundColor: "white",
              borderColor: status ? "green" : "orange",
              borderWidth: 1,
              textAlign: "center",
              marginTop: 15,
              borderRadius: 5,
              padding: 3,
              fontSize: 13,
            }}
          >
            {status ? "Read" : "Unread"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  text: {
    fontSize: 12,
    width: 110,
  },
});

export default SingleScreen;
