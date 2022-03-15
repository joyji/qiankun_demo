<!--
 * @Description: 
 * @Author: jiying079
 * @Date: 2022-01-28 14:53:49
 * @LastEditTime: 2022-03-15 22:37:58
-->
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">home page</text>
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
		computed:{
			
		},
		components:{
            
		},
		methods: {
			showEdit() {
				uni.navigateTo({
					url: '/pages/editor/index'
				})
			},
			setStoreData() {
				this.$setGlobalState({
					menuIsCollapse: true
				})
			}

		}
	}
</script>

<style>
	.el-header, .el-footer {
		background-color: white;
		color: #333;
		text-align: center;
		line-height: 60px;
		border-bottom: #c8c7cc solid 1px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		z-index: 100;
	}

	.el-aside {
		background-color: white;
		color: #333;
		text-align: center;
		height: calc(100vh - 60px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		z-index: 99;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		height: calc(100vh - 60px);
		width: 50%;
		background-size: 20px 20px;
		background-position: 0 0,10px 10px;
	}

	body > .el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
	}

	.el-container:nth-child(7) .el-aside {
	}

</style>
