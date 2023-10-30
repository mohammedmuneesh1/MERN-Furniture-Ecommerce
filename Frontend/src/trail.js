const userreg = (e) => {
    e.preventDefault();
    const fname = e.target.Rfname.value.trim();
    const Rpasschk = e.target.Rpasschk.value.trim();
    const email = e.target.Rmail.value.trim();
    const pass = e.target.Rpass.value.trim();
  
    if (fname === '' || email === '' || pass === '' || Rpasschk === '') {
      alert('Enter some Data');
    } else {
      if (pass !== Rpasschk) {
        alert('Enter Correct Password');
      } else {
        const newUser = {
          name: fname,
          password: pass,
          email: email,
          type: 'user',
          order: [],
        };
  
        // Send a POST request to your backend API
        axios.post('your_backend_api_url_here', newUser)
          .then((response) => {
            alert('Welcome back');
            navigate('/');
            setClose(true);
            e.target.Rfname.value = '';
            e.target.Rpasschk.value = '';
            e.target.Rmail.value = '';
            e.target.Rpass.value = '';
          })
          .catch((error) => {
            console.error(error);
            alert('An error occurred during registration. Please try again.');
          });
      }
    }
  };
  