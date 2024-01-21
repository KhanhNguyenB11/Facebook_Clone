import { createSlice } from "@reduxjs/toolkit";
export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.value.unshift(action.payload);
    },
    addAllPost: (state, action) => {
      state.value.push(...action.payload);
      console.log(state.value);
    },
    addComment: (state, action) => {
        const postId = action.payload.postId;
        const postIndex = state.value.findIndex((post) => post.id === postId);
      
        if (postIndex !== -1) {
          const updatedPosts = [...state.value]; // Create a shallow copy of the posts array
          const updatedPost = { ...updatedPosts[postIndex] }; // Create a shallow copy of the post
      
          if (!updatedPost.comments) {
            updatedPost.comments = [];
          }
      
          // Push the new comment to the comments array
          updatedPost.comments.push(action.payload);
      
          // Update the post in the copied array
          updatedPosts[postIndex] = updatedPost;
      
          // Return the new state
          state.value = updatedPosts;
        }
      
        console.log(state.value);
        console.log(action.payload);
      },
      addMultipleComment: (state, action) => {
        if(action.payload.length > 0){
          const post = state.value.find((post) => post.id === action.payload[0].postId);
          if(!post.comments){
            post.comments = [];
          }
          post.comments = [...post.comments, ...action.payload];
          
        }
      },
  },
});
export const { addAllPost, addPost, addComment, addMultipleComment } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
