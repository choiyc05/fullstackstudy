import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router";
import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_FASTAPI_URL || "http://localhost:8000", // .nev파일에 적힌 주소부터 확인, 없으면 ...8000를 기본 주소로 설정
  withCredentials: true,    // 서버에 요청 시 쿠키 사용, 백엔드에서도 허용해야 함
  headers: {
    "Content-Type": "application/json",
  },
})

export const AuthContext = createContext() // *로그인 상태* 저장

const AuthProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const setAuth = status => {
    localStorage.setItem("user", status)
    setIsLogin(status)
    navigate("/")
  }

  const removeAuth = () => {
    
    api.post("/logout")
    .then(res => {
      console.log(res)
      localStorage.removeItem("user")
      setIsLogin(false)
      navigate("/")
    })
    .catch(err => console.error(err))
    
  }

  useEffect(() => {
    if(localStorage.getItem("user")) setIsLogin(true)
  }, [])

  return (
    <AuthContext.Provider value={{ isLogin, setAuth, removeAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider