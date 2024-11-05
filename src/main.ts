import Loader from './Layout.svelte'
import App from './fotter.svelte'
import Baby from './baby.svelte'
import astro from './astro.svelte'


const app = new App({
  target: document.getElementById('app')
})

 export default app

 const apps = new Loader({
  target: document.getElementById('app2')
 })

 const app0 = new Baby({
  target: document.getElementById('app0')
 })

 const app3 = new astro({
  target: document.getElementById('app3')
 })
