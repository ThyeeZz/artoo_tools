安装：npm install artoo-tools -D

引入：import {
  timeFormat,
  deepClone,
  singleton,
  debounce
} from 'artoo-tools';

1、使用：timeFormat(timeString[,timestamp])

调用：timeFormat('YY-MM-DD hh:mm:ss') // 20-08-26 10：58：22

      timeFormat('YYYY-MM-DD hh:mm:ss') // 2020-08-26 10：58：22

      timeFormat('MM-DD hh:mm:ss') // 08-26 10：58：22

      timeFormat('YY-MDD h:m:s') // 20-8-26 9：8：22

      timeFormat('YYYY-MM-DD hh:mm:ss',1598421401198) // 2020-8-26 13:57:12

2、深度克隆：deepClone(origin[,target]), target 默认为对象，如果最外层是数组，请传"[]";
3、单例
4、函数防抖： debounce(func,time); time单位为秒；

其他工具持续更新中，敬请期待...