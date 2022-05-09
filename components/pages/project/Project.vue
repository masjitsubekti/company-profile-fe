<template>
  <div>
    <b-card class="rounded" border-variant="white">
      <b-row class="">
        <b-col cols="12" md="6" lg="4" xl="3" class="p-3" v-for="data in 10" :key="data">
          <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"  >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Project'

}
</script>

<style>

</style>
