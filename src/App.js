import React, {useEffect} from 'react';
import {Users} from './components/Users'
import { useDispatch, useSelector } from 'react-redux';

function App() {
 
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users)
  const final_users = useSelector((state)=>state.final_users);
  let url = 'https://api.guildwars2.com/v2/account/bank?access_token=5BEB65D2-A037-804C-BFD6-E8318E466C4141F5FFC8-2127-4B29-957C-62A4E09727AF';
  
  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result)
      dispatch({type:"GET_ALL_USERS", value:result});
 
       
    });
  },[]);
  
  useEffect(()=>{
   if(users.length>0){
      users.forEach((user,i)=>{
        if(user && user.id){
  fetch(`https://api.guildwars2.com/v2/items/${user.id}`)
  .then((res)=>res.json())
  .then((data)=>{ 
      
       dispatch({
        type:"GET_BY_ID",
        value: {
          id: Math.random()*100,
          name:data.name
        },

      })
  });

  //           .then((res)=>res.json())
//           .then((result)=>{
//             // console.log(result)
//             console.log(result)
//             // debugger
//               //   dispatch({
//               //     type:"GET_BY_ID",
//               //     value:{
//               //         id: users[i].id,
//               //         name:result.count
//               //     }
//               // })
//            });
      }
        
      });

  }
  },[users]);

    return (
    <div className="App">
      <Users users={final_users}/>
      </div>
  );
}

export default App;
