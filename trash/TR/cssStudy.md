css 정리

===
- display
<pre>
flex 컨텐츠 좌우 여유롭게
</pre>

- flex-wrap
<pre>
wrap 화면을 넘어가는 컨텐츠를 아래로 
</pre>

- align-items
<pre>
center 상하 센터
</pre>

- justify-content
<pre>
center 좌우 센터
</pre>

- overflow
<pre>
데이터가 페이지 등에서 넘었을 때 어떤 식으로 보여줄지 
auto 옆에 스크롤 표시됨
scroll 아래 옆에 스크롤 표시됨
</pre>

- scroll 지우는 법(실행o, 보이는 것만)
<pre>
IE and Edge 
.box{
    -ms-overflow-style: none;
}

Firefox 
.box{
    scrollbar-width: none; 
}

Chrome, Safari, Opera
.box::-webkit-scrollbar {
    display: none; 
}
</pre>
