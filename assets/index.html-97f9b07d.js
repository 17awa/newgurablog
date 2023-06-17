import{_ as t,M as l,p as d,q as o,R as n,t as s,N as a,a1 as i}from"./framework-da4c7003.js";const p={},c=n("h1",{id:"给你的游戏部署一个网站",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#给你的游戏部署一个网站","aria-hidden":"true"},"#"),s(" 给你的游戏部署一个网站")],-1),r={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"第一步",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第一步","aria-hidden":"true"},"#"),s(" 第一步")],-1),v=n("p",null,"需要准备的东西:",-1),b=n("p",null,"域名(国内有腾讯云,阿里云,国外有cloudflare)",-1),m={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},g={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},k={href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer"},y={href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer"},_=i(`<h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>注册并登入到你的github账号</p><p>点击左边的<code>new</code>,输入一个项目名字</p><p>接着在下面选择<code>Public</code>(公共的)</p><p>在Add.gitignore一栏搜索node.js并选择</p><p>Choose a license保持为None</p><p>然后点击<code>Create repository</code>创建存储库</p><p>创建好之后点击左边的<code>Code</code>,选择SSH</p><p>复制SSH key</p><h2 id="第三步" tabindex="-1"><a class="header-anchor" href="#第三步" aria-hidden="true">#</a> 第三步</h2><p>在你的磁盘下面新建一个文件夹,然后右键文件夹</p><p>在右键菜单中选择<code>Git Bash Here</code></p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>输入git clone [第二步获取的SSH key]
等待下载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在下载完成之后在git输入</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>yarn add -D vuepress@next
echo <span class="token string">&#39;# Hello VuePress&#39;</span> &gt; README.md
yarn vuepress dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在所有指令都执行完后你会获得一个网址:http://localhost:8080/</p><p>显示Hello VuePress即成功</p><h2 id="第四步" tabindex="-1"><a class="header-anchor" href="#第四步" aria-hidden="true">#</a> 第四步</h2><p>现在的网站没有主题,非常简洁</p><p>在git中输入</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>yarn init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待初始化完成之后在git输入</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>code .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动vscode</p><p>打开<code>package.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>在<span class="token string">&quot;scripts&quot;</span>下面添加
<span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着在git中输入</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>mkdir docs
echo <span class="token string">&#39;# Hello VuePress&#39;</span> &gt; docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>并删除<code>package.json</code>那层目录下的<code>README.md</code></p><p>不要删除docs目录下的<code>README.md</code></p><p>然后在git输入<code>yarn docs:dev</code>来启动网站</p><p>按Ctrl+c关闭网站服务</p><p>打开docs/.vuepress/新建一个名为<code>config.js</code>的文件</p><p>在其中输入</p><div class="language-config.js line-numbers-mode" data-ext="config.js"><pre class="language-config.js"><code>import { defaultTheme } from &#39;vuepress&#39;

export default {
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: &#39;首页&#39;,
        link: &#39;/&#39;,
      },
    ],
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docs文件夹中的README.md为网站主页,配置可以参考我的</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> Gura
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//i.imgtg.com/2023/04/15/XxPDU.jpg
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> Gura
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> 帮助文档
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 快速开始
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /id/game/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 下载Gura
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /id/xiazai/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary   
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 介绍
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /id/game/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 游戏引擎
  <span class="token key atrule">details</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.renpy.org/
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 下载
  <span class="token key atrule">details</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//game.17smc.xyz/id/xiazai/
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 源码
  <span class="token key atrule">details</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//game.17smc.xyz/id/code/
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MY GAME <span class="token punctuation">|</span> Copyright © 2023</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后</p><p>执行<code>yarn docs:dev</code>预览网站</p><h2 id="第五步" tabindex="-1"><a class="header-anchor" href="#第五步" aria-hidden="true">#</a> 第五步</h2><p>现在把你的网页部署到github上</p><p>在根目录新建一个名为<code>deploy.sh</code>的文件,并在其中输入(第23行内容请把<code>&lt;USERNAME&gt;</code>替换为你的github名字,<code>&lt;REPO&gt;</code>替换为第二步中数据库的名字)</p><div class="language-deploy.sh line-numbers-mode" data-ext="deploy.sh"><pre class="language-deploy.sh"><code>#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo &#39;你的域名&#39; &gt; CNAME

git init
git add -A
git commit -m &#39;deploy&#39;

# 这两行请注释 https://&lt;USERNAME&gt;.github.io
# git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master

# 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:main

cd -
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>package.json</code>的<code>scripts</code>底下添加</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在git中输入<code>yarn deploy</code></p><p>检查github仓库是否已经上传好网页文件</p>`,47),f={href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer"},x=i('<p>选择你存放网页文件的数据库,点击<code>Deploy</code>,等待部署完成</p><p>然后点左侧的<code>View Domains</code>,按要求解析域名</p><p>打开网站,这就是你的成果</p><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>学习一些markdown语法,这很简单</p><p>给你的网站写一些文档</p>',6);function q(E,j){const e=l("ExternalLinkIcon");return d(),o("div",null,[c,n("p",null,[s("网站框架:"),n("a",r,[s("vuepressV2"),a(e)])]),u,v,b,n("p",null,[n("a",m,[s("node.js"),a(e)])]),n("p",null,[n("a",g,[s("git"),a(e)])]),n("p",null,[n("a",k,[s("vscode"),a(e)])]),n("p",null,[n("a",h,[s("github账号"),a(e)])]),n("p",null,[n("a",y,[s("vercel账号"),a(e)])]),_,n("p",null,[s("接着,打开"),n("a",f,[s("vercel"),a(e)]),s("用github登录")]),x])}const M=t(p,[["render",q],["__file","index.html.vue"]]);export{M as default};
