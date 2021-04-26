<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */

	// 引入uView基础样式
	@import "uview-ui/index.scss";

	.page {
		width: 100%;
		background-color: #EEEEEE;
		position: absolute;
	}

	.header {
		margin-bottom: 15rpx;
		margin-top: 0;
		padding: 30rpx;
		background: #fff;
	}

	.header-title {
		color: #333;
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 30rpx;
		padding-left: 20rpx;
		border-left: 8rpx #01b976 solid;
		height: 40rpx;
		line-height: 40rpx;
	}

	.header-middle {
		font-size: 30rpx;
		padding-bottom: 30rpx;
		border-bottom: #01B574 dashed 1rpx;
	}

	// 责任标题
	.duty-title {
		background-color: #01B574;
		height: 80rpx;
		line-height: 80rpx;
		color: white;
		padding: 0 30rpx
	}

	.navigate {
		font-size: 20rpx;
		color: #01B574;
	}

	.space-between {
		display: flex;
		justify-content: space-between;
	}

	.header-bottom {
		color: #b1abab;
		font-size: 28rpx;
		margin-top: 30rpx;
	}

	.border-bottom {
		padding-bottom: 30rpx;
		border-bottom: #01B574 dashed 1rpx;
	}

	.border-top {
		padding-top: 30rpx;
		border-top: #01B574 dashed 1rpx;
	}

	.dotted {
		color: #01B574;
		text-align: center;
		padding: 10rpx;
	}

	.w-100 {
		width: 100%;
	}

	.space-around {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.circle {
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		background: #f39800;
		margin-right: 30rpx;
	}

	.bottom-fixed {
		height: 120rpx;
		line-height: 120rpx;
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}

	.price {
		width: 40%;
		background-color: #FFFFFF;
		color: #18B566;
		font-size: 30rpx;
	}

	.go {
		width: 60%;
		background-color: #f39800;
		color: #FFFFFF;
		font-size: 30rpx;
	}

	.page-border-bottom {
		padding-bottom: 120rpx;
	}

	.yellow {
		color: #f39800;
	}
</style>
