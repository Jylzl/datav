<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2021-03-03 18:10:34
 * @LastAuthor: lizlong
 * @lastTime: 2021-03-04 18:05:15
-->

<template>
	<div class="datav-page">
		<dv-full-screen-container style="position: relative;">
			<!-- <template v-for="(item,index) in components"> -->
			<!--页面组件列表展示-->
			<Shape v-for="item in components" :key="item.key" :active="true">
				<component :is="'c-'+item.component" :data="item"></component>
			</Shape>
			<!-- </template> -->
		</dv-full-screen-container>
	</div>
</template>

<script>
import Shape from "@/components/datav/Shape.vue";

import dvBorder1 from "@/components/datav/components/border/c-dv-border-1.vue";
import dvBorder2 from "@/components/datav/components/border/c-dv-border-2.vue";
import dvBorder3 from "@/components/datav/components/border/c-dv-border-3.vue";
import dvBorder4 from "@/components/datav/components/border/c-dv-border-4.vue";
import dvBorder5 from "@/components/datav/components/border/c-dv-border-5.vue";
import dvBorder6 from "@/components/datav/components/border/c-dv-border-6.vue";
import dvBorder7 from "@/components/datav/components/border/c-dv-border-7.vue";
import dvBorder8 from "@/components/datav/components/border/c-dv-border-8.vue";
import dvBorder9 from "@/components/datav/components/border/c-dv-border-9.vue";
import dvBorder10 from "@/components/datav/components/border/c-dv-border-10.vue";
import dvBorder11 from "@/components/datav/components/border/c-dv-border-11.vue";
import dvBorder12 from "@/components/datav/components/border/c-dv-border-12.vue";
import dvBorder13 from "@/components/datav/components/border/c-dv-border-13.vue";

import dvDecoration13 from "@/components/datav/components/decoration/c-dv-decoration-1.vue";

export default {
	components: {
		Shape,
		"c-dv-border-Box-1": dvBorder1, //表单设计
		"c-dv-border-Box-2": dvBorder2, //表单设计
		"c-dv-border-Box-3": dvBorder3, //表单设计
		"c-dv-border-Box-4": dvBorder4, //表单设计
		"c-dv-border-Box-5": dvBorder5, //表单设计
		"c-dv-border-Box-6": dvBorder6, //表单设计
		"c-dv-border-Box-7": dvBorder7, //表单设计
		"c-dv-border-Box-8": dvBorder8, //表单设计
		"c-dv-border-Box-9": dvBorder9, //表单设计
		"c-dv-border-Box-10": dvBorder10, //表单设计
		"c-dv-border-Box-11": dvBorder11, //表单设计
		"c-dv-border-Box-12": dvBorder12, //表单设计
		"c-dv-border-Box-13": dvBorder13, //表单设计
		"c-dv-decoration-1": dvDecoration13, //表单设计
	},
	props: {
		components: {
			type: Array,
			default() {
				return [];
			},
		},
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
</style>
