import React, { useState } from "react";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { IIconProps } from "./IIconProps";

const Icon: React.FC<IIconProps> = ({ children, id, className }) => {
	const [_id] = useState(id || undefined); // State for the ID of the badge
	const [_className] = useState(className || ""); // State for the class name of the badge

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("material-symbols-outlined")
		.add("icon")
		.add("icon-" + _theme)
		.add(_className)
		.toString();

	return (
		<span id={_id} className={_computedComponentClassName}>
			{children}
		</span>
	);
};

export default Icon;