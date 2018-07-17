import React from 'react'
import Header from './Header'
import PropTypes from 'prop-types'

//context上下文，在当前组件下获取其他子组件的上下文
//1.在父级上要定义上下文，先要表面上下文的类型
//2.在父级中获取儿子的上下文

export default class APP extends React.Component{

    static childContextTypes = {
        col : PropTypes.string
    }
    getChildContext(){
        return {col:this.state.color}
    }

    constructor(){
        super()
        this.state = {
            color:'red'
        }
    }

    render(){
        return(
            <Header />  
        )
    }
}