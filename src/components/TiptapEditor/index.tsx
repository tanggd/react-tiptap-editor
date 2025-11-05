export type TiptapEditorProps = {
  value?: string | any;
  onChange?: (val: string | any) => void;
  valueFormat?: 'html' | 'json';
  editable?: boolean;
};

export const TiptapEditor = (props: TiptapEditorProps) => {
  return <div>TiptapEditor</div>;
};
