<template>
  <ul class="container-box">
    <li class="container-item">
      <el-row>
        <el-col :span="2">
          <div class="grid-content bg-purple container-text">黄文</div>
        </el-col>
        <el-col :span="22">
          <div class="grid-content bg-purple-light">
            <el-progress :text-inside="true" :stroke-width="30" :percentage="70" status="success"></el-progress>
          </div>
        </el-col>
      </el-row>
    </li>
     <li class="container-item">
      <el-row>
        <el-col :span="2">
          <div class="grid-content bg-purple container-text">李成</div>
        </el-col>
        <el-col :span="22">
          <div class="grid-content bg-purple-light">
            <el-progress :text-inside="true" :stroke-width="30" :percentage="60" status="success"></el-progress>
          </div>
        </el-col>
      </el-row>
    </li>
     <li class="container-item">
      <el-row>
        <el-col :span="2">
          <div class="grid-content bg-purple container-text">张继婵</div>
        </el-col>
        <el-col :span="22">
          <div class="grid-content bg-purple-light">
            <el-progress :text-inside="true" :stroke-width="30" :percentage="80" status="success"></el-progress>
          </div>
        </el-col>
      </el-row>
    </li>
  </ul>
</template>

<style scoped>
.container-box{
    list-style: none;
    width:75%;
    margin-top: 80px;
    
    
       
    }
    .container-item{
        margin-bottom: 30px;
        
        
    }

    .container-text{
            font-size:23px;

        }

</style>



