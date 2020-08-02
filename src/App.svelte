<script>
     import { Router, Route, Link } from 'svelte-routing';
     import Home from './pages/Home.svelte';
     import About from './pages/About.svelte';
     export let url = ''; //This property is necessary declare to avoid ignore the Router
     import Button from './Button.svelte';
     export const router = null;
     export const router = null;

     let src =
          'https://openexpoeurope.com/wp-content/uploads/2019/09/svelte-logo.png';
</script>

<style lang="scss">
     img {
          max-width: 300px;
     }
</style>

<svelte:head>
     <title>Demo - Svelte</title>
     <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous" />
</svelte:head>

<Router {url}>
     <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
     </nav>
     <div>
          <Route path="about">
               <About />
          </Route>
          <Route path="/">
               <Home />
          </Route>
     </div>
     <div class="text-center">
          <img {src} alt={src} />
     </div>
</Router>
