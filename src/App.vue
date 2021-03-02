<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
@import url(./assets/css/rest.min.css);
@import url(./assets/css/animate.css);
@import url(./assets/iconfont/font_a76i5gq2fgq/iconfont.css);
html,
body,
#app {
	height: 100%;
	margin: 0;
}

.w100 {
	width: 100% !important;
}

.h100 {
	height: 100% !important;
}

.cursor-move {
	cursor: move;
}

.cursor-default {
	cursor: default;
}
</style>