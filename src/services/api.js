import request from './../utils/request';

/**
 * 测试post接口
 * @export
 * @param {*} data 请求参数
 * @returns
 */
export async function testPost(data) {
    return request('/api/getCode', {
        method: 'post',
        data: data
    });
}

/**
 * 测试get接口
 * @export
 * @param {*} data 请求参数
 * @returns
 */
export async function testGet(data) {
    return request('/api/getBanners', {
        method: 'get',
    });
}