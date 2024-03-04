import httpInstance from '@/utils/http'

//封装接口
export function getBannerAPI () {
    return httpInstance({
        url: '/home/banner'
    })
}