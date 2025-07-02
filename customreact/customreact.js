//creating my own element
function customRender(reactElementss, container) {
    // const domElement = document.createElement(reactElementss.type);
    // domElement.innerHTML = reactElementss.children
    // domElement.setAttribute("href",reactElementss.props.href)
    // domElement.setAttribute("target", reactElementss.props.target)
    // container.appendChild(domElement)
    const domElement = document.createElement(reactElementss.type)
    domElement.innerHTML = reactElementss.children
    for (const prop in reactElementss.props) {
        if (prop === 'children') continue;
        //props key should be childern
        domElement.setAttribute(prop,reactElementss.props[prop])
    }
    container.appendChild(domElement)
}
//const el = <h1 className="title">Hello</h1>;
//js behind this
// React doesn't directly render JSX. Instead, JSX is converted to these element objects using React.createElement
const reactElementss={
    type: "a",
    props: {
    href: "https://google.com",
    target: '_blank'
    },
    children: "CLick me to visit google"
}
//element type props

const mainContainer = document.querySelector("#root")

customRender(reactElementss,mainContainer)