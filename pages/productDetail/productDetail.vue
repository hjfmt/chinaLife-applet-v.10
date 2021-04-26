<template>
	<view class="page">
		<view class="page-border-bottom">
			<view>
				<img src="../../static/img/1.jpg" class="w-100"></img>
			</view>
			<!-- 父母无忧-熊孩子 -->
			<view class="header">
				<view class="header-title">父母无忧-熊孩子</view>
				<view class="header-middle">一年期 | 责任险</view>
				<view class="header-bottom">
					被监护人因过失造成第三者人身伤亡或财产损失20万
				</view>
			</view>
			<!-- 保障责任 -->
			<view class="header">
				<view class="header-title">
					保险责任</view>
				<view style="margin-bottom: 30rpx;color: #666;">
					保险期间：1年
				</view>
				<view class="duty-title space-between">
					<view class="">责任</view>
					<view class="">保额</view>
				</view>
				<view class="space-between" style="padding: 30rpx;">
					<view style="font-size: 30rpx;">
						第三者财产损失或第三者人身伤亡
					</view>
					<view style="color:#01B574;font-weight: bold;">
						20万元
					</view>
				</view>
				<navigator url="/pages/dutyDetail/dutyDetail" open-type="navigate">
					<view style="color: #01B574;" class="border-bottom">
						查看责任详情
					</view>
				</navigator>
				<view style="margin: 30rpx 0;">
					更多内容请阅读
				</view>
				<view style="display: flex;" class="navigate">
					<navigator url="/pages/read/read" open-type="navigate">
						<view>《投保须知》</view>
					</navigator>
					<navigator url="/pages/read/read" open-type="navigate">
						<view>《责任免除详情》</view>
					</navigator>
					<navigator url="/pages/read/read" open-type="navigate">
						<view>《监护人责任保险条款》</view>
					</navigator>
				</view>
			</view>
			<!--产品介绍-->
			<view class="header">
				<view class="header-title">
					产品介绍
				</view>
				<view class="border-top">
					<img src="../../static/img/1.jpg" class="w-100"></img>
				</view>
			</view>
			<!-- 特别约定 -->
			<view class="header">
				<view class="header-title">
					特别约定
				</view>
				<view class="border-top" style="white-space: pre-line;">
					1、本产品每一被保险人限投保5份；
					2、每次事故免赔额为200元或损失金额的10%，以两者中的高者为准。
				</view>
			</view>
			<!-- 购买流程 -->
			<view class="header">
				<view class="header-title">
					购买流程
				</view>
				<view class="space-around">
					<view>
						<img src="../../static/img/select product.png" class="w-100"></img>
					</view>
					<view style="border-top:1px dashed #cccccc;height: 1px;"></view>
					<!-- <view class="dotted">………</view> -->
					<view>
						<img src="../../static/img/fill In info.png" class="w-100"></img>
					</view>
					<view style="border-top:1px dashed #cccccc;height: 1px;"></view>
					<view>
						<img src="../../static/img/pay premium.png" class="w-100"></img>
					</view>
					<view style="border-top:1px dashed #cccccc;height: 1px;"></view>
					<view>
						<img src="../../static/img/check premium.png" class="w-100"></img>
					</view>
				</view>
				<view class="space-around">
					<view class="">
						<view class="">
							选择产品
						</view>
					</view>
					<view>
						<view class="">
							填写信息
						</view>
					</view>
					<view class="">
						<view class="">
							支付保费
						</view>
					</view>
					<view class="">
						<view class="">
							查看保单
						</view>
					</view>
				</view>
			</view>
			<!-- 理赔服务 -->
			<view class="header">
				<view class="header-title">
					理赔服务
				</view>
				<view class="border-top">
					<view style="display:flex;align-items: center;margin-bottom: 30rpx;">
						<view class="circle"></view>
						<view style="font-weight: bold;">
							电话理赔
						</view>
					</view>
					<view style="margin-left: 50rpx;">
						<view>拨打保单报案电话，进行人工引导完成理赔。</view>
						<view style="color: #18B566;font-weight: bold;margin-top: 10rpx;">95519></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部固定位置 -->
		<view class="bottom-fixed space-between">
			<view class="price">
				￥35.00
			</view>
			<view class="go">
				<navigator url="/pages/info/info">
					立即投保
				</navigator>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
