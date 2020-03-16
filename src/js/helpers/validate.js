const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{8,}$/,
  nickname: /^[a-zA-Z]{3,}$/,
  first_name: /^[a-zA-Z]{3,}$/,
  last_name: /^[a-zA-Z]{3,}$/,
  phone: /^\d{10}$/,
  country: /^[a-zA-Z]{2,}$/,
  city: /^[a-zA-Z]{2,}$/,
};

function validate(el) {
  const regExpName = el.dataset.required;

  if (!regExpDic[regExpName]) return true;

  return regExpDic[regExpName].test(el.value);
}

export default validate;