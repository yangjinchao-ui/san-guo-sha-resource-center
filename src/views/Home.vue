<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 头部 -->
    <header class="bg-gradient-to-r from-purple-800 to-blue-600 text-white py-6 px-4">
      <div class="container mx-auto text-center">
        <h1 class="text-3xl font-bold">三国杀资源中心</h1>
        <p class="text-sm opacity-90 mt-1">一站式获取三国杀相关资源与福利</p>
      </div>
    </header>

    <!-- 招募模块 -->
    <section class="py-8 px-4">
      <div class="container mx-auto">
        <h2 class="text-xl font-semibold mb-4 flex items-center">
          <span class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-2">👥</span>
          三国杀驱虎吞狼战队招募
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <router-link to="/record"
            class="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
            <div class="text-2xl mb-2">💳</div>
            <div>查询吞狼币与兑换记录</div>
          </router-link>
          <router-link to="/info"
            class="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
            <div class="text-2xl mb-2">🎁</div>
            <div>驱虎吞狼战队简介</div>
          </router-link>
          <router-link to="/guide"
            class="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
            <div class="text-2xl mb-2">ℹ️</div>
            <div>了解驱虎吞狼战队</div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 资料整理模块 -->
    <section class="py-8 px-4 bg-white">
      <div class="container mx-auto">
        <h2 class="text-xl font-semibold mb-4 flex items-center">
          <span class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-2">📚</span>
          三国杀资料整理
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <router-link to="https://game.weixin.qq.com/cgi-bin/minigame/static/benefits/index.html?ssid=101#wechat_redirect" target="_blank"
            class="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
            <div class="text-2xl mb-2">❓</div>
            <div>每日充值领皮肤护理(在微信打开)</div>
          </router-link>
          <router-link to="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx267cc55982d5b6e5&redirect_uri=http%3A%2F%2Fmxyxwx.sanguosha.com%2Fwx%2Fauthorize%3Fredirects%3Dhttps%253A%252F%252Fmxyxwx.sanguosha.com%252Fintegral_2024%252F&response_type=code&scope=snsapi_base&state=52cd95ab0fe742c796a2e0f4b4b56489&connect_redirect=1#wechat_redirect" target="_blank"
            class="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
            <div class="text-2xl mb-2">❓</div>
            <div>签到送马超·壮志凌云</div>
          </router-link>
          <router-link to="#" target="_blank"
            class="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
            <div class="text-2xl mb-2">🎴</div>
            <div>查看完整牌库</div>
          </router-link>
          <router-link to="#" target="_blank"
            class="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
            <div class="text-2xl mb-2">👤</div>
            <div>查看左侧慈可化身技能</div>
          </router-link>
          <router-link to="#" target="_blank"
            class="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
            <div class="text-2xl mb-2">📊</div>
            <div>统计月刊可得元宝图</div>
          </router-link>
          <router-link to="#" target="_blank"
            class="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
            <div class="text-2xl mb-2">📋</div>
            <div>统计月度可得招募令图</div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>