import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';



export const Users=({users})=>{
 
    // const [finalusers, setFinalUsers] = useState([]);
     
    return <div>
        {users && users.length>0 &&users.map((user)=>{
            return <div key={user.id}>{user.name}</div>
        })}
    </div>
}