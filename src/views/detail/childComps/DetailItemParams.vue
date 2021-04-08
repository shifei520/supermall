<template>
  <div class="detail-item-params" v-if="detailParams">
    <div class="detail-item-params-rule">
      <table>
        <tr v-for="item in detailParams.rule.tables[0]">
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
          <td>{{ item[2] }}</td>
          <td>{{ item[3] }}</td>
        </tr>
      </table>
    </div>
    <div class="detail-item-params-info">
      <table>
        <tr v-for="item in detailParams.info.set">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailItemParams",
  props: {
    detailParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.detail-item-params {
  padding: 10px;
  font-size: var(--font-size);
}
.detail-item-params-rule table,
.detail-item-params-info table {
  text-align: center;
  width: 100%;
}
.detail-item-params-rule table td,
.detail-item-params-info table td {
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.detail-item-params-info table td:nth-child(1) {
  width: 97px;
}
.detail-item-params-info table td:nth-child(2) {
  color: rgb(199, 43, 43);
}
</style>