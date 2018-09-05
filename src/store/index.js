import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	
	state:{
		title:"asd",
		shujuname:[],
		shuju:[],
		seat:[]
	},
	
	mutations:{
		//只能同步
		changeshujuname:function(state,payload){
			
			//改变状态   	 	
			state.shujuname=payload;
		},

		changeshuju:function(state,payload){
			console.log(payload);
			state.shuju=payload;
		},
		
		seat:function(state,payload){
			state.seat=payload
		}
	}
})

export default store;