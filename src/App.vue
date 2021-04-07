<template>
  <div id="app">
    <p class="info-text">Заполните форму. Поля отмеченные звездочкой
      (*) обязательны к заполнению.</p>
   <form>
        <fieldset class="about_client">
          <legend>Данные о Клиенте</legend>
          <div class="about_client__info-block">
            <label for="about_client__surname">Фамилия*</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__surname" v-model="clientSurnameData"
            @blur="$v.clientSurnameData.$touch()">
            <div class="error" v-if="$v.clientSurnameData.$error">
            <template v-if="!$v.clientSurnameData.invalid">
              Фамилия обязательна для заполнения
            </template>
            <template v-else-if="!$v.clientSurnameData.alpha">
              Фамилия должна содержать только буквы
            </template>
            </div>
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__name">Имя*</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__name" v-model="clientNameData"
            @blur="$v.clientNameData.$touch()">
            <div class="error" v-if="$v.clientNameData.$error">
            <template v-if="!$v.clientNameData.invalid">
              Имя обязательно для заполнения
            </template>
            <template v-else-if="!$v.clientNameData.alpha">
              Имя должно содержать только буквы
            </template>
            </div>
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__patronymic">Отчество</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__patronymic">
            </div>
          </div>
         <div class="about_client__info-block">
           <label for="about_client__date-birth">Дата рождения*</label>
           <div class="about_client__input-required-block">
           <input type="date" name="date-birth" id="about_client__date-birth"
           v-model="clientDateBirthData" @blur="$v.clientDateBirthData.$touch()">
            <div class="error" v-if="$v.clientDateBirthData.$error">
            <template v-if="!$v.clientDateBirthData.invalid">
              Дата рождения обязательна для заполнения
            </template>
            </div>
           </div>
         </div>
          <div class="about_client__info-block">
            <label for="about_client__phone">Номер телефона*</label>
            <div class="about_client__input-required-block">
            <input type="tel" name="phone" id="about_client__phone"
            placeholder="79991234567" v-model="clientPhoneData"
            @blur="$v.clientPhoneData.$touch()">
            <div class="error" v-if="$v.clientPhoneData.$error">
            <template v-if="!$v.clientPhoneData.number">
              Телефон содержит только цифры в формате 79991234567
            </template>
            </div>
            </div>
          </div>
          <div class="about_client__info-block">
            <p class="about_client__sex-block">Пол</p>
            <input type="radio" name="sex" id="about_client__sex-female" value="female">
            <label for="about_client__sex-female" class="label-sex">Женский</label>
            <input type="radio" name="sex" id="about_client__sex-male" value="male">
            <label for="about_client__sex-male" class="label-sex">Мужской</label>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__group-clients">Группа клиентов*</label>
            <div class="about_client__input-required-block">
            <select name="group-clients" id="about_client__group-clients" multiple
            v-model="groupsClientData" @blur="$v.groupsClientData.$touch()">
              <option value="vip">VIP</option>
              <option value="problems">Проблемные</option>
              <option value="oms">ОМС</option>
            </select>
            <div class="error" v-if="$v.groupsClientData.$error">
            <template v-if="!$v.groupsClientData.invalid">
              Выберите группу или группы для клиента
            </template>
            </div>
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__name-doctor">Лечащий врач</label>
            <div class="about_client__input-required-block">
            <select name="name-doctor" id="about_client__name-doctor">
              <option value="Ivanov">Иванов</option>
              <option value="Zakharov">Захаров</option>
              <option value="Chernyshova">Чернышева</option>
            </select>
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__send-sms" class="label_send-sms">Не отправлять СМС</label>
            <div class="about_client__input-required-block">
            <input type="checkbox" name="send-sms" id="about_client__send-sms">
            </div>
          </div>
        </fieldset>
        <fieldset class="about_client">
          <legend>Адрес</legend>
          <div class="about_client__info-block">
            <label for="about_client__index">Индекс</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__index">
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__country">Страна</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__country">
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__area">Область</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__area">
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__city">Город*</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__city" v-model="cityClientData"
            @blur="$v.cityClientData.$touch()">
            <div class="error" v-if="$v.cityClientData.$error">
            <template v-if="!$v.cityClientData.invalid">
              Введите город
            </template>
            </div>
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__street">Улица</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__street">
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__number-house">Дом</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__number-house">
            </div>
          </div>
        </fieldset>
        <fieldset class="about_client">
          <legend>Паспорт</legend>
          <div class="about_client__info-block">
            <label for="about_client__type">Тип документа*</label>
            <div class="about_client__input-required-block">
            <select name="type" id="about_client__type" v-model="typeDocumentData"
            @blur="$v.typeDocumentData.$touch()">
              <option value="passport">Паспорт</option>
              <option value="birth-certificate">Свидетельство о рождении</option>
              <option value="driver-license">Вод. удостоверение</option>
            </select>
            <div class="error" v-if="$v.typeDocumentData.$error">
            <template v-if="!$v.typeDocumentData.invalid">
              Выберите документ
            </template>
            </div>
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__series">Серия</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__series">
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__number">Номер</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__number">
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__issued">Кем выдан</label>
            <div class="about_client__input-required-block">
            <input type="text" id="about_client__issued">
            </div>
          </div>
          <div class="about_client__info-block">
            <label for="about_client__date-issued">Дата выдачи*</label>
            <div class="about_client__input-required-block">
            <input type="date" id="about_client__date-issued"  v-model="dateIssuedData"
            @blur="$v.dateIssuedData.$touch()">
            <div class="error" v-if="$v.dateIssuedData.$error">
            <template v-if="!$v.dateIssuedData.invalid">
              Дата выдачи обязательна для заполнения
            </template>
            </div>
            </div>
          </div>
        </fieldset>
      </form>
      <button type="submit" :disabled="$v.$invalid">Отправить</button>
          <div id="message_create_client_block" class="message_pet">
          <div id="message_create_client" >Новый клиент успешно создан</div>
        </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      clientSurnameData: null,
      clientNameData: null,
      clientDateBirthData: null,
      clientPhoneData: null,
      groupsClientData: [],
      cityClientData: null,
      typeDocumentData: [],
      dateIssuedData: null,
    };
  },

  validations: {
    clientSurnameData: {
      required,
      alpha: (val) => /^[а-яё]*$/i.test(val),
    },

    clientNameData: {
      required,
      alpha: (val) => /^[а-яё]*$/i.test(val),
    },

    clientDateBirthData: {
      required,
    },

    clientPhoneData: {
      required,
      numeric: (val) => /[7]\d{10}$/.test(val),
    },

    groupsClientData: {
      required,
    },

    cityClientData: {
      required,
    },

    typeDocumentData: {
      required,
    },

    dateIssuedData: {
      required,
    },
  },
};
</script>
