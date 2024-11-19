import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CategoryModal from "../../components/categoriesData";
import { useDispatch } from "react-redux";
import { ADD_EXPENSE, addExpense } from "../../redux/tracker/action";
import IncomeCategoryModal from "../../components/incomeCategory";

const IncomeScreen = () => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [merchant, setMerchant] = useState("");
  const [total, setTotal] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [showIncomeCategoryModal, setShowIncomeCategoryModal] = useState(false);

  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate:any) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const handleBack = () => {
    navigation.goBack("HomeScreen");
  };

  const dispatch = useDispatch();
  const handleSave = () => {
    const expenseData = {
      date: date.toISOString(),
      total,
      description,
      category,
    };

    if (!total || !category) {
      Alert.alert("Missing Information", "Please fill all required fields.");
      return;
    }
     
    dispatch(addExpense(expenseData))
    console.log("Expense Data Saved:", expenseData);
    navigation.goBack();
    Alert.alert("Success", "Income saved successfully!");
  };

  const handleCategorySelect = (selectedCategory:any) => {
    setCategory(selectedCategory);
    setShowIncomeCategoryModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Income</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.phoneNumber}>+917084959556</Text>
      </View>
      {/* <View style={styles.inputGroup}>
        <Text style={styles.label}>Merchant</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter merchant name"
          value={merchant}
          onChangeText={setMerchant}
        />
      </View> */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity style={styles.textInput} onPress={showDatePicker}>
          <Text>{date.toDateString()}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={styles.currencyTotal}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={styles.label}>Currency</Text>
          <Text style={styles.textInput}>INR</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Total</Text>
          <TextInput
            style={styles.textInput}
            placeholder="₹0.00"
            keyboardType="numeric"
            value={total}
            onChangeText={setTotal}
          />
        </View>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter description"
          multiline
          numberOfLines={3}
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <TouchableOpacity
        style={styles.inputGroup}
        onPress={() => setShowIncomeCategoryModal(true)}
      >
        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Category"
          value={category}
          editable={false}
        />
      </TouchableOpacity>

      {showIncomeCategoryModal && (
        <IncomeCategoryModal
          onSelect={handleCategorySelect}
          onClose={() => setShowIncomeCategoryModal(false)}
        />
      )}
    </SafeAreaView>
  );
};

export default IncomeScreen;