// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialMedia {
    struct Post {
        uint256 id;
        address author;
        string content;
        string imageUrl;
        uint256 timestamp;
        uint256 upvoteCount;
        uint256 downvoteCount;
    }

    Post[] public posts;
    uint256 public postCount;

    mapping(uint256 => mapping(address => bool)) public hasUpvoted;
    mapping(uint256 => mapping(address => bool)) public hasDownvoted;

    event PostCreated(
        uint256 id,
        address author,
        string content,
        string imageUrl,
        uint256 timestamp
    );

    event Upvoted(uint256 postId, address voter);
    event Downvoted(uint256 postId, address voter);

    function createPost(string memory _content, string memory _imageUrl) public {
        require(bytes(_content).length > 0 || bytes(_imageUrl).length > 0, "Content or Image URL required");

        posts.push(Post(postCount, msg.sender, _content, _imageUrl, block.timestamp, 0, 0));
        emit PostCreated(postCount, msg.sender, _content, _imageUrl, block.timestamp);
        postCount++;
    }

    function getPost(uint256 _id) public view returns (Post memory) {
        require(_id < postCount, "Post does not exist.");
        return posts[_id];
    }

    function getAllPosts() public view returns (Post[] memory) {
        Post[] memory latestPosts = new Post[](postCount);
        for (uint256 i = 0; i < postCount; i++) {
            latestPosts[i] = posts[postCount - 1 - i];
        }
        return latestPosts;
    }

    function upvote(uint256 _postId) public {
        require(_postId < postCount, "Post does not exist.");
        require(!hasUpvoted[_postId][msg.sender], "You have already upvoted this post.");
        require(!hasDownvoted[_postId][msg.sender], "You cannot upvote after downvoting.");

        posts[_postId].upvoteCount++;
        hasUpvoted[_postId][msg.sender] = true;

        emit Upvoted(_postId, msg.sender);
    }

    function downvote(uint256 _postId) public {
        require(_postId < postCount, "Post does not exist.");
        require(!hasDownvoted[_postId][msg.sender], "You have already downvoted this post.");
        require(!hasUpvoted[_postId][msg.sender], "You cannot downvote after upvoting.");

        posts[_postId].downvoteCount++;
        hasDownvoted[_postId][msg.sender] = true;

        emit Downvoted(_postId, msg.sender);
    }

    function getVoteCounts(uint256 _postId) public view returns (uint256, uint256) {
        require(_postId < postCount, "Post does not exist.");
        return (posts[_postId].upvoteCount, posts[_postId].downvoteCount);
    }
}
