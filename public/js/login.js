/* eslint-disable */

const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8001/api/v1/users/login',
      data: {
        email,
        password
      }
    });
  } catch (err) {
    console.log(err.response.data);
  }
  window.location.href = 'http://127.0.0.1:8001/api/v1/homepage';
};

 document.querySelector('.form').addEventListener('submit', e => {
   e.preventDefault();
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   login(email, password);
 });