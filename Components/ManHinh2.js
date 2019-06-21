import React, {Component} from "react";
import {
  View, Text, Button
} from "react-native"

class ManHinh2 extends Component{
  render(){
    return(
      <View>
          <Text>Man hinh 2</Text>
          <Button
          onPress={()=>{

          }}
            title="Quay lai man hinh 1"
          />
      </View>
    );
  }
}

export default ManHinh2;
