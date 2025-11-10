// Authentication utility functions

// Get all registered users from localStorage
export const getRegisteredUsers = () => {
  if (typeof window === 'undefined') return [];
  
  try {
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : [];
  } catch (e) {
    return [];
  }
};

// Save registered users to localStorage
export const saveRegisteredUsers = (users) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  } catch (e) {
    console.error('Error saving users:', e);
  }
};

// Register a new user
export const registerUser = (name, email, password) => {
  const users = getRegisteredUsers();
  
  // Check if user already exists
  const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return { success: false, error: 'Email already registered. Please login instead.' };
  }
  
  // Validate password strength (minimum 6 characters)
  if (password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters long.' };
  }
  
  // Create new user
  const newUser = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: password, // In a real app, this should be hashed
    createdAt: new Date().toISOString()
  };
  
  // Add user to the list
  users.push(newUser);
  saveRegisteredUsers(users);
  
  return { success: true, user: newUser };
};

// Authenticate user (login)
export const authenticateUser = (email, password) => {
  const users = getRegisteredUsers();
  
  // Find user by email (case-insensitive)
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (!user) {
    return { success: false, error: 'No account found with this email. Please sign up first.' };
  }
  
  // Check password
  if (user.password !== password) {
    return { success: false, error: 'Incorrect password. Please try again.' };
  }
  
  return { success: true, user: { id: user.id, name: user.name, email: user.email } };
};

// Get current logged-in user and validate it exists in registered users
export const getCurrentUser = () => {
  if (typeof window === 'undefined') return null;
  
  try {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return null;
    
    const user = JSON.parse(currentUser);
    const users = getRegisteredUsers();
    
    // Validate that the current user actually exists in registered users
    const registeredUser = users.find(u => u.email.toLowerCase() === user.email?.toLowerCase());
    if (!registeredUser) {
      // User is not registered, clear the session
      localStorage.removeItem('currentUser');
      return null;
    }
    
    return user;
  } catch (e) {
    return null;
  }
};

// Set current logged-in user
export const setCurrentUser = (user) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } catch (e) {
    console.error('Error setting current user:', e);
  }
};

// Logout user
export const logoutUser = () => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem('currentUser');
  } catch (e) {
    console.error('Error logging out:', e);
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!getCurrentUser();
};

