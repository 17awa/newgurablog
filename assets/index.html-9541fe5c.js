import{_ as l,M as t,p as c,q as r,R as n,t as s,N as a,al as u,am as d,V as v,a1 as i}from"./framework-da4c7003.js";const k={},b=n("h1",{id:"使用renpy制作一个视觉小说游戏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用renpy制作一个视觉小说游戏","aria-hidden":"true"},"#"),s(" 使用renpy制作一个视觉小说游戏")],-1),g=n("p",null,"需要准备的东西:",-1),m={href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},q=i(`<h2 id="下载renpy" tabindex="-1"><a class="header-anchor" href="#下载renpy" aria-hidden="true">#</a> 下载renpy</h2><p><strong>首先你需要下载</strong><a href="www.renpy.org">renpy</a></p><p>然后打开<strong>renpy</strong></p><p>点击右下角的设置,选择简体中文</p><p>然后点击左侧的创建新项目,根据要求创建</p><p>创建好后打开vscode</p><p>在侧边栏选择最后一项:扩展</p><p>搜索<code>Ren&#39;Py Lauguage</code>下载</p><p>打开renpy用vscode打开编辑文件一栏的script.rpy</p><h2 id="角色" tabindex="-1"><a class="header-anchor" href="#角色" aria-hidden="true">#</a> 角色</h2><p>把<code>script.rpy</code>中的所有内容删除掉</p><p>由0开始</p><p>在顶部输入:</p><div class="language-rpy line-numbers-mode" data-ext="rpy"><pre class="language-rpy"><code><span class="token keyword">define</span> g <span class="token operator">=</span> <span class="token function">Character</span><span class="token punctuation">(</span><span class="token string">&quot;Gura&quot;</span><span class="token punctuation">,</span> <span class="token property">color</span><span class="token operator">=</span><span class="token string">&quot;#3b97ff&quot;</span><span class="token punctuation">)</span>
翻译<span class="token punctuation">:</span>定义 编号 <span class="token operator">=</span> 角色<span class="token punctuation">(</span><span class="token string">&quot;角色名字&quot;</span><span class="token punctuation">,</span>颜色<span class="token operator">=</span><span class="token string">&quot;#3b97ff&quot;</span><span class="token punctuation">)</span>
你可以选择把逗号到&quot;的所有内容都删除掉<span class="token punctuation">(</span>包含逗号<span class="token punctuation">)</span>
因为这只是给你的角色定义一个显示的颜色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可自定义内容:编号,角色名字,颜色</p><h2 id="启动画面" tabindex="-1"><a class="header-anchor" href="#启动画面" aria-hidden="true">#</a> 启动画面</h2><p>如果你想要在启动时播放一张图片,可以在角色下面加入以下代码</p><div class="language-rpy line-numbers-mode" data-ext="rpy"><pre class="language-rpy"><code>mage splash <span class="token operator">=</span> <span class="token string">&quot;biaoti.png&quot;</span>
<span class="token keyword">default</span> menuset <span class="token operator">=</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token tag">label</span> splashscreen<span class="token punctuation">:</span>
    <span class="token keyword">scene</span> biaoti <span class="token operator">with</span> <span class="token keyword">dissolve</span>
    <span class="token operator">with</span> <span class="token function">Pause</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">show</span> biaoti <span class="token operator">with</span> <span class="token keyword">dissolve</span>
    <span class="token operator">with</span> <span class="token function">Pause</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第1行的&quot;biaoti.png&quot;可以自定义,把照片存放在游戏目录下的images文件夹</p><p>然后用照片名替换&quot;biaoti.png&quot;</p><p>你也可以添加音频</p><div class="language-rpy line-numbers-mode" data-ext="rpy"><pre class="language-rpy"><code>mage splash <span class="token operator">=</span> <span class="token string">&quot;biaoti.png&quot;</span>
<span class="token keyword">default</span> menuset <span class="token operator">=</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token tag">label</span> splashscreen<span class="token punctuation">:</span>
    <span class="token keyword">scene</span> biaoti <span class="token operator">with</span> <span class="token keyword">dissolve</span>
    <span class="token operator">with</span> <span class="token function">Pause</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

     <span class="token keyword">play</span> <span class="token keyword">sound</span> <span class="token string">&quot;ping.ogg&quot;</span>

    <span class="token keyword">show</span> biaoti <span class="token operator">with</span> <span class="token keyword">dissolve</span>
    <span class="token operator">with</span> <span class="token function">Pause</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;ping.ogg&quot;同样可以自定义,打开游戏根目录,并在其中放入你的音频</p><p>然后在<code>script.rpy</code>中把ping.ogg给替换掉</p><h2 id="剧情" tabindex="-1"><a class="header-anchor" href="#剧情" aria-hidden="true">#</a> 剧情</h2><p>在启动画面的代码下面继续加入以下代码:</p><div class="language-rpy line-numbers-mode" data-ext="rpy"><pre class="language-rpy"><code><span class="token tag">label</span> start<span class="token punctuation">:</span>
    <span class="token keyword">scene</span> bj
    g <span class="token string">&quot;你好&quot;</span>
    <span class="token string">&quot;??&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我来给你介绍一下这段代码的意思</p><p>首先<code>label start</code>即为游戏开始时显示的内容</p><p><code>scene bj</code>意为播放名为&quot;bj&quot;的图片,在剧情中播放图片的功能</p><p>我们稍后再学</p><p>当然,如果你想要你的游戏看起来不那么单调,或是你想要再多学点</p>`,32),h=n("strong",null,"那么我建议你去看看",-1),y={href:"https://renpy.cn/doc/quickstart.html#image",target:"_blank",rel:"noopener noreferrer"},w=i(`<p><code>g &quot;你好&quot;</code>意为编号&quot;g&quot;的角色说了一句你好</p><p><code>&quot;??&quot;</code>可以是旁边,也可以是独白</p><p>来看看一段我的实例吧</p><div class="language-rpy line-numbers-mode" data-ext="rpy"><pre class="language-rpy"><code><span class="token tag">label</span> game<span class="token punctuation">:</span>
    <span class="token keyword">scene</span> bj
    <span class="token string">&quot;我迷迷糊糊地从床上起来&quot;</span>
    <span class="token string">&quot;只见一个女孩趴在我的身上&quot;</span>
    <span class="token keyword">scene</span> bj2
    <span class="token operator">with</span> <span class="token function">Dissolve</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span>
    w <span class="token string">&quot;hi~&quot;</span>
    <span class="token string">&quot;......?&quot;</span>
<span class="token tag">menu</span><span class="token punctuation">:</span>
    <span class="token string">&quot;你是谁?&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">jump</span> one
    <span class="token string">&quot;你为什么在我家?&quot;</span> <span class="token punctuation">:</span>
        <span class="token keyword">jump</span> two

<span class="token tag">label</span> one<span class="token punctuation">:</span>
    m <span class="token string">&quot;你是谁?&quot;</span>      
    g <span class="token string">&quot;我叫Gura&quot;</span>
    g <span class="token string">&quot;你也可以叫我古拉&quot;</span>
    <span class="token keyword">jump</span> essay
      
<span class="token tag">label</span> two<span class="token punctuation">:</span>
    m <span class="token string">&quot;你为什么在我家?&quot;</span>
    g <span class="token string">&quot;那个...&quot;</span>

<span class="token tag">label</span> essay<span class="token punctuation">:</span>
    g <span class="token string">&quot;我是一只鲨鱼&quot;</span>
    g <span class="token string">&quot;准确来说应该是鲨鱼娘&quot;</span>
    g <span class="token string">&quot;我本来在海里活的自由自在&quot;</span>
    g <span class="token string">&quot;那个时候有一只鱼掉了下来&quot;</span>
    g <span class="token string">&quot;拿来吧你&quot;</span>
    g <span class="token string">&quot;然后我就被钓上了船&quot;</span>
    g <span class="token string">&quot;我被钓上船之后他们把我带到了岸上&quot;</span>
    g <span class="token string">&quot;我被吓成了人形&quot;</span>
    <span class="token string">&quot;“这个人是中二病吧”&quot;</span>
    g <span class="token string">&quot;我不知道那些人们为什么看见我之后都遮住了眼睛&quot;</span>
    g <span class="token string">&quot;我不就是没穿衣服吗&quot;</span>
    g <span class="token string">&quot;我一路狂奔,跑到了这儿&quot;</span>
    g <span class="token string">&quot;见你门没锁,就进来了&quot;</span>
    <span class="token string">&quot;“我下次一定要锁好门”&quot;</span>
    g <span class="token string">&quot;事情就是这样&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你是初学者的话可能看不懂一些代码的意思</p><p>我来慢慢和你解释</p><h2 id="基础对话" tabindex="-1"><a class="header-anchor" href="#基础对话" aria-hidden="true">#</a> 基础对话</h2><div class="language-rpy line-numbers-mode" data-ext="rpy"><pre class="language-rpy"><code>    <span class="token keyword">scene</span> bj2
    <span class="token operator">with</span> <span class="token function">Dissolve</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在对话结束后播放名为&quot;bj2&quot;的图片,并使用了一个溶解的转场,溶解速度是2秒</p><div class="language-rpy line-numbers-mode" data-ext="rpy"><pre class="language-rpy"><code><span class="token tag">menu</span><span class="token punctuation">:</span>
    <span class="token string">&quot;你是谁?&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">jump</span> one
    <span class="token string">&quot;你为什么在我家?&quot;</span> <span class="token punctuation">:</span>
        <span class="token keyword">jump</span> two
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动一个菜单,这很厉害,因为如果利用好它,就可以做一个多结局游戏</p><div class="language-rpy line-numbers-mode" data-ext="rpy"><pre class="language-rpy"><code>    <span class="token string">&quot;你是谁?&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">jump</span> one
    <span class="token string">&quot;你为什么在我家?&quot;</span> <span class="token punctuation">:</span>
        <span class="token keyword">jump</span> two
<span class="token tag">label</span> one<span class="token punctuation">:</span>
    m <span class="token string">&quot;你是谁?&quot;</span>      
    g <span class="token string">&quot;我叫Gura&quot;</span>
    g <span class="token string">&quot;你也可以叫我古拉&quot;</span>
    <span class="token keyword">jump</span> essay
      
<span class="token tag">label</span> two<span class="token punctuation">:</span>
    m <span class="token string">&quot;你为什么在我家?&quot;</span>
    g <span class="token string">&quot;那个...&quot;</span>        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有两个选项,&quot;你是谁&quot;和&quot;你为什么在我家?&quot;</p><p>若选择了&quot;你是谁&quot;就会跳跃到<code>label one</code>的剧情</p><p>若选择了&quot;你为什么在我家?&quot;就会跳跃到<code>label two</code>的剧情</p><div class="language-rpy line-numbers-mode" data-ext="rpy"><pre class="language-rpy"><code><span class="token tag">label</span> one<span class="token punctuation">:</span>
    m <span class="token string">&quot;你是谁?&quot;</span>      
    g <span class="token string">&quot;我叫Gura&quot;</span>
    g <span class="token string">&quot;你也可以叫我古拉&quot;</span>
    <span class="token keyword">jump</span> essay
      
<span class="token tag">label</span> two<span class="token punctuation">:</span>
    m <span class="token string">&quot;你为什么在我家?&quot;</span>
    g <span class="token string">&quot;那个...&quot;</span>

<span class="token tag">label</span> essay<span class="token punctuation">:</span>
    g <span class="token string">&quot;我是一只鲨鱼&quot;</span>
    g <span class="token string">&quot;准确来说应该是鲨鱼娘&quot;</span>
    g <span class="token string">&quot;我本来在海里活的自由自在&quot;</span>
    g <span class="token string">&quot;那个时候有一只鱼掉了下来&quot;</span>
    g <span class="token string">&quot;拿来吧你&quot;</span>
    g <span class="token string">&quot;然后我就被钓上了船&quot;</span>
    g <span class="token string">&quot;我被钓上船之后他们把我带到了岸上&quot;</span>
    g <span class="token string">&quot;我被吓成了人形&quot;</span>
    <span class="token string">&quot;“这个人是中二病吧”&quot;</span>
    g <span class="token string">&quot;我不知道那些人们为什么看见我之后都遮住了眼睛&quot;</span>
    g <span class="token string">&quot;我不就是没穿衣服吗&quot;</span>
    g <span class="token string">&quot;我一路狂奔,跑到了这儿&quot;</span>
    g <span class="token string">&quot;见你门没锁,就进来了&quot;</span>
    <span class="token string">&quot;“我下次一定要锁好门”&quot;</span>
    g <span class="token string">&quot;事情就是这样&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段很简单,当<code>label one</code>走完之后就会跳跃到<code>label essay</code></p><p><code>label two</code>下面就是<code>label essay</code>,所以不需要跳跃代码</p><p>用这些基础的东西就能制作一款视觉小说游戏,怎么样?很简单吧</p><h2 id="gwam-ddlc-mods" tabindex="-1"><a class="header-anchor" href="#gwam-ddlc-mods" aria-hidden="true">#</a> GWAM DDLC MODS</h2>`,20),_=n("h2",{id:"最后",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最后","aria-hidden":"true"},"#"),s(" 最后")],-1),f=n("p",null,[n("strong",null,"我只能为你提供一些基础的东西")],-1),x=n("p",null,"接下来你可以选择",-1),j=n("strong",null,"去看看",-1),D={href:"https://renpy.cn/doc",target:"_blank",rel:"noopener noreferrer"},C=n("strong",null,"学习更多东西",-1),P=n("strong",null,"给你的游戏部署一个网站,",-1);function G(L,V){const e=t("ExternalLinkIcon"),o=t("VPCard"),p=t("RouterLink");return c(),r("div",null,[b,g,n("p",null,[n("a",m,[s("vscode"),a(e)])]),q,n("p",null,[h,n("a",y,[s("官方的教程"),a(e)])]),w,a(o,u(d({title:"GWAMDDLCMODS",desc:"我制作的ddlc模组",logo:"https://i.imgtg.com/2023/05/27/OoFGd1.png",link:"/id/GDM",color:"rgba(0, 0, 0, 0)"})),null,16),_,f,x,n("p",null,[j,n("a",D,[s("renpy的中文说明文档网站"),a(e)]),C]),n("p",null,[P,a(p,{to:"/id/gamenext/#%E7%AC%AC%E4%B8%80%E6%AD%A5"},{default:v(()=>[s("教程在这里")]),_:1})])])}const E=l(k,[["render",G],["__file","index.html.vue"]]);export{E as default};
