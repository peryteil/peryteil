import type {FC, PropsWithChildren} from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'

type RequireAuthProps = {}

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({children}) => {
  const {jwt} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!jwt) navigate('/login') // 허가되지 않은 사용자: 이전 페이지로 돌아감
  }, [jwt, navigate])

  return <>{children}</> // 허가된 사용자: children이 element가 되도록 함
}
export default RequireAuth