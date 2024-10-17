<script lang="ts">
   import { Text, Suspense } from '@threlte/extras'
   import { Billboard } from '@threlte/extras'
  import { T } from '@threlte/core'
  import { Sky, useTexture } from '@threlte/extras'
  import { BackSide, NearestFilter, RepeatWrapping } from 'three'
  import { DEG2RAD } from 'three/src/math/MathUtils.js'
  import TreeSpriteAtlas from './TreeSpriteAtlas.svelte'
  import DudeSprites from './DudeSprites.svelte'
  export let billboarding = true
  export let fps: number

  const jack_sky_url = "https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/Screenshot%202024-10-02%20213302.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL1NjcmVlbnNob3QgMjAyNC0xMC0wMiAyMTMzMDIucG5nIiwiaWF0IjoxNzI3ODg1MDM0LCJleHAiOjE3NTk0MjEwMzR9.zAtK7QSWSSJvamw2-xDoDenxWdzlff2DANoLhYkWnoY&t=2024-10-02T16%3A03%3A47.991Z"
  const jack_ground_url = "https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/Screenshot%202024-10-02%20213458.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL1NjcmVlbnNob3QgMjAyNC0xMC0wMiAyMTM0NTgucG5nIiwiaWF0IjoxNzI3ODg1MTMwLCJleHAiOjE3NTk0MjExMzB9.-EtJKGxAV-38iWmJx8646MFd-kxQITvYSqbBmHreB80&t=2024-10-02T16%3A05%3A23.543Z"

  const grass = useTexture(jack_ground_url, {
    transform: (texture) => {
      texture.wrapS = texture.wrapT = RepeatWrapping
      texture.repeat.set(100, 100)
      texture.minFilter = NearestFilter
      texture.magFilter = NearestFilter
      texture.needsUpdate = true
      return texture
    }
  })

  const sky = useTexture(jack_sky_url, {
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


<Suspense>
  <Text
  position.y={16}
  color = {"red"}
    scale.y={50}
    scale.x={50}
    text="I SHOW 🥩🍗"
    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  />

  <svelte:fragment slot="fallback">
    <!-- show fallback content while font data is loading -->
  </svelte:fragment>
</Suspense>




{#if $sky}
  <T.Mesh
    position.y={-20}
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
