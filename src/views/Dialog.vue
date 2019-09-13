<template>
  <div class="dialog-views">
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

<el-dialog title="收货地址" :visible.sync="dialogTableVisible">
  <view-eform :viewArray="viewArray" :entitiesInfo="entitiesInfo"></view-eform>
</el-dialog>
  </div>

</template>

<script>
import eformView from './eformView/eformView.vue'
export default {
  name: 'Dialog',
  components: {
    'view-eform': eformView
  },
  data () {
    return {
      dialogTableVisible: false,
      viewArray: [{
        name: '王尼玛'
      },
      {
        addr: '三亚'
      },
      {
        pic: [{
          name: '1.jpg',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }, {
          name: '1.jpg',
          url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
        }, {
          name: '1.jpg',
          url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        }]
      },
      {
        file: [{
          name: '1.txt',
          url: ''
        }]
      }
      ],
      entitiesInfo: [{
        elementType: 'X_IMAGE',
        fieldName: 'pic'
      }, {
        elementType: 'FILE',
        fieldName: 'file'
      }, {
        elementType: 'INPUT_TEXT',
        fieldName: 'name'
      }, {
        elementType: 'INPUT_TEXT',
        fieldName: 'addr'
      }

      ]
    }
  }
}
</script>

<style scoped>
</style>
