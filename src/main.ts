import Loader from './Layout.svelte'
import App from './fotter.svelte'
import Baby from './baby.svelte'
import Scott from './scott.svelte'


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

 const app3 = new Scott({
  target: document.getElementById('app3')
 })
