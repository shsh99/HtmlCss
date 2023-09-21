package chap07.verify.exam03;

/**
 * packageName : chap07.verify.exam0101
 * fileName : Point
 * author : kangtaegyung
 * date : 2023/03/30
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/30         kangtaegyung          최초 생성
 */
public class Point {
    //    속성
    int x;
    int y;
    //    생성자
    public Point() {
        this.x = 0;
        this.y = 0;
    }
    //    TODO: 2개 짜리 생성자 Point(매개변수1, 매개변수2)
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    void showPoint() {
//        (0,0)
        System.out.println("(" + x + "," + y + ")");
    }
}