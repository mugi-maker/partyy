<script lang="ts">
  import { Canvas, T } from '@threlte/core'
  import Scene from './Scene.svelte'
  import Settings from './Settings.svelte'
  import { OrbitControls } from '@threlte/extras'
  import { onMount } from 'svelte'
  import { DEG2RAD } from 'three/src/math/MathUtils.js'

  let billboarding = true
  let fps = 1
  let y = 10

  function levitate() {
    const time = Date.now() / 1000
    const speed = 0.1 // Slower speed for smoother movement
    const offset = 110 // Increase the base height
    const amplitude = 40 // Increase the amplitude to cover more distance
    y = Math.sin(time * speed) * amplitude + offset
    requestAnimationFrame(levitate)
  }

  onMount(() => {
    levitate()
  })
</script>

<div>
  <Canvas>
    <T.PerspectiveCamera
    makeDefault
    position.z={14}
    position.y={4}
  >
    <OrbitControls
      autoRotate
      autoRotateSpeed={0.5}
      minPolarAngle={DEG2RAD * 65}
      maxPolarAngle={DEG2RAD * 85}
    />
  </T.PerspectiveCamera>

    <Scene {billboarding} {fps} />
  </Canvas>

  <Settings bind:billboarding bind:fps />
</div>

<style>
  div {
    height: 100%;
  }
</style>
