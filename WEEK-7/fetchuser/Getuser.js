import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,      // store user data here
      loading: true,   // show loading until fetch completes
    };
  }

  // ✅ Fetch user details after component mounts
  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      this.setState({ user: data.results[0], loading: false });
    } catch (error) {
      console.error("Error fetching user:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <h2>Loading user data...</h2>;
    }

    if (!user) {
      return <h2>No user data found.</h2>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>User Details</h1>
        <h2>
          {user.name.title} {user.name.first}
        </h2>
        <img
          src={user.picture.large}
          alt="User"
          style={{ borderRadius: "50%", marginTop: "10px" }}
        />
      </div>
    );
  }
}

export default Getuser;
