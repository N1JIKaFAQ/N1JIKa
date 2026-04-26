// ===== Month 3: 和弦构造与进行 (Days 61-90) =====
LESSONS[3] = [
  { id:61, month:3, title:'三和弦入门：大三和弦', practiceMins:15, tags:['和弦','三和弦'], quizIds:[31],
    content:`<h3>三和弦（Triad）</h3><p>三和弦由三个音组成，是<strong>和弦的基础</strong>。</p>
    <h3>大三和弦（Major Triad）</h3><p>构成：<strong>根音 + 大三度(4半音) + 纯五度(7半音)</strong></p>
    <p>C大三和弦：C(根音) + E(大三度) + G(纯五度)</p>
    <p>听感：明亮、快乐、稳定。</p>
    <p>在吉他上最常见的C大三和弦就是标准<strong>C和弦</strong>（5弦3品、4弦2品、2弦1品）。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C大三和弦（C-E-G），然后分解弹（先弹C，再E，再G）。记住每个音——根音、三音、五音。</p></div>` },
  { id:62, month:3, title:'小三和弦', practiceMins:15, tags:['和弦','三和弦'], quizIds:[32],
    content:`<h3>小三和弦（Minor Triad）</h3><p>构成：<strong>根音 + 小三度(3半音) + 纯五度(7半音)</strong></p>
    <p>C小三和弦：C(根音) + Eb(小三度) + G(纯五度)</p>
    <p>听感：忧伤、柔和、暗淡。</p>
    <p>与C大三和弦的唯一区别：<strong>E变成了Eb（降了半音）</strong>。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>对比弹C和弦（C E G）和Cm和弦（C Eb G）。注意三音（E→Eb）的变化如何完全改变了和弦的情绪！</p></div>` },
  { id:63, month:3, title:'减三和弦与增三和弦', practiceMins:15, tags:['和弦','三和弦'], quizIds:[38,39],
    content:`<h3>减三和弦（Diminished Triad）</h3><p>构成：根音 + 小三度 + 减五度（3半音 + 6半音）</p>
    <p>Cdim：C Eb Gb。听感：紧张、不稳定</p>
    <h3>增三和弦（Augmented Triad）</h3><p>构成：根音 + 大三度 + 增五度（4半音 + 8半音）</p>
    <p>Caug：C E G#。听感：梦幻、悬疑</p>
    <div class="highlight-box">💡 四种三和弦类型：大(4+3半音)、小(3+4半音)、减(3+3半音)、增(4+4半音)。看中间的三度间隔！</div>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>依次弹C→Cm→Cdim→Caug，感受四种不同的和声色彩。从最亮到最暗的渐变。</p></div>` },
  { id:64, month:3, title:'和弦的转位', practiceMins:20, tags:['和弦','转位'],
    content:`<h3>和弦转位（Chord Inversion）</h3><p>当根音不是最低音时，和弦就发生了转位。</p>
    <ul><li><strong>原位</strong>：根音在最低</li><li><strong>第一转位</strong>：三音在最低</li><li><strong>第二转位</strong>：五音在最低</li></ul>
    <p>转位不改变和弦性质，但改变听觉上的"色彩"和"平衡"。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C和弦的三种位置：C-E-G（原位），E-G-C（第一转位），G-C-E（第二转位）。同样三个音，感觉不同！</p></div>` },
  { id:65, month:3, title:'和弦在指板上的形状', practiceMins:20, tags:['和弦','指板'],
    content:`<h3>三和弦在相邻弦上的形状</h3><p>三和弦可以在相邻的三根弦上按出，形成三种"弦组"：</p>
    <ul><li><strong>6-5-4弦</strong>：低音区，厚重</li><li><strong>5-4-3弦</strong>：中低音区</li><li><strong>4-3-2弦</strong>：中音区，常用</li><li><strong>3-2-1弦</strong>：高音区，明亮</li></ul>
    <p>每种弦组都有大三和弦和小三和弦的固定指型。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在3-2-1弦上找到C大三和弦（G弦5品C、B弦5品E、E弦3品G——这是一个第二转位C和弦）。</p></div>` },
  { id:66, month:3, title:'七和弦：大七和弦（maj7）', practiceMins:15, tags:['和弦','七和弦'], quizIds:[33],
    content:`<h3>七和弦（Seventh Chord）</h3><p>七和弦 = 三和弦 + 第七音。</p>
    <h3>大七和弦（Major 7th）</h3><p>Cmaj7：C E G B（C大三和弦 + 大七度B）</p>
    <p>听感：梦幻、爵士、丰富。在许多R&B和爵士乐中广泛使用。</p>
    <p>Cmaj7在吉他上一个简单的按法：5弦3品(C)→4弦2品(E)→3弦空弦(G)→2弦空弦(B)——放开1弦！</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹标准C和弦 → 松开1弦和2弦 → 这就是C大七和弦！（C E G B）。感受那个"梦幻"的声音。</p></div>` },
  { id:67, month:3, title:'属七和弦（dom7）', practiceMins:15, tags:['和弦','七和弦'], quizIds:[34],
    content:`<h3>属七和弦（Dominant 7th）</h3><p>C7：C E G Bb（C大三和弦 + 小七度Bb）</p>
    <p>听感：蓝调、Rock'n'Roll、紧张——急需解决到F（纯四度下行）。</p>
    <p>属七和弦是<strong>最常用的七和弦</strong>——它是蓝调的基础和声。</p>
    <p>C7在吉他上的按法：5弦3品(C)、4弦2品(E)、3弦3品(Bb)、2弦1品(C)、1弦3品(E)——或标准C和弦加上Bb音。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C7，然后解决到F和弦。感受"紧张→释放"的和声进行——这是蓝调的核心。</p></div>` },
  { id:68, month:3, title:'小七和弦（min7）', practiceMins:15, tags:['和弦','七和弦'],
    content:`<h3>小七和弦（Minor 7th）</h3><p>Cm7：C Eb G Bb（C小三和弦 + 小七度Bb）</p>
    <p>听感：柔和、爵士、忧郁。</p>
    <p>Cm7按法：5弦3品(C)→4弦1品(Eb)→3弦3品(Bb)→2弦1品(C)→1弦3品(G)</p>
    <p>小七和弦在爵士乐中非常常见，是ii-V-I进行中的ii级和弦。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹Cm7 → F7 → Bbmaj7（ii-V-I进行）。这是爵士乐最经典的和声进行！</p></div>` },
  { id:69, month:3, title:'其他七和弦：m7b5、dim7、minMaj7', practiceMins:15, tags:['和弦','七和弦'],
    content:`<h3>半减七和弦（m7b5）</h3><p>Cm7b5：C Eb Gb Bb（减三和弦+小七度）</p>
    <p>爵士乐中的ii级和弦（小调ii-V-i）。听感：紧张、复杂。</p>
    <h3>减七和弦（dim7）</h3><p>Cdim7：C Eb Gb A（减三和弦+减七度）</p>
    <p>听感：极具紧张感，常用于过渡。</p>
    <h3>小大七和弦（minMaj7）</h3><p>CminMaj7：C Eb G B（小三和弦+大七度）</p>
    <p>听感：奇异、神秘。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>先练好maj7、dom7、min7三种基本的七和弦，再扩展其他类型。</p></div>` },
  { id:70, month:3, title:'七和弦指型总结', practiceMins:20, tags:['和弦','七和弦','指型'],
    content:`<h3>E型七和弦指型</h3><p>以E型为基础，在不同弦组上构建七和弦：</p>
    <table class="note-table"><tr><th>类型</th><th>6-5-4-3弦指型</th></tr>
    <tr><td>Xmaj7</td><td>根音在6弦，食指横按</td></tr>
    <tr><td>X7</td><td>根音在6弦，b7音在4弦</td></tr>
    <tr><td>Xm7</td><td>根音在6弦，b3和b7</td></tr></table>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦5品（A）上分别按Amaj7、A7、Am7——用E指型。弹奏并比较三种和弦的色彩差异。</p></div>` },
  { id:71, month:3, title:'大调顺阶和弦', practiceMins:20, tags:['和弦','和声进行'], quizIds:[35],
    content:`<h3>什么是顺阶和弦？</h3><p>顺阶和弦（Diatonic Chords）是在一个调内，从每个音级上构建的三和弦。</p>
    <h3>C大调顺阶和弦</h3><table class="note-table"><tr><th>级数</th><th>和弦</th><th>音</th><th>性质</th></tr>
    <tr><td>I</td><td>C</td><td>C E G</td><td>大三</td></tr>
    <tr><td>ii</td><td>Dm</td><td>D F A</td><td>小三</td></tr>
    <tr><td>iii</td><td>Em</td><td>E G B</td><td>小三</td></tr>
    <tr><td>IV</td><td>F</td><td>F A C</td><td>大三</td></tr>
    <tr><td>V</td><td>G</td><td>G B D</td><td>大三</td></tr>
    <tr><td>vi</td><td>Am</td><td>A C E</td><td>小三</td></tr>
    <tr><td>vii°</td><td>Bdim</td><td>B D F</td><td>减三</td></tr></table>
    <div class="highlight-box">💡 规律：大调顺阶和弦中I、IV、V是大三，ii、iii、vi是小三，vii是减三。</div>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在吉他上弹C大调的I-ii-iii-IV-V-vi-vii°：C→Dm→Em→F→G→Am→Bdim→C。</p></div>` },
  { id:72, month:3, title:'G大调与D大调顺阶和弦', practiceMins:20, tags:['和弦','和声进行'], quizIds:[36],
    content:`<h3>G大调顺阶和弦</h3><p>G A B C D E F#（1个升号）</p>
    <p>I=G / ii=Am / iii=Bm / IV=C / V=D / vi=Em / vii°=F#dim</p>
    <h3>D大调顺阶和弦</h3><p>D E F# G A B C#（2个升号）</p>
    <p>I=D / ii=Em / iii=F#m / IV=G / V=A / vi=Bm / vii°=C#dim</p>
    <p>对比C、G、D大调的顺阶和弦——你会发现所有大调的规律完全一样！</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>分别在C、G、D大调上弹奏I-ii-iii-IV-V-vi，感受"相同级数、不同调高"的和声效果。</p></div>` },
  { id:73, month:3, title:'常用和声进行：I-IV-V', practiceMins:15, tags:['和声进行','蓝调'],
    content:`<h3>I-IV-V — 蓝调/摇滚的基础</h3><p>I-IV-V是音乐中<strong>最常用</strong>的和声进行。</p>
    <p>在C大调中：C → F → G → C</p>
    <p>在G大调中：G → C → D → G</p>
    <p>在E大调中：E → A → B → E</p>
    <p>无数经典歌曲使用这个进行——从蓝调到摇滚到流行。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→F→G→C。这是摇滚和蓝调的"三和弦"基础。尝试用不同的节奏型弹奏——强力和弦、扫弦、分解和弦。</p></div>` },
  { id:74, month:3, title:'常用和声进行：I-V-vi-IV', practiceMins:15, tags:['和声进行','流行'],
      content:`<h3>I-V-vi-IV — 流行金曲进行</h3><p>这是2000年以来流行音乐中最常见的进行！</p>
      <p>在C大调中：C → G → Am → F</p>
      <p>用这个进行写的歌曲：</p><ul><li>"Let It Be" - The Beatles</li>
      <li>"Don't Stop Believing" - Journey</li>
      <li>"With Or Without You" - U2</li>
      <li>以及数百首其他歌曲！</li></ul>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→G→Am→F。先用慢速分解，再尝试扫弦。这是每个吉他手必须会的进行！</p></div>` },
  { id:75, month:3, title:'12小节蓝调和弦进行', practiceMins:20, tags:['蓝调','和声进行'], quizIds:[37],
    content:`<h3>12小节蓝调（12-Bar Blues）</h3><p>最经典的蓝调进行结构：</p>
    <p style="padding:12px;background:var(--bg-surface);border-radius:8px;text-align:center;font-size:16px">
    <strong>I | I | I | I | IV | IV | I | I | V | IV | I | I ||</strong></p>
    <p>在A调（最常见的蓝调调性）中：</p>
    <p style="padding:8px;background:var(--bg-surface);border-radius:8px;text-align:center">
    A7 | A7 | A7 | A7 | D7 | D7 | A7 | A7 | E7 | D7 | A7 | A7 ||</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在A调中弹12小节蓝调！所有和弦都用属七和弦（A7→D7→E7）。打开节拍器，每小节4拍。</p></div>` },
  { id:76, month:3, title:'小调和声进行', practiceMins:15, tags:['和声进行','小调'], quizIds:[40],
    content:`<h3>小调常用进行</h3><p>A小调顺阶和弦：Am(vi) → Bdim(vii°) → C(I) → Dm(ii) → Em(iii) → F(IV) → G(V)</p>
    <h4>常用小调进行</h4><ul>
    <li><strong>i-iv-v</strong>：Am → Dm → Em（小调蓝调基础）</li>
    <li><strong>i-VI-III-VII</strong>：Am → F → C → G（流行摇滚常用）</li>
    <li><strong>i-iv-VII-III</strong>：Am → Dm → G → C（多里亚调式感）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹Am→F→C→G（i-VI-III-VII）。这是小调中非常优美的进行，许多歌曲使用它。</p></div>` },
  { id:77, month:3, title:'和弦功能：主、属、下属', practiceMins:15, tags:['和声','功能'], quizIds:[38],
    content:`<h3>和弦的三个功能组</h3><p>和弦在调式中承担不同的功能：</p>
    <ul><li><strong>主功能（Tonic）</strong>：I、iii、vi — 稳定、放松</li>
    <li><strong>下属功能（Subdominant）</strong>：IV、ii — 色彩变化</li>
    <li><strong>属功能（Dominant）</strong>：V、vii°— 紧张、引导到主</li></ul>
    <p>经典的"紧张→释放"进行：<strong>Tonic → Subdominant → Dominant → Tonic</strong></p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→F→G→C。感受每个和弦的"功能感"：C(稳定)→F(色彩变化)→G(紧张)→C(释放)。</p></div>` },
  { id:78, month:3, title:'终止式（Cadence）', practiceMins:15, tags:['和声','终止式'], quizIds:[42,43],
    content:`<h3>终止式类型</h3><table class="note-table"><tr><th>类型</th><th>进行</th><th>听感</th></tr>
    <tr><td>完全终止</td><td>V → I</td><td>最"结束"的感觉</td></tr>
    <tr><td>变格终止</td><td>IV → I</td><td>"阿门"终止（教堂赞美诗）</td></tr>
    <tr><td>半终止</td><td>结束在V</td><td>暂停、未完待续</td></tr>
    <tr><td>假终止</td><td>V → vi</td><td>意外、惊喜</td></tr></table>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹四种终止式：G→C（完全）、F→C（变格）、Am→G（半终止）、G→Am（假终止）。</p></div>` },
  { id:79, month:3, title:'和弦替换基础', practiceMins:20, tags:['和弦','替换'],
    content:`<h3>和弦替换（Chord Substitution）</h3><p>用功能相似的和弦替换原和弦，增加和声色彩。</p>
    <h4>常用替换</h4><ul><li><strong>V→bVII7</strong>：蓝调摇滚中常用（G7→F7代替G7→C）</li>
    <li><strong>iii代替I</strong>：Em代替C（共享两个共同音）</li>
    <li><strong>ii代替IV</strong>：Dm代替F（功能相似）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→G→Am→F（原版），再弹C→G→Am→Dm（用Dm代替F）。声音变了但依然和谐！</p></div>` },
  { id:80, month:3, title:'综合练习：分析和弦进行', practiceMins:20, tags:['和弦','分析'],
    content:`<h3>分析经典歌曲的和弦</h3><p>找一首你喜欢的歌的和弦谱，分析它的和声进行：</p>
    <ol><li>确定调性（看结束在什么和弦）</li>
    <li>标记每个和弦的级数（I、ii、V等）</li>
    <li>识别进行模式（I-IV-V、I-V-vi-IV等）</li>
    <li>找终止式的位置</li></ol>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>拿一首简单的歌（如"平安夜"或你喜欢的流行歌），分析它的和弦级数。写下和声分析！</p></div>` },
  { id:81, month:3, title:'强力和弦（Power Chord）', practiceMins:15, tags:['和弦','强力和弦'], quizIds:[44],
    content:`<h3>强力和弦（Power Chord）</h3><p>强力和弦 = <strong>根音 + 纯五度</strong>（有时加八度）。</p>
    <p>它既不是大调也不是小调——没有三音！所以非常"中性"，在摇滚和金属中广泛使用。</p>
    <p>按法：食指按根音，无名指按同弦+2品的五音，小指按下一弦+2品的八度（可选）。</p>
    <p>C5（C强力和弦）：6弦3品(C) + 5弦5品(G) = C + G</p>
    <div class="highlight-box">💡 强力和弦用"5"表示（如C5、G5、A5），表示只有根音和五度。</div>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦上移动强力和弦：E5(0品)→F5(1品)→F#5(2品)→G5(3品)→G#5(4品)→A5(5品)。这是摇滚Riff的基础！</p></div>` },
  { id:82, month:3, title:'挂留和弦（Sus2 & Sus4）', practiceMins:15, tags:['和弦','挂留'], quizIds:[41],
    content:`<h3>挂留和弦（Suspended Chord）</h3><p>挂留和弦用2度或4度代替三音，产生"悬而未决"的声音。</p>
    <ul><li><strong>Sus2</strong>：根音 + 大二度 + 纯五度（如Csus2：C D G）</li>
    <li><strong>Sus4</strong>：根音 + 纯四度 + 纯五度（如Csus4：C F G）</li></ul>
    <p>挂留和弦的听感：开放、悬空、期待解决。通常解决到对应的三和弦。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→Csus4→C：C(0)→F(用你5弦3品C，加上4弦3品F)→C(回到C)。感受"悬空→解决"的过程。</p></div>` },
  { id:83, month:3, title:'六和弦与九和弦', practiceMins:15, tags:['和弦','延伸'],
    content:`<h3>六和弦（6th Chord）</h3><p>C6：C E G A（C大三和弦 + 大六度A）。爵士和波萨诺瓦风格。</p>
    <h3>九和弦（9th Chord）</h3><p>C9：C E G Bb D（C7 + 大九度D）。放克和爵士中常见。</p>
    <p>延伸和弦为音乐增加色彩和丰富度。如果你想让你的和弦听起来更"爵士"，尝试加入6、9、11、13音。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>从C和弦开始，逐步"丰富"它：C→Cmaj7→C6→C9。感受每个步骤增加的色彩。</p></div>` },
  { id:84, month:3, title:'和弦实战：经典歌曲和弦分析', practiceMins:20, tags:['和弦','实战'],
    content:`<h3>用顺阶和弦理论分析实际歌曲</h3><h4>"Let It Be" - The Beatles</h4><p>C大调：C → G → Am → F → C → G → F → C（I-V-vi-IV-I-V-IV-I）</p>
    <h4>"Wonderwall" - Oasis</h4><p>E小调转G大调：Em → G → D → A7 → C → G → D → Em</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>学弹"Let It Be"的和弦。分析每一句歌的和弦级数——你会发现整首歌基本只用了I、V、vi、IV四个和弦！</p></div>` },
  { id:85, month:3, title:'和弦进行作曲练习', practiceMins:25, tags:['和弦','作曲'],
    content:`<h3>用和弦进行创作</h3><p>今天尝试用已学的和弦进行创作：</p>
    <h4>方法：</h4><ol><li>选一个调（推荐C或G大调）</li>
    <li>写一个4和弦循环（如I-V-vi-IV）</li>
    <li>尝试不同的节奏型（扫弦、分解、强力和弦）</li>
    <li>加入一个"替换"和弦让进行更独特</li></ol>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>创作你自己的4和弦循环！在C大调中从I、ii、iii、IV、V、vi中选4个，排列成有趣的进行。尝试不同的顺序！</p></div>` },
  { id:86, month:3, title:'和弦转位在伴奏中的应用', practiceMins:15, tags:['和弦','伴奏'], quizIds:[45],
    content:`<h3>用转位让伴奏更流动</h3><p>使用和弦转位可以让低音线更连贯（不像根音跳跃那么大）。</p>
    <p>C → G → Am → F 的转位版本（让低音更顺滑）：</p>
    <p>C → G/B（低音B）→ Am → F（或F/A低音A）</p>
    <div class="highlight-box">💡 如果你想让伴奏听起来更专业，多使用转位和弦让低音线有"旋律感"。</div>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→G/B→Am→C/G→F（带转位的I-V-vi-IV）。对比原版，感受低音的流动感。</p></div>` },
  { id:87, month:3, title:'常见和弦指型速查', practiceMins:20, tags:['和弦','指型','参考'],
    content:`<h3>必须掌握的开放和弦</h3><p>以下开放和弦每个吉他手必须能快速切换：</p>
    <p><strong>C大调组</strong>：C、Dm、Em、F、G、Am、Bdim</p>
    <p><strong>E小调组</strong>：Em、F#dim、G、Am、Bm、C、D</p>
    <p><strong>G大调组</strong>：G、Am、Bm、C、D、Em、F#dim</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>练习快速切换：C→Am→Dm→G→C。计时1分钟，看你能切换多少次！目标是流畅无停顿。</p></div>` },
  { id:88, month:3, title:'和弦与旋律的关系', practiceMins:20, tags:['和弦','旋律'],
    content:`<h3>和弦与旋律的关系</h3><p>旋律通常使用当前和弦的<strong>和弦内音</strong>作为目标音。</p>
    <p>例如在C和弦上：旋律的"安全音"是C、E、G。</p>
    <p>在Am和弦上：旋律的"安全音"是A、C、E。</p>
    <p>当旋律使用和弦外音时，会产生紧张感——然后解决到和弦内音。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C和弦，然后用C-E-G三个音即兴创作一段简单的旋律。然后换Am和弦，用A-C-E即兴。</p></div>` },
  { id:89, month:3, title:'属七和弦的替代', practiceMins:20, tags:['和弦','替换'],
    content:`<h3>三全音替代（Tritone Substitution）</h3><p>最常用的和弦替换技术之一。将V7用根音相距三全音（b5）的另一个属七和弦代替。</p>
    <p>例如：G7（V7 in C）→ Db7（G的三全音替代）</p>
    <p>Db7和G7共享相同的3音和7音（B和F），只是位置互换！</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→G7→C（原版），再弹C→Db7→C（三全音替代）。Db7依旧可以解决到C——这是爵士乐的核心技巧！</p></div>` },
  { id:90, month:3, title:'月总复习：第三月总结', practiceMins:20, tags:['复习','总结'],
    content:`<h3>🎉 第三月完成！</h3><p>本月学到的知识点：</p>
    <ul><li>✅ 四种三和弦（大、小、减、增）</li>
    <li>✅ 七和弦（maj7、dom7、min7、m7b5、dim7）</li>
    <li>✅ 大调顺阶和弦</li>
    <li>✅ 常用和声进行（I-IV-V、I-V-vi-IV、12小节蓝调）</li>
    <li>✅ 和弦功能（主、属、下属）与终止式</li>
    <li>✅ 和弦转位、强力和弦、挂留和弦</li>
    <li>✅ 和弦替换入门</li></ul>
    <div class="exercise-box"><h4>📝 总复习</h4><p>写出C大调的顺阶和弦（I到vii°）。弹12小节蓝调进行。在你的歌曲中找到3个不同的终止式。</p></div>` }
];

// ===== Month 4: 节奏与律动 (Days 91-120) =====
LESSONS[4] = [
  { id:91, month:4, title:'时值基础：全音、二分、四分音符', practiceMins:15, tags:['节奏','时值'], quizIds:[46],
    content:`<h3>音符的时值</h3><p>在4/4拍中（每小节4拍，四分音符为1拍）：</p>
    <table class="note-table"><tr><th>音符</th><th>时值</th><th>写法</th></tr>
    <tr><td>全音符</td><td>4拍</td><td>一个空心椭圆</td></tr>
    <tr><td>二分音符</td><td>2拍</td><td>空心椭圆+符干</td></tr>
    <tr><td>四分音符</td><td>1拍</td><td>实心椭圆+符干</td></tr>
    <tr><td>八分音符</td><td>1/2拍</td><td>实心+符干+符尾</td></tr>
    <tr><td>十六分音符</td><td>1/4拍</td><td>实心+符干+双符尾</td></tr></table>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>设置节拍器60BPM。每拍弹一个音（四分音符）。然后每2拍一个音（二分音符）。最后每4拍一个音（全音符）。感受不同时值的长度。</p></div>` },
  { id:92, month:4, title:'八分音符与十六分音符', practiceMins:15, tags:['节奏','时值'], quizIds:[47,51],
    content:`<h3>八分音符（8th Notes）</h3><p>在4/4拍中，八分音符 = 半拍。一拍两个八分音符。</p>
    <p>数拍：<strong>1-and-2-and-3-and-4-and</strong></p>
    <h3>十六分音符（16th Notes）</h3><p>十六分音符 = 1/4拍。一拍四个十六分音符。</p>
    <p>数拍：<strong>1-e-and-a-2-e-and-a-3-e-and-a-4-e-and-a</strong></p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>节拍器60BPM。先弹四分音符（每拍1下），再弹八分音符（每拍2下），再弹十六分音符（每拍4下）。注意保持手臂放松！</p></div>` },
  { id:93, month:4, title:'附点与切分音', practiceMins:20, tags:['节奏','切分'], quizIds:[48],
    content:`<h3>附点音符（Dotted Note）</h3><p>附点 = 延长原时值的一半。</p>
    <ul><li>附点四分音符 = 1 + 0.5 = 1.5拍</li>
    <li>附点八分音符 = 0.5 + 0.25 = 0.75拍</li></ul>
    <h3>切分音（Syncopation）</h3><p>切分音是<strong>在弱拍上强调重音</strong>，打破正常的强弱规律。</p>
    <p>在4/4拍中，正常的强弱是：<strong>强-弱-次强-弱</strong>。切分会在"弱"或"弱位"上加重。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹简单的切分节奏：在八分音符的"and"（后半拍）上加重音。这是放克和雷鬼节奏的核心！</p></div>` },
  { id:94, month:4, title:'三连音', practiceMins:20, tags:['节奏','三连音'], quizIds:[49],
    content:`<h3>三连音（Triplet）</h3><p>三连音将一个时值均分为<strong>三个相等的部分</strong>。</p>
    <p>八分三连音：1拍内均匀弹3个音。数拍：<strong>1-trip-let-2-trip-let...</strong></p>
    <p>三连音制造"摇摆"和"推动感"，在蓝调、爵士中极其重要。</p>
    <div class="highlight-box">💡 蓝调/爵士的"摇摆"感本质上就是基于三连音的节奏——每个八分音符被弹成近似三连音的前两个音。</div>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>节拍器60BPM。先弹四分音符，然后在每拍内弹一组三连音（每拍3下）。嘴里念"1-trip-let, 2-trip-let"。</p></div>` },
  { id:95, month:4, title:'休止符与呼吸', practiceMins:10, tags:['节奏','休止符'],
    content:`<h3>休止符（Rest）</h3><p>休止符表示静音——在音乐中和音符同等重要！</p>
    <ul><li>全休止符 = 静音4拍</li><li>二分休止符 = 静音2拍</li><li>四分休止符 = 静音1拍</li><li>八分休止符 = 静音半拍</li></ul>
    <p>许多吉他手的通病是"不停地弹"——学会用休止符制造节奏间隙，会让你的演奏更有张力。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹4拍然后休4拍——重复。然后尝试：弹2拍休2拍→弹1拍休1拍→弹半拍休半拍。控制好时间！</p></div>` },
  { id:96, month:4, title:'拍号入门：4/4拍', practiceMins:15, tags:['节奏','拍号'], quizIds:[50,57],
    content:`<h3>拍号（Time Signature）</h3><p>拍号写在谱表开头：如4/4</p>
    <ul><li><strong>上方的数字</strong>：每小节的拍数</li>
    <li><strong>下方的数字</strong>：以几分音符为一拍</li></ul>
    <h3>4/4拍</h3><p>4/4拍 = 每小节4拍，四分音符为一拍。强弱规律：<strong>强-弱-次强-弱</strong></p>
    <p>4/4拍是最常见的拍号——绝大多数流行、摇滚、蓝调歌曲使用4/4拍。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>打开节拍器60BPM。用脚踩拍子（每拍一下）。在1拍和3拍加重音（强拍），2和4拍轻弹。感受4/4拍的"律动感"。</p></div>` },
  { id:97, month:4, title:'3/4拍与华尔兹节奏', practiceMins:15, tags:['节奏','拍号'], quizIds:[59],
    content:`<h3>3/4拍</h3><p>3/4拍 = 每小节3拍，四分音符为一拍。强弱规律：<strong>强-弱-弱</strong></p>
    <p>3/4拍产生"旋转"的三拍子感，也称为华尔兹节奏。</p>
    <p>3/4拍的经典歌曲："Yesterday" - The Beatles、"Hallelujah" - Leonard Cohen</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹3/4拍的分解和弦：C-E-G-C-E-G（每拍一个音）。注意第一拍加重音——"咚-哒-哒-咚-哒-哒"。</p></div>` },
  { id:98, month:4, title:'6/8拍', practiceMins:15, tags:['节奏','拍号'], quizIds:[58],
    content:`<h3>6/8拍</h3><p>6/8拍 = 每小节6拍，八分音符为一拍。但实际每小节被感知为<strong>两大拍</strong>：</p>
    <p>强弱规律：<strong>强-弱-弱-次强-弱-弱</strong>（每三拍一个分组）</p>
    <p>6/8拍的听感：摇曳、流动，像摇篮曲。</p>
    <p>6/8的经典："Nothing Else Matters" - Metallica（前奏部分）、"Everybody Hurts" - REM</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>节拍器设到八分音符速度180。每拍弹一个音，但把重音放在第1和第4个音上——"强-弱-弱-次强-弱-弱"。</p></div>` },
  { id:99, month:4, title:'2/2拍（二二拍）', practiceMins:15, tags:['节奏','拍号'],
    content:`<h3>2/2拍（Alla Breve）</h3><p>2/2拍 = 每小节2拍，二分音符为一拍。</p>
    <p>也叫"二二拍"或"Cut Time"。虽然每小节2拍，但感觉比2/4拍更"大"。</p>
    <p>在2/2拍中：全音符=2拍，二分音符=1拍，四分音符=1/2拍。</p>
    <p>许多进行曲和快节奏摇滚使用2/2拍。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹一个简单的Riff，先用4/4拍感觉弹，再换成2/2拍弹。注意2/2拍时你的"拍子感"会变得更大、更简化。</p></div>` },
  { id:100, month:4, title:'常见拍号总结与对比', practiceMins:20, tags:['节奏','拍号'],
    content:`<h3>四种常见拍号</h3><table class="note-table"><tr><th>拍号</th><th>每小节拍数</th><th>强弱</th><th>感觉</th></tr>
    <tr><td>4/4</td><td>4</td><td>强-弱-次强-弱</td><td>标准、流行</td></tr>
    <tr><td>3/4</td><td>3</td><td>强-弱-弱</td><td>华尔兹、旋转</td></tr>
    <tr><td>6/8</td><td>6（两组3）</td><td>强弱弱-次强弱弱</td><td>摇曳、流动</td></tr>
    <tr><td>2/2</td><td>2</td><td>强-弱</td><td>进行曲、快速</td></tr></table>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>找一首4/4的歌、一首3/4的歌、一首6/8的歌。用脚打拍子，感受不同拍号的"脉搏"差异。</p></div>` },
  { id:101, month:4, title:'弱起（Anacrusis）', practiceMins:15, tags:['节奏','弱起'], quizIds:[52],
    content:`<h3>弱起（Pick-up / Anacrusis）</h3><p>弱起是从弱拍（小节的最后一拍或半拍）开始的乐句。</p>
    <p>"生日快乐"——"祝你"在弱拍开始，"生日快乐"在强拍。</p>
    <p>许多经典歌曲使用弱起：</p>
    <ul><li>"Smells Like Teen Spirit" - Nirvana（Riff在最后一拍开始）</li>
    <li>"Back in Black" - AC/DC（经典的弱起Riff）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>节拍器打4/4拍。在第4拍的"and"（后半拍）开始弹一个音，让这个音延续到下一小节的第一拍。这就是弱起的感觉！</p></div>` },
  { id:102, month:4, title:'前八后十六与切分节奏型', practiceMins:20, tags:['节奏','节奏型'],
    content:`<h3>常见节奏型</h3><p>在吉他伴奏中，掌握这些基本节奏型：</p>
    <ul><li><strong>前八后十六</strong>：八分+两个十六分（"快-快快"）</li>
    <li><strong>前十六后八</strong>：两个十六分+八分（"快快-快"）</li>
    <li><strong>附点八分</strong>：附点八分+十六分（"长-短"）</li>
    <li><strong>切分</strong>：十六分+八分+十六分（"短-长-短"）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在一根弦上弹这些节奏型，节拍器80BPM。重点是<strong>准确</strong>而不是快。每个节奏型重复4次再换下一个。</p></div>` },
  { id:103, month:4, title:'节奏型在扫弦中的应用', practiceMins:25, tags:['节奏','扫弦'],
    content:`<h3>扫弦节奏型</h3><p>用C和弦练习不同的扫弦节奏型：</p>
    <h4>节奏1（基础八分）</h4><p>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓（每拍上下各一下）</p>
    <h4>节奏2（经典流行）</h4><p>↓ ↓↑ ↓ ↑↓↑ ↓↑（省略一些上扫）</p>
    <h4>节奏3（放克感）</h4><p>↓ ↓↑ ↓↑ ↑↓↑（强调反拍）</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C和弦，用节奏型2（↓ ↓↑ ↓ ↑↓↑）练习。先慢速（50BPM），确保上下扫弦交替均匀。速度稳定后再提速。</p></div>` },
  { id:104, month:4, title:'放克（Funk）节奏入门', practiceMins:25, tags:['节奏','放克'],
    content:`<h3>放克节奏的核心</h3><p>放克节奏的核心是<strong>16分音符切分</strong>和<strong>强调反拍</strong>。</p>
    <p>放克扫弦的特点：</p>
    <ul><li>几乎是连续的16分音符上下扫</li><li>左手"幽灵按弦"制造打击乐效果</li><li>强调"and"和"a"（16分音符的反拍位）</li></ul>
    <p>经典放克吉他手：Nile Rodgers、Prince、Cory Wong</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹E9和弦，做16分音符扫弦。只弹"上扫"（反拍），让"下扫"几乎听不到（左手虚按）。这就是放克的"chicken scratch"技巧！</p></div>` },
  { id:105, month:4, title:'雷鬼（Reggae）节奏', practiceMins:20, tags:['节奏','雷鬼'],
    content:`<h3>雷鬼节奏：反拍之王</h3><p>雷鬼节奏的特点：<strong>强调第2拍和第4拍</strong>（弱拍），第1拍和/or第3拍通常为空。</p>
    <p>扫弦模式：↑ ↓↑ ↓↑（从反拍上扫开始）</p>
    <p>经典雷鬼吉他手：Bob Marley的吉他手Junior Marvin</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹A和弦。只扫上扫（↑），在第2拍和第4拍上加重。这就是雷鬼的基本节奏——"反拍扫弦"。</p></div>` },
  { id:106, month:4, title:'摇摆（Swing）节奏', practiceMins:20, tags:['节奏','摇摆'],
    content:`<h3>摇摆节奏（Swing）</h3><p>摇摆节奏将两个八分音符弹成近似<strong>三连音的前两个音</strong>。</p>
    <p>记谱上写的是八分音符，但实际演奏是"长-短-长-短"的感觉。</p>
    <p>Swing是爵士、蓝调、早期摇滚的基础节奏。</p>
    <p>"Boogie Woogie"和"Shuffle"都是摇摆节奏的变体。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹E5强力和弦，用摇摆节奏。念"1-and-a-2-and-a"但实际弹"1-(and)-a-2-(and)-a"——省略中间的音。这就是著名的"蓝调Shuffle"！</p></div>` },
  { id:107, month:4, title:'复合节奏（Polyrhythm）入门', practiceMins:20, tags:['节奏','复合节奏'], quizIds:[53],
    content:`<h3>复合节奏（Polyrhythm）</h3><p>复合节奏是<strong>同时使用两种不同的节奏型</strong>。</p>
    <h4>3对2（最常见的复合节奏）</h4><p>一只手弹三连音，另一只手弹二分音符/四分音符。或者：脚踩4分音符，手弹三连音。</p>
    <p>复合节奏制造强烈的节奏张力——在进步摇滚和前卫金属中广泛使用。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>左手在桌面上拍三连音（1-trip-let），同时右脚踩四分音符拍子。这是最基本的3对2复合节奏练习！</p></div>` },
  { id:108, month:4, title:'节奏实战：分析经典Riff节奏', practiceMins:20, tags:['节奏','实战'], quizIds:[54],
    content:`<h3>经典Riff的节奏分析</h3><h4>"Smoke on the Water" - Deep Purple</h4><p>节奏：附点八分+十六分+四分+四分... 实际上：用八分音符弹奏，但有微小停顿制造标志性节奏。</p>
    <h4>"Back in Black" - AC/DC</h4><p>节奏：用八分音符的"rest-stroke"模式——强拍休止，反拍弹奏。这是硬摇滚节奏的典范！</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>学弹"Back in Black"的前奏Riff。注意它完全建立在反拍上——第1拍休止，然后从"and"开始弹。弹对节奏比弹对音符更重要！</p></div>` },
  { id:109, month:4, title:'节拍器使用指南', practiceMins:15, tags:['节奏','节拍器'],
    content:`<h3>节拍器——你的最佳练习伙伴</h3><p>节拍器是提高节奏感最重要的工具。</p>
    <h4>使用建议：</h4><ul><li>练习音阶时打开节拍器——每个音符对准一拍</li>
    <li>先慢速（40-60BPM）确保准确，再逐步提速</li>
    <li>尝试只把重音放在2和4拍——制造"摇滚"律动感</li>
    <li>练习半速/双速——节拍器打半速，你弹双倍音符</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>设置节拍器到60BPM。在每拍弹一个C和弦。然后在节拍器"之间"弹——节拍器响的是1和3（强拍），你弹2和4（弱拍）。</p></div>` },
  { id:110, month:4, title:'动态与节奏：强弱变化', practiceMins:15, tags:['节奏','动态'],
    content:`<h3>力度/动态（Dynamics）</h3><p>音乐中的强弱变化称为力度。</p>
    <p>在节奏演奏中应用强弱变化：</p>
    <ul><li>在4/4拍中：1拍最强、3拍次强、2和4拍弱</li>
    <li>在Riff中：强调某些音可以制造"推动感"</li>
    <li>扫弦时：控制右手力度，从pp（很弱）到ff（很强）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹一个简单的开放和弦（如G），先极弱（pp）扫，然后逐渐加强到极强（ff），再慢慢减弱回极弱。感受力度的渐变！</p></div>` },
  { id:111, month:4, title:'摇滚节奏与强力和弦', practiceMins:25, tags:['节奏','摇滚'], quizIds:[55,56],
    content:`<h3>摇滚节奏基础</h3><p>摇滚节奏的核心：<strong>强力和弦 + 八分音符反拍 + 失真音色</strong></p>
    <h4>经典摇滚节奏型</h4><p>用E5强力和弦练习：</p>
    <ul><li>♪ ♩ ♪ ♩（八分+四分+八分+四分）——基础的"rock beat"</li>
    <li>♪ ♪ ♪ ♪ ♩ —（连续八分音符+四分）——推动感</li>
    <li>♩. ♪ ♩. ♪（附点四分+八分）——经典的硬摇滚节奏</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用E5和A5和弦弹奏典型的摇滚Riff：E5弹4次→A5弹4次→E5弹4次→B5弹4次。用八分音符节奏。打开失真效果！</p></div>` },
  { id:112, month:4, title:'Bossa Nova节奏风格', practiceMins:20, tags:['节奏','Bossa Nova'],
    content:`<h3>Bossa Nova节奏</h3><p>巴西风格的Bossa Nova节奏有标志性的吉他模式：</p>
    <p>右手模式：拇指弹低音（根音），食指/中指弹和弦（高音）。</p>
    <p>经典的Bossa Nova节奏型：</p>
    <p style="padding:8px;background:var(--bg-surface);border-radius:8px;text-align:center">
    第1拍：低音<br>第2拍的前半：和弦<br>第2拍的后半：低音<br>第3拍：和弦<br>第4拍的前半：低音<br>第4拍的后半：和弦</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用Am7和Dm7练习Bossa Nova节奏型——拇指弹5弦（根音），其他手指同时扫高音弦。经典的"The Girl from Ipanema"节奏！</p></div>` },
  { id:113, month:4, title:'民谣与指弹节奏型', practiceMins:25, tags:['节奏','指弹'],
    content:`<h3>指弹（Fingerstyle）节奏</h3><p>指弹使用手指（而不是拨片）来弹奏，通常结合旋律和伴奏。</p>
    <h4>Travis Picking（特拉维斯拨弦）</h4><p>拇指在低音弦上交替弹奏根音和五音，食指/中指在高音弦弹旋律。</p>
    <p>模式：拇指→食指→拇指→中指（或类似的交替模式）</p>
    <p>这是民谣和乡村吉他的核心技术！</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用C和弦练习Travis Picking：拇指弹5弦3品(C)→食指弹3弦空弦(G)→拇指弹4弦2品(E)→中指弹2弦1品(C)。稳定循环！</p></div>` },
  { id:114, month:4, title:'金属节奏：下拨与切分', practiceMins:20, tags:['节奏','金属'],
    content:`<h3>金属节奏技巧</h3><h4>下拨（Downpicking）</h4><p>只用下拨弹奏快速的八分/十六分音符——产生统一、有力的攻击感。</p>
    <p>经典例子："Master of Puppets" - Metallica（全下拨！）。</p>
    <h4>闷音（Palm Muting）</h4><p>右手手掌轻触琴桥附近的琴弦，制造短促、有力的"chug"声。</p>
    <p>金属Riff通常使用16分音符下拨 + 闷音的强力和弦。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹E5强力和弦，闷音。用全下拨弹八分音符（慢速开始）。然后加速到16分音符。保持右手手腕放松！</p></div>` },
  { id:115, month:4, title:'节奏实战：经典歌曲节奏分析', practiceMins:20, tags:['节奏','实战'],
    content:`<h3>分析歌曲的节奏</h3><p>选任何你喜欢的歌，分析它的节奏要素：</p>
    <ol><li>拍号是什么？（4/4？3/4？6/8？）</li>
    <li>速度是多少BPM？</li>
    <li>节奏型是八分还是十六分？</li>
    <li>有没有切分或反拍重音？</li>
    <li>吉他弹的是扫弦还是分解？</li></ol>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>选一首你喜欢的歌，回答上面的5个问题。然后试着弹出这首歌的节奏型（即使不知道和弦，只弹节奏也可以！）。</p></div>` },
  { id:116, month:4, title:'节奏与和声的结合', practiceMins:20, tags:['节奏','和声'], quizIds:[57,58],
    content:`<h3>节奏+和声练习</h3><p>今天是节奏练习的综合性练习——在弹和弦的同时注意节奏。用C→Am→Dm→G进行练习：</p>
    <p><strong>版本1</strong>：每和弦弹4拍，全部四分音符</p>
    <p><strong>版本2</strong>：每和弦弹2拍，八分音符扫弦</p>
    <p><strong>版本3</strong>：每和弦弹1拍，注意和弦切换要快</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用C→Am→Dm→G进行，每和弦4拍。第1拍用下扫（重），第2拍用下扫（轻），第3拍用上下扫，第4拍用上下扫。保持稳定的节奏！</p></div>` },
  { id:117, month:4, title:'右手技巧：交替拨弦', practiceMins:20, tags:['技巧','拨弦'], quizIds:[59],
    content:`<h3>交替拨弦（Alternate Picking）</h3><p>交替拨弦 = 下→上→下→上→... 交替使用下拨和上拨。</p>
    <p>这是最基础的右手技巧——所有吉他手必须掌握！</p>
    <h4>练习方法</h4><p>在一根弦上弹八分音符：每个下拨对应一个上拨。</p>
    <p>换弦时注意：从低到高用下拨开始，从高到低也用下拨开始？不，关键是保持"下-上"模式，不受换弦影响。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦上弹八分音符（80BPM）。先只下拨，然后交替拨弦。交替拨弦模式下，你的速度应该是只下拨的两倍！</p></div>` },
  { id:118, month:4, title:'右手指法：靠弦奏法', practiceMins:15, tags:['技巧','指法',],
    content:`<h3>靠弦奏法（Rest Stroke / Apoyando）</h3><p>靠弦奏法是指弹吉他的核心技术——弹弦后手指"靠"在下一根弦上。</p>
    <p>这种方法产生更响亮、更饱满的音色。</p>
    <p>与之相对的是<strong>勾弦奏法（Free Stroke）</strong>——弹弦后手指不靠弦，在空中收回。</p>
    <p>靠弦奏法常用于旋律演奏，勾弦奏法常用于和弦伴奏。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用食指（i）弹4弦，弹完后手指停在3弦上。这就是靠弦奏法！对比靠弦和勾弦的音量差异。</p></div>` },
  { id:119, month:4, title:'扫弦技巧：控制与动态', practiceMins:20, tags:['技巧','扫弦'], quizIds:[60],
    content:`<h3>扫弦控制</h3><p>好的扫弦需要控制：</p>
    <ul><li><strong>手腕</strong>放松——来自手腕的旋转而非手臂</li>
    <li><strong>力度</strong>：拇指和食指握拨片，松紧控制dynamic</li>
    <li><strong>角度</strong>：拨片略微倾斜，减少阻力</li>
    <li><strong>范围</strong>：精确控制扫到哪几根弦</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹D和弦，练习只扫4-1弦（不扫5、6弦）。然后弹A和弦，练习只扫5-1弦（不扫6弦）。精确控制扫弦范围！</p></div>` },
  { id:120, month:4, title:'月总复习：第四月总结', practiceMins:20, tags:['复习','总结'],
    content:`<h3>🎉 第四月完成！</h3><p>本月学到的知识点：</p>
    <ul><li>✅ 时值（全音符到十六分音符）</li>
    <li>✅ 拍号（4/4、3/4、6/8、2/2）</li>
    <li>✅ 附点、切分、三连音</li>
    <li>✅ 弱起、摇摆、复合节奏</li>
    <li>✅ 扫弦节奏型</li>
    <li>✅ 各种风格节奏（摇滚、放克、雷鬼、Bossa Nova）</li>
    <li>✅ 右手技巧（交替拨弦、靠弦奏法、扫弦控制）</li></ul>
    <div class="exercise-box"><h4>📝 总复习</h4><p>用C→G→Am→F进行，用至少3种不同的节奏型弹奏。打开节拍器，确保每种节奏型都稳定！</p></div>` }
];

// ===== Month 5: 旋律创作与即兴 (Days 121-150) =====
LESSONS[5] = [
  { id:121, month:5, title:'动机（Motive）的概念', practiceMins:15, tags:['旋律','动机'], quizIds:[61],
    content:`<h3>什么是动机？</h3><p>动机（Motive）是音乐中最小的有特征的素材单位——通常由<strong>2-5个音</strong>组成，有独特的节奏和音高轮廓。</p>
    <h4>著名动机</h4><ul><li>贝多芬《第五交响曲》："当当当—当"（三短一长）</li>
    <li>"Smoke on the Water"前三个音</li>
    <li>"七里香"前奏的旋律片段</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在小调五声音阶上创作一个3-4个音的动机。重复它——这就是你的"主题"。试着改变节奏或增加一个音来发展它。</p></div>` },
  { id:122, month:5, title:'动机的发展手法', practiceMins:20, tags:['旋律','动机'],
    content:`<h3>发展动机的四种方法</h3><ol>
    <li><strong>重复（Repetition）</strong>：原样重复——建立辨识度</li>
    <li><strong>模进（Sequence）</strong>：在不同音高上重复——向上或向下</li>
    <li><strong>变奏（Variation）</strong>：改变节奏或音程但保留核心特征</li>
    <li><strong>扩展/压缩（Augmentation/Diminution）</strong>：拉长或缩短时值</li></ol>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用昨天的动机，今天尝试发展它：先重复2次，然后向上模进，然后改变节奏。一个简单的动机可以变成一整段SOLO！</p></div>` },
  { id:123, month:5, title:'旋律的构建：级进与跳进', practiceMins:15, tags:['旋律','构建'],
    content:`<h3>旋律的两种运动方式</h3><ul>
    <li><strong>级进（Step）</strong>：二度进行（C→D或C→B）——平滑、连贯</li>
    <li><strong>跳进（Skip/Leap）</strong>：三度以上（C→E或C→G）——跳跃、鲜明</li></ul>
    <p>好的旋律通常混合使用级进和跳进——太多级进会无聊，太多跳进会难听。</p>
    <div class="highlight-box">💡 一般原则：用跳进制造"事件感"，用级进填充"过程感"。</div>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在C大调上创作一段旋律。先全部用级进（C-D-E-F-G-F-E-D-C），再加入一个跳进（C-E-G-A-G-E-C）。比较两者。</p></div>` },
  { id:124, month:5, title:'旋律的节奏设计', practiceMins:15, tags:['旋律','节奏'], quizIds:[62],
    content:`<h3>旋律的节奏方面</h3><p>同样一串音，用不同节奏演奏——感觉完全不同！</p>
    <p>设计旋律节奏的要点：</p>
    <ul><li>使用<strong>长音</strong>制造"休息点"和"重点"</li>
    <li>使用<strong>短音</strong>制造"推动感"和"紧张感"</li>
    <li>使用<strong>休止</strong>制造"呼吸"</li>
    <li>旋律的高潮音通常也对应长时值</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用相同的5个音（C-D-E-F-G），设计3种不同的节奏型。你会惊讶于同样的音用不同节奏能产生完全不同的效果！</p></div>` },
  { id:125, month:5, title:'五声音阶即兴（上）', practiceMins:25, tags:['即兴','五声音阶'],
    content:`<h3>第一次五声音阶即兴</h3><p>准备：Am和弦背景（循环播放或用Loop Station）。用A小调五声音阶即兴。</p>
    <h4>即兴原则</h4><ol><li><strong>唱什么弹什么</strong>——先哼唱，再在指板上找到音</li>
    <li><strong>少即是多</strong>——不弹很多音，选择有意义的音</li>
    <li><strong>呼吸</strong>——在乐句之间留出空间</li></ol>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放Am背景（或找一个YouTube上的"Am backing track"）。用Am五声音阶箱型指型即兴。限制自己只用6弦和5弦上的音——少就是多！</p></div>` },
  { id:126, month:5, title:'五声音阶即兴（下）', practiceMins:25, tags:['即兴','五声音阶'],
    content:`<h3>扩展五声音阶即兴</h3><p>今天将五声音阶扩展到<strong>全部6根弦</strong>。</p>
    <p>在Am背景上使用整个箱型指型：</p>
    <ul><li>在低音弦（6、5）上弹"节奏感"强的音</li>
    <li>在高音弦（2、1）上弹"旋律感"强的音</li>
    <li>在不同弦组之间切换制造变化</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用完整的A小调五声音阶箱型即兴。尝试在低音弦弹一个音，然后跳到高音弦弹一个音——制造音域上的"跳跃感"。</p></div>` },
  { id:127, month:5, title:'蓝调即兴入门', practiceMins:25, tags:['即兴','蓝调'],
    content:`<h3>蓝调即兴</h3><p>用<strong>A蓝调音阶</strong>（A C D Eb E G）在A7背景上即兴。</p>
    <h4>蓝调即兴的核心技巧</h4><ul><li><strong>推弦（Bend）</strong>：将音推高半音或全音——蓝调的灵魂</li>
    <li><strong>滑音（Slide）</strong>：从一个音滑到另一个音</li>
    <li><strong>颤音（Vibrato）</strong>：快速小幅推拉琴弦，让音"唱歌"</li>
    <li><strong>蓝调音</strong>：多使用Eb（b5）制造"蓝调色彩"</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放A7背景（A7 backing track）。用A蓝调音阶即兴。重点是使用推弦——在D弦7品上推全音（D→E），这是蓝调最经典的推弦之一！</p></div>` },
  { id:128, month:5, title:'蓝调即兴：Call & Response', practiceMins:20, tags:['即兴','蓝调','呼应'], quizIds:[65],
    content:`<h3>Call & Response（呼应）</h3><p>呼应是蓝调和爵士中最核心的即兴手法。</p>
    <p>概念："Call"（呼唤）是一个乐句，"Response"（回答）是另一个乐句与之对话。</p>
    <p>在蓝调即兴中的应用：</p>
    <ul><li>在低音区弹一个"Call"（如：A-C-D）</li>
    <li>在高音区弹一个"Response"（如：E-G-A）</li>
    <li>Call和Response可以是"问答关系"或"对比关系"</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹一个"Call"（低音区几个音），然后在高音区回答。想象你在和另一个人"对话"——你的即兴就是一场对话！</p></div>` },
  { id:129, month:5, title:'蓝调即兴：12小节实战', practiceMins:30, tags:['即兴','蓝调','实战'],
    content:`<h3>12小节蓝调即兴实战</h3><p>在A调的12小节蓝调进行上即兴：</p>
    <p>A7 | A7 | A7 | A7 | D7 | D7 | A7 | A7 | E7 | D7 | A7 | A7</p>
    <h4>每段和声的策略</h4><ul><li><strong>A7段</strong>：用A蓝调音阶，主音A</li>
    <li><strong>D7段</strong>：转到D蓝调音阶（或A蓝调+强调D和F#）</li>
    <li><strong>E7段</strong>：转向E蓝调音阶（或强调E和G#）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放12小节蓝调背景。12小节中，前4小节在A7上即兴，中间2小节在D7上（强调一些不同音），再2小节回A7，最后4小节变化。</p></div>` },
  { id:130, month:5, title:'五声音阶5种指型完整练习', practiceMins:25, tags:['音阶','五声音阶','指型'],
    content:`<h3>连接5种指型</h3><p>掌握了箱型（第1指型）后，今天学习在指板上"上下移动"。</p>
    <p>A小调五声音阶的5种指型在指板上的位置：</p>
    <ul><li>第1指型（箱型）：5品</li>
    <li>第2指型：8品</li>
    <li>第3指型：10品</li>
    <li>第4指型：12品</li>
    <li>第5指型：3品（实际上是第1指型上移整根弦的位置）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>从第1指型开始上行弹到第3指型，再下行回来。目标是<strong>流畅过渡</strong>——在指型交界处不要停顿！</p></div>` },
  { id:131, month:5, title:'多利亚调式（Dorian）即兴', practiceMins:20, tags:['调式','即兴','Dorian'], quizIds:[63],
    content:`<h3>多利亚调式即兴</h3><p>多利亚 = 自然小调升6级（#6）。听感：有"爵士味"的小调。</p>
    <p>A多利亚音阶：A B C D E <strong>F#</strong> G A（F而不是F#→F#）</p>
    <h4>应用场景</h4><p>在<strong>小七和弦（min7）</strong>上使用多利亚调式。</p>
    <p>典型和声背景：Am7 → Dm7 → Am7 → Dm7</p>
    <p>经典多利亚例子："Oye Como Va" - Santana</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放Am7背景。用A多利亚音阶即兴（注意用F#而不是F）。对比A小调（F）和A多利亚（F#）——升6级让声音"亮"了一点！</p></div>` },
  { id:132, month:5, title:'混合利底亚调式（Mixolydian）即兴', practiceMins:20, tags:['调式','即兴','Mixolydian'], quizIds:[64],
    content:`<h3>混合利底亚调式即兴</h3><p>混合利底亚 = 大调降7级（b7）。听感：蓝调、摇滚、"开放式"。</p>
    <p>G混合利底亚音阶：G A B C D E <strong>F</strong> G（F#→F）</p>
    <h4>应用场景</h4><p>在<strong>属七和弦（dom7）</strong>上使用混合利底亚调式。</p>
    <p>这是摇滚和蓝调中最常用的调式——因为属七和弦是蓝调的核心！</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放G7背景。用G混合利底亚音阶即兴。注意F（b7）的"蓝调感"。混合利底亚 = G大调音阶但降了7级——G→A→B→C→D→E→F→G。</p></div>` },
  { id:133, month:5, title:'利底亚调式（Lydian）即兴', practiceMins:20, tags:['调式','即兴','Lydian'], quizIds:[70],
    content:`<h3>利底亚调式即兴</h3><p>利底亚 = 大调升4级（#4）。听感：梦幻、漂浮、"外太空"。</p>
    <p>C利底亚音阶：C D E <strong>F#</strong> G A B C（F→F#）</p>
    <h4>应用场景</h4><p>在<strong>大七和弦（maj7）</strong>上使用利底亚调式。</p>
    <p>利底亚调式在电影配乐和梦幻流行中常见。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放Cmaj7背景。用C利底亚音阶即兴（用F#代替F）。对比C大调（F）和C利底亚（F#）——#4制造了"漂浮"感！</p></div>` },
  { id:134, month:5, title:'调式即兴综合练习', practiceMins:25, tags:['调式','即兴'],
    content:`<h3>四种调式的比较</h3><table class="note-table"><tr><th>调式</th><th>特征</th><th>适用和弦</th><th>名曲示例</th></tr>
    <tr><td>多利亚</td><td>小调+#6</td><td>min7</td><td>Oye Como Va</td></tr>
    <tr><td>混合利底亚</td><td>大调+b7</td><td>dom7</td><td>很多蓝调</td></tr>
    <tr><td>利底亚</td><td>大调+#4</td><td>maj7</td><td>辛普森主题</td></tr>
    <tr><td>弗里几亚</td><td>小调+b2</td><td>min7</td><td>西班牙/弗拉门戈</td></tr></table>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在同一個背景和弦上换不同的调式：在C大调背景上弹C大调→C利底亚→C混合利底亚，感受色彩的变换。</p></div>` },
  { id:135, month:5, title:'和弦内音即兴法', practiceMins:20, tags:['即兴','和弦内音'], quizIds:[75],
    content:`<h3>和弦内音（Chord Tone Improvisation）</h3><p>在和弦变化时，使用当前和弦的<strong>和弦内音</strong>作为旋律的目标音。</p>
    <p>例如：C→G→Am→F进行中</p>
    <ul><li>在C和弦上：目标音是C、E、G</li>
    <li>在G和弦上：目标音是G、B、D</li>
    <li>在Am和弦上：目标音是A、C、E</li>
    <li>在F和弦上：目标音是F、A、C</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→G→Am→F循环，在每个和弦上只弹<strong>和弦内音</strong>。先在每個和弦的第一拍弹一个和弦内音，然后尝试在乐句结尾强调和弦内音。</p></div>` },
  { id:136, month:5, title:'和弦音阶即兴法', practiceMins:20, tags:['即兴','音阶'], quizIds:[66,67],
    content:`<h3>用音阶覆盖和弦</h3><p>对上一种方法的简化——如果和弦变化很快，不一定能精确对应每个和弦的所有内音，你可以使用一条音阶覆盖多个和弦。</p>
    <p>在C→G→Am→F中，整段使用<strong>C大调音阶</strong>（或A小调五声音阶）即可！</p>
    <p>这是因为这些和弦都属于C大调的顺阶和弦——它们共享C大调音阶。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在C→G→Am→F进行上，全程使用C大调五声音阶（C D E G A）即兴。注意在G和弦上时，B音（G和弦的三音）要小心使用。</p></div>` },
  { id:137, month:5, title:'乐句构建：呼吸与分段', practiceMins:15, tags:['旋律','乐句'], quizIds:[68],
    content:`<h3>构建好的乐句</h3><p>好比说话：一句完整的话需要有开始、中间、结束。</p>
    <h4>好乐句的特点</h4><ul><li><strong>长度</strong>：通常2-4小节，不要太长</li>
    <li><strong>呼吸</strong>：乐句之间有停顿（休止）</li>
    <li><strong>方向</strong>：有上行/下行的轮廓</li>
    <li><strong>高潮</strong>：乐句中有最高/最突出的音</li>
    <li><strong>结尾</strong>：落到一个稳定的音（通常是和弦内音）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹一个2小节的乐句，休1小节，再弹另一个2小节的乐句。刻意制造"呼吸"——让听众有消化时间。</p></div>` },
  { id:138, month:5, title:'即兴中的空间与沉默', practiceMins:15, tags:['即兴','空间'],
    content:`<h3>空间的力量</h3><p>许多吉他手的通病是"一刻不停"——实际上，<strong>留白</strong>是即兴中最重要的技巧之一。</p>
    <p>Miles Davis的名言："It's not the notes you play, it's the notes you don't play."</p>
    <p>在即兴中：</p>
    <ul><li>弹几个音，然后停住——让它们"回荡"</li>
    <li>让听众"期待"下一个音——制造悬念</li>
    <li>用空间对比密度——密集的音符之后需要空间"呼吸"</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放背景。故意只弹3-4个音，然后<strong>等4拍</strong>。再弹另外3-4个音。挑战自己——能等多久不弹？</p></div>` },
  { id:139, month:5, title:'推弦与滑音技巧', practiceMins:25, tags:['技巧','推弦','滑音'],
    content:`<h3>推弦（String Bending）</h3><p>推弦是电吉他表现力的核心技巧。三种最常见的推弦：</p>
    <ul><li><strong>半音推弦</strong>：推高一个半音（1品）</li>
    <li><strong>全音推弦</strong>：推高一个全音（2品）</li>
    <li><strong>预推弦</strong>：先推好再弹响</li></ul>
    <h3>滑音（Slide）</h3><p>按住弦从一个品滑到另一个品。上行滑音（/）和下行滑音（\\）。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在3弦7品（D）推全音到E——用食指按7品，无名指辅助推弦。听推弦到达目标音的音高是否准确。这是蓝调最经典的推弦！</p></div>` },
  { id:140, month:5, title:'揉弦（Vibrato）技巧', practiceMins:20, tags:['技巧','揉弦'],
    content:`<h3>揉弦（Vibrato）</h3><p>揉弦是让音"唱歌"的技巧——通过快速小幅推拉琴弦来调制音高。</p>
    <h4>两种揉弦</h4><ul><li><strong>手腕揉弦</strong>：手腕快速转动，带动手指推拉琴弦——最常用的方法</li>
    <li><strong>手臂揉弦</strong>：前臂旋转，带动手指——幅度更大</li></ul>
    <p>BB King的揉弦是传奇——他通过极慢而宽的揉弦表达情感。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用无名指按在3弦7品（D），做揉弦。从慢到宽开始——先慢速小幅度揉动，再逐步加快加宽。目标是控制揉弦的速度和幅度！</p></div>` },
  { id:141, month:5, title:'模进练习：三度模进', practiceMins:20, tags:['旋律','模进','练习'], quizIds:[71,72],
    content:`<h3>三度模进</h3><p>在音阶上做三度模进是提升即兴能力的绝佳练习。</p>
    <p>在C大调上：C-E, D-F, E-G, F-A, G-B, A-C, B-D, C-E</p>
    <p>在A小调上：A-C, B-D, C-E, D-F, E-G, F-A, G-B, A-C</p>
    <p>三度模进手指练习有助于：</p>
    <ul><li>加速手指在大调/小调音阶上的移动</li>
    <li>训练耳朵听到三度音程</li>
    <li>为即兴提供"素材"——三度跳跃非常好听</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在3弦和2弦上弹C大调三度模进。用食指（3弦）和无名指（2弦）交替：C-E(5品-5品)→D-F(7品-6品)→E-G(9品-8品)→F-A(10品-10品)...</p></div>` },
  { id:142, month:5, title:'即兴实战：创作8小节SOLO', practiceMins:30, tags:['即兴','实战'],
    content:`<h3>创作你的第一段SOLO</h3><p>限制条件（降低难度）：</p>
    <ul><li>只使用小调五声音阶箱型指型</li>
    <li>只用8小节</li>
    <li>和弦进行：Am → F → C → G</li></ul>
    <h4>结构建议</h4><p>1-2小节：一个动机（2-3个音）<br>3-4小节：重复动机（微变奏）<br>5-6小节：模进或推向高音<br>7-8小节：回到主音，结束</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放背景。用A小调五声音阶，严格按照上面的结构弹8小节SOLO。录下来听自己的演奏！</p></div>` },
  { id:143, month:5, title:'旋律分析与仿写', practiceMins:20, tags:['旋律','分析'], quizIds:[69,73],
    content:`<h3>分析旋律</h3><p>找一段你喜欢的旋律，分析它的构成：</p>
    <ol><li>用了哪些音？（什么音阶/调式？）</li>
    <li>用了什么节奏模式？</li>
    <li>最高音和最低音在哪？</li>
    <li>旋律的"形状"是什么？（上行？波浪？下行？）</li></ol>
    <p>然后尝试"仿写"——用类似的结构和节奏，但换不同的音。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>选一段简单的旋律（如儿歌或流行歌）。在指板上找出它的所有音符。然后把它移调到另一个调——在指板不同位置弹奏。</p></div>` },
  { id:144, month:5, title:'速度和练习方法', practiceMins:20, tags:['技巧','速度'],
    content:`<h3>速度练习的黄金法则</h3><ol>
    <li><strong>慢就是快</strong>：慢速练习时建立正确的肌肉记忆</li>
    <li><strong>节拍器不可少</strong>：速度是"稳定的快"而不是"混乱的快"</li>
    <li><strong>逐步提速</strong>：每次提高5BPM，稳定后再加</li>
    <li><strong>间歇练习</strong>：练5分钟休息1分钟，比连续30分钟更有效</li></ol>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>设置节拍器到你能清晰弹奏音阶的速度。弹C大调音阶（两八度）。每次提速5BPM，直到出现错误为止。你的"最大清晰速度"是多少？</p></div>` },
  { id:145, month:5, title:'耳朵训练：音程听辨', practiceMins:20, tags:['听力','音程'], quizIds:[74],
    content:`<h3>音程听辨</h3><p>训练耳朵识别音程是即兴的关键——弹的时候你需要在脑中"听到"下一个音。</p>
    <table class="note-table"><tr><th>音程</th><th>半音</th><th>记忆歌曲</th></tr>
    <tr><td>纯五度</td><td>7</td><td>星球大战前两个音</td></tr>
    <tr><td>纯四度</td><td>5</td><td>婚礼进行曲开头</td></tr>
    <tr><td>大三度</td><td>4</td><td>欢乐颂开头</td></tr>
    <tr><td>小三度</td><td>3</td><td>Greensleeves开头</td></tr>
    <tr><td>大二度</td><td>2</td><td>生日快乐"祝你"</td></tr></table>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>让别人弹两个音（或随机按两个键），你听辨音程。或使用手机上的听力训练App。每天5分钟听辨练习！</p></div>` },
  { id:146, month:5, title:'即兴中的情感表达', practiceMins:20, tags:['即兴','情感'], quizIds:[],
    content:`<h3>用吉他"说话"</h3><p>技巧是为了表达情感服务的。问自己：这个SOLO要让听众"感觉"到什么？</p>
    <h4>情感对应技巧</h4><ul><li><strong>悲伤</strong>：小调、慢速、揉弦宽而慢、多用滑音</li>
    <li><strong>快乐</strong>：大调、快速、跳音、多用上行的音型</li>
    <li><strong>愤怒</strong>：强力和弦、失真、快速推弦、密集的音符</li>
    <li><strong>放松</strong>：少音、多空间、长音、温和的揉弦</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>设定一个情绪（如"悲伤"），只用A小调五声音阶即兴2分钟，表达这个情绪。然后换一个情绪。</p></div>` },
  { id:147, month:5, title:'与鼓和贝斯配合', practiceMins:20, tags:['即兴','配合'], quizIds:[],
    content:`<h3>在乐队中即兴</h3><p>即兴不只是在独奏——与节奏部分的配合同样重要。</p>
    <h4>与鼓配合</h4><ul><li>听小鼓（Snare）——通常在2和4拍——用旋律呼应</li>
    <li>在底鼓（Kick）密集时弹短促的音</li></ul>
    <h4>与贝斯配合</h4><ul><li>贝斯弹根音时，你可以弹和弦内音</li>
    <li>贝斯做"walking"时，你可以用旋律呼应</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放一个鼓机/鼓Loop（80BPM，简单摇滚节奏）。用五声音阶即兴，刻意在2和4拍（小鼓位）上加重音。</p></div>` },
  { id:148, month:5, title:'创作动机库', practiceMins:20, tags:['旋律','动机','创作'], quizIds:[],
    content:`<h3>建立你的动机库</h3><p>好动机是即兴的"词汇"。建立你自己的动机库：</p>
    <ul><li>每天创作3个新的动机（2-4个音）</li>
    <li>记录在手机备忘录或录音中</li>
    <li>按情绪分类（快乐的、悲伤的、紧张的等）</li>
    <li>每周回顾你的动机库</li></ul>
    <p>当你在即兴时需要"灵感"，翻看你的动机库！</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>今天创作5个新的动机并录下来。每个动机不超过4个音。明天即兴时使用这些动机作为开始。</p></div>` },
  { id:149, month:5, title:'大师风格分析：BB King', practiceMins:20, tags:['分析','风格'], quizIds:[],
    content:`<h3>BB King的即兴风格</h3><p>BB King是蓝调吉他的传奇——他的风格特点：</p>
    <ul><li><strong>少即是多</strong>：一个SOLO可能只用5-6个不同的音</li>
    <li><strong>揉弦</strong>：极宽极慢的揉弦，充满情感</li>
    <li><strong>呼应</strong>：弹一个音，让吉他"唱"出来，再弹下一个</li>
    <li><strong>弯音</strong>：精准的微弯音（不到半音的推弦）制造蓝调色彩</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>播放A7背景。模仿BB King的风格——只用A蓝调音阶的5个音，每个音都带揉弦。弹一个音，揉弦，停，再弹下一个音。</p></div>` },
  { id:150, month:5, title:'月总复习：第五月总结', practiceMins:20, tags:['复习','总结'],
    content:`<h3>🎉 第五月完成！</h3><p>本月学到的知识点：</p>
    <ul><li>✅ 动机的概念与发展手法</li>
    <li>✅ 五声音阶即兴</li>
    <li>✅ 蓝调即兴（含推弦、揉弦、Call & Response）</li>
    <li>✅ 调式即兴（多利亚、混合利底亚、利底亚）</li>
    <li>✅ 和弦内音与音阶即兴法</li>
    <li>✅ 乐句构建、呼吸与空间</li>
    <li>✅ 技巧：推弦、滑音、揉弦</li>
    <li>✅ 即兴中的情感表达</li></ul>
    <div class="exercise-box"><h4>📝 总复习</h4><p>制作一段2分钟的即兴录音。使用Am背景，结合本月学过的所有技巧——动机发展、调式变化、Call & Response、空间运用。</p></div>` }
];

// ===== Month 6: 作曲实践 (Days 151-180) =====
LESSONS[6] = [
  { id:151, month:6, title:'歌曲结构入门', practiceMins:15, tags:['作曲','结构'], quizIds:[76,77],
    content:`<h3>标准歌曲结构</h3><p>最常见的流行歌曲结构：</p>
    <p style="padding:12px;background:var(--bg-surface);border-radius:8px;text-align:center">
    <strong>前奏 → 主歌 → 副歌 → 主歌 → 副歌 → 桥段 → 副歌 → 尾奏</strong></p>
    <ul><li><strong>前奏（Intro）</strong>：建立氛围，通常4-8小节</li>
    <li><strong>主歌（Verse）</strong>：讲故事的部分，歌词变化</li>
    <li><strong>副歌（Chorus）</strong>：核心主题，歌词重复</li>
    <li><strong>桥段（Bridge）</strong>：对比部分，引入新的元素</li>
    <li><strong>尾奏（Outro）</strong>：结束</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>选一首你喜欢的歌，分析它的结构——标记前奏、主歌、副歌、桥段、尾奏的起始时间。</p></div>` },
  { id:152, month:6, title:'主歌与副歌的设计', practiceMins:20, tags:['作曲','结构'], quizIds:[79],
    content:`<h3>主歌（Verse）</h3><p>主歌是歌曲的"叙事"部分——旋律通常在中低音区。</p>
    <ul><li>和声可以比较简单或低密度</li>
    <li>节奏可以有变化，但保持稳定</li></ul>
    <h3>副歌（Chorus）</h3><p>副歌是歌曲的"高潮"——最具记忆性的部分。</p>
    <ul><li>和声更丰富（更多和弦变化）</li>
    <li>旋律在高音区，节奏更鲜明</li>
    <li>"Hook"（核心动机）在副歌中</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用C→G→Am→F（主歌）和F→G→Am→G（副歌）写两个不同感觉的段落。主歌用分解和弦，副歌用扫弦。</p></div>` },
  { id:153, month:6, title:'桥段的设计', practiceMins:20, tags:['作曲','结构'], quizIds:[80],
    content:`<h3>桥段（Bridge）</h3><p>桥段通常是歌曲中"转折"的部分——在副歌重复两次后出现。</p>
    <p>桥段的特点：</p>
    <ul><li>使用<strong>新的和弦进行</strong>（不在主歌/副歌中出现的和弦）</li>
    <li>制造<strong>紧张感</strong>，然后解决回副歌</li>
    <li>通常8小节，歌词表达不同的情感角度</li></ul>
    <p>常用的桥段手法：转到<strong>IV级或VI级和弦</strong>开始，或使用<strong>副属和弦</strong>。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在C大调的歌曲中尝试桥段：用F→G→Em→Am→Dm→G→C。这个桥段从IV级开始，通过Em和Am过渡，用Dm→G→C回到副歌。</p></div>` },
  { id:154, month:6, title:'前奏与尾奏的设计', practiceMins:15, tags:['作曲','结构'],
    content:`<h3>前奏（Intro）</h3><p>前奏的功能：</p><ul><li>建立调性和节奏</li>
    <li>制造期待感</li>
    <li>通常4或8小节</li>
    <li>可以是：节奏部分、旋律片段、和弦进行的一部分</li></ul>
    <h3>尾奏（Outro）</h3><p>尾奏的方式：</p><ul><li><strong>渐弱（Fade Out）</strong>：重复副歌逐渐减小音量</li>
    <li><strong>冷结束（Cold End）</strong>：突然停止</li>
    <li><strong>回到前奏素材</strong>：形成闭环感</li>
    <li><strong>最后的终止式</strong>：V7→I制造结束感</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>为你的歌曲设计前奏——可以用主歌的和弦但弹Arpeggio，也可以是单独的旋律。再设计尾奏——尝试渐弱和冷结束两种方式。</p></div>` },
  { id:155, month:6, title:'和声设计思路', practiceMins:20, tags:['作曲','和声'], quizIds:[78],
    content:`<h3>和声设计方法</h3><h4>1. 从和弦进行开始</h4><p>选一个你喜欢的和弦进行作为歌曲的基础。</p>
    <h4>2. 从旋律推导和弦</h4><p>先写旋律，然后根据旋律音配和弦。</p>
    <h4>3. 从低音线开始</h4><p>先写一段有旋律感的低音线，然后在上面配和弦。</p>
    <h4>4. 从节奏开始</h4><p>先设计一个节奏模式，然后加上和弦。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>尝试上面4种方法中的2种，写出两段不同的和弦进行。比较哪种方法你更喜欢！</p></div>` },
  { id:156, month:6, title:'和弦替换与再和声化', practiceMins:20, tags:['作曲','和弦替换'],
    content:`<h3>让和弦进行更有趣</h3><p>对一个简单的和弦进行应用替换：</p>
    <p>原版C→G→Am→F → 替换后C→G/B→Am→Fmaj7</p>
    <p>更多替换思路：</p>
    <ul><li>用<b>7th</b>替换简单和弦：G→G7，F→Fmaj7</li>
    <li>用<b>ii-V</b>替换单个和弦：G→Dm7-G7</li>
    <li>用<b>代理和弦</b>：Am→Cmaj7（Am的代理）</li>
    <li>用<b>调式互换</b>：从同主音小调借和弦</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>从C→G→Am→F开始，用和弦替换写出3个不同的版本。每个版本听起来都应该"不一样但依然和谐"。</p></div>` },
  { id:157, month:6, title:'调式互换（Modal Interchange）', practiceMins:20, tags:['作曲','和声'], quizIds:[81],
    content:`<h3>调式互换</h3><p>从<strong>同主音小调</strong>借和弦到大调中——增加和声色彩的经典手法。</p>
    <p>在C大调中借用C小调和弦：</p>
    <ul><li><strong>bVII</strong>：Bb（从C小调借来）——非常常见！</li>
    <li><strong>bVI</strong>：Ab</li>
    <li><strong>bIII</strong>：Eb</li>
    <li><strong>iv</strong>：Fm（小调iv代替大调IV）</li></ul>
    <p>用bVII的例子：C → Bb → F → C（"Hey Jude"风格）</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→Bb→F→C。Bb是从C小调借来的bVII级和弦。这个进行在流行和摇滚中非常常见！尝试在你自己歌曲中加入bVII和bVI。</p></div>` },
  { id:158, month:6, title:'旋律与和声的配合', practiceMins:20, tags:['作曲','旋律','和声'], quizIds:[82,83],
    content:`<h3>旋律与和弦的配合</h3><p>旋律中的强拍音应该与和弦内音匹配。</p>
    <p>用C→Am→F→G进行示例：</p>
    <table class="note-table"><tr><th>和弦</th><th>和弦内音</th><th>适合的旋律音</th></tr>
    <tr><td>C</td><td>C E G</td><td>C E G（以及A、D等经过音）</td></tr>
    <tr><td>Am</td><td>A C E</td><td>A C E</td></tr>
    <tr><td>F</td><td>F A C</td><td>F A C</td></tr>
    <tr><td>G</td><td>G B D</td><td>G B D</td></tr></table>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用C→Am→F→G进行，创作一段旋律。原则：每个和弦的"目标音"使用和弦内音，经过音可以是任何音。</p></div>` },
  { id:159, month:6, title:'节奏变化与动态设计', practiceMins:20, tags:['作曲','节奏','动态'],
    content:`<h3>歌曲的节奏布局</h3><p>好的歌曲在各段落之间有节奏和动态的变化：</p>
    <ul><li><strong>前奏</strong>：简单、较弱</li>
    <li><strong>主歌</strong>：节奏进入，但保持克制</li>
    <li><strong>副歌</strong>：节奏更密集，动态增强</li>
    <li><strong>桥段</strong>：节奏可简化或变化，制造对比</li>
    <li><strong>尾奏</strong>：逐渐减弱或突然增加</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>写一段8小节的练习——前4小节用八分音符节奏（弱），后4小节用十六分音符节奏（强）。感受节奏密度变化带来的能量变化。</p></div>` },
  { id:160, month:6, title:'低音线设计', practiceMins:20, tags:['作曲','低音线'],
    content:`<h3>写有旋律感的低音线</h3><p>低音线不只是弹根音——它本身就可以是一条旋律！</p>
    <h4>低音线设计方法</h4><ol><li><strong>根音为主</strong>：在强拍弹和弦根音</li>
    <li><strong>经过音</strong>：在根音之间加入经过音（通常是半音）</li>
    <li><strong>和弦转位</strong>：让低音线有"上行"或"下行"的走向</li>
    <li><strong>节奏变化</strong>：低音线可以用八分音符或切分</li></ol>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>写C→Am→F→G的低音线：C(1)-C(2)-B(3)-B(4)→A(1)-A(2)-G(3)-G(4)→F(1)-F(2)-E(3)-E(4)→G(1)-G(2)-F(3)-F(4)→...</p></div>` },
  { id:161, month:6, title:'歌曲创作：确定主题', practiceMins:20, tags:['作曲','创作'], quizIds:[84],
    content:`<h3>开始创作你的第一首歌</h3><p>从今天开始到月底，我们将创作一首完整的短曲。</p>
    <h4>今天的目标：确定主题</h4><ol><li><strong>调性</strong>：选一个调（推荐C大调、G大调或E小调）</li>
    <li><strong>BPM</strong>：确定速度（80-120BPM之间）</li>
    <li><strong>拍号</strong>：推荐4/4拍</li>
    <li><strong>和弦进行</strong>：写一个主歌的和弦进行和副歌的和弦进行</li></ol>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>确定你的歌曲的调性、速度、拍号。写出主歌和副歌的和弦进行。例如：主歌C→Am→F→G，副歌F→G→Em→Am→F→G→C。</p></div>` },
  { id:162, month:6, title:'歌曲创作：主歌旋律', practiceMins:25, tags:['作曲','创作'],
    content:`<h3>写主歌的旋律</h3><p>在主歌的和弦进行上创作旋律：</p>
    <ol><li>先弹和弦进行的节奏模式</li>
    <li>哼唱一段旋律（用"la"或"da"）</li>
    <li>在指板上找到哼唱的音</li>
    <li>确认强拍音是和弦内音</li>
    <li>调整节奏，让旋律有"呼吸"</li></ol>
    <div class="highlight-box">💡 如果卡住了，先用五声音阶的音作为起点，再逐步加入其他音。</div>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在你的主歌和弦上进行上创作一段8小节的旋律。先哼唱，再在指板上找出来。录下来听！</p></div>` },
  { id:163, month:6, title:'歌曲创作：副歌旋律', practiceMins:25, tags:['作曲','创作'],
    content:`<h3>写副歌旋律</h3><p>副歌旋律应该比主歌更"高"、"宽"、"强"：</p>
    <ul><li><strong>更高的音域</strong>：比主歌高3-5度</li>
    <li><strong>更宽的跳跃</strong>：加入跳进增加冲击力</li>
    <li><strong>更长的音</strong>：使用更多长音制造"宏大"感</li>
    <li><strong>重复性</strong>：副歌旋律应该更容易被记住</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>写副歌旋律。使用主歌旋律的节奏作为起点，但提高音域。加入一个"Hook"——一个特别有记忆点的节奏或音高组合。</p></div>` },
  { id:164, month:6, title:'歌曲创作：桥段与过渡', practiceMins:20, tags:['作曲','创作'],
    content:`<h3>写桥段</h3><p>桥段放在两次副歌之后（歌曲的3/4处）。</p>
    <p>在C大调中，尝试用这些和弦作为桥段：Am→F→C→G（I-vi-IV-V的变体）或者引入新的和弦Dm7→G7→C。</p>
    <h4>桥段旋律技巧</h4><ul><li>使用新的节奏型（从八分改成四分，或反之）</li>
    <li>在一个音上重复（制造紧张感）</li>
    <li>旋律走向上行（推向高潮）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>写一段8小节的桥段。使用新的和弦进行，旋律在情感上"升高"——为最后的副歌做铺垫。</p></div>` },
  { id:165, month:6, title:'歌曲创作：编曲与间奏', practiceMins:25, tags:['作曲','编曲'], quizIds:[85],
    content:`<h3>间奏（Interlude / Solo Section）</h3><p>在歌曲中加入一段乐器间奏（吉他SOLO）。</p>
    <p>在主歌的和弦进行上即兴一段SOLO（用五声音阶为主）。</p>
    <h3>编曲层次</h3><p>思考歌曲的"层次"如何变化：</p>
    <ul><li>前奏：干净的分解和弦</li>
    <li>主歌：加入节奏吉他</li>
    <li>副歌：加入失真/更饱满的音色</li>
    <li>桥段：减少层次（回到简单）再推向高潮</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>为你的歌曲写一段8小节的间奏SOLO。用五声音阶即可。设计音色变化——例如SOLO时把音色从清音切换到失真。</p></div>` },
  { id:166, month:6, title:'编曲：吉他织体（Texture）', practiceMins:20, tags:['编曲','技巧'], quizIds:[86],
    content:`<h3>吉他编曲的织体变化</h3><p>用一把吉他也可以创造丰富的层次感：</p>
    <ul><li><strong>分解和弦（Arpeggio）</strong>：清澈、流动感</li>
    <li><strong>扫弦（Strumming）</strong>：有力、节奏感</li>
    <li><strong>低音线（Bass Line）</strong>：用低音弦弹旋律</li>
    <li><strong>双停（Double Stop）</strong>：两个音同时弹</li>
    <li><strong>和声（Harmony）</strong>：弹三度或六度音程</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在C和弦上尝试不同的织体：先分解（C-E-G-C-E-G）、再扫弦、再弹C-Bass Note、再弹六度双停。思考这些织体用在歌曲的哪些段落合适。</p></div>` },
  { id:167, month:6, title:'编曲：音色与效果器', practiceMins:20, tags:['编曲','效果器'], quizIds:[87],
    content:`<h3>效果器基础</h3><p>不同的音色段落可以定义歌曲的结构：</p>
    <ul><li><strong>Clean（清音）</strong>：适合前奏、主歌、桥段</li>
    <li><strong>Overdrive（过载）</strong>：适合副歌、间奏</li>
    <li><strong>Distortion（失真）</strong>：适合高潮段落</li></ul>
    <h4>常用效果</h4><ul><li>Reverb（混响）——制造空间感</li>
    <li>Delay（延迟）——制造回声效果</li>
    <li>Chorus（合唱）——增加厚度</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>在你的歌曲中分配音色：主歌用Clean + Reverb，副歌用Overdrive。弹奏整首歌，感受音色变化带来的段落对比。</p></div>` },
  { id:168, month:6, title:'编曲：贝斯与鼓的编写思路', practiceMins:20, tags:['编曲','制作'],
    content:`<h3>如果只有一把吉他</h3><p>如果你的歌曲只有一把吉他——你仍然可以暗示贝斯和鼓的存在。</p>
    <h4>暗示贝斯</h4><ul><li>用拇指弹低音弦（Travis Picking的拇指部分）</li>
    <li>保持低音的节奏稳定</li></ul>
    <h4>暗示鼓</h4><ul><li>用扫弦的力度模拟小鼓的重音（2和4拍加重）</li>
    <li>用休止模拟鼓的"呼吸"</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>弹你的歌曲，在2和4拍上加重扫弦——模拟小鼓的节奏。这是"一人乐队"的感觉！</p></div>` },
  { id:169, month:6, title:'录音与回听', practiceMins:25, tags:['制作','录音'],
    content:`<h3>学会录音自己</h3><p>录音是学习音乐最重要的习惯之一。</p>
    <h4>录音的目的</h4><ul><li>客观回听自己的演奏</li>
    <li>记录灵感（动机、旋律片段）</li>
    <li>追踪进步</li></ul>
    <p>即使用手机录音也有价值——关键是养成"录音-回听-反思"的习惯。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用手机录下你完整的歌曲（从主歌到副歌到桥段）。回听并问自己：哪里节奏不稳？哪里和弦切换不流畅？哪里可以更好？</p></div>` },
  { id:170, month:6, title:'歌曲修改打磨', practiceMins:25, tags:['作曲','制作'],
    content:`<h3>修改歌曲</h3><p>好歌是改出来的。回听昨天的录音，找出可以改进的地方：</p>
    <ol><li><strong>和声</strong>：某个和弦是不是可以更好？尝试替换</li>
    <li><strong>旋律</strong>：某个音是不是可以升高或降低？</li>
    <li><strong>节奏</strong>：某个段落的节奏是不是可以调整？</li>
    <li><strong>结构</strong>：段落顺序是否需要调整？</li></ol>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>基于昨天的录音，修改歌曲中的至少3个地方。重新弹奏并录音，比较两版的不同。</p></div>` },
  { id:171, month:6, title:'经典歌曲结构分析', practiceMins:20, tags:['分析','结构'], quizIds:[88],
    content:`<h3>分析经典歌曲</h3><p>详细分析一首经典歌曲的结构：</p>
    <h4>"Yesterday" - The Beatles</h4><ul><li>调性：F大调</li>
    <li>结构：前奏→主歌→主歌→桥段→主歌→桥段→主歌→尾奏</li>
    <li>特别之处：没有传统意义上的副歌，每个主歌结尾是副歌般的旋律</li>
    <li>和弦亮点：使用了bVII（Eb）等调式互换和弦</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>分析你最喜欢的一首歌：调性、和弦进行、段落结构、节奏特征。</p></div>` },
  { id:172, month:6, title:'和声节奏设计', practiceMins:20, tags:['作曲','和声'], quizIds:[89],
    content:`<h3>和声节奏（Harmonic Rhythm）</h3><p>和声节奏 = 和弦更换的频率。</p>
    <p>不同的和声节奏影响歌曲的能量：</p>
    <ul><li><strong>慢速和声节奏</strong>：每个和弦4拍或更久——平静、稳定</li>
    <li><strong>快速和声节奏</strong>：每个和弦1-2拍——紧张、推动</li></ul>
    <p>好的歌曲会在段落之间改变和声节奏：主歌每个和弦2拍，副歌每个和弦1拍——制造加速感。</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>用C→G→Am→F，尝试不同的和声节奏：每个和弦4拍→每个和弦2拍→每个和弦1拍。感受能量如何随和声节奏加快而增强。</p></div>` },
  { id:173, month:6, title:'歌曲的Hook设计', practiceMins:20, tags:['作曲','Hook'], quizIds:[90],
    content:`<h3>什么是好的Hook？</h3><p>Hook（钩子）是歌曲中最抓耳的元素——听到一次就忘不了。</p>
    <h4>不同类型Hook</h4><ul><li><strong>旋律Hook</strong>：一段易记的旋律（如副歌）</li>
    <li><strong>节奏Hook</strong>：一个有特色的节奏型</li>
    <li><strong>和声Hook</strong>：一个独特的和弦进行</li>
    <li><strong>音色Hook</strong>：一个特别的音色或效果</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>为你的歌曲设计一个Hook。在副歌中设计一段3-5个音的旋律，反复出现。让听到的人能跟着哼唱！</p></div>` },
  { id:174, month:6, title:'歌曲完整排练', practiceMins:30, tags:['作曲','排练'],
    content:`<h3>完整排练你的歌曲</h3><p>今天从头到尾完整排你的歌曲：</p>
    <p>1. 前奏（4-8小节）— 建立氛围</p>
    <p>2. 主歌1（8-16小节）— 引入主题</p>
    <p>3. 副歌（8小节）— 高潮</p>
    <p>4. 主歌2（8-16小节）— 延续故事</p>
    <p>5. 副歌（8小节）— 重复高潮</p>
    <p>6. 桥段/间奏SOLO（8-16小节）— 对比</p>
    <p>7. 副歌（8小节）— 最终高潮</p>
    <p>8. 尾奏（4-8小节）— 收束</p>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>从头到尾完整弹奏你的歌曲。录下来。记录时间、结构、切换是否流畅。</p></div>` },
  { id:175, month:6, title:'编曲细化：加入变化', practiceMins:25, tags:['编曲','制作'],
    content:`<h3>让编曲更丰富</h3><p>为你的歌曲加入以下变化之一：</p>
    <ul><li><strong>动态变化</strong>：主歌用分解（轻），副歌用扫弦（强）</li>
    <li><strong>节奏变化</strong>：第二段主歌改变节奏型</li>
    <li><strong>和声变化</strong>：最后一次副歌加入新和弦或和弦替换</li>
    <li><strong>休止</strong>：在某个段落前加入一个"全体休止"</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>选择上面的1-2个变化，应用到你的歌曲中。弹奏并检查变化是否让歌曲更"有趣"。</p></div>` },
  { id:176, month:6, title:'最终作品打磨', practiceMins:30, tags:['作曲','制作'],
    content:`<h3>最终打磨</h3><p>最后阶段：关注细节。</p>
    <ul><li>和弦切换是否流畅？</li>
    <li>节奏是否稳定？（用节拍器检查）</li>
    <li>段落之间的过渡是否自然？</li>
    <li>整首歌的情绪曲线是否合理？</li>
    <li>是否有太多"填充"需要删减？</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>再次完整弹奏并录音。这次关掉节拍器——但用耳朵检查节奏稳定性。反复弹5次，选择最好的一次作为"最终版"。</p></div>` },
  { id:177, month:6, title:'作品分享与交流', practiceMins:20, tags:['作曲','分享'],
    content:`<h3>分享你的作品</h3><p>音乐是为了分享的！</p>
    <ul><li>录一个视频或音频</li>
    <li>分享给朋友/家人</li>
    <li>询问反馈——"你最喜欢哪个部分？""哪个部分感觉怪怪的？"</li>
    <li>上传到音乐平台（Bilibili、抖音、网易云音乐等）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>录制你的最终作品（视频或纯音频）。分享给至少一个人，收集反馈意见。</p></div>` },
  { id:178, month:6, title:'演奏技巧回顾', practiceMins:25, tags:['技巧','复习'],
    content:`<h3>六个月的技巧总结</h3><p>回顾这六个月学过的技巧，标记需要继续练习的：</p>
    <ul><li>☐ 交替拨弦（Alternate Picking）</li>
    <li>☐ 推弦（String Bending）</li>
    <li>☐ 滑音（Slide）</li>
    <li>☐ 揉弦（Vibrato）</li>
    <li>☐ 闷音（Palm Muting）</li>
    <li>☐ 扫弦节奏型</li>
    <li>☐ Travis Picking（特拉维斯拨弦）</li>
    <li>☐ 靠弦奏法（Rest Stroke）</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>选出2个你最薄弱的技巧，用15分钟专门练习它们。</p></div>` },
  { id:179, month:6, title:'乐理知识总复习', practiceMins:25, tags:['乐理','复习'],
    content:`<h3>六个月乐理总结</h3><p>回顾所有乐理知识：</p>
    <ul><li>☐ 十二平均律、半音/全音</li>
    <li>☐ 音名、升降号、等音</li>
    <li>☐ 指板上前5品所有音的位置</li>
    <li>☐ 大调、小调、五声音阶、蓝调音阶</li>
    <li>☐ 四种三和弦、四种七和弦</li>
    <li>☐ 顺阶和弦、和弦功能、终止式</li>
    <li>☐ CAGED系统</li>
    <li>☐ 拍号、时值、切分、三连音</li>
    <li>☐ 调式（多利亚、混合利底亚等）</li>
    <li>☐ 五度圈、调号</li></ul>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>随机抽查——不看任何资料，写出C大调、G大调、A小调的音阶。然后在指板前5品找到所有音。</p></div>` },
  { id:180, month:6, title:'🎉 毕业总结！展望未来', practiceMins:30, tags:['总结','毕业'],
    content:`<h3>🎊 恭喜完成全部180天课程！</h3>
    <p>六个月前，你可能只知道按几个和弦。现在已经掌握了：</p>
    <p>✅ 指板上所有音的位置<br>✅ 大调、小调、五声音阶<br>✅ 和弦理论与和声进行<br>✅ 节奏与律动<br>✅ 即兴技巧<br>✅ 创作了一首完整的歌曲</p>
    <h3>未来的学习方向</h3><ul>
    <li><strong>爵士</strong>：扩展和弦（13和弦）、更复杂的调式、bebop音阶</li>
    <li><strong>指弹</strong>：独立控制多声部的指弹技巧</li>
    <li><strong>速弹</strong>：经济拨弦、扫拨（Sweep Picking）</li>
    <li><strong>音乐制作</strong>：学习录音、混音、编曲软件</li></ul>
    <div class="highlight-box">🎸 记得：音乐是终身的旅程。坚持练习，保持热爱，你会在吉他上越走越远！</div>
    <div class="exercise-box"><h4>📝 今日练习</h4><p>重新弹奏你第1天和第28天学过的内容——对比你现在的水平！然后设定下一个月的学习目标。</p></div>` }
];
