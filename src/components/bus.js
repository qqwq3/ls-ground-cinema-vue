const  observer = {
	
	list:[],
	
	subscribe:function(callback){
		this.list.push(callback);
		console.log("subscribe",this.list)
	},
	
	publish:function(message){
		console.log("publish",this.list)	
		for(var i in this.list){
			this.list[i](message)
		}
	}
}

export default observer
