import { Image, StyleSheet } from "react-native";

//global components
function Images() {
  return (
    <Image style={styles.stretch} source={require("../../assets/avatar.jpg")} />
  );
}
const styles = StyleSheet.create({
  stretch: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
    borderRadius: 10,
  },
});
export default Images;
