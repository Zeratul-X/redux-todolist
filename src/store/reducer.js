/*
 * @Author: Zeratul
 * @Date: 2020-08-14 15:06:46
 * @LastEditTime: 2020-08-14 19:08:10
 * @FilePath: \ReduxDemo\demo01\src\store\reducer.js
 */
import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes.js';
// 4. 默认定义一个对象
const defaultState = {
  inputValue: "Write Something",
  list: [],
};

//5.以匿名函数的形式暴露，传两个参数，一个状态一个行为
export default (state = defaultState, action) => {
    // console.log(state,action);//state是原来的值，action是input中输入之后改变的值
    // 18.判断是不是changeInput,
    // Reducer中只能接收state,不能改变state,因此要做深度拷贝
    if(action.type===CHANGE_INPUT){
        // 19.深拷贝
        let newState=JSON.parse(JSON.stringify(state));
        // 20.赋值
        newState.inputValue=action.value;
        // 21返回仓库
        return newState;
    }
    // 28.接收handleAddClick传过来的action
    if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        // 29.往list中push传过来的值
        newState.list.unshift(newState.inputValue);
        // 30.文本框置空
        newState.inputValue=''
        return newState;
    }

    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        // 33.删除当前这条数据
        newState.list.splice(action.index,1);
        return newState;
    }
  
    return state;
};
