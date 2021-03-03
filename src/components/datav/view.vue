<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2021-03-03 18:10:34
 * @LastAuthor: lizlong
 * @lastTime: 2021-03-03 18:19:22
-->

<template>
	<div class="datav-page">
		<dv-full-screen-container style="position: relative;">
			<template v-for="(item,index) in components">
				<component :is="item.component" :data="item" :key="index"></component>
			</template>
		</dv-full-screen-container>
	</div>
</template>

<script>
import dvBorder1 from "@/components/datav/components/border/dv-border-1.vue";

export default {
	components: {
		"dv-border-1": dvBorder1, //表单设计
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
