# Font

- 폰트는 일반적으로 사이즈, 무게, 기타 속성을 유틸 클래스로 다루는 경우가 많습니다.
- 폰트의 서체(typeface)는 [스포카](https://spoqa.github.io/spoqa-han-sans/)로 선택했습니다.
  - Lato와 통일성을 갖고 있습니다. Lato는 숫자가 모노스페이스입니다. UI의 경우 숫자를 표현하는 경우가 많으면 자릿수 비교할 때 모노스페이스 적합니다.
- 다양한 사이즈와 무게를 갖고 있어서 변화가 점진적입니다.

```css
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

* {
  font-family: "Spoqa Han Sans Neo", "sans-serif";
}
```
