import styles from './ExamplePanel.module.scss'
import StandardParent from "../StandardParent/StandardParent";

const ExamplePanel = (props) => {
    // https://medium.com/@akashshukla_1715/preventing-unnecessary-rerendering-of-child-components-in-react-using-usecallback-and-react-memo-34f1423fe263#:~:text=To%20address%20this%20issue%2C%20React,components%20within%20a%20parent%20component.
    // https://codesandbox.io/s/elated-resonance-i86qql?file=/src/App.js

    const now = Date.now();

    return (
        <div className={styles.container}>
            <h1>ExamplePanel</h1>
            <div>
                Time: {now}
            </div>
            <StandardParent></StandardParent>
        </div>
    )
}

export default ExamplePanel;
