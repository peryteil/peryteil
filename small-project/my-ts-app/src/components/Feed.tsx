import React from "react";

interface Post {
    id: number;
    username: string;
    imageUrl: string;
    caption: string;
}

const posts: Post[] = [
    {
        id : 1,
        username: "alice",imageUrl: "https://placekitten.com/400/300",
        caption:"오늘도 햇살 ☀️"
    },
    {
        id : 2,
        username: "bob",imageUrl: "https://placekitten.com/401/300",
        caption:"강아지랑 산책 🐶",
    },
];

const Feed: React.FC = () => {
    return (
        <div className="max-w-lg mx-auto mt-10 px-4 space-y-8">
        {posts.map((post)=> (
            <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
                <div className="px-4 py-2 font-semibold text-gray-800 text-sm">
                    @{post.username}
                </div>
                <img src="{post.imageUrl" alt="post" className="w-full object-cover"/>
                <div className="p-4 text-gray-700 text-sm">{post.caption}</div>
            </div>    
        ))}
        </div>
    );
};

export default Feed;