<script lang="ts">
  import { T } from '@threlte/core'
  import { Sky, useTexture } from '@threlte/extras'
  import { BackSide, NearestFilter, RepeatWrapping } from 'three'
  import { DEG2RAD } from 'three/src/math/MathUtils.js'
  import TreeSpriteAtlas from './TreeSpriteAtlas.svelte'
  import DudeSprites from './DudeSprites.svelte'

  export let billboarding = true
  export let fps: number

  const scott_sky_url = "https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/scott/pixel-skyll.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3Njb3R0L3BpeGVsLXNreWxsLnBuZyIsImlhdCI6MTcyNTAxNzgzMCwiZXhwIjoxNzU2NTUzODMwfQ.i1jyO3Zf0T8NjvVhRmWVHvcszZLSH3685gKV97mO-4M&t=2024-08-30T11%3A37%3A03.698Z"
  const scott_ground_url = "https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/scott/ground.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3Njb3R0L2dyb3VuZC5wbmciLCJpYXQiOjE3MjUwMTY5OTgsImV4cCI6MTc1NjU1Mjk5OH0._hQssG6XLOr6A26Ui8TCt1RAswx8qhcCMommfIdDgwM&t=2024-08-30T11%3A23%3A11.221Zs"

  const grass = useTexture(scott_ground_url, {
    transform: (texture) => {
      texture.wrapS = texture.wrapT = RepeatWrapping
      texture.repeat.set(100, 100)
      texture.minFilter = NearestFilter
      texture.magFilter = NearestFilter
      texture.needsUpdate = true
      return texture
    }
  })

  const sky = useTexture(scott_sky_url, {
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
