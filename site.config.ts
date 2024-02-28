import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'notionXwabe-e932f54dfca04f89abf025c4fabfd681',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Notions Wabe',
  domain: 'notion.wabe.co.kr',
  author: 'whale',

  // open graph metadata (optional)
  description: 'WABE - Notions Wabe',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'whale',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/images/notion-logo.64ce0d00.png',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: '카테고리',
    //   pageId: 'MOSA-ea6ffb6f029d434a82b154984b5d3c6b',
    // },
    // {
    //   title: '카테고리',
    //   pageId: 'MOSA-ea6ffb6f029d434a82b154984b5d3c6b',
    //   menuPage: true,
    // },
  ],

  // -------- custom configs (whale) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,
});
