import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface props {
   
    formData: formData[];
  
  }

  interface formData {
    id:number
    firstName:string
    password: number | string;
  }
  
const initialState: props = {
    formData: [{
        id:1,
        firstName:"salman",
        password:"1234",
    }], 
  }

 export const UserSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        addData:(state, action:PayloadAction<any>)=>{
            console.log(action ,"kkkkkkk")
            state.formData.push(action.payload)
            console.log(state.formData , "data submitting")

        }
    }
})


export const { addData} = UserSlice.actions;
export default UserSlice.reducer;