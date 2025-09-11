export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export function objectToFormData(obj) {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    Array.isArray(value) && value.length > 0
      ? appendFilesFormData(formData, key, value)
      : Array.isArray(value) && value.length == 0
      ? null
      : formData.append(key, value);
  });

  return formData;
}



const appendFilesFormData = (formData, key, value) => {
  value.map((val) => {
    formData.append(key, val);
  });

  return formData;
};

export function objectToFormDataTest(obj, formData = new FormData(), parentKey = '') {
  for (const key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];


    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const arrayKey = `${fullKey}[${i}]`;
        if(value[i] instanceof File){
          formData.append(arrayKey, value[i]);
        }else if (value[i] instanceof Object) {
          objectToFormDataTest(value[i], formData, arrayKey);
        } else {
          formData.append(arrayKey, value[i]);
        }
      }
    } else if ( value instanceof Date){
      formData.append(parentKey, value);
    }else if (value instanceof Object ) {
      objectToFormDataTest(value, formData, fullKey);
    } else {
      formData.append(fullKey, value);
    }
  }
  return formData;
}