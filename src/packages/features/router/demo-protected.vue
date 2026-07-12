<script setup lang="ts">
/**
 * 页面元信息
 * @see https://oiyo.js.org/docs/manual/page/meta
 */
definePageMeta({
  name: 'demo-protected',
  style: {
    navigationBarTitleText: '受保护页面',
  },
})

const router = useRouter()

function goBack() {
  router.back()
}
</script>

<template>
  <view class="min-h-screen py-3">
    <!-- 头部 -->
    <view class="mx-3 mb-3">
      <view class="rounded-3 px-5 py-6 text-center wot-bg-filled-oppo">
        <view class="mb-3 text-8">
          🔒
        </view>
        <view class="mb-2 text-5 font-bold wot-text-text-main">
          受保护的页面
        </view>
        <view class="text-3.5 wot-text-text-secondary">
          这个页面被路由守卫保护，只有登录用户才能访问
        </view>
      </view>
    </view>

    <!-- 内容 -->
    <DemoBlock title="守卫拦截成功" transparent>
      <view class="border border-green-200 rounded-2 bg-green-50 p-4 dark:bg-green-900/20">
        <view class="mb-2 text-4 text-green-700 font-bold dark:text-green-300">
          🎉 恭喜！
        </view>
        <view class="text-3.5 text-green-600 leading-relaxed dark:text-green-200">
          如果你能看到这个页面，说明路由守卫验证通过了！\n
          但实际上，这个页面被配置为需要登录才能访问，\n
          守卫应该会拦截并重定向你到首页。
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
