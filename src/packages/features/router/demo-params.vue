<script setup lang="ts">
definePageMeta({
  name: 'demo-params',
  style: {
    navigationBarTitleText: '参数接收演示',
  },
})

const router = useRouter()
const route = useRoute()

// 接收参数
const receivedParams = ref({})
const decodedUser = ref(null)

onLoad((option) => {
  console.log('onLoad option:', option)
  receivedParams.value = option || {}

  // 如果有user参数，尝试解码对象
  if (option && option.user) {
    try {
      decodedUser.value = JSON.parse(decodeURIComponent(decodeURIComponent(option.user)))
    }
    catch (e) {
      console.error('解码user参数失败:', e)
    }
  }
})

function goBack() {
  router.back()
}

function pushToGuard() {
  router.push('/packages/features/router/demo-guard')
}
</script>

<template>
  <view class="min-h-screen py-3">
    <!-- 头部 -->
    <view class="mx-3 mb-3">
      <view class="rounded-3 px-5 py-6 text-center wot-bg-filled-oppo">
        <view class="mb-3 text-8">
          📥
        </view>
        <view class="mb-2 text-5 font-bold wot-text-text-main">
          params 参数接收演示
        </view>
        <view class="text-3.5 wot-text-text-secondary">
          演示如何接收和处理路由参数
        </view>
      </view>
    </view>

    <!-- 路由信息 -->
    <demo-block title="当前路由信息" transparent>
      <view class="rounded-3 p-4 wot-bg-filled-oppo">
        <view class="space-y-2">
          <view class="flex items-center justify-between border-b py-2 wot-border-border-main">
            <text class="text-3.5 wot-text-text-secondary">
              路径:
            </text>
            <text class="text-3.5 font-mono wot-text-text-main">
              {{ route.path }}
            </text>
          </view>
          <view class="flex items-center justify-between border-b py-2 wot-border-border-main">
            <text class="text-3.5 wot-text-text-secondary">
              名称:
            </text>
            <text class="text-3.5 font-mono wot-text-text-main">
              {{ route.name }}
            </text>
          </view>
          <view class="flex items-center justify-between py-2">
            <text class="text-3.5 wot-text-text-secondary">
              接收方式:
            </text>
            <text class="text-3.5 wot-text-text-main">
              onLoad(option)
            </text>
          </view>
        </view>
      </view>
    </demo-block>

    <!-- 参数信息 -->
    <demo-block title="接收到的参数" transparent>
      <view class="space-y-3">
        <view class="rounded-2 p-4 wot-bg-filled-oppo">
          <view class="mb-3 text-4 font-bold wot-text-text-main">
            原始参数 (option)
          </view>
          <view class="wot-bg-bg border rounded-2 p-3 wot-border-border-main">
            <text class="text-3 font-mono wot-text-text-secondary">
              {{ JSON.stringify(receivedParams, null, 2) }}
            </text>
          </view>
        </view>

        <view v-if="decodedUser" class="rounded-2 p-4 wot-bg-filled-oppo">
          <view class="mb-3 text-4 font-bold wot-text-text-main">
            解码后的对象参数
          </view>
          <view class="wot-bg-bg border rounded-2 p-3 wot-border-border-main">
            <text class="text-3 font-mono wot-text-text-secondary">
              {{ JSON.stringify(decodedUser, null, 2) }}
            </text>
          </view>
          <view class="mt-3 text-3.5 wot-text-text-secondary">
            使用 JSON.parse(decodeURIComponent(decodeURIComponent(option.user))) 解码
          </view>
        </view>
      </view>
    </demo-block>

    <!-- API 说明 -->
    <demo-block title="API 说明" transparent>
      <view class="rounded-2 p-4 wot-bg-filled-oppo">
        <view class="mb-3 text-4 font-bold wot-text-text-main">
          Params vs Query 的区别
        </view>
        <view class="mb-3 border border-orange-200 rounded-2 bg-orange-50 p-3 dark:bg-orange-900/20">
          <view class="mb-2 text-3.5 text-orange-700 font-bold dark:text-orange-300">
            ⚠️ 重要说明
          </view>
          <view class="text-3 text-orange-600 leading-relaxed dark:text-orange-200">
            在 @wot-ui/router 中，params 和 query 参数在实际效果上并无区别，都会以查询字符串形式放在 URL 中。这种 API 设计主要是为了与 vue-router 保持一致。
          </view>
        </view>
        <view class="wot-bg-bg border rounded-2 p-3 wot-border-border-main">
          <text class="text-3 leading-relaxed font-mono wot-text-text-secondary">
            // Params 写法 (当前演示)
            router.push({ name: 'demo-params', params: { username: 'eduardo' } })
            // 结果: /demo-params?username=eduardo

            // Query 写法 (效果相同)
            router.push({ path: '/demo-params', query: { username: 'eduardo' } })
            // 结果: /demo-params?username=eduardo
          </text>
        </view>
      </view>
    </demo-block>

    <!-- 代码示例 -->
    <demo-block title="代码示例" transparent>
      <view class="rounded-2 p-4 wot-bg-filled-oppo">
        <view class="mb-3 text-4 font-bold wot-text-text-main">
          接收参数的标准写法
        </view>
        <view class="wot-bg-bg border rounded-2 p-3 wot-border-border-main">
          <text class="text-3 leading-relaxed font-mono wot-text-text-secondary">
            onLoad((option) => {
            if (option && option.username) {
            const username = option.username
            }

            // 对象参数需要解码
            if (option && option.user) {
            const user = JSON.parse(decodeURIComponent(decodeURIComponent(option.user)))
            }
            })
          </text>
        </view>
      </view>
    </demo-block>

    <!-- 操作按钮 -->
    <demo-block title="继续演示" transparent>
      <view class="space-y-3">
        <wd-button type="primary" block @click="pushToGuard">
          跳转到导航守卫演示
        </wd-button>
        <wd-button type="warning" block @click="goBack">
          返回上一页
        </wd-button>
      </view>
    </demo-block>
  </view>
</template>
