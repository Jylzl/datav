<template>
	<el-container class="p-config">
		<el-header class="config-header">
			<el-menu
				:default-active="activeIndex"
				class="config-header-menu"
				mode="horizontal"
				@select="handleSelect"
				background-color="#161a23"
				text-color="#ffffff"
				active-text-color="#00baff"
			>
				<el-menu-item index="1">大屏管理</el-menu-item>
				<el-menu-item index="2">地图管理</el-menu-item>
				<el-menu-item index="3">分类管理</el-menu-item>
			</el-menu>
		</el-header>
		<el-main>
			<!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
			<div class="view-box">
				<el-row :gutter="20">
					<el-col :span="6" class="item-box">
						<div class="item item-add" @click="add">
							<div class="add">
								<i class="el-icon-plus"></i>
								<p>新建</p>
							</div>
						</div>
					</el-col>
					<el-col :span="6" v-for="i in list" :key="i.id" class="item-box">
						<div class="item item-view">
							<div class="view-img">
								<img :src="i.viewImg" alt />
							</div>
							<div class="view-bar">
								<div>
									<el-link
										:underline="false"
										type="primary"
										target="_blank"
										:href="'/view/'+i.id"
									>{{i.title}}</el-link>
								</div>
								<div>
									<el-tooltip effect="dark" content="浏览" placement="top">
										<el-button type="text" @click="view(i.id)">
											<i class="el-icon-view"></i>
										</el-button>
									</el-tooltip>
									<el-tooltip effect="dark" content="编辑" placement="top">
										<el-button type="text" @click="edit(i.id)">
											<i class="el-icon-edit"></i>
										</el-button>
									</el-tooltip>
									<el-tooltip effect="dark" content="删除" placement="top">
										<el-button type="text" @click="del(i.id)">
											<i class="el-icon-delete"></i>
										</el-button>
									</el-tooltip>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="view-paging" v-if="false">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="[50,100, 200, 300, 400]"
					:page-size="50"
					layout="total, sizes, prev, pager, next, jumper"
					:total="400"
					background
				></el-pagination>
			</div>
			<!-- </el-scrollbar> -->
		</el-main>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: "1",
			currentPage: 5,
			list: [
				{
					id: 1,
					title: "数据大屏一",
					viewImg:
						"https://oss.bladex.vip/caster/upload/20201120/59ed8621a5e3518aeea50a78f48de52f.jpg",
				},
				{
					id: 2,
					title: "数据大屏二",
					viewImg:
						"https://oss.bladex.vip/caster/upload/20201123/abe47c7959de86f7b1b7e6134b7c8e7c.jpg",
				},
				{
					id: 3,
					title: "数据大屏三",
					viewImg:
						"https://oss.bladex.vip/caster/upload/20201120/ba6387c840d534047d55dc65e97b2ae4.jpg",
				},
				{
					id: 4,
					title: "数据大屏四",
					viewImg:
						"https://oss.bladex.vip/caster/upload/20201122/2bcf7deba047b28954099fea71b64c29.jpg",
				},
			],
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
		add() {
			console.log("add");
		},
		del(id) {
			console.log(id);
			console.log("del");
			this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					this.$message({
						type: "success",
						message: "删除成功!",
					});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				});
		},
		edit(id) {
			console.log(id);
			console.log("edit");
			this.$confirm("此文件处于发布状态, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					this.$router.push({ name: "Edit", params: { id } });
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				});
		},
		view(id) {
			console.log(id);
			console.log("view");
			let routeData = this.$router.resolve({
				name: "View",
				params: { id },
			});
			window.open(routeData.href, "_blank");
		},
	},
};
</script>

<style scoped>
.p-config {
	height: 100%;
	color: #000;
	background-color: #171b22;
}
.p-config .config-header {
	padding: 0;
}
.p-config .config-header .config-header-menu {
	border-bottom: none;
	background-color: #161a23;
	background-image: url(https://data.avuejs.com/img/header.jpg);
	background-repeat: no-repeat;
	background-position: center right;
}

.item-box {
	margin-bottom: 20px;
}

.item {
	position: relative;
	box-sizing: border-box;
	height: 260px;
	border: 1px solid #3a4659;
	/* background-color: #fff; */
}

.item-add {
	border: 1px solid #00baff;
	font-size: 14px;
	color: #8eeeff;
	background-image: linear-gradient(
		-90deg,
		rgba(0, 222, 255, 0.39),
		rgba(0, 174, 255, 0.19)
	);
	-webkit-box-shadow: 0 0 10px 0 rgba(55, 224, 255, 0.3);
	box-shadow: 0 0 10px 0 rgba(55, 224, 255, 0.3);
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	cursor: pointer;
}

.item-add .add {
	font-size: 20px;
	text-align: center;
}

.item-add .add p {
	font-size: 16px;
	margin-top: 10px;
}

.view-img {
	box-sizing: border-box;
	height: 100%;
	/* padding-bottom: 32px; */
}

.view-img img {
	display: block;
	width: 100%;
	height: 100%;
}

.view-bar {
	box-sizing: border-box;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 32px;
	padding: 0 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.3);
	color: #fff;
	font-size: 14px;
	line-height: 32px;
}

.view-paging {
	text-align: center;
}
</style>