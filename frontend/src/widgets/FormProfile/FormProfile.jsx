import React, { useState } from 'react'
import cl from './FormProfile.module.scss'
import InputDataInfoWithTitle from '../../shared/modules/InputDataInfoWithTitle/InputDataInfoWithTitle'
import CheckboxGender from '../../shared/modules/CheckboxGender/CheckboxGender';
import BtnGreenReverse from '../../shared/modules/BtnGreenReverse/BtnGreenReverse';

function FormProfile() {
    const [isPushNotificationChecked, setIsPushNotificationChecked] = useState(false);
    const [selectedGender, setSelectedGender] = useState("Ж");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
        console.log('Gender changed to:', gender);
    };

    const handleCheckboxChange = (e) => {
        setIsPushNotificationChecked(e.target.checked);
        console.log('Push notifications checked:', e.target.checked);
    };

    const sendData = () => {
        console.log("ОТПРАВКА!");
    }
  return (
    <div className={cl.formProfile}>
        <div className={cl.formProfile__inputs}>
            <InputDataInfoWithTitle value={email} setValue={setEmail} title="Почта"/>
            <InputDataInfoWithTitle value={password} setValue={setPassword} title="Пароль"/>
            <InputDataInfoWithTitle value={name} setValue={setName} title="Имя" />
            <InputDataInfoWithTitle value={surname} setValue={setSurname} title="Фамилия" />
            <InputDataInfoWithTitle value={birthday} setValue={setBirthday} title="Дата рождения" />
            <InputDataInfoWithTitle value={phone} setValue={setPhone} title="Телефон" />
        </div>
        <div className={cl.formProfile__genders}>
            <div className={cl.genders__title}>Пол</div>
            <div className={cl.genders__btns}>
            <CheckboxGender gender="Ж" isActive={selectedGender === "Ж"} onClick={() => handleGenderChange("Ж")} />
            <CheckboxGender gender="М" isActive={selectedGender === "М"} onClick={() => handleGenderChange("М")} />
            </div>
        </div>
        <div className={cl.formProfile__pushNotification}>
            <input
            className={cl.pushNotification__checkbox}
            type="checkbox"
            checked={isPushNotificationChecked}
            onChange={handleCheckboxChange}
            id="push_email"
            name="push_email"
            />
            <label htmlFor="push_email">Присылать напоминания о событиях на указанную почту</label>
        </div>
        <div className={cl.formProfile__btn}>
            <BtnGreenReverse onClick={() => sendData()}>Сохранить изменения</BtnGreenReverse>
        </div>
    </div>
  )
}

export default FormProfile