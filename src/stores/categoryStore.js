import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  //导航列表的数据管理
  //state导航列表数据
    const categoryList = ref([])
  //action获取导航列表数据
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
      }
    

  return { categoryList,
    getCategory}
})
