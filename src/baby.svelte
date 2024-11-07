<script >
    //#red
    
      import timer from './timer.svelte';
      import Only_scott from './docker/only_scott.svelte';
      import App from './main_2D_world/mj/App.svelte';
      import Apps from './main_2D_world/scott/Apps.svelte';
      import Gays from './main_2D_world/swift/gays.svelte';
      import LazyLoad from './LazyLoad.svelte';
      // import Load from './load.svelte';
      import cr from './docker/onlymj.svelte';
      import { onMount } from 'svelte';
      import Cr from './docker/onlymj.svelte';
      import Loader from './loader.svelte';
      import Only_Swift from './docker/only_swift.svelte';
      import Timer from './timer.svelte';
      let showDiv = false;
      import Rap from './main_2D_world/bottle/rap.svelte';
      import Finger from './finger.svelte';
      import OnlyBasement from './docker/only_basement.svelte';
     
    
    
    
    //#
        // Create a date for 10 AM, 12th December 2024 in IST
        const istTime = new Date('2024-10-12T10:00:00+05:30'); // +05:30 is the offset for IST
    
        // Convert IST time to the user's local timezone
        
    var total = 100; 
    
    const localTime = istTime.toLocaleString();
    
    
    const speed = { followers: 10, likes: 10, position: 5,                     prg: function() { return (this.followers / total) * 100; } }; //#green
    
    
    const travis_scott = { followers: 1, likes: 5, position: 5,                                  prg: function() { return (this.followers / total) * 100; } }; //#orange
    
    const taylor_swift = { followers: 1, likes: 5, position: 5,                                   prg: function() { return (this.followers / total) * 100; } }; //#purple
    
    const basement = { followers: 1, likes: 5, position: 5,                                        prg: function() { return (this.followers / total) * 100; } }; //#blue
    
    
      onMount(() => {
        setTimeout(() => {
          showDiv = true;
        }, 3000); // 3000 milliseconds = 3 seconds
      });
      function updateCountdown() {
        const interval = setInterval(() => {
          if (secondsLeft > 0) {
            secondsLeft -= 1;
          } else {
            clearInterval(interval); // Stop the countdown when it reaches zero
          }
        }, 1000); // Update every second
      }
      
    </script>
    
    <slot />
  
  
  
    <Finger />
    
     {#if !showDiv}
    
    
    <Loader />
    
      <!-- The button to open modal -->
  
     {/if}  
    
    {#if showDiv}
      <div class="main">
        <div class="screen">
          
          <LazyLoad>
        <div class="red-box"></div> 
  
           
    
  
     <!-- TODO: tyalor swift start -->
     <br><br>
     <div class="divider divider-warning">⭐⭐⭐⭐⭐</div>
    <br>
     <div class = "outest" id ="swiftbg">

      
             
  
    
   
             <div class="aps">
               <Rap />
             </div>
     </div>
     
       
          </LazyLoad>
  
        </div>
      </div>
    
    {/if}
    
    <style>
  
    .table{
      zoom: 2s;
    }
      @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Permanent+Marker&display=swap');
      .alert{
        margin-left: 25%;
        margin-top: 10%;
        background-color: rgba(255, 208, 0, 0.299);
        border: 5px solid #ff9901b4;
        box-shadow: 100px 100px 900px  #e6ff01;
        width: 500px;
        height: 500px;
      }
      #swiftbg{
        border: 5px solid #0156ff;
        box-shadow: 100px 100px s 100px 100px  #210661;
        background-color: #4501ff1e;
      }
  
    
      #scottdiv{
        border: 5px solid #ffc401b4;
        box-shadow: 10px 10px 10px  #613e06a0;
        background-color: #ff95011e;
      }
    .outest {
      /* opacity: 0.5;
      background: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%); */
      /* padding-right: 50px; */
       border: 5px solid #01d5ffb4;
       box-shadow: 10px 10px 10px  #065261a0;
      /* padding-left: 150px; */
      padding-top: 40px;
      /* height: 600px; */
      height: 97vh;
      background-color: #00d9ff0f;
       width: 98vmax; 
    border-radius: 20px;
    margin-left: -60px;
    }
    .aps{
        background-color: #e6ff01;
        border-radius: 20%;
        margin-left: 5px;
        box-shadow: 20px 20px 20px rgb(13, 1, 14);;
        /* height: 450px; */
        height: 32rem;
        width: 93vmax;
      }
      
    
      
  
      p{
        color: rgb(128, 138, 148);
      }
      .namess{
        font-size: 30px;
        position: absolute;
        margin-top:-55px;
        margin-left: 60px;
      }
      .avatar {
        margin-left: 0px;
        margin-top:-10px;
        size: 10px;
      }
    .heart-container {
      margin-left: 240px;
      margin-top: -35px ;
      --heart-color: rgb(255, 0, 72);
      position: relative;
      width: 45px;
      height: 45px;
      transition: .3s;
    }
    .heart-container .checkbox {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 20;
      cursor: pointer;
    }
    .heart-container .svg-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .heart-container .svg-outline,.heart-container .svg-filled {
      fill: var(--heart-color);
      position: absolute;
    }
    
    .heart-container .svg-filled {
      animation: keyframes-svg-filled 1s;
      display: none;
    }
    
    .heart-container .svg-celebrate {
      position: absolute;
      animation: keyframes-svg-celebrate .5s;
      animation-fill-mode: forwards;
      display: none;
      stroke: var(--heart-color);
      fill: var(--heart-color);
      stroke-width: 2px;
    }
    .heart-container .checkbox:checked~.svg-container .svg-filled {
      display: block
    }
    .heart-container .checkbox:checked~.svg-container .svg-celebrate {
      display: block
    }
    @keyframes keyframes-svg-filled {
      0% {
        transform: scale(0);
      }
    
      25% {
        transform: scale(1.2);
      }
    
      50% {
        transform: scale(1);
        filter: brightness(1.5);
      }
    }
    @keyframes keyframes-svg-celebrate {
      0% {
        transform: scale(0);
      }
    
      50% {
        opacity: 1;
        filter: brightness(1.5);
      }
    
      100% {
        transform: scale(1.4);
        opacity: 0;
        display: none;
      }
    }
        /* FIXME: */
      :global(body, html) {
        margin: 0;
      }
  
      .screen {
        margin-left: 10%;
        margin-right: 10%;
        align-items: center;
        position: absolute;
        height: 10%;
        width: 70%;
      }
      .main {
       
        align-items: center;
      }
      
    #icomp-neon p a{
      color:#BA01FF;
      font-family: 'Audiowide', cursive;
    }
    #icomp-neon p a{
      -webkit-animation: neon6 1.5s ease-in-out infinite alternate;
      -moz-animation: neon6 1.5s ease-in-out infinite alternate;
      animation: neon6 1.5s ease-in-out infinite alternate;
    }
    
    #icomp-neon p a{
    color:#ffffff;  
    }
    @-webkit-keyframes neon6 {
      from {
        text-shadow: 0 0 10px #fff,
                   0 0 20px #fff,
                   0 0 30px #fff,
                   0 0 40px #ff00de,
                   0 0 70px #ff00de,
                   0 0 80px #ff00de,
                   0 0 100px #ff00de,
                   0 0 150px #ff00de;
      }
      to {
        text-shadow: 0 0 5px #fff,
                   0 0 10px #fff,
                   0 0 15px #fff,
                   0 0 20px #ff00de,
                   0 0 35px #ff00de,
                   0 0 40px #ff00de,
                   0 0 50px #ff00de,
                   0 0 75px #ff00de;
      }
    }
    
    
    @-moz-keyframes neon6 {
      from {
        text-shadow: 0 0 10px #fff,
                   0 0 20px #fff,
                   0 0 30px #fff,
                   0 0 40px #ff00de,
                   0 0 70px #ff00de,
                   0 0 80px #ff00de,
                   0 0 100px #ff00de,
                   0 0 150px #ff00de;
      }
      to {
        text-shadow: 0 0 5px #fff,
                   0 0 10px #fff,
                   0 0 15px #fff,
                   0 0 20px #ff00de,
                   0 0 35px #ff00de,
                   0 0 40px #ff00de,
                   0 0 50px #ff00de,
                   0 0 75px #ff00de;
      }
    }
    
    @keyframes neon6 {
      from {
        text-shadow: 0 0 10px #fff,
                   0 0 20px #fff,
                   0 0 30px #fff,
                   0 0 40px #ff00de,
                   0 0 70px #ff00de,
                   0 0 80px #ff00de,
                   0 0 100px #ff00de,
                   0 0 150px #ff00de;
      }
      to {
        text-shadow: 0 0 5px #fff,
                   0 0 10px #fff,
                   0 0 15px #fff,
                   0 0 20px #ff00de,
                   0 0 35px #ff00de,
                   0 0 40px #ff00de,
                   0 0 50px #ff00de,
                   0 0 75px #ff00de;
      }
    }
    
  
    
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
   
    
    /* .fire{
      text-align: center;
      font-family: 'Kaushan Script', cursive;
       top: 50%;
     margin-left: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: rgb(255, 115, 0);
      font-size: 7vmin;
      outline: none;
  
      text-shadow:
        0 0 20px crimson,
        0 0 20px crimson,
        0 0 10px crimson,
        5px -10px 10px orange,
        -5px -10px 10px yellow;
      animation: 2s amazing infinite alternate linear;
  } */
  
    @keyframes amazing {
      0%   { 
        text-shadow: 0 10px 20px crimson, 0 0 20px red,
        0 0 10px orange,
        0 0 10px darkorange,
        -5px -5px 5px yellow,
        10px -10px 10px yellow; 
      }
      25%   { 
        text-shadow: 0 10px 20px crimson, 0 0 20px red,
        0 0 20px orange,
        -5px -5px 5px yellow,
        5px -10px 10px yellow,
        -5px -10px 10px yellow; 
      }
      50%   { 
        text-shadow: 0 10px 20px crimson, 0 0 20px red,
        0 0 10px orange,
        0 0 10px darkorange,
        -5px -5px 5px yellow,
        10px -10px 10px yellow; 
      }
      75%   { 
        text-shadow: 0 10px 20px crimson, 0 0 20px red,
        0 0 20px orange,
        -5px -5px 5px yellow,
        5px -10px 10px yellow,
        -5px -10px 10px yellow; 
      }
      100%   { 
        text-shadow: 0 10px 20px crimson, 0 0 20px red,
        0 0 10px orange,
        0 0 10px darkorange,
        -5px -5px 5px yellow,
        10px -10px 10px yellow; 
      }
    }
    </style>
    
    
    
      
    
  
