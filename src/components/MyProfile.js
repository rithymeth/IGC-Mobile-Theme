import React, { useState } from 'react';
import ProfileImage from '../assets/1.png';
import { FaUser, FaEnvelope, FaCoins, FaCamera, FaEdit, FaPlus, FaMinus, FaTrophy } from 'react-icons/fa';

const MyProfile = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [profilePic, setProfilePic] = useState(ProfileImage);
    const [username, setUsername] = useState('Player1');
    const [email, setEmail] = useState('player1@example.com');
    const [balance, setBalance] = useState(5000);
    const [errors, setErrors] = useState({});

    const handleEditProfile = () => {
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!username) {
            newErrors.username = 'Username is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }

        if (Object.keys(newErrors).length === 0) {
            setEditModalOpen(false);
        } else {
            setErrors(newErrors);
        }
    };

    const handleProfilePicChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfilePic(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleDeposit = () => {
        const amount = prompt("Enter deposit amount:");
        if (amount && !isNaN(amount)) {
            setBalance(prevBalance => prevBalance + Number(amount));
        }
    };

    const handleWithdraw = () => {
        const amount = prompt("Enter withdrawal amount:");
        if (amount && !isNaN(amount) && Number(amount) <= balance) {
            setBalance(prevBalance => prevBalance - Number(amount));
        } else {
            alert("Invalid amount or insufficient funds.");
        }
    };

    const Card = ({ children, title, icon }) => (
        <div style={{
            backgroundColor: 'var(--surface-color, #ffffff)',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            marginBottom: '20px',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
        >
            {title && (
                <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: 'var(--primary-color, #333333)',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    {icon && <span style={{ marginRight: '10px' }}>{icon}</span>}
                    {title}
                </h3>
            )}
            {children}
        </div>
    );

    return (
        <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: 'var(--background-color, #f0f0f0)',
            minHeight: '100vh',
        }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '30px', color: 'var(--primary-color, #333333)', textAlign: 'center' }}>My Profile</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <Card>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                            <img src={profilePic} alt="Profile" style={{
                                borderRadius: '50%',
                                width: '150px',
                                height: '150px',
                                border: '3px solid var(--primary-color, #333333)',
                                objectFit: 'cover'
                            }} />
                            <label htmlFor="profile-pic-input" style={{
                                position: 'absolute',
                                bottom: '5px',
                                right: '5px',
                                backgroundColor: 'var(--primary-color, #333333)',
                                color: '#ffffff',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                fontSize: '20px',
                                transition: 'transform 0.3s ease-in-out',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <FaCamera />
                            </label>
                            <input
                                id="profile-pic-input"
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePicChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaUser style={{ marginRight: '10px' }} />
                            {username}
                        </h2>
                        <p style={{ color: 'var(--secondary-text-color, #666666)', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaEnvelope style={{ marginRight: '10px' }} />
                            {email}
                        </p>
                        <button
                            onClick={handleEditProfile}
                            style={{
                                backgroundColor: 'var(--primary-color, #333333)',
                                color: '#ffffff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto',
                                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <FaEdit style={{ marginRight: '10px' }} />
                            Edit Profile
                        </button>
                    </div>
                </Card>

                <Card title="Account Balance" icon={<FaCoins />}>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--primary-color, #333333)' }}>{balance} Coins</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <button
                                onClick={handleDeposit}
                                style={{
                                    backgroundColor: 'var(--success-color, #4CAF50)',
                                    color: '#ffffff',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '25px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <FaPlus style={{ marginRight: '10px' }} />
                                Deposit
                            </button>
                            <button
                                onClick={handleWithdraw}
                                style={{
                                    backgroundColor: 'var(--warning-color, #FFC107)',
                                    color: '#ffffff',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '25px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <FaMinus style={{ marginRight: '10px' }} />
                                Withdraw
                            </button>
                        </div>
                    </div>
                </Card>

                <Card title="Recent Activity" icon={<FaTrophy />}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {['Completed Quest: Dragon Slayer', 'Won Tournament: Magic Duel', 'Unlocked Achievement: Master Alchemist'].map((activity, index) => (
                            <li key={index} style={{
                                marginBottom: '10px',
                                padding: '15px',
                                backgroundColor: 'rgba(0,0,0,0.05)',
                                borderRadius: '8px',
                                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateX(5px)';
                                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateX(0)';
                                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                                }}
                            >
                                {activity}
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>

            {/* Edit Profile Modal */}
            {isEditModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                }}>
                    <div style={{
                        backgroundColor: '#2A2A2A',
                        borderRadius: '12px',
                        padding: '30px',
                        width: '90%',
                        maxWidth: '400px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                    }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '25px', color: '#FF4757', textAlign: 'center' }}>Edit Profile</h2>
                        <form onSubmit={handleSave}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#FFFFFF', fontSize: '1rem' }}>Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    style={{
                                        padding: '12px',
                                        width: '100%',
                                        borderRadius: '8px',
                                        border: '1px solid #444',
                                        backgroundColor: '#333',
                                        color: '#FFFFFF',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#FFFFFF', fontSize: '1rem' }}>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        padding: '12px',
                                        width: '100%',
                                        borderRadius: '8px',
                                        border: '1px solid #444',
                                        backgroundColor: '#333',
                                        color: '#FFFFFF',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
                                <button
                                    type="submit"
                                    style={{
                                        flex: 1,
                                        backgroundColor: '#FF4757',
                                        color: '#FFFFFF',
                                        border: 'none',
                                        padding: '12px 0',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                    }}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={closeEditModal}
                                    style={{
                                        flex: 1,
                                        backgroundColor: '#666666',
                                        color: '#FFFFFF',
                                        border: 'none',
                                        padding: '12px 0',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProfile;