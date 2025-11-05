import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import {TextStyle} from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Placeholder from '@tiptap/extension-placeholder';
import {Toolbar} from '@/components/Toolbar';

import '@/styles/index.less';

export type TiptapEditorProps = {
	value?: string | any;
	onChange?: (val: string | any) => void;
	valueFormat?: 'html' | 'json';
	editable?: boolean;
};

export const TiptapEditor = (props: TiptapEditorProps) => {
	const {value, editable = true, valueFormat = 'html', onChange} = props;

	const editor = useEditor({
		content: value,
		editable,
		extensions: [
			StarterKit.configure({
				table: true,
			}),
			Underline,
			Link,
			Image,
			TextStyle,
			Color,
			Placeholder.configure({
				placeholder: '请输入内容',
			}),
		],
		onUpdate: ({editor}) => {
			if (valueFormat === 'json') {
				return onChange?.(editor.getJSON());
			}
			return onChange?.(editor.getJSON());
		},
	});

	return (
		<div className="tiptap-editor-wrapper">
			<div className="tiptap-editor-toolbar">
				<Toolbar editor={editor} />
			</div>
			<div className="tiptap-editor-container">
				<EditorContent editor={editor} />
			</div>
		</div>
	);
};
