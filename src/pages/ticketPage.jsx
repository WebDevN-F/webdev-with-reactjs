import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import CategoriesContext from '../contexts/appContext';

const BASE_URL = process.env.REACT_APP_BASE_API;

const TicketPage = ({editMode = false}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = React.useState({
    title: '',
    priority: 1,
    category: '',
    description: '',
    process: 0,
    owner: 'Nam Nguyen',
    email: '',
    avatar: '/crm_logo.png',
    status: 'done',
    timestamp: new Date().toISOString(),
  })

  const [validated, setValidated] = React.useState(false)

  React.useEffect(() => {

    handleValidation();

  }, [validated, formData.title, formData.email])

  const form = React.useRef(null);

  const [errors, setErrors] = React.useState({})

  const { categories, setCategories } = React.useContext(CategoriesContext);

  const handleValidation = () => {
    // follows questions https://stackoverflow.com/questions/41296668/how-do-i-add-validation-to-the-form-in-my-react-component
    // not validated after form loaded the first time
    // if (!validated) { 
    //   return;
    // }

    console.log('validating')

    let fields = formData;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["title"] || fields["title"] === '') {
      formIsValid = false;
      errors["title"] = "Cannot be empty";
    }

    //Email
    if (!fields["email"] || fields["email"] === '') {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined" && fields["email"] !== '') {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    setErrors(errors);
    return formIsValid;
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (e.target.type === 'radio') {
      setFormData({ ...formData, [name]: parseInt(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    if (handleValidation()) {
      console.log('submit', JSON.stringify(formData));
      // tickets
      const data = {
        'data': formData
      }
      if (!editMode) {
        const response = await axios.post(`${BASE_URL}/tickets`, data);
        const success = response.status === 200;
        if (success) {
          alert('Ticket created successfully');
          navigate('/');
        }
      } else {
        const response = await axios.put(`${BASE_URL}/tickets/${id}`, data);
        const success = response.status === 200;
        if (success) {
          alert('Ticket updated successfully');
          navigate('/');
        }
      }
    }
  }

  const fetchTicket = async () => {
    const response = await axios.get(`${BASE_URL}/tickets/${id}`);
    const success = response.status === 200;
    if (success) {
      setFormData(response.data.data);
    }
  }
  
  React.useEffect(() => {
    if (editMode) {
      fetchTicket();
    }
  }, [])

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update Your Ticket' : 'Create a Ticket'}</h1>
      <div className="ticket-container height-80">
        <form onSubmit={handleSubmit} noValidate ref={form}>
          <section className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={formData.title} />
            { errors["title"] && <span style={{ color: "red" }}>{errors["title"]}</span> }

            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={formData.description} />

            <label htmlFor="category">Category</label>
            <select name="category" id="category"
              onChange={handleChange}
              value={formData.category}>
              <option value="">Select a category</option>
              {categories?.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>

            <label htmlFor="new-category">New Category</label>
            <input
              id="new-category"
              type="text"
              placeholder="new category"
              name="category"
              onChange={handleChange}
              value={formData.category} />

            <label>Priority</label>
            <div className="multiple-input-container">
              <label htmlFor="priority-1"> 1</label>
              <input
                id="priority-1"
                type="radio"
                name="priority"
                onChange={handleChange}
                value={1}
                checked={formData.priority === 1} />

              <label htmlFor="priority-2"> 2</label>
              <input
                id="priority-2"
                type="radio"
                name="priority"
                onChange={handleChange}
                value={2}
                checked={formData.priority === 2} />

              <label htmlFor="priority-3"> 3</label>
              <input
                id="priority-3"
                type="radio"
                name="priority"
                onChange={handleChange}
                value={3}
                checked={formData.priority === 3} />

              <label htmlFor="priority-4"> 4</label>
              <input
                id="priority-4"
                type="radio"
                name="priority"
                onChange={handleChange}
                value={4}
                checked={formData.priority === 4} />

              <label htmlFor="priority-5"> 5</label>
              <input
                id="priority-5"
                type="radio"
                name="priority"
                onChange={handleChange}
                value={5}
                checked={formData.priority === 5} />
            </div>
            
            {
              editMode &&
              <>
                <label htmlFor="process">Process</label>
                <input
                  id="process"
                  type="range"
                  name="process"
                  min="0"
                  max="100"
                  step="1"
                  onChange={handleChange}
                  value={formData.process} />
                  { formData.process && <span>{formData.process}</span> }
              </>
            }
            
            <label htmlFor="status">Status</label>
            <select name="status" id="status" value={formData.status} onChange={handleChange}>
              <option value="not-started" selected>not-started</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
              <option value="stuck">Stuck</option>
            </select>

            <label htmlFor="owner">Owner</label>
            <input
              id="owner"
              type="text"
              placeholder="owner"
              name="owner"
              onChange={handleChange}
              value={formData.owner} />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email} />
            { errors["email"] && <span style={{ color: "red" }}>{errors["email"]}</span> }

            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              type="text"
              placeholder="avatar"
              name="avatar"
              onChange={handleChange}
              value={formData.avatar} />
            { formData.avatar && <img src={formData.avatar} alt="avatar" width="60" height="60" /> }
          <input type="hidden" name="timestamp" value={formData.timestamp} />
          </section>
          <section>
            <button className="btn btn-block"type="submit">
              { editMode ? 'Update' : 'Create' }
            </button>
          </section>
        </form>
      </div>
    </div>
  )
}

export default TicketPage