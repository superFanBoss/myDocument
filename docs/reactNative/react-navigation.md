# react-navigation 4X

## 简介
react-navigation从发布以来经历了1x，2x，3x的重要变更，现在已经到了4x的阶段，4x相比3x最为重大的变更点如下：

建议，结合react-navigation官方安装文档在借助下面教程进行学习。

## 4x版本重大特性

 navigator被拆分到不同的库中

## 4x版本安装

### 第一步： 安装主库

```
  yarn add react-navigation
```
### 第二步： 安装主库依赖的第三方库

```
yarn add react-native-gesture-handler
yarn add react-native-reanimated
```

### 第三步： 根据需要引入各导航组件的库

```
yarn add react-navigation-stack
yarn add react-navigation-drawer
yarn add react-navigation-tabs
```
### 第四步： 执行pod install

为了在iOS上完成安装，还需要执行一些命令：

```
cd ios
pod install
cd ..
```

### 第五步： 配置react-native-gesture-handler

为了在Android上能够使react-native-gesture-handler有效，需要修改MainActivity.java：

```java
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```



