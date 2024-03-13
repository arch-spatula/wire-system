# Font

- 폰트는 일반적으로 사이즈, 무게, 기타 속성을 유틸 클래스로 다루는 경우가 많습니다.
- 폰트의 서체(typeface)는 [스포카](https://spoqa.github.io/spoqa-han-sans/)로 선택했습니다.
  - Lato와 통일성을 갖고 있습니다. Lato는 숫자가 모노스페이스입니다. UI의 경우 숫자를 표현하는 경우가 많으면 자릿수 비교할 때 모노스페이스 적합니다.
- 다양한 사이즈와 무게를 갖고 있어서 변화가 점진적입니다.

```css
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

* {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
}
```

- 디자이너가 정한 이름을 활용하는 것이 적할합니다. 폰트는 비즈니스 도메인에 속한 지식입니다.
- 개발자가 좋아하는 네이밍 컨벤션은 있어서 디자이너와 잘 상의하기 바랍니다.

```css
.대분류-중분류-무게 {
  /*  */
}
```

- 대분류는 `heading`, `body`, `caption`입니다. 중분류는 `1`, `2`, `3` ...입니다. 무게는 `b`, `r`입니다.

| 전체 클래스명     |
| ----------------- |
| heading-1/2/3-b/r |
| body-1/2-b/r      |
| caption-1/2-b/r   |
