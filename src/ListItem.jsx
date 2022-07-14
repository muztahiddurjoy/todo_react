import React from 'react';
import './list.css';
const ListItem = (props)=>{
return(
        <li className="text-primary"><i className="fas fa-trash-alt text-danger" onClick={()=>{props.delete(props.id)}}></i> {props.work} </li>
);
}
export default ListItem;