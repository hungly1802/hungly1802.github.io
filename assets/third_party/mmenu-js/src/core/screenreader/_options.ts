const options : mmOptionsScreenreader = {
	aria: true,
	text: true
};
export default options;

/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
export function extendShorthandOptions( 
	options : mmOptionsScreenreader
) : mmOptionsScreenreader {

	if ( typeof options == 'boolean' ) {
		options = {
			aria: options,
			text: options
		};
	}

	if ( typeof options != 'object' ) {
		options = {};
	}

	return options;
};