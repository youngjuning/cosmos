---
title: 首页
hero:
  title: 洛竹宇宙
  desc: 学而不思则罔，思而不学则殆。
  actions:
    - text: 星际航行
      link: /computer-science
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

```tsx
/**
 * inline: true
 * hideActions: ["EXTERNAL"]
 */
import React from 'react';
import './index.css';
import data from '../naotu/数组的方法.json';
import KityMinder from 'kityminder-react';

export default () => <KityMinder data={data} />;
```
