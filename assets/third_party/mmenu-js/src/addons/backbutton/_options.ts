const options : mmOptionsBackbutton = {
	close: false,
	open: false
};
export default options;

/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
export function extendShorthandOptions( 
	options : mmOptionsBackbutton
) : mmOptionsBackbutton {

	if ( typeof options == 'boolean' ) {
		options = {
			close: options
		};
	}

	if ( typeof options != 'object' ) {
		options = {};
	}

	return options;
};