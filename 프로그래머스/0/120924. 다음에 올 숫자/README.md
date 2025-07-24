# [level 0] 다음에 올 숫자 - 120924 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120924) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 07월 24일 10:09:55

### 문제 설명

<p style="user-select: auto !important;">등차수열 혹은 등비수열 <code style="user-select: auto !important;">common</code>이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.</p>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">제한사항</h5>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">2 &lt; <code style="user-select: auto !important;">common</code>의 길이 &lt; 1,000</li>
<li style="user-select: auto !important;">-1,000 &lt; <code style="user-select: auto !important;">common</code>의 원소 &lt; 2,000

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;"><code style="user-select: auto !important;">common</code>의 원소는 모두 정수입니다.</li>
</ul></li>
<li style="user-select: auto !important;">등차수열 혹은 등비수열이 아닌 경우는 없습니다.</li>
<li style="user-select: auto !important;">등비수열인 경우 공비는 0이 아닌 정수입니다.</li>
</ul>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예</h5>
<table class="table" style="user-select: auto !important;">
        <thead style="user-select: auto !important;"><tr style="user-select: auto !important;">
<th style="user-select: auto !important;">common</th>
<th style="user-select: auto !important;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto !important;"><tr style="user-select: auto !important;">
<td style="user-select: auto !important;">[1, 2, 3, 4]</td>
<td style="user-select: auto !important;">5</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">[2, 4, 8]</td>
<td style="user-select: auto !important;">16</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예 설명</h5>

<p style="user-select: auto !important;">입출력 예 #1</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">[1, 2, 3, 4]는 공차가 1인 등차수열이므로 다음에 올 수는 5이다.</li>
</ul>

<p style="user-select: auto !important;">입출력 예 #2</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">[2, 4, 8]은 공비가 2인 등비수열이므로 다음에 올 수는 16이다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges