import React, { useState, useRef } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './style/App.css';
import MySelect from './components/UI/select/MySelect';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'War on my land' },
		{ id: 2, title: 'C#', body: 'Shut fuck off!' },
		{ id: 3, title: 'Swift', body: 'Can you get out on my land' },
	]);

	const [selectedSort, setSelectedSort] = useState('');

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const sortPosts = (sort) => {
		setSelectedSort(sort);
		console.log(sort);
	};

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />

			<MySelect
				defaultValue="Sorting by:"
				value={selectedSort}
				onChange={sortPosts}
				options={[
					{
						value: 'title',
						name: 'Sort by name',
					},
					{
						value: 'body',
						name: 'Sort by description',
					},
				]}
			/>

			{posts.length !== 0 ? (
				<PostList remove={removePost} posts={posts} title="List To Do" />
			) : (
				<h2 className="App__null">Post was not found</h2>
			)}
		</div>
	);
}

export default App;
