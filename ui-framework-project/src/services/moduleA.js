/* 模块A接口 */
import Http from './http'

// 获取测试数据
export function getTestData(params) {
    return Http.get('/repos/octokit/octokit.rb')
}