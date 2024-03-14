import React from "react"

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
	prefixCls?: string;
	className?: string;
	rootClassName?: string;
	style?: React.CSSProperties;
	direction?: "horizontal" | "vertical";
	// No `stretch` since many components do not support that.
	align?: "start" | "end" | "center" | "baseline";
	split?: React.ReactNode;
	wrap?: boolean;
	classNames?: { item: string };
	styles?: { item: React.CSSProperties };
	
}

function Space(props: SpaceProps) {
	
	const childNodes = React.Children.toArray(props?.children)
	
	return (
		<div>
			{
				childNodes.map(childNode => (
					<div>
						{childNode}
					</div>
				))
			}
		</div>
	)
}

export default Space
