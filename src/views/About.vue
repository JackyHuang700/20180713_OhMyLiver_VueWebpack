<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h3>每五秒更換動畫</h3>
      <h4>[教學] 利用CSS3動畫，實作圖片輪播效果(免用JS！)</h4>
      <h5>https://www.minwt.com/webdesign-dev/css/19715.html/comment-page-1#comment-22703</h5>
    </div>
    <div class="col-12">
      <div class="coverflow">
        <a><img src="../assets/logo.png"></a>
        <a><img src="../assets/logo.png"></a>
        <a><img src="../assets/logo.png"></a>
      </div>
    </div>
  </div>
</div>


</template>
<script>
export default {
  name: 'about',
  mounted () {},
}
</script>
<style lang="css" scoped>
.coverflow {
  margin: 0 auto;
  width: 100%;
  max-width: 200px;
  height: 190px;
  position: relative;
}
.coverflow > a {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  /*當圖片數量增加，影片長度需更改，變為5s*圖片數量*/
  -webkit-animation: silder 15s linear infinite;
  animation: silder 15s linear infinite;
}
.coverflow > a > img {
  max-width: 100%;
}

/*動畫關鍵影格*/
@-webkit-keyframes silder {
  3% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  27% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  30% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
}
@keyframes silder {
  3% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  27% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  30% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
}

/*每個圖片各延遲5秒*/
.coverflow > a:nth-child(3) {
  -webkit-animation-delay: 10s;
  animation-delay: 10s;
}

.coverflow > a:nth-child(2) {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}

.coverflow > a:nth-child(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
/*滑入時停止播放*/
.coverflow:hover > a {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
</style>