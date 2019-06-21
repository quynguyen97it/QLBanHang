import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      data:[],
      refresh:false,
      trang: 1
    }
  }
  render(){
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
        refreshing= {this.state.refresh}
        onRefresh={()=>{this.refresh()}}
          data={this.state.data}
          renderItem={({item}) =>
          <View>
          <View style={{flexDirection: "row", marginLeft: 10, backgroundColor: "grey",alignItems:"center", marginRight: 10}}>
              <Image
                source={{uri: item.Hinh}}
                style={{ width: 80, height: 80, borderRadius: 50, margin: 10}}
               />
              <Text style={{ marginLeft: 20, margin: 10, fontWeight:"bold"}}>{item.Name}</Text>
          </View>
          <View style={{height: 3, backgroundColor:"white"}}></View>
          </View>
        }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }

  refresh()
  {
    this.setState({refresh:true, trang:this.state.trang+1});
    return fetch('http://192.168.1.81/webtest/XuLy.php?trang='+this.state.trang)
      .then((r) => r.json())
      .then((rJ) => {
        this.setState({
          data:rJ,
          refresh:false
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  componentDidMount(){
    return fetch('http://192.168.1.81/webtest/XuLy.php?trang='+this.state.trang)
      .then((r) => r.json())
      .then((rJ) => {
        this.setState({
          data:rJ
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
}
