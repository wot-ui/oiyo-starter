<script setup lang="ts">
/**
 * 页面元信息
 * @see https://oiyo.js.org/docs/manual/page/meta
 */
definePageMeta({
  name: 'demo-guard',
  style: {
    navigationBarTitleText: '导航守卫演示',
  },
})

const router = useRouter()

function goBack() {
  router.back()
}

// 演示权限拦截
function handleBeforeEach() {
  router.push({
    name: 'demo-protected',
  })
}

// 跳转到afterEach演示页面
function demoAfterEachPage() {
  router.push('/packages/features/router/demo-aftereach')
}
</script>

<template>
  <view class="py-3">
    <!-- 头部 -->
    <view class="mx-3 mb-3">
      <view class="rounded-3 px-5 py-6 text-center wot-bg-filled-oppo">
        <view class="mb-3 text-8">
          🛡️
        </view>
        <view class="mb-2 text-5 font-bold wot-text-text-main">
          导航守卫演示
        </view>
        <view class="text-3.5 wot-text-text-secondary">
          演示 beforeEach 和 afterEach 守卫功能
        </view>
      </view>
    </view>

    <!-- 守卫演示 -->
    <DemoBlock title="守卫演示" transparent>
      <view class="space-y-3">
        <view class="rounded-2 p-4 wot-bg-filled-oppo">
          <view class="mb-3 text-4 font-bold wot-text-text-main">
            前置导航守卫拦截
          </view>
          <view class="mb-3 text-3.5 wot-text-text-secondary">
            跳转前交互，可以拦截导航
          </view>
          <WdButton type="error" block @click="handleBeforeEach">
            📊 beforeEach 演示
          </WdButton>
        </view>

        <view class="rounded-2 p-4 wot-bg-filled-oppo">
          <view class="mb-3 text-4 font-bold wot-text-text-main">
            后置导航钩子演示
          </view>
          <view class="mb-3 text-3.5 wot-text-text-secondary">
            跳转到专门的 afterEach 演示页面，体验页面统计、埋点上报等功能
          </view>
          <WdButton type="success" block @click="demoAfterEachPage">
            📊 afterEach 演示
          </WdButton>
        </view>
      </view>
    </DemoBlock>

    <!-- 操作按钮 -->
    <DemoBlock title="导航" transparent>
      <view class="px-3">
        <WdButton type="warning" block @click="goBack">
          返回上一页
        </WdButton>
      </view>
    </DemoBlock>
  </view>
</template>
