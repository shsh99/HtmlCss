package chap05;

/**
 * packageName : chap05
 * fileName : Sec0502
 * author : GGG
 * date : 2023-09-19
 * description : 배열
 * 요약 :
 * 배열 : 같은 자료형의 데이터를 연속된 공간에 나열하고 인덱스를 부여해 놓은 자료구조
 * 인덱스 : 배열 항목에 붙인 번호, 0 ~ n 까지의 범위
 * 배열 선언(정의) : 자료형[] 변수;
 * 배열 생성 : 1) 자료형[] 변수 = {값1, ... 값n};
 * 2) 자료형[] 변수 = new 자료형[길이];
 * 3) 자료형[] 변수 = new 자료형[길이]{값1, ... 값n};
 * 배열 길이 : 배열의 값의 개수, 배열변수.length (읽기 전용)
 * 다차원 배열 : 배열 안에 또다른 배열이 있음
 * 1) 자료형[][] 변수 = new 자료형[크기][크기];
 * 2) 자료형[][] 변수 = {{값1...}, {값1...}};
 * => for문 코딩 (2개사용)
 * => int[][] arr = {{1,2,3},{4,5,6}}
 * => 팁 ! : for(int i=1;i<=2;i++){
 * for(int j=1; j<=3;j++) {
 * }
 * }
 * 향상된 for 문 : for(자료형 변수 : 배열) {} => 자동으로 인덱스 증가
 * 자료형 변수 : 배열) {} => 자동으로 인덱스 증가
 *
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Sec0502 {

    public void getStudent() {
        // 배열의 초기값
        int[] score = {83, 84, 85, 86, 87, 88, 89, 90, 91, 92};

        int sum = 0; // 합계 변수
        // for문 단축키 : fori
        for (int i = 0; i < 10; i++) {
            sum += score[i]; // 배열의 값 모두 더하기 (누적합)
        }
        int avg = sum / 10; // 평균
        System.out.println("sum =" + sum + ", avg=" + avg);
    }

    public void arrayFunc() {
        int[] scores = {84, 91, 88};
        int sum2 = add(scores); // ok, 가능
//        int sum3 = add({84,91,88}); // 에러발생
        int sum4 = add(new int[]{84, 91, 88});
    }

    //    더하기 함수 생성해서 호출해서 쓰기
    public int add(int[] scores) {
        int sum = 0;
        for (int i = 0; i < 3; i++) {
            sum += scores[i];
        }
        return sum;
    }

    /**
     * arrayTwo
     * 배열의 2번째 정의 방법
     */
    public void arrayTwo() {
        int[] arr1 = new int[3]; // 배열의 정의(선언) : 빈방 만들기(메모리)
//        정수 : 기본값(0), 문자열: null, 실수 : 0.0 등
//      배열의 3가지 방에 값넣기 : 배열의 사용
        arr1[0] = 10;
        arr1[1] = 20;
        arr1[2] = 30;
//        배열 출력
        for (int i = 0; i < 3; i++) {
            System.out.println(arr1[i]); // 배열 값 출력
        }
    }

    /**
     * 얇은 복사(shallow copy) vs 깊은 복사(deep copy)
     */
    public void copyArray() {
//        TODO: 얇은 복사
        int[] oldArray = {1, 2, 3};
        int[] copyArray = oldArray; // 얇은 복사(주소(방번호)를 복사)
        int[] newArray = new int[3]; // 깊은 복사용 변수(방만들기 : 램덤 주소(방번호))
//      스택방     |                         힙방
//      oldArray  | 100   <-------->     100 : {10,2,3}
//      copyArray | 100
//      TODO: 얇은 복사 특징 : oldArray 값을 변경하면 copyArray 값도 같이 변경됨
//            copyArray 값을 변경해도 원본인 oldArray 도 변경됨

//      위의 현상을 피하고자 깊은 복사를 함
//      스택방     |                         힙방
//      oldArray  | 100   <-------->     100 : {1,2,3}
//      newArray  | 200   <-------->     200 : {1,2,3}
//        fori : 반복문 이용
        for (int i = 0; i < 3; i++) {
            newArray[i] = oldArray[i]; // 깊은 복사(원본값 바꾸어도 복사본이 바뀌지 않음)
        }
    }
    /**
     * 향상된 for 문 : for(자료형 변수 : 배열){반복문;}
     */
    public void advancedExam() {
        int[] scores = {95,71,84}; // 국영수 점수 배열
        int sum = 0; // 합계 변수
        // 단축키 : foreach
        for (int s: scores) {
            sum += s; // 누적합
        }
        System.out.println("점수 총합 : " + sum);
        double avg = (double) sum / scores.length;
        System.out.println("점수 평균 : " + avg);
    }

}
