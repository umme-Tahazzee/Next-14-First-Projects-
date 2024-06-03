import { Post, User } from "./models";
import { connectToDb } from "./util";
import { unstable_noStore as noStore } from "next/cache";

//TEMPORARY DATAS
// const users = [
//        {id: 1, name : 'jhon'},
//        {id : 2, name : 'jane'}
// ]
// const posts = [
//      {id: 1, title : 'Post1', body: '........', userId: 1},
//      {id: 2, title : 'Post2', body: '........', userId: 1},
//      {id: 3, title : 'Post3', body: '........', userId: 2},
//      {id: 4, title : 'Post4', body: '........', userId: 2},

// ]
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    // throw new Error("falied to fatch error");
  }
};

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug : slug});
        return post;
      } catch (error) {
        console.log(error);
        // throw new Error("falied to fatch post");
      }
};

export const getUser = async (id) => {
  noStore()
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.log(error);
        // throw new Error("falied to fatch error");
      }
};
export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
      } catch (error) {
        console.log(error);
        // throw new Error("falied to fatch users!");
      }
};
