import {useState} from 'react';
import {TiptapEditor} from '@/components/TiptapEditor';
// import {TiptapViewer} from '@/components/TiptapViewer';

const App = () => {
	const [content, setContent] = useState('<p><strong>hello world</strong></p>');
	const onChange = (value: string) => {
		setContent(value);
		console.log('onChange', value);
	};

	return (
		<div>
			<h1>TiptapEditor</h1>
			<TiptapEditor value={content} onChange={onChange} format="html" />
			<h1>TiptapViewer</h1>
			{/* <TiptapViewer content={content} /> */}
		</div>
	);
};
export default App;
