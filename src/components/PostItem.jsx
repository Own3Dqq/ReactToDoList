import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
	return (
		<div className="post">
			<div className="post__content">
				<strong>
					{props.number} {props.post.title}
				</strong>
				<div>{props.post.body}</div>
			</div>
			<MyButton
				onClick={() => {
					props.remove(props.post);
				}}
				className="post__btn"
			>
				Delete
			</MyButton>
		</div>
	);
};

export default PostItem;
