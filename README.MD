### DEMO

https://webdev-shop-admin.herokuapp.com/

### USE FETCH 

```
    const handleLogin = () => {
        fetch('https://webdev-shop-api.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'web-auth-token': 'Bearer ' + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                'username': 'ngnam',
                'password': '12345'
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.access_token);
        })
        .catch(err => console.log(err))
    }
```

## DEVELOPMENT

```
    console.log(process.env);
    NODE_ENV: "development"
```