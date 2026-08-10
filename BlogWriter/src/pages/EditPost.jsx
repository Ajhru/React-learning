import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components/index'
import { Storage } from 'appwrite';
import { useNavigate,  useParams } from 'react-router-dom';
import storage from '../appwrite/storage';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            storage.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost