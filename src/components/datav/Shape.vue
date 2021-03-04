<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2021-03-04 17:48:28
 * @LastAuthor: lizlong
 * @lastTime: 2021-03-04 18:17:50
-->
<template>
	<div class="shape" :class="{ active }" style="width:200px;height:50px;">
		<div class="shape-point" v-for="item in pointList" :key="item"></div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		active: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			pointList: ["lt", "t", "rt", "r", "rb", "b", "lb", "l"], // 八个方向
			initialAngle: {
				// 每个点对应的初始角度
				lt: 0,
				t: 45,
				rt: 90,
				r: 135,
				rb: 180,
				b: 225,
				lb: 270,
				l: 315,
			},
			angleToCursor: [
				// 每个范围的角度对应的光标
				{ start: 338, end: 23, cursor: "nw" },
				{ start: 23, end: 68, cursor: "n" },
				{ start: 68, end: 113, cursor: "ne" },
				{ start: 113, end: 158, cursor: "e" },
				{ start: 158, end: 203, cursor: "se" },
				{ start: 203, end: 248, cursor: "s" },
				{ start: 248, end: 293, cursor: "sw" },
				{ start: 293, end: 338, cursor: "w" },
			],
			cursors: {},
		};
	},
	mounted() {},
	methods: {},
};
</script>

<style lang="scss" scoped>
.shape {
	position: absolute;
	&:hover {
		cursor: move;
	}
}
.active {
	outline: 1px dashed #70c0ff;
	user-select: none;
}
.shape-point {
	position: absolute;
	background: #fff;
	border: 1px solid #59c7f9;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	z-index: 1;
}
.icon-xiangyouxuanzhuan {
	position: absolute;
	top: -34px;
	left: 50%;
	transform: translateX(-50%);
	font-size: 16px;
	font-weight: 600;
	cursor: grab;
	color: #59c7f9;
	font-size: 20px;
	font-weight: 600;
	&:active {
		cursor: grabbing;
	}
}
.icon-suo {
	position: absolute;
	top: 0;
	right: 0;
}
</style>