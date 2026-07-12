<script setup lang="ts">
/**
 * 页面元信息
 * @see https://oiyo.js.org/docs/manual/page/meta
 */
definePageMeta({
  name: 'demo-query',
  style: {
    navigationBarTitleText: '查询参数接收演示',
  },
})

const router = useRouter()
const route = useRoute()

// 接收参数
const receivedQuery = ref({})
const decodedUser = ref(null)

onLoad((option) => {
  console.log('onLoad option:', option)
  receivedQuery.value = option || {}

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
          📨
        </view>
        <view class="mb-2 text-5 font-bold wot-text-text-main">
          query 参数接收演示
        </view>
        <view class="text-3.5 wot-text-text-secondary">
          演示如何接收和处理查询参数
        </view>
      </view>
    </view>

    <!-- 路由信息 -->
    <DemoBlock title="当前路由信息" transparent>
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
              查询字符串:
            </text>
            <text class="text-3.5 font-mono wot-text-text-main">
              {{ JSON.stringify(route.query) }}
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
    </DemoBlock>

    <!-- 参数信息 -->
    <DemoBlock title="接收到的查询参数" transparent>
      <view class="space-y-3">
        <view class="rounded-2 p-4 wot-bg-filled-oppo">
          <view class="mb-3 text-4 font-bold wot-text-text-main">
            原始查询参数 (option)
          </view>
          <view class="wot-bg-bg border rounded-2 p-3 wot-border-border-main">
            <text class="text-3 font-mono wot-text-text-secondary">
              {{ JSON.stringify(receivedQuery, null, 2) }}
            </text>
          </view>
          <view class="mt-3 text-3.5 wot-text-text-secondary">
            URL: /demo-query?keyword={{ (receivedQuery as any).keyword }}&type={{ (receivedQuery as any).type }}
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
    </DemoBlock>

    <!-- Query vs Params 说明 -->
    <DemoBlock title="Query vs Params 说明" transparent>
      <view class="rounded-2 p-4 wot-bg-filled-oppo">
        <view class="mb-3 text-4 font-bold wot-text-text-main">
          两种参数传递方式说明
        </view>
        <view class="mb-3 border border-orange-200 rounded-2 bg-orange-50 p-3 dark:bg-orange-900/20">
          <view class="mb-2 text-3.5 text-orange-700 font-bold dark:text-orange-300">
            ⚠️ 重要说明
          </view>
          <view class="text-3 text-orange-600 leading-relaxed dark:text-orange-200">
            在 @wot-ui/router 中，query 和 params 参数都会放在 URL 中，两者在实际效果上并无区别。这种 API 设计主要是为了与 vue-router 保持一致。
          </view>
        </view>
        <view class="space-y-3">
          <view class="border border-blue-200 rounded-2 bg-blue-50 p-3 dark:bg-blue-900/20">
            <view class="mb-2 text-3.5 text-blue-700 font-bold dark:text-blue-300">
              Query 写法 (当前演示)
            </view>
            <view class="text-3 text-blue-600 leading-relaxed dark:text-blue-200">
              • 使用 path + query 组合\n
              • 参数以查询字符串形式出现\n
              • 写法: router.push({ path: '/page', query: { key: 'value' } })\n
              • 结果: /page?key=value
            </view>
          </view>
          <view class="border border-green-200 rounded-2 bg-green-50 p-3 dark:bg-green-900/20">
            <view class="mb-2 text-3.5 text-green-700 font-bold dark:text-green-300">
              Params 写法
            </view>
            <view class="text-3 text-green-600 leading-relaxed dark:text-green-200">
              • 使用 name + params 组合\n
              • 参数同样以查询字符串形式出现\n
              • 写法: router.push({ name: 'page', params: { key: 'value' } })\n
              • 结果: /page?key=value (效果相同)
            </view>
          </view>
        </view>
      </view>
    </DemoBlock>

    <!-- 代码示例 -->
    <DemoBlock title="代码示例" transparent>
      <view class="rounded-2 p-4 wot-bg-filled-oppo">
        <view class="mb-3 text-4 font-bold wot-text-text-main">
          接收查询参数的标准写法
        </view>
        <view class="wot-bg-bg border rounded-2 p-3 wot-border-border-main">
          <text class="text-3 leading-relaxed font-mono wot-text-text-secondary">
            // 发送方
            router.push({
            path: '/demo-query',
            query: { keyword: 'vue', type: 'framework' }
            })

            // 接收方
            onLoad((option) => {
            if (option && option.keyword) {
            const keyword = option.keyword // 'vue'
            const type = option.type       // 'framework'
            }
            })
          </text>
        </view>
      </view>
    </DemoBlock>

    <!-- 操作按钮 -->
    <DemoBlock title="继续演示" transparent>
      <view class="space-y-3">
        <WdButton type="primary" block @click="pushToGuard">
          跳转到导航守卫演示
        </WdButton>
        <WdButton type="warning" block @click="goBack">
          返回上一页
        </WdButton>
      </view>
    </DemoBlock>
  </view>
</template>
