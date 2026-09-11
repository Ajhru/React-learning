 import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components/index'
import storage from '../appwrite/storage'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {

        storage.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })

    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full min-h-[420px] flex items-center justify-center bg-gray-50 px-4 py-16">
                <Container>
                    <div className="flex justify-center">
                        <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white px-8 py-12 text-center shadow-sm">
                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="h-7 w-7 text-indigo-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                            </div>

                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                No posts yet
                            </h1>

                            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                                Be the first one to share something with the community.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full bg-gray-50 py-12 sm:py-16">
            <Container>
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        All Posts
                    </h1>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                        Browse every post shared by the BlogWriter community.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post) => (
                        <div key={post.$id} className="w-full">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts