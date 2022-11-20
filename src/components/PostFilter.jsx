import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
	return (
		<>
			<MyInput
				value={filter.query}
				onChange={(e) => setFilter({ ...filter, query: e.target.value })}
				placeholder="Search post..."
			/>
			<MySelect
				defaultValue="Sorting by:"
				value={filter.sort}
				onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
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
		</>
	);
};

export default PostFilter;
