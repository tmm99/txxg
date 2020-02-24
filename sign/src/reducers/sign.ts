
const INITIAL_STATE = {
  address: {},
  list:[],
  tabList:['未开始',"已打卡","已放弃","全部"],
  curIndex:0,
  flag: -1
  //-1表示未提交表单，0则为提交失败，1则为表单提交成功
}

export default function sign(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_ADDRESS':
      return {
        ...state,
        address: action.payload
      }
    case "SUBMIT_SIGN":
      return {
        ...state,
        flag: action.payload
      }
    case "SIGN_LIST":
    return {
      ...state,
      list:action.payload,
    }
    case 'SIGN_INDEX':
    return {
      ...state,
      curIndex:action.payload
    }
    default:
      return state
  }
}
