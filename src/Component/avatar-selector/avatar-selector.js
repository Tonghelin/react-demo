import React,{ Component } from 'react';
import {
  Grid,
  List
} from 'antd-mobile';
import PropTypes from 'prop-types';

class AvatarSelector extends Component {
  static PropTypes = {
    selectAvatar : PropTypes.func,  // 没传不会报错
    // selectAvatar : PropTypes.func.isRequired   //isRequired 必传，没传会报错
  }


  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    const avatarList = 'man_default,user_default,user_img1,user_img2,user_img3,user_img4,user_img5'
                        .split(',')
      .map((val)=>({
        icon: require(`../imgs/${val}.png`),
        text: val
      }))
    const gridHeader = this.state.text?(<div>
                                            <span>已选择头像 </span>
                                            <img src={this.state.icon} style={{width:20}} alt=""/>
                                          </div>):'请选择头像'
    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid
            data={avatarList}
            onClick={elm=>{
              this.setState(elm)
              this.props.selectAvatar(elm.text)
            }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelector;