import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './style/App.css';
import PostFilter from './components/PostFilter';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'War on my land' },
		{ id: 2, title: 'C#', body: 'Shut fuck off!' },
		{ id: 3, title: 'Swift', body: 'Can you get out on my land' },
	]);

  const [filter, setFilter] =useState({
    sort: '',
    query: '',
  })

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
		}

		return posts;
	}, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};


	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
			{sortedAndSearchedPosts.length !== 0 ? (
				<PostList 
          remove={removePost} 
          posts={sortedAndSearchedPosts} 
          title="List To Do" />
			) : (
				<h2 className="App__null">
          Post was not found
         </h2>
			)}
		</div>
	);
}

export default App;
