import { useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FormInput from "./components/form-input/FormInput";

function App() {
  const [value, setValue] = useState('recents')
  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(newValue)
  }

  const [formValues, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: formValues.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const onChange = (e) => {
    setValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <article>
      <header>
        <h1>Hello Blog FlexBox</h1>
      </header>
      <main>
        <div className="main-contents">

          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formValues[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Submit</button>
          </form>

        </div>
      </main>
      <footer>
        <BottomNavigation value={value} onChange={handleChange} className="footer">
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
      </footer>
    </article>
  );
}

export default App;
