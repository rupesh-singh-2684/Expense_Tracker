import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    menuImg:{
        height:45,
        width:45
    },
    title:{
        fontWeight:'600',
        fontSize:18,
        left:20
    },
    data:{
        fontWeight:'600',
        fontSize:18,
        // left:20
    },
    cameraImg:{
        height:30,
        width:30
    },
    cameraDiv:{
        // backgroundColor:'red',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:20,
        top:Dimensions.get('window').height/1.5,
        borderRadius:100
    },
    renderContainer:{
        padding:10,
        flex:1
    },
    itemContainer: {
        backgroundColor: '#6E9068',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        // shadowColor: '#000', 
        // shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
      },
      itemImage: {
        width: 50,        
        height: 50,        
        borderRadius: 25,         
        marginRight: 15,    
        borderWidth: 2,          
        borderColor: '#ddd',     
      },
      deleteIcon: {
        width: 24,              
        height: 24,              
        tintColor: 'red',   
        alignSelf: 'center',    
        marginLeft: 10,          
      },
      container1: {
        padding: 16,
      },
      totalExpenseContainer: {
        marginBottom: 16,
      },
      totalExpenseText: {
        fontSize: 18,
        fontWeight: '500',
      },
      searchContainer: {
        marginBottom: 24,
      },
      searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 8,
      },
      expenseItem: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      expenseCategory: {
        fontWeight: '600',
        color: '#333',
      },
      expenseText: {
        color: '#666',
      },
      bgImg:{
        position:'absolute',height:Dimensions.get('window').width,width:Dimensions.get('window').width,alignItems:'center',justifyContent:'center',flex:1,top:100
      }
     
})

export default styles