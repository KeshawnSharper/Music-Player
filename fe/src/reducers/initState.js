const initState = {
    loading: false,
    error: false,
    user:localStorage.getItem("user") ? localStorage.getItem("user") : {}
  };
  export default initState;