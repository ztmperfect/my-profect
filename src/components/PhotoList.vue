<template>
  <div class="user-photopage">
    <ul style="padding:0px;">
      <li style="list-style:none;">
        <div class="item-date">2019/7/25</div>
        <template>
          <viewer :images="images">
            <div>
              
                <img v-for="src in images" :src="src" :key="src" width="300" style="padding:5px;" />
               
              
              
            </div>
          </viewer>
        </template>
      </li>
    </ul>
  </div>
</template>
     


<script >
export default {
  name: "images",
  data() {
    return {
      images: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
      ]
    };
  },
  created() {
    //图片是从后台查的
    this.getData();
  },
  methods: {
    getData() {
      var _this = this;
      _this.$http
        .get("/admin/attach/product")
        .then(function(response) {
          _this.images = response.data.data;
        })
        
    }
  }
};
</script>
 


<style lang="scss" scoped>
.item-date {
  background-color: #333;
  width: 110px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 5px;
  color: #f2f2f2;
}
</style>


