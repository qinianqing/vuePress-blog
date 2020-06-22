const front_end = require("./config/front-end");
const flutter = require("./config/flutter");
const other = require("./config/other");
module.exports = {
  title: "UKYO TACHIBANA", //左上角的博客标题以及网站显示的标题
  description: "Hi,我是UKYO TACHIBANA",
  theme: "antdocs",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
      },
    ],
  ],
  themeConfig: {
    //主题配置项
    logo: "/logo.png",
    smoothScroll: true, //平滑滚动
    sidebarDepth: 1,
    repo: "qinianqing/qinianqing.github.io",
    docsRepo: "qinianqing/qinianqing.github.io",
    docsBranch: "master",
    editLinks: true, // 编辑链接
    editLinkText: "帮助我改善这个页面", // 链接字段
    lastUpdated: "最后更新时间", // 最后更新时间
    backToTop: true,
    algolia: {
      apiKey: '67902b2cb45b11eaae8f7cd30ae46fe8',
      indexName: 'qinianqing'
    },
    sidebar: {
      "/front-end/": front_end.all,
      "/flutter/article/": flutter.article,
      "/flutter/widgets/": flutter.widgets,
      "/other/git/": other.git,
      "/other/docker/": other.docker,
      "/other/life/": other.life,
    },
    nav: [
      //导航栏
      { text: "首页", link: "/" },

      {
        text: "🍃前端",
        link: "/front-end/",
      },
      {
        text: "🌿Flutter",
        items: [
          {
            text: "文章",
            link: "/flutter/article/",
          },
          {
            text: "组件",
            link: "/flutter/widgets/",
          },
        ],
      },
      {
        text: "🌱其他",
        items: [
          {
            text: "git",
            link: "/other/git/",
          },

          {
            text: "docker",
            link: "/other/docker/",
          },
          {
            text: "生活记录",
            link: "/other/life/",
          },
        ],
      },
      {
        text: "🌈联系",
        items: [
          {
            text: "Github",
            link: "https://github.com/qinianqing",
          },
          {
            text: "掘金",
            link: "https://juejin.im/user/59f723c46fb9a044fd110c05",
          },
          {
            text: "微信",
            link: "https://i.loli.net/2020/06/22/dNxHWyVL3aKSDTU.jpg",
          },
        ],
      },
    ],
  },

  plugins: [
    //美化相关：
    // ["cursor-effects"], //鼠标点击特效
    ["vuepress-plugin-reading-progress"], //顶部进度条
    [
      "vuepress-plugin-code-copy",
      {
        color: "#6D7EAD",
        successText: "🌈复制成功！🌈",
      },
    ],
    "@vuepress/last-updated", //显示文章最后更新时间
    ["go-top"], // 悬挂猫返回顶部,yarn add -D vuepress-plugin-go-top
    /***
     * 这个版本废弃以下功能
     */
    //功能添加：
    // [
    //   "vuepress-plugin-auto-sidebar",
    //   {
    //     titleMode: "uppercase",
    //   },
    // ], //自动生成侧边栏
    // [
    //   "permalink-pinyin",
    //   {
    //     lowercase: true,
    //     separator: "-",
    //   },
    // ], //转换链接汉字为英文的插件
  ],
};
