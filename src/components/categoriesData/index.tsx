import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
  SectionList,
  StyleSheet,
} from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const categoriesData = [
  { title: "Recent", data: ["Home Office"] },
  {
    title: "All categories",
    data: [
      "Advertising",
      "Benefits",
      "Car",
      "Equipment",
      "Fees",
      "Home Office",
      "Insurance",
      "Interest",
      "Labor",
      "Maintenance",
      "Materials",
      "Meals and Entertainment",
      "Office Supplies",
      "Other",
      "Professional Services",
    ],
  },
];

const CategoryModal = ({onSelect,onClose}:any) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = categoriesData.map((section) => ({
    title: section.title,
    data: section.data.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(false) 
          onClose()}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => {
              setModalVisible(false) 
              onClose()}}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Categories</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                console.log("Selected Category:", selectedCategory);
                onSelect(selectedCategory)
              }}
            >
              <Text style={styles.doneButton}>Done</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <SectionList
            sections={filteredData}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => setSelectedCategory(item)}
              >
                <Text style={styles.categoryText}>{item}</Text>
                {selectedCategory === item && (
                  <Text style={styles.checkmark}>✔</Text>
                )}
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyMessage}>No categories found</Text>
            }
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};


export default CategoryModal;