console.log("Menu");
console.log("1, Ice Americano");
console.log("2, Cafe Latte");
console.log("3, Cappuccino");
console.log("4, Tea");

var choice = parseInt( prompt("메뉴를 선택해 주세요"));

console.log(choice + "번 메뉴를 선택하였습니다")

/*
if(choice==1) {
    console.log("아이스 아메리카노는 1500원입니다")
}
else if(choice == 2) {
    console.log("카페 라떼는 1500원입니다")
}
else if(choice == 3) {
    console.log("카푸치노는 1500원입니다")
}
else if(choice == 4) {
    console.log("홍차는 1500원입니다")
}
else {
    console.log("죄송하지만 그런 메뉴는 없습니다")
}
*/

//  swith문으로 다시 한 번 작성
switch (choice) {
    case 1:
        console.log("아이스 아메리카노는 1500원입니다");
        break;
    case 2:
        console.log("카페 라떼는 1500원입니다");
        break;
    case 3:
        console.log("카푸치노는 1500원입니다");
        break;
    case 4:
        console.log("홍차는 1500원입니다");
        break;
    default :
        console.log("죄송하지만 그런 메뉴는 없습니다");
        break;
}
//switcj문의 경우에는 break절이 큰 역할을 함