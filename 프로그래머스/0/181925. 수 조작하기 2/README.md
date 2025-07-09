# [level 0] 수 조작하기 2 - 181925 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181925) 

### 성능 요약

메모리: 45.6 MB, 시간: 9.72 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 07월 09일 10:26:11

### 문제 설명

<p style="user-select: auto !important;">정수 배열 <code style="user-select: auto !important;">numLog</code>가 주어집니다. 처음에 <code style="user-select: auto !important;">numLog[0]</code>에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">"w" : 수에 1을 더한다.</li>
<li style="user-select: auto !important;">"s" : 수에 1을 뺀다.</li>
<li style="user-select: auto !important;">"d" : 수에 10을 더한다.</li>
<li style="user-select: auto !important;">"a" : 수에 10을 뺀다.</li>
</ul>

<p style="user-select: auto !important;">그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 <code style="user-select: auto !important;">numLog</code>입니다. 즉, <code style="user-select: auto !important;">numLog[i]</code>는 <code style="user-select: auto !important;">numLog[0]</code>로부터 총 <code style="user-select: auto !important;">i</code>번의 조작을 가한 결과가 저장되어 있습니다.</p>

<p style="user-select: auto !important;">주어진 정수 배열 <code style="user-select: auto !important;">numLog</code>에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.</p>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">제한사항</h5>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">2 ≤ <code style="user-select: auto !important;">numLog</code>의 길이 ≤ 100,000

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">-100,000 ≤ <code style="user-select: auto !important;">numLog[0]</code> ≤ 100,000</li>
<li style="user-select: auto !important;">1 ≤ <code style="user-select: auto !important;">i</code> ≤ <code style="user-select: auto !important;">numLog</code>의 길이인 모든 <code style="user-select: auto !important;">i</code>에 대해 <code style="user-select: auto !important;">|numLog[i] - numLog[i - 1]|</code>의 값은 1 또는 10입니다.</li>
</ul></li>
</ul>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예</h5>
<table class="table" style="user-select: auto !important;">
        <thead style="user-select: auto !important;"><tr style="user-select: auto !important;">
<th style="user-select: auto !important;">numLog</th>
<th style="user-select: auto !important;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto !important;"><tr style="user-select: auto !important;">
<td style="user-select: auto !important;">[0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]</td>
<td style="user-select: auto !important;">"wsdawsdassw"</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예 설명</h5>

<p style="user-select: auto !important;">입출력 예 #1</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">result인 "wsdawsdassw"를 따라 <code style="user-select: auto !important;">numLog[0]</code>에서부터 시작해 조작을 하면 <code style="user-select: auto !important;">numLog</code>의 값과 순서대로 일치합니다. 따라서 "wsdawsdassw"를 return 합니다.</li>
</ul>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">Hint</h5>

<p style="user-select: auto !important;">"수 조작하기 1" 문제의 <code style="user-select: auto !important;">n</code>값이 <code style="user-select: auto !important;">numLog[0]</code>에 해당하며, 이 문제에서 주어진 <code style="user-select: auto !important;">numLog</code>에 따라 "수 조작하기 1" 문제의 <code style="user-select: auto !important;">control</code>을 구하는 문제라고 이해할 수 있습니다.</p>

<p style="user-select: auto !important;">입출력 예 #1은 "수 조작하기 1" 문제의 입출력 예 #1과 같은 예시이므로 참고하시기 바랍니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges