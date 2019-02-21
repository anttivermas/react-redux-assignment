import customStyles from '../styles/customStyles'

const translateProps = (props) => {
    let _styles = { ...customStyles.default}
    if (props.filter === 'sort_todos')
        _styles = {..._styles, ...customStyles.sort}
    const newProps = {...props, styles: _styles}
    return newProps
}

export default (wrappedComponent) => {
    return function wrappedRender(args) {
        return wrappedComponent(translateProps(args));
    }
}