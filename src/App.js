import { useState } from "react";


function App() {

  const [saying, setSaying] = useState("오늘의 명언은 뭘까요?");

  const wise = [
    "궁지에 몰린 마음을 밥처럼 씹어라",
    "진리가 너를 자유롭게 할것이다",
    "마지막에 이기는건 나다",
    "그래도 지구는 돈다",
    "나의 삽질에는 감동이 있다",
    "정의는 승리한다 승자가 정의니까",
    "함께해서 더러웠고 다시는 만나지 말자",
    "잘가라 우리가 다시 만날지는 아무도 모른다",
    "궁지에 몰렸을때만 보이는 길도 있다",
    "똥밭에 굴러도 좋은게 인생이다",
    "중요한것은 꺽이지 않는 마음이다",
    "멀리서 보면 희극 가까이서 보면 비극이다",
    "꿈은 도망가지 않는다 도망 가는건 자기 자신이다",
    "재능은 꽃 피우는것 센스는 갈고 닦는것",
    "바닥 밑에는 지하가 있다",
    "인연은 새와 같다 어느날 날아가 버릴수도 있으니까",
    "어느쪽이 더 나은지는 신만이 알뿐이다",
    "살고자 하면 죽을것이고 죽고자 하면 살것이다",
    "일단 지르고 생각하자",
    "오늘이 최악이라면 내일부터는 좋아질 일만 남아있다",
    "계획대로 되지 않는게 인생이다",
    "길 위에 뜻이 있다"
  ];

  function word() {

    console.log("클릭 되었습니다.");

    const pick = wise[Math.floor(Math.random()*wise.length)];

    setSaying(pick);
    
  }

  return (
    <div>
      <button onClick={word}>띵언 불러오기</button>
      <h1>{saying}</h1>
    </div>
  );
}

export default App;