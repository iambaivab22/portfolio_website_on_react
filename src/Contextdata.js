import React,{createContext,useReducer} from 'react';

export const Themecontext=createContext();

const initialstates={darkMode:false};

const themeReducer=(state,action)=>{
	switch(action.type){
		case "Toggle":
		return {darkMode:!state.darkMode};
		default:
		return state;
	}
};

export const Themeprovider=(props)=>{
	const [state,dispatch]=useReducer(themeReducer,initialstates)
	return (
		<Themecontext.Provider value={{state,dispatch}}>
		{props.children}

		</Themecontext.Provider>


		);
};

