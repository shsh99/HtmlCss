package chap06.sec04.exam05;

/**
 * packageName : chap06.sec04.exam05
 * fileName : CarApplication
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class CarApplication {
    public static void main(String[] args) {
        Car car = new Car();
        car.keyTurnOn(); // 키를 돌립니다. 출력
        car.run(50); // 5개의 달립니다.
        int speed = car.getSpeed(50); // 현재 속도 값을 리턴
        System.out.println("현재속도:" + speed + "km/h");
    }
}
