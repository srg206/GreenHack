import React, { useState } from 'react'
import cl from './ProfilePage.module.scss'
import FormProfile from '../../widgets/FormProfile/FormProfile'
import userAvatar from '../../shared/assets/userAvatar.jpg'
import friendAvatar from '../../shared/assets/profile.svg'
import AddBtn from '../../shared/modules/AddBtn/AddBtn'
import FriendItem from '../../widgets/FriendItem/FriendItem'
import ExitBtn from '../../shared/modules/ExitBtn/ExitBtn'
import AgainSurvey from '../../widgets/AgainSurvey/AgainSurvey'


function ProfilePage() {

    const [userInfo] = useState(
        {
            name: "Татьяна",
            surname: "Иванова",
            birthday: "11.11.2001",
            phone: "8 (555) 555-55-55",
            gender: "Ж",
            send_notifications: true,
            password: "12345678",
            email: "email@gmail.com",
            image: userAvatar,
            friends: [
            {
                username: "Иванов Иван",
                image: friendAvatar,
            },
            {
                username: "Гулякина Анна",
                image: friendAvatar,
            },
            {
                username: "Гулякина Анна",
                image: friendAvatar,
            },
            ]
        }
    )

  return (
    <div className={cl.profilePage}>
        <div className={cl.profilePage__top}>
            <div className={cl.top__title}>Редактирование профиля</div>
            <ExitBtn/>
        </div>
        <div className={cl.profilePage__content}>
            <div className={cl.content__info}>
                <div className={cl.info__image}><img src={userInfo.image} alt="user avatar" /></div>
                <FormProfile/>
            </div>
            <div className={cl.content__friends}>
                <div className={cl.friends__btns}>
                    <div className={`${cl.friendsBtn} ${cl.active}`}>Друзья</div>
                    <div className={cl.requestsBtn}>Запросы</div>
                </div>
                <div className={cl.friends}>
                    <AddBtn/>
                    {
                        userInfo.friends && userInfo.friends.map((friend, index) => (
                            <FriendItem username={friend.username} image={friend.image}/>
                        ))
                    }
                </div>
            </div>
            <div className={cl.content__surveys}>
                <div className={cl.surveys__title}>
                    Анкета для улучшения рекомендаций
                </div>
                <div className={cl.surveys__main}>
                    <AgainSurvey/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage