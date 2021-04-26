<template>
	<view>
		<u-tabs name="name" :list="list" :is-scroll="false" :current="current" @change="change" active-color="#01B272"
			bar-width="120">
		</u-tabs>

		<view v-if="this.current=='0'">
			<view class="header">
				<u-form>
					<u-form-item>1、投保须知</u-form-item>
				</u-form>
			</view>
		</view>

		<view v-if="this.current=='1'">
			<view class="header">
				<u-form>
					<u-form-item>1、监护人责任保险条款</u-form-item>
				</u-form>
			</view>
		</view>

		<view v-if="this.current=='2'">
			<view class="header">
				<view class="title">
					特别约定
				</view>
				<view style="white-space: pre-line;">
					1、本产品每一被保险人限投保5份；
					2、每次事故免赔额为200元或损失金额的10%，以两者中的高者为准。
				</view>
			</view>
		</view>

		<view v-if="this.current=='3'" height="100%" class="bottom-margin">
			<iframe width="100%" height="750rpx" scrolling="no"
				:src="`/static/pdf/web/viewer.html?file=${url}`"></iframe>
		</view>
		<view class="bottom">
			<view class="bottombth noClick" v-if="noClickShow">
				我已逐项阅读并同意
			</view>
			<view class="bottombth Click" v-if="ClickShow" @click="goInfo(id)">
				我已逐项阅读并同意
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: true,
				url: 'https://obs-mes.obs.cn-east-2.myhuaweicloud.com/file_1610606264265.pdf',
				list: [{
					name: '投保须知'
				}, {
					name: '保险条款'
				}, {
					name: '特别约定',
				}, {
					name: '隐私政策',
				}],
				onePage: '',
				twoPage: '',
				threePage: '',
				noClickShow: true,
				ClickShow: false,
				current: 0
			}
		},
		onLoad(option) {
			console.log("信息录入" + option.id);
			if (option.id == "true") {
				this.noClickShow = false;
				this.ClickShow = true;
			}
			if (option.url) {
				this.url = decodeURIComponent(option.url);
				//如果带参数，带数字还是用js解码一下
			}
		},
		methods: {
			change(index) {
				this.current = index;
				if (index == "1") {
					this.onePage = index;
				}
				if (index == "2") {
					this.twoPage = index;
				}
				if (index == "3") {
					this.threePage = index;
				}
				if (this.onePage == "1" && this.twoPage == "2" && this.threePage == "3") {
					this.noClickShow = false;
					this.ClickShow = true;
				}
			},
			goInfo(id) {
				uni.navigateTo({
					url: "/pages/info/info?id=" + id
				})
			}
		},
	}
</script>

<style scoped>
	.m-t-30 {
		margin-left: 30rpx;
	}

	.title {
		color: #333;
		font-weight: bold;
		margin-bottom: 30rpx;
		height: 40rpx;
		line-height: 40rpx;
	}

	.bottom-margin {
		margin-bottom: 140rpx;
	}

	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #EEEEEE;
	}

	.bottombth {
		margin: 30rpx;
		height: 80rpx;
		color: #fff;
		line-height: 80rpx;
		text-align: center;
	}

	.noClick {
		background: #ccc;
	}

	.Click {
		background: #f39800;
	}
</style>
