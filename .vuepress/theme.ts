import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://lalalaji.tk",

  author: {
    name: "lalalaji",
    url: "https://github.com/lalalaji",
  },

  iconAssets: "iconfont",

  logo: "",

  repo: "lalalaji/free-explore-internet-guide",
  contributors: false,
  lastUpdated: false,

  docsDir: ".",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word",],

  locales: {
    "/": {
      // navbar
      navbar: navbar,

      // sidebar
      sidebar: sidebar,

      displayFooter: false,

      metaLocales: {
        editLink: "在Github上编辑此页",
      },
    },


  },

  plugins: {
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "lalalaji/free-explore-internet-guide",
      repoId: "R_kgDOIzIhlQ",
      category: "Announcements",
      categoryId: "DIC_kwDOIzIhlc4CTqle",
      mapping: "pathname",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      footnote: true,
      gfm: true,
      imgLazyload: true,
      figure: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      vuePlayground: true,
    },

  },
});
