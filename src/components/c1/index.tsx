// 模块化引入
import Styles from "./C1.module.scss"

const C1 = () => {
    return (
        <div className={Styles.box}>
            <p>这是组件1</p>
        </div>
    )
}

export default C1