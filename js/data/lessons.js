const LESSONS = {
  1: [ // ===== Month 1: 基础音名与指板入门 (Days 1-30) =====
    { id:1, month:1, title:'什么是十二平均律？', practiceMins:10, tags:['乐理基础','音名'], quizIds:[1],
      content:`<p>十二平均律（12-Tone Equal Temperament）是西方音乐的基础。它将一个八度平均分成<strong>12个相等的半音</strong>。</p>
      <div class="highlight-box">🎯 核心概念：半音（Semitone/Half-step）是音乐中最小的音高距离单位。</div>
      <p>想象一个钢琴键盘：从C到相邻的C#是半音，C到D是全音（2个半音）。在吉他上，<strong>1品 = 1个半音</strong>。</p>
      <p>这12个半音是：<code>C C# D D# E F F# G G# A A# B</code>（然后回到高八度的C）。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在吉他上随便找一根弦，从空弦开始一品一品往上弹，数一数到第12品——你会发现正好是12个半音，回到同名音的高八度。</p></div>` },
    { id:2, month:1, title:'认识音名：C D E F G A B', practiceMins:10, tags:['音名','自然音'], quizIds:[2],
      content:`<p>音乐中有<strong>7个自然音名</strong>（Natural Notes）：<code>C D E F G A B</code>。</p>
      <p>它们对应钢琴上的白键。注意两个特殊的半音关系：</p>
      <ul><li><strong>E → F</strong> = 半音（相邻，中间没有黑键）</li><li><strong>B → C</strong> = 半音（相邻，中间没有黑键）</li><li>其他相邻自然音之间都是全音关系</li></ul>
      <p>在吉他上，这意味着：E到F只隔1品，B到C只隔1品，其他自然音之间隔2品。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在1弦（高E弦）上从空弦开始弹：E(0品)→F(1品)→G(3品)→A(5品)→B(7品)→C(8品)→D(10品)→E(12品)。感受这些音的位置。</p></div>` },
    { id:3, month:1, title:'半音与全音', practiceMins:10, tags:['乐理基础','音程'], quizIds:[3,4],
      content:`<h3>半音（Semitone）</h3><p>半音是音乐中最小的音高距离。在吉他上 = <strong>1品</strong>。</p>
      <h3>全音（Whole Tone）</h3><p>全音 = 2个半音。在吉他上 = <strong>2品</strong>。</p>
      <p>记住这两对特殊的半音关系：</p>
      <ul><li><code>E — F</code>（半音）</li><li><code>B — C</code>（半音）</li></ul>
      <p>其他自然音之间：C-D、D-E、F-G、G-A、A-B 都是全音关系。</p>
      <div class="highlight-box">💡 记忆技巧：E和F是"碰在一起的"，B和C也是"碰在一起的"——它们之间没有黑键。</div>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦上弹奏：E(0)→F(1)→G(3)→A(5)→B(7)→C(8)→D(10)→E(12)。注意食指移动的距离—1品是半音，2品是全音。</p></div>` },
    { id:4, month:1, title:'吉他指板基础结构', practiceMins:15, tags:['指板','构造'],
      content:`<p>吉他指板（Fretboard）由以下部分组成：</p>
      <ul><li><strong>弦（Strings）</strong>：6根弦，从最粗（6弦）到最细（1弦）</li><li><strong>品（Frets）</strong>：指板上的金属条，每品=半音</li><li><strong>品柱（Fret Wire）</strong>：分隔品的金属条</li><li><strong>指板标记（Inlays）</strong>：3、5、7、9、12品等位置的圆点装饰</li></ul>
      <p>弦的编号：1弦（最细/最高音）→ 6弦（最粗/最低音）。但当我们说"第几品"时，是从琴头往琴体方向数的。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>从6弦到1弦分别弹一下空弦，感受粗细和高低的变化。然后找到指板上3品、5品、7品、12品的圆点标记。</p></div>` },
    { id:5, month:1, title:'空弦音 - 标准调弦', practiceMins:10, tags:['调弦','指板'], quizIds:[5],
      content:`<h3>标准调弦（Standard Tuning）</h3><p>吉他标准调弦从6弦到1弦：</p>
      <table class="note-table"><tr><th>弦</th><th>音名</th><th>MIDI编号</th><th>备注</th></tr>
      <tr><td>6弦（最粗）</td><td>E2</td><td>40</td><td>低音E</td></tr>
      <tr><td>5弦</td><td>A2</td><td>45</td><td></td></tr>
      <tr><td>4弦</td><td>D3</td><td>50</td><td></td></tr>
      <tr><td>3弦</td><td>G3</td><td>55</td><td></td></tr>
      <tr><td>2弦</td><td>B3</td><td>59</td><td></td></tr>
      <tr><td>1弦（最细）</td><td>E4</td><td>64</td><td>高音E</td></tr></table>
      <p>记忆口诀：<strong>E</strong>ddie <strong>A</strong>te <strong>D</strong>ynamite, <strong>G</strong>ood <strong>B</strong>ye <strong>E</strong>ddie</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>反复念诵空弦音：E A D G B E。每天调音时大声念出每根弦的音名。</p></div>` },
    { id:6, month:1, title:'1弦（高E弦）前5品的音', practiceMins:15, tags:['指板','1弦'], quizIds:[6],
      content:`<p>今天开始逐弦学习前5品的音。</p>
      <h3>1弦（高E弦）前5品</h3>
      <table class="note-table"><tr><th>品</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>音</td><td>E</td><td>F</td><td>F#</td><td>G</td><td>G#</td><td>A</td></tr></table>
      <p>规律：每升一品=升半音。E→F是半音（1品），F→G是全音（2品）。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在1弦上反复弹奏0-5品，每弹一个音大声说出音名：E - F - F# - G - G# - A。然后随便指一个品，说出音名。</p></div>` },
    { id:7, month:1, title:'2弦（B弦）前5品的音', practiceMins:15, tags:['指板','2弦'], quizIds:[7],
      content:`<h3>2弦（B弦）前5品</h3>
      <table class="note-table"><tr><th>品</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>音</td><td>B</td><td>C</td><td>C#</td><td>D</td><td>D#</td><td>E</td></tr></table>
      <p>注意：B→C是半音（1品），这是两个白键相邻的特殊情况。2弦5品=E，和1弦空弦同音！</p>
      <div class="highlight-box">💡 调弦小知识：2弦5品=1弦空弦（E），这是调弦时常用的参照。</div>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>交替弹奏2弦0-5品和1弦0-5品，比较音高。特别注意B→C在2弦上只隔1品。</p></div>` },
    { id:8, month:1, title:'3弦（G弦）前5品的音', practiceMins:15, tags:['指板','3弦'],
      content:`<h3>3弦（G弦）前5品</h3>
      <table class="note-table"><tr><th>品</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>音</td><td>G</td><td>G#</td><td>A</td><td>A#</td><td>B</td><td>C</td></tr></table>
      <p>3弦是中间弦，过渡了低音区和高音区。3弦空弦=G。</p>
      <p>注意：3弦5品=C，和2弦1品同音（都是C）。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹奏3弦0-5品，然后找找不同弦上的相同音：3弦5品=C=2弦1品。</p></div>` },
    { id:9, month:1, title:'4弦（D弦）前5品的音', practiceMins:15, tags:['指板','4弦'],
      content:`<h3>4弦（D弦）前5品</h3>
      <table class="note-table"><tr><th>品</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>音</td><td>D</td><td>D#</td><td>E</td><td>F</td><td>F#</td><td>G</td></tr></table>
      <p>4弦2品=E，和6弦空弦和1弦空弦是同名音（不同八度）。4弦5品=G=3弦空弦。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹4弦0-5品，然后对比：4弦5品（G）和3弦空弦（G）是同音。这是调弦的另一个参照点。</p></div>` },
    { id:10, month:1, title:'5弦（A弦）前5品的音', practiceMins:15, tags:['指板','5弦'],
      content:`<h3>5弦（A弦）前5品</h3>
      <table class="note-table"><tr><th>品</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>音</td><td>A</td><td>A#</td><td>B</td><td>C</td><td>C#</td><td>D</td></tr></table>
      <p>5弦3品=C，5弦5品=D=4弦空弦。5弦是低音弦，音色厚重。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹5弦0-5品，注意A→A#是半音（1品），A#→B是半音（1品），B→C也是半音（1品）。</p></div>` },
    { id:11, month:1, title:'6弦（低E弦）前5品的音', practiceMins:15, tags:['指板','6弦'], quizIds:[8,9],
      content:`<h3>6弦（低E弦）前5品</h3>
      <table class="note-table"><tr><th>品</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>音</td><td>E</td><td>F</td><td>F#</td><td>G</td><td>G#</td><td>A</td></tr></table>
      <p>6弦和1弦的音名相同（都是E），但相差两个八度。6弦5品=A=5弦空弦。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹6弦0-5品，然后对比6弦0品(E)和1弦0品(E)——感受两个八度的差距。</p></div>` },
    { id:12, month:1, title:'升降号与等音', practiceMins:10, tags:['乐理基础','升降号'],
      content:`<h3>升号（#）和降号（b）</h3><ul>
      <li><strong>升号（#）</strong>：将音升高半音。如 C → C#（C升半音）</li>
      <li><strong>降号（b）</strong>：将音降低半音。如 D → Db（D降半音）</li></ul>
      <h3>等音（Enharmonic Equivalents）</h3><p>同一个音高有不同的名称，称为等音：</p>
      <p><code>C# = Db | D# = Eb | F# = Gb | G# = Ab | A# = Bb</code></p>
      <p>注意：<strong>E#/Fb</strong>和<strong>B#/Cb</strong>虽然理论上存在，但实际就是F和C，极少使用。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在吉他上找：C#在哪些位置？然后弹一下Db——音高完全一样！这就是等音。</p></div>` },
    { id:13, month:1, title:'完整的半音阶（12个音）', practiceMins:10, tags:['乐理基础','半音阶'],
      content:`<h3>半音阶（Chromatic Scale）</h3><p>半音阶包含全部12个音，每个音相隔半音：</p>
      <p style="font-size:18px;text-align:center;padding:12px;background:var(--bg-surface);border-radius:8px">
      <code>C C# D D# E F F# G G# A A# B</code></p>
      <p>注意其中的半音位置：E-F和B-C之间没有升/降音。</p>
      <div class="highlight-box">💡 任何一根弦上，从空弦到12品正好走完一个完整的半音阶，回到同名音。</div>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在1弦上弹奏完整的半音阶：E(0)→F(1)→F#(2)→G(3)→G#(4)→A(5)→A#(6)→B(7)→C(8)→C#(9)→D(10)→D#(11)→E(12)。一边弹一边唱出音名。</p></div>` },
    { id:14, month:1, title:'指板音名规律与5品调弦法', practiceMins:15, tags:['指板','调弦'], quizIds:[10,11],
      content:`<h3>5品调弦法</h3><p>标准调弦下，除了3弦外，<strong>第n弦的5品 = 第n-1弦的空弦</strong>：</p>
      <ul><li>6弦5品 = A = 5弦空弦</li><li>5弦5品 = D = 4弦空弦</li><li>4弦5品 = G = 3弦空弦</li><li><strong>3弦4品 = B = 2弦空弦</strong>（3弦例外，是4品）</li><li>2弦5品 = E = 1弦空弦</li></ul>
      <p>这个规律不仅是调弦方法，也是理解指板音名对应关系的关键。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>用5品调弦法验证每一对弦的对应关系。然后试着不调音器，靠耳朵听来调准吉他。</p></div>` },
    { id:15, month:1, title:'前5品指板总复习', practiceMins:20, tags:['指板','复习'], quizIds:[12],
      content:`<h3>前5品指板全音图</h3>
      <table class="note-table"><tr><th>弦\\品</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>1(E)</td><td>E</td><td>F</td><td>F#</td><td>G</td><td>G#</td><td>A</td></tr>
      <tr><td>2(B)</td><td>B</td><td>C</td><td>C#</td><td>D</td><td>D#</td><td>E</td></tr>
      <tr><td>3(G)</td><td>G</td><td>G#</td><td>A</td><td>A#</td><td>B</td><td>C</td></tr>
      <tr><td>4(D)</td><td>D</td><td>D#</td><td>E</td><td>F</td><td>F#</td><td>G</td></tr>
      <tr><td>5(A)</td><td>A</td><td>A#</td><td>B</td><td>C</td><td>C#</td><td>D</td></tr>
      <tr><td>6(E)</td><td>E</td><td>F</td><td>F#</td><td>G</td><td>G#</td><td>A</td></tr></table>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>对照上表，在吉他上逐弦逐品弹奏并念出音名。然后合上表格，随机指一个位置说出音名。</p></div>` },
    { id:16, month:1, title:'低音区记忆（6弦、5弦、4弦）', practiceMins:15, tags:['指板','低音区'],
      content:`<h3>低音区音名</h3><p>集中记忆低音三根弦前5品的音：</p>
      <div class="highlight-box">6弦：E F F# G G# A<br>5弦：A A# B C C# D<br>4弦：D D# E F F# G</div>
      <p>这些音构成了摇滚和金属的根基——大部分强力和弦（Power Chord）都在这个区域。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>只弹6、5、4弦，随机说一个位置（如"5弦3品"），立刻说出音名。每天练5分钟。</p></div>` },
    { id:17, month:1, title:'中音区记忆（4弦、3弦、2弦）', practiceMins:15, tags:['指板','中音区'],
      content:`<h3>中音区音名</h3><p>4弦、3弦、2弦构成了中音区，是旋律演奏的主要区域：</p>
      <div class="highlight-box">4弦：D D# E F F# G<br>3弦：G G# A A# B C<br>2弦：B C C# D D# E</div>
      <p>这个区域被CAGED系统的各个指型覆盖，是理解和弦构成的关键。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹4-3-2弦，注意3弦和2弦之间是4品调弦关系（3弦4品=B=2弦空弦）。</p></div>` },
    { id:18, month:1, title:'高音区记忆（2弦、1弦）', practiceMins:15, tags:['指板','高音区'], quizIds:[13],
      content:`<h3>高音区音名</h3><p>2弦和1弦是高音区，旋律独奏的主要区域：</p>
      <div class="highlight-box">2弦：B C C# D D# E<br>1弦：E F F# G G# A</div>
      <p>注意：2弦5品=E=1弦空弦。两个高音弦的音色明亮清晰。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹奏简单的旋律：在2弦和1弦上找"小星星"（C C G G A A G...）的音。</p></div>` },
    { id:19, month:1, title:'自然音在指板前5品的位置', practiceMins:15, tags:['指板','自然音'],
      content:`<h3>去掉升降号！</h3><p>只关注自然音（C D E F G A B）在前5品的位置：</p>
      <table class="note-table"><tr><th>弦\\品</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>1(E)</td><td>E</td><td>F</td><td>-</td><td>G</td><td>-</td><td>A</td></tr>
      <tr><td>2(B)</td><td>B</td><td>C</td><td>-</td><td>D</td><td>-</td><td>E</td></tr>
      <tr><td>3(G)</td><td>G</td><td>-</td><td>A</td><td>-</td><td>B</td><td>C</td></tr>
      <tr><td>4(D)</td><td>D</td><td>-</td><td>E</td><td>F</td><td>-</td><td>G</td></tr>
      <tr><td>5(A)</td><td>A</td><td>-</td><td>B</td><td>C</td><td>-</td><td>D</td></tr>
      <tr><td>6(E)</td><td>E</td><td>F</td><td>-</td><td>G</td><td>-</td><td>A</td></tr></table>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>只在"带音"的位置弹奏，忽略空位。先从上到下（6弦到1弦），再从下到上。</p></div>` },
    { id:20, month:1, title:'音名记忆方法总结', practiceMins:15, tags:['指板','练习方法'],
      content:`<h3>三种记忆方法</h3>
      <h4>1. 五度圈记忆法</h4><p>按五度圈顺序记忆：C-G-D-A-E-B。在指板上每根弦的5品就是下一根弦的空弦音。</p>
      <h4>2. 形状记忆法</h4><p>相同音在指板上形成特定形状——八度形状（上两弦、右两品）。</p>
      <h4>3. 歌曲记忆法</h4><p>通过学习歌曲来记忆音名——你知道的歌曲越多，记住的音就越多。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>选一首你熟悉的简单歌曲，试着在1弦和2弦上找出旋律的音。用音名记录下你找到的音。</p></div>` },
    { id:21, month:1, title:'音程入门：什么是音程', practiceMins:10, tags:['音程','乐理基础'],
      content:`<h3>音程（Interval）</h3><p>音程是两个音之间的距离，用半音数衡量。</p>
      <p>音程的名称由两部分组成：</p>
      <ul><li><strong>性质</strong>：纯（Perfect）、大（Major）、小（Minor）、增（Augmented）、减（Diminished）</li>
      <li><strong>度数</strong>：一度、二度、三度、四度、五度、六度、七度、八度</li></ul>
      <p>例如：C到E是"大三度"——"大"是性质，"三度"是度数。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>从C开始弹，然后弹E——感受"大三度"的音响效果，明亮、积极。</p></div>` },
    { id:22, month:1, title:'纯一度、小二度、大二度', practiceMins:10, tags:['音程','乐理基础'],
      content:`<h3>三个基本音程</h3>
      <table class="note-table"><tr><th>音程</th><th>半音</th><th>示例</th><th>听感</th></tr>
      <tr><td>纯一度</td><td>0</td><td>C→C</td><td>相同音</td></tr>
      <tr><td>小二度</td><td>1</td><td>E→F</td><td>紧张、刺耳</td></tr>
      <tr><td>大二度</td><td>2</td><td>C→D</td><td>平稳、进行感</td></tr></table>
      <p>在吉他上：小二度=1品，大二度=2品。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在同一根弦上弹奏小二度和大二度，交替对比听感差异。</p></div>` },
    { id:23, month:1, title:'小三度与大三度', practiceMins:10, tags:['音程','乐理基础'], quizIds:[14,15],
      content:`<h3>三度音程</h3>
      <table class="note-table"><tr><th>音程</th><th>半音</th><th>示例</th><th>听感</th></tr>
      <tr><td>小三度</td><td>3</td><td>C→Eb</td><td>忧伤、柔和</td></tr>
      <tr><td>大三度</td><td>4</td><td>C→E</td><td>明亮、快乐</td></tr></table>
      <p>三度是构成和弦的基础——大三和弦=大三度+小三度，小三和弦=小三度+大三度。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C大三和弦（C-E-G）——先弹C→E（大三度），再弹E→G（小三度）。感受大三度和小三度的区别！</p></div>` },
    { id:24, month:1, title:'纯四度与纯五度', practiceMins:10, tags:['音程','乐理基础'],
      content:`<h3>四度和五度</h3>
      <table class="note-table"><tr><th>音程</th><th>半音</th><th>示例</th><th>听感</th></tr>
      <tr><td>纯四度</td><td>5</td><td>C→F</td><td>空灵、开放</td></tr>
      <tr><td>纯五度</td><td>7</td><td>C→G</td><td>稳定、和谐</td></tr></table>
      <p>纯五度是吉他调弦的核心——相邻弦之间相差纯四度（3弦到2弦是大三度例外）。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹6弦和5弦的空弦（E和A）——纯四度。再弹6弦3品和5弦空弦（G和A）——大二度。感受不同！</p></div>` },
    { id:25, month:1, title:'六度与七度', practiceMins:10, tags:['音程','乐理基础'],
      content:`<h3>六度和七度</h3>
      <table class="note-table"><tr><th>音程</th><th>半音</th><th>示例</th><th>听感</th></tr>
      <tr><td>小六度</td><td>8</td><td>C→Ab</td><td>忧郁</td></tr>
      <tr><td>大六度</td><td>9</td><td>C→A</td><td>温暖</td></tr>
      <tr><td>小七度</td><td>10</td><td>C→Bb</td><td>蓝调感</td></tr>
      <tr><td>大七度</td><td>11</td><td>C→B</td><td>强烈渴望感</td></tr></table>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C→B（大七度）——注意这个强烈的"引导感"，B很想解决到C。这就是导音（Leading Tone）！</p></div>` },
    { id:26, month:1, title:'音程在指板上的形状', practiceMins:15, tags:['音程','指板'],
      content:`<h3>同一弦上的音程形状</h3><p>在同一根弦上：n品到n+k品 = k个半音的音程。</p>
      <h3>相邻弦上的音程</h3><p>标准调弦下，相邻弦（除了3-2弦）的关系是纯四度（5半音）：</p>
      <ul><li>同品相邻弦 = 纯四度（3-2弦是大三度）</li>
      <li>6弦X品 + 5弦X品 = 纯四度</li>
      <li>5弦X品 + 4弦X品 = 纯四度</li>
      <li>3弦X品 + 2弦X品 = 大三度（特殊）</li></ul>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦和5弦同品上弹奏——听纯四度的声音。然后在3弦和2弦同品上弹——听大三度的声音。</p></div>` },
    { id:27, month:1, title:'八度形状', practiceMins:15, tags:['音程','指板'],
      content:`<h3>指板上的八度规律</h3><p>在吉他上找八度音有固定的模式：</p>
      <div class="highlight-box">
      <p><strong>模式一（隔一根弦）</strong>：低音弦X品 → 高音弦X+2品（中间隔一根弦）</p>
      <p>例如：6弦3品(G) → 4弦5品(G)（隔了5弦，+2品）</p>
      <p><strong>模式二（隔两根弦）</strong>：低音弦X品 → 高音弦空弦或X+2品</p>
      </div>
      <p>掌握八度形状能帮你快速找到指板上的同名音。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦找任意音，然后用八度形状在4弦上找到它的八度音。试5次不同的位置。</p></div>` },
    { id:28, month:1, title:'综合练习：找音游戏', practiceMins:20, tags:['指板','练习'],
      content:`<h3>今日练习：找音挑战</h3>
      <p>今天的练习只有一个目标——随意说出一个音名，在指板前5品找到它<strong>所有</strong>的位置。</p>
      <div class="exercise-box"><h4>🎯 挑战1：找C</h4><p>C在前5品的位置：5弦3品、4弦...停了！你自己找吧！</p></div>
      <div class="exercise-box"><h4>🎯 挑战2：找G</h4><p>G在：6弦3品、4弦5品、3弦空弦、1弦3品。你都找到了吗？</p></div>
      <div class="exercise-box"><h4>🎯 挑战3：找E</h4><p>E是空弦音——它在6弦0品、4弦2品、2弦5品、1弦0品。还有别的吗？</p></div>` },
    { id:29, month:1, title:'综合练习：音程识别', practiceMins:20, tags:['音程','练习'],
      content:`<h3>音程识别训练</h3>
      <p>弹两个音，识别它们之间的音程关系：</p>
      <div class="exercise-box"><h4>🎯 练习方法</h4><ol>
      <li>随便按两个音（可以同时弹或先后弹）</li>
      <li>数它们之间差几个半音</li>
      <li>说出音程名称</li></ol></div>
      <p>常用歌曲记忆法：</p>
      <ul><li>纯四度 = "婚礼进行曲"前两个音</li>
      <li>纯五度 = "星球大战"主题前两个音</li>
      <li>大三度 = "欢乐颂"前两个音</li></ul>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C-G（纯五度）然后唱出来。再弹C-E（大三度）。记住这些常见音程的声音！</p></div>` },
    { id:30, month:1, title:'月总复习：第一月总结', practiceMins:20, tags:['复习','总结'],
      content:`<h3>🎉 第一月完成！</h3>
      <p>本月学到的知识点：</p>
      <ul><li>✅ 十二平均律——12个半音构成一个八度</li>
      <li>✅ 7个自然音名：C D E F G A B</li>
      <li>✅ 半音（1品）和全音（2品）</li>
      <li>✅ 标准调弦：E A D G B E</li>
      <li>✅ 前5品所有音的位置</li>
      <li>✅ 升号（#）和降号（b），等音概念</li>
      <li>✅ 基本音程：小二度到大七度</li></ul>
      <div class="highlight-box">💪 你已经打下坚实基础！下个月开始学习音阶和调式。</div>
      <div class="exercise-box"><h4>📝 总复习</h4><p>把本月所有quiz重新做一遍。在不看指板的情况下，默写出6根弦前5品的所有音名。</p></div>` }
  ],

  2: [ // ===== Month 2: 音阶与调式 (Days 31-60) =====
    { id:31, month:2, title:'大调音阶的结构', practiceMins:15, tags:['音阶','大调'], quizIds:[16],
      content:`<h3>大调音阶（Major Scale）</h3><p>大调音阶的公式：<strong>全-全-半-全-全-全-半（W-W-H-W-W-W-H）</strong></p>
      <p>以C大调为例：C → D(全) → E(全) → F(半) → G(全) → A(全) → B(全) → C(半)</p>
      <p>大调音阶产生明亮、欢快的听觉感受，是西方音乐的基础。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦上弹C大调音阶：C(8品)→D(10品)→E(12品)→F(13品)→G(15品)→A(17品)→B(19品)→C(20品)。注意全音（2品）和半音（1品）的切换。</p></div>` },
    { id:32, month:2, title:'C大调音阶', practiceMins:15, tags:['音阶','C大调'], quizIds:[17],
      content:`<h3>C大调音阶</h3><p>C大调是最简单的大调——<strong>没有升降号</strong>！</p>
      <p>C大调音阶：<code>C D E F G A B C</code></p>
      <p>注意E→F和B→C是半音关系。</p>
      <p>在指板上弹奏C大调音阶最常用的把位是从5弦3品开始：</p>
      <table class="note-table"><tr><th>弦</th><th>指法</th></tr>
      <tr><td>5弦</td><td>C(3品·中指) → D(5品·小指)</td></tr>
      <tr><td>4弦</td><td>E(2品·食指) → F(3品·中指) → G(5品·小指)</td></tr>
      <tr><td>3弦</td><td>A(2品·食指) → B(4品·无名指) → C(5品·小指)</td></tr></table>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>用上面的指法弹奏C大调音阶，上行（从低到高）再下行（从高到低）。注意每个音的准确位置。</p></div>` },
    { id:33, month:2, title:'G大调音阶', practiceMins:15, tags:['音阶','G大调'], quizIds:[18],
      content:`<h3>G大调音阶</h3><p>G大调有<strong>1个升号</strong>：F#</p>
      <p>G大调音阶：<code>G A B C D E F# G</code></p>
      <p>G大调和C大调只有一个音不同：F变成了F#。</p>
      <p>G大调在吉他上非常顺手，因为6弦空弦就是G大调的主音（G）：</p>
      <div class="highlight-box">G大调音阶在6弦上的位置：G(3品)→A(5品)→B(7品)→C(8品)→D(10品)→E(12品)→F#(14品)→G(15品)</div>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦上弹G大调音阶。然后比较C大调——注意F和F#的不同！</p></div>` },
    { id:34, month:2, title:'D大调音阶', practiceMins:15, tags:['音阶','D大调'], quizIds:[19],
      content:`<h3>D大调音阶</h3><p>D大调有<strong>2个升号</strong>：F# 和 C#</p>
      <p>D大调音阶：<code>D E F# G A B C# D</code></p>
      <p>D大调在吉他上也很常用，许多摇滚和民谣歌曲使用D大调。</p>
      <div class="highlight-box">💡 升号增加的规律——从C大调开始：0升→C，1升→G，2升→D，3升→A...这是"五度圈"的顺时针方向！</div>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>分别在6弦上弹C大调、G大调、D大调音阶，感受它们音高的不同和升号的增加。</p></div>` },
    { id:35, month:2, title:'A大调与E大调音阶', practiceMins:15, tags:['音阶','大调'],
      content:`<h3>A大调音阶（3个升号）</h3><p>A大调：<code>A B C# D E F# G# A</code></p>
      <h3>E大调音阶（4个升号）</h3><p>E大调：<code>E F# G# A B C# D# E</code></p>
      <p>E大调在吉他上非常自然——6弦空弦=E！许多摇滚歌曲使用E大调。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦上弹奏E大调音阶：E(0)→F#(2)→G#(4)→A(5)→B(7)→C#(9)→D#(11)→E(12)。全部用全音，除了A→B（全音）。注意：E大调的半音在G#→A（3-4半音）和D#→E（11-12半音）之间。</p></div>` },
    { id:36, month:2, title:'大调音阶五种指型入门', practiceMins:20, tags:['音阶','指型'],
      content:`<h3>大调音阶的5种指型</h3><p>在吉他上，CAGED系统将音阶分为5种指型模式。今天先概览：</p>
      <ul><li><strong>指型1（E型）</strong>：从6弦开始，食指在第n品</li>
      <li><strong>指型2（D型）</strong>：基于D和弦形状</li>
      <li><strong>指型3（C型）</strong>：基于C和弦形状</li>
      <li><strong>指型4（A型）</strong>：基于A和弦形状</li>
      <li><strong>指型5（G型）</strong>：基于G和弦形状</li></ul>
      <p>不需要一次记住全部5种！先掌握E型（最常用），再慢慢扩展。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>先弹标准C大调音阶（从5弦3品开始）。这是C型指音阶。明天开始学E型。</p></div>` },
    { id:37, month:2, title:'关系大小调', practiceMins:15, tags:['调式','大小调'], quizIds:[20],
      content:`<h3>关系大小调（Relative Major/Minor）</h3><p>每个大调都有一个关系小调，它们<strong>共享相同的调号</strong>。</p>
      <p>关系小调 = 大调主音下方小三度：</p>
      <ul><li>C大调 → Am（A小调）—— 没有升降号</li>
      <li>G大调 → Em（E小调）—— 1个升号</li>
      <li>D大调 → Bm（B小调）—— 2个升号</li>
      <li>A大调 → F#m（F#小调）—— 3个升号</li>
      <li>E大调 → C#m（C#小调）—— 4个升号</li></ul>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C大调音阶（C D E F G A B C），再弹A小调音阶（A B C D E F G A）。用耳朵听——虽然音相同，但主音不同，听觉中心不同！</p></div>` },
    { id:38, month:2, title:'自然小调音阶', practiceMins:15, tags:['音阶','小调'], quizIds:[21],
      content:`<h3>自然小调（Natural Minor）</h3><p>自然小调音阶公式：<strong>全-半-全-全-半-全-全（W-H-W-W-H-W-W）</strong></p>
      <p>A小调音阶：<code>A B C D E F G A</code></p>
      <p>与大调对比：小调的特征音是<strong>b3、b6、b7</strong>（相比大调降低了3、6、7音）。</p>
      <p>小调产生忧伤、阴暗的听觉感受。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>A小调在指板上：5弦空弦(A)→B(2品)→C(3品)→D(5品)→4弦空弦(D)→等等。完整弹一遍A小调音阶。</p></div>` },
    { id:39, month:2, title:'E小调与D小调音阶', practiceMins:15, tags:['音阶','小调'], quizIds:[22],
      content:`<h3>E小调音阶</h3><p>E小调是G大调的关系小调（1个升号：F#）。</p>
      <p>E小调音阶：<code>E F# G A B C D E</code></p>
      <p>E小调是吉他上最常用的<strong>小调之一</strong>——6弦空弦就是主音！许多经典摇滚歌曲使用E小调。</p>
      <h3>D小调音阶</h3><p>D小调是F大调的关系小调（1个降号：Bb）。</p>
      <p>D小调音阶：<code>D E F G A Bb C D</code></p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在6弦上弹E小调音阶：E(0)→F#(2)→G(3)→A(5)→B(7)→C(8)→D(10)→E(12)。对比这个和E大调音阶的区别—注意G/G#和C/C#的不同！</p></div>` },
    { id:40, month:2, title:'和声小调与旋律小调', practiceMins:15, tags:['音阶','小调'],
      content:`<h3>三种小调音阶</h3>
      <table class="note-table"><tr><th>类型</th><th>公式</th><th>特征</th></tr>
      <tr><td>自然小调</td><td>1-2-b3-4-5-b6-b7</td><td>基础小调</td></tr>
      <tr><td>和声小调</td><td>1-2-b3-4-5-b6-7</td><td>升7级，阿拉伯风味</td></tr>
      <tr><td>旋律小调</td><td>1-2-b3-4-5-6-7</td><td>上行升6、7，下行还原</td></tr></table>
      <p>和声小调将7级音升高半音，创造了更强烈的导音引导感（b7→7）。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹A自然小调→弹A和声小调（G→G#）。感受7级升高带来的"阿拉伯/中东"色彩。</p></div>` },
    { id:41, month:2, title:'五声音阶入门', practiceMins:15, tags:['音阶','五声音阶'], quizIds:[23],
      content:`<h3>五声音阶（Pentatonic Scale）</h3><p>五声音阶由<strong>5个音</strong>组成（"penta"=五）。它去掉了音阶中"不稳定"的音，非常实用！</p>
      <h3>大调五声音阶</h3><p>公式：<code>1-2-3-5-6</code>（去掉4和7）</p>
      <p>C大调五声音阶：C D E G A</p>
      <h3>小调五声音阶</h3><p>公式：<code>1-b3-4-5-b7</code>（去掉2和b6）</p>
      <p>A小调五声音阶：A C D E G</p>
      <div class="highlight-box">💡 小调五声音阶是<strong>最常用的吉他即兴音阶</strong>——摇滚、蓝调、流行都用到它！</div>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>用小调五声音阶在6弦上弹：A(0)→C(3)→D(5)→E(7)→G(10)→A(12)。然后下行。这是最经典的"箱型"指型开头。</p></div>` },
    { id:42, month:2, title:'小调五声音阶第一指型（箱型）', practiceMins:20, tags:['音阶','五声音阶','指型'],
      content:`<h3>小调五声音阶"箱型"指型</h3><p>这是每个吉他手必须掌握的第一个指型！以Am为例：</p>
      <table class="note-table"><tr><th>弦</th><th>食指(5品)</th><th>无名指(7品)</th><th>小指(8品)</th></tr>
      <tr><td>1(E)</td><td>-</td><td>G</td><td>A</td></tr>
      <tr><td>2(B)</td><td>D</td><td>E</td><td>-</td></tr>
      <tr><td>3(G)</td><td>C</td><td>-</td><td>D</td></tr>
      <tr><td>4(D)</td><td>A</td><td>-</td><td>C</td></tr>
      <tr><td>5(A)</td><td>E</td><td>G</td><td>-</td></tr>
      <tr><td>6(E)</td><td>A</td><td>C</td><td>-</td></tr></table>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>从6弦开始上行弹到1弦，再下行。速度要慢，每个音都要清晰。这是你的"即兴武器库"最核心的部分！</p></div>` },
    { id:43, month:2, title:'大调五声音阶指型', practiceMins:15, tags:['音阶','五声音阶'], quizIds:[24],
      content:`<h3>大调五声音阶指型</h3><p>以C大调五声音阶为例（C D E G A）：</p>
      <p>小调五声音阶在<strong>5品</strong>的指型（Am）实际上也是C大调五声音阶！</p>
      <div class="highlight-box">💡 关键理解：Am五声音阶 = C大调五声音阶！它们是关系大小调，共享相同音。区别在于你"感觉"哪个音是主音。</div>
      <p>大调五声音阶听起来明亮轻快，小调五声音阶听起来忧伤有力。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹5品的Am五声音阶，但这次把C（主音）作为"中心"。弹C→D→E→G→A→C，感受大调五声音阶的明亮色彩！</p></div>` },
    { id:44, month:2, title:'五声音阶第二、三指型', practiceMins:20, tags:['音阶','五声音阶','指型'],
      content:`<h3>扩展你的指型库</h3><p>小调五声音阶在指板上有5种指型。第1指型（箱型）你已经学过了。</p>
      <h3>第2指型（从A弦开始）</h3><p>以Am为例，从5弦开始：A(0品)→C(3品)→D(5品)→4弦...等等，这里是以5品把位箱型为第1指型，第2指型向上移动。</p>
      <p>实际上，如果你把第1指型上移7品，就得到另一个指型。它们循环排列覆盖整个指板。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>先熟练掌握第1指型（箱型）。然后试着在更高把位找到同样的音型模式——例如把箱型移到7品，它就变成了Bm五声音阶。</p></div>` },
    { id:45, month:2, title:'小调五声音阶5种指型概览', practiceMins:20, tags:['音阶','五声音阶','指型'],
      content:`<h3>5种小调五声音阶指型</h3><p>五声音阶的5种指型对应CAGED系统，每种覆盖指板的一个区域：</p>
      <ol><li><strong>箱型</strong>（最常用）—— Em指型</li>
      <li><strong>第二指型</strong>—— Dm指型</li>
      <li><strong>第三指型</strong>—— Cm指型</li>
      <li><strong>第四指型</strong>—— Am指型</li>
      <li><strong>第五指型</strong>—— Gm指型</li></ol>
      <p>这5种指型循环覆盖整个指板——学会后你可以在任何把位即兴！</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>打开指板探索工具，设置高亮显示A小调五声音阶的音（A C D E G）。观察它们在指板上的分布模式。</p></div>` },
    { id:46, month:2, title:'CAGED系统：C指型', practiceMins:20, tags:['CAGED','指型'], quizIds:[25,26],
      content:`<h3>CAGED系统</h3><p>CAGED系统用5个开放和弦形状（C-A-G-E-D）来覆盖整个指板。</p>
      <h3>C指型</h3><p>C指型基于开放C和弦的形状。它可以移动到任何把位来演奏不同调的和弦。</p>
      <p>例如：C和弦形状上移2品 = D和弦（音高了全音）。</p>
      <ul><li>C形状在0品 = C和弦</li>
      <li>C形状在2品 = D和弦</li>
      <li>C形状在4品 = E和弦</li></ul>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>按标准C和弦（5弦3品、4弦2品、2弦1品），然后整个手型上移2品——按出D和弦（但注意开放弦已经不适用了，要用食指横按）。</p></div>` },
    { id:47, month:2, title:'CAGED系统：A指型', practiceMins:20, tags:['CAGED','指型'],
      content:`<h3>A指型</h3><p>A指型基于开放A和弦的形状（5弦空弦、4弦2品、3弦2品、2弦2品）。</p>
      <p>A形状是一个很好的"小和弦"指型，适合制造紧凑的和声。</p>
      <p>在CAGED中，A指型通常与E指型配合使用，覆盖指板的不同区域。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>按A和弦形状，然后用食指横按，将整个形状移动到5品——这就是D和弦的A指型。弹一下感受声音的变化。</p></div>` },
    { id:48, month:2, title:'CAGED系统：G指型与E指型', practiceMins:20, tags:['CAGED','指型'],
      content:`<h3>G指型</h3><p>G指型基于G和弦形状（6弦3品、5弦2品、1弦3品等）。G形状覆盖范围大，音域宽广。</p>
      <h3>E指型</h3><p>E指型基于E和弦形状（最容易按的和弦之一！）。E形状加上横按就变成了<strong>横按和弦</strong>的基础。</p>
      <p>E指型 + 食指横按 = 所有大横按和弦！</p>
      <ul><li>E形状+1品横按 = F和弦</li>
      <li>E形状+3品横按 = G和弦</li>
      <li>E形状+5品横按 = A和弦</li></ul>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>按E和弦（开放），然后用食指横按1品——这就是F和弦！再横按3品——G和弦！</p></div>` },
    { id:49, month:2, title:'CAGED系统：D指型', practiceMins:15, tags:['CAGED','指型'],
      content:`<h3>D指型</h3><p>D指型基于D和弦形状（4弦空弦、3弦2品、2弦3品、1弦2品）。</p>
      <p>D形状是高音区的和弦指型，声音明亮清晰。</p>
      <p>CAGED循环：<strong>C → A → G → E → D → C</strong>（在指板上循环，覆盖整个指板）</p>
      <div class="highlight-box">💡 理解CAGED的关键：5个形状在指板上按顺序排列，循环覆盖。掌握它们，你就能在任何把位找到任何和弦！</div>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>把CAGED五个形状按顺序在指板上找出来——从开放把位开始，C形状→A形状→G形状→E形状→D形状。注意它们如何连接和重叠。</p></div>` },
    { id:50, month:2, title:'CAGED指型综合练习', practiceMins:20, tags:['CAGED','指型','练习'], quizIds:[27],
      content:`<h3>CAGED综合练习</h3><p>以C和弦为例，在指板不同位置找到C和弦的5种指型：</p>
      <ul><li>C指型：开放把位（标准C和弦）</li>
      <li>A指型：3品横按（实际是C的A型）</li>
      <li>G指型：5品附近</li>
      <li>E指型：8品横按</li>
      <li>D指型：10品附近</li></ul>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在指板上找到C和弦的5个位置（5种指型）。每个位置弹一个C和弦。你的手指正在覆盖整个指板！</p></div>` },
    { id:51, month:2, title:'和弦内音与经过音', practiceMins:15, tags:['音阶','和声'],
      content:`<h3>和弦内音（Chord Tones）</h3><p>和弦内音是和弦中包含的音（如C和弦的C、E、G）。它们是旋律的"安全港"。</p>
      <h3>经过音（Passing Tones）</h3><p>经过音是两个和弦内音之间的音，用于制造旋律流动感。</p>
      <p>例如：从C到E之间可以用C#和D作为经过音：C → C# → D → D# → E</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>弹C和弦（C E G），然后在和弦内音之间插入经过音：C→D→E→F#→G。感受"从稳定到不稳定再到稳定"的张力变化。</p></div>` },
    { id:52, month:2, title:'调号与五度圈', practiceMins:15, tags:['乐理','调号','五度圈'], quizIds:[28],
      content:`<h3>五度圈（Circle of Fifths）</h3><p>五度圈将12个大调按纯五度关系排列成圆环：</p>
      <p style="text-align:center;padding:12px;background:var(--bg-surface);border-radius:8px">
      <code>C → G → D → A → E → B → F# → C# → Ab → Eb → Bb → F → C</code></p>
      <p>顺时针方向每步增加1个升号，逆时针方向每步增加1个降号。</p>
      <div class="highlight-box">💡 五度圈是理解调号、和弦功能、和弦替换的重要工具——值得花时间记住！</div>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>从C开始，数7个半音向上：C→G→D→A→E→B→F#...这就是五度圈！在吉他6弦上找到这些音。</p></div>` },
    { id:53, month:2, title:'降号调：F大调与Bb大调', practiceMins:15, tags:['音阶','调号'],
      content:`<h3>F大调音阶</h3><p>F大调有<strong>1个降号</strong>：Bb</p>
      <p>F大调：<code>F G A Bb C D E F</code></p>
      <h3>Bb大调音阶</h3><p>Bb大调有<strong>2个降号</strong>：Bb、Eb</p>
      <p>Bb大调：<code>Bb C D Eb F G A Bb</code></p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在4弦上弹F大调音阶：F(3品)→G(5品)→A(7品)→Bb(8品)→C(10品)→D(12品)→E(14品)→F(15品)。注意Bb（8品）的位置。</p></div>` },
    { id:54, month:2, title:'音阶模进练习', practiceMins:20, tags:['音阶','练习','技巧'],
      content:`<h3>模进（Sequence）练习</h3><p>模进是按固定模式在音阶上逐级移动的练习方法，对提升手指灵活性和音乐性极有帮助。</p>
      <h4>三度模进（在C大调上）</h4><p>C-E, D-F, E-G, F-A, G-B, A-C, B-D, C-E</p>
      <h4>四度模进</h4><p>C-F, D-G, E-A, F-B, G-C, A-D, B-E, C-F</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在5弦（A弦）上弹奏C大调音阶的三度模进：C→E, D→F, E→G, F→A, G→B, A→C, B→D。每次弹两个音（先低后高）。</p></div>` },
    { id:55, month:2, title:'音阶实战：经典Riff分析', practiceMins:20, tags:['音阶','实战'], quizIds:[29],
      content:`<h3>用音阶分析经典Riff</h3><p>通过学习经典Riff来巩固音阶知识：</p>
      <h4>Deep Purple - "Smoke on the Water"</h4><p>著名的前奏：G Bb C（使用G小调五声音阶/G蓝调音阶）</p>
      <p>这段Riff使用的音来自G小调五声音阶：G Bb C D F</p>
      <h4>Nirvana - "Come As You Are"</h4><p>前奏Riff：E G# A B （使用E大调/E大调五声音阶）</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>学会"Smoke on the Water"前奏——在6弦上：G(3品)→Bb(6品)→C(8品)。这是弹吉他必学的经典Riff！</p></div>` },
    { id:56, month:2, title:'蓝调音阶入门', practiceMins:15, tags:['音阶','蓝调'], quizIds:[30],
      content:`<h3>蓝调音阶（Blues Scale）</h3><p>蓝调音阶 = 小调五声音阶 + <strong>蓝调音（b5）</strong></p>
      <p>A小调五声音阶：A C D E G</p>
      <p>A蓝调音阶：<code>A C D Eb E G</code>（加了Eb）</p>
      <p>这个b5音（也称"蓝调音"）赋予了蓝调独特的忧郁色彩。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在5品箱型指型中，找到Eb（1弦6品、2弦9品、3弦8品等）。在弹小调五声音阶时"滑"到这个音再离开——立刻就有蓝调味了！</p></div>` },
    { id:57, month:2, title:'A小调vs A大调——对比练习', practiceMins:15, tags:['音阶','对比'],
      content:`<h3>大小调对比</h3><p>以A为主音，比较A大调和A小调的区别：</p>
      <table class="note-table"><tr><th>类型</th><th>音符</th><th>听感</th></tr>
      <tr><td>A大调</td><td>A B C# D E F# G# A</td><td>明亮、积极</td></tr>
      <tr><td>A自然小调</td><td>A B C D E F G A</td><td>忧伤、暗淡</td></tr>
      <tr><td>A和声小调</td><td>A B C D E F G# A</td><td>中东/异域</td></tr>
      <tr><td>A蓝调音阶</td><td>A C D Eb E G A</td><td>忧郁、蓝调</td></tr></table>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>一次弹完A大调→A小调→A蓝调音阶，感受同一主音下不同调式的色彩变化。</p></div>` },
    { id:58, month:2, title:'常见调式：多利亚与混合利底亚', practiceMins:20, tags:['调式','音阶'], quizIds:[],
      content:`<h3>多利亚调式（Dorian）</h3><p>多利亚 = 自然小调升6级（#6）</p>
      <p>A多利亚：A B C D E F# G A（升了F→F#）</p>
      <p>听感：爵士、民谣、凯尔特音乐中常见，比自然小调"亮"一点。</p>
      <h3>混合利底亚调式（Mixolydian）</h3><p>混合利底亚 = 大调降7级（b7）</p>
      <p>G混合利底亚：G A B C D E F G（降了F#→F）</p>
      <p>听感：摇滚、蓝调中非常常见——属七和弦的天然调式。</p>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>在G和弦上弹G混合利底亚音阶——这个音阶在属七和弦即兴中非常实用！</p></div>` },
    { id:59, month:2, title:'音阶即兴入门', practiceMins:25, tags:['即兴','音阶'],
      content:`<h3>第一次即兴</h3><p>是时候把学到的音阶用于实际音乐了！</p>
      <h4>方法：背景和弦 + 即兴音阶</h4>
      <p>找一个简单的背景和弦进行（如Am → G → F → E7），用A小调五声音阶即兴。</p>
      <div class="highlight-box">💡 即兴秘诀：从简单的节奏开始——一次只有几个音，不要急着弹很多！好的音符比多的音符更重要。</div>
      <div class="exercise-box"><h4>📝 今日练习</h4><p>打开一个节拍器（60BPM），播放Am和弦（可以用循环录音），用A小调五声音阶即兴。先只用6弦和5弦上的音，慢慢扩展。</p></div>` },
    { id:60, month:2, title:'月总复习：第二月总结', practiceMins:20, tags:['复习','总结'],
      content:`<h3>🎉 第二月完成！</h3><p>本月学到的知识点：</p>
      <ul><li>✅ 大调音阶结构（全-全-半-全-全-全-半）</li>
      <li>✅ C大调、G大调、D大调、A大调、E大调音阶</li>
      <li>✅ 关系大小调与自然小调音阶</li>
      <li>✅ 五声音阶（大调和小调）</li>
      <li>✅ 小调五声音阶箱型指型</li>
      <li>✅ CAGED系统入门（C-A-G-E-D）</li>
      <li>✅ 五度圈、调号</li>
      <li>✅ 蓝调音阶入门</li></ul>
      <div class="exercise-box"><h4>📝 总复习</h4><p>不看指板写出：C大调、G大调、A小调、A小调五声音阶的音。然后在指板上弹出来。</p></div>` }
  ]
};

// Months 3-6 are added by lessons-ext.js
