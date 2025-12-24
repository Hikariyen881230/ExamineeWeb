import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice=createSlice({
    name:"layoutTodos",
    initialState:{
       bannerText:'',
    },
    reducers:{
        setBannerText(state,action){
           state.bannerText=action.payload; 
        }
    }
});

export const {setBannerText} = layoutSlice.actions;
export default layoutSlice.reducer;