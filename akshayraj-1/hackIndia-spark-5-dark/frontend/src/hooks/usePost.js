import {useState} from "react";
import PropTypes from "prop-types";
import { getJsonRpcContract, getBrowserContract } from "../utils/ethereum.js";
import {StorageDownloader, ThirdwebStorage} from "@thirdweb-dev/storage";

function usePost() {

    const [loading, setLoading] = useState(false);
    // TODO: Image Upload
    // const storage = new ThirdwebStorage({
    //     secretKey: import.meta.env.VITE_THIRDWEB_STORAGE_API
    // })


    const createPost = async (content, image) => {
        if (!content || !image) return;
        try {
            const contract = await getBrowserContract();
            let imageUri = "";
            // if (image) {
            //     imageUri = await storage.upload(image);
            // }
            console.log(imageUri);
            return await contract.createPost(content, image);
        } catch (e) {
            console.error(e.message);
        }
    };

    const upVote = async (postId) => {

    };

    const downVote = async (postId) => {

    };

    const getAllPosts = async () => {
        if (loading) return;
        try {
            setLoading(true);
            const contract = await getJsonRpcContract();
            return await contract.getAllPosts();
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const getPost = async (postId) => {

    };


    createPost.propTypes = {
        content: PropTypes.string,
        image: PropTypes.object
    };

    upVote.propTypes = {
        postId: PropTypes.string
    };

    downVote.propTypes = {
        postId: PropTypes.string
    };

    getPost.propTypes = {
        postId: PropTypes.string
    };

    return {
        createPost,
        upVote,
        downVote,
        getAllPosts,
        getPost
    };
}

export default usePost;