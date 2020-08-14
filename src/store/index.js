/*
 * @Author: Zeratul
 * @Date: 2020-08-14 15:03:16
 * @LastEditTime: 2020-08-14 15:26:29
 * @FilePath: \ReduxDemo\demo01\src\store\index.js
 */
// 1.引入redux ---->图书馆
import { createStore} from 'redux';
// 6引入reducer ---->图书管理员
import reducer from './reducer';

//2.创建一个store ----> 7.注入reducer
const store=createStore(
    reducer,
    // chrome的redux调试参数
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
//3.暴露store
export default store