import { hopeTheme } from 'vuepress-theme-hope'
import { cut } from 'nodejs-jieba'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  hostname: 'https://lalalaji.tk',

  author: {
    name: 'lalalaji',
    url: 'https://github.com/lalalaji'
  },

  iconAssets: 'iconfont',

  logo: '',
  darkmode: 'switch',

  repo: 'lalalaji/free-explore-internet-guide',
  contributors: false,
  lastUpdated: false,

  docsDir: 'src',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime', 'Word'],

  locales: {
    '/': {
      // navbar
      navbar,

      // sidebar
      sidebar,

      displayFooter: false,

      metaLocales: {
        editLink: '在Github上编辑此页'
      }
    }

  },

  plugins: {
    comment: {
      /**
       * Using Giscus
       */
      provider: 'Giscus',
      repo: 'lalalaji/free-explore-internet-guide',
      repoId: 'R_kgDOIzIhlQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOIzIhlc4CTqle',
      mapping: 'pathname'

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    searchPro: {
      indexContent: true,
      indexOptions: {
        // 使用 nodejs-jieba 进行分词
        tokenize: (text, fieldName) =>
          fieldName === 'id' ? [text] : cut(text, true)
      },
      hotReload: true,
      locales: {
        '/': {
          placeholder: '开始搜索'
        }
      }

    },
    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em') {
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended'
              }
            }
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true
    }
  }
})
