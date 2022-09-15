<template>
<div class="aside">
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      >

    <template v-for="(i,index) in navlist">
          <el-submenu :index="i.path" :key="index" v-if="i.children">
            <template slot="title">
              <i :class="i.icon"></i>
              <span>{{i.title}}</span>
            </template>
            <el-menu-item-group v-for="(item,inx) in i.children" :key="inx">
              <el-menu-item :index="item.path">{{item.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

      <el-menu-item :index="i.path" :key="i.index" v-else>
          <i :class="i.icon"></i>
          <span>{{i.title}}</span>
      </el-menu-item>
    </template>
  </el-menu>

 

</div>
</template>

<script>


export default {
data(){
    return{
        navlist:[
            {path:'/',icon:'el-icon-plus',title:'首页'},
            {path:'/emoji',icon:'el-icon-plus',title:'表情包'}
        ]
    }
},

mounted() {
  
    this.autoDom()
    window.onresize = () =>{
      this.autoDom()
    }
  },
  methods:{
    autoDom(){
      let dom = document.querySelector('.aside')
      let autoDom = document.documentElement.clientHeight
      let header = document.querySelector('.header')
      dom.style.height = (autoDom -10) + 'px'
      console.log(header.style.height)
    }
  }

}
</script>

<style>

</style>