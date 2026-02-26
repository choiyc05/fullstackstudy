# 260105

  ## useState 기본 설명 / 사용법
    각 팀마다 설명 / 용법 예시로 설명

  ## props 학습
```js
    import { useState } from 'react'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.bundle.min.js'
    
    
    const Input = ({value,setValue}) => <input type = "text" value = {value} onChange={e => setValue(e.target.value)} />
    const Button = ({event}) => <button type="button" onClick={event}>합치기</button>
    
    const App = () => {
      const [name, setName] = useState("홍길동");
      const [desc, setDesc] = useState("전설의 도둑")
      const event = () => {
        const data = {name, desc}
        console.log(data)
      }
      
    
      return (
        <>
          <Input v={name} setValue={setName}/>
          <Input v={desc} setValue={setDesc}/>
          <Button event={event}/>
        </>
      )
    }
    
    export default App
```

  ## 
