<script>
     let counter = 0;
     const handlerClick = () => {
          counter++;
     };
</script>

<style lang="scss">
     @import './sass/_variables.scss';

     button {
          display: block;
          margin: 50px auto;
          color: $red;
     }
</style>

<button class="btn btn-outline-danger" on:click={handlerClick}>
     Clicked {counter}
</button>
