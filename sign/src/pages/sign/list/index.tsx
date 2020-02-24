import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { getSignListAction } from '../../../actions/sign'



type PageStateProps = {
  list: Array<{
    [key: string]: any
  }>
  tabList: Array<{
    [key: string]: any
  }>
  curIndex: number
}
type PageDispatchProps = {
  getSignList: (params) => void
  setCurindex: (params) => void
}
type PageOwnProps = {}

type PageState = {
  status: number,
  page: number,
  pageSize: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
  props: IProps;
}


@connect(state => {
  return {
    list: state.sign.list,
    tabList: state.sign.tabList,
    curIndex: state.sign.curIndex
  }

}, dispatch => {
  return {
    getSignList: (params) => {
      dispatch(getSignListAction(params))
      console.log(params, "列表数剧")
    },
    setCurindex: (params) => {
      dispatch({
        type: 'SIGN_INDEX',
        payload: params
      })
    }
  }

})
class SignList extends Component<{}, PageState> {
  config: Config = {
    navigationBarTitleText: '面试列表'
  }

  state = {
    status: 2,
    page: 1,
    pageSize: 10,

  }
  componentDidShow() {
    let params = { ...this.state };
    if (params.status === 2) {
      delete params.status;
    }
    this.props.getSignList(params);
  }

  componentDidHide() { }
  Curindex(index) {
    this.props.setCurindex(index)
    // console.log(index)
  }

  render() {
    let { tabList } = this.props
    // console.log(this.props,"props")
    console.log(tabList, "liebiao")
    let { list } = this.props
    console.log(this.props.curIndex,"当前下标")
    // console.log(list, "list"
    // let { curIndex } = this.props
    return (
      <View className='wrap'>

        <View className="title_head">
          {
            this.props.tabList.map((ite, ind) => {
              return <Text key={ind} onClick={this.Curindex.bind(this, ind)} className={this.props.curIndex == ind ? 'active' : ''}>{ite}</Text>
            })
          }
        </View>
        <View className='tab_cont'>
          <View className={this.props.curIndex==0?'active':''}>
            {
              list.map((item, index) => {
                return <View className="company" key={index}>
                  <Text>{item.company}</Text>
                  <Text>公司地址{item.address}</Text>
                </View>
              })
            }
          </View>
          <View className={this.props.curIndex==1?'active':''}>
            已打卡
          </View>
          <View className={this.props.curIndex==2?'active':''}>
            已放弃
          </View>
          <View className={this.props.curIndex==3?'active':''}>
            全部
          </View>

        </View>

      </View>
    )
  }
}


export default SignList as ComponentClass;
