<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item, index) in headers" :key="index">
          {{ item.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in body" :key="index">
        <td v-for="(bodyInHeader, bodyInIndex) in headers" :key="bodyInIndex">
          <slot :name="`body_${bodyInHeader.value}`" :item="item">{{
            item[bodyInHeader.value]
          }}</slot>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="!body?.length" class="text-center mt-10 text-[20px] text-dblue font-semibold ">No Data</div>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
  },
  body: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  padding: 10px;
  overflow-x: auto;
  thead {
    background-color: #12486b;
    color: white;
    th {
      border-top: 1px solid #e1eaed;
      padding: 10px;
      font-size: 17px;
      text-align: center;
    }
  }
  tbody {
    tr {
      font-size: 13px;
    }
    tr:nth-child(even) {
      background-color: #f1fcff;
    }
  }
}
td {
  padding: 5px 30px;
  border: 1px solid #e1eaed;
  text-align: center;
}
tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}
tr:first-child th:first-child {
  border-top-left-radius: 10px;
  border-left: 1px solid #e1eaed;
}
tr:first-child th:last-child {
  border-top-right-radius: 10px;
  border-right: 1px solid #e1eaed;
}
</style>
