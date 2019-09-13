<template lang="html">
  <div class="eform-views">
    <el-table :data="viewArray">
      <el-table-column label="属性名" fit>
        <template slot-scope="scope">
          <span v-text="Object.keys(scope.row)[0]"></span>
        </template>
      </el-table-column>
      <el-table-column label="属性值" fit>
        <template slot-scope="scope">
          <div class="file" v-if="null != Object.values(scope.row)[0] && isObj == (typeof Object.values(scope.row)[0])">
            <div class="image" v-if="typeOfField(Object.keys(scope.row)[0])==='X_IMAGE'">
              <img :src="item.url" v-for="(item,index) in Object.values(scope.row)[0]" :key="index" width="40" height="40"/>
            </div>
            <div class="other-file" v-else-if="typeOfField(Object.keys(scope.row)[0])==='FILE'">
              <a :href="Object.values(scope.row)[0][0].url" v-text="Object.values(scope.row)[0][0].name">
              </a>
            </div>
          </div>
          <div class="string" v-else>
            <span v-text="Object.values(scope.row)[0]"></span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'eformView',
  props: {
    viewArray: {
      type: Array,
      required: true
    },
    entitiesInfo: {
      type: Array,
      required: true
    }
  },
  methods: {
    typeOfField (val) {
      let tempOfType = this.entitiesInfo.find(item => item.fieldName === val)
      if (tempOfType) {
        return tempOfType.elementType
      } else {
        return ''
      }
    }
  },
  data () {
    return {
      isObj: 'object',
      msg: ''
    }
  },
  filters: {
    dateFormat: function (dateStr, pattern = '') {
      let dt = new Date(dateStr)
      let y = dt.getFullYear()
      let m = (dt.getMonth() + 1).toString().padStart(2, '0')
      let d = dt.getDate().toString().padStart(2, '0')

      if (pattern.toLowerCase() === 'yyyy-mm-dd') {
        return `${y}-${m}-${d}`
      } else {
        let hh = dt.getHours().toString().padStart(2, '0')
        let mm = dt.getMinutes().toString().padStart(2, '0')
        let ss = dt.getSeconds().toString().padStart(2, '0')
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
