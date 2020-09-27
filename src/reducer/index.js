
const initialState ={
    users:[],
    final_users:[]
}
export default function reducer(state=initialState, action){
    switch(action.type){
        
        case "GET_BY_ID":
            
        let {final_users} = state;
       
        final_users = final_users.concat({
            id: action.value.id,
            name: action.value.name
        })
        return {
                ...state,
                final_users:final_users
            };

        case "GET_ALL_USERS":
        console.log(action.value)
        return {
                ...state,
            users: action.value    
        }

        default: 
        return state;
    }
}