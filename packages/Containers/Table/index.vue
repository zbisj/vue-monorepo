<template>
  <table>
    <TableRow
      v-for="(values, index) in items"
      :key="index"
      :values="values"
    />
  </table>
</template>

<script>
import TableRow from '@sibabale/table-row'

export default {
  name: 'Table',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    TableRow
  }
}
</script>