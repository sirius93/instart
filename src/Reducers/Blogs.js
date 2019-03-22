const Blogs = (state = [], action) => {
    switch (action.type) {
      case "FETCH_BLOGS_DATA_SUCCESS":
        return {
          ...state,
          data: action.payload,
          status: true,
          message: ""
        };
        break;
        
      default:
        return state;
    }
  };
  
  export default Blogs;