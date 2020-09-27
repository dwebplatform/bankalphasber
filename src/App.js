import React, {useEffect} from 'react';
import {Users} from './components/Users'
import { useDispatch, useSelector } from 'react-redux';

function App() {
 
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users)
  const final_users = useSelector((state)=>state.final_users);
  let url = 'http://api.gazprom-intranet.alpha.trinitydigital.ru/api/news';
  
  useEffect(()=>{
    fetch('http://api.gazprom-intranet.alpha.trinitydigital.ru/api/news')
    .then((res)=>res.json())
    .then((result)=>{
      if(result.data && result.data.length>0){
        dispatch({type:"GET_ALL_USERS", value:result.data});
      } else {
        //  ОШИБКА И ТД
      }
    });
  },[]);
  
  useEffect(()=>{
   if(users.length>0){
      users.forEach((user)=>{
          fetch(`${url}?id=${user.id}`)
          .then((res)=>res.json())
          .then((result)=>{
              let {data} = result;
               dispatch({
                  type:"GET_BY_ID",
                  value:{
                      id: Math.random()*100,
                      name:data[0].category.name
                  }
              })
              //  finalUsersRef.current = finalUsersRef.current.concat([{
              //     name: data[0].category.name
              // }]); 
          });
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
