<template>
  <div>

    <table class="table">
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Cost</th>
        <th scope="col">Category</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody v-for="product in products" :key="product.name">
      <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.cost }}</td>
        <td>{{ product.category.categoryName }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductService from '../store/ProductService'

export default {
  name: 'products',
  data() {
    return {
      products: [],
    }
  },

    methods: {
      retrieveProducts() {
        ProductService.getAllProducts()
            .then(response => {
              this.products = response.data
            })
            .catch(e => {
              alert(e)
            })
      }
    },

    mounted() {
      this.retrieveProducts()
    }
  }

</script>
