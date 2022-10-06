---
title: '[blog] 타이핑 애니메이션 스크롤 시 사라지게 하기'
date: '2022'
author:
  name: '김지원'
category: 'blog'
---


## window.requestAnimationFrame()
> **window.requestAnimationFrame()**은 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 합니다. 이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받습니다.


## 상황
타이핑 애니메이션을 만들기 위해 position값이 fixed라서 스크롤 시 계속 고정되어 있는 상태
이를 해결하기 위해 스크롤할 경우 타이핑 애니메이션이 숨겨지거나 나타나게 해야 한다.


## 해결 
```js

  const onScroll = useCallback(() => {
    const typing = document.querySelector('.typing') as HTMLElement | null; // 타이팅 애니메이션
    const text = document.querySelector('.text') as HTMLElement | null; // 테스트 태그
    const scrollY = window.pageYOffset; // 현재 페이지 높이

    if (scrollY > 10) { // 현재 스크롤이 10을 넘으면 타이핑 애니메이션 숨기기
      typing.style.visibility = 'hidden';
      text.style.marginTop = '20px';
    } else { // 현재 스크롤이 10이하면 타이핑 애니메이션 보이기
      typing.style.visibility = 'visible';
      text.style.paddingTop = '100px';
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


```