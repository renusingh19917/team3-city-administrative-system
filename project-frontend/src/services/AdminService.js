// import AppUser from "../models/AppUser";
import AppAdmin from "../models/AppAdmin";

class AdminService {
  // Simulated user data (replace with your actual user data)
  users = [AppAdmin];

  // Simulated currently logged-in user (initially null)
  currentUser = null;

  // Function to log in a user
  login(username, password) {
    const user = this.users.find((u) => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      return true; // Login successful
    }
    return false; // Login failed
  }

  // Function to log out the currently logged-in user
  logout() {
    this.currentUser = null;
  }

  // Function to check if a user is currently logged in
  isLoggedIn() {
    return this.currentUser !== null;
  }
}

// const adminService = new AdminService();

export default AdminService;
