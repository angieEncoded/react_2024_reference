export default function TabButton(props) {

    // We can send in a function to be dealt with in this component
    const { onSelect } = props;


    // prop.children is set by react, we get this on all components, it will pull any content in between tags
    return <li><button onClick={onSelect}>{props.children}</button></li>


}