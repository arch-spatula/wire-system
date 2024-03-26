# Icon

- 다음 예시를 활용해서 아이콘을 호출하기 바랍니다.
- [tabler-icon](https://tabler.io/icons)의 라이브러리를 설치했습니다.
- 아래 표는 공식문서에 알려주는 props입니다. 정말 이 3개가 전부입니다. 거기에 SVG 속성도 접근할 수 있습니다.

| name   | type   | default      |
| ------ | ------ | ------------ |
| size   | Number | 24           |
| color  | String | currentColor |
| stroke | Number | 2            |

```html
<template>
  <IconHome color="red" :size="48" stroke-width="1" />
</template>

<script setup lang="ts">
  import { IconHome } from '@tabler/icons-vue';
</script>
```
