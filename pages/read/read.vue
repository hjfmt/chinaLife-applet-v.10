<template>
	<view id="read">
		<view id="pdf">

		</view>
	</view>
</template>

<script>
	import Pdfh5 from "pdfh5";
	import "pdfh5/css/pdfh5.css";
	export default {
		data() {
			return {
				pdfh5: null,
				url:'https://obs-mes.obs.cn-east-2.myhuaweicloud.com/file_1610606264265.pdf',
			}
		},
		onLoad(option){
			console.log(option.id);
		},
		onReady() {
			this.pdfh5 = new Pdfh5("#pdf", {
				pdfurl: "https://obs-mes.obs.cn-east-2.myhuaweicloud.com/file_1610606264265.pdf"
			});
			this.pdfh5.on("complete", function(status, msg, time) {
				console.log("状态：" + status + "，信息：" + msg + "，耗时：" + time + "毫秒，总页数：" + this.totalNum);
			})
		},
		methods: {

		}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}
	html,
	body,
	#read {
		width: 100%;
		height: 100vh;
	}
</style>
