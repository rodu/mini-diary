import React, { FunctionComponent } from "react";

import EditorContainer from "../../elements/editor/editor/EditorContainer";
import SidebarContainer from "../../elements/sidebar/sidebar/SidebarContainer";
import ToolbarContainer from "../../elements/toolbar/toolbar/ToolbarContainer";

const Diary: FunctionComponent<{}> = (): JSX.Element => (
	<div className="diary">
		<ToolbarContainer />
		<SidebarContainer />
		<EditorContainer />
	</div>
);

export default Diary;
