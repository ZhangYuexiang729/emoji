<template>
    <el-container>
  <!--   头部  -->
      <el-header>
  <!--   头部内容-->
        <VueHeader />
      </el-header>
  <!--   头部结束 -->
      <el-container>
  <!--   侧边栏  -->
        <el-aside >
  <!--   侧边栏内容-->
          <VueAside />
        </el-aside>
  <!--   侧边栏结束   -->
        <el-container>
  <!--   内容     -->
          <el-main>
  <!--   内容主体       -->
            <vue-content />
  <!--   脚部       -->
            <el-footer>
  <!--   脚部内容         -->
              <VueFooter/>
  <!--   脚部结束         -->
            </el-footer>
          </el-main>
  <!--   内容结束     -->
        </el-container>
      </el-container>
    </el-container>
  </template>
  
<script>
  import VueHeader from "./header/header.vue"  
  import VueAside from "./aside/aside.vue"
  import VueContent from "./content/content.vue"
  import VueFooter from "./footer/footer.vue"
export default {
    components:{VueHeader,VueAside,VueContent,VueFooter}

}
</script>

<style>
.el-header{
    margin: 0;
    padding: 0;
    height: .6667rem !important;
}
.el-aside{
  width: 1.3333rem !important;
}

</style>