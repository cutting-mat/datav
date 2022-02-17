English | [中文](README_CN.md)

# @cutting-mat/animater

[![npm](https://img.shields.io/npm/v/@cutting-mat/animater.svg)](https://www.npmjs.com/package/@cutting-mat/animater) [![license](https://img.shields.io/github/license/cutting-mat/animater.svg)]()

## Feature

- \<animated\> component matching [animate. CSS](https://animate.style/) Achieve entry and exit animation
- The combination of \<animated-group\> and \<animated\> can easily realize animation arrangement
- Support anonymous mode, controlled mode and grouping mode to meet a variety of animation needs
- With VueRoter's `beforerouteleave` hook, the page departure animation can also be realized

## Install

``` bash
npm i @cutting-mat/animater -S
```

## Use

```js
import animater from '@cutting-mat/animater';
Vue.use(animater);
```

### Anonymous Mode

The simplest application method is that the \<animated\> components in the anonymous \<animated-group\> will enter the site in turn

``` html
<animated-group>
    <animated>
        Content 1
    </animated>
    <animated>
        Content 2
    </animated>
    <animated>
        Content 3
    </animated>
</animated-group>

```

### Controlled Mode

Both \<animated\> and \<animated-group\> support `v-mode / value` to drive the entry and exit status through data

``` html
<animated-group v-modle="groupVisible">
    <animated>
        Content 1
    </animated>
    <animated>
        Content 2
    </animated>
    <animated>
        Content 3
    </animated>
</animated-group>

<animated v-modle="dialogVisible">
    a dialog
</animated>

```

### Marshalling Mode

By naming \<animated-group\> components, they are divided into multiple animation groups, and the instance method is used to control the switching of each animation group

``` html
<!-- group 1 -->
<animated-group name="group1" class="group1-part1">
    <animated>
        Content 1-1
    </animated>
    <animated>
        Content 1-2
    </animated>
    <animated>
        Content 1-3
    </animated>
</animated-group>

<animated-group name="group1" class="group1-part2">
    <animated>
        Content 1-4
    </animated>
    <animated>
        Content 1-5
    </animated>
    <animated>
        Content 1-6
    </animated>
</animated-group>

<!-- group 2 -->
<animated-group name="group2" class="group2-part1">
    <animated>
        Content 2-1
    </animated>
    <animated>
        Content 2-2
    </animated>
    <animated>
        Content 2-3
    </animated>
</animated-group>

<animated-group name="group2" class="group2-part2">
    <animated>
        Content 2-4
    </animated>
    <animated>
        Content 2-5
    </animated>
    <animated>
        Content 2-6
    </animated>
</animated-group>

```

``` js
// Using Vue instance methods in components
this.$AnimatedGroup.enter('group1')

```

## \<AnimatedGroup\> Props

| 属性  | 说明 | 类型 | 可选值 | 默认值 |
| ----  | ---- | ---- | ---- | ---- |
| v-modle / value | 动画组的进出场状态(受控模式) | Boolean | -- | -- |
| name | 动画组名称(编组模式) | String | -- | -- |
| enterClass | 子AnimateBox元素的进场动画class | String | [Animate.css](https://animate.style/) | 'animate__zoomIn' |
| leaveClass | 子AnimateBox元素的退场动画class | String | [Animate.css](https://animate.style/) | 'animate__zoomOut' |
| delay | 子AnimateBox元素的进出场动画间隔，单位s | Number | -- | 0.3 |
| groupDelay | 编组模式下，相邻动画组进场退场的动画间隔 | Number | -- | 0.8 |

## \<AnimatedGroup\> Events

| 事件名  | 说明 | 回调参数 |
| ----  | ---- | ---- |
| change | 进出场状态变化 | 当前进出场状态 visibility[Boolean] |
| groupEnterStart | 进场动画开始 | -- |
| groupEnterEnd | 进场动画结束 | -- |
| groupLeaveStart | 退场动画开始 | -- |
| groupLeaveEnd | 退场动画结束 | -- |

## \<Animated\> Props

| 属性  | 说明 | 类型 | 可选值 | 默认值 |
| ----  | ---- | ---- | ---- | ---- |
| v-modle / value | 动画容器的进出场状态(仅独立使用生效，作为AnimatedGroup子组件时不生效) | Boolean | -- | -- |
| enterClass | 进场动画class，作为子组件时优先级高于AnimateGroup同名属性 | String | [Animate.css](https://animate.style/) | 'animate__fadeIn' |
| leaveClass | 退场动画class，作为子组件时优先级高于AnimateGroup同名属性 | String | [Animate.css](https://animate.style/) | 'animate__fadeOut' |
| duration | 进出场动画时长，单位s | Number | -- | 0.5 |

## \<Animated\> Events

| 事件名  | 说明 | 回调参数 |
| ----  | ---- | ---- |
| change | 进出场状态变化 | 当前进出场状态 visibility[Boolean] |
| enterStart | 进场动画开始 | -- |
| enterEnd | 进场动画结束 | -- |
| leaveStart | 退场动画开始 | -- |
| leaveEnd | 退场动画结束 | -- |

## Instance Methods

| 方法名  | 说明 | 参数 | 返回值 |
| ----  | ---- | ---- | ---- |
| $AnimatedGroup.enter | 指定动画组进场 | 动画组名称 name[String] | 进场动画 Promise |
| $AnimatedGroup.leave | 前台动画组退场 | -- | 退场动画 Promise |

## Notice

- AnimatedGroup & Animated 组合使用时，必须是直接上下级
- 如果 AnimatedGroup 包含于单文件组件中，该组件必须同步加载
