---
icon: pen-to-square
date: 2024-03-27
category:
  - 组件启动与停止
tag:
  - 大数据
  - 命令
  - 总结
---

# 组件启动与停止

hadoop：（data4,5,6）

​	start-all.sh

​	stop-all.sh

hive（data6）

```
nohup hive --service metastore >> /data-platform/hive_metastore.log 2>1&
nohup hive --service hiveserver2 >> /data-platform/hiveserver2.log 2>1&

beeline -n root -u jdbc:hive2://192.168.2.11:10000 --verbose=true
```



doris

```shell
/data-platform/doris-2.0/fe/bin/start_fe.sh
/data-platform/doris-2.0/be/bin/start_be.sh
```



kafka

运行以下命令以便以正确的顺序启动所有服务(**在kafka的目录里**)：

```shell
# Start the ZooKeeper service
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```

打开另一个终端会话并运行：

```shell
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```



canal

```
sh bin/startup.sh
sh bin/stop.sh
```

