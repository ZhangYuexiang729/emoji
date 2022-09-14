<template>
  <div>
    表情包页123
    <button @click="getList">点击</button>
  </div>
</template>

<script>
  import {
 
  getServicePackage,
  
} from "@/api/emojiPic";
export default {
data(){
  return{
    serviceList:[],
    tableData:[]
  }
},
methods:{
  getList() {
      let self = this;
      getServicePackage(0)
        .then((res) => {
          console.log(res);
          this.serviceList = res;
          self.parentId = res[0].id;
          self.title = res[0].name;
          self.rowList = res[0];
        })
        .catch((err) => {
          self.$notify.error(
            "获取服务包列表失败：" + err.response.data.error.message
          );
        });
    },
    getDeatils() {
      let self = this;
      getServicePackage(self.parentId)
        .then((res) => {
          
          self.tableData = res;
        })
        .catch((err) => {
          self.$notify.error(
            "获取服务包详情失败：" + err.response.data.error.message
          );
        });
    },
}
}
</script>

<style>

</style>