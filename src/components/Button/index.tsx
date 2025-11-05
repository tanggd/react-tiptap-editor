import {Button as ButtonAntd, Tooltip, ButtonProps} from 'antd';

export interface IButtonProps extends ButtonProps {
	title?: string;
}

export const Button = (props: IButtonProps) => {
	const {title, children, ...restProps} = props;
	return (
		<Tooltip title={title} placement="bottom">
			<ButtonAntd
				type="text"
				style={{
					borderColor: 'transparent',
				}}
				{...restProps}
			>
				{children}
			</ButtonAntd>
		</Tooltip>
	);
};
