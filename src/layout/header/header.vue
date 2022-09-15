<template>
  <div class="header">
    <div class="title">
      <div class="userImg">
        
      </div>
      <span class="titleText">图片库</span>
    </div>
    <div class="user">
      <i class="el-icon-sunny headerIcon"></i>
      <span class="GB">2022-09-15 </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  align-items: center;
}
.titleText{
    font-size: .2533rem;
    font-weight: bold;
}
.header {
  font-size: 0.1133rem;
  background: rgb(221, 233, 231);
  color: rgb(92, 92, 88);
  line-height: 30px;
  justify-content: space-between;
}
.gb {
  font-size: 0.1333rem;
}
.header,
.user ,
.title{
  display: flex;
}
.userImg {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: black;
  background-image: url('../../assets/logo.png');
  background-size: contain;
}
.userImg img{
  width: 0.4rem;
}
.user {
  align-items: center;
}
.headerIcon,
.gb,
.userImg {
  margin-right: 0.1333rem;
}
</style>