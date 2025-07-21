# [level 0] 길이에 따른 연산 - 181879 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181879) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 07월 21일 10:49:31

### 문제 설명

<p style="user-select: auto !important;">정수가 담긴 리스트 <code style="user-select: auto !important;">num_list</code>가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.</p>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">제한사항</h5>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">2 ≤ <code style="user-select: auto !important;">num_list</code>의 길이 ≤ 20</li>
<li style="user-select: auto !important;">1 ≤ <code style="user-select: auto !important;">num_list</code>의 원소 ≤ 9</li>
<li style="user-select: auto !important;"><code style="user-select: auto !important;">num_list</code>의 원소를 모두 곱했을 때&nbsp;2,147,483,647를 넘는 입력은 주어지지 않습니다.</li>
</ul>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예</h5>
<table class="table" style="user-select: auto !important;">
        <thead style="user-select: auto !important;"><tr style="user-select: auto !important;">
<th style="user-select: auto !important;">num_list</th>
<th style="user-select: auto !important;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto !important;"><tr style="user-select: auto !important;">
<td style="user-select: auto !important;">[3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]</td>
<td style="user-select: auto !important;">51</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">[2, 3, 4, 5]</td>
<td style="user-select: auto !important;">120</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예 설명</h5>

<p style="user-select: auto !important;">입출력 예 #1</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">리스트의 길이가 13이므로 모든 원소의 합인 51을 return합니다.</li>
</ul>

<p style="user-select: auto !important;">입출력 예 #2</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">리스트의 길이가 4이므로 모든 원소의 곱인 120을 return합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges