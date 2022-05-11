import axios from "axios"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostAsync} from './actions'

const Post = () => {
    const dispatch = useDispatch()
    const {list, loading, error} = useSelector((state) => state.post)

    useEffect(()=> {
        dispatch(fetchPostAsync())
    }, [dispatch])

    return(
        <div>
            <p>ini post</p>
            {loading && <div>loading...</div>}
            {(!loading && !error) && (
                <ol>
                    {list.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                    }
                </ol>
            )}
        </div>  
    )
}
export default Post;