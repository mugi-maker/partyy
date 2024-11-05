<script lang="ts">
  import { Canvas, T } from '@threlte/core'
  import Scene from './Scene.svelte'
  import Settings from './Settings.svelte'
  import { OrbitControls, PerfMonitor } from '@threlte/extras'
  import { DEG2RAD } from 'three/src/math/MathUtils.js'

  let billboarding = true
  let fps = 1
</script>

<div>
  <Canvas>
    <!-- <PerfMonitor /> -->

    <T.PerspectiveCamera
    makeDefault
    position.z={104}
    position.y={6}
    rotation.y={400}
    
  >
    <OrbitControls
      autoRotate
      autoRotateSpeed={0.5}
      minPolarAngle={DEG2RAD * 65}
      maxPolarAngle={DEG2RAD * 85}
    />
  
  </T.PerspectiveCamera>

    <Scene
      {billboarding}
      {fps}
    />
  </Canvas>

  <Settings
    bind:billboarding
    bind:fps
  />
</div>

<style>
  div {
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
    height: 100%;
  }
</style>
