---
title: 首页
hero:
  image: https://cdn.jsdelivr.net/gh/youngjuning/images/202111150030039.png
  title: 洛竹宇宙
  desc: May the Force be with you.
  actions:
    - text: 星际航行
      link: /computer-science
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

```tsx
/**
 * inline: true
 */
import React from 'react';
import './index.css';
import data from '../naotu/洛竹宇宙.json';
import KityMinder from 'kityminder-react';

export default () => (
  <KityMinder
    data={data}
    link="https://naotu.baidu.com/file/9edcff888e546a56ea5169c19a924485?token=e069ac3f774b55bb"
  />
);
```
