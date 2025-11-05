import type {Editor} from '@tiptap/react';
import {Flex, Divider} from 'antd';
import {Button} from '@/components/Button';
import {UndoIcon} from '@/components/Icon/UndoIcon';
import {RedoIcon} from '@/components/Icon/RedoIcon';

type ToolbarProps = {
	editor: Editor | null;
};

const Separator = () => (
	<Divider
		type="vertical"
		style={{
			height: 24,
			margin: 0,
			borderColor: 'rgba(37, 39, 45, 0.2)',
		}}
	/>
);

export const Toolbar = (props: ToolbarProps) => {
	const {editor} = props;

	if (!editor) return null;

	return (
		<Flex
			align="center"
			gap={2}
			style={{
				height: 40,
				padding: '0 10px',
			}}
		>
			<Button title="撤销" icon={<UndoIcon />} onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} />
			<Button title="重做" icon={<RedoIcon />} onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} />
			<Separator />
			<Button title="加粗" onClick={() => editor.chain().focus().toggleBold().run()}>
				B
			</Button>
			<Button title="斜体" onClick={() => editor.chain().focus().toggleItalic().run()}>
				I
			</Button>
		</Flex>
	);
};
