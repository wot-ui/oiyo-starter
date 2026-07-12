<script setup lang="ts">
/**
 * 页面元信息
 * @see https://oiyo.js.org/docs/manual/page/meta
 */
definePageMeta({
  name: 'demo-object',
  style: {
    navigationBarTitleText: '对象路径跳转',
  },
})

const router = useRouter()
const route = useRoute()

function goBack() {
  router.back()
}

function pushToParams() {
  router.push({ name: 'demo-params', params: { username: 'eduardo' } })
}

function pushToQuery() {
  router.push({ path: '/packages/features/router/demo-query', query: { keyword: 'vue', type: 'framework' } })
}
</script>

<template>
  <view class="min-h-screen py-3">
    <!-- 头部 -->
    <view class="mx-3 mb-3">
      <view class="rounded-3 px-5 py-6 text-center wot-bg-filled-oppo">
        <view class="mb-3 text-8">
          🎯
        </view>
        <view class="mb-2 text-5 font-bold wot-text-text-main">
          对象路径跳转演示
        </view>
        <view class="text-3.5 wot-text-text-secondary">
          使用 router.push({ path: '/path' }) 进行跳转
        </view>
      </view>
    </view>

    <!-- 跳转信息 -->
    <DemoBlock title="跳转信息" transparent>
      <view class="rounded-3 p-4 wot-bg-filled-oppo">
        <view class="mb-3 text-4 font-bold wot-text-text-main">
          当前页面信息
        </view>
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
              跳转方式:
            </text>
            <text class="text-3.5 wot-text-text-main">
              对象路径
            </text>
          </view>
          <view class="flex items-center justify-between py-2">
            <text class="text-3.5 wot-text-text-secondary">
              代码:
            </text>
            <text class="text-3.5 font-mono wot-text-text-main">
              router.push({ path: '/packages/features/router/demo-object' })
            </text>
          </view>
        </view>
      </view>
    </DemoBlock>

    <!-- 参数传递演示 -->
    <DemoBlock title="参数传递演示" transparent>
      <view class="space-y-3">
        <view class="rounded-2 p-4 wot-bg-filled-oppo">
          <view class="mb-3 text-4 font-bold wot-text-text-main">
            params 参数传递
          </view>
          <view class="mb-3 text-3.5 wot-text-text-secondary">
            使用 name + params 组合传递参数
          </view>
          <view class="wot-bg-bg mb-3 border rounded-2 p-3 wot-border-border-main">
            <text class="text-3 font-mono wot-text-text-secondary">
              router.push({ name: 'demo-params', params: { username: 'eduardo' } })
            </text>
          </view>
          <WdButton type="primary" block @click="pushToParams">
            跳转并传递 params
          </WdButton>
        </view>

        <view class="rounded-2 p-4 wot-bg-filled-oppo">
          <view class="mb-3 text-4 font-bold wot-text-text-main">
            query 参数传递
          </view>
          <view class="mb-3 text-3.5 wot-text-text-secondary">
            使用 path + query 组合传递参数
          </view>
          <view class="wot-bg-bg mb-3 border rounded-2 p-3 wot-border-border-main">
            <text class="text-3 font-mono wot-text-text-secondary">
              router.push({ path: '/demo-query', query: { keyword: 'vue' } })
            </text>
          </view>
          <WdButton type="success" block @click="pushToQuery">
            跳转并传递 query
          </WdButton>
        </view>
      </view>
    </DemoBlock>

    <!-- 操作按钮 -->
    <DemoBlock title="导航" transparent>
      <WdButton type="warning" block @click="goBack">
        返回上一页
      </WdButton>
    </DemoBlock>
  </view>
</template>
