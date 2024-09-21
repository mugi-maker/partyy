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
    'https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/COMMON/player.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL0NPTU1PTi9wbGF5ZXIucG5nIiwiaWF0IjoxNzI1MDE1NzI5LCJleHAiOjE3NTY1NTE3Mjl9.ODPZ3oHVE0-j2dTY1aJrCpv4GUzs0xAeuPjFVawlh84&t=2024-08-30T11%3A02%3A02.336Z'
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
