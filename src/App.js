import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    margin: "1cm",
  },
  section: {
    marginTop: "5mm",
  },
});

console.log(__dirname);

Font.register({
  family: "Chakra",
  src:
    "https://cdn-procurement.swiperxapp.com/fonts/Sarabun/Sarabun-Regular.ttf",
});

// Create Document Component
const App = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <PDFViewer width={width} height={height}>
      <Document title="Trial">
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={{ fontFamily: "Chakra" }}>
              กรุงเทพมหานคร อมรรัตนโกสินทร์ มหินทรายุธยา มหาดิลกภพ
              นพรัตนราชธานีบูรีรมย์ อุดมราชนิเวศน์มหาสถาน อมรพิมานอวตารสถิต
              สักกะทัตติยวิษณุกรรมประสิทธิ์
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default App;
