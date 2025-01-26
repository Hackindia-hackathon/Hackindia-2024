import React, { useState, useEffect } from 'react';
import { Avatar, TextField, Typography, Container, Box, Card, CardContent, IconButton } from '@mui/material';
import { FaEdit, FaSave, FaCamera } from 'react-icons/fa'; // Importing icons from react-icons
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../utils/firebaseConfig'; // Adjust the import path as necessary

const storage = getStorage();
const auth = getAuth();

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const userDoc = doc(db, `users/${user.uid}`);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setProfilePic(userData.profilePic || '');
          setName(userData.name || '');
          setEmail(userData.email || '');
          if (userData.createdAt && userData.createdAt.toDate) {
            setCreatedAt(formatDate(userData.createdAt.toDate()));
          } else {
            setCreatedAt('Date not available');
          }
        }
      };

      fetchUserData();
    }
  }, [user]);

  const handleProfilePicChange = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const storageRef = ref(storage, `users/profilePics/${user.uid}`);
      try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        setProfilePic(url);
        await updateUserData(user.uid, { profilePic: url });
      } catch (error) {
        console.error('Error uploading profile picture:', error.message);
      }
    }
  };

  const handleSave = async () => {
    if (user) {
      await updateUserData(user.uid, { name });
      setIsEditing(false);
    }
  };

  const updateUserData = async (uid, data) => {
    try {
      const userDoc = doc(db, `users/${uid}`);
      await setDoc(userDoc, data, { merge: true });
    } catch (error) {
      console.error('Error updating user data:', error.message);
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      handleSave(); // Save changes if editing is toggled off
    }
    setIsEditing(!isEditing);
  };

  const getFirstName = (fullName) => {
    const names = fullName.split(' ');
    return names[0] || ''; // Return the first name or an empty string if no name is provided
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (!user) return null; // Show nothing if user is not loaded yet

  return (
    <Container maxWidth="sm">
      <Box my={4} textAlign="center">
        <Typography variant="h6" gutterBottom>
          {isEditing ? 'Edit Profile' : `Welcome 👋 ${getFirstName(name)}`}
        </Typography>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box position="relative">
                <Avatar
                  src={profilePic}
                  alt="Profile Picture"
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                {isEditing && (
                  <IconButton
                    sx={{ position: 'absolute', bottom: 0, right: 0, bgcolor: 'white' }}
                    component="label"
                  >
                    <FaCamera />
                    <input
                      type="file"
                      hidden
                      onChange={handleProfilePicChange}
                    />
                  </IconButton>
                )}
                <IconButton
                  sx={{ position: 'absolute', top: 0, right: 0 }}
                  onClick={handleEditToggle}
                >
                  {isEditing ? <FaSave /> : <FaEdit />}
                </IconButton>
              </Box>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                disabled={!isEditing}
              />
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Email: {email}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Joined At: {createdAt}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ProfilePage;
