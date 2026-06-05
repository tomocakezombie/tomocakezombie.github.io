import Util from '/src/config/Util';

export const args = {};
export const pages = {};
export const app = {
  setPages() {
    app.makePage('top', '/', 'Top');
    app.makePage('subpage', '/subpage', 'Subpage');
    app.makePage('about', '/about', 'About');
  },
  preInit() {
    args.siteName = 'tomocakezombie';
    args.titleSuffix = 'Portfolio';
    args.description = 'tomocakezombie のポートフォリオサイトです。';
    args.twitterIdWithAtMark = '@TWITTER_ID'; // @YOUR_ID
    args.lang = 'ja';
    args.locale = 'ja_JP';
    args.og_image = 'img/global/og.png';
  },
  postInit(pageArgs) {
    app.args = pageArgs ?? {};

    const prevent = structuredClone(args.prevent);
    // Overwrite args parameters
    Object.entries(app.args).forEach(([key, value]) => {
      args[key] = value;
    });
    Object.entries(prevent).forEach(([key, value]) => {
      args.prevent[key] ??= value;
    });

    // <title>PAGE_TITLE - SITE_NAME | TITLE_SUFFIX</title>
    args.title = Util.concatStr(app.args.title, { suffix: ' - ' }) + args.siteName + Util.concatStr(args.titleSuffix, { prefix: ' | ' });

    args.og_type = args.path === '/' ? 'website' : 'article';
    if (!getIsAbsUrl(args.og_image)) args.og_image = assetsUrl(args.og_image, true);
  },
  setConfig(Astro) {
    app.Astro = Astro;
    app.url = app.Astro.url;
    args.domain = app.url.hostname;
    args.path = app.url.pathname.replace(/\.html$/, '');
    args.url = app.url.origin + args.path;
    args.siteRootUrl = app.url.origin;
    args.siteRootUrlWithoutProtocol = app.url.host;
    args.urlWithoutProtocol = app.url.host + args.path;

    args.page = Object.values(pages).find((page) => page.route === args.path) ?? {};
    args.page.importVariables = Util.fs.getImportVariables(app.Astro.self.moduleId);

    args.prevent = {
      css: {},
      js: {},
    };
    args.assetList = Object.fromEntries(
      ['css', 'js'].map((ext) => {
        const value = [];
        const willAdd = (dir, file) => {
          const path = Util.sprintf('%s/%s.%s', dir, file, ext);
          const fileExist = Util.fs.exist(Util.sprintf('public/assets/%s/%s', ext, path));
          if (fileExist) value.push(path);
        };
        if (args.page.key) willAdd('pages', args.page.key);
        Object.entries(args.page.importVariables).forEach(([dirName, variableName]) => {
          willAdd(dirName, variableName);
        });
        return [ext, value];
      })
    );
  },
  makePage(key, argRoute, label) {
    const page = { key, route: route(argRoute), label };
    page.appRoute = Util.astro.removeBase(page.route);
    pages[key] = page;
  },
  init(Astro) {
    app.setPages();
    if (Astro) app.setConfig(Astro);
    app.preInit();
  },
  setPageConfig(pageArgs) {
    app.postInit(pageArgs);
  },
};

export const rootPath = (path, cacheBuster = false) => {
  const base = Util.rtrim(Util.astro.get('base')) + '/';
  path = base + Util.ltrim(path);
  if (cacheBuster) path += '?' + Date.now();
  return path;
};

export const assets = (path, cacheBuster = false) => {
  return rootPath('assets/' + Util.ltrim(path), cacheBuster);
};

export const assetsUrl = (path, cacheBuster = false) => {
  return Util.rtrim(app.Astro.url.origin) + assets(path, cacheBuster);
};

export const getIsAbsUrl = (url) => {
  return /^(?:\w+:)?\/\//.test(url);
};

export const img = (path) => {
  return assets('img/' + Util.ltrim(path));
};

export const route = (path) => {
  return Util.rtrim(rootPath(String(path))) + '/';
};
