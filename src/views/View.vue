<template>
	<div class="datav-page">
		<dv-full-screen-container style="position: relative;">
			<dv-border-box-11 class="index-box" title="集约化监控平台">
				<!-- <d-player :options="options" class="d-player-box"></d-player> -->
				<el-row :gutter="20">
					<el-col :span="6">
						<div class="grid-content bg-purple">
							<!-- <dv-decoration-11 style="width:400px;height:60px;" class="margin-center">集约化监控平台</dv-decoration-11> -->
							<dv-border-box-12 style="width:100%;height:220px" class="margin-top-20">
								<div class="border-box padding-10">
									<dv-scroll-board :config="config" style="width:100%;height:200px" />
								</div>
							</dv-border-box-12>
							<!-- <dv-border-box-13 style="height:300px;"> -->
							<!-- </dv-border-box-13> -->
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content bg-purple">
							<!-- <div style="width:400px;height:60px;"></div> -->
							<!-- <dv-decoration-11 style="width:400px;height:60px;" class="margin-center">集约化监控平台</dv-decoration-11> -->
							<dv-decoration-12 style="width:220px;height:220px;" class="margin-center margin-top-20" />
							<!-- <d-player :options="options" class="d-player-box"></d-player> -->
						</div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple">
							<!-- <dv-decoration-11 style="width:400px;height:60px;" class="margin-center">集约化监控平台</dv-decoration-11> -->
							<dv-capsule-chart :config="config1" style="width:100%;height:220px" class="margin-top-20" />
							<!-- <d-player :options="options" class="d-player-box"></d-player> -->
						</div>
					</el-col>
				</el-row>
				<!-- <dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
				<dv-decoration-11 style="width:240px;height:60px;">页面载入中...</dv-decoration-11>-->
				<!-- <dv-decoration-1 style="width:200px;height:50px;" /> -->
			</dv-border-box-11>
			<!-- <dv-loading></dv-loading> -->
		</dv-full-screen-container>
	</div>
</template>

<script>
// let Hls = require("hls.js");
// window.Hls = Hls;
// import VueDPlayer from "vue-dplayer";
// import "vue-dplayer/dist/vue-dplayer.css";

export default {
	name: "d-view",
	components: {
		// "d-player": VueDPlayer,
	},
	data() {
		return {
			config: {
				data: [
					["行1列1", "行1列2", "行1列3"],
					["行2列1", "行2列2", "行2列3"],
					["行3列1", "行3列2", "行3列3"],
					["行4列1", "行4列2", "行4列3"],
					["行5列1", "行5列2", "行5列3"],
					["行6列1", "行6列2", "行6列3"],
					["行7列1", "行7列2", "行7列3"],
					["行8列1", "行8列2", "行8列3"],
					["行9列1", "行9列2", "行9列3"],
					["行10列1", "行10列2", "行10列3"],
				],
			},
			config1: {
				data: [
					{
						name: "南阳",
						value: 167,
					},
					{
						name: "周口",
						value: 67,
					},
					{
						name: "漯河",
						value: 123,
					},
					{
						name: "郑州",
						value: 55,
					},
					{
						name: "西峡",
						value: 98,
					},
				],
			},
			options: {
				theme: "#1476d1",
				video: {
					url:
						"http://www.xiaogan.gov.cn/u/cms/www/201902/271026196oyj.mp4",
					pic:
						"http://xiaogan.gov.cn/u/cms/www/201902/28091318ce87.png",
					// type: "hls",
				},
				// screenshot: true, // 开启截图
				contextmenu: [
					{
						text: "custom1",
						link: "https://github.com/DIYgod/DPlayer",
					},
					{
						text: "custom2",
						click: (player) => {
							console.log(player);
						},
					},
				],
			},
		};
	},
};
</script>

<style lang="scss">
.datav-page {
	height: 100%;
	background-color: rgb(12, 30, 73);
	font-size: 24px;
	text-shadow: 0 0 3px #7acaec;
	color: rgb(126, 198, 153);
	user-select: none;
}

.index-box {
	box-sizing: border-box;
	padding: 50px 20px 20px 20px;
}

.border-box {
	box-sizing: border-box;
}

.padding-10 {
	padding: 10px;
}

.margin-center {
	margin: 0 auto;
}

.margin-top-20 {
	margin-top: 20px;
}

// .flex-center {
// 	.border-box-content {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		user-select: none;
// 		flex-direction: column;
// 	}
// }
</style>