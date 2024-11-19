import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, Alert, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icons, Images } from '../../assets'
import styles from './styles'
import RBSheet from 'react-native-raw-bottom-sheet'
import { MoreOptionScreen } from '../../components/modalOptions'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExpense } from '../../redux/tracker/action'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const HomeScreen = () => {

  const navigation = useNavigation();
  const refRBSheet = useRef<any>();

  const handleMoreOption = () => {
    refRBSheet.current.open();
  };

  const handleCreate = () => {
    navigation.navigate('NewExpenseScreen')
  }
  const handleCreateIncome = () => {
    navigation.navigate('IncomeScreen')
  }

  const dispatch = useDispatch();

  const tracker1 = useSelector((state: any) => state.tracker.expenses);
  console.log(tracker1, 'dsasdasda');

  const handleDelete = (item: any) => {
    dispatch(deleteExpense(item))
    Alert.alert("Success", "Expense Deleted successfully!");
  };


  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={{ alignItems: 'flex-end' }}>
          <Image source={Icons.remove} style={styles.cameraImg} />
        </TouchableOpacity>
        <Text style={styles.data}>Merchant: {item.merchant}</Text>
        <Text style={styles.data}>Category: ${item.category}</Text>
        <Text style={styles.data}>Description: {item.description}</Text>
        <Text style={styles.data}>Total: ${item.total}</Text>
        <Text style={styles.data}>Date: {item.date}</Text>
      </View>
    )
  };

  const totalExpense = tracker1
    .reduce((acc, item) => acc + parseFloat(item.moneySpent), 0)
    .toFixed(2);


  const sortedExpenses = [...tracker1].sort((a, b) => new Date(b.date) - new Date(a.date));

  const [searchCategory, setSearchCategory] = useState('');

  const filteredExpenses = sortedExpenses.filter((expense) =>
    expense.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
  <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Image source={Icons.homeMenu} style={styles.menuImg} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={Icons.homeComments} style={styles.menuImg} />
          <TouchableOpacity onPress={handleMoreOption}>
            <Image source={Icons.homeAdd} style={styles.menuImg} />
          </TouchableOpacity>
        </View>

        <RBSheet
          ref={refRBSheet}
          closeOnPressMask
          useNativeDriver={false}
          draggable={true}
          height={Dimensions.get('window').height / 3.5}
          style={{ overflow: 'hidden' }}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            draggableIcon: {
              backgroundColor: '#E5E5E5',
              width: '12%',
            },
            container: {
              borderRadius: 20,
              marginTop: 'auto',
            },
          }}
          onClose={() => console.log('Bottom Sheet closed')}>

          <MoreOptionScreen
            onPress={handleCreate}
            onPress1={handleCreateIncome} />

        </RBSheet>
      </SafeAreaView>

          <View>
            <ImageBackground source={Images.profileImage} style={styles.bgImg}/>
          </View>
      
        <View style={styles.renderContainer}>
          {tracker1.length === 0 ? (
            <Text style={{ textAlign: 'center', fontWeight: '600' }}>No expenses and Income available</Text>
          ) : (
            <FlatList
              data={tracker1}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          )}
        </View>
        <View style={styles.container1}>
          <View style={styles.totalExpenseContainer}>
            <Text style={styles.totalExpenseText}>Total Expenses: ${totalExpense}</Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by category..."
              value={searchCategory}
              onChangeText={(text) => setSearchCategory(text)}
            />
          </View>
          {filteredExpenses.map((item) => (
            <View key={item.id} style={styles.expenseItem}>
              <Text style={styles.expenseCategory}>Category: {item.category}</Text>
              <Text style={styles.expenseText}>Total Money Spent: ${item.total}</Text>
              <Text style={styles.expenseText}>Remarks: {item.description}</Text>
              <Text style={styles.expenseText}>Date: {new Date(item.date).toLocaleDateString()}</Text>
            </View>
          ))}
        </View>
      </>
      )
}

      export default HomeScreen


