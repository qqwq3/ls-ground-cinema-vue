<template>

	<div class="footer">

			<router-view></router-view>
			<ul class="footerul">
				<router-link tag="li" to="/list/buy" activeClass="listactive" id="li1" ><span @click="isshow=true;isnoshow=false">
					<!--<img :src="isshow?'../assets/ic_tab_1_selected.png':'/static/img/ic_tab_1_disabled.d3a85ad.png'">-->
				
					<img src="../assets/ic_tab_1_selected.png" v-show="isshow"/>
					<img src="../assets/ic_tab_1_disabled.png" v-show="isnoshow"/>
				</span><p>热映</p></router-link>
				<router-link tag="li" to="/list/food" activeClass="listactive" id="li2" ><span @click="isshow=false;isnoshow=true">
					<img :src="isshow?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADqUlEQVRYw+3YX6jURRTA8c/uLc2EJIMiMwnRytLCgiwhTHoJJPClSCOza4dCLCnoIelat0DpQftDJTUJRYKRYpk9RNRDCUaRFhqYWZlFGfaHovyT5r09zGzu3Va9Fbv3IQ8sy2/OOb/fd87MnDkzFU0kpTQdd2EkDmmtdGA3lkTE6kZlpQncOGzEEPyIaosBe3Aa9uHSiNharzyhicP8Avc8FrQJ8AEE7sDcI0YwpXQe3i2AkyJic4vhat8di4+wH1dExKc1XWN05uJUrGwXHETEdnnEhuP2phFMKY1xeO5dHhGbUkqjMLmFbJUStTdxFj4sz5dExA76zsF5OAUrImJTaVuEG9sQxJkRsTKltAK3yiN5z1+AJXo3yyvp8TrHl0ovW7VQKtiLD8rzU5iBzpTSExGxs1IAl8p5b3VEXNeGiB1RUkorcQMWR8SCakppNGbJy33pQMIVebSwdKaURlZxm5wo1+K9gabD+3gZZ6CziptwAI9FRM9A00VEr7wOfsecqrxQ9uLLgYarky+wB0Or2IlhuLC/3imlSn9t/6WcK28YO6pYLy/36f2EG4wXU0qL/0GHulNKD6aUOvrpMq0wra9iDQ5iZkppUj+cZ+F63J1SOuYuk1KaiYXowux+2I8rdgexpooNWIWhWZ/GHMV5KmqRG4Rlx7Cfom/qejildNVR7M/Es/KevAobaol6BN7C+diO+7EuIn4r+tPl1d4lz9cujMYt8oTuwtqI2FNnP6NEbngZpc/l7evn0skXImJXsT8J16AbF+ETXB0R39YXC+OxHJeVps+wDSdiPEagF90R0Z1SGoqnHd6rm9nDOsyOiJ9SSotwb2nfjS1yBhlbgkPOg3Mi4mP+Xg8Owxx0FofapN6Ht/FIRLxRZ99RIjUfFxc4Zf5sxTI8FxH763ym4U5cKVdO5J1jWxne5RHxS82+EXAIHiofeE0ugQ5gW2Mp3uA3CBNwTnnnV9gSEfuO4nOBnE4G4evSwYm4LyK+PxLgBGwu82V8fc9bLSmlV3EtpkTEO7X2xjKqVy4YD9WFv13SW/7/qG+sHsN4IAD7SKtPbP9ZjgMeBxxoOQ74vwOslF+P9ifr2oGtz/ZbbWLUg5PrHNolgxtAmwLukiuLszG1XWSlzJ+MH/BNva7ZDetCubLdJVfEG+XioVUnudFyRT4RT0bEvHplsxvWJRgn348kubrpaSFgrWp6Xb5p7SNNP1qOlrPl09uoFoHV5Du8gmci4tdG5Z9TnTIu9uanUwAAAABJRU5ErkJggg==':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADwUlEQVRYw+3YX4iVRRjH8c8eSzMhyaDITEKystHCgt4SwqSbQAJvijQyW4tCLCnoImlttkDpQvtDJWVCkWCkWFYXEXVRgvFGWmgvZlZmUYb9oSj/pLnbxczJs9tZ3Yqze5EPHA5n5nnO+53nnXnmN9OmiRVVnIG7MQaHtdaGYA+WliGu7d3Z1gRuAjZhOH5ErcWAXTgN+3FpGeK2xs4TmgQsyHDPY+EAAUbchjsxr88MFlU8H+9lwKIMcUuL4erPHY+PcABXlCF+Wu/rnZ15OBWrBwoOyhB3SG9sFO5omsGiiuc6MvcuL0PcXFRxLKa0kK0tZ+0tnIUP8+9LyhB30nMOzscpWFWGuDm3LcaNA5DEWWWIq4sqrsKt0pu89y/AnL2bpZX0eEPgS3mUrVoobdiHD/LvpzAT7UUVnyhD3NWWAZdJdW9tGeJ1A5CxPq2o4mrcgCVliAtrRRXHYba03JcNJly2RzNLe1HFMTXcLhXK9SgHmw7v42WcgfYabsJBPFaG2DXYdGWI3dI6+B1za9JC2YcvBxuuwb7AXoyoYRdGIvQ3uqhiW399/6WdJ20YO2vYIC33Gf2EG4YXiyou+QcD6iyq+GBRxSH9DJmemTbUsA6HMKuoYtGP4Nm4HvcUVTzmLlNUcRYWoQNz+uE/IfsdwroaNmINRmBFLtp9BU9DPXNDsfwY/lP1LF0PF1W86ij+Z+JZaU9eg431Qj0ab+MC7MADeK0M8bfcf7q02juk+dqBcbhFmtAdWF+GuLfBf2bO3Kj8lj6Xtq+f8yBfKEPcnf1PwjXoxEX4BFeXIX7bKBYmYiUuy02fYTtOxESMRjc6yxA7iyqOwNOO7NXN/OE1zClD/Kmo4mLcl9v3YKtUQcbn5JDq4NwyxI/5ux4ciblozwH1Sb0f7+CRMsQ3G/yH5EwtwMUZTp4/27Acz5UhHmiImY67cKWknEg7x/b8eleWIf5S9+8NOBwP5Qe8Lkmgg9jeW4r3ihuKSTgn/+dX2FqGuP8oMRdK5WQovs4DnIz7yxC/7wtwErbk+TKxceSttqKKr+JaTC1DfLfe3ltGdUuC8XBD+gfKuvP3H42NtWM4DwZgD2v1ie0/23HA44CDbccB/3eAbfnTZeCLdf3A1mP7rTVx6sLJDQEDZcN6gTYF3C0pi7MxbaDIssyfgh/wTWNfsxvWRZKy3S0p4k2SeGjVSW6cpMgn48kyxPmNnc1uWJdignQ/skJSN10tBKyrpjekm9Ye1vSh+Wg5Rzq9jW0RWN2+wyt4pgzx196dfwInfC4jSoKxUQAAAABJRU5ErkJggg=='" />	
					
				</span>
					<p>商品</p></router-link>
			</ul>	
	
	</div>
	
</template>

<script type="text/javascript">
	
	export default{
		data(){
			return{
				isshow:true,
				isnoshow:false,
			}
		},
		
		
	}
</script>

<style type="text/css" scoped>
	
	
	
	*{
		margin:0;
		padding: 0;
	}
	

	
	img{
		width: 28px;
	}
	
	.footerul{
		
		background: white;
		position: fixed;
		bottom: 0;		
		border-top: 1px solid gainsboro;
		max-width: 750px;
		width: 100%;
	}
	
	li{
		list-style: none;
		width:50%;
		text-align: center;
		float: left;
	}
	
	.listactive{
		color: red;
		
	}
</style>