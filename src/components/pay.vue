<template>
	<div id="pay">
		<p class="toptime">请您在<span class="toptimecolor">{{minute}}分{{second}}秒</span>内支付，超时系统将自动取消订单</p>
		
		<div class="moviedetail">
			<img :src='filename.poster' />
			<ul class="moviedetail-ul">
				<li class="ul-title">{{filename.name}}</li>
				<li class="ul-address">重庆市大地影院</li>
				<li class="ul-time">{{filedata.startTime.substr(5,2)}}月 {{filedata.startTime.substr(8,2)}}日&nbsp;&nbsp;{{filedata.startTime.substr(11,2)}}:{{filedata.startTime.substr(14,2)}} &nbsp;&nbsp;英语/数字3D</li>
				<li class="ul-seat"><span v-for="data in seat">{{data}}</span></li>
			</ul>
		</div>
		<p class="phonenumber">取票手机号：<span>15023251621</span></p>
		
		<img src="../assets/content.png" style="width: 100%;"/>
		<div style="background: white;height: 400px;" class="needKnow">
		<div class="pay_title" style="padding: 1.2rem 1rem 0.8rem 1rem;border-bottom: 1px solid #dedede;font-size: 16px;font-weight: 600;">
		用户须知</div>
		<div style="padding: 0.6rem 1rem 1.5rem 1rem; color: #afafaf;font-size: 1.5rem;">
			1.本场次支持放映前30分钟在线申请退票，特惠影票不支持退换；<br>
			2.为了大家的观影体验，请不要携带外来食品入场观影；<br>
			3.购买卖品后需要前往影院前台出示订单条形码兑换卖品；<br>
			4.只购买卖品的订单且未到前台兑换可以在订单详情中发起退款申请；<br>
			5.影票和小卖同时购买后，影票和卖品在未兑换的情况下支持退款，若影票已出票，卖品套餐无法进行退款；
		</div>
		</div>
		<div class="bottomclick">
			<div class="zhifu">还需支付：<span class="money">￥{{parseInt(filedata.price)*seat.length}}</span> <span class="zhifumingxi">查看支付明细&nbsp;&nbsp;></span></div>
			<a href="javascript:;" @click="success">确认订单</a>
		</div>
		
		
		
		
		<!--
			<mt-popup  v-model="popupVisible"  position="bottom">
				 
				
			</mt-popup>-->
	</div>
</template>

<script>
	import router from '../router'
import { Popup } from 'mint-ui';//引入mint Popuo
	export default{
		data(){
			return{
				minutes:10,
	            seconds:0,
	            popupVisible:false //控制 Popup显示隐藏
			}
           
       },
       component(){
       		Popup//注册mint Popuo
       },
       mounted(){
       	 this.add();
       },
       methods:{
       		success(){
       			alert("购买成功")
       		},
            num:function (n) {
                return n<10 ? "0" + n : "" + n
            },
            add:function () {
                var _this = this;
                var time = window.setInterval(function () {
                    if(_this.seconds == '00' && _this.minutes!= '00') {
                        _this.seconds = 59;
                        _this.minutes -= 1; 
                    }else if(_this.minutes == '00' && _this.seconds == '00'){
                        _this.seconds = 0;
                        window.clearInterval(time);
                        alert('您已超出系统限制时间')
                    }else{
                        _this.seconds -= 1 
                    }
					 
                },1000);
            }
        },
       
        watch:{
            second:{
                handler(newVal){
                    this.num(newVal)
                }
            },
            minute:{
                handler(newVal){
                    this.num(newVal)
                }
            }
        },
        computed:{
            second:function () {
                return this.num(this.seconds)
            },
            minute:function () {
                return this.num(this.minutes)
            },
            seat(){
            	return this.$store.state.seat
            },
            filename(){
				return this.$store.state.shujuname
			},
			filedata(){
				return this.$store.state.shuju
			}
        }
		
	}
</script>

<style lang="scss" scoped>
	.pay{
		width: 100%;
		max-width: 750px;
		margin:0 auto;
	}
	.toptime{
		width: 100%;
		color: darkgray;
		background-color: rgb(251,244,215);
		padding: 10px 0;
		text-align: center;
		
	}
	.toptimecolor{
			color: #fcc58b !important;
	}
	.moviedetail{
		width: 100%;
		height: 158px;
		img{
		    width: 30%;
		    height: 150px;
		    float: left;
		   padding: 10px;
		    border: 0;
		}
		.moviedetail-ul{
			padding-top: 10px;
			li{
				list-style: none;
				width: 100%;
				margin: 10px 0;
			}
			.ul-title{
				font-size: 20px;
				font-weight: 600;
				height: 33px;
				line-height: 33px;
			}
			.ul-address{
				height: 25px;
				line-height: 25px;				
			}
			.ul-time{
				height: 25px;
				line-height: 25px;
				color: red;
			}
			.ul-seat{
				height: 25px;
				line-height: 25px;
				span{
					display: block;
					float: left;
					margin-right: 10px;
				}
			}
		}
	}
	.phonenumber{
		box-sizing: border-box;
		width: 100%;
		padding: 7px 5px;
		border-top: 1px solid #cecece;
		border-bottom: 1px solid #cecece;
		font-size: 16px;
		text-align: left !important;
		margin-top: 10px;
		span{
			font-size: 20px;
		}
	}
	.bottomclick{
		background: white;
		box-sizing: border-box;
		padding: 10px;
		width: 100%;
		position: fixed;
		bottom: 0;
		font-size: 16px;
		.zhifumingxi{
			display: block;
			float: right;
			font-size: 14px;
			color: #cecece;
			line-height: 21px;
		}
		.money{
			color: red;
		}
		a{
			display: block;
			width: 100%;
			height: 51px;
			text-align: center;
			line-height: 51px;
			color: white;
			background: rgb(98, 211, 153);
			font-size: 20px;
			text-decoration: none;
			margin-top: 10px;
		}
	}
</style>