<template>
	<view class="content">
		<view @click="goHome">
			<text class="title">跳转到Home页</text>
		</view>

		<view @click="goEditor">
			<text class="title">跳转到Editor页</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			goHome() {
				uni.navigateTo({url: '/pages/home/index'})
			},
			goEditor() {
				uni.navigateTo({url: '/pages/editor/index'})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
