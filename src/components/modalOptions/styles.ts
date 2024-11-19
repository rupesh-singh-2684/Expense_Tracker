import { StyleSheet } from "react-native"
// import colors from "../../theme/color"

const styles = StyleSheet.create ({
    container:{
       justifyContent:'space-between',
    //    marginHorizontal:15,
       marginVertical:10,
    //    backgroundColor:'green',
    },
    bgColor: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      marginSide:{
        marginHorizontal:20,
      },
    container1:{
        flexDirection:'row',
        margin:15
    },
    imageStyleView:{
        justifyContent:'center',
        alignItems:'center',
    },
    imageSize:{
        height:27,
        width:27,
    },
    iconImageSize:{
        height:40,
        width:40,
        // backgroundColor:'red',
    },
    textArrange:{
        justifyContent:'center',
    },
    name:{
        marginEnd:10,
        marginStart:25,
        fontSize:18,
        fontWeight:'500',
        color:'black',
        // textAlignVertical:'center',
        // textAlign:'center',
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'grey',
    },
    comments:{
        marginEnd:10,
        // marginStart:25
        fontSize:14,
        fontWeight:'400',
        color:'black',
    }
})

export default styles
