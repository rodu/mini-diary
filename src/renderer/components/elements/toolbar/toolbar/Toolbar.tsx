import React, { PureComponent, ReactNode } from "react";

export interface StateProps {
	searchKey: string;
}

type Props = StateProps;

export default class Sidebar extends PureComponent<Props, {}> {
	render(): ReactNode {
		return (
			<div className="toolbar" />
		);
	}
}
