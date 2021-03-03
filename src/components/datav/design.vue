<template>
	<el-container class="datav-editor" oncontextmenu="self.event.returnValue=false">
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
						<el-button type="text" class="el-dropdown-link" size="mini">插入(I)</el-button>
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
				<div class="header-top-right">
					<el-button type="text" size="mini">
						<i class="el-icon-minus"></i>
					</el-button>
					<el-button type="text" size="mini" @click="clickFullscreen">
						<i class="el-icon-copy-document"></i>
					</el-button>
					<el-button type="text" size="mini" @click="clickClosescreen">
						<i class="el-icon-close"></i>
					</el-button>
				</div>
			</div>
			<div class="header-bottom">
				<div class="header-bottom-left">
					<el-button type="text" size="mini">
						<span class="icon iconfont icon-zuoduiqi"></span>
					</el-button>
					<el-button type="text" size="mini">
						<span class="icon iconfont icon-juzhongduiqi"></span>
					</el-button>
					<el-button type="text" size="mini">
						<span class="icon iconfont icon-youduiqi"></span>
					</el-button>
					<el-button type="text" size="mini">
						<span class="icon iconfont icon-zuoyouduiqi"></span>
					</el-button>
					<el-button type="text" size="mini" @click="orientation">
						<span class="icon iconfont icon-dingwei"></span>
					</el-button>
				</div>
			</div>
		</el-header>
		<el-main class="editor-body">
			<el-container class="h100">
				<el-aside width="44px" class="left">
					<div class="datav-editor-left-bar">
						<div class="bar-item" v-for="c in components" :key="c.id">
							<el-popover placement="right" width="160" trigger="click">
								<div class="component-box">
									<div
										class="component-item"
										v-for="(cc,index) in c.children"
										:key="cc.id+index"
										@click="pushComponent(cc)"
									>
										<div class="component-icon">
											<i :class="cc.icon"></i>
										</div>
										<div class="component-title">{{cc.label}}</div>
									</div>
								</div>
								<el-button type="text" slot="reference">
									<i :class="c.icon"></i>
								</el-button>
							</el-popover>
						</div>
					</div>
				</el-aside>
				<el-main class="canvas-box">
					<div class="canvas-wrapper-top"></div>
					<div class="canvas-wrapper-left"></div>
					<div class="canvas-wrapper" ref="canvasWrapper" @scroll="scroll">
						<div id="content" class="screen-container">
							<div
								class="canvas"
								:class="cursor"
								v-on:mousedown.ctrl="ctrlMousedown"
								v-on:mouseup="ctrlMouseup"
								v-on:click.ctrl="ctrlClick"
							>
								<d-view :components="componentData"></d-view>
							</div>
						</div>
					</div>
				</el-main>
				<el-aside width="260px">1</el-aside>
			</el-container>
		</el-main>
	</el-container>
</template>

<script>
import screenfull from "screenfull";
import { components } from "@/components/datav/components/index.js";
import view from "@/components/datav/view.vue";

export default {
	components: {
		"d-view": view,
	},
	data() {
		return {
			components,
			cursor: "cursor-default",
			isFullscreen: false, //默认不全屏
			componentData: [], //组件
		};
	},
	mounted() {
		this.lisenScrol();
	},
	methods: {
		// 回到当前位置
		orientation() {
			this.$refs["canvasWrapper"].scrollTop = 200;
			this.$refs["canvasWrapper"].scrollLeft = 200;
		},
		/**
		 * 全屏
		 */
		clickFullscreen() {
			if (!screenfull.isEnabled) {
				this.$message({
					message: "you browser can not work",
					type: "warning",
				});
				return false;
			}
			screenfull.toggle();
		},
		clickClosescreen() {
			window.close();
		},
		// eslint-disable-next-line no-unused-vars
		scroll(e) {
			// console.log(e);
		},
		ctrlClick(e) {
			console.log(e);
		},
		ctrlMouseup(e) {
			console.log(e);
			this.cursor = "cursor-default";
		},
		ctrlMousedown(e) {
			console.log(e);
			this.cursor = "cursor-move";
		},
		lisenScrol() {
			let w = this;
			(document.onkeydown = function (e) {
				// console.log(e);
				if (e.keyCode === 17) w.ctrlDown = true;
			}),
				(document.onkeyup = function (e) {
					if (e.keyCode === 17) w.ctrlDown = false;
				}),
				this.$refs["canvasWrapper"].addEventListener(
					"mousewheel",
					(e) => {
						e.preventDefault();
						if (w.ctrlDown) {
							if (e.wheelDeltaY > 0) {
								// 放大
								console.log("放大");
							} else {
								// 缩小
								console.log("缩小");
							}
						}
					},
					false
				);
		},
		// 创建组件
		pushComponent(data) {
			console.log(JSON.stringify(data));
			this.componentData.push(data);
		},
	},
};
</script>

<style scoped>
.datav-editor {
	height: 100%;
	background-color: #454545;
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
	justify-content: space-between;
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

.datav-editor .canvas-box::before {
	content: " ";
	display: block;
	box-sizing: border-box;
	position: absolute;
	width: 20px;
	height: 20px;
	left: 0;
	top: 0;
	background-color: #181b24;
}

.datav-editor .canvas-wrapper-top {
	position: absolute;
	top: 0;
	left: 20px;
	width: 10000px;
	height: 20px;
	background: #181b24 url(../../assets/img/ruler_top.png) repeat-x;
	overflow: hidden;
}

.datav-editor .canvas-wrapper-left {
	position: absolute;
	top: 20px;
	left: 0;
	width: 20px;
	height: 10000px;
	background: #181b24 url(../../assets/img/ruler_left.png) repeat-y;
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
}

.datav-editor .canvas-wrapper::-webkit-scrollbar-thumb {
	border-radius: 3px;
	background: #ddd;
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	background: rgb(33, 37, 40);
}

.datav-editor .canvas-wrapper::-webkit-scrollbar-corner {
	background-color: #2a2e33;
}

.datav-editor .screen-container {
	position: relative;
	width: 5000px;
	height: 3000px;
	background: url(../../assets/img/canvas_bg.png) repeat;
}

.datav-editor .canvas-scrollbar-wrapper {
	width: 100%;
	height: 100%;
}

.datav-editor .canvas {
	position: relative;
	left: 200px;
	top: 200px;
	width: 1920px;
	height: 1080px;
	border: 1px dashed #fff;
	background-color: #181b24;
}

.bar-components-box {
	position: relative;
	width: 400px;
}

.component-box .component-item {
	box-sizing: border-box;
	height: 48px;
	padding: 0 10px;
	line-height: 15px;
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 14px;
	cursor: pointer;
}

.component-box .component-item:hover {
	background-color: #181b24;
}

.component-box .component-item .component-icon {
	color: #00baff;
	margin-right: 10px;
	width: 53px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	display: block;
	border: 1px solid #3a4659;
	background: #282a30;
}
</style>
