import React from 'react';

const Form = ({ handleSubmit, handleChange, searchStr }) => {
	return (
		<form className='form' onSubmit={handleSubmit}>
			<label htmlFor='searchStr'>
				<input
					className='input'
					type='text'
					placeholder='Meal Category'
					onChange={handleChange}
					// value={categoryResults}
					id={'categoryResults'}
				/>
			</label>
			<button className='button' type='submit'>
				Look for your taste
			</button>
		</form>
	);
};

export default Form;