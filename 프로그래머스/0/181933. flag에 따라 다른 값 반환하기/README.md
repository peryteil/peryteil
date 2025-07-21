# [level 0] flag에 따라 다른 값 반환하기 - 181933 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181933) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 07월 21일 10:33:41

### 문제 설명

<p style="user-select: auto !important;">두 정수 <code style="user-select: auto !important;">a</code>, <code style="user-select: auto !important;">b</code>와 boolean 변수 <code style="user-select: auto !important;">flag</code>가 매개변수로 주어질 때, <code style="user-select: auto !important;">flag</code>가 true면 <code style="user-select: auto !important;">a</code> + <code style="user-select: auto !important;">b</code>를 false면 <code style="user-select: auto !important;">a</code> - <code style="user-select: auto !important;">b</code>를 return 하는 solution 함수를 작성해 주세요.</p>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">제한사항</h5>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">-1,000 ≤ <code style="user-select: auto !important;">a</code>, <code style="user-select: auto !important;">b</code> ≤ 1,000</li>
</ul>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예</h5>
<table class="table" style="user-select: auto !important;">
        <thead style="user-select: auto !important;"><tr style="user-select: auto !important;">
<th style="user-select: auto !important;">a</th>
<th style="user-select: auto !important;">b</th>
<th style="user-select: auto !important;">flag</th>
<th style="user-select: auto !important;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto !important;"><tr style="user-select: auto !important;">
<td style="user-select: auto !important;">-4</td>
<td style="user-select: auto !important;">7</td>
<td style="user-select: auto !important;">true</td>
<td style="user-select: auto !important;">3</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">-4</td>
<td style="user-select: auto !important;">7</td>
<td style="user-select: auto !important;">false</td>
<td style="user-select: auto !important;">-11</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예</h5>

<p style="user-select: auto !important;">입출력 예 #1</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">예제 1번에서 <code style="user-select: auto !important;">flag</code>가 true이므로 <code style="user-select: auto !important;">a</code> + <code style="user-select: auto !important;">b</code> = (-4) + 7 = 3을 return 합니다.</li>
</ul>

<p style="user-select: auto !important;">입출력 예 #2</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">예제 2번에서 <code style="user-select: auto !important;">flag</code>가 false이므로 <code style="user-select: auto !important;">a</code> - <code style="user-select: auto !important;">b</code> = (-4) - 7 = -11을 return 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges