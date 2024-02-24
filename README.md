# wire-system

와이어 프레임 수준의 디자인 시스템

```sh
pnpm storybook
```

```sh
pnpm build-storybook
```

현재는 `storybook`을 사용할 것입니다. 나중에 `bit.js`로 마이그레이션할지도 모릅니다.

## 왜 시작하는가?

1. 본질적으로는 프론트엔드 개발자인 저에게 여기는 저의 오답노트입니다. 컴포넌트를 만들고 설계하고 호출자가 제어하는 관점에서 효율적인지 고민하면 만든 곳입니다. vue에서 복잡한 상태를 효과적으로 관리하고 좋은 설계하는 방법을 소개합니다.
2. 컴포넌트를 정리할 위키 레포가 되고자 합니다. 다양한 디자인 시스템을 비교하고 최대한 많은 컴포넌트를 최대한 많이 구현할 것입니다. 컴포넌트가 최대한 개인적인 취향이 덜 반영되도록 할 것입니다.
3. 우아하고 효율적이고 명료한 디자인 시스템을 탐구하고 개발하는 것이 목적입니다. 디자인을 효율적이고 정확하게 적용하는 방법을 소개할 것입니다. 한계는 당연히 있습니다. 실제 회사에서 일해보면 라이브러리 때문에 가끔은 `scoped`를 사용할 수 없는 경우도 있었습니다. 나중에 이것은 오염 문제를 만들기도 했습니다. 저는 이론적이기는 해도 최대한 `scoped`를 활용할 것이고 폰트, 컬러와 같은 요소만 공용으로 사용할 CSS를 의존할 것입니다.

[저의 개발자 블로그의 디자인 시스템 위키](https://arch-spatula.github.io/design-system-wiki)에 활용할 레포입니다.

<!--
1. 디자이너로 재직하던 시절 개인적으로 컴포넌트 위키를 노션으로 만들고 정리했습니다. github에 맞게 그리고 개발자에게 맞게 다시쓰고 완성하는게 목표입니다.
2. 개발자가 과거 만들었던 컴포넌트를 다시 만드는 것은 귀찮습니다. 제가 편하게 만들고 싶어서 이 리포를 만듭니다.
-->

## 협업 방식

- 기본적인 브랜치 관리 방식은 github-flow로 최대한 가볍게 관리할 것입니다.
  - 정확한 github-flow 방식의 협업은 아닙니다. 버전 브랜치(예: `1.4.2`)가 모든 것을 받고 완료되면 `main`에 `squash merge`할 것입니다.
    - 작업 히스토리는 이슈와 PR에 남고 merge가 결정되면 인지부하를 줄이기 위해 `squash merge`합니다.
  - `feat`, `fix`, `refactor`, `doc`는 버전 브랜치가 base이고 target입니다.
    - 단일 커밋으로 해결할 수 있을 정도로 작은 경우 해당 버전 브랜치에서 커밋을 허용합니다.
  - `hotfix`는 브랜치 이름이 이슈이름입니다(`hotfix/#이슈번호`). base와 target 모두 `main`입니다. 또 버전 브랜치에도 Merge가 될 것입니다. 타겟을 2개를 갖는 브랜치가 됩니다.
  - `test`는 현재 계획이 없습니다.
- 버전은 일반적인 시멘틱 버전으로 (메이저.마이터.패치)로 다룰 것입니다. 패치는 리팩토링도 모두 다룰 것입니다.
- 파일 이름 변경, 파일 이동, 배포 같은 경우를 제외하고 PR당 줄수는 300줄 이하를 권장합니다. 권고 사항일 뿐입니다. 강제사항은 아닙니다.
- 특별한 경우를 제외하고 PR을 통한 `Merge`를 추구합니다.

<!--
원칙을 작성할 때는 혼선을 야기하는 지양과 지향이라는 단어를 피합니다.

추구와 자제라는 단어를 활용합니다.
 -->

## 모니터링

배포 중인 디자인 시스템들을 목록화합니다. 기업 내부 라이브러리처럼 접근하고 생각하는 것이 좋습니다. 5점 티어시스템을 갖고 있고 이것은 전적으로 저의 주관으로 결정됩니다.

문서 가독성도 평가 기준 중 하나입니다.

디자이너였을 때 선택한 기준이었습니다. 개발자 입장 생산성 그리고 디자인 시스템의 발전에 따라 순서가 바뀔 수 있습니다.

디자인 시스템, 스티커시트, 컴포넌트 라이브러리 모두 담았습니다.

### 평가 보류

airbnb design

https://airbnb.design/

Design at Meta

https://design.facebook.com/

Volvo Cars design system

https://design.volvocars.com/

buffer

https://buffer.com/

vanillaframework

https://vanillaframework.io/docs

servicenow

https://developer.servicenow.com/dev.do#!/

### 수집

https://www.designsystemsforfigma.com/

#### 🌟🌟🌟🌟🌟

Material Design

https://m3.material.io/

Carbon Design System

https://carbondesignsystem.com/

Line Design System

https://designsystem.line.me/LDSM/components

#### ⭐⭐⭐⭐

Toss Design System

https://sooji8.notion.site/sooji8/Tok-D-_-Design-System-Beta-13bbc02b59254190be3b13e4889f4515

쏘카 디자인 시스템(SOCAR)

https://socarframe.socar.kr/8bb3aba4a/p/480a5e-introduction

#### ⭐⭐⭐

Human Interface Guidelines

https://developer.apple.com/design/human-interface-guidelines/guidelines/overview

Ant Design 5.0

https://ant.design/

Fluent UI

https://developer.microsoft.com/en-us/fluentui#/

https://baseweb.design/components/

#### ⭐⭐

Base Web

https://baseweb.design/components/

bootstrap

http://bootstrapk.com/css/

Gestalt

https://gestalt.pinterest.systems/home

#### ⭐

Solar design system

https://design.bulb.co.uk/

## 평가 대기 중

reshaped

https://reshaped.so/

Primer

https://primer.style/

Polaris

https://polaris.shopify.com/

Semantic UI

https://semantic-ui.com/

Ruter Components

https://components.ruter.as/

WP Design System

https://build.washingtonpost.com/?itid=lk_inline_manual_11

Fiori for Web Design Guidelines

https://experience.sap.com/fiori-design-web/

Elastic UI

https://elastic.github.io/eui/#/

Evergreen

https://evergreen.segment.com/

Atlassian Design System

https://atlassian.design/

Latitude Design System

https://www.flexport.com/design

atomize

https://atomizedesign.com/

Predix Design System

https://adele.uxpin.com/ge-digital-predix-design-system

Nord Design System

https://nordhealth.design/?ref=evernote.design

Goldman Sachs

https://design.gs.com/home

Chakra UI

https://chakra-ui.com/

Audi user interfaces

https://www.audi.com/ci/en/guides/user-interface/introduction.html

Tailwind

https://tailwindcss.com/

starbucks creative expression

https://creative.starbucks.com/

Mixpanel Design System

https://design.mixpanel.com/

mongodb ui-design-system

https://www.mongodb.design/#/ui-design-system/welcome

Solid

https://solid.buzzfeed.com/

Lexicon

https://liferay.design/lexicon/

Spectrum

https://spectrum.adobe.com/

Cookbook

https://www.yelp.com/styleguide

Workday Canvas Design System

https://canvas.workday.com/

Mozilla Protocol

https://protocol.mozilla.org/

PEGA CONSTELLATION

https://design.pega.com/

PatternFly

https://www.patternfly.org/v4/

orbit

https://orbit.kiwi/

Lightning Design System

https://www.lightningdesignsystem.com/

Garden

https://garden.zendesk.com/

marvel styleguide

https://marvelapp.com/styleguide/overview/introduction

grommet

https://v2.grommet.io/

Stacks

https://stackoverflow.design/

Thumbprint Design System

https://thumbprint.design/

Hudl Design System uniform

http://uniform.hudltools.com/

Acorn

https://acorn.firefox.com/latest/acorn.html

Pajamas

https://design.gitlab.com/

Clarity Design System

https://clarity.design/

Oracle Alta UI

https://www.oracle.com/webfolder/ux/middleware/alta/index.html

Hey Design

https://heydesign.systems/
