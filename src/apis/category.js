import request from '@/utils/http'

//封装接口
export function getCategoryAPI (id) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}