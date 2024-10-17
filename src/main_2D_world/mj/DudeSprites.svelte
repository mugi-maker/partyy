<!--
	-	uses aseprite json loader
	- one sprite is WASD controlled
	- uses an untyped useInstancedSprie() hook in UpdaterWalking component
 -->

<script lang="ts">
  import { InstancedSprite, buildSpritesheet } from '@threlte/extras'
  import WalkingBehaviour from './WalkingBehaviour.svelte'

  export let billboarding = true
  export let fps: number

  const player = buildSpritesheet.fromAseprite(
    'https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/COMMON/player.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL0NPTU1PTi9wbGF5ZXIuanNvbiIsImlhdCI6MTcyNTAxNTgyNSwiZXhwIjoxNzU2NTUxODI1fQ.hr-9kMbwTDdRLVrvSkK61k1dvfR4nb3KteCWz4vCnNE&t=2024-08-30T11%3A03%3A38.506Z',
    'https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/player.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3BsYXllci5wbmciLCJpYXQiOjE3Mjc4ODIzNjQsImV4cCI6MTc1OTQxODM2NH0.On6Kko2PE1c2EDu9WejaBjIyB_BRJ9eZFttnJ44L35s&t=2024-10-02T15%3A19%3A17.514Z'
  )
</script>

{#await player then spritesheet}
  <InstancedSprite
    {spritesheet}
    count={1000}
    playmode={'FORWARD'}
    {fps}
    {billboarding}
    castShadow
  >
    <WalkingBehaviour />
    
  </InstancedSprite>
{/await}
