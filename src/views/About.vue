<template>
	<el-container class="datav-editor">
		<el-header height="46px" class="editor-header">Header</el-header>
		<el-main class="editor-body">
			<el-container class="h100">
				<el-aside width="200px">Aside</el-aside>
				<el-main class="padding-0">
					<div class="canvas-box">padding-0</div>
				</el-main>
				<el-aside width="200px">Aside</el-aside>
			</el-container>
		</el-main>
	</el-container>
</template>


<style scoped>
.datav-editor {
	height: 100%;
	background-color: #454545;
	/* background: url(../assets/img/ps_bg.png); */
}

.datav-editor .editor-header {
	line-height: 46px;
}

.datav-editor .editor-body {
	padding: 0;
}
</style>