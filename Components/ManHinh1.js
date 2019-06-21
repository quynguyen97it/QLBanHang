import React,{Component} from "react";
import {
  View, Text, Button
} from "react-native";

class ManHinh1 extends Component{
  render(){
    return(
      <View>
          <Text>{this.props.hoten}</Text>
      </View>
    );
  }
}

export default ManHinh1;
