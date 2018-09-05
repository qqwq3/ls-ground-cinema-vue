<template>

	<div id="comfirm">
		<div class="toptitle">
			<h3>{{filename.name}}</h3>
			<div class="others">
				<span>{{filedata.startTime}}</span>
				<span>{{filedata.language}}/{{filedata.dimensional}}</span>
				<span class="others-green">更换场次</span>
			</div>
		</div>
		<ul class="seatkey">
			<li v-for="data in bordershow">{{data}}</li>
		</ul>
		<div class="screnfocus">
			银幕方向
			<img src="http://h5.dadicinema.com/wapportal/assets/images/screen.png"/>
		</div>
		<div class="seatclass">
			<span class="seatclass-kexuan"></span>
			<span class="seatclass-text">可选</span>
			<span class="seatclass-yixuan"></span>
			<span class="seatclass-text">已选</span>
			<span class="seatclass-yishou"></span>
			<span class="seatclass-text">已售</span>
		</div>
		<div class="seat">
			<ul class="seatcolumn" style="float: left;">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
				<li>7</li>
				<li>8</li>
				<li>9</li>
				<li>10</li>				
			</ul>
			<ul class="seatrow" style="float: left;box-sizing: border-box;padding-left: 35px;">
				<li class="seatrowc" v-for="row in row" style="margin-top:7px;height: 20px;">
					<ul class="seatnum">
						<li v-for="data,index in list"  v-on:click='seatclick(data,row,$event)' >
						</li>
					</ul>
				</li>
			</ul>
		</div>
		
			<a href="javascript:;" @click="payclick()">
				<div class="xh" id="xh">
					选好了
				</div>
			</a>
	</div>
	
</template>

<script type="text/javascript">
import router from "../router";
	export default{
		data(){
			return{
				list:[1,2,3,4,5,6,7,8,9,10,11,12],
				row:[1,2,3,4,5,6,7,8,9,10],
				bordershow:[],
				message:''
			}
		},
		methods:{
			 seatclick(val,val1,event){
			 	var el = event.currentTarget;
			 	if(el.className==''&& this.bordershow.length<6){
			 		el.className="asd"
			 		this.bordershow.push(val.toString()+'排'+val1.toString())
			 	}else{
			 		el.className=''
			 		var a=this.bordershow.indexOf(val.toString()+'排'+val1.toString())
			 		if(a!=-1){this.bordershow.splice(a,1)}		 		
			 	}
			 	var oBtn = document.getElementById('xh');
			 	if(this.bordershow.length==0){
			 		oBtn.className='xh'
			 	}else{
			 		oBtn.className='xb'
			 	}
			 },
			 payclick(){
			 	this.$store.commit("seat",this.bordershow)
			 	router.push('/pay')
			 }
		},
		computed:{
			filename(){
				return this.$store.state.shujuname
			},
			filedata(){
				return this.$store.state.shuju
			}
		}
	}
</script>

<style type="text/css" lang="scss" scoped>
	#comfirm{
		width: 100%;
		max-width: 750px;
		margin: 0 auto;
	}
	li{
		list-style: none;
	}
	.toptitle{
		padding: 12px;
		h3{
			font-weight: 600;
			font-size: 16px;
		}
		.others{
			span:nth-child(1){
				margin-right: 40px;
			}
			span:nth-child(2){
				margin-right: 90px;
			}
			.others-green{color: limegreen;}
		}
	}
	.seatkey{
		width: 100%;
		padding: 12px 0;
		height: 19px;
		background:#F1F1F1;
		li{
			width: 42px !important;
			list-style: none;
			float: left;
			width: 16.66666667%;
			margin-left: 18px;
		}
	}
	.screnfocus{
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 40px;
		color: #A61D2F;
		margin-bottom: 40px;
   		 font-size: 16px;
   		 img{
   		 	width: 100%;
   		 }
	}
	.seatclass{
		width: 100%;
		height: 21px;
		font-size: 12px;
		span{
			display: block;
			float: left;
			margin: 0 2px;
		}
		.seatclass-kexuan{
			width: 15px;
			height: 13px;
			margin-left: 27%;
			background: url("http://h5.dadicinema.com/wapportal/assets/images/icon_24.png") -264px -27px;
		}
		.seatclass-yixuan{
			width: 15px;
			height: 13px;
			margin-left: 7%;
			background: url("http://h5.dadicinema.com/wapportal/assets/images/icon_24.png") -264px -74px;
		}
		.seatclass-yishou{
			width: 15px;
			height: 13px;
			margin-left: 7%;
			background: url("http://h5.dadicinema.com/wapportal/assets/images/icon_24.png") -264px -3px;
		}
	}
	.seat{
		.seatcolumn{
			li{
				margin: 5px 0;
				color: #A61D2F;
				height: 21.9375px;
			    line-height: 21.9375px;
			    font-size: 14.625px;
			}
		}
		
		
		.seatrow{
			li{
				list-style: none;
			}
			.seatrowc{
				.seatnum{
					li{
						width: 19.9375px;
						height: 19.9375px;
						margin: 0 1px;
						float: left;
						background:url('http://h5.dadicinema.com/wapportal/assets/images/cinema_seat.png') no-repeat;
						background-size: 100% 100%;
					}
				}
			}
		}
		.asd{
			background:url('http://h5.dadicinema.com/wapportal/assets/images/cinema_seat_on.png') no-repeat !important;
			background-size: 100% 100% !important;
		}
		
		
		
	}
	.xh{
			width: 100%;
			height: 50px;
			background:  #e6e6e6;
			text-align: center;
			line-height: 50px;
			color: darkgrey;
			position: fixed;
			bottom: 0;
			font-size: 24px;
		}
	.xb{
		width: 100%;
		height: 50px;
		background:  #62d399;
		text-align: center;
		line-height: 50px;
		color: white;
		position: fixed;
		bottom: 0;
		font-size: 24px;
	}
	
</style>
http://h5.dadicinema.com/wapportal/assets/images/cinema_seat_on.png