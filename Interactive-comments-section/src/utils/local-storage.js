const setItem = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return "";
  }
};

export { setItem, getItem };
