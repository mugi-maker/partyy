<script lang="ts">
  import { T } from '@threlte/core'
  import { Sky, useTexture } from '@threlte/extras'
  import { BackSide, NearestFilter, RepeatWrapping } from 'three'
  import { DEG2RAD } from 'three/src/math/MathUtils.js'
  import TreeSpriteAtlas from './TreeSpriteAtlas.svelte'
  import DudeSprites from './DudeSprites.svelte'

  export let billboarding = true
  export let fps: number
   
  const skyurl_swift = "https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/tyalor/pixel-sky.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3R5YWxvci9waXhlbC1za3kucG5nIiwiaWF0IjoxNzI1MDE2MTIxLCJleHAiOjE3NTY1NTIxMjF9.nD2TSaPHvqBDN1I5ljeWIhXaGgtlP21pBJolacXORzk&t=2024-08-30T11%3A08%3A33.781Z"
  
  const grassurl_swift = "https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/tyalor/grass.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3R5YWxvci9ncmFzcy5wbmciLCJpYXQiOjE3MjUwMTQ1NTUsImV4cCI6MTc1NjU1MDU1NX0.Sx49NC5hEN7S21vMweGug7wqAtCJTTybJZzJyq5Jy_0&t=2024-08-30T10%3A42%3A28.408Z"
  const grass = useTexture(grassurl_swift, {
    transform: (texture) => {
      texture.wrapS = texture.wrapT = RepeatWrapping
      texture.repeat.set(100, 100)
      texture.minFilter = NearestFilter
      texture.magFilter = NearestFilter
      texture.needsUpdate = true
      return texture
    }
  })

  const sky = useTexture(skyurl_swift, {
    transform: (texture) => {
      texture.wrapS = texture.wrapT = RepeatWrapping
      texture.repeat.set(10, 2)
      texture.minFilter = NearestFilter
      texture.magFilter = NearestFilter
      texture.needsUpdate = true
      return texture
    }
  })
</script>

<slot />

<!--
	Dudes:
	- Michael's Aseprite loader
	- One is WASD controlled
-->
<DudeSprites
  {billboarding}
  {fps}
/>

<!-- Multiple trees in a spritesheet, 1 frame each animation - acting as atlas - not animated -->
<TreeSpriteAtlas {billboarding} />

<!-- SCENE SETUP: grass, sky, lights -->

{#if $sky}
  <T.Mesh
    position.y={-10}
    scale.y={0.5}
  >
    <T.SphereGeometry args={[110]} />
    <T.MeshBasicMaterial
      map={$sky}
      side={BackSide}
    />
  </T.Mesh>
{/if}

{#if $grass}
  <T.Mesh
    rotation.x={-DEG2RAD * 90}
    receiveShadow
  >
    <T.CircleGeometry args={[110]} />
    <T.MeshLambertMaterial map={$grass} />
  </T.Mesh>
{/if}

<Sky elevation={13.35} />

<T.AmbientLight intensity={1} />

<T.DirectionalLight
  shadow.mapSize={[2048, 2048]}
  shadow.camera.far={128}
  shadow.camera.near={0.01}
  shadow.camera.left={-20}
  shadow.camera.right={20}
  shadow.camera.top={20}
  shadow.camera.bottom={-20}
  shadow.bias={-0.0001}
  position.x={0}
  position.y={50}
  position.z={30}
  intensity={3}
  castShadow
/>
