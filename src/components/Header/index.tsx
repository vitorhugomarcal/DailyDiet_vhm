import logoImg from '@assets/logo.png'
import avatarImg from '@assets/avatar.jpeg'
import { Avatar, Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg}/>
      <Avatar source={avatarImg} />
    </Container>
  )
}