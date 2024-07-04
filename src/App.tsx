import React, {Component} from 'react';
import Users from "./components/Users";
import {IPost} from "./models/IPost";
import {getUserPosts} from "./services/apiService";
interface AppState{
    selectedUserId:number| null;
    posts:IPost[];
}

class App extends Component<{},AppState> {
   state:AppState={
       selectedUserId: null,
       posts:[]
}
choseSelectUser=(userId:number)=>{
       this.setState({selectedUserId:userId});
       this.loadUserPosts(userId);
}
loadUserPosts=(userId:number)=>{
    getUserPosts(userId).then(posts =>{
        console.log(posts);
        this.setState({posts})
    });
}
    render() {
        const {posts} = this.state;
        return (
            <div>
                <div >
                <h2>Users and posts</h2>
                <Users onSelectUser={this.choseSelectUser}/>
                </div>
                <div >
                    {posts.length > 0 ?(
                        <div>
                            <h2>Posts:</h2>
                            {posts.map(post => (
                                <div key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Select a user to see posts.</p>
                    )}
                </div>
            </div>
        )
    }
}

export default App;
