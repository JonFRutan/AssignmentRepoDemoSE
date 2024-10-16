import React, { useState } from 'react';
import './App.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState ({
        name: '',
        password: '',
        passwordConfirm: '',
        email: '',
        phone: '',
        birthday: ''
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Registration successful:', result);
            } else {
                console.error('Registration Failed.');
            }
        } catch (error) {
            console.error('Submission error:');
        }
    }

    return (
        <div className="App-main">
            <h1>This is where you'll register your account.</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="birthday">Name:</label>
                    <input
                        type="text"
                        id="birthday"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegisterPage;