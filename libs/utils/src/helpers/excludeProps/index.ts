/**
 * Replacement for shouldForwardProp in styled-components
 *
 * Before:
 *
 * shouldForwardProp: (prop) => prop !== 'mode' && prop !== 'arrowShift'
 *
 * After:
 *
 * shouldForwardProp: excludeProps(['mode', 'arrowShift'])
 *
 * @param props array of props to exclude
 * @returns HOF for "shouldForwardProp" prop in styled-components
 */

const excludeProps = (props: PropertyKey[]) => (prop: PropertyKey) => !props.includes(prop);

export default excludeProps;
