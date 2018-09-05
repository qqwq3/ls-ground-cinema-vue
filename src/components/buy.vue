<template>
	<div id="box">
		<transition name="slide-fade">
		<div class="cityContainer" v-show="showcity">
			<div class="choosecity">
				<img src="../assets/back.png" @click="showcity=!showcity"/>
				<h4>选择城市</h4>
			</div>
			<div class="allcity">
				<ul >
					<li v-for="data in list" class="firstname">
						<span>{{data}}</span>
						<ul >							
							<li class="cityname"><div v-for="data1 in citylist"><span v-if="data1.city_info.first==data" @click="choosecity(data1.city_info.name)">{{data1.city_info.name}}</span></div></li>
						</ul>
					</li>
				</ul>
				
			</div>
		</div>
		</transition>
		
		<transition name="slide-fade">
		<div class="movieContainer" v-show="showmovie">
			<div class="choosemovie">
					<img src="../assets/back.png" @click="showmovie=!showmovie"/>
					<h4>选择场次</h4>
			</div>
			<div>
				<h3>{{city}}大地影院</h3>
				<div class="swiper-container">
					<ul class="swiper-wrapper">
						<li class="swiper-slide" v-for="data,index in datalist" @click="shujunamelist(data)"><img :src="data.poster" :class="bodershow == index?'show':'noshow'" @click="borderclick(index)"/></li>
					</ul>	
					
				</div>
				<div v-for="data,index in datalist" v-show="bodershow == index?true:false" class="moviename">
					{{data.name}}
					<span v-for="data1 in data.dimensionalList">{{data1}}</span>
					<div class="date">
						<div v-for="data2 in data.showList" @click="datelist(data2)">{{data2.showDate.substr(3,7)}}</div>	
						<h1><span>会员特惠</span>|<p>开卡立享特惠购票</p></h1>
						
					</div>
					
				</div>
					<ul class="alldateul">
							<li class="alldate" v-for="item in dateshow.pList" @click="shujulist(item)">
								<div class="left">
									<p>{{item.startTime.substr(10,6)}}</p>
									<span>{{item.endTime.substr(10,6)}}散场</span>
								</div>
								<div class="mid">
									<p>{{item.language}} {{item.dimensional}}</p>									
									<span>{{item.hallName}}</span>
								</div>
								<div class="right">
									￥{{item.price}}
								</div>
							</li>
					</ul>			
			</div>						
		</div>
		</transition>
		
		
		<div v-show="!showmovie">
		<div class="content" v-show="!showcity">
		<div class="top">
			<div class="city"><h1 @click="showcity=!showcity">{{city}} ∨</h1><h2>我的订单</h2></div>			
		</div>
		<div class="second">
			<div class="citymovie"><h1>{{city}}大地影院</h1></div>						
		</div>
		<div class="third">
			<div class="cheap"><a class="couponClick" href="/wapportal/wechat/coupon.html" style="display: block;">我的优惠券</a></div>						
		</div>
			<ul>
				<li v-for="data in datalist" @click="showmovie=!showmovie" class="contentli">
					<div class="left">
						<img :src="data.poster"/>
					</div>
					
					<div class="mid">
						<h3 style="height: 39px;width: 210px;"><b  class="midname">{{data.name}}</b><span v-for="data1 in data.dimensionalList" style="margin-left: 3px;">{{data1}}</span></h3>						
						<p class="midimg" v-show="data.score?'isshow':''"><span>
							
							<img src="../assets/star.png" v-show="data.score/10>2?true:false"/>
							<img src="../assets/no_star.png" v-show="data.score/10>2?false:true"/>
							<img src="../assets/star.png" v-show="data.score/10>4?true:false"/>
							<img src="../assets/no_star.png" v-show="data.score/10>4?false:true"/>
							<img src="../assets/star.png" v-show="data.score/10>6?true:false"/>
							<img src="../assets/no_star.png" v-show="data.score/10>6?false:true"/>
							<img src="../assets/star.png" v-show="data.score/10>8?true:false"/>
							<img src="../assets/no_star.png" v-show="data.score/10>8?false:true"/>
							<img src="../assets/star.png" v-show="data.score/10>9?true:false"/>
							<img src="../assets/no_star.png" v-show="data.score/10>9?false:true"/>
							
							<!--<img src="http://www.dadicinema.com/images/"+{{data.score/10}}+"star_s.png"/>-->
							
						
						</span><span>{{data.score/10}}</span></p>
						<p>{{data.wordIntroduction}}</p>
						<p class="actor">{{data.actor_str}}</p>
						
						
							
					</div>
					
					<div class="right">
						<img src="../assets/buy_1.png"/>
					</div>
					<div id="box1">
						
					</div>
					<h1><span>会员特惠</span>|<p>开卡立享特惠购票</p></h1>
				</li>	
			</ul>	
			</div>
			</div>
	</div>
	
</template>

<script type="text/javascript">
	import router from  "../router";
	import axios from "axios";
	
	
	export default {

		data(){
			return {
				list:["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"],
				datalist:[],
				citylist:[],
				isshow:true,
				showcity:false,
				showmovie:false,
				bodershow:'',
				city:'重庆市',
				dateshow:[],
				/*shuju:[],
				shujuname:[]*/
				
			}
		},
		methods:{
			choosecity:function(val){
				this.city=val
				this.showcity=!this.showcity
			},
			borderclick:function(index){
				this.bodershow=index
			},
			datelist:function(val){				
				this.dateshow=val	
				console.log(this.dateshow)
			},

			shujulist:function(val){
				this.shuju=val
				console.log(this.shuju)
				this.$store.commit("changeshuju",val);
				router.push('/comfirm')
				
			},
			shujunamelist:function(val){
				this.shujuname=val
				console.log(this.shujuname)
				this.$store.commit("changeshujuname",val);
				
			}
			
			
		},
		mounted(){
			axios.get("film/getHitFilmAndFilmSession?cinemaCode=50120211&k=37bf7f0b-fde7-49a0-8c5c-972d911c2547&t=3&v=5.0+(iPhone%3B+CPU+iPhone+OS+11_0+like+Mac+OS+X)+AppleWebKit%2F604.1.38+(KHTML%2C+like+Gecko)+Version%2F11.0+Mobile%2F15A372+Safari%2F604.1&d=null&s=Win32&i=null&r=1").then(res=>{
			console.log(res.data.d.filmList)	
			this.datalist= res.data.d.filmList;
			this.dateshow= res.data.d.filmList[0].showList[0]
			console.log(this.$store)
			})
			
			
			axios.get("cinemacity/info?k=37bf7f0b-fde7-49a0-8c5c-972d911c2547&t=3&v=5.0+(iPhone%3B+CPU+iPhone+OS+11_0+like+Mac+OS+X)+AppleWebKit%2F604.1.38+(KHTML%2C+like+Gecko)+Version%2F11.0+Mobile%2F15A372+Safari%2F604.1&d=null&s=Win32&i=null&r=1").then(res=>{
				
				this.citylist= res.data.d;
				})
			
			setTimeout(function(){
				var swiper = new Swiper('.swiper-container', {
				      slidesPerView: 3,
				      spaceBetween: 3,
				      pagination: {
				        el: '.swiper-pagination',
				        clickable: true,
				      },
    			});
			},1500)
			
				
			},
	
		
	}
	
	
	   
</script>


<style type="text/css" scoped>
body{
		width:100%;
	
	}
	
	a{
		outline: none;
	}

	*{
		margin:0;
		padding: 0;
	}
	.city{
		background:#f3f3f3;;
		display: flex;
		height: 40px;
		line-height: 40px;
	}
	.city h1{
		font-size: 14px;
		font-weight: normal;
		color:gray;
		width: 50%;
		padding-left:10px ;
	}
	.city h2{
		font-size: 14px;
		font-weight: normal;
		color:gray;
		width: 50%;
		text-align: right;
		padding-right:10px ;
	}

	#box{
		width: 100%;
	}
	#box1{
		clear: both;
	}
	
	.contentli{		
		width: 100%;
		height: 154px;
		list-style: none;	
		border-top:1px solid gainsboro ;
		padding-top:15px;
		
	}
	
	img{
		width: 65px;
		height: 91px;
	}
	
	h3{
		width: 184px;
		height: 55px;		
		font-size: 18px;
		font-weight:normal;				
	}
	
	h3 span{
		height: 16px;		
	}
	
	p{
		font-size:12px ;
		color: darkgray;
		width: 130px;
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
	}
	
	li div{
		float: left;
		
	}
	span{
		color: #b6b6b6;
	    border: 1px solid #b6b6b6;
	    border-radius: 2px;
	   
	    display: inline-block;
	    font-size: 12px;
	}
	
	.mid{
		width: 218px;
		height: 130px;
		margin-left: 10px;
		
	}
	.midname{
		font-size: 18px;
		font-weight: normal;
		white-space: nowrap;
	}
	
	.right img{
		width: 50px;
		height: 26px;
	}
	.actor{
		border-bottom:1px solid gainsboro ;
		padding-bottom: 3px;
		margin-top: 5px;
	}
	h1{
		box-sizing: border-box;
		font-weight: normal;
		font-size: 12px;
		width:100%;
		height: 20px;
		display: flex;
		padding-left: 70px;
		
	}
	h1 span{
		border:0;
		color: #f37b1d;	
		
	}
	h1 p{
		color:black;
	}
	
	.midimg {
		width: 120px;
		height: 20px;
		margin-top:10px;
		margin-bottom: 3px;
	}
	.midimg span{
		border: 0;
	}
	.midimg img{
		width: 15px;
		height: 15px;
	}
	.cityContainer{		   
		    width: 100%;
		    height: 100%;
		    position: relative;
		    z-index: 1110;
		    background: white;
		    
	}
	.choosecity{
		display: flex;
	}
	.choosecity img{
		width:2.2rem;
		height:2.2rem;
		margin-top: 0.8rem;
		margin-left: 0.8rem;
	}
	.choosecity h4{
		font-size: 1.8rem;
	    font-weight: 700;
	    line-height: 43px;
	    width: 100%;
	    text-align:center;
	    margin: 0 30px;
	    color: #333;
	   
	}
	.allcity{
		background:#F3F3F3;
	}
	.allcity span{
		width: 100%;
		border: 0;
		font-size: 14px;
		text-indent: 1rem;
	}
	.allcity li{
		border: 0;
	}
	.firstname{		
		width: 100%;		
	}
	.cityname span{
		display: inline-block;
		font-size: 16px;
		color:gray;
		margin-right: 20px;
		margin-bottom: 20px;
	}
	.citymovie{
		width: 100%;
		height: 45px;
	}
	.citymovie h1{
		
		padding-left:10px ;
		font-size: 16px;
		line-height:45px;
	}
	.third{
		border-top:1px solid gainsboro ;
	}
	.couponClick{
			background:url("http://h5.dadicinema.com/wapportal/wechat/image/icon/bg_coupon@2x.png") 0 0/100% 100%;
		    line-height: 5rem;
		    text-indent: 22%;
		    color: #68d49d;
		    font-size: 1.4rem;
		    text-decoration: none;
		    
	}
	
	
	
	.movieContainer{		   
		    width: 100%;
		    height: 100%;
		    position: relative;
		    z-index: 1110;
		    background: white;
		    background:#F3F3F3
	}
	.movieContainer h3{
		width: 100%;
		height: 35px;
		padding-top:20px ;
		font-size: 16px;
		padding-left:20px;
		font-weight: normal;
		border-top: 1px solid gainsboro;
	}
	.movieContainer h1{
		padding: 0;
	}
	.movieContainer h1 span{
		font-size: 16px;
	}
	.movieContainer h1 p{
		font-size: 16px;
	}
	.choosemovie{
		display: flex;
		background:white;
	}
	.choosemovie img{
		width:2.2rem;
		height:2.2rem;
		margin-top: 0.8rem;
		margin-left: 0.8rem;
	}
	.choosemovie h4{
		font-size: 1.8rem;
	    font-weight: 700;
	    line-height: 43px;
	    width: 100%;
	    text-align:center;
	    margin: 0 30px;
	    color: #333;
	   
	}
	.swiper-container{	
		
		background: #000000;
	}
	.swiper-wrapper{	
		padding-left:5px ;
		padding-top:10px ;
		padding-bottom:10px;
	}
	.swiper-slide{		
		width:100px !important;
		height: 134px;
		list-style: none;
	}
	.show{
		opacity: 1;
	    height: 127px;
	    border: 2px solid rgb(255, 255, 255);
	    width: 90px;
	}
	.noshow{
		opacity: 0.5;
	    height: 127px;
	    border: 0px solid rgb(255, 255, 255);
	     width: 90px;
	}

	.moviename{
		box-sizing: border-box;
		padding-top:20px ;
		font-weight: 700;
		width:100%;			
		line-height: 25px;
		font-size: 16px;
		padding-left: 10px;
		padding-bottom: 5px;
	}
	.date{
		padding-top: 5px;
		background: #F3F3F3;
		width: 100%;		
	}
	.date div{
			padding:10px;
		    display: inline-block;
		    text-align: center;
		    min-width: 95px;
		    max-width: 120px;
		    line-height: 30px;
		    background-color: #62d399;
		    border: 1px solid white;
		    color: white;
		    font-weight: normal;
		  
	}
	
	
	
	.alldate{
		
		display: flex;
		padding: 0;
		width: 100%;
		height: 100px;
		line-height: 100px;
		border-top:1px solid #B6B6B6 ;
		background: white;
	}
	.alldate div{
		width: 30%;
		font-size: 16px;		
	}
	.alldate .left p{
		
		width: 80px;
		text-align: center;
		height: 20px;
		font-size: 20px;
		overflow: visible;
		color:black;
		
	}
	.alldate .left span{
		border: 0;
		width: 80px;
		text-align: center;
		height: 20px;
		font-size: 14px;
	}
	.alldate .mid{
		height: 100px;
	}
	.alldate .mid p{
		width: 80px;
		text-align: center;
		height: 20px;
		font-size: 18px;
		overflow: visible;
		color: gray;		
	}
	.alldate .mid span{
		border: 0;
		width: 80px;
		text-align: center;
		height: 20px;
		font-size: 14px;
	}
	.alldate .right{
		font-size: 18px;
		color: red;
		text-align: right;
	}
	
	 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(200px);
  opacity: 0;
}
</style>