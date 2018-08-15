<template>
  <div>
    <p>A List of things (loading:{{loading}})</p>
    <ul>
      <li v-for="thing in things" :key="thing.id">
        {{thing.name}}
        <img v-if="thing.image" :src="`https://media.graphcms.com/resize=w:320,h:120,fit:crop/${thing.image.handle}`">
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'Things',
  data: () => ({
    loading: 0,
    things: null
  }),
  apollo: {
    $loadingKey: 'loading',
    things: {
      query: gql`
        query allTheThings {
          things {
            id
            name
            image{
              url
              handle
            }
          }
        }
      `,
      variables: () => ({  }),
      update: ({ things }) => things
    }
  },
  mounted() {
    console.log('$apollo',this.$apollo)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  color:red;
}
</style>
