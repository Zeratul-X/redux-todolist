/*
 * @Author: Zeratul
 * @Date: 2020-08-14 19:12:09
 * @LastEditTime: 2020-08-14 19:19:32
 * @FilePath: \ReduxDemo\demo01\src\store\actionCreators.js
 */
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'
export const changeInputAction=(value) => ({
    type:CHANGE_INPUT,
    value
})

export const addItemAction=() => ({
    type:ADD_ITEM
})
export const deleteItemAction=(index) => ({
    type:DELETE_ITEM,
    index
})
