<template>
  <div>
    <div class="content" v-for="(item,index) in serviceList" :key="index">
      <h2>
        {{item.name}}
      </h2>
      <div class="imgBox">
        <el-image
        v-for="(img,index) in item.list"
        :key="index"
        style="width: 100px; height: 100px"
        :src="img.emojiDetail"
        fit="contain"></el-image>
      </div>
    </div>
    <pagination :total="total" :page.sync="pageNumb" :limit.sync="pageSize" @pagination="getList" />
  </div>
</template>

<script>
  import {
 
  getServicePackage,
  getCount
  
} from "@/api/emojiPic";

export default {

data(){
  return{
    serviceList:[],
    tableData:[],
    pageNumb: 1,
		pageSize: 3,
		total: 0,
  }
},
created(){
  this.getList()
  this.getImgCount()
},
methods:{
  getImgCount(){
    getCount().then(res=>{
      this.total = res
      console.log(res);
    })
  },
  getList() {

      let self = this;
      let limit = self.pageSize
      let skip = (self.pageNumb - 1) * self.pageSize
      getServicePackage(skip,limit)
        .then((res) => {
          console.log(res);
          this.serviceList = res;
          self.parentId = res[0].id;
          self.title = res[0].name;
          self.rowList = res[0];
        })
        .catch((err) => {
          self.$notify.error(
            "获取图片列表失败：" + err.response.data.error.message
          );
        });
    },

}
}
</script>

<style>
.content{
  margin-bottom: .2667rem !important;
}
.el-image{
  margin: .04rem !important;
}
</style>