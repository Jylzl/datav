<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2021-03-02 10:09:07
 * @LastAuthor: lizlong
 * @lastTime: 2021-03-05 10:44:44
-->
<template>
	<dv-decoration-1 style="position: absolute;width:200px;height:50px;" />
</template>

<script>
export default {
	props: {
		style: {
			require: true,
			type: Object,
		},
	},
};
</script>