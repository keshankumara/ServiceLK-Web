import React, { useState } from 'react';
import './Dashboard.css'
import NavBar from '../components/NavBar';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('users');
  


  // Sample Data
  const [users, setUsers] = useState([]);

  const [providers, setProviders] = useState([]);

  const [bookings, setBookings] = useState([
    { id: 1, user: 'Alice', service: 'Haircut', date: '2025-08-19', status: 'Confirmed' },
    { id: 2, user: 'Bob', service: 'Massage', date: '2025-08-18', status: 'Pending' },
  ]);

  const [services, setServices] = useState([
    { id: 1, name: 'Haircut', duration: '30 mins', price: 20 },
    { id: 2, name: 'Massage', duration: '1 hour', price: 50 },
  ]);

  // Form Handling
  const [formData, setFormData] = useState({});
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (item) => {
    if (activeTab === 'users') {
        setFormData({
            username: item.username,
            email: item.email,
            password: item.password
        });
    } else if (activeTab === 'providers') {
        setFormData({
            name: item.name,
            email: item.email,
            password: item.password,
            specialization: item.specialization
        });
    } else if (activeTab === 'bookings') {
        setFormData({
            user: item.user,
            service: item.service,
            date: item.date,
            status: item.status
        });
    }
    else if (activeTab === 'services') {
        setFormData({
            name: item.name,
            duration: item.duration,
            price: item.price
        });
    }

    // If editing a user, send update request to backend
    if (activeTab === 'users') {
        setFormData(item);
        setEditId(item.id);
    }
    else if (activeTab === 'providers') {
        setFormData(item);
        setEditId(item.id);
    }
  };

  const handleDelete = (arraySetter, id) => {
    if (arraySetter === setUsers) {
        fetch(`http://localhost:8080/user/deleteUser/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) throw new Error('Failed to delete user');
            })
            .catch(err => console.error('Delete user error:', err));
    }
    else if (arraySetter === setProviders) {
        fetch(`http://localhost:8080/provider/deleteProvider/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) throw new Error('Failed to delete provider');
            })
            .catch(err => console.error('Delete provider error:', err));
    }
    arraySetter(prev => prev.filter(i => i.id !== id));
  };


  const handleSubmit = (arraySetter, array) => {
    if (editId) {
      arraySetter(array.map(item => item.id === editId ? { ...item, ...formData } : item));
    } else {
      const newItem = { ...formData, id: array.length + 1 };
      arraySetter([...array, newItem]);
    }
    setFormData({});
    setEditId(null);
  };

// Summary Counts

// Fetch users from backend
React.useEffect(() => {
    if (activeTab === 'users') {
        fetch('http://localhost:8080/user/getAllUser')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error('Failed to fetch users:', err));
    }
}, [activeTab]);

// Fetch providers from backend
React.useEffect(() => {
    if (activeTab === 'providers') {
        fetch('http://localhost:8080/provider/getAllProviders')
            .then(res => res.json())
            .then(data => setProviders(data))
            .catch(err => console.error('Failed to fetch providers:', err));
    }
}, [activeTab]);

// Fetch services from backend
React.useEffect(() => {
    if (activeTab === 'services') {
        fetch('http://localhost:8080/service/getAllServices')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error('Failed to fetch services:', err));
    }
}, [activeTab]);

  const totalUsers = users.length;
  const totalProviders = providers.length;
  const totalBookings = bookings.length;
  const totalServices = services.length;

  return (
    
    <div className="admin-container">
      <NavBar/>
      <h1>Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="card">
          <h3>Total Providers</h3>
          <p>{totalProviders}</p>
        </div>
        <div className="card">
          <h3>Total Bookings</h3>
          <p>{totalBookings}</p>
        </div>
        <div className="card">
            <h3>Total Services</h3>
            <p>{totalServices}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={activeTab==='users'?'active':''} onClick={()=>setActiveTab('users')}>Users</button>
        <button className={activeTab==='providers'?'active':''} onClick={()=>setActiveTab('providers')}>Providers</button>
        <button className={activeTab==='bookings'?'active':''} onClick={()=>setActiveTab('bookings')}>Bookings</button>
        <button className={activeTab==='services'?'active':''} onClick={()=>setActiveTab('services')}>Services</button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'users' && (
            <div>
                <h2>Manage Users</h2>
                <form
                    className="form"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            if (editId) {
                                // Update user
                                await fetch(`http://localhost:8080/user/update/${editId}`, {
                                    method: 'PUT',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        username: formData.username,
                                        email: formData.email,
                                        password: formData.password
                                    })
                                });
                            } else {
                                // Add user
                                await fetch('http://localhost:8080/user/addUser', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        username: formData.username,
                                        email: formData.email,
                                        password: formData.password
                                    })
                                });
                            }
                            handleSubmit(setUsers, users);
                        } catch (err) {
                            console.error('Failed to add/update user:', err);
                            handleSubmit(setUsers, users);
                        }
                    }}
                >
                    <input type="text" name="username" placeholder="Username" value={formData.username||''} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email||''} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password||''} onChange={handleChange} required />
                    <button type="submit">{editId ? 'Update' : 'Add'} User</button>
                </form>
                <table className="dashboard-table">
                    <thead>
                        <tr><th>ID</th><th>Username</th><th>Email</th><th>Password</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                        {users.map(u=>(
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>{u.password}</td>
                                <td>
                                    <button onClick={()=>handleEdit(u)}>Edit</button>
                                    <button onClick={()=>handleDelete(setUsers, u.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
        {activeTab === 'providers' && (
          <div>
            <h2>Manage Providers</h2>
            <form className="form"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            if (editId) {
                                // Update provider
                                await fetch(`http://localhost:8080/provider/update/${editId}`, {
                                    method: 'PUT',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        name: formData.name,
                                        email: formData.email,
                                        password: formData.password,
                                        specialization: formData.specialization
                                    })
                                });
                            } else {
                                // Add user
                                await fetch('http://localhost:8080/provider/addProvider', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        name: formData.name,
                                        email: formData.email,
                                        password: formData.password,
                                        specialization: formData.specialization
                                    })
                                });
                            }
                            handleSubmit(setProviders, providers);
                        } catch (err) {
                            console.error('Failed to add/update provider:', err);
                            handleSubmit(setProviders, providers    );
                        }
                    }}>
              <input type="text" name="name" placeholder="Provider Name" value={formData.name||''} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email||''} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" value={formData.password||''} onChange={handleChange} required />
              <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization||''} onChange={handleChange} />
              <button type="submit">{editId ? 'Update' : 'Add'} Provider</button>
            </form>
            <table className="dashboard-table">
              <thead>
                <tr><th>ID</th><th>Name</th><th>Email</th><th>Password</th><th>Specialization</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {providers.map(p=>(
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.email}</td>
                    <td>{p.password}</td>
                    <td>{p.specialization}</td>
                    <td>
                      <button onClick={()=>handleEdit(p)}>Edit</button>
                      <button onClick={()=>handleDelete(setProviders, p.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bookings */}
        {activeTab === 'bookings' && (
          <div>
            <h2>Manage Bookings</h2>
            <form className="form" onSubmit={(e)=>{ e.preventDefault(); handleSubmit(setBookings, bookings); }}>
              <input type="text" name="user" placeholder="User Name" value={formData.user||''} onChange={handleChange} required />
              <input type="text" name="service" placeholder="Service Name" value={formData.service||''} onChange={handleChange} required />
              <input type="date" name="date" value={formData.date||''} onChange={handleChange} required />
              <select name="status" value={formData.status||'Pending'} onChange={handleChange}>
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <button type="submit">{editId ? 'Update' : 'Add'} Booking</button>
            </form>
            <table className="dashboard-table">
              <thead>
                <tr><th>ID</th><th>User</th><th>Service</th><th>Date</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {bookings.map(b=>(
                  <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.user}</td>
                    <td>{b.service}</td>
                    <td>{b.date}</td>
                    <td>{b.status}</td>
                    <td>
                      <button onClick={()=>handleEdit(b)}>Edit</button>
                      <button onClick={()=>handleDelete(setBookings, b.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Services */}
        {activeTab === 'services' && (
          <div>
            <h2>Manage Services</h2>
            <form className="form" onSubmit={(e)=>{ e.preventDefault(); handleSubmit(setServices, services); }}>
              <input type="text" name="name" placeholder="Service Name" value={formData.name||''} onChange={handleChange} required />
              <input type="text" name="description" placeholder="Description" value={formData.description||''} onChange={handleChange} required />
              <input type="number" name="price" placeholder="Price" value={formData.price||''} onChange={handleChange} required />
              <button type="submit">{editId ? 'Update' : 'Add'} Service</button>
            </form>
            <table className="dashboard-table">
              <thead>
                <tr><th>ID</th><th>Name</th><th>Description</th><th>Price</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {services.map(s=>(
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.description}</td>
                    <td>{s.price}</td>
                    <td>
                      <button onClick={()=>handleEdit(s)}>Edit</button>
                      <button onClick={()=>handleDelete(setServices, s.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;
