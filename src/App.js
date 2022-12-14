import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './style/App.css';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({
		sort: '',
		query: '',
	});
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	return (
		<div className="App">
			<MyButton onClick={() => setModal(true)}>Create new post</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="List To Do" />
		</div>
	);
}

export default App;
