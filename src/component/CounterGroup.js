import React, { Component } from 'react';
import Count from './Count'

export default class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counterNum:5,
            countTotal:0
        };
    }

    countSum=(e)=>{
        if(e===1){
            this.setState({
                countTotal:this.state.countTotal+1
            })
        }
        if(e===2){
            this.setState({
                countTotal:this.state.countTotal-1
            })
        }
    }
    render(){
        let counters=[];
        for (let i=0; i< this.state.counterNum; i++){
            counters.push(<Count countSum={(e)=>this.countSum(e)}/>)
        }
        return(
            <div>
                {counters}
                <p>总计：{this.state.countTotal}</p>
            </div>
        )
    }
}