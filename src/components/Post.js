import React from 'react';
import {firestore} from '../index'
import './Post.css';
export default (props) => {
    const {post} = props
    const {id, title,image,stock,count} = post

    const plusCount = () => {
        if(count<stock){
            let newCount = count+1
            firestore.collection("posts").doc(id+'').set({id,title,image,stock,count:newCount})
        }
        
    }
    const minusCount = () => {
        if(count>0){
            let newCount = count-1
            firestore.collection("posts").doc(id+'').set({id,title,image,stock,count:newCount})
        }
    }
    return(
    <li><div>{id}</div>
        <div >{title}</div>
        <img src={image} height="100"/>
        <div className="container">
        <button onClick={minusCount}>-</button>
        {count}
        <button onClick={plusCount}>+</button>
        {stock}
        </div>
    </li>
    )
}