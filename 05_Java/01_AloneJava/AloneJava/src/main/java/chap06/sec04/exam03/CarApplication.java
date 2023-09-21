package chap06.sec04.exam03;

/**
 * packageName : chap06.sec04.exam03
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

        // TODO: 1) 기름 넣기 : 5
        car.setGas(5);

        // TODO: 2) 남아있는 기름 확인 : true, 없으면 false
        boolean gasState = car.isLeftGas();

        // TODO: 3) 자동차 출발
        if (gasState) {
            System.out.println("출발합니다.");
            car.run(); // 출발
        }

        // TODO: 4) 기름 확인
        if (car.isLeftGas() == true) {
            System.out.println("gas 를 넣을 필요가 없습니다.");
        } else {
            System.out.println("gas 를 주입하세요");
        }


    }
}
