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
  <p style="font-size: 40px; color: white;">SURPRISE IN</p><Timer />
  <p style="font-size: 20px; color: lightgreen;">UPDATED AT {localTime} <br>  </p>
   <br> 
  <br>
  <Finger />
  
  {#if !showDiv}
  
  
  <Loader />
    <!-- The button to open modal -->
    <div role="alert" class="alert alert-info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        class="h-20 w-20 shrink-0 stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span style="font-size: 40px; color: white;">USE YOUR FINGERS TO NAVIGATE 3D WORLDs</span>
    </div>
  {/if}
  
  {#if showDiv}
    <div class="main">
      <div class="screen">
        
        <LazyLoad>
      <div class="red-box"></div> <!-- Red box in the extreme right corner -->
  
  <!--  FIXME: FIXME:  michel jackson  start -->
  <div class="divider divider-warning">⭐⭐⭐⭐⭐</div> <br> <br>
  
  <div class = "outest">
   
    <div class="indicator">
      <span class="indicator-item badge badge-warning">#{speed.position}</span>
    
          <div class="avatar"> </div>
            <div class="w-12 rounded-full">
              <img src="https://images-wixmp-ed30a86b8c4ca8877731154c2.wixmp.com/f/07ed52f9-65de-4d91-afc1-6d91154f0de81/dgrlexe-c422f5f4-26f5-4cce-a070-13bfb07b4638.png/v1/fit/w_828,h_608,q_70,strp/i_show_speed__1_by_mrorlandomagicfan200_dgrlexe-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTE0IiwicGF0aCI6IlwvZlwvMDdlZDUyZjktNjVkZS00ZDkxLWFmYzEtNmQ5NTk0ZjBkZTgxXC9kZ3JsZXhlLWM0MjJmNWY0LTI2ZjUtNGNjZS1hMDcwLTEzYmZiMDdiNDYzOC5wbmciLCJ3aWR0aCI6Ijw9MTI0NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GBdiBzg385vvRL0tYuF_tzoJ62uLdbom2kMvw_AFPNE" alt="Speed Indicator" />
              
            </div>
          </div>
          
          <h1 class="namess">I SHOW ****</h1><br>
          <h1 class="info">{speed.followers} / {total} Members</h1>
          <progress class="progress progress-warning w-56" value={speed.prg()} max="100"></progress>
  
                           <!--  TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO:-->
  
          <!-- like count start  TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: :TODO:-->
  
          <div class="heart-container" title="Like">
            <input type="checkbox" class="checkbox" id="Give-It-An-Id">
            <div class="svg-container">
              <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
            <p>{speed.likes}</p>
            
          </div>
          <br><br>
          
  
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background-color:black; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.115,36.186 560.115,34.131 C560.115,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.6115,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,115.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.6115,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,115.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by +Aura (@plus_aura_moments)</a></p></div></blockquote>
  <script async src="//www.instagram.com/embed.js"></script>
  <Cr />
          
          <div class="aps">
            <App />
          </div>
  </div>
                           <!--  TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO:-->
  
          <!-- like count end    TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: :TODO: -->
          <!-- card -->
           
           <!-- card -->
          <br>
          <br>
          <br><br>
          
          <div class="divider divider-warning">🎸🎸🎸🎸🎸</div>
          
  <!-- FIXME:  michel jackson end -->
  
  <!--  -->
  
  <!--  -->
  
  
  
  
          <br><br>
  
   <!-- TODO: travis scott start -->
    
  
          <div class="divider divider-warning">⭐⭐⭐⭐⭐</div> <br> <br>
  
  <div class = "outest" id ="scottdiv">
   
    <div class="indicator">
      <span class="indicator-item badge badge-warning">#1</span>
    
          <div class="avatar"> </div>
            <div class="w-12 rounded-full">
              <img src="https://i.ytimg.com/vi/wYeFAlVC8qU/maxresdefault.jpg" alt = "scott" />
              
            </div>
          </div>
          
          <h1 class="namess">Travis Scott</h1>
          <h1 class="info">11 / 115 Members</h1>
          <progress class="progress progress-success w-56" value="9.986" max="100"></progress>
  
                           <!--  TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO:-->
  
          <!-- like count start  TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: :TODO:-->
  
          <div class="heart-container" title="Like">
            <input type="checkbox" class="checkbox" id="Give-It-An-Id">
            <div class="svg-container">
              <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
            <p>3</p>
            
          </div>
         
          <br><br>
          
  
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background-color:black; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.115,36.186 560.115,34.131 C560.115,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.6115,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,115.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.6115,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,115.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by +Aura (@plus_aura_moments)</a></p></div></blockquote>
  <script async src="//www.instagram.com/embed.js"></script><br><br>
  <div class="divider divider-error"></div>
  <Only_scott />
          
          <div class="aps">
            <Apps />
          </div>
  </div><br><br>
  <div class="divider divider-warning">⭐⭐⭐⭐⭐</div> 
    <!-- TODO: travis scott ends -->
  
  <br>
  <br>
  <br>
    
   <!-- TODO: tyalor swift start -->
    
   <div class="divider divider-warning">⭐⭐⭐⭐⭐</div> <br> <br>
  
   <div class = "outest" id ="swiftbg">
    
     <div class="indicator">
       <span class="indicator-item badge badge-warning">#1</span>
     
           <div class="avatar"> </div>
             <div class="w-12 rounded-full">
               <img src="https://people.com/thmb/hGBx2o9so78bb7NZQ_WWPGhBU8c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1045x501:1047x503)/Taylor-Swift-Reputation-081824-01-9c2cc19b358f42fbb8ae582b8e12c027.jpg" alt="Swift" />
               
             </div>
           </div>
           
           <h1 class="namess">Taylor Swift</h1>
           <h1 class="info">7 / 115 Members</h1>
           <progress class="progress progress-success w-56" value="6" max="100"></progress>
   
                            <!--  TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO:-->
   
           <!-- like count start  TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: :TODO:-->
   
           <div class="heart-container" title="Like">
             <input type="checkbox" class="checkbox" id="Give-It-An-Id">
             <div class="svg-container">
               <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                 <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
               </svg>
               <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                 <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
               </svg>
               <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                 <polygon points="10,10 20,20"></polygon>
                 <polygon points="10,50 20,50"></polygon>
                 <polygon points="20,80 30,70"></polygon>
                 <polygon points="90,10 80,20"></polygon>
                 <polygon points="90,50 80,50"></polygon>
                 <polygon points="80,80 70,70"></polygon>
               </svg>
             </div>
             <p>2</p>
             
           </div>
          
           <br><br>
           
   
     <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background-color:black; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.115,36.186 560.115,34.131 C560.115,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.6115,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,115.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.6115,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,115.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by +Aura (@plus_aura_moments)</a></p></div></blockquote>
   <script async src="//www.instagram.com/embed.js"></script><br><br>
   <div class="divider divider-error"></div>
   <Only_Swift />
           
           <div class="aps">
             <Gays />
           </div>
   </div>
   
     <!-- TODO: tailorswift scott ends -->
  
  
      <!-- TODO: bottle start -->
    
   <div class="divider divider-warning">⭐⭐⭐⭐⭐</div> <br> <br>
  
   <div class = "outest" id ="bottle">
    
     <div class="indicator">
       <span class="indicator-item badge badge-warning">#1</span>
     
           <div class="avatar"> </div>
             <div class="w-12 rounded-full">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SKjQwwry_Eh3nezlxOmbGhS5mRxfgsuSng&s" alt= "img" />
               
             </div>
           </div>
           
           <h1 class="namess">baby oil</h1>
           <h1 class="info">7 / 115 Members</h1>
           <progress class="progress progress-success w-56" value="10" max="100"></progress>
   
                            <!--  TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO:-->
   
           <!-- like count start  TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: :TODO:-->
   
           <div class="heart-container" title="Like">
             <input type="checkbox" class="checkbox" id="Give-It-An-Id">
             <div class="svg-container">
               <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                 <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
               </svg>
               <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                 <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
               </svg>
               <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                 <polygon points="10,10 20,20"></polygon>
                 <polygon points="10,50 20,50"></polygon>
                 <polygon points="20,80 30,70"></polygon>
                 <polygon points="90,10 80,20"></polygon>
                 <polygon points="90,50 80,50"></polygon>
                 <polygon points="80,80 70,70"></polygon>
               </svg>
             </div>
             <p>4</p>
             
           </div>
          
           <br><br>
           
   
     <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background-color:black; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.115,36.186 560.115,34.131 C560.115,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.6115,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,115.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.6115,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,115.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by +Aura (@plus_aura_moments)</a></p></div></blockquote>
   <script async src="//www.instagram.com/embed.js"></script><br><br>
   <div class="divider divider-error"></div>
   <OnlyBasement />
           
           <div class="aps">
             <Rap/>
           </div>
   </div>
  
   
     <!-- TODO: bottle scott ends -->
     
    
        
        </LazyLoad>
      </div>
    </div>
  
  {/if}
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Permanent+Marker&display=swap');
    .alert{
      margin-left: 32%;
      margin-top: 10%;
      background-color: rgba(255, 208, 0, 0.299);
      border: 5px solid #ffe101b4;
      box-shadow: 100px 100px 900px  #e6ff01;
      width: 500px;
      height: 500px;
    }
    #swiftbg{
      border: 5px solid #ff01e1b4;
      box-shadow: 10px 10px 10px  #3b0661a0;
      background-color: #bb01ff1e;
    }

  
    #scottdiv{
      border: 5px solid #ffc401b4;
      box-shadow: 10px 10px 10px  #613e06a0;
      background-color: #ff95011e;
    }
  .outest {
    padding-right: 50px;
     border: 5px solid #01d5ffb4;
     box-shadow: 10px 10px 10px  #065261a0;
    padding-left: 40px;
    padding-top: 40px;
    height: 1200px;
    background-color: #00d9ff0f;
     width: 110%; 
  border-radius: 20px;
   
  }
    .instagram-media{
      max-height: 55px;
      min-width: 55px;
    }
    .info{
      font-size: 35px;
      color:rgb(179, 255, 0) ;
    }
  
    
    .aps{
      box-shadow: 20px 20px 20px rgb(13, 1, 14);;
      height: 700px;
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
  
  
  
    
  
