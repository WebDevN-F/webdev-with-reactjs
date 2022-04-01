import React from 'react'

const TicketPage = () => {
  const [formData, setFormData] = React.useState({
    title: '',
    priority: 1,
    category: '',
    description: '',
    timestamp: new Date().toISOString(),
    process: 0,
    owner: 'Nam Nguyen',
    avatar: '/crm_logo.png',
    status: 'done',
  })

  const editMode = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', formData);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (e.target.type === 'radio') {
      setFormData({ ...formData, [name]: parseInt(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  const categories = [
    'Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'
  ]

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update Your Ticket' : 'Create a Ticket'}</h1>
      <div className="ticket-container height-80">
        <form onSubmit={handleSubmit}>
          <section className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={formData.title || undefined} />

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
                  onChange={handleChange}
                  value={formData.process} />
              </>
            }
            
            <label htmlFor="status">Status</label>
            <select name="status" id="status" value={formData.status} onChange={handleChange}>
              <option value="not-started">not-started</option>
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

            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              type="text"
              placeholder="avatar"
              name="avatar"
              onChange={handleChange}
              value={formData.avatar} />
            { formData.avatar && <img src={formData.avatar} alt="avatar" width="60" height="60" /> }

          </section>
          <section>
            <button className="btn btn-block"type="submit">Save</button>
          </section>
        </form>
      </div>
    </div>
  )
}

export default TicketPage