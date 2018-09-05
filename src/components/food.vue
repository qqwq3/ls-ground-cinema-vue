<template>
	<ul>
		<li v-for="data0 in datalist">
	
	<div id="box">
		<div class="left"><img :src="data0.img"></div>	
		<div class="mid">
			<h2 class="name">{{data0.name}}</h2>
			<p class="name">{{data0.desc}}</p>
			<span v-for="data,index in data0.price" v-show="index==0?true:false">￥ {{data.price/100}}</span> <span class="price1" v-for="data,index in data0.price" v-show="index==1?true:false"><em>会员</em>{{data.price/100}}</span>
		</div>
		<div class="right"><img src="../assets/buy_1.png"/></div>
	</div>
	</li>
	</ul>
</template>

<script type="text/javascript">
	import router from  "../router";
	import axios from "axios";
	export default {

		data(){
			return {
				datalist:[],
				
			}
		},
		mounted(){
			axios.get("order/getgoods?d=null&s=Win32&i=null&r=1&cinemaId=3057872370303105").then(res=>{
				console.log(res.data.d);
				this.datalist=res.data.d		
			})
		}
		
	}
</script>


<style type="text/css" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	
	li{
		list-style: none;
	}
	div{
		
		float: left;
	}
	.mid{
		width:18.5rem;
		margin-left: 1rem;
	}
	.mid p{
		color: darkgrey;
		margin-top: 1rem;
		margin-bottom: 2rem;
	}
	
	.mid em{
		background: orange;
		color: white;
		font-style: normal;		
	}
	.price1{
		border: 1px solid orange;
		color: orange;
	}
	.left img{
		width: 6.2rem;
		height: 8.5rem;
	}
	.right img{
		width: 4rem;
		height:auto;
		margin-top:4rem;
	}
	#box{	
		border-bottom:1px solid gainsboro;
		padding-bottom:1rem ;
	}
</style>