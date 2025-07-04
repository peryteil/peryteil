# [level 0] 코드 처리하기 - 181932 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181932) 

### 성능 요약

메모리: 39.3 MB, 시간: 13.15 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 07월 04일 10:39:02

### 문제 설명

<p style="user-select: auto !important;">문자열 <code style="user-select: auto !important;">code</code>가 주어집니다.<br style="user-select: auto !important;">
<code style="user-select: auto !important;">code</code>를 앞에서부터 읽으면서 만약 문자가 "1"이면 <code style="user-select: auto !important;">mode</code>를 바꿉니다. <code style="user-select: auto !important;">mode</code>에 따라 <code style="user-select: auto !important;">code</code>를 읽어가면서 문자열 <code style="user-select: auto !important;">ret</code>을 만들어냅니다.</p>

<p style="user-select: auto !important;"><code style="user-select: auto !important;">mode</code>는 0과 1이 있으며, <code style="user-select: auto !important;">idx</code>를 0 부터 <code style="user-select: auto !important;">code의 길이 - 1</code> 까지 1씩 키워나가면서 <code style="user-select: auto !important;">code[idx]</code>의 값에 따라 다음과 같이 행동합니다.</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;"><code style="user-select: auto !important;">mode</code>가 0일 때 

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;"><code style="user-select: auto !important;">code[idx]</code>가 "1"이 아니면 <code style="user-select: auto !important;">idx</code>가 짝수일 때만 <code style="user-select: auto !important;">ret</code>의 맨 뒤에 <code style="user-select: auto !important;">code[idx]</code>를 추가합니다.</li>
<li style="user-select: auto !important;"><code style="user-select: auto !important;">code[idx]</code>가 "1"이면 <code style="user-select: auto !important;">mode</code>를 0에서 1로 바꿉니다.</li>
</ul></li>
<li style="user-select: auto !important;"><code style="user-select: auto !important;">mode</code>가 1일 때

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;"><code style="user-select: auto !important;">code[idx]</code>가 "1"이 아니면 <code style="user-select: auto !important;">idx</code>가 홀수일 때만 <code style="user-select: auto !important;">ret</code>의 맨 뒤에 <code style="user-select: auto !important;">code[idx]</code>를 추가합니다.</li>
<li style="user-select: auto !important;"><code style="user-select: auto !important;">code[idx]</code>가 "1"이면 <code style="user-select: auto !important;">mode</code>를 1에서 0으로 바꿉니다.</li>
</ul></li>
</ul>

<p style="user-select: auto !important;">문자열 <code style="user-select: auto !important;">code</code>를 통해 만들어진 문자열 <code style="user-select: auto !important;">ret</code>를 return 하는 solution 함수를 완성해 주세요.</p>

<p style="user-select: auto !important;">단, 시작할 때 <code style="user-select: auto !important;">mode</code>는 0이며, return 하려는 <code style="user-select: auto !important;">ret</code>가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.</p>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">제한사항</h5>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">1 ≤ <code style="user-select: auto !important;">code</code>의 길이 ≤ 100,000

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;"><code style="user-select: auto !important;">code</code>는 알파벳 소문자 또는 "1"로 이루어진 문자열입니다.</li>
</ul></li>
</ul>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예</h5>
<table class="table" style="user-select: auto !important;">
        <thead style="user-select: auto !important;"><tr style="user-select: auto !important;">
<th style="user-select: auto !important;">code</th>
<th style="user-select: auto !important;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto !important;"><tr style="user-select: auto !important;">
<td style="user-select: auto !important;">"abc1abc1abc"</td>
<td style="user-select: auto !important;">"acbac"</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예 설명</h5>

<p style="user-select: auto !important;">입출력 예 #1</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;"><code style="user-select: auto !important;">code</code>의 각 인덱스 <code style="user-select: auto !important;">i</code>에 따라 다음과 같이 <code style="user-select: auto !important;">mode</code>와 <code style="user-select: auto !important;">ret</code>가 변합니다.</li>
</ul>
<table class="table" style="user-select: auto !important;">
        <thead style="user-select: auto !important;"><tr style="user-select: auto !important;">
<th style="user-select: auto !important;">i</th>
<th style="user-select: auto !important;">code[i]</th>
<th style="user-select: auto !important;">mode</th>
<th style="user-select: auto !important;">ret</th>
</tr>
</thead>
        <tbody style="user-select: auto !important;"><tr style="user-select: auto !important;">
<td style="user-select: auto !important;">0</td>
<td style="user-select: auto !important;">"a"</td>
<td style="user-select: auto !important;">0</td>
<td style="user-select: auto !important;">"a"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">1</td>
<td style="user-select: auto !important;">"b"</td>
<td style="user-select: auto !important;">0</td>
<td style="user-select: auto !important;">"a"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">2</td>
<td style="user-select: auto !important;">"c"</td>
<td style="user-select: auto !important;">0</td>
<td style="user-select: auto !important;">"ac"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">3</td>
<td style="user-select: auto !important;">"1"</td>
<td style="user-select: auto !important;">1</td>
<td style="user-select: auto !important;">"ac"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">4</td>
<td style="user-select: auto !important;">"a"</td>
<td style="user-select: auto !important;">1</td>
<td style="user-select: auto !important;">"ac"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">5</td>
<td style="user-select: auto !important;">"b"</td>
<td style="user-select: auto !important;">1</td>
<td style="user-select: auto !important;">"acb"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">6</td>
<td style="user-select: auto !important;">"c"</td>
<td style="user-select: auto !important;">1</td>
<td style="user-select: auto !important;">"acb"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">7</td>
<td style="user-select: auto !important;">"1"</td>
<td style="user-select: auto !important;">0</td>
<td style="user-select: auto !important;">"acb"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">8</td>
<td style="user-select: auto !important;">"a"</td>
<td style="user-select: auto !important;">0</td>
<td style="user-select: auto !important;">"acba"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">9</td>
<td style="user-select: auto !important;">"b"</td>
<td style="user-select: auto !important;">0</td>
<td style="user-select: auto !important;">"acba"</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">10</td>
<td style="user-select: auto !important;">"c"</td>
<td style="user-select: auto !important;">0</td>
<td style="user-select: auto !important;">"acbac"</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto !important;">따라서 "acbac"를 return 합니다.</p>

<p style="user-select: auto !important;">※ 2023년 05월 18일 지문이 수정되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges