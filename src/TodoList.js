/*
 * @Author: Zeratul
 * @Date: 2020-08-14 14:22:24
 * @LastEditTime: 2020-08-14 19:23:11
 * @FilePath: \ReduxDemo\demo01\src\TodoList.js
 */
import React, { Component } from "react";
// 引入ant-design
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
// 8.引入store
import store from "./store/index";

// 34.优化
import { changeInputAction,addItemAction,deleteItemAction } from "./store/actionCreators";


export default class TodoList extends Component {
  // 9.构造函数中拿到store中的data
  constructor(props) {
    super(props);
    // 10.打印验证取到的值
    console.log(store.getState());
    // 11.给状态赋值
    this.state = store.getState();
    // 14.绑定this指向
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);

    // 22.订阅仓库
    store.subscribe(this.storeChange);
  }

  //15.编写监听input值的变化事件
  changeInputValue(e) {
    // console.log(e.target.value);
    // 16.声明一个action
    /*
    const action = {
      type: CHANGE_INPUT,
      value: e.target.value,
    };
    */

    // 34.优化上面注释的代码👆
    const action = changeInputAction(e.target.value);

    // 17.分发action
    store.dispatch(action);
  }

  // 23.完成函数
  storeChange() {
    this.setState(store.getState());
  }

  // 25.完善handleAddClick
  handleAddClick() {
    // 26.声明一个action
    // const action = {
    //   type: ADD_ITEM,
    // };

    const action=addItemAction();

    // 27.分发这个action
    store.dispatch(action);
  }

  //32.绑定handleDeleteItem事件
  handleDeleteItem(index) {
    // const action = {
    //   type: DELETE_ITEM,
    //   index,
    // };

    const action=deleteItemAction(index);
    
    store.dispatch(action);
  }
  render() {
    return (
      <div>
        {/*12. 给控件绑定state */}
        <div style={{ margin: "20px" }}>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "20px" }}
            //13.添加onChange事件
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
          {/* 24.绑定添加按钮点击事件 */}
          <Button type="primary" onClick={this.handleAddClick}>
            增加
          </Button>
        </div>
        <div style={{ margin: "20px", width: "335px" }}>
          <List
            bordered
            dataSource={this.state.list}
            // 31.添加删除事件
            renderItem={(item, index) => (
              <List.Item onClick={this.handleDeleteItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    );
  }
}
