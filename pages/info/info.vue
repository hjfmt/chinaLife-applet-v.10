<template>
	<view class="page">
		<view class="page-border-bottom">
			<!-- 保险名称 insuranceName-->
			<view class="header">
				<view class="header-title">{{insuranceName}}</view>
				<view class="border-top">
					<template>
						<u-form :model="form" ref="uForm" label-width="240rpx" :error-type="errorType">
							<view @click="show=true">
								<template>
									<!-- :default-time="defaultTime" -->
									<u-picker mode="time" v-model="show" :params="params" :show-time-tag="false"
										@confirm="startDate">
									</u-picker>
								</template>
								<u-form-item label="保险起期" prop="insuranceStart">
									{{form.insuranceStart}} 00:00:00
									<u-icon name="calendar" color="#01B574" size="40" slot="right"></u-icon>
								</u-form-item>
							</view>
							<u-form-item label="保险止期" prop="insuranceEnd">
								{{form.insuranceEnd}} 23:59:59
								<u-icon name="calendar" color="#ccc" size="40" slot="right"></u-icon>
							</u-form-item>
							<u-form-item label="保险期间" prop="insuranceDuration">{{form.insuranceDuration}}</u-form-item>
						</u-form>
					</template>
				</view>
			</view>
			<!-- 投保人信息 -->
			<view class="header">
				<view class="header-title">投保人信息</view>
				<view class="border-top">
					<template>
						<u-form :model="form" ref="uForm" label-width="240rpx" :error-type="errorType">
							<u-form-item label="姓名" prop="name" :required="star">
								<u-input placeholder="姓名" v-model="form.name" type="text"></u-input>
							</u-form-item>
							<u-form-item label="联系手机" prop="phone" :required="star">
								<u-input placeholder="联系手机" v-model="form.phone" text="number"></u-input>
							</u-form-item>
							<view @click="IDTypeShow=true">
								<u-form-item label="证件类型" prop="IDType" :required="star">
									{{form.IDType}}
									<template>
										<u-select v-model="IDTypeShow" :list="form.IDTypeList" mode="single-column"
											@confirm="selectIDType">
										</u-select>
									</template>
									<u-icon name="arrow-down" color="#01B574" size="40" slot="right"></u-icon>
								</u-form-item>
							</view>
							<u-form-item label="证件号码" prop="IDNumber" :required="star">
								<u-input placeholder="证件号码" v-model="form.IDNumber" text="number"></u-input>
							</u-form-item>
							<view @click="IDValidDateShow=true">
								<template>
									<u-picker mode="time" v-model="IDValidDateShow" :params="params"
										:show-time-tag="false" @confirm="stopDate">
									</u-picker>
								</template>
								<u-form-item label="证件有效止期" prop="IDValidDate">
									{{form.IDValidDate}}
									<u-icon name="calendar" color="#01B574" size="40" slot="right"></u-icon>
								</u-form-item>
							</view>
							<view class="">
								<u-form-item label="证件有效年限" :border-bottom="false" prop="radioValue">
								</u-form-item>
								<template>
									<view>
										<u-radio-group v-model="form.radioValue">
											<u-radio @change="radioChange" v-for="(item, index) in radioList"
												:key="index" :name="item.name" :disabled="item.disabled">
												{{item.name}}
											</u-radio>
										</u-radio-group>
									</view>
								</template>
							</view>
							<u-form-item label="电子邮箱" prop="email">
								<u-input placeholder="电子邮箱" v-model="form.email"></u-input>
							</u-form-item>
						</u-form>
					</template>
				</view>
			</view>
			<!-- 被保人信息 -->
			<view class="header">
				<view class="header-title">被保人信息</view>
				<view class="border-top">
					<template>
						<u-form :model="form" ref="uForm" label-width="240rpx" :error-type="errorType">
							<view @click="policyholderShow=true">
								<u-form-item label="与投保人关系" prop="policyholder" :required="star">
									<template>
										{{form.policyholder}}
										<u-select v-model="policyholderShow" :list="form.policyholderList"
											mode="single-column" @confirm="selectpolicyholder">
										</u-select>
									</template>
									<u-icon name="arrow-down" color="#01B574" size="40" slot="right"></u-icon>
								</u-form-item>
							</view>
						</u-form>
					</template>
				</view>
			</view>
			<!-- 被监护人信息 -->
			<view class="header">
				<view class="header-title">被监护人信息</view>
				<view class="border-top">
					<template>
						<u-form :model="form" ref="uForm" label-width="240rpx" :error-type="errorType">
							<u-form-item label="与被保人关系" prop="insuredRelation" :required="star">
								<view @click="insuredRelationShow=true">
									<template>
										{{form.insuredRelation}}
										<u-select v-model="insuredRelationShow" :list="form.insuredRelationList"
											mode="single-column" @confirm="selectinsuredRelation">
										</u-select>
									</template>
								</view>
								<u-icon name="arrow-down" color="#01B574" size="40" slot="right"></u-icon>
							</u-form-item>
							<u-form-item label="被监护人姓名" prop="pupillusName" :required="star">
								<u-input placeholder="被监护人姓名" v-model="form.pupillusName"></u-input>
							</u-form-item>
							<u-form-item label="被监护人证件类型" prop="pupillusIdType" :required="star">
								<view @click="pupillusIdTypeShow=true">
									<template>
										{{form.pupillusIdType}}
										<u-select v-model="pupillusIdTypeShow" :list="form.pupillusIdTypeList"
											mode="single-column" @confirm="selectpupillusIdType">
										</u-select>
									</template>
								</view>
								<u-icon name="arrow-down" color="#01B574" size="40" slot="right"></u-icon>
							</u-form-item>
							<u-form-item label="被监护人证件号码" prop="pupillusIdNumber" :required="star">
								<u-input placeholder="被监护人证件号码" v-model="form.pupillusIdNumber"></u-input>
							</u-form-item>
							<view @click="birthdayShow=true">
								<template>
									<u-picker mode="time" v-model="birthdayShow" :params="params" :show-time-tag="false"
										@confirm="birthdayDate">
									</u-picker>
								</template>
								<u-form-item label="生日" prop="birthday" :required="star">
									{{form.birthday}}
									<u-icon name="calendar" color="#01B574" size="40" slot="right"></u-icon>
								</u-form-item>
							</view>
						</u-form>
					</template>
				</view>
			</view>
			<!-- 其他信息 -->
			<view class="header">
				<view class="header-title">其他信息</view>
				<view class="border-top">
					<template>
						<u-form :model="form" ref="uForm" label-width="240rpx" :error-type="errorType">
							<u-form-item label="备注" prop="remork">
								<u-input placeholder="备注" v-model="form.remork"></u-input>
							</u-form-item>
						</u-form>
					</template>
				</view>
			</view>
			<!-- 受益人信息 -->
			<view class="header">
				<view class="header-title">受益人信息</view>
				<view class="border-top">
					<template>
						<u-form :model="form" ref="uForm" label-width="240rpx" :error-type="errorType">
							<u-form-item label="受益人" prop="beneficiary">{{form.beneficiary}}</u-form-item>
						</u-form>
					</template>
				</view>
			</view>

			<view class="header">
				<view @click="goPCread(PCreadId)">
					<u-radio-group v-model="oneValue" :wrap="true">
						<u-radio>
							我已逐项阅读并同意
							<text class="yellow">
								《投保须知》
							</text>
							<text class="yellow">《保险条款》</text>
							<text class="yellow">《特别约定》</text>
							<text class="yellow">《隐私政策》</text>
						</u-radio>
					</u-radio-group>
				</view>
				<view @click="goRead(readId)">
					<u-radio-group v-model="twoValue">
						<u-radio>
							我已阅读并同意 <text class="yellow">《责任免除详情》</text>
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
		<!-- 底部固定位置 -->
		<view class="bottom-fixed space-between">
			<view class="price">
				{{price}}
			</view>
			<view class="go" @click="submit">
				立即投保
			</view>
		</view>
	</view>
</template>

<script>
	import common from "static/common/common.js"
	export default {
		data() {
			return {
				insuranceName: '父母无忧-熊孩子',
				price: '￥35.00',
				oneValue: '',
				twoValue: '',
				PCreadId: '',
				readID: '',
				errorType: ['toast'], //错误提示
				star: true, //添加是否必需检验
				show: false,
				IDTypeShow: false,
				policyholderShow: false,
				insuredRelationShow: false,
				pupillusIdTypeShow: false,
				IDValidDateShow: false,
				birthdayShow: false,
				form: {
					//保险时间
					insuranceStart: '',
					insuranceEnd: '',
					insuranceDuration: '1年',

					//投保人信息
					name: '',
					phone: '',
					IDType: '居民身份证',
					// 身份类型列表
					IDTypeList: [{
							value: '1',
							label: '居民身份证'
						},
						{
							value: '2',
							label: '士兵证'
						}
					],
					IDNumber: '',

					IDValidDate: '',
					IDValidAge: '',
					email: '',

					// 被保人信息
					//投保人列表
					policyholder: '本人',
					policyholderList: [{
						value: '1',
						label: '本人'
					}],

					//被监护人信息
					//与被保人关系
					insuredRelation: '孙子，孙女或外孙，外孙女',
					insuredRelationList: [{
							value: '1',
							label: '孙子，孙女或外孙，外孙女'
						},
						{
							value: '2',
							label: '儿女'
						}
					],
					pupillusName: '', //被监护人姓名
					// 被监护人证件类型
					pupillusIdType: '居民身份证',
					//被监护人证件类型列表
					pupillusIdTypeList: [{
							value: '1',
							label: '居民身份证'
						},
						{
							value: '2',
							label: '外国护照'
						}
					],
					pupillusIdNumber: '', //被监护人证件号码
					birthday: '请选择', //生日
					// 其他信息
					remork: '', //备注
					// 受益人信息
					beneficiary: '法定' //受益人
				},
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['change','blur'],
					}],
					phone: [{
						required: true,
						max: 11,
						message: '请输入手机',
						trigger: ['change','blur'],
					}, {
						validator: (rule, value, callback) => {
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						trigger: ['change','blur'],
					}],
					IDType: [{
						required: true,
						message: '请选择证件类型',
						trigger: ['change', 'blur']
					}],
					IDNumber: [{
						required: true,
						message: '请输入证件号码',
						trigger: ['change', 'blur']
					}],
					policyholder: [{
						required: true,
						message: '请选择与投保人关系',
						trigger: ['change', 'blur']
					}],
					insuredRelation: [{
						required: true,
						message: '请选择与被保人关系',
						trigger: ['change', 'blur']
					}],
					pupillusName: [{
						required: true,
						message: '请输入被监护人姓名',
						trigger: ['change', 'blur']
					}],
					pupillusIdType: [{
						required: true,
						message: '请选择被监护人证件类型',
						trigger: ['change', 'blur']
					}],
					pupillusIdNumber: [{
						required: true,
						message: '请输入被监护人证件号码',
						trigger: ['change', 'blur']
					}],
					birthday: [{
						required: true,
						message: '请选择生日',
						trigger: ['change', 'blur']
					}],
				},
				params: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				// 单选框value
				radioValue: '',
				// 单选框列表
				radioList: [{
						name: '5年',
						disabled: false
					},
					{
						name: '10年',
						disabled: false
					},
					{
						name: '20年',
						disabled: false
					},
					{
						name: '长期有效',
						disabled: false
					}
				],
			}
		},
		onLoad(option) {
			this.getCurrentDate();
			console.log("协议内容阅读" + option.id);
			if (option.id == "true") {
				this.PCreadId = option.id;
				console.log(this.PCreadId);
			}
		},
		methods: {
			// 选择证件类型
			selectIDType(e) {
				this.form.IDType = e[0].label;
			},
			selectpolicyholder(e) {
				this.form.policyholder = e[0].label;
			},
			selectinsuredRelation(e) {
				this.form.insuredRelation = e[0].label;
			},
			selectpupillusIdType(e) {
				this.form.pupillusIdType = e[0].label;
			},
			getCurrentDate() {
				let date = new Date();
				let y = date.getFullYear();
				let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
				let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
				this.form.insuranceStart = `${y}-${m}-${d+1}`
				this.form.insuranceEnd = `${y+1}-${m}-${d}`
				this.form.IDValidDate = `${y}-${m}-${d}`
			},
			startDate(e) {
				this.form.insuranceStart = `${e.year}-${e.month}-${e.day}`
				let y = `${e.year+1}`
				this.form.insuranceEnd = `${y}-${e.month}-${e.day-1}`
				// 重新加载
			},
			stopDate(e) {//选择证件有效止期
				this.form.IDValidDate = `${e.year}-${e.month}-${e.day}`
			},
			birthdayDate(e) {//选择生日
				this.form.birthday = `${e.year}-${e.month}-${e.day}`
			},
			radioChange(e) {
				this.form.radioValue = e;
				console.log(this.form.radioValue);
			},
			goPCread(id) {
				uni.navigateTo({
					url: "/pages/protocolContentRead/protocolContentRead?id=" + id
				})
			},
			goRead(id) {
				uni.navigateTo({
					url: "/pages/read/read?id=" + id
				})
			},
			submit() {
				console.log(this.form);
					let flag = this.$common.checkRules(this.form, this.rules);
					console.log(flag);
				this.$refs.uForm.validate(valid => {
					console.log(valid);
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			console.log("onReady");
		}
	}
</script>

<style>

</style>
