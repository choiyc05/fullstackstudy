import axios from "axios"

const Home = () => {
  const callEvent = () => {
    console.log("callEvent")
    axios.get("http://localhost:8000")
    .then(res => {
      console.log(res.data)
      if(res.data.status) alert(res.data.msg)
    })
  }
  return (
    <div>
      <div className="text-center">
        <h1>메인 화면입니다.</h1>
        <button type="button" onClick={callEvent}>API 호출</button>
      </div>
    </div>
  )
}

export default Home