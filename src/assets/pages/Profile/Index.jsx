import { Container, EditInfo, Avatar} from './style'

import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { BsArrowLeft, BsCamera } from 'react-icons/bs'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useAuth } from '../../hooks/auth'
import { api } from '../../../services/api'
import avatarPlaceholder from '/avatarPlaceholder.svg'

export { Profile }

function Profile (){
    const navigate = useNavigate()
    const {updateProfile,user} = useAuth()
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [oldPassword,setOldPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    async function update(){
        const updated={
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(updated, user)

        await updateProfile({user: userUpdated, avatarFile})
        console.log('sucesso')
    }

    
    
    function changeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }
    function navigateBack(){
        navigate(-1)
    }
    return(
        <Container>
            <header>

            <ButtonText title={'voltar'} icon={BsArrowLeft} onClick={navigateBack}/>
            <Avatar>
                <img src={avatar} alt="imagem do usuário" />
                <label htmlFor="avatar">
                    <BsCamera/>

                    <input type="file" id="avatar"  onChange={changeAvatar} />
                </label>
            </Avatar>
            </header>
            <EditInfo>
                <Input type='text' placeholder={user.name} onChange={(e)=>{setName(e.target.value)}}/>
                <Input type='e-mail' placeholder={user.email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <Input type='password' placeholder='Senha atual' onChange={(e)=>{setOldPassword(e.target.value)}}/>
                <Input type='password' placeholder=' Nova Senha' onChange={(e)=>{setNewPassword(e.target.value)}}/>
                <Button title={'Salvar'} onClick={update} />
            </EditInfo>
        </Container>
    )
}