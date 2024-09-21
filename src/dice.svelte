<div class="cube-container">
    <div class="cube">
      <div class="face front"><img src = "https://imgs.search.brave.com/F3RdBmHdtXn9axtOEhZvhg2dGCLOKdxmkIBo02rU-0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucmFpc2luLmRp/Z2l0YWwvY2RuLWNn/aS9pbWFnZS9maXQ9/Y292ZXIsd2lkdGg9/NjAwLGhlaWdodD02/MDAvbWVkaWEvd2lu/ZW1ha2Vycy9mZWxp/cGUtcmF1cHAteWFu/aXMtY2FybmFsLTY2/NzE4NS5qcGc"></div>
      <div class="face back">Bdack</div>
      <div class="face right">Right</div>
      <div class="face left">Left</div>
      <div class="face top">Top</div>
      <div class="face bottom">Bottom</div>
    </div>
  </div>
<style>
    /* From Uiverse.io by KhaledMatalkah */ 
.cube-container {
  width: 200px;
  height: 200px;
  perspective: 800px;
  margin: 50px auto;
}

.cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate 8s infinite linear;
}

.face {
  position: absolute;
  width: 200px;
  height: 200px;
  color: rgb(214, 21, 21);
  font-size: 18px;
  text-align: center;
  line-height: 200px;
  background: transparent;
  opacity: 0.9;
  border: 2px solid;
  border-image: linear-gradient(to right, #ff6b6b, #355c7d, #557d35, #cfcf16, #a51f1f) 1;
  box-shadow: 0 0 100px rgba(245, 8, 8, 0.8);
}

.front {
  transform: translateZ(100px);
}

.back {
  transform: rotateY(180deg) translateZ(100px);
}

.right {
  transform: rotateY(90deg) translateZ(100px);
}

.left {
  transform: rotateY(-90deg) translateZ(100px);
}

.top {
  transform: rotateX(90deg) translateZ(100px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

.cube-container:hover .cube {
  animation-play-state: paused;
}

@keyframes rotate {
  0% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}

</style>  