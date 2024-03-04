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
    likePost: (state, action) => {
      const postId = action.payload;
      const postIndex = state.value.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        state.value[postIndex].likeCount++;
        state.value[postIndex].userLiked = true;
      }
    },
    unlikePost: (state, action) => {
      const postId = action.payload;
      const postIndex = state.value.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        state.value[postIndex].likeCount--;
        state.value[postIndex].userLiked = false;
      }
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
          updatedPost.commentCount+=1;
      
          // Update the post in the copied array
          updatedPosts[postIndex] = updatedPost;
      
          // Return the new state
          state.value = updatedPosts;
        }
      
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
      likeComment: (state, action) => {
        const postId = action.payload.postId;
        const commentId = action.payload.commentId;
        const postIndex = state.value.findIndex((post) => post.id === postId);
        if (postIndex !== -1) {
          const commentIndex = state.value[postIndex].comments.findIndex((comment) => comment.id === commentId);
          if (commentIndex !== -1) {
            state.value[postIndex].comments[commentIndex].likeCount++;
            state.value[postIndex].comments[commentIndex].userLiked = true;
          }
        }
      },
  },
});
export const { addAllPost, addPost, addComment, addMultipleComment,likePost, unlikePost } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
