import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './List.css'

const List = ({elements} : {elements: any[]}) => {
    console.log(elements)

    return(
        <ul className="people-list">
            {elements.map(el => {
                const id = el.url.split("/").filter(String).slice(-1)[0]
                return (
                    
                        <li className="sw-el">
                            <NavLink to={`details/${id}`} className="sw-el-link" key={id}>
                                {el.name || el.title}
                            </NavLink>
                        </li>
                    
                )
            })}
            
        </ul>
    )
}


export default List;

