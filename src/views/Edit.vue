<template>
	<el-container class="datav-editor">
		<el-header height="60px" class="editor-header">
			<div class="header-top">
				<div class="header-top-left">
					<el-dropdown trigger="click" size="medium">
						<el-button type="text" class="el-dropdown-link" size="mini">编辑(E)</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>新建</el-dropdown-item>
							<el-dropdown-item>打开</el-dropdown-item>
							<el-dropdown-item>保存</el-dropdown-item>
							<el-dropdown-item>预览</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<el-dropdown trigger="click" size="medium">
						<el-button type="text" class="el-dropdown-link" size="mini">图像(I)</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>新建</el-dropdown-item>
							<el-dropdown-item>打开</el-dropdown-item>
							<el-dropdown-item>保存</el-dropdown-item>
							<el-dropdown-item>预览</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<el-dropdown trigger="click" size="medium">
						<el-button type="text" class="el-dropdown-link" size="mini">图层(L)</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>新建</el-dropdown-item>
							<el-dropdown-item>打开</el-dropdown-item>
							<el-dropdown-item>保存</el-dropdown-item>
							<el-dropdown-item>预览</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<el-dropdown trigger="click" size="medium">
						<el-button type="text" class="el-dropdown-link" size="mini">文字(Y)</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>新建</el-dropdown-item>
							<el-dropdown-item>打开</el-dropdown-item>
							<el-dropdown-item>保存</el-dropdown-item>
							<el-dropdown-item>预览</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
			<div class="header-bottom">
				<div class="header-bottom-left">
					<el-button type="text" size="mini">
						<i class="el-icon-s-data"></i>
					</el-button>
					<el-button type="text" size="mini">
						<i class="el-icon-arrow-left"></i>
					</el-button>
					<el-button type="text" size="mini">
						<i class="el-icon-arrow-right"></i>
					</el-button>
					<el-button type="text" size="mini">
						<i class="el-icon-arrow-up"></i>
					</el-button>
					<el-button type="text" size="mini">
						<i class="el-icon-arrow-down"></i>
					</el-button>
				</div>
			</div>
		</el-header>
		<el-main class="editor-body">
			<el-container class="h100">
				<el-aside width="44px" class="left">
					<div class="datav-editor-left-bar">
						<div class="bar-item">
							<el-popover placement="right" width="400" trigger="hover">
								<div>1111</div>
								<el-button type="text" slot="reference">
									<i class="el-icon-s-data"></i>
								</el-button>
							</el-popover>
						</div>
						<div class="bar-item">
							<el-popover placement="right" width="400" trigger="hover">
								<div>1111</div>
								<el-button type="text" slot="reference">
									<i class="el-icon-s-data"></i>
								</el-button>
							</el-popover>
						</div>
						<div class="bar-item">
							<el-popover placement="right" width="400" trigger="hover">
								<div>1111</div>
								<el-button type="text" slot="reference">
									<i class="el-icon-s-data"></i>
								</el-button>
							</el-popover>
						</div>
					</div>
					<el-menu
						default-active="1-4-1"
						class="datav-editor-left-bar"
						background-color="#212528"
						text-color="#ffffff"
						active-text-color="#00baff"
						@open="handleOpen"
						@close="handleClose"
						:collapse="isCollapse"
						v-if="false"
					>
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-s-data"></i>
								<span slot="title">图表</span>
							</template>
							<el-menu-item-group>
								<span slot="title">分组一</span>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<span slot="title">选项4</span>
								<el-menu-item index="1-4-1">选项1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">导航二</span>
						</el-menu-item>
						<el-menu-item index="3" disabled>
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-main class="canvas-box">
					<div class="canvas-wrapper-top">123</div>
					<div class="canvas-wrapper-left"></div>
					<div class="canvas-wrapper" @scroll="scroll">
						<div id="content" class="screen-container">1</div>
					</div>
				</el-main>
				<el-aside width="200px">Aside</el-aside>
			</el-container>
		</el-main>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			isCollapse: true,
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		scroll(e) {
			console.log(e);
		},
	},
};
</script>

<style scoped>
.datav-editor {
	height: 100%;
	background-color: #454545;
	/* background: url(../assets/img/ps_bg.png); */
}

.datav-editor .editor-header {
	box-sizing: border-box;
	padding: 0;
	line-height: 23px;
	background-color: rgb(33, 37, 40);
}

.datav-editor .editor-header .header-top {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	align-content: space-between;
	height: 34px;
	padding: 0 10px;
	line-height: 34px;
	border-bottom: 1px solid #000;
}

.datav-editor .editor-header .header-top .el-dropdown {
	display: flex;
	align-items: center;
	margin-right: 10px;
}

.datav-editor .editor-header .header-top .header-top-left {
	display: flex;
	align-items: center;
}

.datav-editor .editor-header .header-bottom {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	align-content: space-between;
	height: 26px;
	line-height: 26px;
	padding-left: 44px;
}

.datav-editor .editor-header .header-top .header-bottom-left {
	display: flex;
	align-items: center;
}

.datav-editor .editor-body {
	padding: 0;
}

.datav-editor .left {
	background-color: rgb(33, 37, 40);
}

.datav-editor .datav-editor-left-bar {
	border-right: none;
	text-align: center;
}

.datav-editor .canvas-box {
	position: relative;
	width: 100%;
	height: 100%;
	padding: 20px 0 0 20px;
	overflow: hidden;
}

.datav-editor .canvas-wrapper-top {
	position: absolute;
	top: 0;
	left: 0;
	width: 10000px;
	height: 20px;
	background-color: #000;
	overflow: hidden;
}

.datav-editor .canvas-wrapper-left {
	position: absolute;
	top: 0;
	left: 0;
	width: 20px;
	height: 10000px;
	background-color: #000;
	overflow: hidden;
}

.datav-editor .canvas-wrapper {
	width: 100%;
	height: 100%;
	overflow: scroll;
}

.datav-editor .canvas-wrapper::-webkit-scrollbar {
	width: 6px;
	height: 6px;
}

.datav-editor .canvas-wrapper::-webkit-scrollbar-track {
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	/* background-color: #171b22; */
}

.datav-editor .canvas-wrapper::-webkit-scrollbar-thumb {
	border-radius: 3px;
	background: #ddd;
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	/* background-color: #3b3f46; */
	background: rgb(33, 37, 40);
}

.datav-editor .canvas-wrapper::-webkit-scrollbar-corner {
	background-color: #2a2e33;
}

.datav-editor .screen-container {
	position: relative;
	width: 5000px;
	height: 3000px;
	background: url(https://img.alicdn.com/tfs/TB184VLcPfguuRjSspkXXXchpXa-14-14.png)
		repeat;
}

.datav-editor .canvas-scrollbar-wrapper {
	width: 100%;
	height: 100%;
}
</style>