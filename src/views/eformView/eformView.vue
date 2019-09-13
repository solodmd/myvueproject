<template lang="html">
  <div class="">
    <el-table :data="viewArray">
      <el-table-column label="属性名" fit>
        <template slot-scope="scope">
          <span v-text="Object.keys(scope.row)[0]"></span>
        </template>
      </el-table-column>
      <el-table-column label="属性值" fit>
        <template slot-scope="scope">
          <div class="" v-if="null != Object.values(scope.row)[0] && isObj == (typeof Object.values(scope.row)[0])">
            <div class="" v-if="typeOfField(Object.keys(scope.row)[0])==='X_IMAGE'">
              <img :src="item.url" v-for="(item,index) in Object.values(scope.row)[0]" :key="index" width="40" height="40"/>
            </div>
            <div class="" v-else-if="typeOfField(Object.keys(scope.row)[0])==='FILE'">
              <a :href="Object.values(scope.row)[0][0].url" v-text="Object.values(scope.row)[0][0].name">
              </a>
            </div>
          </div>
          <div class="" v-else>
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
      if (undefined === tempOfType) {
        return ''
      } else {
        return tempOfType.elementType
      }
    }
  },
  data () {
    return {
      isObj: 'object'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
