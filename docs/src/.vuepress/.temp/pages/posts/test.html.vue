<template><div><h1 id="组件启动与停止" tabindex="-1"><a class="header-anchor" href="#组件启动与停止"><span>组件启动与停止</span></a></h1>
<p>hadoop：（data4,5,6）</p>
<p>​	start-all.sh</p>
<p>​	stop-all.sh</p>
<p>hive（data6）</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>nohup hive --service metastore >> /data-platform/hive_metastore.log 2>1&amp;
nohup hive --service hiveserver2 >> /data-platform/hiveserver2.log 2>1&amp;

beeline -n root -u jdbc:hive2://192.168.2.11:10000 --verbose=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>doris</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>/data-platform/doris-2.0/fe/bin/start_fe.sh
/data-platform/doris-2.0/be/bin/start_be.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>kafka</p>
<p>运行以下命令以便以正确的顺序启动所有服务(<strong>在kafka的目录里</strong>)：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Start the ZooKeeper service</span>
$ bin/zookeeper-server-start.sh config/zookeeper.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打开另一个终端会话并运行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Start the Kafka broker service</span>
$ bin/kafka-server-start.sh config/server.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>canal</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>sh bin/startup.sh
sh bin/stop.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


